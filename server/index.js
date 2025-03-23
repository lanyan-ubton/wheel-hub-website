/**
 * 服务器入口文件
 * 
 * 配置和启动 Express 服务器，连接数据库，
 * 并设置 API 路由、中间件和初始化示例数据
 */

// 导入必要的依赖包
import express from 'express';              // Express 框架
import cors from 'cors';                    // 跨域资源共享中间件
import dotenv from 'dotenv';                // 环境变量配置
import sequelize from './config/database.js'; // 数据库连接配置
import contactRoutes from './routes/contact.js'; // 联系表单路由
import productRoutes from './routes/products.js'; // 产品路由

// 加载环境变量
dotenv.config();

// 创建 Express 应用实例
const app = express();
// 设置服务器端口，优先使用环境变量中的端口，默认为 3000
const PORT = process.env.PORT || 3000;

// 配置中间件
app.use(cors());                           // 启用跨域请求
app.use(express.json());                   // 解析 JSON 请求体
app.use(express.urlencoded({ extended: false })); // 解析 URL 编码的请求体

// 配置 API 路由
app.use('/api/contact', contactRoutes);    // 联系表单 API 路由
app.use('/api/products', productRoutes);   // 产品 API 路由

// 根路由 - API 欢迎信息
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Wheel Hub API' });
});

/**
 * 启动服务器函数
 * 
 * 1. 连接数据库
 * 2. 同步数据库模型
 * 3. 初始化示例数据（如果需要）
 * 4. 启动 Express 服务器
 */
const startServer = async () => {
  try {
    // 尝试连接数据库
    await sequelize.authenticate();
    console.log('Database connection established successfully');
    
    // 同步数据库模型（如果表不存在则创建，如果存在则更新结构）
    await sequelize.sync({ alter: true });
    console.log('Database models synchronized');
    
    // 获取产品模型
    const Product = sequelize.models.Product;
    // 检查产品表中是否有数据
    const productCount = await Product.count();
    
    // 如果产品表为空，初始化示例产品数据
    if (productCount === 0) {
      console.log('Initializing sample product data...');
      // 批量创建示例产品
      await Product.bulkCreate([
        {
          name: 'Premium SUV Hub',
          category: 'SUV',
          description: 'High-performance wheel hub for SUVs',
          price: 299.99,
          stock: 50,
          image: '/images/product1.jpg'
        },
        {
          name: 'Commercial Truck Hub',
          category: 'Truck',
          description: 'Heavy-duty hub for commercial vehicles',
          price: 499.99,
          stock: 30,
          image: '/images/product2.jpg'
        },
        {
          name: 'Passenger Vehicle Hub',
          category: 'Passenger',
          description: 'Reliable hub for passenger cars',
          price: 199.99,
          stock: 100,
          image: '/images/product3.jpg'
        },
        {
          name: 'Heavy Duty Commercial Hub',
          category: 'Commercial',
          description: 'Extra strength for heavy commercial applications',
          price: 599.99,
          stock: 25,
          image: '/images/product4.jpg'
        },
        {
          name: 'Luxury SUV Hub',
          category: 'SUV',
          description: 'Premium hub for luxury SUVs',
          price: 399.99,
          stock: 40,
          image: '/images/product5.jpg'
        },
        {
          name: 'Compact Car Hub',
          category: 'Passenger',
          description: 'Lightweight hub for compact cars',
          price: 149.99,
          stock: 80,
          image: '/images/product6.jpg'
        }
      ]);
      console.log('Sample product data initialized successfully');
    }
    
    // 启动服务器并监听指定端口
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    // 捕获并记录数据库连接错误
    console.error('Unable to connect to the database:', error);
  }
};

// 调用启动服务器函数
startServer();