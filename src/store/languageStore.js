/**
 * 语言状态管理模块
 * 
 * 使用 Pinia 管理应用的语言设置状态
 * 提供了获取和设置当前语言的功能
 */

// 导入 Pinia 的 defineStore 函数用于创建 store
import { defineStore } from 'pinia'

/**
 * 创建语言状态管理 store
 * 
 * @param {string} 'language' - store 的唯一标识符
 * @returns {Object} 包含状态和操作方法的 store 实例
 */
export const useLanguageStore = defineStore('language', {
  // 定义状态
  state: () => ({
    currentLanguage: 'en', // 默认语言为英文
  }),

  // 定义操作方法
  actions: {
    /**
     * 设置当前语言
     * @param {string} lang - 要设置的语言代码 ('en' 或 'zh')
     */
    setLanguage(lang) {
      this.currentLanguage = lang
    },
  },
})