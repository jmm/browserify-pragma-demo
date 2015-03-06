var
  bify = require('browserify'),
  del = require('del'),
  fs = require('fs');

del(['./dist/{a,b,c}.js', './src/b/a.js'], bundle_a);

function bundle_a () {
  bify({
    entries: ['./src/a/entry'],
    standalone: 'A',
  })
    .bundle(write_bundle(['./dist/a.js', './src/b/a.js'], bundle_b));
}
// bundle_a

function bundle_b () {
  bify({
    entries: ['./src/b/entry']
  })
    .bundle(write_bundle('./dist/b.js', bundle_c));
}
// bundle_b

function bundle_c () {
  bify({
    entries: ['./src/c/entry']
  })
    .bundle(write_bundle('./dist/c.js'));
}
// bundle_c

function write_bundle (dest, cb) {
  if (!Array.isArray(dest)) dest = [dest];
  var pending = dest.length;
  return function (err, src) {
    if (err) throw err;
    dest.forEach(function (path) {
      fs.writeFile(path, src, function () {
        if (cb && !--pending) cb();
      });
    });
  }
}
// write_bundle
