# Sometimes you need to package up a web component

when you do, this has rollup

The intent of this project is to provide code for bundling up a wc built from TS but intentionally without minification and all of the rest of the rollup stuff that is much better to apply after the fact, when you bundle up the entire page for deployment on the target browser

## intentionally inadequate instructions:

Too lazy to write this in a more literally correct way, so here's the contextually inadequate version

- search for "fix" and change all `fixme` and `fix-me` and `FixMe` etc to whatever is appropriate for your instance
- add whatever code you need need to your new web component
- `npm run build` and then `npm start` to keep testing your wc until you think it is ready for external deployment
- then set your envirnment variable `export FIXME ../somewhere/wherever` to point to the final destination you wish to deploy it to
- `npm run build` will then deploy to this location
