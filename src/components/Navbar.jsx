import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <img src="/logo.png" alt="Kanken Logo" className="nav-logo" />
        <span>KANKEN.</span>
      </div>
      
      <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
        <div className="nav-links">
          <a href="#about" onClick={closeMenu}>Tentang Kami</a>
          <a href="#services" onClick={closeMenu}>Layanan</a>
          <a href="#location" onClick={closeMenu}>Lokasi</a>
        </div>
        <a 
          href="https://wa.me/6282293632467?text=Halo%20Kanken%20Project,%20saya%20ingin%20pesan%20sablon!" 
          target="_blank" 
          rel="noreferrer"
          className="btn btn-primary nav-btn"
          onClick={closeMenu}
        >
          Order Sekarang
        </a>
      </div>
    </nav>
  );
}
