import Vue, {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons
import '../style/global.scss'
import Particles from "particles.vue";

// const app = createApp(App)
// app.use(PrimeVue);
// app.use(ToastService)
// app.component('Button', Button)
// app.component('Toast', Toast)
// app.use(store).use(router).mount('#app')

Vue.config.productionTip = false
Vue.use(PrimeVue)
Vue.use(ToastService);
Vue.component('Toast', Toast)
Vue.component('Button', Button)
Vue.use(Particles);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

