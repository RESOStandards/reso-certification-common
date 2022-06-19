require("dotenv").config();
const { compressSync, decompressSync } = require("./compression");

const crypto = require("crypto");
const ALGORITHM = "aes-256-cbc";

const createSecretKey = (secretText = process.env.CONFIG_FILE_SHARED_SECRET, { base2KeySize = 32 } = {}) => {
  if (!secretText) throw new Error("No secret key text specified in createSecretKey!");
  
  return crypto
  .createHash("sha256")
  .update(String(secretText))
  .digest("base64")
  .substring(0, base2KeySize);
};

const IV_SIZE = 16;

/**
 * Encrypts text data and, optionally, compresses it beforehand
 * TODO: create async version
 * @param {String} text - the data to encrypt
 * @param {Object} options - encryption options, such as compression
 * Defaults to reading secretKey from process.env
 * @returns the encrypted version of the given string
 */
const encryptSync = (text, { useCompression = true, ivSize = IV_SIZE, secretKey = createSecretKey(), textEncoding = "utf-8" } = {}) => {
  const iv = crypto.randomBytes(ivSize);
  const cipher = crypto.createCipheriv(ALGORITHM, secretKey, iv);

  return Buffer.from(JSON.stringify({
    iv: iv.toString("hex"),
    data: 
      Buffer.concat([cipher.update(Buffer.from(useCompression ? compressSync(text) : text, textEncoding)), 
      cipher.final()]).toString("hex"),
  }), textEncoding).toString("base64");
};

/**
 * Decrypts text data and, optionally, decompresses it afterwards
 * TODO: create async version
 * @param {String} text the text to decode, which should be a base64-encoded JSON object with hex-encoded iv and data
 * @param {Object} options decryption options, such as compression. Defaults to reading secretKey from process.env
 * @returns the decrypted version of the given string
 */
const decryptSync = (text, { useCompression = true, ivSize = IV_SIZE, secretKey = createSecretKey(), textEncoding = "utf-8" } = {}) => {
  
  const { iv, data } = JSON.parse(Buffer.from(text, "base64").toString());
  
  const decipher = crypto.createDecipheriv(ALGORITHM, secretKey, Buffer.from(iv, "hex", ivSize));
  const decoded = Buffer.concat([
    decipher.update(Buffer.from(data, "hex")),
    decipher.final(),
  ]);

  return (useCompression ? decompressSync(Buffer.from(decoded, "hex").toString(textEncoding)) : decoded).toString();
};

module.exports = {
  encryptSync,
  decryptSync,
  createSecretKey
};
