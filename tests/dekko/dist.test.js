const $ = require('dekko');
const chalk = require('chalk');

$('dist')
  .isDirectory()
  .hasFile('antd-with-locales.js')
  .hasFile('antd-with-locales.min.js')
  .hasFile('gh-antd.css')
  .hasFile('gh-antd.min.css')
  .hasFile('gh-antd.js')
  .hasFile('gh-antd.min.js')
  .hasFile('antd.less');

// eslint-disable-next-line
console.log(chalk.green('✨ `dist` directory is valid.'));
