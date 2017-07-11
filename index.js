let crypto = require('crypto')
let once = require('once')
let through = require('through2')

module.exports = (algo, cb) => {
  cb = once(cb)
  let hasher = crypto.createHash(algo)
  let stream = through((chunk, enc, cb) => {
    hasher.update(chunk, enc)
    cb()
  })
  .on('error', cb)
  .on('finish', () => cb(null, hasher.digest().toString('hex')))
  return stream
}
