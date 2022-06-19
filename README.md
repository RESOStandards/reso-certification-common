# RESO Certification Common Library
NodeJS Package Containing Common Certification Functions

## Usage
For examples, see `test/utils.js`.

For `utils.encryption` utilities, the assumption is that the client 
would either have `CONFIG_FILE_SHARED_SECRET` defined in .env or 
explicitly pass a shared secret, for example:

```
secretKey = utils.encryption.createSecretKey("ohai");
utils.encryption.encryptSync(<string to encrypt>, { secretKey });
```

An exception will be thrown unless a non-zero length secretKey is present.