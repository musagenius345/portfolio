const postImport = require('postcss-import')
const postUrl = require('postcss-url')
const autoprefixer = require('autoprefixer')
// const precss = require('precss')
// const font = require('postcss-font-magician')
// const cssnano = require('cssnano')
// const postcssNested = require('postcss-nested')
// const postcssNestedAncestors = require('postcss-nested-ancestors')
// const postcssCurrentSelector = require('postcss-current-selector')
const postcssPresetEnv = require('postcss-preset-env');


module.exports = {
  plugins: [
    // font({
    //   hosted: ['./assets/fonts', 'assets/fonts'],
    //   display: "swap"
    // }),
    postImport({
      
    }),
    postUrl({
      
    }),
    autoprefixer({
      // Autoprefixer options here
    }),
    
    
    postcssPresetEnv({
      stage: 1,
        features: {
          'nesting-rules': true,
        },
    })
    
  ]
};


  