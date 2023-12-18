/* ---------------------------------特選新聞--------------------------------- */
$(document).ready(function(){
    var headlineNews  = [
        {link:"newspage.html",pic:"material/winter.jpg",title:"溫暖寒冬，將冷冽轉為溫馨。",content:"陪伴您度過這個冬天，將寒冷的季節化為充滿愛與溫馨的冬日風情。立即探索我們的線上商店，挑選出冬日暖心系列的精品，讓您的冬天更加溫馨美好。"},
        {link:"newspage.html",pic:"material/celebrate.jpg",title:"慶周年，滿額贈好禮！",content:"隆重慶祝周年，感謝您一路的支持與厚愛。為了回饋您的支持，我們特別推出了滿額贈好禮的精彩活動！"},
        {link:"newspage.html",pic:"material/open.png",title:"驚！101限定快閃店。",content:"與台北101攜手合作，精心打造限定快閃店，將品牌的簡約時尚注入繁華都會之中。來店感受時尚風潮，一同品味生活中的美好。"},
        {link:"newspage.html",pic:"material/mai-truong-E-2skRB88KI-unsplash.jpg",title:"成為社群的一部分！",content:"加入我們的網路家族！探索無盡的優惠樂趣！首次購物即享8折優惠碼🛍️，會員獨享每月神秘優惠，更有社群活動抽大獎！一起分享快樂，成就共同美好時光！立即加入，開啟專屬會員福利！"},
        {link:"newspage.html",pic:"#",title:"雙十一狂歡季，大大大優惠",content:"雙十一驚喜登場！限時大優惠橫掃全場！首次購物享額外9折，滿額再送神秘小禮物🎁！數量有限，速來搶購！打破價格，狂歡不止，只在我們的網路商店！"},
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
        {link:"#",pic:"material/pillowS.png",name:"魂牽夢縈",price:"999",content:
        `在夢境的深處，有一款產品，魂牽夢縈，為您敞開一扇通往寧靜與舒適的大門。<br><br>
        每一個細節都閃爍著令人陶醉的光華。它是一種極致純淨的存在，將簡約的設計與美學完美結合，成就了一個無可比擬的夢幻產品。
        <br><br>
        擁有這份產品，彷彿擁有了一個能夠引領心靈遨遊的嚮導。它以輕盈的觸感和精湛的工藝，打造出一個讓您的夢境更加豐富而深遠的夢幻天地。夜幕降臨，魂牽夢縈的奇蹟將在每一個安靜的時刻綻放，為您帶來無盡的寧靜與美夢。這不僅僅是一款產品，更是一段溫柔的故事，等待著您在夢的旅途中尋找。`},
        {link:"#",pic:"material/mursh.png",name:"夜以繼日",price:"399",content:`在這璀璨星空下，夜晚彷彿是一場屬於夢想的盛宴，而我們的夜燈，如同夜空的繁星，照亮您的黑夜，為您帶來溫馨與安慰。<br><br>

        夜以繼日系列，以創新設計打造，融合現代科技與藝術美感，為您的生活注入更多溫暖與靈感。智能感應技術讓夜燈能夠感知您的存在，智能調光系統根據周圍環境自動調整亮度，營造出最適合您的舒適照明。<br><br>
        
        夜以繼日夜燈的外觀設計優雅簡約，線條柔和，質感十足。同時，產品還擁有多種色彩選擇，讓您根據心情隨時調整燈光色調，營造出不同的氛圍。
        <br><br>
        堅持用心，夜以繼日夜燈採用環保材料，低功耗且長壽命。`},
        {link:"#",pic:"material/clockW.jpg",name:"白駒過隙",price:"559",content:`匠心獨運融合藝術與科技。時光如白駒輕盈奔馳，隨著秒針飛掠，宛如隙間飄過。每一刻都是一幅靜美的風景，鏤刻著匆匆而逝的歲月。<br><br>

        時鐘造型簡約高雅，宛如白駒行雲流水，線條流暢自然。表面採用特殊工藝處理，如同羽毛輕輕拂過，細緻而富有質感。無聲的運轉，靜靜地為生活注入一絲悠閒與寧靜。<br><br>
        
        採用先進的光學技術，不需電池，更環保節能。微型引擎精準運轉，秒針輕巧轉動，仿佛白駒在隙間穿梭。清晰的刻度數字，讓時間流轉更加一目瞭然。<br><br>
        
        是時間的詩篇，是生活的悠揚旋律。讓我們共同感受時光的靜好，與白駒一同奔向未知的隙間。`},
        {link:"#",pic:"material/pumPng.png",name:"浮光掠影",price:"159",content:`浮光掠影，如夢似幻，為您的空間營造一片溫馨的燭光之海。微弱的光暈在空氣中舞動，彷彿浮光掠影，讓整個空間瞬間變得神秘而迷人。<br><br>

        精心調配的香氛，如同浮光輕描淡寫，散發出淡淡的花香和木質調，讓您仿佛置身於花園般的悠閒氛圍中。蠟燭燃燒時，香氣與光影交織，打造出獨一無二的氛圍。<br><br>
        
        採用天然大豆蠟，清潔無害，燃燒更加穩定持久。木製燭芯經過特殊處理，讓燃燒時產生的聲音宛如微風拂過，悠揚動聽。<br><br>
        
        外觀設計簡約優雅，融入現代風格，成為空間的亮點之一。無論是細心閱讀、沉思冥想，或是與摯愛分享時光，總能為您的生活增添一份浪漫與寧靜。`},
        {link:"#",pic:"material/testBowl.jpg",name:"雪碗冰甌",price:"299",content:`雪碗冰甌，匠心獨運，晶瑩剔透。宛如雪花飄落，締造出一片清涼的雪白奇境。<br><br>

        質樸的瓷器材質，經過精湛工藝製作而成，手感細膩。如白雪瓷甌，清新素雅，賦予用餐時光一絲涼意。<br><br>
        
        雪碗冰甌尺寸適中，適用於各種料理擺盤。其簡約而精緻的外觀，搭配食物的美味，猶如雪花在陽光下閃爍，為每一道菜品增添視覺的享受。<br><br>`},
        {link:"#",pic:"material/scarf.jpg",name:"碧波萬頃",price:"299",content:`碧波萬傾，如一波悠悠的湖水蕩漾，瀰漫著令人陶醉的宛如碧波的色彩。纖細柔軟的面料，如水面一樣滑爽，輕盈而溫暖，簡直是冬日裡最完美的披肩。<br><br>

        這條圍巾，巧妙地融合了不同深淺的藍色，宛如湖水波光粼粼，散發著深邃的神秘感。微微織有細緻的紋理，仿佛波浪在水面上蕩漾，給人一種自然流暢的美感。<br><br>
        
        隨心所欲地搭配各種服飾，為整體造型注入一抹清新優雅。輕輕一圈，即可為寒冷的冬日增添一份柔和的色彩，為您的風格添上一份獨特的風采。<br><br>
        
        穿梭在都市的喧囂中，彷彿能聽見湖水輕輕的呢喃聲，感受到自然的恬靜。這條圍巾，不僅是時尚的象徵，更是寒冬中溫暖的陪伴。`},
        {link:"#",pic:"material/blanket.jpg",name:"寒戀重衾",price:"799",content:`如一場寂靜的戀曲，溫暖而深情。毛毯的觸感如同戀人的擁抱，柔軟而舒適，猶如寒冬中的一片溫暖陽光。<br><br>

        設計簡約優雅，色調悠然淡雅，宛如戀愛中的深情一吻。表面織有細緻的紋路，仿佛時間在上面留下深淺不一的印記，猶如愛戀中的默契和點滴回憶。<br><br>
        
        這條寒戀重衾毛毯不僅具有高級的保暖性能，更加採用環保的天然毛料，讓溫暖伴隨著對環境的關懷。溫和的色澤和觸感，讓您在寒冷的季節裡感受到居家的溫馨。<br><br>
        
        在寒冬的夜晚裹上，彷彿身處在一場柔情的浪漫中。無論是與摯愛共度時光，還是獨自閱讀沉浸在書香中，都能感受到毛毯帶來的愜意和溫馨。这是一場舒適的寒戀，每一刻都值得細細品味。`},
        {link:"#",pic:"material/topic.jpg",name:"毫無保留",price:"99999",content:"極致純淨，空間中的一抹雅致之選。如水晶一般晶瑩剔透，完美呈現花卉之美。<br><br>簡約的設計融入現代生活，使得這個花瓶不僅是裝飾品，更是一種生活態度。<br><br>適合放置於任何角落，它能為家居帶來清新自然的氛圍，成為每日生活中的一抹亮色。精湛工藝、獨特造型，每個花瓶都是一件獨一無二的藝術品。選擇我們的花瓶，將自然之美注入居家空間，讓您的生活更加美好。 <br><br>"}
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
        {date: "12/09",link:"newspage.html",title:"環保里程碑 🌱 使用100%可持續材料，為地球盡一份心力。"},
        {date: "12/01",link:"#newspage.html",title:"會員數破千！感謝您的陪伴，限時滿額送禮，一同慶祝。"},
        {date: "11/10",link:"newspage.html",title:"雙十一狂歡季，大大大優惠，探索簡約之美，限時特價！"},
        {date: "11/07",link:"newspage.html",title:"簡約生活，新的故事開始。官方網站即將升級，敬請期待！"},
        {date: "11/01",link:"newspage.html",title:"成為我們社群的一部分！參與我們的線上活動，贏得限量好禮。"},
        {date: "10/31",link:"newspage.html",title:"感謝回饋！VIP會員尊享額外優惠，快來升級你的購物體驗！"},
        {date: "10/10",link:"newspage.html",title:"獨家預購！搶先體驗最新商品，成為第一批擁有者！"},
        {date: "10/07",link:"newspage.html",title:"會員專享！驚喜禮遇等你解鎖，快來開啟會員特權！"}
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


