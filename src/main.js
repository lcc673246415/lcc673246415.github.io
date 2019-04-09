import Vue from 'vue'
import App from './App.vue'
import router from './router'





import { Navbar, TabItem,TabContainer,TabContainerItem,Radio } from 'mint-ui';
import { Button } from 'mint-ui';

Vue.component(Button.name, Button)

Vue.component(Radio.name, Radio);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);

Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);


import { Picker } from 'mint-ui';

Vue.component(Picker.name, Picker);
import { Popup } from 'mint-ui';


Vue.component(Popup.name, Popup);


import { Checklist } from 'mint-ui';

Vue.component(Checklist.name, Checklist);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
