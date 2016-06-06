# 2016/06/06
##Excel/CSVを取り込んでアプリを作ってみよう
Excel/CSVを取り込んで少し設定をいじるだけで簡単に最初からデータが入ったアプリを作ることができる。　　

##はじめよう kintone JavaScript APIを触ってみる
###第1回 kintone javascript APIのイジりかた
JavaScriptファイルの拡張子は.jsで文字コードはUTF-8(BOMなし)
JavaScriptは、即時関数パターンで書いた方が良いです。
処理内容の先頭に"use strict";という文字列を記述しましょう。

###第2回 レコード一覧画面にボタンを置いてみよう！
kintone.events.on(event, handler(event))これが、イベントハンドラーを登録するためのkintone JavaScript APIの関数になります。

###第3回 レコード詳細にもボタンを設置しよう！
ID指定して好きなところにボタンを作ることができる
kintone.app.record.getSpaceElement(id)でIDを指定してボタンを置くことができる

###第4回 レコードの値を利用してみよう(詳細画面編)
レコード番号を取得利用する関数は kintone.app.record.getId()PC用になるスマホ用には利用できない。
レコードの値を取得してみよう利用する関数は、kintone.app.record.get()です。スマートフォン用には、kintone.mobile.app.record.get()を利用する。
Webページ上にHTMLで表示されている書式とAPIから取得した値で書式/フォーマットが異なる場合がある。
kintone.app.record.get()における注意点
Kintone.events.onのイベントハンドラ内でKintone.app.record.getおよびkintone.mobile.app.getを実行することはできない。
上記のイベントハンドラ内ではレコードデータの取得は引数のeventオブジェクトを、レコードデータの更新はeventオブジェクトのreturnを使用してください。

###感想
前の時間何やってたのか忘れたので最初からまとめたため時間がかかったつぎからちゃんとメモを取りながら進めるように気をつけようと思った。変なつまり方をしてすすむのが遅かった。
