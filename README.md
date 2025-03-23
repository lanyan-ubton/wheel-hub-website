# Wheel Hub Website

一个现代化的轮毂展示和销售网站，提供多语言支持和响应式设计。

## 功能特点

- 🌐 多语言支持（中文/英文）
- 📱 响应式设计，支持移动端和桌面端
- 🛍️ 产品展示与详情页面
- 📝 联系表单功能
- 🏠 直观的首页布局
- ℹ️ 关于我们页面

## 技术栈

### 前端
- Vue 3 - 渐进式 JavaScript 框架
- Vite - 现代前端构建工具
- Vue Router - 路由管理
- Vuex - 状态管理
- SCSS - CSS 预处理器

### 后端
- Node.js
- Express.js - Web 应用框架
- MySQL - 数据库

## 快速开始

### 前端开发
```bash
# 进入项目目录
cd wheel-hub-website

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

### 后端开发
```bash
# 进入后端目录
cd wheel-hub-website/server

# 安装依赖
npm install

# 配置环境变量
cp .env.example .env
# 编辑 .env 文件，设置必要的环境变量

# 启动服务器
npm run start
```

## 项目结构

```
wheel-hub-website/
├── public/           # 静态资源
├── server/          # 后端服务
│   ├── config/     # 配置文件
│   ├── models/     # 数据模型
│   ├── routes/     # 路由处理
│   └── index.js    # 服务入口
├── src/            # 前端源码
│   ├── assets/     # 资源文件
│   ├── components/ # Vue组件
│   ├── layouts/    # 布局组件
│   ├── locales/    # 国际化文件
│   ├── pages/      # 页面组件
│   ├── router/     # 路由配置
│   ├── store/      # Vuex存储
│   ├── styles/     # 样式文件
│   └── utils/      # 工具函数
└── vite.config.js  # Vite配置
```

## 环境要求

- Node.js >= 14.0.0
- npm >= 6.0.0
- MySQL >= 5.7

## 部署

1. 构建前端资源：
```bash
cd wheel-hub-website
npm run build
```

2. 配置后端环境：
```bash
cd server
cp .env.example .env
# 编辑 .env 文件设置生产环境配置
```

3. 启动服务：
```bash
npm run start
```

## 贡献指南

1. Fork 本仓库
2. 创建特性分支：`git checkout -b feature/AmazingFeature`
3. 提交改动：`git commit -m 'Add some AmazingFeature'`
4. 推送分支：`git push origin feature/AmazingFeature`
5. 提交 Pull Request

## 许可证

[MIT License](LICENSE)

## 联系我们

如有任何问题或建议，欢迎通过以下方式联系我们：
- 提交 Issue
- 发送邮件至 [your-email@example.com]