module.exports = {
  presets: [
    '@babel/preset-env', // identifica o ambiente em que o código está sendo executado para converter da melhor maneira
    ['@babel/preset-react', {
      runtime: 'automatic'
    }], // para entender o HTML no código
  ]
}