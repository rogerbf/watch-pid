const watch = (kill, setTimeout, pid, callback, delay = 1500) => {
  setTimeout(() => {
    try {
      kill(pid, 0)
      watch(kill, setTimeout, pid, callback, delay)
    } catch (error) {
      callback(pid)
    }
  }, delay)
}

module.exports = watch
