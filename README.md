This is a demo of adding features to browserify to allow it to recognize its own bundles and consume them more easily. See [substack/node-browserify#1151]( https://github.com/substack/node-browserify/pull/1151).

To run the demo:

* `git clone` this repo
* `cd` into repo dir
* `npm install`
* `sh setup.sh`
* Then
  ```js
  git checkout stock
  node ./bundler

  git checkout pragma
  node ./bundler
  ```

On the `stock` branch the bundler script will be run with stock browserify / dependencies. It should produce a `dist/b.js` bundle that includes the extraneous file `src/b/dependency.js` and error out when attempting to create `dist/c.js`.

On the `pragma` branch it will run a modified version of browserify / dependencies that adds and detects pragmas in bundles. `dist/b.js` should now be created without the extraneous file and `dist/c.js` should be successfully created.
