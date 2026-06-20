export default function Location() {
  return (
    <section id="location" className="section bg-pink">
      <div className="container">
        <h2 className="section-title">MAMPIR SINI!</h2>
        <div className="location-content">
          <div className="location-details card">
            <h3>📍 Lokasi Workshop</h3>
            <p><strong>Kanken Project - Screen printing shop</strong></p>
            <p>868M+976, Blok Senin, RT.08/RW.04<br/>Patuanan, Kec. Leuwimunding<br/>Kabupaten Majalengka<br/>Jawa Barat 45473</p>
            <div className="contact-info">
              <p>📞 <strong>Phone:</strong> 0822-9363-2467</p>
              <p>🕒 <strong>Hours:</strong> 07.30 AM - 04.00 PM (Senin - Minggu)</p>
            </div>
            <a 
              href="https://maps.google.com/?q=868M+976,+Blok+Senin,+RT.08/RW.04,+Patuanan,+Kec.+Leuwimunding,+Kabupaten+Majalengka,+Jawa+Barat+45473" 
              target="_blank" 
              rel="noreferrer"
              className="btn btn-primary w-full text-center"
            >
              Buka di Maps
            </a>
          </div>
          <div className="location-map card map-card">
            <div className="map-placeholder">
              🌍 AREA MAJALENGKA & SEKITARNYA
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
