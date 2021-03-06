var outpipe = require('../');
var test = require('tape');
var fs = require('fs');
var path = require('path');
var tmpdir = require('osenv').tmpdir();

test('outfile', function (t) {
    t.plan(2);
    var file = path.join(tmpdir, 'outpipe-' + Math.random());
    var p = outpipe(file);
    p.end('wow');
    
    p.once('exit', function () {
        fs.readFile(file, 'utf8', function (err, src) {
            t.ifError(err);
            t.equal(src, 'wow');
        });
    });
});
