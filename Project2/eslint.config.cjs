module.exports = [
  {
    files: ["**/*.js"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 6,
        sourceType: "script"
      },
      globals: {
        window: "readonly",
        document: "readonly",
        console: "readonly",
        jQuery: "readonly",
        $: "readonly"
      }
    },
    rules: {
      camelcase: "error",
      indent: ["error", 2],
      "no-undef": "error",
      quotes: "off",
      "max-len": ["warn", { code: 80 }],
      "no-trailing-spaces": "error",
      curly: "error",
      strict: "off"
    }
  }
];