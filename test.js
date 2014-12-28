const stest   = require('servertest')
const test    = require('tape')
const http    = require('http')
const distort = require('./')

test('distort', function(t) {
  var server = http.createServer(function(req, res) {
    distort(res, function(body, done) {
      done(null, body.toUpperCase())
    })

    res.write('hello ')
    res.end(new Buffer('world'))
  })

  stest(server, '/', function(err, res) {
    if (err) return t.ifError(err)
    t.equal(String(res.body), 'HELLO WORLD')
    t.end()
  })
})
