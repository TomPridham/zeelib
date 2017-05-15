import test from 'tape'
import stripSubdomain from './stripSubdomain'

test('stripSubdomain', (t) => {
  t.equal(stripSubdomain('foo.me.bar.baz'), 'me.bar.baz', 'strips subdomain')
  t.equal(stripSubdomain('foo.bar'), 'foo.bar', 'does not strip just domain')
  t.end()
})
