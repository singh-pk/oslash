const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-create-react-app',
    'storybook-addon-designs'
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5'
  },
  webpackFinal: async config => {
    const scssConfigIndex = config.module.rules.findIndex(c =>
      '.scss'.match(c.test)
    );

    if (scssConfigIndex > 0 && config.module.rules[scssConfigIndex]?.oneOf) {
      config.module.rules[scssConfigIndex].oneOf.push({
        test: /\.(css|s(a|c)ss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, '../')
      });
    } else {
      config.module.rules.push({
        test: /\.(css|s(a|c)ss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, '../')
      });
    }

    return { ...config, resolve: { ...config.resolve } };
  },
  previewHead: head => `
    ${head}
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap" rel="stylesheet">

    <style type="text/css">
      body {
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
      }
    </style>
  `
};
