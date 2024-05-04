import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVuetify } from 'vuetify'

import App from './App.vue'
import router from './router'

import '@mdi/font/css/materialdesignicons.css'
import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import './scss/main.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(createVuetify({
  defaults: {
    VBtn: {
      variant: 'flat',
    },
  },
  theme: {
    defaultTheme: 'default',
    themes: {
      default: {
        colors: {
          'background': '#e4d7d4',

          'primary': '#9cb0c5',
          'secondary': '#f0a78a',
          'error': '#ff505c',
          'info': '#50d8d7',
          'success': '#b5b944',
          'warning': '#FFC107',
          'white': '#ffffff',
          'gray': '#E9E9E9',
          'gray2': '#828282',

          'font1': '#2a2f3b',
          'font2': '#545861',
          'font3': '#94969c',

          'on-info': '#ffffff',
          'on-success': '#ffffff',
          'on-warning': '#ffffff',
          'on-gray': '#2a2f3b',
          'on-gray2': '#ffffff',
        },

      },
    },
  },
}))

app.mount('#app')
