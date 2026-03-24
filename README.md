# introducing-frontend-testing

## 目次

- [フロントエンドテストの目的](https://m0nch1.github.io/introducing-frontend-testing/01.why-we-do-frontend-testing)
- [Testing Trophy とは何か](https://m0nch1.github.io/introducing-frontend-testing/02.testing-trophy)
- [Testing Library を知る](https://m0nch1.github.io/introducing-frontend-testing/03.testing-library)

ローカルで読む場合は [index.md](index.md) および上記と同名の `.md` ファイルを参照してください。

## 後で消す memo

- フロントエンドのテストがなぜ必要なのかがわかる
  - テストそのものの理解
    - web アプリケーションにおける広義のテストの定義
    - ウォーターフォールのテスト
    - 自動テスト CI/CD の普及
  - t-wada さんの品質の話
  - フロントエンドのテストは web アプリケーションの開発においてどのような役割を果たすのか
    - バグを含むリリースを防ぐ
    - マイグレーションや機能開発を高速化する
    - ドキュメントとしてのテスト
      - AI 文脈もあるかな
- testing trophy がどのようなテスト戦略モデルなのかがわかる
  - 生まれるに至った経緯など、他のモデル図なども交えて理解できる
- testing library を知る
  - クエリーの優先順位
  - 今選択できるテストの手段（vitest の unit テスト、VRT, E2E など）にはどのようなものがあるのかを知れる
    - かつ、その手段が testing trophy ではどの階層に当たるのかを理解できる
    - 特に remix next.js nuxt.js anguler svelte kit を使う場合にはライブラリが推奨するやり方があるはずなのでそれを示したい
    - react, vue, svelte ではどうか？
- テスト対象のソースコードによってどのようなテストを選択するのが良いのか参考例を示せる
  - いわゆる web アプリケーションにおけるフロントエンドアプリ
  - コンポーネントライブラリを開発する場合
    - VRT の考え方
  - SSR のアプリケーションでテストの考え方は変わるのか？
    - MPA , SPA, そして SSR