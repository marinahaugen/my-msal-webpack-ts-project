/**
 * Prettier config
 * https://prettier.io/docs/en/configuration.html
 *
 * @type {import('prettier').Config}
 */

module.exports = {
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  plugins: [require('prettier-plugin-packagejson')],
  embeddedLanguageFormatting: 'auto',
};
