# コンテンツ設計

## 参照元（要約）
主題は以下：
- InnoDB / MVCC 周辺の理解
- Read View の生成タイミング（RRの挙動）
- 自己可視性（自分の更新が見える理由）
- current read / consistent read の違い
- RR と RC の比較
- Undo/Redo/WAL、チェックポイント、ロック（ギャップロック含む）

## 章立て（詳細プラン）
### 第0章: イントロ
- 学習ゴール
- 「なぜ値が見える/見えないか」を説明できる状態を目指す
- これから出てくる用語の地図（MVCC/Read View/Undo など）

### 第1章: まずSQLとトランザクション超基礎
- SELECT/UPDATE/DELETE の超要点
- BEGIN/COMMIT/ROLLBACK の意味
- 同時実行がなぜ難しいか

### 第2章: Read View はいつ作られる？
- RRでは最初の consistent read で作られる
- SELECT と UPDATE/DELETE/SELECT FOR UPDATE の違い
- 直感図（スナップショット vs 最新）

### 第3章: 自己可視性（自分の更新が見える理由）
- trx_id が自分なら常に見える
- 例：UPDATE → SELECT の挙動

### 第4章: MVCCの内部イメージ
- 行に trx_id と roll_pointer がある
- Undo を辿ることで過去を再構築
- 他トランザクション視点の可視性

### 第5章: consistent read と current read
- ロックの有無
- どのSQLがどちらに当たるか
- SELECT FOR UPDATE の位置づけ

### 第6章: RR と RC の比較
- RC：SELECTごとにRead View生成
- RR：最初のSELECTで固定
- どんな挙動差が起きるか（例：見える/見えない）

### 第7章: ロック入門（行ロック/ギャップロック）
- ファントムとギャップロックの位置づけ
- 「範囲に対して何がロックされるか」
- 2030の範囲ロック例（図解）

### 第8章: Undo/Redo/WAL と復旧
- UndoとRedoの役割の違い
- WAL（Write Ahead Logging）の意味
- チェックポイントの流れ

### 第9章: 用語集（スライド内ヘルプ対応）
- MVCC / Read View / trx_id / undo / redo / WAL
- REPEATABLE READ / READ COMMITTED
- current read / consistent read / gap lock

## 表現方針
- 1スライド = 1テーマ
- 重要語は強調 + 用語カードで補足
- 図は矩形/矢印だけで表現（紙芝居）
- コード例は最小限

## データ設計（仮）
- slides.json
  - id / title / bullets / code / diagram
- glossary.json
  - term / short / long / related

## UI/UX イメージ
- スライド遷移はフェード or スライド
- サイドに章一覧
- 用語はホバーorクリックで短文ツールチップ表示
- 詳解は右サイドパネルで表示（ヘルプ/？アイコンから開く）

## 次のアクション
- 章立ての確定
- 用語集の詳細化
- UIトーン（ライト/ダーク）の決定
