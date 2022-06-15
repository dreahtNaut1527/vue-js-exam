import Vue from 'vue'
import App from './App.vue'
import moment from 'moment'
import VModal from 'vue-js-modal'
import VToast from 'vue-toastification'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Swal from 'sweetalert2'

import 'vue-toastification/dist/index.css'

Vue.config.productionTip = false

Vue.prototype.moment = moment
Vue.prototype.Swal = Swal

Vue.use(VModal)
Vue.use(VToast, {transition: 'Vue-Toastification__bounce', maxToasts: 20, newestOnTop: true})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
