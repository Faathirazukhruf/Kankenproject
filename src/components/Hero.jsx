export default function Hero() {
  return (
    <header className="hero">
      <div className="hero-content">
        <h1 className="sr-only">Jasa Sablon Kaos Custom Majalengka</h1>
        <h2 className="hero-title" aria-hidden="true">BIKIN SABLONMU <br/><span className="highlight">MAKIN KECE!</span></h2>
        <p className="hero-subtitle">
          Kanken Project hadir buat wujudin ide kreatifmu jadi sablonan berkualitas. Jasa sablon terdekat di Majalengka, Leuwimunding. Sesuaikan gayamu, kualitas terjamin, harga bersahabat.
        </p>
        <div className="hero-actions">
          <a 
            href="https://wa.me/6282293632467?text=Halo%20Kanken%20Project,%20saya%20ingin%20tanya%20harga%20sablon!" 
            target="_blank" 
            rel="noreferrer"
            className="btn btn-primary btn-large"
          >
            Tanya Harga
          </a>
          <a href="#services" className="btn btn-secondary btn-large">Lihat Layanan</a>
        </div>
      </div>
      <div className="hero-image">
        <div className="image-wrapper">
          <img src="/kankenprojectlogo.jpeg" alt="sablon-kaos-custom-majalengka-kanken-project" />
        </div>
      </div>
    </header>
  );
}
