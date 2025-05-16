module.exports = {
	root: true,
	env: {
	  node: true,
	},
	extends: ["plugin:vue/vue3-essential", "@vue/typescript/recommended"],
	parserOptions: {
	  ecmaVersion: 2020,
	  parser: "@typescript-eslint/parser",
	},
	rules: {
	  "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
	  "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  
	  // Use tabs instead of spaces
	  indent: ["error", "tab"],
	  "vue/html-indent": [
		"error",
		"tab",
		{
		  attribute: 1,
		  baseIndent: 1,
		  closeBracket: 0,
		  alignAttributesVertically: true,
		},
	  ],
  
	  // Put each attribute on its own line
	  "vue/max-attributes-per-line": [
		"error",
		{
		  singleline: 1,
		  multiline: {
			max: 1,
			allowFirstLine: false,
		  },
		},
	  ],
  
	  // Disable newline rules that conflict with formatting
	  "vue/singleline-html-element-content-newline": "off",
	  "vue/multiline-html-element-content-newline": "off",
	  "vue/html-closing-bracket-newline": "off",
	},
  };
  