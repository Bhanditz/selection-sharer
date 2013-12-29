/* @author: Xavier Damman (@xdamman) - http://github.com/xdamman/selection-sharer - @license: MIT */!function(a){var b=function(b){var c=this;b=b||{},"string"==typeof b&&(b={elements:b}),this.sel=null,this.textSelection="",this.htmlSelection="";var d=function(){var b=[],c=a('meta[name="twitter:creator"]').attr("content")||a('meta[name="twitter:creator"]').attr("value");c&&b.push(c);for(var d=document.getElementsByTagName("a"),e=0,f=d.length;f>e;e++)if(d[e].attributes.href&&"string"==typeof d[e].attributes.href.value){var g=d[e].attributes.href.value.match(/^https?:\/\/twitter\.com\/([a-z0-9_]{1,20})/i);g&&g.length>1&&-1==["widgets","intent"].indexOf(g[1])&&b.push(g[1])}return b.length>0?b.join(","):""};this.viaTwitterAccount=a('meta[name="twitter:site"]').attr("content")||a('meta[name="twitter:site"]').attr("value")||"",this.viaTwitterAccount=this.viaTwitterAccount.replace(/@/,""),this.relatedTwitterAccounts=d();var e=function(){var a="",b="";if("undefined"!=typeof window.getSelection){var d=window.getSelection();if(d.rangeCount){for(var e=document.createElement("div"),f=0,g=d.rangeCount;g>f;++f)e.appendChild(d.getRangeAt(f).cloneContents());b=e.innerText,a=e.innerHTML}}else"undefined"!=typeof document.selection&&"Text"==document.selection.type&&(b=document.selection.createRange().text);return c.textSelection=b,c.htmlSelection=a||b,b},f=function(a){var b=a||window.getSelection(),c=document.createRange();if(!b.anchorNode)return 0;c.setStart(b.anchorNode,b.anchorOffset),c.setEnd(b.focusNode,b.focusOffset);var d=c.collapsed?"backward":"forward";return c.detach(),d};this.show=function(a){setTimeout(function(){var b=window.getSelection(),d=e();if(!b.isCollapsed&&d.length>10){var g=b.getRangeAt(0),h=g.getBoundingClientRect().top-5,i=h+window.scrollY-c.$popover.height(),j=0;if(a)j=a.pageX;else{var k=b.anchorNode.parentNode;j+=k.offsetWidth/2;do j+=k.offsetLeft;while(k=k.offsetParent)}switch(f(b)){case"forward":j-=c.$popover.width();break;case"backward":j+=c.$popover.width();break;default:return}c.$popover.removeClass("anim").css("top",i+10).css("left",j).show(),setTimeout(function(){c.$popover.addClass("anim").css("top",i)},0)}},10)},this.hide=function(){c.$popover.hide()};var g=function(a,b){if(!a||!a.length)return a;var c=a.length>b,d=c?a.substr(0,b-1):a;return d=c?d.substr(0,d.lastIndexOf(" ")):d,c?d+"...":d},h=function(a){a.preventDefault();var b="“"+g(c.textSelection.trim(),114)+"”",d="http://twitter.com/intent/tweet?text="+encodeURIComponent(b)+"&related="+c.relatedTwitterAccounts+"&url="+encodeURIComponent(window.location.href);c.viaTwitterAccount&&b.length<114-c.viaTwitterAccount.length&&(d+="&via="+c.viaTwitterAccount);var e=640,f=440,h=screen.width/2-e/2,i=screen.height/2-f/2-100;return window.open(d,"share_twitter","toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width="+e+", height="+f+",       top="+i+", left="+h),c.hide(),!1},i=function(){var b=c.htmlSelection.replace(/<p[^>]*>/gi,"\n").replace(/<\/p>|  /gi,"").trim(),d={};return d.subject=encodeURIComponent("Quote from "+document.title),d.body=encodeURIComponent("“"+b+"”")+"%0D%0A%0D%0AFrom: "+document.title+"%0D%0A"+window.location.href,a(this).attr("href","mailto:?subject="+d.subject+"&body="+d.body),c.hide(),!0};this.render=function(){var b='<div id="shareSelectionPopover" style="position:absolute;">  <div id="shareSelectionPopover-inner">    <ul>      <li><a class="tweet" href="" title="Share this selection on Twitter" target="_blank">Tweet</a></li>      <li><a class="email" href="" title="Share this selection by email" target="_blank"><svg width="20" height="20"><path stroke="#FFF" stroke-width="6" d="m16,25h82v60H16zl37,37q4,3 8,0l37-37M16,85l30-30m22,0 30,30"/></svg></a></li>    </ul>  </div>  <div class="shareSelectionPopover-clip"><span class="shareSelectionPopover-arrow"></span></div></div>';c.$popover=a(b),c.$popover.find("a.tweet").click(h),c.$popover.find("a.email").click(i),a("body").append(c.$popover)},this.setElements=function(b){"string"==typeof b&&(b=a(b)),c.$elements=b instanceof a?b:a(b),c.$elements.mouseup(c.show).mousedown(c.hide)},this.render(),b.elements&&this.setElements(b.elements)};"function"==typeof define?define(function(){return b}):window.SelectionSharer=b}(jQuery);