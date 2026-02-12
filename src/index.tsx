import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

// Enable CORS for API routes
app.use('/api/*', cors())

// Main landing page
app.get('/', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="ja">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Web制作サービス | 高品質なWebサイト制作</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            
            body {
                font-family: 'Helvetica Neue', Arial, 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', Meiryo, sans-serif;
                line-height: 1.6;
                color: #333;
            }
            
            .hero-gradient {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            }
            
            .card-hover {
                transition: all 0.3s ease;
            }
            
            .card-hover:hover {
                transform: translateY(-5px);
                box-shadow: 0 10px 30px rgba(0,0,0,0.15);
            }
            
            .feature-icon {
                width: 80px;
                height: 80px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                font-size: 2rem;
            }
            
            .pricing-card {
                transition: all 0.3s ease;
            }
            
            .pricing-card:hover {
                transform: scale(1.05);
            }
            
            .btn-primary {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                transition: all 0.3s ease;
            }
            
            .btn-primary:hover {
                transform: translateY(-2px);
                box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
            }
            
            .section-title {
                position: relative;
                display: inline-block;
                padding-bottom: 15px;
            }
            
            .section-title::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 50%;
                transform: translateX(-50%);
                width: 60px;
                height: 3px;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            }
        </style>
    </head>
    <body>
        <!-- Header -->
        <header class="bg-white shadow-md fixed w-full top-0 z-50">
            <nav class="container mx-auto px-6 py-4">
                <div class="flex justify-between items-center">
                    <div class="text-2xl font-bold text-purple-600">
                        <i class="fas fa-code mr-2"></i>WebStudio
                    </div>
                    <div class="hidden md:flex space-x-8">
                        <a href="#features" class="text-gray-700 hover:text-purple-600 transition">特徴</a>
                        <a href="#services" class="text-gray-700 hover:text-purple-600 transition">サービス</a>
                        <a href="#works" class="text-gray-700 hover:text-purple-600 transition">制作実績</a>
                        <a href="#pricing" class="text-gray-700 hover:text-purple-600 transition">料金プラン</a>
                        <a href="#contact" class="text-gray-700 hover:text-purple-600 transition">お問い合わせ</a>
                    </div>
                    <button class="md:hidden text-gray-700">
                        <i class="fas fa-bars text-2xl"></i>
                    </button>
                </div>
            </nav>
        </header>

        <!-- Hero Section -->
        <section class="hero-gradient text-white pt-32 pb-20">
            <div class="container mx-auto px-6 text-center">
                <h1 class="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
                    あなたのビジネスを<br>次のステージへ
                </h1>
                <p class="text-xl md:text-2xl mb-8 opacity-90">
                    プロフェッショナルなWeb制作で、<br class="md:hidden">お客様の成功をサポートします
                </p>
                <div class="flex flex-col md:flex-row justify-center gap-4 mt-10">
                    <a href="#contact" class="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition">
                        無料相談を予約する
                    </a>
                    <a href="#works" class="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-purple-600 transition">
                        制作実績を見る
                    </a>
                </div>
            </div>
        </section>

        <!-- Features Section -->
        <section id="features" class="py-20 bg-gray-50">
            <div class="container mx-auto px-6">
                <h2 class="text-4xl font-bold text-center mb-4 section-title">選ばれる理由</h2>
                <p class="text-center text-gray-600 mb-16">私たちが多くのお客様に選ばれる3つの理由</p>
                
                <div class="grid md:grid-cols-3 gap-10">
                    <div class="bg-white p-8 rounded-lg shadow-md card-hover text-center">
                        <div class="feature-icon bg-blue-100 text-blue-600 mx-auto mb-6">
                            <i class="fas fa-rocket"></i>
                        </div>
                        <h3 class="text-2xl font-bold mb-4">高速開発</h3>
                        <p class="text-gray-600">
                            最新の開発手法を用いて、高品質なWebサイトを短期間で制作します。スピーディーな対応でビジネスチャンスを逃しません。
                        </p>
                    </div>
                    
                    <div class="bg-white p-8 rounded-lg shadow-md card-hover text-center">
                        <div class="feature-icon bg-green-100 text-green-600 mx-auto mb-6">
                            <i class="fas fa-mobile-alt"></i>
                        </div>
                        <h3 class="text-2xl font-bold mb-4">レスポンシブ対応</h3>
                        <p class="text-gray-600">
                            スマートフォン、タブレット、PCなど、あらゆるデバイスで最適な表示を実現。ユーザー体験を最大化します。
                        </p>
                    </div>
                    
                    <div class="bg-white p-8 rounded-lg shadow-md card-hover text-center">
                        <div class="feature-icon bg-purple-100 text-purple-600 mx-auto mb-6">
                            <i class="fas fa-headset"></i>
                        </div>
                        <h3 class="text-2xl font-bold mb-4">充実のサポート</h3>
                        <p class="text-gray-600">
                            制作後も安心のサポート体制。運用・保守から改善提案まで、長期的なパートナーとしてサポートします。
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Services Section -->
        <section id="services" class="py-20 bg-white">
            <div class="container mx-auto px-6">
                <h2 class="text-4xl font-bold text-center mb-4 section-title">提供サービス</h2>
                <p class="text-center text-gray-600 mb-16">お客様のニーズに合わせた多様なサービス</p>
                
                <div class="grid md:grid-cols-3 gap-8">
                    <div class="border-2 border-gray-200 p-8 rounded-lg card-hover">
                        <div class="text-4xl mb-4 text-purple-600">
                            <i class="fas fa-laptop-code"></i>
                        </div>
                        <h3 class="text-2xl font-bold mb-4">コーポレートサイト制作</h3>
                        <p class="text-gray-600 mb-4">
                            企業の顔となるWebサイトを制作。ブランディングから設計、実装まで一貫してサポートします。
                        </p>
                        <ul class="text-gray-600 space-y-2">
                            <li><i class="fas fa-check text-green-500 mr-2"></i>企業イメージに合わせたデザイン</li>
                            <li><i class="fas fa-check text-green-500 mr-2"></i>SEO対策済み</li>
                            <li><i class="fas fa-check text-green-500 mr-2"></i>CMS導入可能</li>
                        </ul>
                    </div>
                    
                    <div class="border-2 border-gray-200 p-8 rounded-lg card-hover">
                        <div class="text-4xl mb-4 text-blue-600">
                            <i class="fas fa-shopping-cart"></i>
                        </div>
                        <h3 class="text-2xl font-bold mb-4">ECサイト構築</h3>
                        <p class="text-gray-600 mb-4">
                            オンラインショップの構築から決済システムの導入まで、売上向上を実現するECサイトを制作します。
                        </p>
                        <ul class="text-gray-600 space-y-2">
                            <li><i class="fas fa-check text-green-500 mr-2"></i>カート機能実装</li>
                            <li><i class="fas fa-check text-green-500 mr-2"></i>決済システム連携</li>
                            <li><i class="fas fa-check text-green-500 mr-2"></i>在庫管理機能</li>
                        </ul>
                    </div>
                    
                    <div class="border-2 border-gray-200 p-8 rounded-lg card-hover">
                        <div class="text-4xl mb-4 text-red-600">
                            <i class="fas fa-bullhorn"></i>
                        </div>
                        <h3 class="text-2xl font-bold mb-4">ランディングページ制作</h3>
                        <p class="text-gray-600 mb-4">
                            コンバージョンを最大化する、売れるLPを制作。A/Bテストや改善提案も行います。
                        </p>
                        <ul class="text-gray-600 space-y-2">
                            <li><i class="fas fa-check text-green-500 mr-2"></i>CV重視の設計</li>
                            <li><i class="fas fa-check text-green-500 mr-2"></i>広告連携対応</li>
                            <li><i class="fas fa-check text-green-500 mr-2"></i>効果測定・改善</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- Works Section -->
        <section id="works" class="py-20 bg-gray-50">
            <div class="container mx-auto px-6">
                <h2 class="text-4xl font-bold text-center mb-4 section-title">制作実績</h2>
                <p class="text-center text-gray-600 mb-16">これまでに制作したWebサイトの一部をご紹介</p>
                
                <div class="grid md:grid-cols-3 gap-8">
                    <!-- Work Item 1 -->
                    <div class="bg-white rounded-lg overflow-hidden shadow-md card-hover">
                        <div class="h-64 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                            <i class="fas fa-image text-white text-6xl opacity-50"></i>
                        </div>
                        <div class="p-6">
                            <h3 class="text-xl font-bold mb-2">株式会社A様 コーポレートサイト</h3>
                            <p class="text-gray-600 mb-4">モダンでスタイリッシュなデザインの企業サイト</p>
                            <div class="flex gap-2">
                                <span class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">コーポレート</span>
                                <span class="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">レスポンシブ</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Work Item 2 -->
                    <div class="bg-white rounded-lg overflow-hidden shadow-md card-hover">
                        <div class="h-64 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                            <i class="fas fa-image text-white text-6xl opacity-50"></i>
                        </div>
                        <div class="p-6">
                            <h3 class="text-xl font-bold mb-2">B店舗様 ECサイト</h3>
                            <p class="text-gray-600 mb-4">使いやすさにこだわったオンラインショップ</p>
                            <div class="flex gap-2">
                                <span class="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm">ECサイト</span>
                                <span class="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm">決済連携</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Work Item 3 -->
                    <div class="bg-white rounded-lg overflow-hidden shadow-md card-hover">
                        <div class="h-64 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                            <i class="fas fa-image text-white text-6xl opacity-50"></i>
                        </div>
                        <div class="p-6">
                            <h3 class="text-xl font-bold mb-2">C社様 サービスLP</h3>
                            <p class="text-gray-600 mb-4">CVR 150%向上を実現したランディングページ</p>
                            <div class="flex gap-2">
                                <span class="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-sm">LP</span>
                                <span class="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">広告連携</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="text-center mt-12">
                    <a href="#contact" class="btn-primary text-white px-8 py-4 rounded-full font-bold text-lg inline-block">
                        もっと見る <i class="fas fa-arrow-right ml-2"></i>
                    </a>
                </div>
            </div>
        </section>

        <!-- Pricing Section -->
        <section id="pricing" class="py-20 bg-white">
            <div class="container mx-auto px-6">
                <h2 class="text-4xl font-bold text-center mb-4 section-title">料金プラン</h2>
                <p class="text-center text-gray-600 mb-16">お客様のニーズに合わせた柔軟なプランをご用意</p>
                
                <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <!-- Basic Plan -->
                    <div class="border-2 border-gray-200 rounded-lg p-8 pricing-card">
                        <h3 class="text-2xl font-bold mb-4 text-center">ベーシック</h3>
                        <div class="text-center mb-6">
                            <span class="text-5xl font-bold text-purple-600">¥300,000</span>
                            <span class="text-gray-600">~</span>
                        </div>
                        <ul class="space-y-4 mb-8">
                            <li class="flex items-start">
                                <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                                <span>5ページまで</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                                <span>レスポンシブデザイン</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                                <span>基本的なSEO対策</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                                <span>お問い合わせフォーム</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                                <span>3ヶ月サポート</span>
                            </li>
                        </ul>
                        <a href="#contact" class="block w-full bg-gray-200 text-gray-800 text-center py-3 rounded-lg font-bold hover:bg-gray-300 transition">
                            お問い合わせ
                        </a>
                    </div>
                    
                    <!-- Standard Plan -->
                    <div class="border-2 border-purple-600 rounded-lg p-8 pricing-card relative">
                        <div class="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-sm">
                            人気No.1
                        </div>
                        <h3 class="text-2xl font-bold mb-4 text-center text-purple-600">スタンダード</h3>
                        <div class="text-center mb-6">
                            <span class="text-5xl font-bold text-purple-600">¥600,000</span>
                            <span class="text-gray-600">~</span>
                        </div>
                        <ul class="space-y-4 mb-8">
                            <li class="flex items-start">
                                <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                                <span>15ページまで</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                                <span>レスポンシブデザイン</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                                <span>SEO対策完全対応</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                                <span>CMS導入</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                                <span>アクセス解析設定</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                                <span>6ヶ月サポート</span>
                            </li>
                        </ul>
                        <a href="#contact" class="block w-full btn-primary text-white text-center py-3 rounded-lg font-bold">
                            お問い合わせ
                        </a>
                    </div>
                    
                    <!-- Premium Plan -->
                    <div class="border-2 border-gray-200 rounded-lg p-8 pricing-card">
                        <h3 class="text-2xl font-bold mb-4 text-center">プレミアム</h3>
                        <div class="text-center mb-6">
                            <span class="text-5xl font-bold text-purple-600">¥1,000,000</span>
                            <span class="text-gray-600">~</span>
                        </div>
                        <ul class="space-y-4 mb-8">
                            <li class="flex items-start">
                                <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                                <span>ページ数無制限</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                                <span>フルカスタムデザイン</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                                <span>高度なSEO対策</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                                <span>CMS + 独自機能開発</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                                <span>運用コンサルティング</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                                <span>12ヶ月サポート</span>
                            </li>
                        </ul>
                        <a href="#contact" class="block w-full bg-gray-200 text-gray-800 text-center py-3 rounded-lg font-bold hover:bg-gray-300 transition">
                            お問い合わせ
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!-- FAQ Section -->
        <section class="py-20 bg-gray-50">
            <div class="container mx-auto px-6 max-w-4xl">
                <h2 class="text-4xl font-bold text-center mb-4 section-title">よくある質問</h2>
                <p class="text-center text-gray-600 mb-16">お客様からよくいただく質問</p>
                
                <div class="space-y-6">
                    <div class="bg-white p-6 rounded-lg shadow-md">
                        <h3 class="text-xl font-bold mb-3 flex items-center">
                            <i class="fas fa-question-circle text-purple-600 mr-3"></i>
                            制作期間はどのくらいですか?
                        </h3>
                        <p class="text-gray-600 ml-9">
                            プランにより異なりますが、ベーシックプランで約1〜2ヶ月、スタンダードプランで2〜3ヶ月、プレミアムプランで3〜4ヶ月程度が目安となります。
                        </p>
                    </div>
                    
                    <div class="bg-white p-6 rounded-lg shadow-md">
                        <h3 class="text-xl font-bold mb-3 flex items-center">
                            <i class="fas fa-question-circle text-purple-600 mr-3"></i>
                            修正は何回まで可能ですか?
                        </h3>
                        <p class="text-gray-600 ml-9">
                            デザインフェーズでは3回まで、コーディングフェーズでは2回まで無料で修正対応いたします。それ以上の修正が必要な場合は別途お見積もりさせていただきます。
                        </p>
                    </div>
                    
                    <div class="bg-white p-6 rounded-lg shadow-md">
                        <h3 class="text-xl font-bold mb-3 flex items-center">
                            <i class="fas fa-question-circle text-purple-600 mr-3"></i>
                            サポート期間終了後も相談できますか?
                        </h3>
                        <p class="text-gray-600 ml-9">
                            はい、サポート期間終了後も有償でサポートを継続できます。月額保守プラン(¥30,000〜)をご用意しておりますので、お気軽にご相談ください。
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Contact Section -->
        <section id="contact" class="py-20 bg-white">
            <div class="container mx-auto px-6 max-w-4xl">
                <h2 class="text-4xl font-bold text-center mb-4 section-title">お問い合わせ</h2>
                <p class="text-center text-gray-600 mb-16">まずはお気軽にご相談ください</p>
                
                <div class="bg-gray-50 p-8 md:p-12 rounded-lg shadow-md">
                    <form class="space-y-6">
                        <div class="grid md:grid-cols-2 gap-6">
                            <div>
                                <label class="block text-gray-700 font-bold mb-2">お名前 <span class="text-red-500">*</span></label>
                                <input type="text" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600" placeholder="山田 太郎">
                            </div>
                            <div>
                                <label class="block text-gray-700 font-bold mb-2">会社名</label>
                                <input type="text" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600" placeholder="株式会社サンプル">
                            </div>
                        </div>
                        
                        <div class="grid md:grid-cols-2 gap-6">
                            <div>
                                <label class="block text-gray-700 font-bold mb-2">メールアドレス <span class="text-red-500">*</span></label>
                                <input type="email" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600" placeholder="example@email.com">
                            </div>
                            <div>
                                <label class="block text-gray-700 font-bold mb-2">電話番号</label>
                                <input type="tel" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600" placeholder="090-1234-5678">
                            </div>
                        </div>
                        
                        <div>
                            <label class="block text-gray-700 font-bold mb-2">お問い合わせ内容 <span class="text-red-500">*</span></label>
                            <textarea rows="6" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600" placeholder="お問い合わせ内容をご記入ください"></textarea>
                        </div>
                        
                        <div class="text-center">
                            <button type="submit" class="btn-primary text-white px-12 py-4 rounded-full font-bold text-lg">
                                送信する <i class="fas fa-paper-plane ml-2"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer class="bg-gray-900 text-white py-12">
            <div class="container mx-auto px-6">
                <div class="grid md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h3 class="text-2xl font-bold mb-4">
                            <i class="fas fa-code mr-2"></i>WebStudio
                        </h3>
                        <p class="text-gray-400">
                            プロフェッショナルなWeb制作で、お客様のビジネスを成功へ導きます。
                        </p>
                    </div>
                    
                    <div>
                        <h4 class="text-lg font-bold mb-4">サービス</h4>
                        <ul class="space-y-2 text-gray-400">
                            <li><a href="#" class="hover:text-white transition">コーポレートサイト</a></li>
                            <li><a href="#" class="hover:text-white transition">ECサイト</a></li>
                            <li><a href="#" class="hover:text-white transition">ランディングページ</a></li>
                            <li><a href="#" class="hover:text-white transition">Webシステム開発</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 class="text-lg font-bold mb-4">会社情報</h4>
                        <ul class="space-y-2 text-gray-400">
                            <li><a href="#" class="hover:text-white transition">会社概要</a></li>
                            <li><a href="#" class="hover:text-white transition">採用情報</a></li>
                            <li><a href="#" class="hover:text-white transition">プライバシーポリシー</a></li>
                            <li><a href="#" class="hover:text-white transition">利用規約</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 class="text-lg font-bold mb-4">お問い合わせ</h4>
                        <ul class="space-y-2 text-gray-400">
                            <li><i class="fas fa-envelope mr-2"></i>info@webstudio.com</li>
                            <li><i class="fas fa-phone mr-2"></i>03-1234-5678</li>
                            <li><i class="fas fa-map-marker-alt mr-2"></i>東京都渋谷区xxx</li>
                        </ul>
                        <div class="flex space-x-4 mt-4">
                            <a href="#" class="text-2xl hover:text-purple-400 transition"><i class="fab fa-twitter"></i></a>
                            <a href="#" class="text-2xl hover:text-purple-400 transition"><i class="fab fa-facebook"></i></a>
                            <a href="#" class="text-2xl hover:text-purple-400 transition"><i class="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
                
                <div class="border-t border-gray-800 pt-8 text-center text-gray-400">
                    <p>&copy; 2024 WebStudio. All rights reserved.</p>
                </div>
            </div>
        </footer>

        <script>
            // Smooth scroll
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });

            // Scroll to top on logo click
            document.querySelector('header').addEventListener('click', function(e) {
                if (e.target.closest('.text-2xl.font-bold')) {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                }
            });
        </script>
    </body>
    </html>
  `)
})

export default app
