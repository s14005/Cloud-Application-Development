var fieldValue = '';
var rec = kintone.app.record.get();
if (rec) {
    fieldValue = rec.record.フィールドコード.value;
}
