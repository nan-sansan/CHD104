    // 當文檔準備就緒後執行代碼
    $(document).ready(function() {
        // 當增加按鈕被點擊時
        $('#increaseBtn').on('click', function() {
          // 獲取商品數量輸入框
            var quantityInput = $('#quantity');
            // 將輸入框的值轉換為數字
            var quantity = parseInt(quantityInput.val());
    
            // 如果值是數字
            if (!isNaN(quantity)) {
                // 將輸入框的值增加 1
                quantityInput.val(quantity + 1);
            }
            });
    
            // 當減少按鈕被點擊時
            $('#decreaseBtn').on('click', function() {
            // 獲取商品數量輸入框
            var quantityInput = $('#quantity');
            // 將輸入框的值轉換為數字
            var quantity = parseInt(quantityInput.val());
    
            // 如果值是數字，且大於 1
            if (!isNaN(quantity) && quantity > 1) {
                // 將輸入框的值減少 1
                quantityInput.val(quantity - 1);
            }
            });
        });