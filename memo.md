# ReferenceError $ is not defined

1. jqueryがうまくロード出来てない
[npm jquery](https://www.npmjs.com/package/jquery)

# dotenvの`process.env.**`がundefined

1. dotenvのconfig設定がうまくいってない
[dotenv/github](https://github.com/nuxt-community/dotenv-module)

# only one instance of babel-polyfill is allowed

[polyfillは2つも無理エラー](https://github.com/exceljs/exceljs/issues/948)

1. 読み込んでいるjavascriptの中にpolyfillを2回読み込む記述があって、被ってしまったために発生したと思われる。
2. 違うファイルを元に作った`@/plugins/zoom_client.js`の記述を全てコメントアウトすることで解決した

# SDKで自動的にレンダリングされる`id="zmmtg-root"`の消し方

1. レンダリングされる段階で`id="zmmtg-root"`が追加される
2. cssをを検証ツールで確認するとbackground-color: blackで覆われている
3. コード内に記述はないので、cssを上書きするためにjoin.vue(自分の場合はindex.vue)の<style>内にcssを上書きする記述をする

```css
#zmmtg-root {
  display: none;
}
```
