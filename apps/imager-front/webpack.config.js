const webpack = require('webpack');

function getClientEnvironment(configuration) {
  const NX_ = /^NX_/i;

  const raw = Object.keys(process.env)
    .filter((key) => NX_.test(key))
    .reduce(
      (env, key) => {
        env[key] = process.env[key];
        return env;
      },
      {
        NODE_ENV: process.env.NODE_ENV || configuration,
      },
    );

  return {
    'process.env': Object.keys(raw).reduce((env, key) => {
      env[key] = JSON.stringify(raw[key]);
      return env;
    }, {}),
  };
}

module.exports = (config, options, context) => {
  config.plugins.push(new webpack.DefinePlugin(getClientEnvironment(context.configuration)));
  return config;
};
