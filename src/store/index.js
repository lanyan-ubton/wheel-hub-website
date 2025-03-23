/**
 * Pinia 状态管理配置文件
 * 
 * 创建并导出 Pinia 实例，用于全局状态管理
 * Pinia 是 Vue 3 的官方状态管理库，替代了 Vuex
 */

// 导入 Pinia 的创建函数
import { createPinia } from 'pinia'

// 创建 Pinia 实例
const pinia = createPinia()

// 导出 Pinia 实例供 main.js 使用
export default pinia