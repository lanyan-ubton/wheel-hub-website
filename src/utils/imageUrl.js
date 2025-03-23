/**
 * 生成完整的图片URL
 * @param {string} imagePath - 图片相对路径
 * @returns {string} 完整的图片URL
 */
export const getImageUrl = (imagePath) => {
  if (!imagePath) {
    return 'http://192.168.1.200/images/product-placeholder.jpg';
  }

  // 如果是完整URL，直接返回
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath;
  }

  // 使用配置的图片服务器地址
  return `http://192.168.1.200${imagePath.startsWith('/') ? '' : '/'}${imagePath}`;
};