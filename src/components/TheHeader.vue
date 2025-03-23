<!--
  页面头部组件
  
  实现网站顶部导航栏，包含：
  - 网站标志
  - 导航菜单
  - 语言切换器
-->

<template>
  <!-- 头部容器 -->
  <header class="header">
    <div class="container header-content">
      <!-- 网站标志，点击跳转到首页 -->
      <router-link to="/" class="logo">
        <h1>Wheel Hub Co.</h1>
      </router-link>
      
      <!-- 导航菜单 -->
      <nav class="nav-menu">
        <!-- 遍历导航项目，生成导航链接 -->
        <router-link v-for="item in navItems" 
                     :key="item.path" 
                     :to="item.path" 
                     custom
                     v-slot="{ navigate, isExactActive }">
          <a href="#" 
             @click.prevent="() => navigate(item.path)"
             class="nav-link"
             :class="{ 'router-link-active': isExactActive }">
            <!-- 使用国际化翻译导航项目名称 -->
            {{ $t(`nav.${item.name.toLowerCase()}`) }}
          </a>
        </router-link>
      </nav>
      
      <!-- 语言切换下拉菜单 -->
      <div class="language-switcher">
        <select v-model="currentLanguage" @change="changeLanguage" class="language-select">
          <option value="en">English</option>
          <option value="zh">中文</option>
        </select>
      </div>
    </div>
  </header>
</template>

<script setup>
// 导入所需的 Vue 和插件功能
import { ref } from 'vue'                         // 响应式状态
import { useI18n } from 'vue-i18n'                // 国际化功能
import { useLanguageStore } from '@/store/languageStore' // 语言状态管理

// 初始化国际化功能
const { t, locale } = useI18n()
// 获取语言状态管理 store
const languageStore = useLanguageStore()
// 创建响应式的当前语言变量，初始值从 store 中获取
const currentLanguage = ref(languageStore.currentLanguage)

/**
 * 导航菜单项配置
 * 每个项目包含名称和路径
 */
const navItems = [
  { name: 'Home', path: '/' },           // 首页
  { name: 'Products', path: '/products' }, // 产品页
  { name: 'About', path: '/about' },      // 关于页
  { name: 'Contact', path: '/contact' },  // 联系页
]

/**
 * 切换语言的处理函数
 * 
 * 当语言选择器值改变时触发
 */
const changeLanguage = () => {
  const lang = currentLanguage.value
  locale.value = lang       // 更新 i18n 的当前语言
  languageStore.setLanguage(lang) // 更新 store 中的语言设置
  
  // 强制重新渲染组件以应用新语言
  // 添加一个短暂的加载状态
  document.body.classList.add('language-changing')
  
  // 使用setTimeout确保DOM有时间更新
  setTimeout(() => {
    document.body.classList.remove('language-changing')
  }, 100)
}
</script>

<style lang="scss" scoped>
// 头部容器样式
.header {
  background-color: white;                 // 白色背景
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); // 轻微阴影效果
  position: fixed;                         // 固定定位
  top: 0;                                  // 固定在顶部
  left: 0;                                 // 左边缘对齐
  right: 0;                                // 右边缘对齐
  z-index: 1000;                           // 确保显示在其他元素之上
}

// 头部内容布局
.header-content {
  display: flex;                          // 弹性布局
  justify-content: space-between;         // 子元素两端对齐
  align-items: center;                    // 子元素垂直居中
  padding: 1rem 0;                        // 上下内边距
}

// 网站标志样式
.logo {
  text-decoration: none;                  // 移除下划线
  color: var(--secondary-color);          // 使用次要颜色
  
  h1 {
    font-size: 1.5rem;                    // 标题字体大小
    font-weight: bold;                    // 粗体
  }
}

// 导航菜单样式
.nav-menu {
  display: flex;                          // 水平排列导航项
  gap: 2rem;                              // 导航项之间的间距
}

// 导航链接样式
.nav-link {
  text-decoration: none;                  // 移除下划线
  color: var(--text-color);               // 使用文本颜色
  font-weight: 500;                       // 中等粗细
  transition: color 0.3s ease;            // 颜色过渡动画
  
  &:hover {
    color: var(--primary-color);          // 悬停时使用主色
  }
  
  &.router-link-active {
    color: var(--primary-color);          // 当前活动页面的链接使用主色
  }
}

// 语言切换器样式
.language-switcher {
  min-width: 100px;                       // 最小宽度
  
  .language-select {
    padding: 8px 12px;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    background-color: white;
    font-size: 14px;
    color: #606266;
    cursor: pointer;
    outline: none;
    transition: border-color 0.2s;
    
    &:hover, &:focus {
      border-color: var(--primary-color);
    }
  }
}
</style>