<!--
  主布局组件
  
  提供整个应用的基础布局结构，包括：
  - 顶部导航栏
  - 主要内容区域
  - 底部页脚
-->

<template>
  <!-- 主布局容器 -->
  <div class="main-layout">
    <!-- 顶部导航栏组件 -->
    <TheHeader />
    
    <!-- 主要内容区域，使用 slot 插槽接收子组件内容 -->
    <main class="main-content">
      <slot></slot>
    </main>
    
    <!-- 底部页脚组件 -->
    <TheFooter />
  </div>
</template>

<script setup>
// 导入头部和底部组件
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>

<style lang="scss" scoped>
// 主布局样式
.main-layout {
  display: flex;                // 使用 flex 布局
  flex-direction: column;       // 垂直方向排列
  min-height: 100vh;           // 最小高度为视口高度，确保页面填满屏幕
}

// 主内容区域样式
.main-content {
  flex: 1;                     // 占用剩余空间
  padding-top: 70px;           // 顶部内边距，为固定定位的头部留出空间
}
</style>