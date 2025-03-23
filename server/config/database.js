/**
 * 数据库配置文件
 * 
 * 使用 Sequelize ORM 配置与 MySQL 数据库的连接
 * 从环境变量中读取数据库连接参数
 */

// 导入必要的依赖
import { Sequelize } from 'sequelize';  // Sequelize ORM
import dotenv from 'dotenv';            // 环境变量配置

// 加载环境变量
dotenv.config();

/**
 * 创建 Sequelize 实例
 * 
 * @param {string} process.env.DB_NAME - 数据库名称
 * @param {string} process.env.DB_USER - 数据库用户名
 * @param {string} process.env.DB_PASS - 数据库密码
 * @param {Object} options - 数据库连接配置选项
 */
const sequelize = new Sequelize(
  process.env.DB_NAME,    // 数据库名称
  process.env.DB_USER,    // 数据库用户名
  process.env.DB_PASS,    // 数据库密码
  {
    host: process.env.DB_HOST,  // 数据库主机地址
    port: process.env.DB_PORT,  // 数据库端口
    dialect: 'mysql',           // 使用 MySQL 数据库
    logging: false,             // 禁用 SQL 查询日志
    
    // 连接池配置
    pool: {
      max: 5,      // 连接池中最大连接数
      min: 0,      // 连接池中最小连接数
      acquire: 30000,  // 获取连接最长等待时间（毫秒）
      idle: 10000      // 连接在释放前可以空闲的最长时间（毫秒）
    }
  }
);

// 导出 Sequelize 实例供其他模块使用
export default sequelize;