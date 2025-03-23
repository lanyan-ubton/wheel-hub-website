/**
 * 联系表单数据模型
 * 
 * 定义联系表单在数据库中的结构，包括字段类型、约束、验证规则和默认值
 * 使用 Sequelize ORM 进行定义
 */

// 导入必要的依赖
import { DataTypes } from 'sequelize';     // Sequelize 数据类型
import sequelize from '../config/database.js'; // 数据库连接实例

/**
 * 定义联系表单模型
 * 
 * @param {string} 'Contact' - 模型名称，对应数据库表名（自动转为复数形式 'Contacts'）
 * @param {Object} 属性定义对象 - 包含各个字段的定义
 */
const Contact = sequelize.define('Contact', {
  // 联系记录 ID，主键，自增
  id: {
    type: DataTypes.INTEGER,       // 整数类型
    primaryKey: true,              // 设为主键
    autoIncrement: true            // 自动递增
  },
  
  // 联系人姓名
  name: {
    type: DataTypes.STRING,        // 字符串类型
    allowNull: false               // 不允许为空
  },
  
  // 联系人邮箱
  email: {
    type: DataTypes.STRING,        // 字符串类型
    allowNull: false,              // 不允许为空
    validate: {
      isEmail: true                // 验证是否为有效的邮箱格式
    }
  },
  
  // 联系主题
  subject: {
    type: DataTypes.STRING,        // 字符串类型
    allowNull: false               // 不允许为空
  },
  
  // 联系消息内容
  message: {
    type: DataTypes.TEXT,          // 文本类型，可存储较长内容
    allowNull: false               // 不允许为空
  },
  
  // 处理状态
  status: {
    type: DataTypes.ENUM('new', 'read', 'responded'), // 枚举类型，限定可选值
    defaultValue: 'new'            // 默认值为 'new'（新消息）
  }
});

// 导出联系表单模型供其他模块使用
export default Contact;