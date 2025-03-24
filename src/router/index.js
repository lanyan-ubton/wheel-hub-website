/**
 * 路由配置文件
 * 
 * 该文件定义了应用的路由结构，包括路径、名称和对应的组件
 * 使用了 Vue Router 的懒加载功能，提高应用性能
 */

// 导入 Vue Router 的核心函数
import { createRouter, createWebHistory } from 'vue-router'

// 直接导入所有页面组件
import Home from '@/pages/Home.vue'
import Products from '@/pages/Products.vue'
import About from '@/pages/About.vue'
import Contact from '@/pages/Contact.vue'

/**
 * 路由配置数组
 * 
 * 每个路由对象包含：
 * - path: 路由路径
 * - name: 路由名称，用于编程式导航
 * - component: 对应的页面组件
 */
const routes = [
  {
    path: '/',           // 首页路径
    name: 'Home',        // 路由名称
    component: Home,     // 首页组件
  },
  {
    path: '/products',   // 产品页路径
    name: 'Products',    // 路由名称
    component: Products, // 产品页组件
  },
  {
    path: '/about',      // 关于页路径
    name: 'About',       // 路由名称
    component: About,    // 关于页组件
  },
  {
    path: '/contact',    // 联系页路径
    name: 'Contact',     // 路由名称
    component: Contact,  // 联系页组件
  }
]

/**
 * 创建路由实例
 * 
 * 使用 HTML5 History 模式，提供更好的 URL 格式
 * 而非默认的 hash 模式 (#)
 */
const router = createRouter({
  history: createWebHistory(), // 使用 HTML5 History API
  routes,                      // 路由配置
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

// 全局前置守卫
router.beforeEach((to, from, next) => {
  // 所有路由直接放行
  next()
})

// 导出路由实例供 main.js 使用
export default router