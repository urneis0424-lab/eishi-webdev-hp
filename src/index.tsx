import { Hono } from 'hono'
import { cors } from 'hono/cors'

type Bindings = {
  EMAILJS_PUBLIC_KEY: string
  EMAILJS_SERVICE_ID: string
  EMAILJS_TEMPLATE_ID: string
}

const app = new Hono<{ Bindings: Bindings }>()

app.use('/api/*', cors())

// メール送信APIエンドポイント
app.post('/api/contact', async (c) => {
  try {
    const formData = await c.req.json()
    
    // 環境変数から取得
    const publicKey = c.env.EMAILJS_PUBLIC_KEY
    const serviceId = c.env.EMAILJS_SERVICE_ID
    const templateId = c.env.EMAILJS_TEMPLATE_ID
    
    // EmailJS APIを呼び出し
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: formData
      })
    })
    
    if (!response.ok) {
      throw new Error('EmailJS API error')
    }
    
    return c.json({ success: true, message: 'メール送信成功' })
  } catch (error) {
    console.error('Contact form error:', error)
    return c.json({ success: false, message: 'メール送信失敗' }, 500)
  }
})

app.get('/', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="ja">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
        <!-- SEO Meta Tags -->
        <title>Eishi Urano | Web Developer - フリーランスWeb制作</title>
        <meta name="description" content="フリーランスとして、お客様のビジネスを成功に導くWebサイト制作を提供。コーポレートサイト、ECサイト、ランディングページの制作から保守運用まで対応。">
        <meta name="keywords" content="Web制作,フリーランス,Webデベロッパー,コーポレートサイト,ECサイト,LP制作,Cloudflare,Hono">
        <meta name="author" content="Eishi Urano">
        
        <!-- Canonical URL -->
        <link rel="canonical" href="https://eishi-webdev-hp.pages.dev/">
        
        <!-- Open Graph (OGP) Tags -->
        <meta property="og:type" content="website">
        <meta property="og:site_name" content="Eishi Urano | Web Developer">
        <meta property="og:title" content="Eishi Urano | Web Developer - フリーランスWeb制作">
        <meta property="og:description" content="フリーランスとして、お客様のビジネスを成功に導くWebサイト制作を提供。コーポレートサイト、ECサイト、ランディングページの制作から保守運用まで対応。">
        <meta property="og:url" content="https://eishi-webdev-hp.pages.dev/">
        <meta property="og:image" content="https://eishi-webdev-hp.pages.dev/og-image.jpg?v=2">
        <meta property="og:image:width" content="1200">
        <meta property="og:image:height" content="630">
        <meta property="og:locale" content="ja_JP">
        
        <!-- Twitter Card -->
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="Eishi Urano | Web Developer - フリーランスWeb制作">
        <meta name="twitter:description" content="フリーランスとして、お客様のビジネスを成功に導くWebサイト制作を提供。">
        <meta name="twitter:image" content="https://eishi-webdev-hp.pages.dev/og-image.jpg?v=2">
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700;900&family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
        
        <!-- JSON-LD Structured Data -->
        <script type="application/ld+json">
        {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Eishi Urano",
          "jobTitle": "Web Developer",
          "description": "フリーランスとして、お客様のビジネスを成功に導くWebサイト制作を提供しています。",
          "url": "https://eishi-webdev-hp.pages.dev/",
          "knowsAbout": ["Web Development", "Frontend Development", "Cloudflare Pages", "Hono Framework", "TypeScript"],
          "offers": {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Web制作サービス",
              "description": "コーポレートサイト、ECサイト、ランディングページの制作",
              "provider": {
                "@type": "Person",
                "name": "Eishi Urano"
              }
            }
          }
        }
        </script>
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

            /* Hero - 改善案1: ダークオーバーレイ強化 */
            .hero-section {
                background: linear-gradient(135deg, #1a1a2e 0%, #2d2d50 50%, #1a1a2e 100%);
                position: relative;
                min-height: 600px;
            }
            .hero-overlay {
                position: absolute;
                inset: 0;
                background: url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&q=80') center/cover no-repeat;
                opacity: 0.4;
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
                width: 100px;
                height: 100px;
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

            /* Hero animations */
            .hero-text {
                opacity: 0;
                transform: translateY(40px);
                animation: slideUpFade 0.8s ease-out forwards;
            }
            .hero-button {
                opacity: 0;
                transform: translateY(20px);
                animation: slideUpFade 0.8s ease-out 0.4s forwards;
            }
            .hero-image {
                opacity: 0;
                transform: translateX(50px);
                animation: slideInRight 0.8s ease-out 0.2s forwards;
            }
            @keyframes slideUpFade {
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            @keyframes slideInRight {
                to {
                    opacity: 1;
                    transform: translateX(0);
                }
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

            /* Contact form section headers */
            .form-section-title {
                font-weight: 700;
                font-size: 0.95rem;
                color: #1a1a2e;
                border-left: 4px solid #00c8c8;
                padding-left: 12px;
                margin-bottom: 16px;
            }

            /* Checkbox/Radio custom */
            .custom-check input[type="checkbox"],
            .custom-check input[type="radio"] {
                accent-color: #00c8c8;
                width: 16px;
                height: 16px;
            }
        </style>
    </head>
    <body>
        <!-- Header -->
        <header class="bg-white shadow-sm fixed w-full top-0 z-50">
            <nav class="container mx-auto px-6 py-3">
                <div class="flex justify-between items-center">
                    <a href="#" class="font-poppins text-lg font-bold text-gray-800 tracking-wider">
                        Eishi Urano <span class="text-gray-400">│</span> Web Developer
                    </a>
                    <div class="hidden md:flex items-center space-x-8 text-sm font-medium">
                        <a href="#about" class="text-gray-600 hover:text-primary transition">ABOUT</a>
                        <a href="#service" class="text-gray-600 hover:text-primary transition">SERVICE</a>
                        <a href="#works" class="text-gray-600 hover:text-primary transition">WORKS</a>
                        <a href="#pricing" class="text-gray-600 hover:text-primary transition">PRICING</a>
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
                <a href="#contact" class="btn-primary px-6 py-3 rounded-full text-white text-center font-bold mobile-link">CONTACT</a>
            </div>
        </div>

        <!-- Hero Section -->
        <section class="hero-section relative flex items-center pt-20">
            <div class="hero-overlay"></div>
            <div class="container mx-auto px-6 py-20 relative z-10">
                <div class="flex flex-col md:flex-row items-center gap-12">
                    <div class="md:w-1/2 text-center md:text-left">
                        <div class="hero-text">
                            <p class="font-poppins text-primary font-semibold text-sm tracking-widest mb-4">WEB DEVELOPMENT</p>
                            <h1 class="text-3xl md:text-5xl font-bold leading-tight mb-6 text-white">
                                はじめてのECも<br>
                                本格リニューアルも<br>
                                <span class="text-primary">技術で支える<br>あなたの挑戦</span>
                            </h1>
                            <p class="text-gray-200 mb-8 text-lg leading-relaxed">
                                お客様のビジネスに最適化されたWebサイトを、<br class="hidden md:block">
                                フリーランスならではの柔軟さとスピードで制作します。
                            </p>
                        </div>
                        <div class="flex justify-center md:justify-start hero-button">
                            <a href="#contact" class="bg-blue-900 hover:bg-blue-800 text-white px-10 py-4 rounded-full font-bold text-lg inline-flex items-center justify-center gap-2 transition shadow-lg">
                                <i class="fas fa-envelope"></i> 無料相談する
                            </a>
                        </div>
                    </div>
                    <div class="md:w-1/2 relative hero-image">
                        <div class="relative">
                            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80" alt="Web Development" class="rounded-2xl shadow-2xl w-full max-w-md mx-auto" style="aspect-ratio:3/4;object-fit:cover;">
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Why Choose Us Section (3 items with images) -->
        <section id="about" class="py-20 bg-white">
            <div class="container mx-auto px-6">
                <div class="fade-up">
                    <div class="text-center mb-14">
                        <p class="font-poppins text-primary font-semibold text-sm tracking-widest mb-2">WHY CHOOSE US</p>
                        <h2 class="text-3xl font-bold text-gray-800 section-bar">選ばれる<span class="text-primary">3つの理由</span></h2>
                    </div>
                    <div class="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
                        <!-- 1. 一気通貫 -->
                        <div class="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
                            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80" alt="一気通貫" class="w-full h-48 object-cover">
                            <div class="p-6 text-center">
                                <h4 class="font-bold text-lg mb-1">一気通貫</h4>
                                <p class="text-primary text-sm font-semibold mb-3">思考をそのままコードへ</p>
                                <p class="text-gray-500 text-sm leading-relaxed">企画・デザイン・実装まで一人で完結。伝達ロスなく、あなたのイメージを正確にコードへ落とし込みます。</p>
                            </div>
                        </div>
                        <!-- 2. 専任対応 -->
                        <div class="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
                            <img src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=600&q=80" alt="専任対応" class="w-full h-48 object-cover">
                            <div class="p-6 text-center">
                                <h4 class="font-bold text-lg mb-1">専任対応</h4>
                                <p class="text-primary text-sm font-semibold mb-3">顔が見える安心感</p>
                                <p class="text-gray-500 text-sm leading-relaxed">窓口は最初から最後まで一人。直接やり取りだから意思疎通が早く、適正価格でご提供します。</p>
                            </div>
                        </div>
                        <!-- 3. 柔軟性 -->
                        <div class="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
                            <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80" alt="柔軟性" class="w-full h-48 object-cover">
                            <div class="p-6 text-center">
                                <h4 class="font-bold text-lg mb-1">柔軟性</h4>
                                <p class="text-primary text-sm font-semibold mb-3">あなたのビジネスに合わせた最適解</p>
                                <p class="text-gray-500 text-sm leading-relaxed">テンプレートに頼らず、急な変更にもスピーディに対応。ビジネスの成長に寄り添います。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Service Section (Dark) - WordPress構築 and Webコンサルティング removed -->
        <section id="service" class="relative py-24" style="background:#1a1a2e;">
            <div class="container mx-auto px-6 relative z-10">
                <div class="text-center mb-16 fade-up">
                    <p class="font-poppins text-primary font-semibold text-sm tracking-widest mb-2">SERVICE</p>
                    <h2 class="text-3xl font-bold text-white section-bar">提供サービス</h2>
                    <p class="text-gray-400 mt-4">お客様のビジネスに最適なWebソリューションを提供します</p>
                </div>

                <div class="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto fade-up">
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
                        <img src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=600&q=80" alt="Landing Page" class="w-full h-64 object-cover">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                            <h3 class="text-white font-bold text-xl mb-2">ランディングページ</h3>
                            <p class="text-gray-300 text-sm">CVR最大化を実現するLP制作</p>
                        </div>
                    </div>

                    <div class="group relative rounded-xl overflow-hidden card-hover">
                        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80" alt="SEO" class="w-full h-64 object-cover">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                            <h3 class="text-white font-bold text-xl mb-2">SEO対策</h3>
                            <p class="text-gray-300 text-sm">検索上位表示を目指す施策</p>
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
                    <h2 class="text-3xl font-bold text-gray-800 section-bar">制作実績（参考サイト）</h2>
                    <p class="text-gray-500 mt-4">これまでに手がけたプロジェクトの一部をご紹介</p>
                </div>

                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 fade-up">
                    <a href="https://k-luton.com/" target="_blank" rel="noopener noreferrer" class="bg-white rounded-xl overflow-hidden shadow-md card-hover block">
                        <div class="relative">
                            <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80" alt="ハウスクリーニング" class="w-full h-52 object-cover">
                            <div class="absolute top-4 left-4">
                                <span class="bg-primary text-white text-xs px-3 py-1 rounded-full font-bold">コーポレート</span>
                            </div>
                        </div>
                        <div class="p-6">
                            <h3 class="font-bold text-lg mb-2">ハウスクリーニング</h3>
                            <p class="text-gray-500 text-sm mb-4">清潔感と信頼感を伝えるコーポレートサイト</p>
                            <div class="flex gap-2 flex-wrap">
                                <span class="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">デザイン</span>
                                <span class="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">コーディング</span>
                            </div>
                        </div>
                    </a>

                    <a href="https://sample-salon.pages.dev/" target="_blank" rel="noopener noreferrer" class="bg-white rounded-xl overflow-hidden shadow-md card-hover block">
                        <div class="relative">
                            <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80" alt="美容室" class="w-full h-52 object-cover">
                            <div class="absolute top-4 left-4">
                                <span class="bg-primary text-white text-xs px-3 py-1 rounded-full font-bold">サロン</span>
                            </div>
                        </div>
                        <div class="p-6">
                            <h3 class="font-bold text-lg mb-2">美容室</h3>
                            <p class="text-gray-500 text-sm mb-4">ブランドの世界観を表現するサロンサイト</p>
                            <div class="flex gap-2 flex-wrap">
                                <span class="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">デザイン</span>
                                <span class="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">コーディング</span>
                            </div>
                        </div>
                    </a>

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

                <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto fade-up mt-12">
                    <!-- ライトプラン -->
                    <div class="pricing-card bg-dark-card rounded-xl p-8 text-white">
                        <div class="text-center mb-6">
                            <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
                                <i class="fas fa-seedling text-primary text-2xl"></i>
                            </div>
                            <h3 class="font-poppins font-bold text-xl mb-1">LIGHT</h3>
                            <p class="text-gray-400 text-sm">ライトプラン</p>
                        </div>
                        <div class="text-center mb-6">
                            <span class="text-3xl font-bold">¥100,000</span>
                            <span class="text-gray-400">〜</span>
                        </div>
                        <div class="mb-6">
                            <div class="flex items-center gap-2 text-sm text-gray-300 mb-2">
                                <i class="fas fa-clock text-primary text-xs"></i>
                                <span>納期：着手から約2週間</span>
                            </div>
                            <div class="flex items-center gap-2 text-sm text-gray-300 mb-2">
                                <i class="fas fa-file-alt text-primary text-xs"></i>
                                <span>内容：1ページ完結（LP形式）</span>
                            </div>
                        </div>
                        <div class="bg-white/5 rounded-lg p-4 mb-6">
                            <p class="text-xs text-gray-400 leading-relaxed">
                                <i class="fas fa-user text-primary mr-1"></i>
                                起業直後や名刺代わりのWebサイトを早期に立ち上げたい方に最適。
                            </p>
                        </div>
                        <a href="#contact" class="block w-full border-2 border-primary text-primary py-3 rounded-full font-bold text-center hover:bg-primary hover:text-white transition">
                            相談する
                        </a>
                    </div>

                    <!-- スタンダードプラン (推奨 - 黄色ボーダーで強調) -->
                    <div class="pricing-card bg-dark-card rounded-xl p-8 text-white relative transform md:-translate-y-4" style="border: 3px solid #facc15;">
                        <div class="bg-yellow-400 text-gray-900 text-xs font-bold px-5 py-1.5 rounded-full absolute top-0 left-1/2 -translate-x-1/2 whitespace-nowrap z-10 shadow-md">
                            <i class="fas fa-star mr-1"></i>推奨
                        </div>
                        <div class="text-center mb-6 mt-2">
                            <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
                                <i class="fas fa-gem text-primary text-2xl"></i>
                            </div>
                            <h3 class="font-poppins font-bold text-xl mb-1">STANDARD</h3>
                            <p class="text-gray-400 text-sm">スタンダードプラン</p>
                        </div>
                        <div class="text-center mb-6">
                            <span class="text-3xl font-bold">¥250,000</span>
                            <span class="text-gray-400">〜</span>
                        </div>
                        <div class="mb-4">
                            <div class="flex items-center gap-2 text-sm text-gray-300 mb-2">
                                <i class="fas fa-clock text-primary text-xs"></i>
                                <span>納期：着手から約1ヶ月</span>
                            </div>
                            <div class="flex items-start gap-2 text-sm text-gray-300 mb-2">
                                <i class="fas fa-file-alt text-primary text-xs mt-1"></i>
                                <span>基本5ページまで<br><span class="text-xs text-gray-500">(TOP / サービス紹介 / 実績一覧 / 会社概要 / お問い合わせ)</span></span>
                            </div>
                        </div>
                        <div class="bg-white/5 rounded-lg p-3 mb-4 text-xs text-gray-400 space-y-1">
                            <p><i class="fas fa-plus-circle mr-1 text-primary"></i>CMS導入：+¥50,000</p>
                            <p><i class="fas fa-plus-circle mr-1 text-primary"></i>ページ追加：¥30,000〜50,000/1ページ</p>
                        </div>
                        <div class="bg-white/5 rounded-lg p-4 mb-6">
                            <p class="text-xs text-gray-400 leading-relaxed">
                                <i class="fas fa-user text-primary mr-1"></i>
                                事業の信頼性確立・自社情報発信を志向する方に最適。
                            </p>
                        </div>
                        <a href="#contact" class="block w-full border-2 border-primary text-primary py-3 rounded-full font-bold text-center hover:bg-primary hover:text-white transition">
                            相談する
                        </a>
                    </div>

                    <!-- フルカスタムプラン -->
                    <div class="pricing-card bg-dark-card rounded-xl p-8 text-white">
                        <div class="text-center mb-6">
                            <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
                                <i class="fas fa-crown text-primary text-2xl"></i>
                            </div>
                            <h3 class="font-poppins font-bold text-xl mb-1">FULL CUSTOM</h3>
                            <p class="text-gray-400 text-sm">フルカスタムプラン</p>
                        </div>
                        <div class="text-center mb-6">
                            <span class="text-3xl font-bold">¥500,000</span>
                            <span class="text-gray-400">〜</span>
                        </div>
                        <div class="mb-4">
                            <div class="flex items-center gap-2 text-sm text-gray-300 mb-2">
                                <i class="fas fa-clock text-primary text-xs"></i>
                                <span>納期：2ヶ月〜（要相談）</span>
                            </div>
                            <div class="flex items-start gap-2 text-sm text-gray-300 mb-2">
                                <i class="fas fa-file-alt text-primary text-xs mt-1"></i>
                                <span>10ページ以上 + CMS標準実装 + 独自アニメーション演出</span>
                            </div>
                        </div>
                        <div class="bg-white/5 rounded-lg p-3 mb-4 text-xs text-gray-400 space-y-1">
                            <p><i class="fas fa-cog mr-1 text-primary"></i>Shopify連携、ヘッドレス構成等 高度カスタマイズ対応</p>
                        </div>
                        <div class="bg-white/5 rounded-lg p-4 mb-6">
                            <p class="text-xs text-gray-400 leading-relaxed">
                                <i class="fas fa-user text-primary mr-1"></i>
                                ブランディング徹底・競合差別化を目指すスタートアップ・企業に最適。
                            </p>
                        </div>
                        <a href="#contact" class="block w-full border-2 border-primary text-primary py-3 rounded-full font-bold text-center hover:bg-primary hover:text-white transition">
                            相談する
                        </a>
                    </div>
                </div>

                <!-- 備考 -->
                <div class="max-w-4xl mx-auto mt-10 fade-up">
                    <div class="bg-dark-card/50 rounded-xl p-6 text-gray-400 text-sm space-y-2">
                        <p class="font-bold text-white text-xs mb-3"><i class="fas fa-info-circle text-primary mr-1"></i>備考</p>
                        <p>・表示価格は最低目安です。ページ数・特殊機能により変動します。</p>
                        <p>・納期は素材揃い次第の着手となります。</p>
                        <p>・特急案件は制作費の20%〜の追加料金が適用されます。</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Maintenance Plan Section (Dark) -->
        <section class="py-24" style="background:#1a1a2e;">
            <div class="container mx-auto px-6">
                <div class="text-center mb-16 fade-up">
                    <p class="font-poppins text-primary font-semibold text-sm tracking-widest mb-2">MAINTENANCE</p>
                    <h2 class="text-3xl font-bold text-white section-bar">保守運用プラン</h2>
                    <p class="text-gray-400 mt-4">サイト公開後も安心してお任せください</p>
                </div>

                <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto fade-up mt-12">
                    <!-- ミニマムプラン -->
                    <div class="pricing-card bg-dark-card rounded-xl p-8 text-white">
                        <div class="text-center mb-6">
                            <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
                                <i class="fas fa-shield-alt text-primary text-2xl"></i>
                            </div>
                            <h3 class="font-poppins font-bold text-xl mb-1">MINIMUM</h3>
                            <p class="text-gray-400 text-sm">ミニマムプラン</p>
                            <p class="text-gray-500 text-xs mt-1">サイトの健康診断</p>
                        </div>
                        <div class="text-center mb-6">
                            <span class="text-3xl font-bold">¥5,000</span>
                            <span class="text-gray-400">/月</span>
                        </div>
                        <div class="space-y-3 mb-6 text-sm">
                            <div class="flex items-start gap-3">
                                <i class="fas fa-check text-primary text-xs mt-1"></i>
                                <span class="text-gray-300">ドメイン・サーバーの維持管理</span>
                            </div>
                            <div class="flex items-start gap-3">
                                <i class="fas fa-check text-primary text-xs mt-1"></i>
                                <span class="text-gray-300">セキュリティ監視・システム保護</span>
                            </div>
                            <div class="flex items-start gap-3">
                                <i class="fas fa-check text-primary text-xs mt-1"></i>
                                <span class="text-gray-300">データの定期バックアップ</span>
                            </div>
                            <div class="flex items-start gap-3">
                                <i class="fas fa-check text-primary text-xs mt-1"></i>
                                <span class="text-gray-300">Web相談窓口（月1回まで）</span>
                            </div>
                        </div>
                        <div class="bg-white/5 rounded-lg p-4 mb-6">
                            <p class="text-xs text-gray-400 leading-relaxed">
                                <i class="fas fa-user text-primary mr-1"></i>
                                まずは作ったサイトを安全に維持したい方に最適な、基本の保険プランです。
                            </p>
                        </div>
                        <a href="#contact" class="block w-full border-2 border-primary text-primary py-3 rounded-full font-bold text-center hover:bg-primary hover:text-white transition">
                            相談する
                        </a>
                    </div>

                    <!-- スタンダードプラン (推奨) -->
                    <div class="pricing-card bg-dark-card rounded-xl p-8 text-white relative transform md:-translate-y-4" style="border: 3px solid #facc15;">
                        <div class="bg-yellow-400 text-gray-900 text-xs font-bold px-5 py-1.5 rounded-full absolute top-0 left-1/2 -translate-x-1/2 whitespace-nowrap z-10 shadow-md">
                            <i class="fas fa-star mr-1"></i>一番人気
                        </div>
                        <div class="text-center mb-6 mt-2">
                            <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
                                <i class="fas fa-sync-alt text-primary text-2xl"></i>
                            </div>
                            <h3 class="font-poppins font-bold text-xl mb-1">STANDARD</h3>
                            <p class="text-gray-400 text-sm">スタンダードプラン</p>
                            <p class="text-gray-500 text-xs mt-1">更新・サポート</p>
                        </div>
                        <div class="text-center mb-6">
                            <span class="text-3xl font-bold">¥15,000</span>
                            <span class="text-gray-400">/月</span>
                        </div>
                        <div class="space-y-3 mb-6 text-sm">
                            <div class="flex items-start gap-3">
                                <i class="fas fa-check text-primary text-xs mt-1"></i>
                                <span class="text-gray-300">ミニマムプランの全内容</span>
                            </div>
                            <div class="flex items-start gap-3">
                                <i class="fas fa-check text-primary text-xs mt-1"></i>
                                <span class="text-gray-300">月1時間の作業枠（更新代行）</span>
                            </div>
                            <div class="flex items-start gap-3">
                                <i class="fas fa-check text-primary text-xs mt-1"></i>
                                <span class="text-gray-300">簡易アクセスレポート</span>
                            </div>
                            <div class="flex items-start gap-3">
                                <i class="fas fa-check text-primary text-xs mt-1"></i>
                                <span class="text-gray-300">優先不具合対応</span>
                            </div>
                        </div>
                        <div class="bg-white/5 rounded-lg p-4 mb-6">
                            <p class="text-xs text-gray-400 leading-relaxed">
                                <i class="fas fa-user text-primary mr-1"></i>
                                常に情報を新しく保ち、集客に活かしたい店舗や個人事業主様向けの推奨プランです。
                            </p>
                        </div>
                        <a href="#contact" class="block w-full border-2 border-primary text-primary py-3 rounded-full font-bold text-center hover:bg-primary hover:text-white transition">
                            相談する
                        </a>
                    </div>

                    <!-- プレミアムプラン -->
                    <div class="pricing-card bg-dark-card rounded-xl p-8 text-white">
                        <div class="text-center mb-6">
                            <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
                                <i class="fas fa-chart-line text-primary text-2xl"></i>
                            </div>
                            <h3 class="font-poppins font-bold text-xl mb-1">PREMIUM</h3>
                            <p class="text-gray-400 text-sm">プレミアムプラン</p>
                            <p class="text-gray-500 text-xs mt-1">改善・伴走</p>
                        </div>
                        <div class="text-center mb-6">
                            <span class="text-3xl font-bold">¥30,000</span>
                            <span class="text-gray-400">〜/月</span>
                        </div>
                        <div class="space-y-3 mb-6 text-sm">
                            <div class="flex items-start gap-3">
                                <i class="fas fa-check text-primary text-xs mt-1"></i>
                                <span class="text-gray-300">スタンダードプランの全内容</span>
                            </div>
                            <div class="flex items-start gap-3">
                                <i class="fas fa-check text-primary text-xs mt-1"></i>
                                <span class="text-gray-300">詳細なアクセス解析（GA4）</span>
                            </div>
                            <div class="flex items-start gap-3">
                                <i class="fas fa-check text-primary text-xs mt-1"></i>
                                <span class="text-gray-300">隔月のオンライン個別相談</span>
                            </div>
                            <div class="flex items-start gap-3">
                                <i class="fas fa-check text-primary text-xs mt-1"></i>
                                <span class="text-gray-300">広告運用・マーケティング準備支援</span>
                            </div>
                        </div>
                        <div class="bg-white/5 rounded-lg p-4 mb-6">
                            <p class="text-xs text-gray-400 leading-relaxed">
                                <i class="fas fa-user text-primary mr-1"></i>
                                データを分析して売上を伸ばしたい、将来的に広告も出したい方向けの攻めのプランです。
                            </p>
                        </div>
                        <a href="#contact" class="block w-full border-2 border-primary text-primary py-3 rounded-full font-bold text-center hover:bg-primary hover:text-white transition">
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



        <!-- CTA Section -->
        <section class="cta-gradient py-20 relative overflow-hidden">
            <div class="absolute inset-0 opacity-10">
                <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80" alt="デジタルテクノロジーとWeb開発のイメージ" class="w-full h-full object-cover">
            </div>
            <div class="container mx-auto px-6 text-center relative z-10">
                <div class="fade-up">
                    <p class="font-poppins text-primary font-semibold text-sm tracking-widest mb-4">GET STARTED</p>
                    <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
                        Webサイトに関するお悩み<br>まずはお気軽にご相談ください
                    </h2>
                    <p class="text-gray-400 mb-10 max-w-2xl mx-auto">
                        ご相談・お見積もりは無料で対応いたします。<br>
                        まずはお気軽にお問い合わせください。
                    </p>
                    <a href="#contact" class="btn-primary px-10 py-4 rounded-full font-bold text-lg inline-flex items-center gap-2">
                        <i class="fas fa-envelope"></i> 無料で相談する
                    </a>
                </div>
            </div>
        </section>

        <!-- Contact Section (4 sections form) -->
        <section id="contact" class="py-24 bg-white">
            <div class="container mx-auto px-6 max-w-3xl">
                <div class="text-center mb-16 fade-up">
                    <p class="font-poppins text-primary font-semibold text-sm tracking-widest mb-2">CONTACT</p>
                    <h2 class="text-3xl font-bold text-gray-800 section-bar">お問い合わせ</h2>
                    <p class="text-gray-500 mt-4">下記フォームよりお気軽にご連絡ください</p>
                </div>

                <div class="bg-gray-50 p-8 md:p-12 rounded-2xl shadow-lg fade-up">
                    <form id="contactForm" class="space-y-10">

                        <!-- Section 1: 基本情報 -->
                        <div>
                            <p class="form-section-title">1. 基本情報</p>
                            <div class="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label class="block text-gray-700 font-bold mb-2 text-sm">
                                        氏名 / 担当者名 <span class="text-red-500">*</span>
                                    </label>
                                    <input type="text" name="name" required class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition" placeholder="山田 太郎">
                                </div>
                                <div>
                                    <label class="block text-gray-700 font-bold mb-2 text-sm">貴社名</label>
                                    <input type="text" name="company" class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition" placeholder="株式会社サンプル">
                                </div>
                            </div>
                            <div class="grid md:grid-cols-2 gap-6 mt-6">
                                <div>
                                    <label class="block text-gray-700 font-bold mb-2 text-sm">
                                        メールアドレス <span class="text-red-500">*</span>
                                    </label>
                                    <input type="email" name="email" required class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition" placeholder="info@example.com">
                                </div>
                                <div>
                                    <label class="block text-gray-700 font-bold mb-2 text-sm">現WebサイトURL <span class="text-gray-400 font-normal text-xs">(リニューアルの場合)</span></label>
                                    <input type="url" name="website" class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition" placeholder="https://example.com">
                                </div>
                            </div>
                        </div>

                        <!-- Section 2: 案件概要 -->
                        <div>
                            <p class="form-section-title">2. 案件概要</p>
                            <div class="mb-6">
                                <label class="block text-gray-700 font-bold mb-3 text-sm">
                                    ご相談内容
                                </label>
                                <select name="consultation_type" class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition bg-white text-sm text-gray-700">
                                    <option value="" selected>選択してください</option>
                                    <option value="new">新規制作</option>
                                    <option value="renewal">リニューアル</option>
                                    <option value="lp">LP</option>
                                    <option value="ec">Shopify等EC構築</option>
                                    <option value="design_code">デザインのみ/コーディングのみ</option>
                                    <option value="other">その他</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-gray-700 font-bold mb-3 text-sm">希望プラン</label>
                                <select name="plan" class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition bg-white text-sm text-gray-700">
                                    <option value="" selected>選択してください</option>
                                    <option value="light">ライト</option>
                                    <option value="standard">スタンダード</option>
                                    <option value="fullcustom">フルカスタム</option>
                                    <option value="undecided">未決定</option>
                                </select>
                            </div>
                        </div>

                        <!-- Section 3: 予算・納期 -->
                        <div>
                            <p class="form-section-title">3. 予算・納期</p>
                            <div class="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label class="block text-gray-700 font-bold mb-3 text-sm">ご予算</label>
                                    <select name="budget" class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition bg-white text-sm text-gray-700">
                                        <option value="" selected>選択してください</option>
                                        <option value="under20">〜20万円</option>
                                        <option value="20to40">20〜40万円</option>
                                        <option value="40to60">40〜60万円</option>
                                        <option value="over60">60万円以上</option>
                                    </select>
                                </div>
                                <div>
                                    <label class="block text-gray-700 font-bold mb-3 text-sm">希望公開時期</label>
                                    <select name="timeline" class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition bg-white text-sm text-gray-700">
                                        <option value="" selected>選択してください</option>
                                        <option value="1month">1ヶ月以内（特急あり）</option>
                                        <option value="2months">2ヶ月以内</option>
                                        <option value="3months">3ヶ月以内</option>
                                        <option value="undecided">未定</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <!-- Section 4: 詳細・メッセージ -->
                        <div>
                            <p class="form-section-title">4. 詳細・メッセージ</p>
                            <div class="mb-6">
                                <label class="block text-gray-700 font-bold mb-2 text-sm">
                                    お問い合わせ詳細 <span class="text-red-500">*</span>
                                </label>
                                <textarea name="message" rows="6" required class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition" placeholder="ご依頼の背景やご要望、参考サイトなどがあればお知らせください"></textarea>
                            </div>
                            <div>
                                <label class="block text-gray-700 font-bold mb-3 text-sm">オンラインミーティング</label>
                                <div class="flex gap-4">
                                    <label class="custom-check flex items-center gap-2 bg-white px-6 py-3 rounded-lg border border-gray-200 cursor-pointer hover:border-primary transition text-sm">
                                        <input type="radio" name="meeting" value="yes">
                                        <span>希望する</span>
                                    </label>
                                    <label class="custom-check flex items-center gap-2 bg-white px-6 py-3 rounded-lg border border-gray-200 cursor-pointer hover:border-primary transition text-sm">
                                        <input type="radio" name="meeting" value="no" checked>
                                        <span>希望しない</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="text-center pt-4">
                            <button type="submit" id="submitBtn" class="btn-primary px-12 py-4 rounded-full font-bold text-lg inline-flex items-center gap-2">
                                <i class="fas fa-paper-plane"></i> <span id="btnText">送信する</span>
                            </button>
                            <p id="formMessage" class="mt-4 text-sm font-medium"></p>
                        </div>
                    </form>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer style="background:#111127;" class="text-white py-16">
            <div class="container mx-auto px-6">
                <div class="grid md:grid-cols-2 gap-10 mb-12">
                    <div>
                        <h3 class="font-poppins text-xl font-bold mb-4">
                            Eishi Urano <span class="text-gray-400">│</span> Web Developer
                        </h3>
                        <p class="text-gray-400 text-sm leading-relaxed">
                            フリーランスとして、お客様のビジネスを成功に導くWebサイト制作を提供しています。
                        </p>
                    </div>

                    <div>
                        <h4 class="font-bold mb-4 text-sm tracking-wider">SERVICE</h4>
                        <ul class="space-y-3 text-gray-400 text-sm">
                            <li><a href="#" class="hover:text-primary transition">コーポレートサイト</a></li>
                            <li><a href="#" class="hover:text-primary transition">ECサイト構築</a></li>
                            <li><a href="#" class="hover:text-primary transition">ランディングページ</a></li>
                            <li><a href="#" class="hover:text-primary transition">SEO対策</a></li>
                        </ul>
                    </div>
                </div>

                <div class="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; 2026 Eishi Urano │ Web Developer. All rights reserved.</p>
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

            // EmailJS Form Submission
            document.getElementById('contactForm').addEventListener('submit', function(e) {
                e.preventDefault();
                
                const submitBtn = document.getElementById('submitBtn');
                const btnText = document.getElementById('btnText');
                const formMessage = document.getElementById('formMessage');
                
                // ボタンを無効化して送信中表示
                submitBtn.disabled = true;
                btnText.textContent = '送信中...';
                formMessage.textContent = '';
                formMessage.className = 'mt-4 text-sm font-medium';
                
                // フォームデータを取得
                const formData = new FormData(this);
                const templateParams = {
                    name: formData.get('name'),
                    company: formData.get('company') || '未入力',
                    email: formData.get('email'),
                    website: formData.get('website') || '未入力',
                    consultation_type: this.consultation_type.options[this.consultation_type.selectedIndex].text,
                    plan: this.plan.options[this.plan.selectedIndex].text,
                    budget: this.budget.options[this.budget.selectedIndex].text,
                    timeline: this.timeline.options[this.timeline.selectedIndex].text,
                    message: formData.get('message'),
                    meeting: formData.get('meeting') === 'yes' ? '希望する' : '希望しない'
                };
                
                // 自前のAPIエンドポイントに送信
                fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(templateParams)
                })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        formMessage.textContent = 'お問い合わせありがとうございます！内容を確認後、2営業日以内にご連絡いたします。';
                        formMessage.className = 'mt-4 text-sm font-medium text-green-600';
                        document.getElementById('contactForm').reset();
                        btnText.textContent = '送信完了';
                        setTimeout(() => {
                            btnText.textContent = '送信する';
                            submitBtn.disabled = false;
                        }, 3000);
                    } else {
                        throw new Error('送信失敗');
                    }
                })
                .catch(error => {
                    console.error('FAILED...', error);
                    formMessage.textContent = '送信に失敗しました。もう一度お試しいただくか、直接メールでご連絡ください。';
                    formMessage.className = 'mt-4 text-sm font-medium text-red-600';
                    btnText.textContent = '送信する';
                    submitBtn.disabled = false;
                });
            });
        </script>
    </body>
    </html>
  `)
})

export default app
