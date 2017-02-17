const watch = require(`./watch-pid`)

module.exports = watch.bind(null, process.kill, setTimeout)
