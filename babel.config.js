module.exports = function (api) {
  api.cache(true);

  return {
    presets: [
      '@babel/typescript',
      ['@babel/preset-env', { useBuiltIns: 'usage', corejs: 3 }],
      '@babel/preset-react',
      [
        '@emotion/babel-preset-css-prop',
        {
          sourceMap: process.env.NODE_ENV !== 'test',
          labelFormat: '[filename]-[local]',
        },
      ],
    ],
    plugins: ['react-hot-loader/babel'],
  };
};
