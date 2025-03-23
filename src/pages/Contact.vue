<!--
  联系我们页面组件
  
  提供用户与公司联系的方式，包含以下主要部分：
  - 联系表单：用户可发送消息
  - 联系信息：公司地址、电话和邮箱
  - 全球办公室：展示公司在各地的办公地点
-->

<template>
  <!-- 联系页面容器 -->
  <div class="contact">
    <div class="container">
      <!-- 页面标题，使用国际化文本 -->
      <h1 class="page-title">{{ $t('contact.title') }}</h1>
      
      <!-- 联系信息区域 -->
      <el-row :gutter="30">
        <!-- 联系信息 -->
        <el-col :span="24">
          <div class="contact-info">
            <h2>Contact Information</h2>
            
            <!-- 地址信息 -->
            <div class="info-item">
              <el-icon><Location /></el-icon>
              <div>
                <h3>{{ $t('contact.address') }}</h3>
                <p>123 Wheel Street, Industrial Zone</p>
                <p>Detroit, MI 48201</p>
              </div>
            </div>
            
            <!-- 电话信息 -->
            <div class="info-item">
              <el-icon><Phone /></el-icon>
              <div>
                <h3>{{ $t('contact.phone') }}</h3>
                <p>+1 234 567 890</p>
                <p>+1 987 654 321</p>
              </div>
            </div>
            
            <!-- 邮箱信息 -->
            <div class="info-item">
              <el-icon><Message /></el-icon>
              <div>
                <h3>{{ $t('contact.email') }}</h3>
                <p>info@wheelhub.com</p>
                <p>sales@wheelhub.com</p>
              </div>
            </div>
            
            <!-- 地图容器 -->
            <div class="map-container">
              <h3>Our Location</h3>
              <div class="map-placeholder">
                <img :src="getImageUrl('/images/map.jpg')" alt="Map">
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
      
      <!-- 全球办公室区域 -->
      <div class="global-offices section">
        <h2 class="section-title">Our Global Offices</h2>
        <el-row :gutter="20">
          <!-- 遍历全球办公室卡片 -->
          <el-col :span="8" v-for="office in globalOffices" :key="office.location">
            <el-card class="office-card">
              <h3>{{ office.location }}</h3>
              <p>{{ office.address }}</p>
              <p>{{ office.phone }}</p>
              <p>{{ office.email }}</p>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script setup>
// 导入所需的 Vue 功能和工具
import { ref } from 'vue'                        // Vue 响应式 API
import { getImageUrl } from '../utils/imageUrl'  // 图片 URL 处理工具
import { Location, Phone, Message } from '@element-plus/icons-vue' // Element Plus 图标

/**
 * 全球办公室数据
 * 
 * 包含公司在全球的三个主要办公地点：
 * - 欧洲（德国法兰克福）
 * - 亚洲（中国上海）
 * - 南美（巴西圣保罗）
 */
const globalOffices = ref([
  {
    location: 'Europe',
    address: '45 Industrial Blvd, Frankfurt, Germany',
    phone: '+49 123 456 789',
    email: 'europe@wheelhub.com'
  },
  {
    location: 'Asia',
    address: '789 Manufacturing Road, Shanghai, China',
    phone: '+86 123 4567 8901',
    email: 'asia@wheelhub.com'
  },
  {
    location: 'South America',
    address: '321 Automotive Ave, São Paulo, Brazil',
    phone: '+55 11 9876 5432',
    email: 'southamerica@wheelhub.com'
  }
])
</script>

<style lang="scss" scoped>
// 联系页面容器样式
.contact {
  padding: 2rem 0;                       // 上下内边距
}

// 联系信息样式
.contact-info {
  padding: 2rem;                          // 内边距
  border-radius: 8px;                     // 圆角
  background: white;                      // 白色背景
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1); // 阴影效果
  margin-bottom: 2rem;                    // 底部外边距
  
  // 标题样式
  h2 {
    margin-bottom: 1.5rem;                // 底部外边距
    color: var(--secondary-color);        // 使用次要颜色
  }
}

// 信息项样式
.info-item {
  display: flex;                          // 弹性布局
  margin-bottom: 1.5rem;                  // 底部外边距
  
  // 图标样式
  .el-icon {
    font-size: 1.5rem;                    // 图标大小
    color: var(--primary-color);          // 使用主色
    margin-right: 1rem;                   // 右侧外边距
    margin-top: 0.25rem;                  // 顶部外边距，用于垂直对齐
  }
  
  // 标题样式
  h3 {
    margin-bottom: 0.5rem;                // 底部外边距
    color: var(--secondary-color);        // 使用次要颜色
  }
  
  // 段落样式
  p {
    margin-bottom: 0.25rem;               // 底部外边距
    color: #666;                          // 灰色文本
  }
}

// 地图容器样式
.map-container {
  margin-top: 2rem;                       // 顶部外边距
  
  // 标题样式
  h3 {
    margin-bottom: 1rem;                  // 底部外边距
    color: var(--secondary-color);        // 使用次要颜色
  }
  
  // 地图占位符样式
  .map-placeholder {
    height: 250px;                        // 固定高度
    background-color: #eee;               // 背景色
    border-radius: 4px;                   // 圆角
    overflow: hidden;                     // 隐藏溢出内容
    
    // 地图图片样式
    img {
      width: 100%;                        // 宽度填充
      height: 100%;                       // 高度填充
      object-fit: cover;                  // 图片填充方式
    }
  }
}

// 区域标题样式
.section-title {
  text-align: center;                     // 文本居中
  margin-bottom: 2rem;                    // 底部外边距
  color: var(--secondary-color);          // 使用次要颜色
}

// 办公室卡片样式
.office-card {
  height: 100%;                           // 高度填充
  
  // 标题样式
  h3 {
    margin-bottom: 1rem;                  // 底部外边距
    color: var(--primary-color);          // 使用主色
  }
  
  // 段落样式
  p {
    margin-bottom: 0.5rem;                // 底部外边距
    color: #666;                          // 灰色文本
  }
}
</style>