# NoMore5Mins — Durum Tespiti, Yapılanlar ve Yol Haritası

_Son güncelleme: 26 Eylül 2026_

## 1. Başlangıçtaki durum (tespit)

Site Astro 6 + Tailwind 4 ile yazılmış, 116 sayfalık, yalnızca İngilizce bir araç sitesiydi. Build alınıyordu ama canlıya çıkmaya hazır değildi:

| # | Sorun | Etkisi |
|---|---|---|
| 1 | GitHub Actions **Node 20** kullanıyordu, Astro 6 ise **Node ≥ 22.12** istiyor | Otomatik deploy çalışmıyordu |
| 2 | Menüdeki `/pomodoro/`, `/privacy/`, `/terms/` linkleri **404** veriyordu; blogda da kırık bir link vardı | Kullanıcı ve SEO kaybı |
| 3 | Alarm yalnızca **tam saniye 0'da** kontrol ediliyordu | Arka plandaki sekmede tarayıcı zamanlayıcıyı yavaşlattığında alarm **hiç çalmayabiliyordu** |
| 4 | Sayfa yenilendikten sonra ses kilidi açılmıyordu (mobil) | Kaydedilmiş alarm **sessiz** çalıyordu |
| 5 | `og-default.png` dosyası yoktu | Paylaşımlarda görsel çıkmıyordu |
| 6 | Amazon ürün kartlarında **sabit fiyatlar** ve "Best Seller" etiketleri vardı | Amazon Associates politikasına aykırı (hesap kapatma riski) |
| 7 | Gizlilik sayfası "veri toplamıyoruz, reklam yok" diyordu | AdSense/Analytics ile çelişiyor; AdSense reddi ve hukuki risk |
| 8 | 6 blog yazısının 3'ü "Yakında" yazan boş sayfaydı | AdSense "düşük değerli içerik" reddi nedeni |
| 9 | Aynı sayfada iki tane `id="theme-toggle"`, iki farklı tema anahtarı | Tema butonu hatalı çalışabiliyordu |
| 10 | Tek dil, hreflang yok, `llms.txt` yok, favicon yalnızca SVG, PWA ikonları yok | Uluslararası SEO, GEO ve mobil kurulum eksikti |
| 11 | Emoji ikonlar, amber parlama efektleri, gradyan kartlar | "Yapay zekâ ile üretilmiş" görünüm |

## 2. Yapılanlar

### Tasarım ve UI/UX (sıfırdan)
- **Yeni tasarım sistemi:** sıcak kâğıt beyazı / koyu tema, tek vurgu rengi (sinyal turuncusu), sistem fontları (0 KB font indirme, en hızlı LCP), SVG ikon seti. Emoji ve "AI parlaması" kaldırıldı.
- **Mobil öncelikli:** alt sekme çubuğu (Alarm, Zamanlayıcı, Kronometre, Odak, Saat), en az 48 px dokunma alanları, yerel saat seçici (`input type=time`, telefonda çark seçici açar), çentikli ekranlar için güvenli alan desteği.
- **Araç hep ilk ekranda:** reklam, içerik ve ürünler aracın altında.
- **Karanlık/aydınlık tema** sistem tercihini izler, elle değiştirilebilir. **RTL** (Arapça) tam destekli.
- **Tam ekran (odak) modu**, klavye kısayolları (Boşluk, L, R, F), ekran uyanık tutma (Wake Lock), bildirim, sekme başlığında geri sayım.

### Araçlar (güvenilirlik düzeltmeleri + yeni özellikler)
- **Alarm:** zaman damgası tabanlı tetikleme (arka planda da kaçırmaz), yenilemeden sonra "sesi açmak için dokun" uyarısı, çoklu alarm, etiket, hızlı şekerleme (+5…+60 dk), 3 erteleme sınırı, sayfa kapalıyken kaçan alarmları yönetme, `?t=07:30` ile link üzerinden alarm kurma.
- **Zamanlayıcı:** sistem saatine dayalı (sapmaz), ilerleme halkası, "şu saatte biter", son süreyi hatırlama.
- **Kronometre:** 1/100 sn, turlar (en hızlı/en yavaş), **sayfa yenilense bile çalışmaya devam eder**.
- **Pomodoro:** ayarlanabilir süreler, otomatik geçiş, günlük istatistik.
- **Yeni: Uyku hesaplayıcı** (90 dk döngü) — yüksek arama hacimli bir sorgu; sonuçtan tek tıkla alarm kurma.
- **Dünya saati:** 60 şehir, 15 dilde şehir adları, aksan/dil duyarsız arama, saat farkı ve gün/gece.
- **Güncel saat:** 12/24 saat, hafta numarası, yılın günü, UTC.

