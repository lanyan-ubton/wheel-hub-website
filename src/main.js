/**
 * 应用程序入口文件
 * 
 * 该文件负责创建和配置 Vue 应用实例，集成所有必要的插件和功能模块
 */

// 导入全局样式文件
import './style.css'
import './styles/main.scss'

// 从 Vue 核心库导入创建应用的函数
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './locales'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createPinia } from 'pinia'

// 创建 Pinia 实例
const pinia = createPinia()

// 添加全局路由错误处理
router.onError((error) => {
  console.error('路由错误:', error)
  // 移除加载状态
  document.body.classList.remove('page-loading')
})

// 创建 Vue 应用实例
const app = createApp(App)

// 使用插件
app.use(router)
app.use(store)
app.use(i18n)
app.use(ElementPlus)
app.use(pinia)

// 挂载应用
app.mount('#app')

// 开发环境下的性能提示
if (import.meta.env.DEV) {
  console.log('Running in development mode')
}