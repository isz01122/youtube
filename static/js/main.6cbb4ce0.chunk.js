(this.webpackJsonpyoutube=this.webpackJsonpyoutube||[]).push([[0],{20:function(e,t,a){e.exports={videos:"video_list_videos__1VCw_"}},29:function(e,t,a){},3:function(e,t,a){e.exports={container:"video_item_container__15oji",grid:"video_item_grid__2iJDD",list:"video_item_list__2jYRY",video:"video_item_video__37dg9",thumbnail:"video_item_thumbnail__1w2AL",metadata:"video_item_metadata__N-I6a",title:"video_item_title__3lIaP",channel:"video_item_channel__1dZ3U"}},4:function(e,t,a){e.exports={header:"search_header_header__3zkT2",logo:"search_header_logo__tK0eh",img:"search_header_img__3WZdH",title:"search_header_title__2RdR8",input:"search_header_input__3vem-",button:"search_header_button__19_1L",buttonImg:"search_header_buttonImg__3Mukl"}},49:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a(1),c=a.n(n),s=a(19),r=a.n(s),o=(a(29),a(10)),l=a(5),u=a.n(l),d=a(3),h=a.n(d),_=Object(n.memo)((function(e){var t=e.video,a=e.video.snippet,n=e.onVideoClick,c="list"===e.display?h.a.list:h.a.grid;return Object(i.jsx)("li",{className:"".concat(h.a.container," ").concat(c),onClick:function(){n(t)},children:Object(i.jsxs)("div",{className:h.a.video,children:[Object(i.jsx)("img",{className:h.a.thumbnail,src:a.thumbnails.medium.url,alt:"video thumbnail"}),Object(i.jsxs)("div",{className:h.a.metadata,children:[Object(i.jsx)("p",{className:h.a.title,children:a.title.length>60?"".concat(a.title.slice(0,60),"..."):a.title}),Object(i.jsx)("p",{className:h.a.channel,children:a.channelTitle})]})]})})})),m=a(20),b=a.n(m),p=function(e){var t=e.videos,a=e.onVideoClick,n=e.display;return Object(i.jsx)("ul",{className:b.a.videos,children:t.map((function(e){return Object(i.jsx)(_,{video:e,onVideoClick:a,display:n},e.id)}))})},j=a(4),v=a.n(j),f=Object(n.memo)((function(e){var t=e.onSearch,a=Object(n.useRef)(),c=function(){var e=a.current.value;""!==e&&t(e)};return Object(i.jsxs)("header",{className:v.a.header,children:[Object(i.jsxs)("a",{href:"/youtube",className:v.a.logo,children:[Object(i.jsx)("img",{className:v.a.img,src:"https://raw.githubusercontent.com/isz01122/youtube/master/public/images/logo.png",alt:"logo"}),Object(i.jsx)("h1",{className:v.a.title,children:"Youtube"})]}),Object(i.jsx)("input",{className:v.a.input,type:"search",placeholder:"Search...",onKeyPress:function(e){"Enter"===e.key&&c()},ref:a}),Object(i.jsx)("button",{className:v.a.button,type:"submit",onClick:function(){c()},children:Object(i.jsx)("img",{className:v.a.buttonImg,src:"https://raw.githubusercontent.com/isz01122/youtube/master/public/images/search.png",alt:"search"})})]})})),x=a(6),O=a.n(x),y=function(e){var t=e.video,a=e.video.snippet;return Object(i.jsxs)("section",{className:O.a.detail,children:[Object(i.jsx)("div",{className:O.a.iframecontainer,children:Object(i.jsx)("iframe",{className:O.a.video,type:"text/html",title:"youtube video player",src:"https://www.youtube.com/embed/".concat(t.id),frameBorder:"0",allowFullScreen:!0})}),Object(i.jsx)("h2",{children:a.title}),Object(i.jsx)("hr",{}),Object(i.jsx)("h3",{children:a.channelTitle}),Object(i.jsx)("pre",{className:O.a.description,children:a.description})]})};var g=function(e){var t=e.youtube,a=Object(n.useState)([]),c=Object(o.a)(a,2),s=c[0],r=c[1],l=Object(n.useState)(null),d=Object(o.a)(l,2),h=d[0],_=d[1],m=Object(n.useCallback)((function(e){_(null),t.search(e).then((function(e){return r(e)})),window.scrollTo({top:0,left:0,behavior:"auto"})}),[t]);return Object(n.useEffect)((function(){t.mostPopular().then((function(e){return r(e)}))}),[t]),Object(i.jsxs)("div",{className:u.a.app,children:[Object(i.jsx)(f,{onSearch:m}),Object(i.jsxs)("section",{className:u.a.content,children:[h&&Object(i.jsx)("div",{className:u.a.detail,children:Object(i.jsx)(y,{video:h})}),Object(i.jsx)("div",{className:u.a.list,children:Object(i.jsx)(p,{videos:s,onVideoClick:function(e){_(e),window.scrollTo({top:0,left:0,behavior:"auto"})},display:h?"list":"grid"})})]})]})},k=a(7),N=a.n(k),w=a(9),C=a(21),S=a(22),I=function(){function e(t){Object(C.a)(this,e),this.youtube=t}return Object(S.a)(e,[{key:"mostPopular",value:function(){var e=Object(w.a)(N.a.mark((function e(){var t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.youtube.get("videos",{params:{part:"snippet",chart:"mostPopular",maxResults:25,regionCode:"kr"}});case 2:return t=e.sent,e.abrupt("return",t.data.items);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"search",value:function(){var e=Object(w.a)(N.a.mark((function e(t){var a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.youtube.get("search",{params:{part:"snippet",maxResults:25,type:"video",q:t,regionCode:"kr"}});case 2:return a=e.sent,e.abrupt("return",a.data.items);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),R=a(23),T=new I(a.n(R).a.create({baseURL:"https://youtube.googleapis.com/youtube/v3",params:{key:"AIzaSyAFRCTSBDyr2xTy6ZkdnG6fBeBPMddkDfY"}}));r.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(g,{youtube:T})}),document.getElementById("root"))},5:function(e,t,a){e.exports={app:"app_app__cewju",content:"app_content__ckDFI",detail:"app_detail__Xmsnl",list:"app_list__2we4s"}},6:function(e,t,a){e.exports={detail:"video_detail_detail__2BkQh",description:"video_detail_description__3nW_r",iframecontainer:"video_detail_iframecontainer__1uLKV"}}},[[49,1,2]]]);
//# sourceMappingURL=main.6cbb4ce0.chunk.js.map