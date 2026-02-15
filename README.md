# Eishi Urano | Web Developer - Portfolio Site

## プロジェクト概要
- **名前**: Eishi Urano Web Developer Portfolio
- **目的**: フリーランスWeb開発者のポートフォリオサイト
- **特徴**: 
  - モダンでプロフェッショナルなデザイン
  - レスポンシブ対応（スマホ・タブレット・PC）
  - ヒーローセクションのアニメーション効果
  - セキュアなお問い合わせフォーム（環境変数管理）

## 完成している機能
- ✅ ヘッダーナビゲーション（固定）
- ✅ ヒーローセクション（アニメーション＋ダークオーバーレイ）
- ✅ Why Choose Usセクション（3つの強み）
- ✅ サービス紹介セクション（4つのサービス）
- ✅ 制作実績セクション
- ✅ 料金プランセクション（制作プラン3つ）
- ✅ 保守運用プランセクション（3つの保守プラン）
- ✅ 制作フローセクション
- ✅ お問い合わせフォーム（EmailJS統合・環境変数管理）
- ✅ フッター
- ✅ SEO対策（OGP、JSON-LD、sitemap.xml）

## アクセスURL
- **本番環境**: https://eishi-webdev-hp.pages.dev/
- **GitHub**: https://github.com/urneis0424-lab/eishi-webdev-hp

## API エンドポイント
| URI | 説明 | メソッド | 認証 |
|-----|------|---------|------|
| `/` | メインページ | GET | - |

※お問い合わせフォームは、フロントエンドから直接EmailJS APIを呼び出します。

## 環境変数の設定

このプロジェクトは環境変数を使用しません。EmailJSのPublic Keyはフロントエンドに直接記述されており、公開されても安全です。

### セキュリティ確保のために
EmailJSダッシュボードで「Allowed Domains」を設定してください（上記のセキュリティ対策を参照）。

## セキュリティ対策
- ✅ EmailJSのPublic Keyを使用（ブラウザからの直接呼び出し）
- ✅ EmailJSダッシュボードで「Allowed Domains」設定を推奨
  - `eishi-webdev-hp.pages.dev` のみ許可
  - 他のドメインからのリクエストを拒否
- 🟡 reCAPTCHA統合を推奨（スパム対策）

### EmailJSセキュリティ設定手順
1. https://dashboard.emailjs.com/ にログイン
2. **Account** → **Security** タブ
3. **Allowed Domains** に以下を追加：
   - `eishi-webdev-hp.pages.dev`
   - `localhost:3000`（開発用）
4. **Save** をクリック

これで、指定したドメイン以外からのリクエストは自動的に拒否されます。

## データ構造
現在はデータベースを使用していません。お問い合わせはEmailJS経由でメール送信されます（ブラウザから直接APIコール）。

## 技術スタック
- **フレームワーク**: Hono (Cloudflare Workers対応)
- **ビルドツール**: Vite
- **スタイリング**: Tailwind CSS (CDN)
- **アイコン**: Font Awesome
- **フォント**: Google Fonts (Noto Sans JP, Poppins)
- **プロセス管理**: PM2
- **メール送信**: EmailJS API（フロントエンドから直接呼び出し）
- **ホスティング**: Cloudflare Pages

## SEO対策
- ✅ JSON-LD構造化データ（Personスキーマ）
- ✅ OGPタグ完全実装（Facebook/Twitter対応）
- ✅ Canonical URL設定
- ✅ OG画像（1200×630px）
- ✅ sitemap.xml（`/sitemap.xml`）
- ✅ すべての画像にalt属性設定
- ✅ meta description最適化

### SEO確認ツール
- **Facebook Sharing Debugger**: https://developers.facebook.com/tools/debug/
- **Twitter Card Validator**: https://cards-dev.twitter.com/validator
- **Google Rich Results Test**: https://search.google.com/test/rich-results
- **Google Search Console**: サイトマップ登録 → `https://eishi-webdev-hp.pages.dev/sitemap.xml`

## ローカル開発

### 初期セットアップ
```bash
# 依存関係のインストール
npm install
```

### 開発サーバー起動
```bash
# ビルド
npm run build

# 開発サーバー起動（PM2）
pm2 start ecosystem.config.cjs

# サービスの確認
curl http://localhost:3000

# ログ確認
pm2 logs webapp --nostream

# 再起動
pm2 restart webapp
```

## Cloudflare Pagesへのデプロイ

### 前提条件
1. Cloudflare API Tokenの設定（GenSpark Deployタブ）
2. GitHubリポジトリとCloudflare Pagesの連携

### デプロイ手順
```bash
# ビルド
npm run build

# 手動デプロイ（Wrangler経由）
npx wrangler pages deploy dist --project-name eishi-webdev-hp

# または、GitHubにプッシュして自動デプロイ
git add .
git commit -m "Your commit message"
git push origin main
```

### Cloudflare Pages設定
- **Framework preset**: None
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Root directory**: （空欄）

## プロジェクト構成
```
webapp/
├── src/
│   └── index.tsx          # メインアプリケーション（Hono）
├── public/
│   ├── og-image.jpg       # OG画像（1200×630px）
│   ├── sitemap.xml        # サイトマップ
│   └── static/            # 静的ファイル（CSS、JS等）
├── dist/                  # ビルド出力（Cloudflare Pagesにデプロイ）
├── .gitignore             # Git除外設定
├── ecosystem.config.cjs   # PM2設定
├── package.json           # 依存関係とスクリプト
├── tsconfig.json          # TypeScript設定
├── vite.config.ts         # Vite設定
└── README.md              # このファイル
```

## トラブルシューティング

### お問い合わせフォームが動作しない
1. ブラウザのコンソールでエラーを確認
2. EmailJSダッシュボードで「Allowed Domains」が正しく設定されているか確認
3. EmailJSのService IDとTemplate IDが正しいか確認
4. ブラウザで直接EmailJS APIを呼び出せるか確認（開発者ツールのNetworkタブ）

### OG画像が表示されない
1. Facebook Sharing Debuggerで「Scrape Again」を2〜3回クリック
2. 画像URLにアクセスして確認：https://eishi-webdev-hp.pages.dev/og-image.jpg
3. キャッシュバスター（`?v=2`）が設定されているか確認

## デプロイ情報
- **プラットフォーム**: Cloudflare Pages
- **ステータス**: ✅ Active
- **最終更新**: 2026-02-15

## ライセンス
© 2026 Eishi Urano │ Web Developer. All rights reserved.
