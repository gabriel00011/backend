module.exports = {
  apps: [{
    name: "sever",
    script: "./server.js",
    watch: true,
    exec_mode: "cluster",
  }]
}
