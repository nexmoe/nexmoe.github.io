const getRealPath=(t,e=!1)=>{let l=(t=t||window.location.pathname).split("/");if(!1===e)for(let t=l.length-1;0<=t;--t){var a=l[t].trim();if(0<a.length&&"/"!==a&&"index.html"!==a)return a}else for(let t=0;t<l.length;++t){var n=l[t].trim();if(0<n.length&&"/"!==n&&"index.html"!==n)return n}return"/"};let links=document.querySelectorAll(".nexmoe-list-item"),rootRealPath=getRealPath(window.location.pathname,!0);for(let e of links){let t=e.getAttribute("href");t&&getRealPath(t,!0)===rootRealPath&&(e.className="active nexmoe-list-item mdui-list-item mdui-ripple")}function search(){return window.open($("#search_form").attr("action_e")+" "+$("#search_value").val()),!1}$("table").has("img").addClass("nexmoe-album"),$(document).ready(function(){$("a.toc-link").click(function(t){t.preventDefault(),$("html, body").animate({scrollTop:$(decodeURI($(this).attr("href"))).offset().top-25},{duration:500,easing:"swing"})})});