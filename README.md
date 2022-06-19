# RESO Certification Common Library
NodeJS Package Containing Common Certification Functions

# Installation
To install from GitHub:

```
npm i RESOStandards/reso-certification-common
```

## Usage
For examples, see [`test/utils.js`](./test/utils.js).

For `utils.encryption` utilities, the assumption is that the client 
would either have `CONFIG_FILE_SHARED_SECRET` defined in .env or 
explicitly pass a shared secret, for example:

```
$ node
Welcome to Node.js v15.0.1.
Type ".help" for more information.
> const { utils } = require("@reso/reso-certification-common");
> const secretKey = utils.encryption.createSecretKey("ohai");
> const encrypted = utils.encryption.encryptSync("yo", { secretKey });
> console.log(utils.encryption.decryptSync(encrypted, { secretKey }));
yo
```

An exception will be thrown unless a non-zero length secretKey is present.

## Tests
To run the tests, clone the repository:
```
git clone https://github.com/RESOStandards/reso-certification-common.git
```

Then change into the directory and run:
```
npm i
```

Finally:

```
npm test
```
