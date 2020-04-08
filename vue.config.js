module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  chainWebpack: config => {
    // Ignore static api json files for production &amp; test build
    if (process.env.NODE_ENV === 'production') {
      config.plugin('copy').tap(options => {
        let ignore='data/**/*';
        options[0][0].ignore.push(ignore);
        console.log("\x1b[36m%s\x1b[0m",`ИГНОРИРУЕТСЯ В СБОРКЕ:${ignore}`);
        return options
      })
    }
  }
}
