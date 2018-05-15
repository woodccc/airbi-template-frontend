// https://eslint.org/docs/user-guide/configuring
//eslint 配置文件，只在本目录下生效，继承至父目录以及根目录的相关配置

module.exports = {
  rules: {
    'no-undef': 'off', //单元测试无需引入expect、test等函数
  }
}
