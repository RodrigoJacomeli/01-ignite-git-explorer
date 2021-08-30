const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  mode: isDevelopment ? "development" : "production", // Definindo o modo de build
  devtool: isDevelopment ? "eval-source-map" : "source-map", // Configurando o source-map para erros, serem localizado na linha correta do código.
  entry: path.resolve(__dirname, "src", "index.jsx"), // Caminho do arquivo principal do projeto.
  output: {
    path: path.resolve(__dirname, "dist"), // Caminho de saida do arquivo buildado.
    filename: "bundle.js", // Nome do arquivo buildado.
  },
  resolve: {
    extensions: [".js", ".jsx"], // Extensões que deverá passar pelo webpack e entender importações sem formato.
  },
  devServer: {
    // HotRefresh do webpack
    static: path.resolve(__dirname, "public"),
  },
  plugins: [
    // Injeta o arquivo buildado no index automaticamente.
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx$/, // Expressão regular para verificar se os arquivos terminal com o formatdo .jsx.
        exclude: /node_modules/, // Excluir a pasta node_modules, estes arquivos já estão preparados para produção.
        use: "babel-loader",
      },
    ],
  },
};
