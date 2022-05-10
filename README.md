# Finder

The Finder is a tool to search through blocks, transactions, and accounts on the blockchain.

## Project setup
```
npm install
```

### Configure the environement variables

If required, edit `.env.development`.
For local development you might want to use this configuration:

```
BASE_DENOM=ugnc
ADDRESS_PREFIX=gnc
HOST=localhost
HTTPS=false
BROWSER=none
REACT_APP_DEFAULT_NETWORK=local
```

`REACT_APP_DEFAULT_NETWORK` is the default selected network that finder will use.
See `public/chains.json` for the list of available networks.


### Compiles and hot-reloads for development
```
npm start
```
