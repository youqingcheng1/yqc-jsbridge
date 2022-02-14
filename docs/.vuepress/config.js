const isProd = process.env.NODE === 'production';
module.exports = {
    title:"yqc-web-document",
    description:" we can share our woek hear for yqc workers",
    locales: {
        "/": {
          lang: "zh-CN", // 将会被设置为 <html> 的 lang 属性
          title: "yqc工具库",
          description: "yqc工具库",
        },
      },
    dest:'./dist',
    head:[
        [
            "link",
            {
              rel: "icon",
              href: `//mnweb.mini1.cn/icon/logo-64x64.png`,
            },
          ],
    ],
    themeConfig: {
        editLinks: true,
        lastUpdated: "Last Updated",
        // smoothScroll: true,
        sidebar: {
          "/": [
            {
              title: "快速上手",
              collapsable: false,
              sidebarDepth: 3,
              children: [
                // 这里可以通过nodejs动态获取目录文件生成
                "blocks",
              ],
            },
            {
              title: "主要功能",
              collapsable: false,
              sidebarDepth: 4,
              children: [
                "MiniGameJSbridge",
                // "MiniBoxJSbridge",
                // "MiniGameSSO",
                // "MiniGameShare",
              ],
            }
          ],
        },
      },
    configureWebpack:(config, isServer)=>{
        if(!isServer && isProd){
            return {
                output:{
                    publiPath:"./"
                }
            }
        }
    },
    chainWebpack:(config,isServer)=>{
        if(isProd){
            config.module
                .rule("images")
                .test(/\.(png|jpe?g|gif)(\?.*)?$/)
                .use("user-loader")
                .loader('url-loader')
                .options({
                    limit:10000,
                    name: `assets/img/[name].[hash:8].[ext]`,
                    publicPath: "https://static-www.mini1.cn/developer/wiki/",
                })
        }
    }
}