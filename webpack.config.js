const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'index.jsx'), // Caminho do arquivo principal do projeto.
  output: {
    path: path.resolve(__dirname, 'dist'), // Caminho de saida do arquivo buildado.
    filename: 'bundle.js' // Nome do arquivo buildado.
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Extensões que deverá passar pelo webpack e entender importações sem formato.
  },
  module: {
    rules: [
      {
        test: /\.jsx$/, // Expressão regular para verificar se os arquivos terminal com o formatdo .jsx.
        exclude: /node_modules/, // Excluir a pasta node_modules, estes arquivos já estão preparados para produção.
        use: 'babel-loader',
      }
    ]
  }
}