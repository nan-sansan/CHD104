/* ---------------------------------特選新聞--------------------------------- */
$(document).ready(function(){
    var headlineNews  = [
        {link:"newspage.html",pic:"material/winter.jpg",title:"溫暖寒冬，將冷冽轉為溫馨。",content:"陪伴您度過這個冬天，將寒冷的季節化為充滿愛與溫馨的冬日風情。立即探索我們的線上商店，挑選出冬日暖心系列的精品，讓您的冬天更加溫馨美好。"},
        {link:"newspage.html",pic:"material/celebrate.jpg",title:"慶周年，滿額贈好禮！",content:"隆重慶祝周年，感謝您一路的支持與厚愛。為了回饋您的支持，我們特別推出了滿額贈好禮的精彩活動！"},
        {link:"newspage.html",pic:"material/open.png",title:"驚！101限定快閃店。",content:"與台北101攜手合作，精心打造限定快閃店，將品牌的簡約時尚注入繁華都會之中。來店感受時尚風潮，一同品味生活中的美好。"},
        {link:"newspage.html",pic:"#",title:"環保里程碑 🌱",content:"12312345"},
        {link:"newspage.html",pic:"#",title:"環保里程碑 🌱",content:"12312345"},
        {link:"newspage.html",pic:"#",title:"環保里程碑 🌱",content:"12312345"},
        {link:"newspage.html",pic:"#",title:"環保里程碑 🌱",content:"12312345"},
        {link:"newspage.html",pic:"#",title:"環保里程碑 🌱",content:"12312345"},
        {link:"newspage.html",pic:"#",title:"環保里程碑 🌱",content:"12312345"}
    ];


    var headline=$("#headline-news-block");
    headlineNews.forEach(function(h) {
        var newsElement = $("<div>").html(`
            <div class="pic"><a href=${h.link}><img src=${h.pic} alt=""></a></div>
            <div class="title"><a href=${h.link}>${h.title}</a></div>
            <div class="text"><a href=${h.link}>${h.content}</a></div>
        `).addClass("headline-news");
        headline.append(newsElement);
    });

    function updateNews() {
        var newsBlockWidth = headline.width();
        // var itemWidth = $('.headline-news').outerWidth(true);
        var itemWidth = parseInt($('.headline-news').css('min-width'),10)+parseInt($('.headline-news').css('margin-right'),10)+parseInt($('.headline-news').css('margin-left'),10);
        var vidibleNews = Math.floor(newsBlockWidth / itemWidth);

        $('.headline-news').hide();
        $(".headline-news:lt("+vidibleNews+")").show();
    }

    updateNews();
    $(window).resize(function(){
        updateNews();
    });


    var featuredList = [
        {link:"#",pic:"material/pillowS.png",name:"魂牽夢縈",price:"999",content:"12312345"},
        {link:"#",pic:"#",name:"魂牽夢縈",price:"999",content:"12312345"},
        {link:"#",pic:"#",name:"魂牽夢縈",price:"999",content:"12312345"},
        {link:"#",pic:"#",name:"魂牽夢縈",price:"999",content:"12312345"},
        {link:"#",pic:"#",name:"魂牽夢縈",price:"999",content:"12312345"},
        {link:"#",pic:"#",name:"魂牽夢縈",price:"999",content:"12312345"},
        {link:"#",pic:"#",name:"魂牽夢縈",price:"999",content:"12312345"},
        {link:"#",pic:"material/topic.jpg",name:"魂牽夢縈",price:"999",content:"極致純淨，空間中的一抹雅致之選。如水晶一般晶瑩剔透，完美呈現花卉之美。<br><br>簡約的設計融入現代生活，使得這個花瓶不僅是裝飾品，更是一種生活態度。<br><br>適合放置於任何角落，它能為家居帶來清新自然的氛圍，成為每日生活中的一抹亮色。精湛工藝、獨特造型，每個花瓶都是一件獨一無二的藝術品。選擇我們的花瓶，將自然之美注入居家空間，讓您的生活更加美好。 <br><br>"}
    ];
    var itmeListContainer = $("#Featured-list");
    featuredList.forEach(function(f){
        var newListItem = $("<div>").html(`
            <div class="top">
                <div class="space"></div>
                <div class="sti"></div>
                <div class="pic"><a href=${f.link}><img src=${f.pic} alt=${f.name}></a></div>
            </div>
            <div class="interval"></div>
            <div class="down">
                <div class="namecolor"></div>
                <div class="itemName"><a href=${f.link}>${f.name}</a></div>
            </div>
        `).addClass("top-picks-item");
        itmeListContainer.append(newListItem);
        newListItem.click(function(){
            showBigfeatured(f);
        });
    });

    function showBigfeatured(ListItem){
        $("#featured-pic").attr("src",ListItem.pic).attr("alt",ListItem.name);
        $("#featured-price").html(`NT.${ListItem.price}`);
        $("#featured-name").html(ListItem.name);
        $("#featured-content").html(ListItem.content);
        $("html, body").animate({
            scrollTop: $("#Featured").offset().top - 110
        }, 250);
    }
});


/* ---------------------------------新聞盒子--------------------------------- */
$(document).ready(function (){
    var newsMessages  = [
        {date: "12/09",link:"#",title:"環保里程碑 🌱 使用100%可持續材料，為地球盡一份心力。"},
        {date: "12/01",link:"#",title:"會員數破千！感謝您的陪伴，限時滿額送禮，一同慶祝。"},
        {date: "11/10",link:"#",title:"雙十一狂歡季，大大大優惠，探索簡約之美，限時特價！"},
        {date: "11/07",link:"#",title:"簡約生活，新的故事開始。官方網站即將升級，敬請期待！"},
        {date: "11/01",link:"#",title:"成為我們社群的一部分！參與我們的線上活動，贏得限量好禮。"},
        {date: "10/XX",link:"#",title:"很長的文字的測試用，贏得限量好禮。成為我們社群的一部分！參與我們的線上活動，贏得限量好禮。成為我們社群的一部分！參與我們的線上活動，贏得限量好禮。成為我們社群的一部分！參與我們的線上活動，贏得限量好禮。"},
        {date: "10/XX",link:"#",title:"很長的文字的測試用，贏得限量好禮。成為我們社群的一部分！參與我們的線上活動，贏得限量好禮。成為我們社群的一部分！參與我們的線上活動，贏得限量好禮。成為我們社群的一部分！參與我們的線上活動，贏得限量好禮。"},
        {date: "10/XX",link:"#",title:"很長的文字的測試用，贏得限量好禮。成為我們社群的一部分！參與我們的線上活動，贏得限量好禮。成為我們社群的一部分！參與我們的線上活動，贏得限量好禮。成為我們社群的一部分！參與我們的線上活動，贏得限量好禮。"}
    ];


    var NewsBox = $("#index-NewsBox");
    newsMessages.forEach(function(m) {
        var pElement = $("<p>").html(`
            <a href=${m.link}>
                ${m.date}｜<br>${m.title}
            </a>
        `).addClass("title");
        NewsBox.append(pElement);
    });
    var more = $("<p>").html(`<a href="AllNews.html">更多消息</a>`).addClass("more");
    NewsBox.append(more);
});


