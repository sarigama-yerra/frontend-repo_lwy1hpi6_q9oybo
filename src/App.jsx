import React, { useRef, useState } from 'react';
import {
  Link2,
  Camera,
  PiggyBank,
  Images,
  ShoppingBag,
  BarChart3,
  Palette,
  Zap,
  Smartphone,
  Instagram,
  CircleUserRound,
  Users,
  Star,
} from 'lucide-react';

const GradientText = ({ children, className = '' }) => (
  <span className={`bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600 bg-clip-text text-transparent ${className}`}>{children}</span>
);

const DisabledButton = ({ children, className = '', ariaLabel }) => (
  <button
    type="button"
    disabled
    aria-disabled="true"
    aria-label={ariaLabel || 'Coming Soon'}
    className={`w-full sm:w-auto inline-flex items-center justify-center rounded-lg border border-gray-300/70 bg-gray-200 text-gray-600 cursor-not-allowed px-5 py-3 font-semibold shadow-sm transition-all duration-200 min-h-[44px] ${className}`}
  >
    {children}
  </button>
);

const GlassCard = ({ children, className = '' }) => (
  <article
    className={`rounded-2xl border border-white/60 bg-white/70 backdrop-blur-xl shadow-lg transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl hover:scale-[1.02] ${className}`}
  >
    {children}
  </article>
);

