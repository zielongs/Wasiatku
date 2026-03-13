<?php
// harga.php - SmartWills WasiatKu Pricing Page
$page_title = "Harga – SmartWills WasiatKu";
$current_page = "harga";
?>
<!DOCTYPE html>
<html lang="ms">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <meta name="description" content="Lihat paket harga kami yang fleksibel untuk penulisan wasiat Islam online."/>
  <title><?php echo $page_title; ?></title>
  <link href="https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&family=Playfair+Display:wght@500;600;700&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet"/>
  <link rel="stylesheet" href="css/style.css"/>
  <link rel="stylesheet" href="css/harga.css"/>
</head>
<body>

<!-- PAGE LOADER -->
<div class="page-loader" id="pageLoader">
  <div class="loader-bar"><div class="loader-progress"></div></div>
</div>

<nav id="navbar">
  <div class="nav-links" id="navLinks">
    <a href="index.php" class="<?php echo $current_page==='home'?'active':'' ?>">Laman Utama</a>
    <a href="harga.php" class="<?php echo $current_page==='harga'?'active':'' ?>">Harga</a>
    <a href="tentang_kami.php" class="<?php echo $current_page==='tentang'?'active':'' ?>">Tentang Kami</a>
    <a href="soalan_lazim.php" class="<?php echo $current_page==='faq'?'active':'' ?>">Soalan Lazim</a>
    <a href="hubungi_kami.php" class="<?php echo $current_page==='hubungi'?'active':'' ?>">Hubungi Kami</a>
    <div class="dropdown-container">
      <button class="dropdown-trigger" onclick="toggleDropdown(event)" style="background:none;border:none;cursor:pointer;font-family:inherit;">Lain-lain ▾</button>
      <div class="dropdown-menu nav-dropdown">
        <a href="terma_syarat.php">Terma &amp; Syarat</a>
        <a href="terma_penggunaan.php">Terma Penggunaan</a>
        <a href="pendedahan_produk.php">Pendedahan Produk</a>
        <a href="perkongsian.php">Perkongsian</a>
      </div>
    </div>
  </div>
  <div class="nav-right">
    <a href="https://app.mysmartwills.com/portal/?company_id=4" target="_blank" rel="noopener" class="btn-login">LOG MASUK</a>
    <button class="nav-hamburger" id="hamburger" aria-label="Menu">☰</button>
  </div>
  <a class="nav-logo" href="index.php">
    <img src="images/logo_header.png" alt="SmartWills WasiatKu Logo" class="nav-logo-img"/>
  </a>
</nav>

<!-- PRICING HEADER -->
<section class="pricing-header">
  <h1>Harga Kami</h1>
  <p class="pricing-subtitle">Nikmati platform penulisan wasiat dalam talian kami yang cepat, mudah, dan selamat. Tulis wasiat anda dalam hanya <span class="pricing-highlight">15 minit</span>.</p>
  <p class="pricing-subtitle" style="margin-top: 20px; font-size: 0.9rem; color: var(--muted);">Memilih Pelan yang Tepat — Kami mempunyai pakej yang disesuaikan mengikut keperluan dan keadaan anda.</p>
</section>

