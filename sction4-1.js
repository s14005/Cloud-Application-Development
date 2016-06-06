(function () {
    "use strict";
    kintone.events.on('app.record.detail.show', function (event) {
            var myMenuButton = document.createElement('button');
            myMenuButton.id = 'my_menu_button';
            myMenuButton.innerHTML = 'ボタン';
            myMenuButton.onclick = function () {
                        // 取得したレコードIDを出力する
                        window.alert('id: ' + kintone.app.record.getId());
                    };

            kintone.app.record.getHeaderMenuSpaceElement().appendChild(myMenuButton);
        });
})();
