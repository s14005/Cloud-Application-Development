(function () {
    "use strict";
    // レコード一覧の表示後イベント
    kintone.events.on('app.record.index.show', function (event) {
    　　　　　　　　　// ボタン
            　　　　 var myIndexButton = document.createElement('button');
            　　　　 myIndexButton.id = 'my_index_button';
            　　　　 myIndexButton.innerHTML = '一覧のボタン';

    　　　　　　　　　// メニューの右側の空白部分にボタンを設置
    　　　　　　　　　kintone.app.getHeaderMenuSpaceElement().appendChild(myIndexButton);
        });
})();
