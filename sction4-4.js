(function () {
    kintone.events.on('app.record.detail.show', function (event) {
            var updatedAt = '';
            if (event) {
                        updatedAt = event["record"]["更新日時"]["value"];
                    }

            var mySpaceField = kintone.app.record.getSpaceElement('my_space_field');
            mySpaceField.parentNode.style.width = '400px';
            mySpaceField.innerHTML = updatedAt;
        });
})();
