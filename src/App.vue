<!--
  根组件 App.vue
  
  这是整个应用的根组件，负责：
  1. 提供基础布局结构
  2. 处理路由视图的切换动画
  3. 集成主布局组件
-->

<template>
  <!-- 使用主布局组件包裹整个应用 -->
  <MainLayout>
    <!-- 路由视图容器 -->
    <router-view v-slot="{ Component }">
      <!-- 动态渲染当前路由对应的组件 -->
      <component :is="Component" :key="$route.fullPath" />
    </router-view>
  </MainLayout>
</template>

<script setup>
// 导入主布局组件
import MainLayout from '@/layouts/MainLayout.vue'
</script>

<style>
</style>