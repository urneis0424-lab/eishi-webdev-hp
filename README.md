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
| `/api/contact` | お問い合わせフォーム送信 | POST | - |

### `/api/contact` リクエスト例
```json
{
  "name": "山田 太郎",
  "company": "株式会社サンプル",
  "email": "info@example.com",
  "website": "https://example.com",
  "consultation_type": "新規制作",
  "plan": "スタンダードプラン",
  "budget": "20〜40万円",
  "timeline": "2ヶ月以内",
  "message": "Webサイト制作をお願いしたいです",
  "meeting": "希望する"
}
```

## 環境変数の設定

### 必要な環境変数
このプロジェクトは、EmailJS APIを使用してお問い合わせフォームからメールを送信します。以下の環境変数が必要です：

```bash
EMAILJS_PUBLIC_KEY=your-public-key
EMAILJS_SERVICE_ID=your-service-id
EMAILJS_TEMPLATE_ID=your-template-id
```

### ローカル開発環境での設定

1. `.dev.vars` ファイルを作成（プロジェクトルートに）：
```bash
# .dev.vars
EMAILJS_PUBLIC_KEY=-625gei5vpG3V8t3b
EMAILJS_SERVICE_ID=Eishi_Web_HP
EMAILJS_TEMPLATE_ID=Eishi_Web_form
```

2. `.dev.vars` は `.gitignore` に含まれているため、GitHubにプッシュされません

### Cloudflare Pages（本番環境）での設定

#### 方法1: Cloudflare Dashboardから設定（推奨）
1. https://dash.cloudflare.com/ にログイン
2. Pages → `eishi-webdev-hp` プロジェクトを選択
3. **Settings** → **Environment variables** に移動
4. 以下の環境変数を追加：
   - `EMAILJS_PUBLIC_KEY`: `-625gei5vpG3V8t3b`
   - `EMAILJS_SERVICE_ID`: `Eishi_Web_HP`
   - `EMAILJS_TEMPLATE_ID`: `Eishi_Web_form`
5. **Save** をクリック
6. 再デプロイして変更を反映

#### 方法2: Wrangler CLIから設定
```bash
# 環境変数を設定
npx wrangler pages secret put EMAILJS_PUBLIC_KEY --project-name eishi-webdev-hp
npx wrangler pages secret put EMAILJS_SERVICE_ID --project-name eishi-webdev-hp
npx wrangler pages secret put EMAILJS_TEMPLATE_ID --project-name eishi-webdev-hp

# 設定を確認
npx wrangler pages secret list --project-name eishi-webdev-hp
```

## セキュリティ対策
- ✅ APIキーを環境変数で管理（`.dev.vars`、Cloudflare環境変数）
- ✅ `.dev.vars` を `.gitignore` に追加済み
- ✅ フロントエンドに機密情報を露出しない
- ✅ バックエンド（Hono）経由でメール送信
- 🟡 EmailJSのドメイン制限設定を推奨（EmailJSダッシュボードで設定）
- 🟡 reCAPTCHA統合を推奨（スパム対策）

## データ構造
現在はデータベースを使用していません。お問い合わせはEmailJS経由でメール送信されます。

## 技術スタック
- **フレームワーク**: Hono (Cloudflare Workers対応)
- **ビルドツール**: Vite
- **スタイリング**: Tailwind CSS (CDN)
- **アイコン**: Font Awesome
- **フォント**: Google Fonts (Noto Sans JP, Poppins)
- **プロセス管理**: PM2
- **メール送信**: EmailJS API
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

# 環境変数ファイルを作成
cat > .dev.vars << 'EOF'
EMAILJS_PUBLIC_KEY=-625gei5vpG3V8t3b
EMAILJS_SERVICE_ID=Eishi_Web_HP
EMAILJS_TEMPLATE_ID=Eishi_Web_form
EOF
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
3. 環境変数の設定（上記参照）

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
- **Environment variables**: 上記の3つを設定

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
├── .dev.vars              # ローカル環境変数（Git管理外）
├── .gitignore             # Git除外設定
├── ecosystem.config.cjs   # PM2設定
├── package.json           # 依存関係とスクリプト
├── tsconfig.json          # TypeScript設定
├── vite.config.ts         # Vite設定
└── README.md              # このファイル
```

## トラブルシューティング

### お問い合わせフォームが動作しない
1. 環境変数が正しく設定されているか確認
   ```bash
   # ローカル: .dev.vars ファイルの存在確認
   cat .dev.vars
   
   # 本番: Cloudflare Dashboard → Settings → Environment variables
   ```
2. ブラウザのコンソールでエラーを確認
3. `/api/contact` エンドポイントが正常に動作しているか確認
   ```bash
   curl -X POST http://localhost:3000/api/contact \
     -H "Content-Type: application/json" \
     -d '{"name":"Test","email":"test@example.com",...}'
   ```

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
