
(function () {
    "use strict";
    kintone.events.on('app.record.index.show', function (event) {
            if (document.getElementById ('my_index_button') != null) {
                        return;
                    }
            var myIndexButton = document.createElement('button');
            myIndexButton.id = 'my_index_button';
            myIndexButton.innerHTML = '一覧のボタン';
            myIndexButton.onclick = function() {
                        var myHeaderSpace = kintone.app.getHeaderSpaceElement();
                        // 文字列要素
                        var myListHeaderDiv = document.createElement('div');
                        myListHeaderDiv.style.width = '100%';
                        myListHeaderDiv.style.height = '35px';
                        myListHeaderDiv.style.textAlign = 'center';
                        myListHeaderDiv.style.fontSize = '30px';
                        myListHeaderDiv.style.fontWeight = 'bold';
                        myListHeaderDiv.style.backgroundColor = '#ffd78c';
                        myListHeaderDiv.innerHTML = '押されて飛び出てじゃじゃじゃじゃーん';

                        // メニューの下側の空白部分に文字列を表示
                        myHeaderSpace.innerHTML = null; // ← 増殖を防ぐため一旦明示的にnullをセット
                        myHeaderSpace.appendChild(myListHeaderDiv);
                    }

            kintone.app.getHeaderMenuSpaceElement().appendChild(myIndexButton);
        });
})();
