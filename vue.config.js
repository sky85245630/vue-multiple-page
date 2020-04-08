module.exports = {
  // 預設情況下，Vue CLI假設您的應用程式將部署在域的根目錄下。
  // https://www.xxxx.com/, 如果應用程式部署在子路徑上，則需要使用此選項指定子路徑。例如，如果您的應用程式部署在https://www.xxx.com/myapp/，集baseUrl到'/myapp/'
  publicPath: "./",
  pages: {
    // 多頁配置
    index: {
      entry: "./src/pages/index/index.js", // 配置入口js檔案
      template: "./src/pages/index/index.html", // 主頁面
      filename: "index.html", // 打包後的html檔名稱
      title: "首頁", // 打包後的.html中<title>標籤的文字內容
      // 在這個頁面中包含的塊，預設情況下會包含
      // 提取出來的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    mobile: {
      entry: "./src/pages/mobile/mobile.js",
      template: "./src/pages/mobile/mobile.html",
      filename: "mobile.html",
      title: "詳情",
      chunks: ['chunk-vendors', 'chunk-common', 'mobile']
    }
  },
  devServer: {
    index: "index.html", // 預設啟動serve 開啟index頁面
    open: true // 配置自動啟動瀏覽器
  }
};