<!--
  页面底部组件
  
  实现网站底部区域，包含：
  - 公司简介
  - 快速导航链接
  - 联系信息
  - 版权声明
-->

<template>
  <!-- 底部容器 -->
  <footer class="footer">
    <div class="container">
      <!-- 主要内容区域，分为三个部分 -->
      <div class="footer-content">
        <!-- 公司简介部分 -->
        <div class="footer-section">
          <h3>Wheel Hub Co.</h3>
          <p>Leading manufacturer of high-quality wheel hubs for various vehicles and applications.</p>
        </div>
        
        <!-- 快速导航链接部分 -->
        <div class="footer-section">
          <h3>Quick Links</h3>
          <ul class="footer-links">
            <!-- 遍历导航项目，生成链接列表 -->
            <li v-for="item in navItems" :key="item.path">
              <router-link :to="item.path">
                {{ $t(`nav.${item.name.toLowerCase()}`) }}
              </router-link>
            </li>
          </ul>
        </div>
        
        <!-- 联系信息部分 -->
        <div class="footer-section">
          <h3>Contact</h3>
          <p>123 Wheel Street, Industrial Zone</p>
          <p>Email: info@wheelhub.com</p>
          <p>Phone: +1 234 567 890</p>
        </div>
      </div>
      
      <!-- 底部版权信息 -->
      <div class="footer-bottom">
        <p>&copy; {{ new Date().getFullYear() }} Wheel Hub Co. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
/**
 * 导航菜单项配置
 * 定义页面导航链接，包含名称和路径
 */
const navItems = [
  { name: 'Home', path: '/' },           // 首页
  { name: 'Products', path: '/products' }, // 产品页
  { name: 'About', path: '/about' },      // 关于页
  { name: 'News', path: '/news' },        // 新闻页
  { name: 'Contact', path: '/contact' },  // 联系页
]
</script>

<style lang="scss" scoped>
// 底部容器样式
.footer {
  background-color: var(--secondary-color); // 使用次要颜色作为背景
  color: white;                            // 文字颜色为白色
  padding: 3rem 0 1rem;                    // 上下内边距
}

// 底部主要内容区域布局
.footer-content {
  display: grid;                           // 使用网格布局
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); // 响应式列宽
  gap: 2rem;                              // 网格间距
  margin-bottom: 2rem;                    // 底部外边距
}

// 底部各个区块样式
.footer-section {
  h3 {
    font-size: 1.2rem;                    // 标题字体大小
    margin-bottom: 1rem;                  // 底部外边距
    position: relative;                    // 相对定位，用于装饰线
    
    // 标题下的装饰线
    &::after {
      content: '';
      position: absolute;                  // 绝对定位
      left: 0;
      bottom: -8px;
      width: 50px;
      height: 2px;
      background-color: var(--primary-color); // 使用主色
    }
  }
}

// 快速导航链接列表样式
.footer-links {
  list-style: none;                       // 移除默认列表样式
  
  li {
    margin-bottom: 0.5rem;                // 列表项间距
    
    a {
      color: #ddd;                        // 链接颜色
      text-decoration: none;              // 移除下划线
      transition: color 0.3s ease;        // 颜色过渡动画
      
      &:hover {
        color: var(--primary-color);      // 悬停时使用主色
      }
    }
  }
}

// 底部版权信息样式
.footer-bottom {
  text-align: center;                     // 文本居中
  padding-top: 1.5rem;                    // 顶部内边距
  border-top: 1px solid rgba(255, 255, 255, 0.1); // 顶部分隔线
  font-size: 0.9rem;                      // 字体稍小
}
</style>