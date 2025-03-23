/**
 * 产品数据模型
 * 
 * 定义产品在数据库中的结构，包括字段类型、约束和默认值
 * 使用 Sequelize ORM 进行定义
 */

// 导入必要的依赖
import { DataTypes } from 'sequelize';     // Sequelize 数据类型
import sequelize from '../config/database.js'; // 数据库连接实例

/**
 * 定义产品模型
 * 
 * @param {string} 'Product' - 模型名称，对应数据库表名（自动转为复数形式 'Products'）
 * @param {Object} 属性定义对象 - 包含各个字段的定义
 */
const Product = sequelize.define('Product', {
  // 产品 ID，主键，自增
  id: {
    type: DataTypes.INTEGER,       // 整数类型
    primaryKey: true,              // 设为主键
    autoIncrement: true            // 自动递增
  },
  
  // 产品名称
  name: {
    type: DataTypes.STRING,        // 字符串类型
    allowNull: false               // 不允许为空
  },
  
  // 产品类别
  category: {
    type: DataTypes.STRING,        // 字符串类型
    allowNull: false               // 不允许为空
  },
  
  // 产品描述
  description: {
    type: DataTypes.TEXT,          // 文本类型，可存储较长内容
    allowNull: false               // 不允许为空
  },
  
  // 产品价格
  price: {
    type: DataTypes.DECIMAL(10, 2), // 十进制数，总共10位，小数点后2位
    allowNull: false                // 不允许为空
  },
  
  // 库存数量
  stock: {
    type: DataTypes.INTEGER,       // 整数类型
    defaultValue: 0                // 默认值为0
  },
  
  // 产品图片路径
  image: {
    type: DataTypes.STRING,        // 字符串类型
    allowNull: true                // 允许为空
  }
});

// 导出产品模型供其他模块使用
export default Product;