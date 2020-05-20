const routesPrerender=[
'/',
'/calendar/calendar',
'/cards/treners',
'/cards/gordost',
'/partners/partners',
'/raspisanie/raspisanieSHOR',
'/raspisanie/raspisaniePOSP',
'/raspisanie/raspisanieTEMP',
'/raspisanie/raspisanieVEGA',
'/raspisanie/raspisaniePARTIZAN',
'/raspisanie/raspisanieBER',
'/raspisanie/raspisanieCHER',
'/raspisanie/raspisanieFERR',
'/cards/vedushie21',
'/cards/vedushie18',
'/cards/vedushie16',
'/cards/vedushie14',
'/cards/kollegia',
'/rules/rules',
'/cards/rukovodstvo'
];

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],

  chainWebpack: config => {
    // Ignore static api json files for production &amp; test build
    if (process.env.NODE_ENV !== 'production') {
      config.plugin('copy').tap(options => {
        let ignore='data/**/*';
        options[0][0].ignore.push(ignore);
        console.log("\x1b[36m%s\x1b[0m",`ИГНОРИРУЕТСЯ В СБОРКЕ:${ignore}`);
        return options
      })
    }
  },

  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: routesPrerender,
      useRenderEvent: true,
      headless: false,
      onlyProduction: false
    }
  }
}