<!-- PRICING CARDS -->
<section class="pricing-container">
  <div class="pricing-cards">
    <!-- BASIC PLAN -->
    <div class="price-card fade-in">
      <h3 class="plan-name">Asas</h3>
      <div class="plan-price"><span class="plan-currency">RM</span>280</div>
      <ul class="plan-features">
        <li><strong>10</strong> Aset dan Liabiliti Yang Disenaraikan</li>
        <li><strong>1</strong> Orang Pelaksana Utama</li>
        <li><strong>2</strong> Orang Pelaksana Pengganti</li>
        <li>Tiada Had Penerima Manfaat</li>
      </ul>
      <button class="plan-btn">MULAKAN</button>
    </div>

    <!-- PREMIUM PLAN -->
    <div class="price-card featured fade-in">
      <div class="price-badge">Paling Popular</div>
      <h3 class="plan-name">Tambahan</h3>
      <div class="plan-price"><span class="plan-currency">RM</span>480</div>
      <ul class="plan-features">
        <li><strong>Tiada Had</strong> Aset dan Liabiliti</li>
        <li><strong>1</strong> Orang Pelaksana Utama</li>
        <li><strong>2</strong> Orang Pelaksana Pengganti</li>
        <li>Tiada Had Penerima Manfaat</li>
      </ul>
      <button class="plan-btn">MULAKAN</button>
    </div>
  </div>

  <!-- PRICING NOTE -->
  <div class="pricing-note">
    <strong>⚠️ Nota Penting:</strong> Pewasiat, pentadbir, penjaga, saksi, dan penerima manfaat mestilah warganegara Malaysia. Nombor Kad Pengenalan Malaysia diperlukan untuk mengenal pasti butiran individu-individu ini.
  </div>
</section>

<!-- WHY CHOOSE SECTION -->
<section class="why-choose">
  <h2>Mengapa Memilih SmartWills WasiatKu?</h2>
  <p>Kami menyediakan solusi terpercaya untuk penulisan wasiat Anda</p>
  
  <div class="benefits-grid">
    <div class="benefit-item fade-in">
      <div class="benefit-icon">⚡</div>
      <h3>Cepat &amp; Mudah</h3>
      <p>Tulis wasiat lengkap dalam hanya 15 minit tanpa perlu nasihat peguam.</p>
    </div>
    <div class="benefit-item fade-in">
      <div class="benefit-icon">🛡️</div>
      <h3>Sah Menurut Syarak</h3>
      <p>Platform kami mematuhi semua hukum Islam dan peraturan Malaysia.</p>
    </div>
    <div class="benefit-item fade-in">
      <div class="benefit-icon">🔐</div>
      <h3>Selamat &amp; Sulit</h3>
      <p>Data anda dilindungi dengan enkripsi peringkat bank dan privasi terjamin.</p>
    </div>
    <div class="benefit-item fade-in">
      <div class="benefit-icon">📱</div>
      <h3>Akses Di Mana-mana</h3>
      <p>Akses wasiat anda kapan saja dari mana saja melalui perangkat apa saja.</p>
    </div>
    <div class="benefit-item fade-in">
      <div class="benefit-icon">💼</div>
      <h3>Sokongan Profesional</h3>
      <p>Tim kami siap membantu anda 24/7 untuk pertanyaan dan bantuan teknis.</p>
    </div>
    <div class="benefit-item fade-in">
      <div class="benefit-icon">✨</div>
      <h3>Dipercayai Ribuan</h3>
      <p>Ribuan keluarga Malaysia telah mempercayai kami untuk melindungi masa depan mereka.</p>
    </div>
  </div>
</section>

<!-- FOOTER -->
<footer class="footer">
  <div class="footer-content">
    <div class="footer-cols">
      <div class="footer-col">
        <h5>Perusahaan</h5>
        <ul>
          <li><a href="index.php">Laman Utama</a></li>
          <li><a href="harga.php">Harga</a></li>
          <li><a href="tentang_kami.php">Tentang Kami</a></li>
          <li><a href="soalan_lazim.php">Soalan Lazim</a></li>
          <li><a href="hubungi_kami.php">Hubungi Kami</a></li>
          <li><a href="perkongsian.php">Perkongsian</a></li>
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
      <div class="footer-col">
        <h5>Sokongan</h5>
        <ul>
          <li><a href="hubungi_kami.php">Hubungi Kami</a></li>
          <li><a href="soalan_lazim.php">Soalan Lazim</a></li>
          <li><a href="#">Pusat Bantuan</a></li>
          <li><a href="#">Status Sistem</a></li>
        </ul>
      </div>
    </div>

    <div class="footer-divider"></div>

    <div class="footer-badges fade-in">
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
<script src="js/harga.js"></script>
</body>
</html>