# 各版における内容の変更

## 第3版（2020-04-20）

#### 第1章&nbsp; こんにちは React

- 「1-1. 環境構築」にて、非推奨になった [ndenv](https://github.com/riywo/ndenv) を [nodenv](https://github.com/nodenv/nodenv) に置き換えた。併せて、[anyenv-update](https://github.com/znz/anyenv-update) と [nodenv-default-packages](https://github.com/nodenv/nodenv-default-packages) のふたつのプラグインを導入
- 同じく「1-1. 環境構築」にて、`yarn upgrade-interactive` コマンドの説明を追加
- 「1-2. Hello, World!」にて、Create React App バージョン 3.4.1 からデフォルトで有効になった React の strict モードについての説明を追加

#### 第2章&nbsp; ナウでモダンな JavaScript

- 「便利な配列やオブジェクトリテラル」の節を 2-5. から 2-3. へ繰り上げ移動。さらに「組み込みオブジェクトを使ったテクニック」の項を追加
- 「2-4. 関数リテラル」にて、アロー関数で引数がひとつのときの括弧を省略するべきかどうかの議論を追加。さらに「引数テクニック」の項を追加
- 「2-6. 非同期処理を扱う」を第3章に「3-7. JavaScript での非同期処理」として移動
- 「2-6. その他 React で多用される記法」節を新規に追加。
- 「2-7. モジュールのインポート／エクスポート」節を追加。`import` と `export` の使い方に加え、ESM 周辺の特殊事情についても説明

#### 第3章&nbsp; 関数型プログラミングでいこう

- 「3-6. ジェネレータ」の章を削除、簡略化した説明を第11章の「自走式重対空砲 redux-saga」にあらためて記述
- 「3-7. JavaScript での非同期処理」にて、説明とサンプルコードを全て刷新。`Promise` オブジェクトの作成法から始まり、通信ライブラリが返す `Promise` オブジェクトを扱う実践的な内容に

#### 第4章&nbsp; TypeScript で型を強める

- 章題を「型のある TypeScript は開発者の味方」から変更し、内容を全体的に再構成。ボリュームも従来の 3 倍以上に
- 「4-5. インターフェースと型合成」にて、現状を鑑み `interface` ではなく `type` での型宣言を推奨するように変更
- 「4-6. さらに高度な型表現」の節を新規に追加
- 「4-7. 型アサーションと型ガード」の節を新規に追加

#### 第5章&nbsp; 強力な拡張記法 JSX

- 「5-1. JSX とは何であるか、何ではないのか」で引用している統計指標をアップデートし、説明をよりくわしく拡充

#### 第6章&nbsp; Lint と Prettier でコード美人になる

- 「6-1. ESLint」で `yarn eslint --init` から始める設定ファイル作成の方法を紹介。各ルールセットやプラグイン、適用ルールの説明についても新しく追加。さらに ESLint を無効化するコメント記述法の説明を追加
- 「6-2. Prettier」でインストールの方法の説明を追加。設定の内容も紹介
- 「6-3. stylelint」としてstylelint についての説明を独立させた
- 「6-4. さらに進んだ設定」で、第2版までは省略していたカスタマイズの内容やその理由までくわしく説明

#### 第7章&nbsp; 何はなくともコンポーネント

- 「7-1. React の基本思想」の内容を一新、宣言的 UI についての説明を追加
- 関数コンポーネントをベースにしてクラスコンポーネントをその対比で説明するという形に変更したため、「7-5. 関数コンポーネント」を順番を入れ替えた上で「7-3. クラスコンポーネント」に差し替えた

#### 第8章&nbsp; Hooks、関数コンポーネントの合体強化パーツ

- 「8-5. Hooks におけるメモ化を理解する」を追加、Hooks のメモ化について 1 節をさいて説明。

#### 第9章&nbsp; React におけるルーティング

- 「9-2. ルーティングライブラリの選定」で Reach Router についての説明を追加。さらに将来の React Router との統合プランについて論評している
- 「9-3. React Router の使い方」を、サンプルコードを利用した説明の部分を「9-4. React Router をアプリケーションに適用する」として独立させ、自身は純粋な使い方の解説としてより詳細な内容に

#### 第10章&nbsp; Redux でグローバルな状態を扱う

- 「10-2. Redux の登場」で、登場時の状況の描写をより詳細に
- 「10-3. Redux の使い方」の内容とサンプルコードを HOC から Hooks インターフェースを使ったものに更新
- 「10-4. Redux 公式スタイルガイド」「10-5. Redux Toolkit を使って楽をしよう」
- 「10-6. Redux と useReducer と State Hook の正体」を新規に追加

#### 第11章&nbsp; React は非同期処理とどう戦ってきたか

- 第11章を「React は非同期処理とどう戦ってきたか」に改題。前版の内容を書き直した上で「11-2. Effect Hook で非同期処理を書く」「11-3. Redux 不要論を検証する」を追加
- その他使用している主なパッケージを、2020年1月時点の最新バージョンにアップデート

#### 第12章&nbsp; データ取得の次世代標準 Suspense

- 章として新しく追加


<br />

## 第2版（2019-04-14）

- Create React App 本家が TypeScript を直接サポートし、[create-react-app-typescript](https://github.com/wmonk/create-react-app-typescript) はパッケージそのものが非推奨になったため、create-react-app-typescript を使用していた部分を create-react-app に入れ替えた
- 「2-5. 便利な配列やオブジェクのトリテラル」に、分割代入についての説明を追加
- 「3-5. クロージャ」の章を追加
- 「3-6. ジェネレータ」の章を追加
- 「4-2. 型のバリエーション」に、never型についての説明を追加
- 「4-3. 配列とオブジェクト」の交差型と共用型についての説明の誤りを訂正。および TypeScript 3.4 から導入された Readonly 型についての説明を追加
- 「4-5. コンパイル設定」に、絶対パスインポートについての説明を追加
- TypeScript の構文チェックツール TSLint については ESLint への統合プランが発表され1、近い将来に非推奨になるとアナウンスがあったため、「6-1. TSLint」の内容を「6-2. ESLint」に変更。加えて全てのサンプルコードの TSLint の環境を ESLint に移行
- 「7-5. 関数コンポーネント」で Stateless Functional Component（SFC）の呼称を Function Component（FC）に変更
- Hooks が導入され Recompose の開発中止が宣告されたため、第8章の内容を「合成するぞ Recompose」から「Hooks で関数コンポーネントを強化する」に置き換える形で刷新
- 「10-3. Reduxの使い方」で、最新のReduxおよびReact Reduxに対応した型解決の記述法に切り替えた
- TypeScript FSAの更新が滞っているため、「10-4. Flux Standard Action」の内容をTypeScript FSAを使わない手法を使ったものに書き換えた
- 「10-5. Redux DevTools」の内容を[『りあクト！ TypeScriptで極める現場のReact開発』](https://oukayuka.booth.pm/items/1312815)に委譲
- 「第11章 Reduxで非同期処理を扱う」の内容を追加
- その他使用している主なパッケージを、2019年3月時点の最新バージョンにアップデート

