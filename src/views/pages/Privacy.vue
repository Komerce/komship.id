<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Disabled</a>
            </li>
          </ul>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
    <section class="privacy">
      <div class="container">
        <h2 class="title">Kebijakan Privasi</h2>
        <p>
          <span>PT. Kampung Marketerindo Berdaya</span> yang kemudian disebut
          “Komship” atau “Kami” adalah pemilik konten, grafis, dan pengembang
          dari situs dan platform Komship. Kami berkomitmen untuk melindungi dan
          menghargai privasi dan informasi pribadi maupun perusahaan yang kami
          miliki.
        </p>
        <p>
          Anda wajib membaca dan memahami Kebijakan Privasi kami sebelum
          menggunakan layanan Komship. Dengan menggunakan layanan Komship, kami
          menganggap anda telah setuju dengan Kebijakan Privasi kami.
        </p>
        <h5>PEROLEHAN DATA</h5>
        <p>Komship memperoleh data pribadi maupun perusahaan melalui:</p>
        <ul>
          <li>Pencatatan data secara otomatis</li>
          <li>Registrasi online</li>
          <li>Sumber informasi lainnya</li>
        </ul>
        <h5>PENGGUNAAN DATA</h5>
        <p>Data-data yang telah diperloleh akan digunakan untuk:</p>
        <ul>
          <li>Melakukan komunikasi dalam rangka penawaran jasa Komship</li>
          <li>
            Melakukan komunikasi koordinasi antar pihak Komship dengan partner
          </li>
          <li>Menyebarkan informasi dan promosi Komship</li>
          <li>
            Sebagai database kontak partner, calon partner, dan ex-partner
          </li>
          <li>Pengisian data pada form Komship</li>
          <li>Registrasi online</li>
          <li>Sumber informasi lainnya</li>
        </ul>
        <h5>JAMINAN KEAMANAN DATA</h5>
        <p>
          Komship menjamin kerahasiaan dan keamanan data pribadi maupun bisnis
          dari pihak-pihak lain yang akan menggunakan untuk tindakan yang
          merugikan pribadi atau bisnis. Komship akan menginformasikan terlebih
          dahulu dan meminta persetujuan pemilik data jika akan melakukan
          publikasi data pribadi atau bisnis pengguna jasa.
        </p>
        <p>
          Namun Komship tidak bertanggung jawab apabila kebocoran data dilakukan
          karena tindakan pemilik data atau pengguna jasa tanpa arahan dari
          pihak Komship.
        </p>
      </div>
    </section>
  </div>
</template>
<script>
import { useMeta } from "vue-meta";
export default {
  setup() {
    useMeta({
      title: "Kebijakan Privasi",
    });
  },
};
</script>
<style>
.privacy {
  padding: 7vw 0;
  background-color: #f6f6f9;
  height: 100%;
  text-align: justify;
}
.privacy .title {
  display: flex;
  justify-content: center;
  margin-bottom: 5vw;
  font-weight: 700;
}
.privacy h5 {
  font-weight: 700;
  margin: 2vw 0;
}
.privacy ul {
  list-style: unset;
  color: #828282;
  left: 0;
}
.privacy p {
  line-height: 150%;
}
.privacy p span {
  font-weight: 700;
  color: #222222;
}
</style>
