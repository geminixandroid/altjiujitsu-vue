import { createVuetify } from 'vuetify'
//import Vuetify from 'vuetify/lib'
import colors from 'vuetify/lib/util/colors'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/dist/vuetify.min.css'

export default createVuetify({
  theme: {
    themes: {
      light: {
        primary: '#ffb600', // #E53935
        secondary: colors.red.lighten4, // #FFCDD2
        accent: colors.indigo.base, // #3F51B5
      },
    },
  },
  icons: {
    iconfont: 'mdi', // default - only for display purposes
  },
})
