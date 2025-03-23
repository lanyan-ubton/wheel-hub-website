<!--
  关于我们页面组件
  
  展示公司信息，包含以下主要部分：
  - 公司历史、愿景和使命
  - 公司核心价值观
  - 领导团队介绍
-->

<template>
  <!-- 关于页面容器 -->
  <div class="about">
    <div class="container">
      <!-- 页面标题，使用国际化文本 -->
      <h1 class="page-title">{{ $t('about.title') }}</h1>
      
      <!-- 公司介绍内容区域 -->
      <div class="about-content">
        <el-row :gutter="30">
          <!-- 左侧公司图片 -->
          <el-col :span="12">
            <div class="about-image">
              <img :src="getImageUrl('/images/company.jpg')" alt="Company Image">
            </div>
          </el-col>
          <!-- 右侧公司文字介绍 -->
          <el-col :span="12">
            <div class="about-text">
              <!-- 公司历史 -->
              <h2>{{ $t('about.history') }}</h2>
              <p>Founded in 1995, Wheel Hub Co. has grown from a small local manufacturer to a global leader in wheel hub production. With over 25 years of experience, we've continuously innovated and improved our manufacturing processes.</p>
              
              <!-- 公司愿景 -->
              <h2>{{ $t('about.vision') }}</h2>
              <p>Our vision is to be the world's most trusted supplier of wheel hubs, known for quality, reliability, and innovation.</p>
              
              <!-- 公司使命 -->
              <h2>{{ $t('about.mission') }}</h2>
              <p>We are committed to providing the highest quality wheel hubs that exceed industry standards, while maintaining competitive pricing and exceptional customer service.</p>
            </div>
          </el-col>
        </el-row>
      </div>
      
      <!-- 公司核心价值观区域 -->
      <div class="company-values section">
        <h2 class="section-title">Our Core Values</h2>
        <el-row :gutter="20">
          <!-- 遍历核心价值观卡片 -->
          <el-col :span="8" v-for="value in companyValues" :key="value.title">
            <el-card class="value-card">
              <!-- 使用 Element Plus 图标组件 -->
              <el-icon class="value-icon" :size="40">
                <component :is="value.icon" />
              </el-icon>
              <h3>{{ value.title }}</h3>
              <p>{{ value.description }}</p>
            </el-card>
          </el-col>
        </el-row>
      </div>
      
      <!-- 领导团队区域 -->
      <div class="team section">
        <h2 class="section-title">Our Leadership Team</h2>
        <el-row :gutter="20">
          <!-- 遍历团队成员卡片 -->
          <el-col :span="6" v-for="member in teamMembers" :key="member.name">
            <el-card class="team-card">
              <img :src="getImageUrl(member.photo)" :alt="member.name">
              <h3>{{ member.name }}</h3>
              <p class="position">{{ member.position }}</p>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script setup>
// 导入所需的工具和组件
import { getImageUrl } from '../utils/imageUrl'  // 图片 URL 处理工具
import { ref } from 'vue'                       // Vue 响应式 API
import { Check, Star, Connection } from '@element-plus/icons-vue' // Element Plus 图标

/**
 * 公司核心价值观数据
 * 包含三个核心价值：
 * - 质量
 * - 创新
 * - 诚信
 */
const companyValues = ref([
  {
    icon: Check,
    title: 'Quality',
    description: 'We never compromise on quality, ensuring every product meets our rigorous standards.'
  },
  {
    icon: Star,
    title: 'Innovation',
    description: 'Constantly improving our products and processes to stay at the forefront of the industry.'
  },
  {
    icon: Connection,
    title: 'Integrity',
    description: 'Honest and ethical business practices in all our dealings with customers and partners.'
  }
])

/**
 * 领导团队成员数据
 * 包含四位核心团队成员：
 * - CEO
 * - CTO
 * - 生产总监
 * - 销售总监
 */
const teamMembers = ref([
  {
    name: 'John Smith',
    position: 'CEO',
    photo: '/images/team1.jpg'
  },
  {
    name: 'Sarah Johnson',
    position: 'CTO',
    photo: '/images/team2.jpg'
  },
  {
    name: 'Michael Wong',
    position: 'Production Director',
    photo: '/images/team3.jpg'
  },
  {
    name: 'Lisa Chen',
    position: 'Sales Director',
    photo: '/images/team4.jpg'
  }
])
</script>

<style lang="scss" scoped>
// 关于页面容器样式
.about {
  padding: 2rem 0;                       // 上下内边距
}

// 公司介绍内容区域样式
.about-content {
  margin-bottom: 3rem;                   // 底部外边距
}

// 公司图片样式
.about-image {
  img {
    width: 100%;                         // 宽度填充
    border-radius: 8px;                  // 圆角
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1); // 阴影效果
  }
}

// 公司文字介绍样式
.about-text {
  // 标题样式
  h2 {
    color: var(--secondary-color);       // 使用次要颜色
    margin-top: 1.5rem;                  // 顶部外边距
    margin-bottom: 1rem;                 // 底部外边距
    
    // 第一个标题无顶部外边距
    &:first-child {
      margin-top: 0;
    }
  }
  
  // 段落样式
  p {
    margin-bottom: 1.5rem;               // 底部外边距
    line-height: 1.8;                    // 行高
  }
}

// 区域标题样式
.section-title {
  text-align: center;                    // 文本居中
  margin-bottom: 2rem;                   // 底部外边距
  color: var(--secondary-color);         // 使用次要颜色
}

// 价值观卡片样式
.value-card {
  text-align: center;                    // 文本居中
  padding: 2rem;                         // 内边距
  height: 100%;                          // 高度填充
  
  // 图标样式
  .value-icon {
    color: var(--primary-color);         // 使用主色
    margin-bottom: 1rem;                 // 底部外边距
  }
  
  // 标题样式
  h3 {
    margin-bottom: 1rem;                 // 底部外边距
  }
}

// 团队成员卡片样式
.team-card {
  text-align: center;                    // 文本居中
  margin-bottom: 2rem;                   // 底部外边距
  
  // 成员照片样式
  img {
    width: 150px;                        // 固定宽度
    height: 150px;                       // 固定高度
    border-radius: 50%;                  // 圆形
    object-fit: cover;                   // 图片填充方式
    margin: 0 auto 1rem;                 // 居中并添加底部外边距
  }
  
  // 成员姓名样式
  h3 {
    margin-bottom: 0.5rem;               // 底部外边距
  }
  
  // 职位样式
  .position {
    color: var(--primary-color);         // 使用主色
    font-weight: 500;                    // 字体粗细
  }
}
</style>