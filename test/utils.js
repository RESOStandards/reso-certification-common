const assert = require("assert");
const compression = require("../utils/compression");
const encryption = require("../utils/encryption");

const TEST_STRING = "ohai";
const TEST_SECRET_KEY = encryption.createSecretKey("yo");
const INCORRECT_SECRET_KEY = encryption.createSecretKey("incorrect secret key");

describe("Compress and Decompress", function () {
  it("should compress and decompress a string and get the same result", function () {
    assert.equal(compression.decompressSync(compression.compressSync(TEST_STRING)), TEST_STRING);
  });
});

describe("Encrypt and Decrypt", function () {
  it("should throw an error when no encryption secret is passed", function () {
    assert.throws(() =>
      encryption.decryptSync(encryption.encryptSync(TEST_STRING, { secretKey: "" }), {
        secretKey: TEST_SECRET_KEY,
      }),
      TEST_STRING
    );
  });

  it("should throw an error when no decryption secret is passed", function () {
    assert.throws(() =>
      encryption.decryptSync(encryption.encryptSync(TEST_STRING, { secretKey: TEST_SECRET_KEY }), {
        secretKey: "",
      }),
      TEST_STRING
    );
  });

  it("should have an encrypted string that's different from the test string", function() {
    assert.notEqual(encryption.encryptSync(TEST_STRING, { secretKey: TEST_SECRET_KEY }), TEST_STRING);
  });

  it("should encrypt and decrypt a string, without compression, and get the same result", function () {
    assert.equal(
      encryption.decryptSync(
        encryption.encryptSync(TEST_STRING, { compression: false, secretKey: TEST_SECRET_KEY }),
        { compression: false, secretKey: TEST_SECRET_KEY }
      ),
      TEST_STRING
    );
  });

  it("should encrypt and decrypt a string, with compression, and get the same result", function () {
    assert.equal(
      encryption.decryptSync(encryption.encryptSync(TEST_STRING, { secretKey: TEST_SECRET_KEY }), {
        secretKey: TEST_SECRET_KEY,
      }),
      TEST_STRING
    );
  });

  it("should fail decrypting an encrypted string, without compression, using a different secret key text", function() {
    assert.throws(() => 
      encryption.decryptSync(
        encryption.encryptSync(TEST_STRING, { compression: false, secretKey: TEST_SECRET_KEY }),
        { compression: false, secretKey: INCORRECT_SECRET_KEY }
      )
    );
  });

  it("should fail decrypting an encrypted string, with compression, using a different secret key text", function () {
    assert.throws(() => 
      encryption.decryptSync(encryption.encryptSync(TEST_STRING, { secretKey: TEST_SECRET_KEY }), {
        secretKey: INCORRECT_SECRET_KEY,
      })
    );
  });
});
