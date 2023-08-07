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
  transpileDependencies: ['vuetify'],

  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: routesPrerender,
      useRenderEvent: true,
      headless: false,
      onlyProduction: false,
    },
  },
}
