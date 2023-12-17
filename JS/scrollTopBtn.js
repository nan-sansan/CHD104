// 當頁面滾動時顯示或隱藏回到頂部按鈕，並處理碰到footer時的移動
window.onscroll = function() {
  showScrollTopButton();
  moveButtonAboveFooter();
};

function showScrollTopButton() {
  var scrollTopButton = document.getElementById("scrollTopBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTopButton.style.display = "block";
  } else {
    scrollTopButton.style.display = "none";
  }
}

function moveButtonAboveFooter() {
  var scrollTopButton = document.getElementById("scrollTopBtn");
  var footer = document.querySelector("footer");
  var distanceToBottom = document.body.scrollHeight - window.innerHeight - window.scrollY;

  if (distanceToBottom < footer.offsetHeight) {
    var offset = footer.offsetHeight - distanceToBottom + 40; // 加 10px 的額外空間
    scrollTopButton.style.bottom = offset + "px";
  } else {
    scrollTopButton.style.bottom = "40px"; // 恢復原本的底部距離
  }
}

// 滾動到頁面頂部的函數
function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}