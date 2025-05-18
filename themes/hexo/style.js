/* eslint-disable react/no-unknown-property */
/**
 * 这里的css样式只对当前主题生效
 * 主题客制化css
 * @returns
 */
const Style = () => {
  return (<style jsx global>{`
    // 底色
    body{
        background-color: #f5f5f5
    }
    .dark body{
        background-color: black;
    }
  
    /*  菜单下划线动画 */
    #theme-hexo .menu-link {
        text-decoration: none;
        background-image: linear-gradient(#568E75, #568E75);
        background-repeat: no-repeat;
        background-position: bottom center;
        background-size: 0 2px;
        transition: background-size 100ms ease-in-out;
    }
    
    #theme-hexo .menu-link:hover {
        background-size: 100% 2px;
        color: #568E75;
    }

    /* 设置了从上到下的渐变黑色 */
    #theme-hexo .header-cover::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background:  linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 10%, rgba(0,0,0,0) 25%, rgba(0,0,0,0.2) 75%, rgba(0,0,0,0.5) 100%);
    }

    /* Custem */
    .tk-footer{
        opacity: 0;
    }

/* 移动端侧边栏 */
#side-bar>.bg-indigo-700 {
    background-color: #568E75;
}

/* 移动端侧边栏菜单 */
nav div:hover,li:hover {
    background-color: #568E75!important;
}

/* 目录进度条 */
.h-4.bg-indigo-400 {
    background-color: #568E75;
}

/* 目录文字高亮 */
nav .text-green-500{
    color: #568E75;
}

/* 翻页按钮 */
button.bg-indigo-700{
    background-color: #568E75;
}

/* 文章页隐藏发布时间 */
#article-wrapper > div.wow.fadeInUp.px-10 > section > div.flex.flex-wrap.gap-3.mt-5.text-sm > a {
  display: none;
}

/* 文章页隐藏更新时间 */
#article-wrapper > div.wow.fadeInUp.px-10 > section > div.flex.flex-wrap.gap-3.mt-5.text-sm > span.whitespace-nowrap {
  display: none;
}

/* 文章页隐藏阅读次数 */
#article-wrapper .busuanzi_container_page_pv {
  display: none ！important;
}

/* 文章页隐藏字数 */
#wordCountWrapper > span:nth-child(1){
 display: none !important;
}

/* 文章页隐藏阅读时长 */
#wordCountWrapper > span:nth-child(2){
 display: none;
}

    // 选中字体颜色
    ::selection {
        background: rgba(45, 170, 219, 0.3);
    }

    // 自定义滚动条
    ::-webkit-scrollbar {
        width: 5px;
        height: 5px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #49b1f5;
    }

    * {
        scrollbar-width:thin;
        scrollbar-color: #49b1f5 transparent
    }
    

  `}</style>)
}

export { Style }