function App() {
  const [openIndex, setOpenIndex] = useState(null);
  const heroRef = useRef(null);

  const handleScrollDown = () => {
    const next = document.getElementById('problem-section');
    if (next) next.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const faqs = [
    { q: 'Kapan bisa dipakai?', a: 'Kami sedang di tahap Beta tertutup. Daftar tunggu akan dibuka segera untuk batch pertama.' },
    { q: 'Ada biaya setup?', a: 'Tidak ada biaya setup. Kamu cukup berlangganan Rp 300.000 per bulan saat peluncuran.' },
    { q: 'Platform affiliate apa?', a: 'Kami akan mendukung beberapa merchant fashion Indonesia dan internasional. Detail akan diumumkan saat peluncuran.' },
    { q: 'Analytics real-time?', a: 'Dashboard menampilkan data yang diperbarui secara berkala dengan fokus pada akurasi klik & konversi.' },
  ];

  return (
    <div className="min-h-screen antialiased text-gray-900 bg-white">
      {/* NAV */}
      <header className="sticky top-0 z-20 border-b border-gray-100/80 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Primary">
          <div className="flex h-16 items-center justify-between">
            <a href="#" className="flex items-center gap-2" aria-label="Fashbreew Home">
              <span className="text-2xl sm:text-3xl font-extrabold tracking-tight"><GradientText>Fashbreew</GradientText></span>
            </a>
            <span className="hidden sm:inline-flex items-center gap-2 rounded-full bg-orange-50 text-orange-700 px-3 py-1 text-sm font-medium border border-orange-200">
              <Star size={16} aria-hidden /> Beta Access
            </span>
          </div>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden" aria-labelledby="hero-heading" ref={heroRef}>
          <div className="absolute inset-0 bg-gradient-to-b from-orange-50 via-white to-white" aria-hidden="true" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full bg-white/90 ring-1 ring-gray-200 px-3 py-1 text-sm font-medium text-gray-700 shadow-sm">
                  <span role="img" aria-label="confetti">🎉</span>
                  Beta - Rp 300.000/bulan
                </p>
                <h1 id="hero-heading" className="mt-4 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight">
                  Tampil Modern. Monetize Lebih Mudah. Satu Link untuk Semua.
                </h1>
                <p className="mt-4 text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl">
                  Halaman personal untuk fashion creator dengan desain modern, rapi, dan siap konversi. Satu tempat untuk OOTD, produk, dan link affiliate.
                </p>
                <div className="mt-6">
                  <DisabledButton className="text-base px-6 py-3">Coming Soon 🚀</DisabledButton>
                </div>
              </div>

              {/* Mockup visual */}
              <div className="relative">
                <div className="mx-auto w-full max-w-md lg:max-w-lg">
                  <div className="rounded-2xl border border-white/60 bg-white/70 backdrop-blur-xl shadow-xl p-3 animate-float-3s">
                    <div className="aspect-[9/19.5] rounded-xl overflow-hidden border border-gray-200 bg-gradient-to-br from-orange-100 via-white to-orange-50 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="mx-auto w-5/6">
                          <div className="rounded-xl border border-gray-200 bg-white/90 shadow-lg p-4 transition-transform duration-300 hover:-translate-y-1">
                            <div className="h-40 rounded-lg bg-gradient-to-br from-orange-200 to-orange-100" />
                            <div className="mt-4 h-3 w-2/3 rounded bg-gray-200" />
                            <div className="mt-2 h-3 w-1/2 rounded bg-gray-100" />
                            <div className="mt-4 grid grid-cols-3 gap-3">
                              {[1, 2, 3].map((i) => (
                                <div key={i} className="h-16 rounded-md bg-gray-100" />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="sr-only">Mockup tampilan halaman personal Fashbreew untuk memajang OOTD dan produk.</p>
                </div>

                {/* Scroll Indicator */}
                <button
                  type="button"
                  onClick={handleScrollDown}
                  className="group absolute -bottom-6 left-1/2 -translate-x-1/2 inline-flex flex-col items-center gap-1 focus:outline-none"
                  aria-label="Scroll ke bawah untuk lanjut"
                >
                  <span className="sr-only">Scroll down</span>
                  <span className="h-10 w-6 rounded-full border-2 border-orange-500/60 relative flex items-start justify-center p-1">
                    <span className="h-2 w-1 rounded-full bg-orange-500/80 animate-bounce-slow" />
                  </span>
                  <span className="text-xs text-gray-500 group-hover:text-gray-700 transition-colors">Scroll</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* PROBLEM */}
        <section id="problem-section" aria-labelledby="problem-heading" className="py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 id="problem-heading" className="text-2xl sm:text-3xl font-bold">Kenapa Perlu Fashbreew?</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <GlassCard className="p-6">
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 text-orange-700">
                    <Link2 size={22} aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold">Link Berantakan</h3>
                    <p className="mt-2 text-gray-600">Bio penuh link? Susah dilacak, CTR turun. Satukan semuanya dalam satu halaman.</p>
                  </div>
                </div>
              </GlassCard>
              <GlassCard className="p-6">
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 text-orange-700">
                    <Camera size={22} aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold">OOTD Sia-sia</h3>
                    <p className="mt-2 text-gray-600">Konten bagus tanpa link rapi bikin trafik lewat begitu saja.</p>
                  </div>
                </div>
              </GlassCard>
              <GlassCard className="p-6">
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 text-orange-700">
                    <PiggyBank size={22} aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold">Komisi Hilang</h3>
                    <p className="mt-2 text-gray-600">Tanpa tracking jelas, potensi komisi sering kebuang.</p>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section aria-labelledby="features-heading" className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 id="features-heading" className="text-2xl sm:text-3xl font-bold">Semua yang Kamu Butuh</h2>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <GlassCard className="p-6">
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 text-orange-700"><Images size={22} aria-hidden /></span>
                  <div>
                    <h3 className="text-lg font-semibold">Catalog OOTD</h3>
                    <p className="mt-1 text-gray-600">Kelola feed OOTD yang clickable.</p>
                  </div>
                </div>
              </GlassCard>
              <GlassCard className="p-6">
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 text-orange-700"><ShoppingBag size={22} aria-hidden /></span>
                  <div>
                    <h3 className="text-lg font-semibold">Catalog Produk</h3>
                    <p className="mt-1 text-gray-600">Link affiliate multi-merchant.</p>
                  </div>
                </div>
              </GlassCard>
              <GlassCard className="p-6">
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 text-orange-700"><BarChart3 size={22} aria-hidden /></span>
                  <div>
                    <h3 className="text-lg font-semibold">Analytics</h3>
                    <p className="mt-1 text-gray-600">Pantau klik, konversi, dan performa.</p>
                  </div>
                </div>
              </GlassCard>
              <GlassCard className="p-6">
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 text-orange-700"><Palette size={22} aria-hidden /></span>
                  <div>
                    <h3 className="text-lg font-semibold">Halaman Personal</h3>
                    <p className="mt-1 text-gray-600">fashbreew.com/username yang bisa di-branding.</p>
                  </div>
                </div>
              </GlassCard>
              <GlassCard className="p-6">
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 text-orange-700"><Zap size={22} aria-hidden /></span>
                  <div>
                    <h3 className="text-lg font-semibold">Setup Cepat</h3>
                    <p className="mt-1 text-gray-600">Siap dipakai dalam hitungan menit.</p>
                  </div>
                </div>
              </GlassCard>
              <GlassCard className="p-6">
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 text-orange-700"><Smartphone size={22} aria-hidden /></span>
                  <div>
                    <h3 className="text-lg font-semibold">Mobile First</h3>
                    <p className="mt-1 text-gray-600">Optimasi dari 320px sampai 1920px.</p>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section aria-labelledby="how-heading" className="py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 id="how-heading" className="text-2xl sm:text-3xl font-bold">Cara Kerja</h2>
            <ol className="mt-8 relative border-s-2 border-orange-200 space-y-8">
              {[{ n: 1, title: 'Daftar', desc: 'Masuk daftar tunggu Beta untuk dapat akses lebih cepat.' }, { n: 2, title: 'Upload', desc: 'Tambahkan OOTD dan produk yang kamu pakai.' }, { n: 3, title: 'Share & Earn', desc: 'Bagikan link personal. Dapatkan klik, konversi, dan komisi.' }].map((s, idx) => (
                <li key={idx} className="ms-6">
                  <span className="absolute -start-3 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-white font-bold shadow-lg">{s.n}</span>
                  <div className="rounded-xl border border-white/60 bg-white/70 backdrop-blur-xl p-5 shadow-sm sm:p-6 transition-transform hover:-translate-y-0.5 hover:shadow-md hover:scale-[1.02]">
                    <h3 className="text-lg font-semibold">{s.title}</h3>
                    <p className="mt-1 text-gray-600">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* PRICING */}
        <section aria-labelledby="pricing-heading" className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 id="pricing-heading" className="text-2xl sm:text-3xl font-bold">Harga</h2>
            <div className="mt-8 grid grid-cols-1">
              <div className="relative overflow-hidden rounded-2xl border-2 border-orange-500 bg-gradient-to-br from-white to-orange-50 p-6 sm:p-8 shadow-xl">
                <p className="inline-flex items-center gap-2 rounded-full bg-orange-50 text-orange-700 px-3 py-1 text-sm font-medium border border-orange-200">
                  <Star size={16} aria-hidden /> Beta Access
                </p>
                <div className="mt-4 flex items-end gap-2">
                  <p className="text-4xl sm:text-5xl font-extrabold text-gray-900">Rp 300.000</p>
                  <span className="text-gray-600 mb-1">/ bulan</span>
                </div>
                <ul className="mt-6 space-y-3 text-gray-700">
                  {['Halaman personal unik (username)', 'Upload OOTD tanpa batas wajar', 'Link produk affiliate multi-merchant', 'Analytics klik & konversi', 'Optimasi SEO dasar', 'Support prioritas selama Beta'].map((f, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-700 text-sm font-bold">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <DisabledButton className="text-base px-6 py-3 w-full sm:w-auto">Coming Soon</DisabledButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* USE CASES */}
        <section aria-labelledby="usecases-heading" className="py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 id="usecases-heading" className="text-2xl sm:text-3xl font-bold">Cocok Untuk</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <GlassCard className="p-6">
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 text-orange-700"><CircleUserRound size={22} aria-hidden /></span>
                  <div>
                    <h3 className="text-lg font-semibold">Fashion Blogger</h3>
                    <p className="mt-1 text-gray-600">Rapikan link produk tiap post.</p>
                  </div>
                </div>
              </GlassCard>
              <GlassCard className="p-6">
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 text-orange-700"><Camera size={22} aria-hidden /></span>
                  <div>
                    <h3 className="text-lg font-semibold">Content Creator</h3>
                    <p className="mt-1 text-gray-600">Satu page untuk semua campaign.</p>
                  </div>
                </div>
              </GlassCard>
              <GlassCard className="p-6">
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 text-orange-700"><Users size={22} aria-hidden /></span>
                  <div>
                    <h3 className="text-lg font-semibold">Micro Influencer</h3>
                    <p className="mt-1 text-gray-600">Maksimalkan CTR tanpa ribet.</p>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* FAQ with animated expand/collapse */}
        <section aria-labelledby="faq-heading" className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 id="faq-heading" className="text-2xl sm:text-3xl font-bold">FAQ</h2>
            <div className="mt-6 divide-y divide-gray-200 border border-gray-200 rounded-xl">
              {faqs.map((item, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div key={idx} className="p-4 sm:p-6">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${idx}`}
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between gap-2 py-3 text-left min-h-[44px] focus:outline-none"
                    >
                      <h3 className="font-semibold text-lg">{item.q}</h3>
                      <span className={`transition-transform duration-200 text-gray-500 ${isOpen ? 'rotate-45' : ''}`} aria-hidden>➕</span>
                    </button>
                    <div
                      id={`faq-panel-${idx}`}
                      role="region"
                      aria-hidden={!isOpen}
                      className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'} overflow-hidden`}
                    >
                      <div className="min-h-0">
                        <p className="mt-2 text-gray-600">{item.a}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600" aria-hidden="true" />
              <div className="relative p-8 sm:p-12 lg:p-16 text-white">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold">Jadilah Creator Pertama yang Pakai Fashbreew</h2>
                <p className="mt-2 text-white/90 max-w-2xl">Masuk daftar tunggu dan dapatkan akses lebih dulu saat kami buka publik.</p>
                <div className="mt-6">
                  <DisabledButton className="bg-white/30 text-white border-white/40">Coming Soon - Stay Tuned! 🎉</DisabledButton>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-gray-100 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <div className="text-xl font-extrabold"><GradientText>Fashbreew</GradientText></div>
              <p className="mt-1 text-gray-600">Your Fashion, Your Link, Your Income</p>
            </div>
            <div className="flex items-center gap-4" aria-label="Social links">
              <a
                href="#"
                aria-label="Instagram"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-gray-700 hover:-translate-y-0.5 hover:shadow transition duration-200"
              >
                <Instagram size={20} aria-hidden />
              </a>
            </div>
          </div>
          <div className="mt-8 text-sm text-gray-500">© 2025 Fashbreew. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
