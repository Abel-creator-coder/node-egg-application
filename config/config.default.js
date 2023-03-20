/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1678957272003_8470';

  // add your middleware config here
  config.security = {
    csrf: {
      enable: false,
    },
    domainWhiteList: [ 'http://a.jd.com' ],
  }

  // 加载 errorHandler 中间件
  config.middleware = [ 'errorHandler' ]

  config.mongoose = {
    url: 'mongodb://127.0.0.1:27017/test',
    options: {
      autoReconnect: true,
      reconnectTries: Number.MAX_VALUE,
      bufferMaxEntries: 0,
    },
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
