const watch = require(`./watch-pid`)

test(`watch`, () => {
  const kill = jest.fn(() => {
    kill.mock.calls.length > 1 &&
    (() => { throw Error(`done`) })()
  })
  const setTimeout = jest.fn(fn => fn())
  const pid = 42
  const callback = jest.fn()
  watch(kill, setTimeout, pid, callback)

  expect(kill).toHaveBeenCalledWith(pid, 0)
  expect(kill).toHaveBeenCalledTimes(2)
  expect(setTimeout).toHaveBeenCalledTimes(2)
  expect(setTimeout.mock.calls[0]).toContain(1500)
  expect(callback).toHaveBeenCalledWith(pid)
})
