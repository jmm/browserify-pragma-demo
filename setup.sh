git checkout --orphan stock

git rm -r --cached .

git add \
node_modules/browserify/index.js \
node_modules/browserify/node_modules/browser-pack/index.js \
node_modules/browserify/node_modules/module-deps/index.js

git commit -m "Stock."

git checkout -b pragma stock

git am --directory=node_modules/browserify 0001-Pragma.patch
