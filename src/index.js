{
  "presets": [
    "minify",
    [
      "@babel/preset-env",
      {
        "targets": {
          "node": "current"
        }
      }
    ],
  ],
    "plugins": [
      "@babel/plugin-proposal-object-rest-spread",
      "@babel/plugin-transform-arrow-functions"
    ]
}
