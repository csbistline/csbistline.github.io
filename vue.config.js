module.exports = {
  publicPath: '/',
  transpileDependencies: [
    'vuetify',
  ],
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'Chris Bistline - Software Engineer'
        return args
      })
  },
}
