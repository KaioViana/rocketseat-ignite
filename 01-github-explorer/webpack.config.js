const path = require('path')
const HtmlWepackPlugin = require('html-webpack-plugin') // para injetar o bundle no html

// verifcando ambiente de desenvolvimento
const isDevelopment = process.env.NODE_ENV !== 'production'

module.exports = {
  mode: isDevelopment ? 'development' : 'production', // importante para velocidade de execução do webpack. Em production há toda um otimização que é feita
  entry: path.resolve(__dirname, 'src', 'index.jsx'), // arquivo de entrada
  devtool: isDevelopment ? 'eval-source-map' : 'source-map', // para printar um log de erro mas legível
  // arquivo de saída que será gerado com o webpack
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx'] // arquivos que podem ser lidos
  },
  // configuração para ficar observando alterações nos arquivos e gerar novamente o html 
  devServer: {
    static: path.resolve(__dirname, 'public'),
  },
  plugins: [
    new HtmlWepackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    })
  ],
  // onde ficam as configurações de como a aplicação irá se comportar quando estivermos importando arquivos
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}