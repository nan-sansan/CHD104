$(document).ready(function(){
    var menu = $('#mob-menu');

    // 監聽選單觸發元素的點擊事件
    $('#mob-menu-trigger').on('click',function(e){
        e.stopPropagation();
        toggleMenu();
    });

    // 監聽 document 的點擊事件
    $(document).on('click',function(e){
        if (!$(e.target).closest(menu).length) {
            if (menu.is(':visible')) {
                menu.hide();
            }
        }
    });
});

function toggleMenu() {
    var menu = $('#mob-menu');
    // alert(menu.style.display);
    if (menu.is(':visible')) {
        menu.hide();
    }else{
        menu.show();
    }
}





