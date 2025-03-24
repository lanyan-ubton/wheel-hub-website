/**
 * 生成完整的图片URL
 * @param {string} imagePath - 图片相对路径
 * @returns {string} 完整的图片URL
 */
const baseUrl = import.meta.env.VITE_IMAGE_BASE_URL;

export const getImageUrl = (imagePath) => {
  if (!imagePath) {
    return `${baseUrl}/images/product-placeholder.jpg`;
  }

  // 如果是完整URL，直接返回
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath;
  }

  // 使用配置的图片服务器地址
  return `${baseUrl}${imagePath.startsWith('/') ? '' : '/'}${imagePath}`;
};