### 15 dil
İngilizce, İspanyolca, Portekizce, Fransızca, Almanca, İtalyanca, Rusça, Türkçe, Arapça, Hintçe, Endonezce, Japonca, Korece, Çince (Basitleştirilmiş), Vietnamca.
- Her dilde **tüm araçlar + 73 alarm + 26 zamanlayıcı ön ayar sayfası** → toplam **~1.600 sayfa**.
- Metinler o dilde gerçekten aranan ifadelerle yazıldı (ör. "saat 7'ye alarm kur", "geri sayım sayacı").
- Saat biçimi dile göre otomatik (TR: 07:00, EN: 7:00 AM).
- Ziyaretçinin tarayıcı dili farklıysa, **kendi dilinde** "Bu sayfa Türkçe de mevcut" bandı (Google'ın önerdiği gibi zorla yönlendirme yok).

### SEO
- Her sayfada benzersiz başlık + açıklama (0 tekrar), canonical, **hreflang (15 dil + x-default)**, dile özel Open Graph görseli (15 adet) ve `og:locale`.
- Sitemap'te hreflang alternatifleri, öncelikler, `lastmod`.
- Yapılandırılmış veri: `WebApplication`, `HowTo`, `FAQPage`, `BreadcrumbList`, `Organization`, `WebSite`, `BlogPosting`, `ItemList`.
- İç linkleme: ön ayar ızgaraları, ilgili araçlar, popüler linkler, footer'da tüm diller.
- 301 yönlendirmeler (eski/kırık adresler), özel 404 sayfası.
- Performans: sayfa başına ~14 KB (gzip) HTML, toplam ~60 KB JS, font indirme yok, reklam/analitik kodları sayfa etkileşime hazır olduktan sonra yüklenir (Core Web Vitals korunur).

### AEO (yanıt motorları) ve GEO (üretken yapay zekâ motorları)
- Her araç sayfası **doğrudan yanıtla** başlar, ardından adım adım kullanım, "Önemli bilgiler" listesi ve SSS gelir.
- `/llms.txt` ve `/llms-full.txt` (llmstxt.org standardı): siteyi ChatGPT, Claude, Perplexity ve Gemini'ye özetler.
- `robots.txt` içinde GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Applebot vb. **açıkça izinli**.
- Dürüst sınırlamalar ("sekme açık kalmalı") açıkça yazıldı: yapay zekâ motorları bu tür net ifadeleri alıntılar.

### Gelir altyapısı
- **AdSense:** yayıncı kimliği ortam değişkeniyle girilir, `ads.txt` otomatik oluşur. Onaydan önce boş reklam kutusu görünmez. Reklamlar araçların içine hiç konmaz ve çalan alarmın üstüne çıkmaz.
- **Google Consent Mode v2** varsayılanları (AB/BK/İsviçre için izin gelene kadar reddedilmiş).
- **Amazon:** sabit fiyatlar kaldırıldı, dile göre yerel mağaza (amazon.de, .co.jp, .com.tr…), tarayıcı bölgesine göre otomatik mağaza seçimi, `rel="sponsored"`, her pazar yeri için ayrı takip kimliği.
- **Gizlilik politikası / Kullanım şartları** AdSense, Analytics, Amazon ve GDPR/CCPA'ya uygun şekilde yeniden yazıldı. İletişim formu eklendi (Netlify Forms, ücretsiz).

### İçerik
- 6 blog yazısı, her biri 1.000–1.300 kelime. Boş olan 3 yazı gerçek içerikle yazıldı. Her yazıda içindekiler, "Önemli çıkarımlar" ve SSS bölümleri var.

### Altyapı
- Node 22 ile CI; her PR'da tip kontrolü, çeviri kontrolü ve build çalışır.
- `public/_headers` ve `_redirects` sayesinde aynı build **Netlify ve Cloudflare Pages**'ta çalışır.
- Güvenlik başlıkları (HSTS, nosniff, Referrer-Policy, Permissions-Policy) ve önbellek başlıkları.
- PWA manifesti (15 dilde), maskable ikonlar, Apple ikonu, `favicon.ico`.

## 3. Sizin yapmanız gerekenler (sıralı; alan adı dışında hepsi ücretsiz)

1. **Bu dalı `main`'e birleştirin.**
2. **Barındırma seçin:**
   - _Önerilen:_ **Cloudflare Pages** → bant genişliği sınırsız ve ücretsiz. Build komutu: `npm run build`, çıktı klasörü: `dist`, ortam değişkeni: `NODE_VERSION=22`.
   - _Ya da:_ Netlify (ücretsiz planda aylık 100 GB bant genişliği sınırı var). Repo bağlıysa `netlify.toml` yeterli.
3. **Alan adı (tek ücretli kalem, yılda ~10 $):** AdSense `*.netlify.app` veya `*.pages.dev` gibi alt alan adlarını kabul etmiyor. Cloudflare Registrar maliyet fiyatına satıyor. Alan adını aldıktan sonra `PUBLIC_SITE_URL` değişkenine yazın.
4. **Google Search Console:** alanı doğrulayın (`PUBLIC_GOOGLE_SITE_VERIFICATION` ya da DNS) ve `https://ALANADI/sitemap-index.xml` gönderin.
5. **Bing Webmaster Tools:** "Import from Google Search Console" ile tek tıkla ekleyin. Bing, ChatGPT aramasını da besler.
6. **Yandex Webmaster** (Rusça), **Naver Search Advisor** (Korece) ve **Baidu** (Çince) hesaplarını da ücretsiz açabilirsiniz.
7. **Analitik:** Cloudflare Web Analytics önerilir (ücretsiz, çerezsiz): `PUBLIC_CF_ANALYTICS_TOKEN`. İsterseniz ayrıca GA4: `PUBLIC_GA4_ID`.
8. **AdSense başvurusu:** alan adı bağlandıktan ve site 1–2 hafta trafik aldıktan sonra yapın.
   - Onaydan sonra `PUBLIC_ADSENSE_CLIENT=ca-pub-…` girin; `ads.txt` kendiliğinden oluşur.
   - AdSense → **Privacy & messaging → European regulations** mesajını açın. Bu, Google'ın ücretsiz ve sertifikalı onay ekranıdır; AB trafiğinde zorunludur.
   - Önce **Auto ads**'i açın. Sonra isterseniz 3 manuel reklam birimi oluşturup kimliklerini `PUBLIC_ADSENSE_SLOT_TOP`, `…_CONTENT`, `…_BOTTOM` değişkenlerine yazın.
9. **Amazon Associates:** her pazar yeri için ayrı başvuru gerekir (.com, .de, .co.uk, .fr, .es, .it, .co.jp, .com.tr, .in, .com.br, .ae). Takip kimliklerini şöyle girin: `PUBLIC_AMAZON_TAGS={"com":"…-20","de":"…-21","com.tr":"…"}`.
10. İsterseniz YouTube kanalınızı ve sosyal hesaplarınızı `PUBLIC_SOCIAL_PROFILES` değişkenine ekleyin. Bu, Google'daki marka bilgi kartını güçlendirir.

Tüm değişkenler `.env.example` dosyasında açıklamalı olarak listeli.

## 4. Büyüme yol haritası (ücretsiz)

**Kısa vade (0–1 ay)**
- Search Console'daki "Performans" raporundan her dil için gösterimi olan ama tıklanmayan sorguları bulun; başlık ve açıklamaları buna göre iyileştirin.
- Blog yazılarını en büyük 4–5 dile (ES, PT, DE, TR, JA) çevirin.
- Tanıtım: Product Hunt, Reddit (r/productivity, r/GetStudying), Hacker News "Show HN", AlternativeTo, araç dizinleri.

**Orta vade (1–3 ay)**
- **Gömülebilir widget'lar** ("Bu zamanlayıcıyı sitene ekle" iframe kodu). Her gömme, sitenize doğal bir backlink demektir.
- Yeni yüksek hacimli araçlar: aralık/Tabata zamanlayıcısı, belirli bir tarihe geri sayım, saat dilimi dönüştürücü, tarih ve yaş hesaplayıcı, "X saniye zamanlayıcı" ön ayarları.
- Service Worker ile tam çevrimdışı çalışma (PWA puanını ve geri dönen kullanıcıyı artırır).
- YouTube: "25 dakika çalışma zamanlayıcısı" gibi uzun videolar yüksek izlenme alır; açıklamada siteye link verin.

**Uzun vade**
- Kullanıcı hesabı olmadan paylaşılabilir linkler (ör. `?t=` ile hazır alarm/zamanlayıcı linki), sınıf ve toplantı modları.
- Daha fazla dil: Lehçe, Hollandaca, Tayca, Farsça, Ukraynaca.

> **Gerçekçi beklenti:** Bu tür araç siteleri genellikle 3–6 ay içinde organik trafik kazanır. Gelir en çok şunlara bağlıdır: trafiğin hangi ülkelerden geldiği (ABD, Almanya ve Japonya'da tıklama başı ücret yüksektir), sayfada kalma süresi ve reklam yerleşimi. Bu altyapı ölçeklenmeye hazır. Asıl kaldıraç düzenli içerik, iyi backlink'ler ve Search Console verisine göre sürekli iyileştirmedir.
