const px2rem = require('postcss-px2rem')  

module.exports = {
  devServer: {
    open:true
  },
  
  lintOnSave:false,

  css: {
    loaderOptions: {
      postcss: {
        plugins:[
          px2rem({
            remUnit: 37.5  
          })
        ]
      }
    }
  },

}