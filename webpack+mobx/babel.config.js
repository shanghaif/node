module.exports = {
  presets: [
    ['@babel/preset-env', { 
      // targets: "defaults",
      useBuiltIns: "usage",
      corejs: 3
    }],
    [
      "@babel/preset-react"
    ]
  ],
  plugins: [
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties", { "loose" : true }]
  ]
}