# Zome Developer Setup

DNA for the `profiles` zome. The actual code for the zome is in `zomes/profiles`.

## Building

```bash
CARGO_TARGET_DIR=target cargo build --release --target wasm32-unknown-unknown
dna-util -c profiles.dna.workdir/
```

## Testing

After having built the DNA:

```bash
cd test
npm install
npm test
```

## Running

After having built the DNA:

```bash
holochain-run-dna profiles.dna.gz
```

Now `holochain` will be listening at port `8888`;
