<!--
  产品页面组件
  
  展示公司所有产品，包含以下功能：
  - 产品分类过滤
  - 产品列表展示
  - 加载状态和错误处理
  - 通过API从后端获取产品数据
-->

<template>
  <!-- 产品页面容器 -->
  <div class="products">
    <div class="container">
      <!-- 页面标题，使用国际化文本 -->
      <h1 class="page-title">{{ $t('products.title') }}</h1>
      
      <!-- 过滤和产品展示区域 -->
      <div class="filter-section">
        <el-row :gutter="20">
          <!-- 左侧过滤面板 -->
          <el-col :span="6">
            <el-card class="filter-card">
              <!-- 分类标题 -->
              <h3>{{ $t('products.categories') }}</h3>
              <!-- 分类选择按钮组 -->
              <el-radio-group v-model="selectedCategory" @change="filterProducts">
                <!-- 所有产品选项 -->
                <el-radio-button label="all">{{ $t('products.allProducts') }}</el-radio-button>
                <!-- 动态生成分类选项 -->
                <el-radio-button v-for="category in categories" :key="category" :label="category">
                  {{ category }}
                </el-radio-button>
              </el-radio-group>
            </el-card>
          </el-col>
          
          <!-- 右侧产品展示区域 -->
          <el-col :span="18">
            <!-- 加载状态显示 -->
            <div v-if="isLoading" class="loading-container">
              <!-- 使用骨架屏组件模拟加载中的内容 -->
              <el-skeleton :rows="3" animated />
              <el-skeleton :rows="3" animated />
              <el-skeleton :rows="3" animated />
            </div>
            
            <!-- 错误状态显示 -->
            <el-alert
              v-else-if="error"
              :title="error"
              type="error"
              :closable="false"
              show-icon
            />
            
            <!-- 产品列表展示 -->
            <el-row v-else :gutter="20">
              <!-- 遍历过滤后的产品列表 -->
              <el-col :span="8" v-for="product in filteredProducts" :key="product.id">
                <!-- 产品卡片 -->
                <el-card class="product-card">
                  <!-- 产品图片 -->
                  <img :src="getImageUrl(product.image)" :alt="product.name">
                  <!-- 产品信息 -->
                  <div class="product-info">
                    <h3>{{ product.name }}</h3>
                    <p class="product-category">{{ product.category }}</p>
                    <p>{{ product.description }}</p>
                    <p class="product-price">${{ product.price }}</p>
                    <el-button type="primary">View Details</el-button>
                  </div>
                </el-card>
              </el-col>
              
              <!-- 没有找到产品时的空状态提示 -->
              <el-col :span="24" v-if="filteredProducts.length === 0">
                <el-empty description="No products found" />
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script setup>
// 导入所需的 Vue 功能和工具
import { ref, computed, onMounted } from 'vue'  // Vue 组合式 API
import axios from 'axios'                       // HTTP 客户端
import { getImageUrl } from '../utils/imageUrl' // 图片 URL 处理工具

/**
 * 响应式状态定义
 */
const selectedCategory = ref('all')   // 当前选中的产品分类
const categories = ref([])            // 产品分类列表
const products = ref([])              // 产品数据列表
const isLoading = ref(true)           // 加载状态标志
const error = ref(null)               // 错误信息

/**
 * 从后端 API 获取产品数据
 * 
 * 获取所有产品并提取唯一的产品分类
 */
const fetchProducts = async () => {
  isLoading.value = true
  try {
    // 发送 GET 请求到产品 API
    const response = await axios.get('http://localhost:3001/api/products')
    if (response.data.success) {
      // 保存产品数据
      products.value = response.data.data
      
      // 提取唯一的产品分类
      const uniqueCategories = [...new Set(products.value.map(product => product.category))]
      categories.value = uniqueCategories
    } else {
      error.value = 'Failed to load products'
    }
  } catch (err) {
    console.error('Error fetching products:', err)
    error.value = 'Failed to load products. Please try again later.'
  } finally {
    isLoading.value = false
  }
}

/**
 * 组件挂载时加载产品数据
 */
onMounted(() => {
  fetchProducts()
})

/**
 * 计算属性：根据选中的分类过滤产品
 * 
 * @returns {Array} 过滤后的产品列表
 */
const filteredProducts = computed(() => {
  if (selectedCategory.value === 'all') {
    return products.value  // 返回所有产品
  } else {
    // 返回与所选分类匹配的产品
    return products.value.filter(product => product.category === selectedCategory.value)
  }
})

/**
 * 处理分类变更
 * 
 * @param {string} category - 选中的分类
 */
const filterProducts = (category) => {
  selectedCategory.value = category
}
</script>

<style lang="scss" scoped>
// 产品页面容器样式
.products {
  padding: 2rem 0;                     // 上下内边距
}

// 过滤区域样式
.filter-section {
  margin-top: 2rem;                    // 顶部外边距
}

// 过滤卡片样式
.filter-card {
  margin-bottom: 1rem;                 // 底部外边距
  
  // 标题样式
  h3 {
    margin-bottom: 1rem;               // 底部外边距
  }
  
  // 单选按钮组样式
  .el-radio-group {
    display: flex;                     // 弹性布局
    flex-direction: column;            // 垂直排列
    gap: 10px;                         // 按钮间距
  }
}

// 加载容器样式
.loading-container {
  padding: 1rem;                       // 内边距
}

// 产品卡片样式
.product-card {
  margin-bottom: 2rem;                 // 底部外边距
  transition: transform 0.3s ease;     // 变换动画
  height: 100%;                        // 高度填充
  display: flex;                       // 弹性布局
  flex-direction: column;              // 垂直排列
  
  // 悬停效果
  &:hover {
    transform: translateY(-5px);       // 上移动画
  }
  
  // 产品图片样式
  img {
    width: 100%;                       // 宽度填充
    height: 200px;                     // 固定高度
    object-fit: cover;                 // 图片填充方式
  }
  
  // 产品信息容器样式
  .product-info {
    padding: 1rem 0;                   // 上下内边距
    flex-grow: 1;                      // 填充剩余空间
    display: flex;                     // 弹性布局
    flex-direction: column;            // 垂直排列
    
    // 产品标题样式
    h3 {
      margin-bottom: 0.5rem;           // 底部外边距
    }
    
    // 产品分类样式
    .product-category {
      color: var(--primary-color);     // 使用主色
      font-weight: bold;               // 粗体
      margin-bottom: 0.5rem;           // 底部外边距
    }
    
    // 产品价格样式
    .product-price {
      font-weight: bold;               // 粗体
      font-size: 1.2rem;               // 字体大小
      margin-bottom: 1rem;             // 底部外边距
    }
    
    // 产品描述样式
    p {
      margin-bottom: 1rem;             // 底部外边距
    }
    
    // 按钮样式
    .el-button {
      margin-top: auto;                // 自动顶部外边距，推到底部
    }
  }
}
</style>