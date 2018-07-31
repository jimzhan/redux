const { injectBabelPlugin } = require('react-app-rewired')
const rewireLess = require('react-app-rewire-less')

module.exports = (config, env) => {
  /* eslint-disable no-param-reassign */
  config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config)

  config = rewireLess.withLoaderOptions({
    javascriptEnabled: true,
    modifyVars: {
    /* ------- Override Gloabal Ant Styles ---------- */
    },
  })(config, env)
  /* eslint-enable */

  return config
}
