import { defineConfig } from 'vitepress'

export default defineConfig({
  // 网站标题
  title: "阿蓝 - 软件产品经理、设计师。",
  // 网站标题后缀
  titleTemplate: '阿蓝 - 软件产品经理、设计师。',
  // 网站描述 
  description: "-",
  // 构建的文件输出目录
  outDir: './.vitepress/dist',
  // base url 构建的html部署的目录地址
  base: '/',
  // 网页头部内容配置
  head: [
    // favicon配置
    ['link', { rel: 'icon', href: '/img/logo.jpg' }],
    // // 百度统计代码
    // ['script', {},
    //   `
    // var _hmt = _hmt || [];
    // (function() {
    // var hm = document.createElement("script");
    // hm.src = "https://hm.baidu.com/hm.js?bad30938c3edfdf67863af74137907ed";
    // var s = document.getElementsByTagName("script")[0]; 
    // s.parentNode.insertBefore(hm, s);
    // })();
    // `
    // ],
    // // Microsoft Clarity 统计代码
    // ['script', {},
    //   `
    //   (function(c,l,a,r,i,t,y){
    //     c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    //     t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    //     y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    // })(window, document, "clarity", "script", "kw9nsrvcqo");
    // `
    // ],
  ],

  // 生成网站地图配置
  // sitemap: {
  //   hostname: 'https://pmdaohang.com/blog/'
  // },


  // 主题参数配置
  themeConfig: {


    // 左上角LOGO
    logo: '/img/logo.jpg',
    // 覆盖LOGO的默认链接
    // logoLink: 'https://pmdaohang.cn',
    // 左上角网站标题
    siteTitle: '阿蓝 · blogs',
    // 开启本地搜索
    search: {
      provider: 'local'
    },
    // 手机端导航菜单名称
    sidebarMenuLabel: '导航菜单',
    // 手机端返回顶部
    returnToTopLabel: '返回顶部',
    // 文章链接显示链接图标
    externalLinkIcon: true,
    // 切换黑白模式的标题
    darkModeSwitchLabel: '外观样式',


    // 顶部导航设置
    nav: [
      // { text: '🏒 主站', link: '/index' },
      { text: '🗂️ 我的作品', link: '/post-works/001-prototype' },
      { text: '😲 AI Chat 体验', link: '/post-ai/001-aichat' },
      { text: '📸 MJ & Suno & Luma 体验', link: '/post-ai/002-chatgpt-mj' },
    ],



    // 文章侧边导航栏设置
    sidebar: {
      '/post-works/': [

        //1组菜单
        {
          // text: 'Axure 网站模板',   //1级菜单
          items: [
            { text: '🗒️ Axure 原型作品', link: '/post-works/001-prototype' }, //2级菜单
            { text: '🗒️ Axure 网站作品', link: '/post-works/002-axure-website' }, //2级菜单
            {
              text: '🗒️ UI Design 作品', //2级菜单
              // collapsed: false,
              items: [
                { text: '🗒️ 职典概念版', link: '/post-works/003-ui-zhidian-01' },
                { text: '🗒️ 职典正式版', link: '/post-works/004-ui-zhidian-02' },
                { text: '🗒️ 美在国际', link: '/post-works/005-ui-meizai' },
                { text: '🗒️ 速找网', link: '/post-works/006-ui-suzhao' },
                { text: '🗒️ 数据大屏', link: '/post-works/007-ui-data' },
              ],
            },



          ],
        },
      ],


      '/post-ai': [
        {
          // text: '推荐内容', //1级菜单
          items: [
            { text: '😲 AI Chat 体验', link: '/post-ai/001-aichat' },
            { text: '📸 MJ & Suno & Luma 体验', link: '/post-ai/002-chatgpt-mj' },
          ],
        },

      ],


    },





    // 设置文章底部编辑链接
    editLink: {
      // pattern: 'https://pmdaohang.com/blog/post/axure/016xiaoqing.html',
      text: '🐾 不积跬步，无以至千里；不积小流，无以成江海。 '
    },

    // 设置文章最后更新时间
    lastUpdated: {
      text: '发布时间',
      formatOptions: {
        dateStyle: 'short',    // 日期格式
        // timeStyle: 'short'  // 时间格式
      }
    },



    // 文章内容设置

    // 在大纲中显示的标题级别
    outline: 'deep',
    // 右侧大纲的标题
    outlineTitle: '目录',
    //上下篇文本
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },




    // 页脚设置，有sidebar 时不显示
    footer: {
      message: '~ ~ ~ 🚆 ~ ~ ~ <br> 瓜子、汽水儿、花生米儿，收收你的小短腿儿',
      // copyright: 'Copyright © 2019-2023 <a href="https://pmdaohang.com" target="_blank">世界是棵树</a>&nbsp;&nbsp;&nbsp;<a href="https://beian.miit.gov.cn/" target="_blank">蜀ICP备2023018310号-1</a><br><img src="https://visitor-badge.laobi.icu/badge?page_id=pmdaohang_home&left_color=%23000000&right_color=%2327bba0&left_text=view" style="display: inline-block;" alt="世界是棵树">',
      copyright: 'Copyright©2024 Alan Blogs',
    },



    // 友情链接
    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ],
  },


})



