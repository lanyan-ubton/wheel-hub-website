<!--
  首页组件
  
  展示公司主页，包含以下主要部分：
  - 英雄区域（Hero Section）：展示公司主标语和副标题
  - 特色功能区域：展示公司三大核心优势
  - 精选产品区域：展示主打产品
-->

<template>
  <!-- 首页容器 -->
  <div class="home">
    <!-- 英雄区域：展示主标语和号召性用语 -->
    <section class="hero">
      <div class="container">
        <!-- 使用国际化文本 -->
        <h1>{{ $t('home.welcome') }}</h1>
        <p>{{ $t('home.subtitle') }}</p>
        <router-link to="/products" class="btn">{{ $t('home.learnMore') }}</router-link>
      </div>
    </section>
    
    <!-- 特色功能区域：展示公司核心优势 -->
    <section class="features section">
      <div class="container">
        <div class="features-grid">
          <!-- 遍历特色功能卡片 -->
          <div class="feature-card" v-for="feature in features" :key="feature.title">
            <!-- 特色功能图标 -->
            <div class="feature-icon">
              {{ feature.icon }}
            </div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- 精选产品区域：展示主打产品 -->
    <section class="latest-products section">
      <div class="container">
        <h2 class="section-title">{{ $t('featuredProducts.title') }}</h2>
        <!-- 产品网格布局 -->
        <div class="products-grid">
          <div v-for="product in featuredProducts" :key="product.id" class="product-card">
            <!-- 使用工具函数处理图片URL -->
            <img :src="getImageUrl(product.image)" :alt="product.translatedName">
            <h3>{{ product.translatedName }}</h3>
            <p>{{ product.translatedDescription }}</p>
            <button class="btn">{{ $t('featuredProducts.learnMore') }}</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// 导入所需的 Vue 功能和工具
import { ref, onMounted } from 'vue'                // Vue 组合式 API
import { useI18n } from 'vue-i18n'                 // 导入 i18n 组合式函数
import { getImageUrl } from '../utils/imageUrl'     // 图片 URL 处理工具

// 初始化 i18n
const { t: $t } = useI18n()

/**
 * 特色功能数据
 * 包含公司三大核心优势：
 * - 质量制造
 * - 行业领导者
 * - 全球配送
 */
const features = ref([
  {
    icon: '⚙️',
    title: 'features.quality.title',
    description: 'features.quality.description'
  },
  {
    icon: '🏆',
    title: 'features.leader.title',
    description: 'features.leader.description'
  },
  {
    icon: '🚚',
    title: 'features.distribution.title',
    description: 'features.distribution.description'
  }
].map(feature => ({
  ...feature,
  title: $t(feature.title),
  description: $t(feature.description)
})))

/**
 * 精选产品数据
 * 展示三个主打产品：
 * - SUV 轮毂
 * - 商用卡车轮毂
 * - 乘用车轮毂
 */
const featuredProducts = ref([
  {
    id: 1,
    name: 'featuredProducts.products.suv.name',
    description: 'featuredProducts.products.suv.description',
    image: '/images/product1.jpg'
  },
  {
    id: 2,
    name: 'featuredProducts.products.truck.name',
    description: 'featuredProducts.products.truck.description',
    image: '/images/product2.jpg'
  },
  {
    id: 3,
    name: 'featuredProducts.products.passenger.name',
    description: 'featuredProducts.products.passenger.description',
    image: '/images/product3.jpg'
  }
].map(product => ({
  ...product,
  translatedName: $t(product.name),
  translatedDescription: $t(product.description)
})))
</script>

<style lang="scss" scoped>
// 英雄区域样式
.hero {
  // 背景图片设置，添加暗色叠加层提高文字可读性
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/hero-bg.jpg');
  background-size: cover;                  // 背景图片填充
  background-position: center;             // 背景图片居中
  height: 80vh;                           // 视口高度的 80%
  display: flex;                          // 弹性布局
  align-items: center;                    // 垂直居中
  text-align: center;                     // 文本居中
  color: white;                           // 文字颜色
  
  // 主标题样式
  h1 {
    font-size: 3rem;                      // 字体大小
    margin-bottom: 1rem;                  // 底部外边距
  }
  
  // 副标题样式
  p {
    font-size: 1.5rem;                    // 字体大小
    margin-bottom: 2rem;                  // 底部外边距
  }
}

// 特色功能区域网格布局
.features-grid {
  display: grid;                          // 网格布局
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); // 响应式列宽
  gap: 2rem;                              // 网格间距
}

// 特色功能卡片样式
.feature-card {
  text-align: center;                     // 文本居中
  padding: 2rem;                          // 内边距
  background: white;                      // 背景色
  border-radius: 8px;                     // 圆角
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); // 阴影效果
  transition: transform 0.3s ease;        // 变换动画
  
  // 悬停效果
  &:hover {
    transform: translateY(-5px);          // 上移动画
  }
  
  // 图标样式
  .feature-icon {
    color: var(--primary-color);          // 使用主色
    margin-bottom: 1rem;                  // 底部外边距
  }
  
  // 标题样式
  h3 {
    margin-bottom: 1rem;                  // 底部外边距
  }
}

// 区域标题样式
.section-title {
  text-align: center;                     // 文本居中
  margin-bottom: 3rem;                    // 底部外边距
  font-size: 2rem;                        // 字体大小
  color: var(--secondary-color);          // 使用次要颜色
}

// 产品网格布局
.products-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

// 产品卡片样式
.product-card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
  
  // 产品图片样式
  img {
    width: 100%;                          // 宽度填充
    height: 200px;                        // 固定高度
    object-fit: cover;                    // 图片填充方式
    margin-bottom: 1rem;                  // 底部外边距
  }
  
  // 内容区域
  h3, p {
    padding: 0 1rem;
  }
  
  // 产品标题样式
  h3 {
    margin-bottom: 0.5rem;                // 底部外边距
  }
  
  // 产品描述样式
  p {
    margin-bottom: 1rem;                  // 底部外边距
  }
  
  // 按钮样式
  .btn {
    margin: 1rem;
    width: calc(100% - 2rem);
  }
}
</style>