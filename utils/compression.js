const zlib = require('zlib');

const DEFAULT_ENCODING = 'base64';

/**
 * Synchronously compresses text data into the given encoding - default is base64
 * TODO: create async version
 * @param {String} text the data to compress
 * @param {Object} options additional configuration params
 * @returns compressed string in the default, or passed, encoding
 */
const compressSync = (text, { encoding = DEFAULT_ENCODING } = {}) =>
  zlib.deflateSync(text).toString(encoding);

/**
 * Synchronously decompresses data stored in the given encoding - default is base64 - and returns it as a string
 * TODO: create async version
 * @param {String} text the data to compress
 * @param {Object} options additional configuration params
 * @returns compressed string in the default, or passed, encoding
 */
const decompressSync = (text, { encoding = DEFAULT_ENCODING } = {}) =>
  zlib.inflateSync(Buffer.from(text, encoding)).toString();

module.exports = {
  compressSync,
  decompressSync
};
