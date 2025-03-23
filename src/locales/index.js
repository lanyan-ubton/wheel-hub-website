/**
 * 国际化配置文件
 * 
 * 该文件配置了应用的多语言支持，使用 vue-i18n 库实现
 * 目前支持英文和中文两种语言
 */

// 导入 vue-i18n 的创建函数
import { createI18n } from 'vue-i18n'
// 导入英文语言包
import en from './en'
// 导入中文语言包
import zh from './zh'

/**
 * 创建国际化实例
 * 
 * 配置说明：
 * - legacy: false - 使用 Composition API 模式
 * - locale: 'en' - 默认语言为英文
 * - fallbackLocale: 'en' - 如果当前语言没有对应翻译，回退到英文
 * - messages - 包含所有语言的翻译内容
 */
const i18n = createI18n({
  legacy: false,        // 使用 Composition API 模式
  locale: 'en',         // 默认语言设置为英文
  fallbackLocale: 'en', // 回退语言设置为英文
  messages: {           // 语言包配置
    en,                 // 英文翻译
    zh,                 // 中文翻译
  },
})

// 导出国际化实例供 main.js 使用
export default i18n