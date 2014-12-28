module.exports = distort

function distort(res, map) {
  var _write = res.write
  var _end   = res.end
  var buffer = []

  res.write = write
  res.end = end

  function write(data) {
    buffer.push(data)
    return true
  }

  function end(data) {
    if (data) buffer.push(data)
    map(buffer.join(''), onMapped)
  }

  function onMapped(err, mapped) {
    if (err) return res.emit('error', err)

    _write.call(res, mapped)
    _end.call(res)
  }
}
