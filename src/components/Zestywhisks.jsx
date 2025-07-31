import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

const cakes = [
  {
    name: 'Lemon Loaf',
    description: 'A zesty delight with a perfect balance of sweet and tart, topped with a tangy lemon glaze.',
    img: '<./images/lemon-loaf.jpg>' // Replace with actual image URL
  },
  {
    name: 'Vanilla Loaf',
    description: 'Classic vanilla flavor with a moist, buttery crumb and a delicate vanilla bean glaze.',
    img: '<././images/vanilla-loaf.jpg>' // Replace with actual image URL
  },
  {
    name: 'Blueberry Loaf',
    description: 'Bursting with juicy blueberries and a hint of lemon, finished with a sweet crumb topping.',
    img: '<./images/blueberry-loaf.jpg>' // Replace with actual image URL
  },
  {
    name: 'Banana Loaf',
    description: 'Rich banana flavor with walnuts and a caramelized crust, made with perfectly ripe bananas.',
    img: '<./images/banana-loaf.jpg>' // Replace with actual image URL
  }
];

export default function ZestyWhisks() {
  return (
    <div className="bg-light text-dark">
      {/* Hero */}
      <section className="bg-warning py-5 text-center">
        <h1 className="display-4 fw-bold text-dark">Zesty Whisks</h1>
        <p className="lead">Artisanal Loaf Cakes Baked with Love</p>
        <a href="#menu" className="btn btn-primary mt-3">Explore Our Loaves</a>
      </section>

      {/* About */}
      <section className="py-5 px-4 bg-white">
        <div className="container">
          <h2 className="mb-3 fw-bold text-warning">Our Story</h2>
          <p>At Zesty Whisks, we believe in the magic of simple ingredients transformed into extraordinary treats. Our journey began in a small home kitchen, where we experimented with flavors until we perfected our signature loaf cakes.</p>
          <p>Each loaf is handcrafted with care, using only the finest ingredients. We take pride in creating cakes that are moist, flavorful, and perfect for any occasion – from morning tea to special celebrations.</p>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold text-warning">Our Signature Loaves</h2>
          <div className="row">
            {cakes.map((cake, idx) => (
              <div key={idx} className="col-md-6 col-lg-3 mb-4">
                <div className="card h-100 shadow border-0">
                  <img src={cake.img} alt={cake.name} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title fw-bold text-warning">{cake.name}</h5>
                    <p className="card-text small">{cake.description}</p>
                  </div>
                  <div className="card-footer bg-white border-0 d-flex justify-content-end">
                    <a
                      href="https://instagram.com/zestywhisks"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-primary rounded-pill"
                    >
                      Order Now 
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-5 bg-dark text-white">
        <div className="container text-center">
          <h2 className="fw-bold text-warning mb-4">Contact Us</h2>
          <p className="lead mb-4">Have questions or want to place an order? Let’s get social!</p>
          <div className="mb-4">
            <a href="https://instagram.com/zestywhisks" className="text-warning fs-3 me-4" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="https://tiktok.com/@zestywhisks" className="text-warning fs-3" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-tiktok"></i>
            </a>
          </div>
          <p>For direct orders and inquiries:</p>
          <p><strong>Call/WhatsApp:</strong> +254 712 345678</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-4">
        <p className="fs-4 fw-bold">Zesty Whisks</p>
        <p className="text-muted">Artisanal Loaf Cakes &copy; 2025</p>
      </footer>
    </div>
  );
}
