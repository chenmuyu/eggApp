/* eslint valid-jsdoc: "off" */

"use strict";

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1639635744327_6479";


  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    news : {
      pageSize: 5,
      serverUrl: "https://hacker-news.firebaseio.com/v0",
    },
    view : {
      defaultViewEngine: "nunjucks",
      mapping: {
        ".tpl": "nunjucks",
      },
    }
  };

  return {
    ...config,
    ...userConfig,
  };
};
