/**
 * 联系表单相关路由处理
 * 
 * 提供联系表单的提交和管理功能：
 * - 用户提交联系表单
 * - 管理员查看所有联系记录
 * 所有路由都以 '/api/contact' 为基础路径
 */

// 导入必要的依赖
import express from 'express';           // Express 框架
import Contact from '../models/Contact.js'; // 联系表单数据模型

// 创建路由实例
const router = express.Router();

/**
 * 提交联系表单
 * 
 * @route   POST /api/contact
 * @param   {Object} req.body - 联系表单数据
 * @param   {string} req.body.name - 联系人姓名
 * @param   {string} req.body.email - 联系人邮箱
 * @param   {string} req.body.subject - 联系主题
 * @param   {string} req.body.message - 联系内容
 * @returns {Object} 创建的联系记录
 * @access  Public
 */
router.post('/', async (req, res) => {
  try {
    // 创建新的联系记录
    const contact = await Contact.create(req.body);
    // 返回成功响应
    res.status(201).json({
      success: true,
      data: contact
    });
  } catch (error) {
    // 返回客户端错误（通常是验证错误）
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
});

/**
 * 获取所有联系记录
 * 
 * @route   GET /api/contact
 * @returns {Object} 包含所有联系记录的数组，按创建时间降序排列
 * @access  Private (Admin only)
 * @note    TODO: 添加管理员身份验证中间件
 */
router.get('/', async (req, res) => {
  try {
    // 查询所有联系记录，按创建时间降序排列
    const contacts = await Contact.findAll({
      order: [['createdAt', 'DESC']]  // 按创建时间降序排序
    });
    // 返回成功响应
    res.status(200).json({
      success: true,
      data: contacts
    });
  } catch (error) {
    // 返回服务器错误
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// 导出路由实例供 index.js 使用
export default router;