const PrerenderPlugin = require('@prerenderer/webpack-plugin')
const PuppeteerRenderer = require('@prerenderer/renderer-puppeteer')

const routesPrerender = [
  '/',
  '/calendar/calendar',
  '/cards/treners',
  '/cards/gordost',
  '/partners/partners',
  '/antidoping/antidoping',
  '/raspisanie/raspisanieSHOR',
  '/raspisanie/raspisaniePOSP',
  '/raspisanie/raspisanieTEMP',
  '/raspisanie/raspisaniePITON',
  '/raspisanie/raspisanieSINGITAY',
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
  '/cards/rukovodstvo',
]

module.exports = {
  devServer: {
    client: {
      overlay: {
        runtimeErrors: (error) => {
          if (error.message === 'ResizeObserver loop completed with undelivered notifications.') {
            return false
          }
          return true
        },
      },
    },
  },

  chainWebpack: (config) => {
    // Ignore static api json files for dev build
    if (process.env.NODE_ENV !== 'production') {
      config.plugin('copy').tap((args) => {
        const pattern = args[0].patterns[0]
        if (!pattern.globOptions) pattern.globOptions = {}
        if (!pattern.globOptions.ignore) pattern.globOptions.ignore = []
        pattern.globOptions.ignore.push('**/data/**')
        pattern.globOptions.ignore.push('**/img/**')
        console.log('\x1b[36m%s\x1b[0m', 'ИГНОРИРУЕТСЯ В СБОРКЕ: data/**, img/**')
        return args
      })
    }

    if (process.env.NODE_ENV === 'production') {
      config.plugin('pre-render').use(PrerenderPlugin, [
        {
          routes: routesPrerender,
          renderer: new PuppeteerRenderer({
            renderAfterDocumentEvent: 'x-app-rendered',
            executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
            headless: true,
          }),
        },
      ])
    }
  },
}
