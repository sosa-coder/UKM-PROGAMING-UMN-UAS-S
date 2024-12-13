import React from "react";
import logo from "../assets/Logo.png"; // Mengimpor gambar logo
import "./Header.css"; // Pastikan untuk menambahkan CSS khusus untuk header

function Header() {
  return (
    <header>
      <div className="logo-container">
        <a href="#home" className="logo-link">
          <img src={logo} alt="Logo" className="logo" />
          <span className="logo-text">UMN PC</span> {/* Teks sebelah logo */}
        </a>
      </div>
      <nav>
        <a href="#galeri">Gallery</a>
        <a href="#profil">Profile</a>
        <a href="#kegiatan">Kegiatan</a>
        <a href="#faq">FAQ</a>
        <a href="#keanggotaan">Keanggotaan</a>
        <a href="#kontributor">Kontributor</a>{" "}
        {/* Menggunakan huruf kecil sesuai id */}
        <a href="#contact">Contact Us</a>
      </nav>
    </header>
  );
}

export default Header;
