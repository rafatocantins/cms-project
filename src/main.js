import Vue from 'vue'
import router from './router/router'
import vuetify from './plugins/vuetify'
import Vuelidate from 'vuelidate'
import vuefire from './plugins/vuefire'

import App from './App.vue'

Vue.use(Vuelidate)

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  vuefire,
  render: h => h(App)
}).$mount('#app')
