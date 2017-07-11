let test = require('tape')
let hashing = require('./')

test('basic sha256, one chunk', t => {
  t.plan(2)
  let stream = hashing('sha256', (err, signature) => {
    t.error(err)
    t.equal('421c76d77563afa1914846b010bd164f395bd34c2102e5e99e0cb9cf173c1d87', signature)
  })
  stream.write(Buffer.from('asdfasdfasdf'))
  stream.end()
})

test('basic multi-chunk', t => {
  t.plan(2)
  let stream = hashing('sha256', (err, signature) => {
    t.error(err)
    t.equal('421c76d77563afa1914846b010bd164f395bd34c2102e5e99e0cb9cf173c1d87', signature)
  })
  stream.write(Buffer.from('asdfas'))
  stream.write(Buffer.from('dfasdf'))
  stream.end()
})
