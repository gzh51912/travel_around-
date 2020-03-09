const { override, fixBabelImports, addDecoratorsLegacy } = require('customize-cra')
 module.exports = override(
   // antb-mobile按需引入
       fixBabelImports('import', {
         libraryName: 'antd-mobile',
         style: 'css',
       }),
  // 装饰器
       addDecoratorsLegacy()  

     )