var P=[
["Google Ads + Landing Pages","VLCC Institute Chromepet","A beauty and wellness institute competing with many academies for course enquiries in Chromepet.","Ran Google Ads course by course and built a dedicated landing page for each, so every click lands on a matching message.","1200+ enquiries",null,1],
["SEO + Google Ads + Meta Ads","Thirumala Roofings","A steel building manufacturer that buyers couldn’t find on Google, so enquiries went to competitors.","Rebuilt the keyword strategy, fixed on-page SEO, and ran Google Ads and Meta Ads around buyer-intent searches.","400+ leads","mezzanine floor contractors in chennai"],
["SEO","iCFix Services","A laptop repair training centre buried under bigger institutes in search results.","Mapped course keywords, rewrote the training pages and fixed technical SEO so Google read the site clearly.","500+ enquiries","Laptop Chip Level Training in Chennai"],
["SEO","The Bling Detailing Studio","A new car detailing studio with a good finish but no online presence in Chennai.","Set up local SEO, service pages and Google Business basics to build visibility from day one.","Just started, rankings building"],
["SEO","SkyHMS","A hotel software product competing with established brands for the same searches.","Targeted high-intent software keywords, rebuilt key pages and tightened the site structure.","300+ demo requests","hotel management software in chennai"],
["Meta Ads","Macho Saloon","A salon depending on walk-ins, with no steady flow of new customers.","Ran location-targeted Meta campaigns with offer-led creatives and a fast lead form.","1000+ leads"],
["Meta Ads","Golden Sun Resorts","A resort with empty weekdays and heavy dependence on travel portals.","Targeted nearby families and weekend travellers with video ads and WhatsApp click-to-chat.","1500+ booking enquiries"],
["Meta Ads","Golden Hot Chocolate","A new dessert brand with almost no awareness.","Launched reel-led campaigns and tested audiences until cost per lead dropped.","700+ leads"],
["Meta Ads","Sarvo Foods","A food brand that needed bulk buyers and distributors, not just likes.","Built lead-gen ads for retailers and bulk buyers, and tidied the follow-up process.","900+ leads"],
["Meta Ads","Calco Fitness App","A new fitness app struggling to get sign-ups at a workable cost.","Tested creatives and audiences, tracked sign-ups to ad level, and scaled the winners.","2000+ sign-ups"]
];
document.getElementById("pj").innerHTML=P.map(function(p){
var k=p[5]?'<a class="kw" target="_blank" rel="noopener" href="https://www.google.com/search?q='+encodeURIComponent(p[5])+'"><svg class="i"><use href="#search"/></svg>Rank 1 for “'+p[5]+'”<svg class="i"><use href="#ext"/></svg></a>':'';
if(p[6])k='<a class="kw" href="#landing"><svg class="i"><use href="#page"/></svg>See the 3 landing pages</a>';
return '<div class="col-12 col-md-6 col-lg-4"><div class="card pj h-100"><div class="img"><div><svg class="i"><use href="#img"/></svg>Add project image</div></div><div><span class="pill">'+p[0]+'</span></div><h3>'+p[1]+'</h3><dl><dt>Problem</dt><dd>'+p[2]+'</dd><dt>What I did</dt><dd>'+p[3]+'</dd><dt>Result</dt><dd><span class="big">'+p[4]+'</span>'+k+'</dd></dl></div></div>'}).join("");
var L=[["Hair course","hair.vlccinstitutechrompet.com","Built for the hair course Google Ads: one clear message and one simple enquiry form."],["Makeup course","makeup.vlccinstitutechrompet.com","Built for the makeup course Google Ads, so the page matches what the searcher clicked."],["Skincare course","skincare.vlccinstitutechrompet.com","Built for the skincare course Google Ads, fast on mobile and focused on enquiries."]];
document.getElementById("lp").innerHTML=L.map(function(l){return '<div class="col-12 col-md-6 col-lg-4"><div class="card lp h-100"><div class="img"><div><svg class="i"><use href="#img"/></svg>Add page screenshot</div></div><h3>VLCC '+l[0]+'</h3><p>'+l[2]+'</p><div class="mt-auto pt-3"><a class="kw" target="_blank" rel="noopener" href="https://'+l[1]+'/"><svg class="i"><use href="#page"/></svg>'+l[1]+'<svg class="i"><use href="#ext"/></svg></a></div></div></div>'}).join("");
/* 3D orbit */
var v=document.getElementById("vis"),s=document.getElementById("stage"),ring=document.getElementById("oring"),ch=[].slice.call(document.querySelectorAll(".fl")),n=ch.length,A=0,T=0,lastT=0,rm=matchMedia("(prefers-reduced-motion:reduce)").matches;
function lay(){var W=v.clientWidth,rx=W/2-62,ry=W*.2;ring.style.width=rx*2+"px";ring.style.height=ry*2+"px";
ch.forEach(function(c,i){var th=A+i*2*Math.PI/n,d=(Math.sin(th)+1)/2,x=Math.cos(th)*rx,y=Math.sin(th)*ry+Math.sin(th*2+i)*7,sc=.7+.3*d;
c.style.transform="translate(-50%,-50%) translate3d("+x+"px,"+y+"px,0) scale("+sc+")";c.style.opacity=.5+.5*d;c.style.zIndex=d>.5?20:5;c.style.filter=d<.35?"blur(.6px)":"none"})}
function tick(t){A+=(t-lastT)*.00032;lastT=t;lay();requestAnimationFrame(tick)}
lay();addEventListener("resize",lay);
if(!rm){requestAnimationFrame(function(t){lastT=t;tick(t)});
var tw=v.parentNode;tw.addEventListener("pointermove",function(e){var r=v.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;s.style.transform="rotateY("+x*16+"deg) rotateX("+-y*16+"deg)"});
tw.addEventListener("pointerleave",function(){s.style.transform=""})}
