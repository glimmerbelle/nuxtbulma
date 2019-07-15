
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    metaInfo: {
      title: process.env.npm_package_name || '',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 'http-equiv': 'X-UA-Compatible',  content: 'IE=edge'},
        { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '~assets/images/favicon.png' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500' },
        { rel: 'stylesheet', href: 'href="assets/css/icons.min.css'}
      ],
      script: [
        { src: '~/assets/js/core/jquery.min.js', type: 'text/javascript', body: true },
        { src: '~/assets/js/slick-carousel/slick.min.js', type: 'text/javascript', body: true },
        { src: '~/assets/js/ggpopover/ggtooltip.js', type: 'text/javascript', body: true },
        { src: '~/assets/js/embed/embed.js', type: 'text/javascript', body: true },
        { src: '~/assets/js/vivus/vivus.min.js', type: 'text/javascript', body: true },
        { src: '~/assets/js/scrollreveal/scrollreveal.min.js', type: 'text/javascript', body: true },
        { src: '~/assets/js/main.js', type: 'text/javascript', body: true },
        { src: '~/assets/js/pages/landingv2.js', type: 'text/javascript', body: true },
        
      ],
    }
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: 'blue' },
  /*
  ** Global CSS
  */
  css: [
      '~assets/css/bulma.css',
      '~assets/css/core_deep-blue.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
