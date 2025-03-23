/**
 * 产品相关路由处理
 * 
 * 提供产品的 CRUD（创建、读取、更新、删除）操作接口
 * 所有路由都以 '/api/products' 为基础路径
 */

// 导入必要的依赖
import express from 'express';           // Express 框架
import Product from '../models/Product.js'; // 产品数据模型

// 创建路由实例
const router = express.Router();

/**
 * 获取所有产品
 * 
 * @route   GET /api/products
 * @returns {Object} 包含所有产品的数组
 * @access  Public
 */
router.get('/', async (req, res) => {
  try {
    // 查询所有产品
    const products = await Product.findAll();
    // 返回成功响应
    res.status(200).json({
      success: true,
      data: products
    });
  } catch (error) {
    // 返回服务器错误
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

/**
 * 获取单个产品
 * 
 * @route   GET /api/products/:id
 * @param   {string} id - 产品ID
 * @returns {Object} 单个产品的详细信息
 * @access  Public
 */
router.get('/:id', async (req, res) => {
  try {
    // 通过ID查找产品
    const product = await Product.findByPk(req.params.id);
    // 如果产品不存在，返回404错误
    if (!product) {
      return res.status(404).json({
        success: false,
        error: 'Product not found'
      });
    }
    // 返回成功响应
    res.status(200).json({
      success: true,
      data: product
    });
  } catch (error) {
    // 返回服务器错误
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

/**
 * 创建新产品
 * 
 * @route   POST /api/products
 * @param   {Object} req.body - 产品信息
 * @returns {Object} 新创建的产品信息
 * @access  Private
 */
router.post('/', async (req, res) => {
  try {
    // 创建新产品
    const product = await Product.create(req.body);
    // 返回成功响应
    res.status(201).json({
      success: true,
      data: product
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
 * 更新产品
 * 
 * @route   PUT /api/products/:id
 * @param   {string} id - 产品ID
 * @param   {Object} req.body - 更新的产品信息
 * @returns {Object} 更新后的产品信息
 * @access  Private
 */
router.put('/:id', async (req, res) => {
  try {
    // 查找要更新的产品
    const product = await Product.findByPk(req.params.id);
    // 如果产品不存在，返回404错误
    if (!product) {
      return res.status(404).json({
        success: false,
        error: 'Product not found'
      });
    }
    // 更新产品信息
    await product.update(req.body);
    // 返回成功响应
    res.status(200).json({
      success: true,
      data: product
    });
  } catch (error) {
    // 返回客户端错误
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
});

/**
 * 删除产品
 * 
 * @route   DELETE /api/products/:id
 * @param   {string} id - 产品ID
 * @returns {Object} 空对象表示删除成功
 * @access  Private
 */
router.delete('/:id', async (req, res) => {
  try {
    // 查找要删除的产品
    const product = await Product.findByPk(req.params.id);
    // 如果产品不存在，返回404错误
    if (!product) {
      return res.status(404).json({
        success: false,
        error: 'Product not found'
      });
    }
    // 删除产品
    await product.destroy();
    // 返回成功响应
    res.status(200).json({
      success: true,
      data: {}
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