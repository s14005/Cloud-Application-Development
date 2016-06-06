(function () {
  "use strict";

    kintone.events.on('app.record.detail.show', function (event) {
            var myIndexButton = document.createElement('button');
            myIndexButton.id = 'my_index_button';
            myIndexButton.innerHTML = 'メニュー部ボタン';
            myIndexButton.onclick = function () {
                        window.alert('メニュー部');
                    }
            kintone.app.record.getHeaderMenuSpaceElement().appendChild(myIndexButton);

            // 任意のスペースフィールドにボタンを設置
            var mySpaceFieldButton = document.createElement('button');
            mySpaceFieldButton.id = 'my_space_field_button';
            mySpaceFieldButton.innerHTML = 'スペースボタン';
            mySpaceFieldButton.onclick = function () {
                        window.alert('スペースフィールド');
                    }
            kintone.app.record.getSpaceElement('my_space_field').appendChild(mySpaceFieldButton);
        });
})();
