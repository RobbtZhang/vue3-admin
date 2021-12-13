import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
// 初始化样式表
import '@/styles/index.scss'
// 导入 svgIcon
import installIcons from '@/icons/index.js'

import i18n from '@/i18n'

import './permission'
import installFilter from '@/filters'

const app = createApp(App)
installFilter(app)
installElementPlus(app)
installIcons(app)
app.use(store).use(router).use(i18n).mount('#app')
