import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

app.use('/api/*', cors())

app.get('/', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="ja">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>SAMPLE COMPANY | フリーランス向けWebサイト制作</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700;900&family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
        <script>
          tailwind.config = {
            theme: {
              extend: {
                colors: {
                  primary: '#00c8c8',
                  'primary-dark': '#00a8a8',
                  dark: '#1a1a2e',
                  'dark-light': '#252540',
                  'dark-card': '#2a2a45',
                  accent: '#00e5ff',
                }
              }
            }
          }
        </script>
        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body {
                font-family: 'Noto Sans JP', 'Poppins', sans-serif;
                line-height: 1.8;
                color: #333;
                overflow-x: hidden;
            }
            .font-poppins { font-family: 'Poppins', sans-serif; }

            /* Hero */
            .hero-section {
                background: linear-gradient(135deg, #e8f4f8 0%, #d1ecf1 50%, #b8e0e8 100%);
                position: relative;
                min-height: 600px;
            }
            .hero-overlay {
                position: absolute;
                inset: 0;
                background: url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80') center/cover no-repeat;
                opacity: 0.15;
            }

            /* Section titles */
            .section-title-en {
                font-family: 'Poppins', sans-serif;
                font-weight: 700;
                letter-spacing: 0.1em;
            }
            .section-bar::after {
                content: '';
                display: block;
                width: 60px;
                height: 3px;
                background: #00c8c8;
                margin: 12px auto 0;
            }

            /* Feature circle */
            .feature-circle {
                width: 120px;
                height: 120px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                border: 3px solid #00c8c8;
                background: white;
                transition: all 0.3s ease;
            }
            .feature-circle:hover {
                background: #00c8c8;
                color: white;
                transform: scale(1.05);
            }
            .feature-circle:hover i { color: white !important; }

            /* Connector line between circles */
            .connector { position: relative; }
            .connector::after {
                content: '';
                position: absolute;
                top: 50%;
                right: -50%;
                width: 100%;
                height: 2px;
                border-top: 2px dashed #ccc;
                transform: translateY(-50%);
            }
            .connector:last-child::after { display: none; }

            /* Cards */
            .card-hover {
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            }
            .card-hover:hover {
                transform: translateY(-8px);
                box-shadow: 0 20px 40px rgba(0,0,0,0.15);
            }

            /* Dark section overlay */
            .dark-overlay {
                background: linear-gradient(180deg, rgba(26,26,46,0.95) 0%, rgba(26,26,46,0.9) 100%);
            }

            /* Pricing */
            .pricing-card {
                transition: all 0.3s ease;
                position: relative;
                overflow: hidden;
            }
            .pricing-card::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 4px;
                background: #00c8c8;
                transform: scaleX(0);
                transition: transform 0.3s ease;
            }
            .pricing-card:hover::before {
                transform: scaleX(1);
            }
            .pricing-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 15px 35px rgba(0,0,0,0.3);
            }

            /* FAQ */
            .faq-item {
                border-bottom: 1px solid #eee;
                cursor: pointer;
            }
            .faq-item .faq-answer {
                max-height: 0;
                overflow: hidden;
                transition: max-height 0.4s ease, padding 0.3s ease;
            }
            .faq-item.active .faq-answer {
                max-height: 200px;
                padding-bottom: 16px;
            }
            .faq-item .faq-icon {
                transition: transform 0.3s ease;
            }
            .faq-item.active .faq-icon {
                transform: rotate(45deg);
            }

            /* CTA */
            .cta-gradient {
                background: linear-gradient(135deg, #1a1a2e 0%, #2d2d50 100%);
            }

            /* Scroll animation */
            .fade-up {
                opacity: 0;
                transform: translateY(30px);
                transition: all 0.6s ease;
            }
            .fade-up.visible {
                opacity: 1;
                transform: translateY(0);
            }

            /* Btn */
            .btn-primary {
                background: #00c8c8;
                color: white;
                transition: all 0.3s ease;
            }
            .btn-primary:hover {
                background: #00a8a8;
                transform: translateY(-2px);
                box-shadow: 0 8px 20px rgba(0,200,200,0.3);
            }

            /* Hamburger */
            .mobile-menu {
                transform: translateX(100%);
                transition: transform 0.3s ease;
            }
            .mobile-menu.open {
                transform: translateX(0);
            }
        </style>
    </head>
    <body>
        <!-- Header -->
        <header class="bg-white shadow-sm fixed w-full top-0 z-50">
            <nav class="container mx-auto px-6 py-3">
                <div class="flex justify-between items-center">
                    <a href="#" class="font-poppins text-xl font-bold text-gray-800 tracking-wider">
                        SAMPLE<span class="text-primary">.</span>
                    </a>
                    <div class="hidden md:flex items-center space-x-8 text-sm font-medium">
                        <a href="#about" class="text-gray-600 hover:text-primary transition">ABOUT</a>
                        <a href="#service" class="text-gray-600 hover:text-primary transition">SERVICE</a>
                        <a href="#works" class="text-gray-600 hover:text-primary transition">WORKS</a>
                        <a href="#pricing" class="text-gray-600 hover:text-primary transition">PRICING</a>
                        <a href="#faq" class="text-gray-600 hover:text-primary transition">FAQ</a>
                        <a href="#contact" class="btn-primary px-6 py-2 rounded-full text-white text-sm font-bold">
                            CONTACT
                        </a>
                    </div>
                    <button id="menuBtn" class="md:hidden text-gray-700 text-2xl">
                        <i class="fas fa-bars"></i>
                    </button>
                </div>
            </nav>
        </header>

        <!-- Mobile Menu -->
        <div id="mobileMenu" class="mobile-menu fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 pt-16 px-6">
            <button id="closeMenu" class="absolute top-4 right-4 text-2xl text-gray-600">
                <i class="fas fa-times"></i>
            </button>
            <div class="flex flex-col space-y-6 text-lg">
                <a href="#about" class="text-gray-700 hover:text-primary transition mobile-link">ABOUT</a>
                <a href="#service" class="text-gray-700 hover:text-primary transition mobile-link">SERVICE</a>
                <a href="#works" class="text-gray-700 hover:text-primary transition mobile-link">WORKS</a>
                <a href="#pricing" class="text-gray-700 hover:text-primary transition mobile-link">PRICING</a>
                <a href="#faq" class="text-gray-700 hover:text-primary transition mobile-link">FAQ</a>
                <a href="#contact" class="btn-primary px-6 py-3 rounded-full text-white text-center font-bold mobile-link">CONTACT</a>
            </div>
        </div>

        <!-- Hero Section -->
        <section class="hero-section relative flex items-center pt-20">
            <div class="hero-overlay"></div>
            <div class="container mx-auto px-6 py-20 relative z-10">
                <div class="flex flex-col md:flex-row items-center gap-12">
                    <div class="md:w-1/2 text-center md:text-left">
                        <p class="font-poppins text-primary font-semibold text-sm tracking-widest mb-4">FREELANCE WEB DESIGN</p>
                        <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-6 text-gray-800">
                            売上人を増やすための、<br>
                            フリーランスによる<br>
                            <span class="text-primary">Webサイト制作</span>
                        </h1>
                        <p class="text-gray-600 mb-8 text-lg leading-relaxed">
                            お客様のビジネスに最適化されたWebサイトを、<br class="hidden md:block">
                            フリーランスならではの柔軟さとスピードで制作します。
                        </p>
                        <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <a href="#contact" class="btn-primary px-8 py-4 rounded-full font-bold text-lg inline-flex items-center justify-center gap-2">
                                <i class="fas fa-envelope"></i> 無料相談する
                            </a>
                            <a href="#works" class="border-2 border-gray-400 text-gray-600 px-8 py-4 rounded-full font-bold text-lg hover:border-primary hover:text-primary transition inline-flex items-center justify-center gap-2">
                                <i class="fas fa-arrow-right"></i> 実績を見る
                            </a>
                        </div>
                    </div>
                    <div class="md:w-1/2 relative">
                        <div class="relative">
                            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80" alt="Professional" class="rounded-2xl shadow-2xl w-full max-w-md mx-auto" style="aspect-ratio:3/4;object-fit:cover;">
                            <div class="absolute -bottom-4 -right-4 bg-primary text-white p-4 rounded-xl shadow-lg">
                                <p class="font-poppins font-bold text-2xl">300+</p>
                                <p class="text-sm">制作実績</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Worry Section -->
        <section class="py-20 bg-white">
            <div class="container mx-auto px-6">
                <div class="text-center mb-12 fade-up">
                    <p class="text-lg text-gray-700 mb-2">こんなお悩みありませんか？</p>
                    <h2 class="text-3xl font-bold text-gray-800">
                        Webサイトに関する<span class="text-primary">お困りごと</span>
                    </h2>
                </div>
                <div class="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto fade-up">
                    <div class="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                        <div class="text-primary text-2xl mt-1"><i class="fas fa-exclamation-circle"></i></div>
                        <div>
                            <h4 class="font-bold mb-1">集客できない</h4>
                            <p class="text-gray-600 text-sm">Webサイトからの問い合わせが増えない</p>
                        </div>
                    </div>
                    <div class="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                        <div class="text-primary text-2xl mt-1"><i class="fas fa-exclamation-circle"></i></div>
                        <div>
                            <h4 class="font-bold mb-1">デザインが古い</h4>
                            <p class="text-gray-600 text-sm">競合と比べてサイトの印象が悪い</p>
                        </div>
                    </div>
                    <div class="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                        <div class="text-primary text-2xl mt-1"><i class="fas fa-exclamation-circle"></i></div>
                        <div>
                            <h4 class="font-bold mb-1">更新が大変</h4>
                            <p class="text-gray-600 text-sm">コンテンツの更新に手間がかかる</p>
                        </div>
                    </div>
                </div>

                <!-- Feature Circles -->
                <div class="mt-20 fade-up">
                    <div class="text-center mb-12">
                        <p class="font-poppins text-primary font-semibold text-sm tracking-widest mb-2">WHY CHOOSE US</p>
                        <h2 class="text-3xl font-bold text-gray-800">選ばれる<span class="text-primary">3つの理由</span></h2>
                    </div>
                    <div class="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-24">
                        <div class="text-center">
                            <div class="feature-circle mx-auto mb-4">
                                <i class="fas fa-bolt text-primary text-3xl"></i>
                            </div>
                            <h4 class="font-bold text-lg">スピード対応</h4>
                            <p class="text-gray-500 text-sm mt-1">最短2週間で納品</p>
                        </div>
                        <div class="text-center">
                            <div class="feature-circle mx-auto mb-4">
                                <i class="fas fa-yen-sign text-primary text-3xl"></i>
                            </div>
                            <h4 class="font-bold text-lg">適正価格</h4>
                            <p class="text-gray-500 text-sm mt-1">中間マージンなし</p>
                        </div>
                        <div class="text-center">
                            <div class="feature-circle mx-auto mb-4">
                                <i class="fas fa-comments text-primary text-3xl"></i>
                            </div>
                            <h4 class="font-bold text-lg">丁寧なヒアリング</h4>
                            <p class="text-gray-500 text-sm mt-1">要望を確実に反映</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Service Section (Dark) -->
        <section id="service" class="relative py-24" style="background:#1a1a2e;">
            <div class="container mx-auto px-6 relative z-10">
                <div class="text-center mb-16 fade-up">
                    <p class="font-poppins text-primary font-semibold text-sm tracking-widest mb-2">SERVICE</p>
                    <h2 class="text-3xl font-bold text-white section-bar">提供サービス</h2>
                    <p class="text-gray-400 mt-4">お客様のビジネスに最適なWebソリューションを提供します</p>
                </div>

                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 fade-up">
                    <div class="group relative rounded-xl overflow-hidden card-hover">
                        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80" alt="Corporate Site" class="w-full h-64 object-cover">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                            <h3 class="text-white font-bold text-xl mb-2">コーポレートサイト制作</h3>
                            <p class="text-gray-300 text-sm">企業の信頼性を高めるWebサイト</p>
                        </div>
                    </div>

                    <div class="group relative rounded-xl overflow-hidden card-hover">
                        <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80" alt="EC Site" class="w-full h-64 object-cover">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                            <h3 class="text-white font-bold text-xl mb-2">ECサイト構築</h3>
                            <p class="text-gray-300 text-sm">売上を最大化するオンラインショップ</p>
                        </div>
                    </div>

                    <div class="group relative rounded-xl overflow-hidden card-hover">
                        <img src="https://images.unsplash.com/photo-1432888622747-4eb9a8f5a70d?w=600&q=80" alt="Landing Page" class="w-full h-64 object-cover">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                            <h3 class="text-white font-bold text-xl mb-2">ランディングページ</h3>
                            <p class="text-gray-300 text-sm">CVR最大化を実現するLP制作</p>
                        </div>
                    </div>

                    <div class="group relative rounded-xl overflow-hidden card-hover">
                        <img src="https://images.unsplash.com/photo-1555421689-d68471e189f2?w=600&q=80" alt="WordPress" class="w-full h-64 object-cover">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                            <h3 class="text-white font-bold text-xl mb-2">WordPress構築</h3>
                            <p class="text-gray-300 text-sm">更新しやすいCMSサイト</p>
                        </div>
                    </div>

                    <div class="group relative rounded-xl overflow-hidden card-hover">
                        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80" alt="SEO" class="w-full h-64 object-cover">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                            <h3 class="text-white font-bold text-xl mb-2">SEO対策</h3>
                            <p class="text-gray-300 text-sm">検索上位表示を目指す施策</p>
                        </div>
                    </div>

                    <div class="group relative rounded-xl overflow-hidden card-hover">
                        <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=80" alt="Web Consulting" class="w-full h-64 object-cover">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                            <h3 class="text-white font-bold text-xl mb-2">Webコンサルティング</h3>
                            <p class="text-gray-300 text-sm">データに基づく改善提案</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Works Section -->
        <section id="works" class="py-24 bg-gray-50">
            <div class="container mx-auto px-6">
                <div class="text-center mb-16 fade-up">
                    <p class="font-poppins text-primary font-semibold text-sm tracking-widest mb-2">WORKS</p>
                    <h2 class="text-3xl font-bold text-gray-800 section-bar">制作実績</h2>
                    <p class="text-gray-500 mt-4">これまでに手がけたプロジェクトの一部をご紹介</p>
                </div>

                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 fade-up">
                    <div class="bg-white rounded-xl overflow-hidden shadow-md card-hover">
                        <div class="relative">
                            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80" alt="Work 1" class="w-full h-52 object-cover">
                            <div class="absolute top-4 left-4">
                                <span class="bg-primary text-white text-xs px-3 py-1 rounded-full font-bold">コーポレート</span>
                            </div>
                        </div>
                        <div class="p-6">
                            <h3 class="font-bold text-lg mb-2">IT企業 コーポレートサイト</h3>
                            <p class="text-gray-500 text-sm mb-4">先進的なイメージを伝えるデザインで、採用応募数200%増加を実現</p>
                            <div class="flex gap-2 flex-wrap">
                                <span class="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">デザイン</span>
                                <span class="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">WordPress</span>
                                <span class="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">SEO</span>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white rounded-xl overflow-hidden shadow-md card-hover">
                        <div class="relative">
                            <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80" alt="Work 2" class="w-full h-52 object-cover">
                            <div class="absolute top-4 left-4">
                                <span class="bg-primary text-white text-xs px-3 py-1 rounded-full font-bold">ECサイト</span>
                            </div>
                        </div>
                        <div class="p-6">
                            <h3 class="font-bold text-lg mb-2">アパレルブランド ECサイト</h3>
                            <p class="text-gray-500 text-sm mb-4">ブランドの世界観を表現し、月商3倍を達成したECサイト</p>
                            <div class="flex gap-2 flex-wrap">
                                <span class="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">Shopify</span>
                                <span class="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">デザイン</span>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white rounded-xl overflow-hidden shadow-md card-hover">
                        <div class="relative">
                            <img src="https://images.unsplash.com/photo-1497215842964-222b430dc094?w=600&q=80" alt="Work 3" class="w-full h-52 object-cover">
                            <div class="absolute top-4 left-4">
                                <span class="bg-primary text-white text-xs px-3 py-1 rounded-full font-bold">LP</span>
                            </div>
                        </div>
                        <div class="p-6">
                            <h3 class="font-bold text-lg mb-2">SaaS企業 サービスLP</h3>
                            <p class="text-gray-500 text-sm mb-4">CVR 180%改善を実現した高品質ランディングページ</p>
                            <div class="flex gap-2 flex-wrap">
                                <span class="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">LP制作</span>
                                <span class="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">広告連携</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="text-center mt-12">
                    <a href="#contact" class="btn-primary px-10 py-4 rounded-full font-bold text-lg inline-flex items-center gap-2">
                        すべての実績を見る <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </section>

        <!-- Pricing Section (Dark) -->
        <section id="pricing" class="py-24" style="background:#1a1a2e;">
            <div class="container mx-auto px-6">
                <div class="text-center mb-16 fade-up">
                    <p class="font-poppins text-primary font-semibold text-sm tracking-widest mb-2">PRICING</p>
                    <h2 class="text-3xl font-bold text-white section-bar">料金プラン</h2>
                    <p class="text-gray-400 mt-4">明瞭な料金体系で安心してご依頼いただけます</p>
                </div>

                <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto fade-up">
                    <!-- Light Plan -->
                    <div class="pricing-card bg-dark-card rounded-xl p-8 text-center text-white">
                        <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-6">
                            <i class="fas fa-seedling text-primary text-2xl"></i>
                        </div>
                        <h3 class="font-poppins font-bold text-xl mb-2">LIGHT</h3>
                        <p class="text-gray-400 text-sm mb-6">小規模サイト向け</p>
                        <div class="mb-8">
                            <span class="text-4xl font-bold">¥200,000</span>
                            <span class="text-gray-400">〜</span>
                        </div>
                        <ul class="text-left space-y-3 mb-8 text-gray-300 text-sm">
                            <li class="flex items-center gap-3"><i class="fas fa-check text-primary"></i>3ページまで</li>
                            <li class="flex items-center gap-3"><i class="fas fa-check text-primary"></i>レスポンシブ対応</li>
                            <li class="flex items-center gap-3"><i class="fas fa-check text-primary"></i>お問い合わせフォーム</li>
                            <li class="flex items-center gap-3"><i class="fas fa-check text-primary"></i>基本SEO対策</li>
                            <li class="flex items-center gap-3"><i class="fas fa-check text-primary"></i>納品後1ヶ月サポート</li>
                        </ul>
                        <a href="#contact" class="block w-full border-2 border-primary text-primary py-3 rounded-full font-bold hover:bg-primary hover:text-white transition">
                            相談する
                        </a>
                    </div>

                    <!-- Standard Plan (Featured) -->
                    <div class="pricing-card bg-primary rounded-xl p-8 text-center text-white relative transform md:-translate-y-4">
                        <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 text-xs font-bold px-4 py-1 rounded-full">
                            <i class="fas fa-star mr-1"></i>人気No.1
                        </div>
                        <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-6">
                            <i class="fas fa-gem text-white text-2xl"></i>
                        </div>
                        <h3 class="font-poppins font-bold text-xl mb-2">STANDARD</h3>
                        <p class="text-white/70 text-sm mb-6">中規模サイト向け</p>
                        <div class="mb-8">
                            <span class="text-4xl font-bold">¥500,000</span>
                            <span class="text-white/70">〜</span>
                        </div>
                        <ul class="text-left space-y-3 mb-8 text-white/90 text-sm">
                            <li class="flex items-center gap-3"><i class="fas fa-check text-white"></i>10ページまで</li>
                            <li class="flex items-center gap-3"><i class="fas fa-check text-white"></i>レスポンシブ対応</li>
                            <li class="flex items-center gap-3"><i class="fas fa-check text-white"></i>CMS導入(WordPress)</li>
                            <li class="flex items-center gap-3"><i class="fas fa-check text-white"></i>SEO対策完全対応</li>
                            <li class="flex items-center gap-3"><i class="fas fa-check text-white"></i>アクセス解析設定</li>
                            <li class="flex items-center gap-3"><i class="fas fa-check text-white"></i>納品後3ヶ月サポート</li>
                        </ul>
                        <a href="#contact" class="block w-full bg-white text-primary py-3 rounded-full font-bold hover:bg-gray-100 transition">
                            相談する
                        </a>
                    </div>

                    <!-- Premium Plan -->
                    <div class="pricing-card bg-dark-card rounded-xl p-8 text-center text-white">
                        <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-6">
                            <i class="fas fa-crown text-primary text-2xl"></i>
                        </div>
                        <h3 class="font-poppins font-bold text-xl mb-2">PREMIUM</h3>
                        <p class="text-gray-400 text-sm mb-6">大規模・カスタム対応</p>
                        <div class="mb-8">
                            <span class="text-4xl font-bold">¥1,000,000</span>
                            <span class="text-gray-400">〜</span>
                        </div>
                        <ul class="text-left space-y-3 mb-8 text-gray-300 text-sm">
                            <li class="flex items-center gap-3"><i class="fas fa-check text-primary"></i>ページ数無制限</li>
                            <li class="flex items-center gap-3"><i class="fas fa-check text-primary"></i>フルカスタムデザイン</li>
                            <li class="flex items-center gap-3"><i class="fas fa-check text-primary"></i>独自機能開発</li>
                            <li class="flex items-center gap-3"><i class="fas fa-check text-primary"></i>高度なSEO対策</li>
                            <li class="flex items-center gap-3"><i class="fas fa-check text-primary"></i>運用コンサルティング</li>
                            <li class="flex items-center gap-3"><i class="fas fa-check text-primary"></i>納品後6ヶ月サポート</li>
                        </ul>
                        <a href="#contact" class="block w-full border-2 border-primary text-primary py-3 rounded-full font-bold hover:bg-primary hover:text-white transition">
                            相談する
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Flow Section -->
        <section class="py-24 bg-white">
            <div class="container mx-auto px-6">
                <div class="text-center mb-16 fade-up">
                    <p class="font-poppins text-primary font-semibold text-sm tracking-widest mb-2">FLOW</p>
                    <h2 class="text-3xl font-bold text-gray-800 section-bar">ご依頼の流れ</h2>
                </div>

                <div class="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto fade-up">
                    <div class="text-center">
                        <div class="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4 text-2xl font-poppins font-bold">01</div>
                        <h4 class="font-bold text-lg mb-2">お問い合わせ</h4>
                        <p class="text-gray-500 text-sm">フォームまたはメールでご連絡ください</p>
                    </div>
                    <div class="text-center">
                        <div class="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4 text-2xl font-poppins font-bold">02</div>
                        <h4 class="font-bold text-lg mb-2">ヒアリング</h4>
                        <p class="text-gray-500 text-sm">ご要望やご予算を丁寧にお伺いします</p>
                    </div>
                    <div class="text-center">
                        <div class="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4 text-2xl font-poppins font-bold">03</div>
                        <h4 class="font-bold text-lg mb-2">制作・開発</h4>
                        <p class="text-gray-500 text-sm">デザインからコーディングまで一貫制作</p>
                    </div>
                    <div class="text-center">
                        <div class="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4 text-2xl font-poppins font-bold">04</div>
                        <h4 class="font-bold text-lg mb-2">納品・公開</h4>
                        <p class="text-gray-500 text-sm">テスト後に公開、運用サポートも</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- FAQ Section -->
        <section id="faq" class="py-24 bg-gray-50">
            <div class="container mx-auto px-6 max-w-3xl">
                <div class="text-center mb-16 fade-up">
                    <p class="font-poppins text-primary font-semibold text-sm tracking-widest mb-2">FAQ</p>
                    <h2 class="text-3xl font-bold text-gray-800 section-bar">よくある質問</h2>
                </div>

                <div class="space-y-0 bg-white rounded-xl shadow-md overflow-hidden fade-up">
                    <div class="faq-item p-6" onclick="toggleFaq(this)">
                        <div class="flex justify-between items-center">
                            <h3 class="font-bold text-gray-800 flex items-center gap-3">
                                <span class="text-primary font-poppins font-bold">Q.</span>
                                制作期間はどのくらいですか？
                            </h3>
                            <span class="faq-icon text-primary text-xl"><i class="fas fa-plus"></i></span>
                        </div>
                        <div class="faq-answer text-gray-600 text-sm mt-3 pl-8">
                            サイトの規模にもよりますが、小規模サイトで2〜4週間、中規模で1〜2ヶ月、大規模で2〜4ヶ月程度が目安です。お急ぎの場合はご相談ください。
                        </div>
                    </div>

                    <div class="faq-item p-6" onclick="toggleFaq(this)">
                        <div class="flex justify-between items-center">
                            <h3 class="font-bold text-gray-800 flex items-center gap-3">
                                <span class="text-primary font-poppins font-bold">Q.</span>
                                修正は何回まで可能ですか？
                            </h3>
                            <span class="faq-icon text-primary text-xl"><i class="fas fa-plus"></i></span>
                        </div>
                        <div class="faq-answer text-gray-600 text-sm mt-3 pl-8">
                            デザインフェーズで3回、コーディングフェーズで2回まで無料修正いたします。それ以降は別途お見積もりとなります。
                        </div>
                    </div>

                    <div class="faq-item p-6" onclick="toggleFaq(this)">
                        <div class="flex justify-between items-center">
                            <h3 class="font-bold text-gray-800 flex items-center gap-3">
                                <span class="text-primary font-poppins font-bold">Q.</span>
                                どんな業種でも対応できますか？
                            </h3>
                            <span class="faq-icon text-primary text-xl"><i class="fas fa-plus"></i></span>
                        </div>
                        <div class="faq-answer text-gray-600 text-sm mt-3 pl-8">
                            はい、IT・医療・飲食・不動産・美容など、幅広い業種のWeb制作実績がございます。業種に合わせた最適な提案をいたします。
                        </div>
                    </div>

                    <div class="faq-item p-6" onclick="toggleFaq(this)">
                        <div class="flex justify-between items-center">
                            <h3 class="font-bold text-gray-800 flex items-center gap-3">
                                <span class="text-primary font-poppins font-bold">Q.</span>
                                納品後のサポートはありますか？
                            </h3>
                            <span class="faq-icon text-primary text-xl"><i class="fas fa-plus"></i></span>
                        </div>
                        <div class="faq-answer text-gray-600 text-sm mt-3 pl-8">
                            はい、各プランに応じた無料サポート期間をご用意しています。サポート期間終了後も、月額保守プラン(¥20,000〜)で継続サポートが可能です。
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="cta-gradient py-20 relative overflow-hidden">
            <div class="absolute inset-0 opacity-10">
                <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80" alt="" class="w-full h-full object-cover">
            </div>
            <div class="container mx-auto px-6 text-center relative z-10">
                <div class="fade-up">
                    <p class="font-poppins text-primary font-semibold text-sm tracking-widest mb-4">GET STARTED</p>
                    <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
                        Webサイトに関するお悩み、<br>まずはお気軽にご相談ください
                    </h2>
                    <p class="text-gray-400 mb-10 max-w-2xl mx-auto">
                        テンプレートにご興味をお持ちいただけましたら、下記よりお問い合わせください。<br>
                        ご相談・お見積もりは無料で対応いたします。
                    </p>
                    <a href="#contact" class="btn-primary px-10 py-4 rounded-full font-bold text-lg inline-flex items-center gap-2">
                        <i class="fas fa-envelope"></i> 無料で相談する
                    </a>
                </div>
            </div>
        </section>

        <!-- Contact Section -->
        <section id="contact" class="py-24 bg-white">
            <div class="container mx-auto px-6 max-w-3xl">
                <div class="text-center mb-16 fade-up">
                    <p class="font-poppins text-primary font-semibold text-sm tracking-widest mb-2">CONTACT</p>
                    <h2 class="text-3xl font-bold text-gray-800 section-bar">お問い合わせ</h2>
                    <p class="text-gray-500 mt-4">下記フォームよりお気軽にご連絡ください</p>
                </div>

                <div class="bg-gray-50 p-8 md:p-12 rounded-2xl shadow-lg fade-up">
                    <form class="space-y-6" onsubmit="event.preventDefault(); alert('お問い合わせありがとうございます！')">
                        <div class="grid md:grid-cols-2 gap-6">
                            <div>
                                <label class="block text-gray-700 font-bold mb-2 text-sm">
                                    お名前 <span class="text-red-500">*</span>
                                </label>
                                <input type="text" required class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition" placeholder="山田 太郎">
                            </div>
                            <div>
                                <label class="block text-gray-700 font-bold mb-2 text-sm">会社名</label>
                                <input type="text" class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition" placeholder="株式会社サンプル">
                            </div>
                        </div>

                        <div class="grid md:grid-cols-2 gap-6">
                            <div>
                                <label class="block text-gray-700 font-bold mb-2 text-sm">
                                    メールアドレス <span class="text-red-500">*</span>
                                </label>
                                <input type="email" required class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition" placeholder="info@example.com">
                            </div>
                            <div>
                                <label class="block text-gray-700 font-bold mb-2 text-sm">電話番号</label>
                                <input type="tel" class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition" placeholder="090-1234-5678">
                            </div>
                        </div>

                        <div>
                            <label class="block text-gray-700 font-bold mb-2 text-sm">
                                お問い合わせ内容 <span class="text-red-500">*</span>
                            </label>
                            <textarea rows="6" required class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition" placeholder="お問い合わせ内容をご記入ください"></textarea>
                        </div>

                        <div class="text-center">
                            <button type="submit" class="btn-primary px-12 py-4 rounded-full font-bold text-lg inline-flex items-center gap-2">
                                <i class="fas fa-paper-plane"></i> 送信する
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer style="background:#111127;" class="text-white py-16">
            <div class="container mx-auto px-6">
                <div class="grid md:grid-cols-4 gap-10 mb-12">
                    <div>
                        <h3 class="font-poppins text-xl font-bold mb-4">
                            SAMPLE<span class="text-primary">.</span>
                        </h3>
                        <p class="text-gray-400 text-sm leading-relaxed">
                            フリーランスとして、お客様のビジネスを成功に導くWebサイト制作を提供しています。
                        </p>
                        <div class="flex space-x-4 mt-6">
                            <a href="#" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="#" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition">
                                <i class="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 class="font-bold mb-4 text-sm tracking-wider">SERVICE</h4>
                        <ul class="space-y-3 text-gray-400 text-sm">
                            <li><a href="#" class="hover:text-primary transition">コーポレートサイト</a></li>
                            <li><a href="#" class="hover:text-primary transition">ECサイト構築</a></li>
                            <li><a href="#" class="hover:text-primary transition">ランディングページ</a></li>
                            <li><a href="#" class="hover:text-primary transition">WordPress構築</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 class="font-bold mb-4 text-sm tracking-wider">COMPANY</h4>
                        <ul class="space-y-3 text-gray-400 text-sm">
                            <li><a href="#" class="hover:text-primary transition">プロフィール</a></li>
                            <li><a href="#" class="hover:text-primary transition">制作実績</a></li>
                            <li><a href="#" class="hover:text-primary transition">プライバシーポリシー</a></li>
                            <li><a href="#" class="hover:text-primary transition">利用規約</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 class="font-bold mb-4 text-sm tracking-wider">CONTACT</h4>
                        <ul class="space-y-3 text-gray-400 text-sm">
                            <li class="flex items-center gap-3">
                                <i class="fas fa-envelope text-primary"></i>info@sample-company.com
                            </li>
                            <li class="flex items-center gap-3">
                                <i class="fas fa-phone text-primary"></i>03-1234-5678
                            </li>
                            <li class="flex items-center gap-3">
                                <i class="fas fa-map-marker-alt text-primary"></i>東京都渋谷区xxx
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                    <p>&copy; 2024 SAMPLE COMPANY. All rights reserved.</p>
                    <p class="mt-2 md:mt-0">Designed with <i class="fas fa-heart text-primary"></i> for freelancers</p>
                </div>
            </div>
        </footer>

        <script>
            // Smooth scroll
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                    // Close mobile menu
                    document.getElementById('mobileMenu').classList.remove('open');
                });
            });

            // Mobile menu
            document.getElementById('menuBtn').addEventListener('click', () => {
                document.getElementById('mobileMenu').classList.add('open');
            });
            document.getElementById('closeMenu').addEventListener('click', () => {
                document.getElementById('mobileMenu').classList.remove('open');
            });

            // FAQ toggle
            function toggleFaq(el) {
                el.classList.toggle('active');
            }

            // Scroll animations
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

            // Header scroll effect
            window.addEventListener('scroll', () => {
                const header = document.querySelector('header');
                if (window.scrollY > 50) {
                    header.classList.add('shadow-md');
                    header.classList.remove('shadow-sm');
                } else {
                    header.classList.add('shadow-sm');
                    header.classList.remove('shadow-md');
                }
            });
        </script>
    </body>
    </html>
  `)
})

export default app
