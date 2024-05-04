import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: {
    'feature-icon': 'dark:bg-secondary-800',
    // 'family-primary': '',
    // 'family-secondary': 'Great Vibes',
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1,
      warn: true,
      prefix: 'i-',
      extraProperties: {
        display: 'inline-block',
      },
    }),
    presetTypography(),
    presetWebFonts(),
  ],
  theme: {
    fontFamily: {
      default: 'Shantell Sans',
      fancy: 'Great Vibes',
    },
    colors: {
      'tw-primary': '#5e5e47',
      'tw-secondary': '#f0a78a',
      'tw-gray': '#A9A9A9',
      'tw-gray2': '#828282',
      'tw-white': '#FFFFFF',

      'tw-error': '#ff505c',
      'tw-info': '#50d8d7',
      'tw-success': '#b5b944',
      'tw-warning': '#FFC107',

      'tw-font1': '#2a2f3b',
      'tw-font2': '#545861',
      'tw-font3': '#94969c',
    },

    breakpoints: {
      sm: '440px',
      md: '640px',
      lg: '960px',
      xl: '1280px',
      xxl: '1440px',
    },
  },

  transformers: [transformerDirectives(), transformerVariantGroup()],
  safelist: 'prose prose-sm m-auto text-left'.split(' '),
})
