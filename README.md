# watch-pid

Continuously calls `process.kill` with the specified pid and a signal of `0` to test the existance of a process with the corresponding pid. Repeats with a default delay of `1500` ms.

## usage

```javascript
const watch = require(`watch-pid`)

watch(42, pid => {
  console.log(`Process with pid: ${pid} exited`)
})
```

## api

### `watch(pid, callback[, delay])`

`pid` - process identifier

`callback` - called with the pid when the process no longer exists.

`delay` - delay between tests.
