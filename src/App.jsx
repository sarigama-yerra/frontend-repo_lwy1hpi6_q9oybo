import React, { useEffect, useRef, useState } from 'react';

const GradientText = ({ children, className = '' }) => (
  <span
    className={`bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600 bg-clip-text text-transparent ${className}`}
  >
    {children}
  </span>
);

const DisabledButton = ({ children, className = '', ariaLabel }) => (
  <button
    type="button"
    disabled
    aria-disabled="true"
    aria-label={ariaLabel || 'Coming Soon'}
    className={`w-full sm:w-auto inline-flex items-center justify-center rounded-md border border-gray-300 bg-gray-200 text-gray-500 cursor-not-allowed px-5 py-3 font-semibold shadow-sm transition-all duration-200 min-h-[44px] ${className}`}
  >
    {children}
  </button>
);

function App() {
  const [openIndex, setOpenIndex] = useState(null);
  const heroRef = useRef(null);

  // Smooth scroll handler for the indicator
  const handleScrollDown = () => {
    const next = document.getElementById('problem-section');
    if (next) next.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // FAQ data
  const faqs = [
    {q:'Kapan bisa dipakai?', a:'Kami sedang di tahap Beta tertutup. Daftar tunggu akan dibuka segera untuk batch pertama.'},
    {q:'Ada biaya setup?', a:'Tidak ada biaya setup. Kamu cukup berlangganan Rp 300.000 per bulan saat peluncuran.'},
    {q:'Platform affiliate apa?', a:'Kami akan mendukung beberapa merchant fashion Indonesia dan internasional. Detail akan diumumkan saat peluncuran.'},
    {q:'Analytics real-time?', a:'Dashboard menampilkan data yang diperbarui secara berkala dengan fokus pada akurasi klik & konversi.'},
  ];

  return (
    <div className="min-h-screen antialiased text-gray-900 bg-white">
      {/* NAV */}
      <header className="sticky top-0 z-20 border-b border-gray-100 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Primary">
          <div className="flex h-16 items-center justify-between">
            <a href="#" className="flex items-center gap-2" aria-label="Fashbreew Home">
              <span className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                <GradientText>Fashbreew</GradientText>
              </span>
            </a>
            <DisabledButton className="text-sm" ariaLabel="Coming Soon button in navigation">
              Coming Soon
            </DisabledButton>
          </div>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section
          className="relative overflow-hidden"
          aria-labelledby="hero-heading"
          ref={heroRef}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-orange-50 via-white to-white" aria-hidden="true" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full bg-white/90 ring-1 ring-gray-200 px-3 py-1 text-sm font-medium text-gray-700 shadow-sm">
                  <span role="img" aria-label="confetti">🎉</span>
                  Beta - Rp 300.000/bulan
                </p>
                <h1 id="hero-heading" className="mt-4 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight">
                  Ubah OOTD Kamu Jadi Cuan dengan <span className="whitespace-nowrap">Satu Link</span>
                </h1>
                <p className="mt-4 text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl">
                  Platform affiliate khusus fashion creator. Pajang outfit dan produk dalam satu halaman personal—ringkas, rapi, dan siap konversi.
                </p>
                <div className="mt-6">
                  <DisabledButton className="text-base px-6 py-3">
                    Coming Soon 🚀
                  </DisabledButton>
                </div>
              </div>

              {/* Mockup visual */}
              <div className="relative">
                <div className="mx-auto w-full max-w-md lg:max-w-lg">
                  <div className="rounded-2xl border border-gray-200 bg-white shadow-xl p-3 animate-float-3s">
                    <div className="aspect-[9/19.5] rounded-xl overflow-hidden border border-gray-200 bg-gradient-to-br from-orange-100 via-white to-orange-50 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="mx-auto w-5/6">
                          <div className="rounded-xl border border-gray-200 bg-white/90 shadow-lg p-4 transition-transform duration-300 hover:-translate-y-1">
                            <div className="h-40 rounded-lg bg-gradient-to-br from-orange-200 to-orange-100" />
                            <div className="mt-4 h-3 w-2/3 rounded bg-gray-200" />
                            <div className="mt-2 h-3 w-1/2 rounded bg-gray-100" />
                            <div className="mt-4 grid grid-cols-3 gap-3">
                              {[1,2,3].map((i) => (
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
              {[
                {icon:'🔗', title:'Berantakan', desc:'Link banyak bikin bio berantakan. Susah dilacak, susah di klik.'},
                {icon:'📸', title:'OOTD Sia-sia', desc:'Konten bagus tanpa link rapi = trafik lewat begitu saja.'},
                {icon:'💸', title:'Komisi Hilang', desc:'Tanpa tracking yang jelas, potensi komisi sering kebuang.'},
              ].map((item, idx) => (
                <article
                  key={idx}
                  className="rounded-xl bg-gray-50 border border-gray-100 p-6 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-md hover:scale-[1.02]"
                >
                  <div className="text-3xl" aria-hidden="true">{item.icon}</div>
                  <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-gray-600">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section aria-labelledby="features-heading" className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 id="features-heading" className="text-2xl sm:text-3xl font-bold">Semua yang Kamu Butuh</h2>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                '📸 Catalog OOTD',
                '🛍️ Catalog Produk',
                '📊 Analytics Dashboard',
                '🎨 Personal Page (fashbreew.com/username)',
                '⚡ Setup Cepat',
                '📱 Mobile Friendly',
              ].map((text, idx) => (
                <article
                  key={idx}
                  className="rounded-xl bg-white border border-gray-100 p-6 shadow-lg transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl hover:scale-[1.02]"
                >
                  <h3 className="text-lg font-semibold">{text}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section aria-labelledby="how-heading" className="py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 id="how-heading" className="text-2xl sm:text-3xl font-bold">Cara Kerja</h2>
            <ol className="mt-8 relative border-s-2 border-orange-200 space-y-8">
              {[
                {n:1, title:'Daftar', desc:'Masuk daftar tunggu Beta untuk dapat akses lebih cepat.'},
                {n:2, title:'Upload', desc:'Tambahkan OOTD dan produk yang kamu pakai.'},
                {n:3, title:'Share & Earn', desc:'Bagikan link personal. Dapatkan klik, konversi, dan komisi.'},
              ].map((s, idx) => (
                <li key={idx} className="ms-6">
                  <span className="absolute -start-3 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-white font-bold shadow-lg">
                    {s.n}
                  </span>
                  <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6 transition-transform hover:-translate-y-0.5 hover:shadow-md hover:scale-[1.02]">
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
              <article className="rounded-2xl border-2 border-orange-500 bg-white p-6 sm:p-8 shadow-xl">
                <p className="inline-flex items-center gap-2 rounded-full bg-orange-50 text-orange-700 px-3 py-1 text-sm font-medium">
                  <span role="img" aria-label="rocket">🚀</span> Beta Access
                </p>
                <div className="mt-4 flex items-end gap-2">
                  <p className="text-4xl sm:text-5xl font-extrabold text-gray-900">Rp 300.000</p>
                  <span className="text-gray-600 mb-1">/ bulan</span>
                </div>
                <ul className="mt-6 space-y-3 text-gray-700">
                  {[
                    'Halaman personal unik (username)',
                    'Upload OOTD tanpa batas wajar',
                    'Link produk affiliate multi-merchant',
                    'Analytics klik & konversi',
                    'Optimasi SEO dasar',
                    'Support prioritas selama Beta',
                  ].map((f, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-700 text-sm font-bold">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <DisabledButton className="text-base px-6 py-3 w-full sm:w-auto">
                    Coming Soon
                  </DisabledButton>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* USE CASES */}
        <section aria-labelledby="usecases-heading" className="py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 id="usecases-heading" className="text-2xl sm:text-3xl font-bold">Cocok Untuk</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {icon:'👗', title:'Fashion Blogger'},
                {icon:'📷', title:'Content Creator'},
                {icon:'🌟', title:'Micro Influencer'},
              ].map((u, idx) => (
                <article key={idx} className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-md hover:scale-[1.02]">
                  <div className="text-3xl" aria-hidden="true">{u.icon}</div>
                  <h3 className="mt-3 text-lg font-semibold">{u.title}</h3>
                </article>
              ))}
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
                      <span className={`transition-transform duration-200 text-gray-500 ${isOpen ? 'rotate-45' : ''}`} aria-hidden="true">➕</span>
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
                  <DisabledButton className="bg-white/30 text-white border-white/40">
                    Coming Soon - Stay Tuned! 🎉
                  </DisabledButton>
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
              <div className="text-xl font-extrabold">
                <GradientText>Fashbreew</GradientText>
              </div>
              <p className="mt-1 text-gray-600">Your Fashion, Your Link, Your Income</p>
            </div>
            <div className="flex items-center gap-4" aria-label="Social links">
              <a
                href="#"
                aria-label="Instagram"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-gray-700 hover:-translate-y-0.5 hover:shadow transition duration-200"
              >
                {/* Instagram glyph */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
                </svg>
              </a>
              <a
                href="#"
                aria-label="TikTok"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-gray-700 hover:-translate-y-0.5 hover:shadow transition duration-200"
              >
                {/* Simple TikTok glyph */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M15 4c.7 1.6 2.1 2.9 3.9 3.2V10c-1.7 0-3.3-.6-4.5-1.7v6.1a5.4 5.4 0 1 1-3-4.8v2.6a2.4 2.4 0 1 0 1.5 2.2V4h2.1z" fill="currentColor"/>
                </svg>
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
