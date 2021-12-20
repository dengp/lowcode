import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import api from '@/api'

import '@/styles/index.less'

import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import * as ElIconModules from '@element-plus/icons'
import draggable from 'vuedraggable'

router.beforeEach((to: any, from, next) => {
  /* 路由发生变化修改页面title */
  const title: string = to.meta.title;
  if (title) {
    document.title = title;
  }
  next()
})
const app = createApp(App)
for (const iconName in ElIconModules) {
  if (Reflect.has(ElIconModules, iconName)) {
    const item = ElIconModules[iconName]
    app.component(iconName, item)
  }
}
app.component('draggable', draggable).use((vue) => {
  vue.config.globalProperties.$API = api;
}).use(router).use(ElementPlus).mount('#app')
