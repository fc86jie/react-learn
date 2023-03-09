/**
 * @Author: wangrenjie86@gmail.com
 * @Date: 2023-03-09 13:52:21
 * @LastEditors: wangrenjie86@gmail.com
 * @LastEditTime: 2023-03-09 14:33:39
 * @FilePath: \craco.config.js
 * @Description:
 */

module.exports = {
  webpack: {
    configure: {},
  },
  devServer: {
    proxy: {
      '/jian': {
        target: 'https://www.jianshu.com/asimov',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/jian': '',
        },
      },
      '/zhi': {
        target: 'https://news-at.zhihu.com/api/4',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/zhi': '',
        },
      },
    },
  },
};
