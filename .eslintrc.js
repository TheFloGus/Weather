module.exports = {
  globals: {
    fetch: true,
	document: true,
	localStorage: true,
	navigator: true,
  },
  extends: ["airbnb-base", "prettier"],
  plugins: ["prettier"],
  ignorePatterns: ["bundle.js"],
  rules: {
	"max-classes-per-file": "off",
	"no-console": "off",
	"no-plusplus": "off",
	"import/no-extraneous-dependencies": "off",
  }
};
