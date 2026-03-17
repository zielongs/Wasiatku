<?php
// soalan_lazim.php

$page_title = "Soalan Lazim (FAQ) | WasiatKu";
$current_page = "faq";
?>
<!DOCTYPE html>
<html lang="ms">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?php echo $page_title; ?></title>
  
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Amiri:wght@400;700&family=Roboto+Slab:wght@300;400;500;700&display=swap" rel="stylesheet">
  
  <link rel="stylesheet" href="css/style.css">
</head>
<body class="page-faq">

  <!-- ================= HEADER ================= -->
  <header>
    <nav id="navbar" class="scrolled">
      <div class="nav-logo-wrap">
        <a href="index.php" class="logo">
          <img src="images/logo_header.png" alt="WasiatKu" class="nav-logo-img">
        </a>
      </div>
      <div class="nav-bottom-row">
        <ul class="nav-links">
          <li><a href="index.php" class="<?php echo $current_page==='home'?'active':'' ?>">Laman Utama</a></li>
          <li><a href="harga.php" class="<?php echo $current_page==='harga'?'active':'' ?>">Harga</a></li>
          <li><a href="tentang_kami.php" class="<?php echo $current_page==='tentang'?'active':'' ?>">Tentang Kami</a></li>
          <li><a href="soalan_lazim.php" class="<?php echo $current_page==='faq'?'active':'' ?>">Soalan Lazim</a></li>
          <li><a href="hubungi_kami.php" class="<?php echo $current_page==='hubungi'?'active':'' ?>">Hubungi Kami</a></li>
        </ul>
        <div class="nav-right">
          <a href="#" class="btn-login">Log Masuk</a>
        </div>
      </div>
    </nav>
  </header>

  <!-- ================= PAGE HERO ================= -->
  <section class="inner-page-hero fade-in">
    <div class="inner-page-hero-content">
      <div class="section-ornament">✦ ✦ ✦</div>
      <span class="section-label light-label">Bantuan</span>
      <h1>Soalan Lazim (FAQ)</h1>
      <p class="hero-tagline">Panduan dan Pencerahan Untuk Anda</p>
    </div>
  </section>

  <!-- ================= FAQ CONTENT ================= -->
  <section class="faq-section section fade-in">
    <div class="faq-container">
      
      <!-- FAQ ITEM 1 -->
      <div class="faq-item">
        <button class="faq-question" onclick="toggleFaq(this)">
          <h3>Adakah anda memerlukan peguam untuk menyediakan wasiat?</h3>
          <span class="faq-icon">▾</span>
        </button>
        <div class="faq-answer">
          <div class="faq-answer-inner">
            <p>Tidak, asalkan wasiat itu bertulis dan memenuhi syarat-syarat sah yang ditetapkan oleh undang-undang di Malaysia.</p>
          </div>
        </div>
      </div>

      <!-- FAQ ITEM 2 -->
      <div class="faq-item">
        <button class="faq-question" onclick="toggleFaq(this)">
          <h3>Apa yang berlaku jika saya meninggal dunia tanpa wasiat?</h3>
          <span class="faq-icon">▾</span>
        </button>
        <div class="faq-answer">
          <div class="faq-answer-inner">
            <p>Bagi orang Islam, harta akan dibahagikan mengikut hukum Faraid. Bagi bukan Islam, pembahagian akan dibuat berdasarkan Akta Pembahagian 1958.</p>
          </div>
        </div>
      </div>

      <!-- FAQ ITEM 3 -->
      <div class="faq-item">
        <button class="faq-question" onclick="toggleFaq(this)">
          <h3>Siapa yang boleh saya lantik sebagai Pelaksana Wasiat?</h3>
          <span class="faq-icon">▾</span>
        </button>
        <div class="faq-answer">
          <div class="faq-answer-inner">
            <p>Anda boleh melantik individu (seperti ahli keluarga atau rakan yang dipercayai) atau syarikat amanah korporat untuk menguruskan pentadbiran harta anda.</p>
          </div>
        </div>
      </div>

      <!-- FAQ ITEM 4 -->
      <div class="faq-item">
        <button class="faq-question" onclick="toggleFaq(this)">
          <h3>Apakah tanggungjawab Pelaksana Wasiat?</h3>
          <span class="faq-icon">▾</span>
        </button>
        <div class="faq-answer">
          <div class="faq-answer-inner">
            <p>Tanggungjawab utama termasuk mengesan wasiat, menguruskan aset, membayar hutang atau liabiliti si mati, dan membahagikan baki harta kepada waris atau penerima manfaat mengikut arahan dalam wasiat.</p>
          </div>
        </div>
      </div>

      <!-- FAQ ITEM 5 -->
      <div class="faq-item">
        <button class="faq-question" onclick="toggleFaq(this)">
          <h3>Apakah syarat untuk menjadi Saksi wasiat?</h3>
          <span class="faq-icon">▾</span>
        </button>
        <div class="faq-answer">
          <div class="faq-answer-inner">
            <p>Wasiat memerlukan sekurang-kurangnya dua (2) orang saksi yang berumur 18 tahun ke atas dan sempurna akal. Penting: Saksi dan pasangan saksi tidak boleh terdiri daripada penerima manfaat (benefisiari) wasiat tersebut.</p>
          </div>
        </div>
      </div>

    </div>
  </section>

  <!-- ================= FOOTER ================= -->
  <!-- ═══ FOOTER ═══ -->
  <footer>
    <div class="footer-bg-img" style="background-image:url('images/hero-bg.jpg');"></div>
    <div class="footer-overlay"></div>
    <div class="footer-content">

      <div class="footer-top-bar">
        <div class="footer-brand">
          <img src="images/slogan.png" alt="SmartWills Logo" class="footer-logo">
          <div class="footer-brand-text">
            <p class="footer-tagline">Your smartest &amp; fastest online will writer</p>
            <p class="footer-tagline-ar">أذكى وأسرع كاتب وصية في ماليزيا</p>
          </div>
        </div>
        <div class="footer-socials">
          <a href="https://www.facebook.com/smartwills.com.my/" target="_blank" rel="noopener" class="social-btn" aria-label="Facebook">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
          </a>
          <a href="https://www.youtube.com/channel/UC4sIsrzxOq_4FgoPdi-83Rw" target="_blank" rel="noopener" class="social-btn" aria-label="YouTube">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM10 15.5v-7l6 3.5-6 3.5z"/></svg>
          </a>
          <a href="https://www.instagram.com/smartwills.my/" target="_blank" rel="noopener" class="social-btn" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/></svg>
          </a>
        </div>
      </div>

      <div class="footer-divider"></div>

      <div class="footer-main">
        <div class="footer-company">
          <h4>WASIATKU FINTECH SDN BHD</h4>
          <p class="co-reg">(202301043968)</p>
          <div class="contact-item"><span>📞</span><span>+6018-220 9929</span></div>
          <div class="contact-item"><span>✉️</span><span>enquiry@wasiatku.com.my</span></div>
          <div class="contact-item"><span>📍</span><span>B-2-19, Blok Bougainvilia, 10 Boulevard, Lebuhraya Sprint, PJU6A, 47400 Petaling Jaya, Selangor, Malaysia</span></div>
        </div>
        <div class="footer-nav-cols">
          <div class="footer-col">
            <h5>Laman Utama</h5>
            <ul>
            <li><a href="index.php" class="<?php echo $current_page==='home'?'active':'' ?>">Laman Utama</a></li>
            <li><a href="harga.php" class="<?php echo $current_page==='harga'?'active':'' ?>">Harga</a></li>
            <li><a href="tentang_kami.php" class="<?php echo $current_page==='tentang'?'active':'' ?>">Tentang Kami</a></li>
            <li><a href="soalan_lazim.php" class="<?php echo $current_page==='faq'?'active':'' ?>">Soalan Lazim</a></li>
            <li><a href="hubungi_kami.php" class="<?php echo $current_page==='hubungi'?'active':'' ?>">Hubungi Kami</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h5>Lain-lain</h5>
            <ul>
              <li><a href="terma_syarat.php">Terma &amp; Syarat</a></li>
              <li><a href="terma_penggunaan.php">Terma Penggunaan</a></li>
              <li><a href="pendedahan_produk.php">Pendedahan Produk</a></li>
              <li><a href="perkongsian.php">Perkongsian</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer-divider"></div>

      <div class="footer-badges">
        <p class="badges-title">Pensijilan &amp; Pencapaian Kami</p>
        <img src="images/achieve.png" alt="Pencapaian WasiatKu" class="badges-image">
      </div>

      <div class="footer-divider"></div>
      <div class="footer-bottom">
        <p>© 2023 – <?php echo date('Y'); ?> All rights reserved | WasiatKu.com.my</p>
        <p class="footer-bottom-ar">جميع الحقوق محفوظة</p>
      </div>
    </div>
  </footer>

  <!-- WHATSAPP FLOAT -->
  <a href="https://wa.me/60182209929" class="whatsapp-float" target="_blank" rel="noopener" aria-label="WhatsApp">
    <div class="wa-bubble">
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.555 4.122 1.528 5.855L.057 23.887l6.186-1.624A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.938a9.92 9.92 0 01-5.058-1.384l-.362-.215-3.754.984 1.003-3.657-.236-.375A9.938 9.938 0 012.062 12C2.062 6.526 6.526 2.062 12 2.062S21.938 6.526 21.938 12 17.474 21.938 12 21.938z"/></svg>
      <span>Chat dengan kami</span>
    </div>
    <img src="images/suri.gif" alt="WasiatKu Helper" class="mascot-img"/>
  </a>

  <!-- SCROLL TOP -->
  <button class="scroll-top" id="scrollTop" aria-label="Kembali ke atas">↑</button>

  <!-- TOAST NOTIFICATION -->
  <div class="toast" id="toast"></div>

  <script src="js/script.js"></script>
</body>
</html>
