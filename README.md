# response-distort
![](http://img.shields.io/badge/stability-experimental-orange.svg?style=flat)
![](http://img.shields.io/npm/v/response-distort.svg?style=flat)
![](http://img.shields.io/npm/dm/response-distort.svg?style=flat)
![](http://img.shields.io/npm/l/response-distort.svg?style=flat)

Hooks into an `http.ServerResponse` instance to modify its response body.

Useful, for example, to inject JavaScript into an HTML response.

## Usage

[![NPM](https://nodei.co/npm/response-distort.png)](https://nodei.co/npm/response-distort/)

### distort(res, map(body, done))

Accepts `res`, an instance of
[`http.ServerResponse`](http://nodejs.org/api/http.html#http_class_http_serverresponse),
and `map`, a callback that's called when the response is ready to be modified.

`map`'s first argument is the original response `body`. You should call
`done(null, modifiedBody)` with the updated response body when you're
ready to do so.


``` javascript
const distort = require('response-distort')
const http    = require('http')

http.createServer(function(req, res) {
  distort(res, function(body, done) {
    done(null, body.toUpperCase())
  })

  // handle the response as normal...
}).listen(function() {
  // ...
})
```

## License

MIT. See [LICENSE.md](http://github.com/hughsk/response-distort/blob/master/LICENSE.md) for details.
