const watch = (process, pid, callback, delay = 1500) => {
  setTimeout(() => {
    try {
      process.kill(pid, 0)
      watch(process, pid, callback, delay)
    } catch (error) {
      callback(pid)
    }
  }, delay)
}

module.exports = watch
