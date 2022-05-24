import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import {navbarConfig} from './configs/navbar'
import {hopeTheme} from 'vuepress-theme-hope'

export default defineUserConfig<DefaultThemeOptions>({
  // 站点配置
  lang: 'en-ZH',
  title: 'ROS2 中文网',
  description: 'ROS是用于构建机器人应用的软件库和工具集',
  // 主题和它的配置
  head: [
    ['link', {rel: 'icon', href: '/images/ros2_logo_m.png'}],
    ["script",
      {},
      `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?87772a70946d6fa993807ff07f725bf4";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
    `
    ]
  ],
  themeConfig: {
    navbar: navbarConfig,
    contributorsText: '贡献者' ,
    lastUpdatedText: '上次更新时间',
    sidebarDepth: 3,
  }
  // extendsMarkdown: md =>{
  //   md.use(require("markdown-it-disable-url-encode"));
  // }

})