const CleanCSS = require("clean-css");
module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy({
    "node_modules/swup/dist/swup.min.js": "vendor/swup.min.js",
  });
  return {
    dir: {
      input: "src",
      output: "dist",
    },
    pathPrefix: "/los-alerces/",
  };
};
