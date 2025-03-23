/**
 * Vite 配置文件
 * 
 * 该文件配置了 Vite 构建工具的各项参数，包括插件、路径别名、服务器设置和代理
 */

// 导入 Vite 的核心配置函数和环境变量加载函数
import { defineConfig, loadEnv } from 'vite'
// 导入 Vue 插件，用于处理 .vue 文件
import vue from '@vitejs/plugin-vue'
// 导入 Node.js 的 path 模块，用于处理文件路径
import path from 'path'

// 导出 Vite 配置
export default defineConfig(({ mode }) => {
  // 根据当前模式（development/production）加载对应的环境变量
  const env = loadEnv(mode, process.cwd())
  
  return {
    // 配置 Vue 插件
    plugins: [vue()],
    
    // 解析配置
    resolve: {
      // 路径别名配置，使 @ 符号指向 src 目录，方便导入
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    
    // 开发服务器配置
    server: {
      // 设置开发服务器端口为 3000
      port: 3000,
      // 启动时自动在浏览器中打开
      open: true,
      
      // API 代理配置，用于解决跨域问题
      proxy: {
        // 所有 /api 开头的请求将被代理
        '/api': {
          // 目标服务器地址，从环境变量中读取
          target: env.VITE_API_URL,
          // 更改请求头中的 Origin，解决跨域问题
          changeOrigin: true,
          // 重写请求路径，移除 /api 前缀
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    }
  }
})