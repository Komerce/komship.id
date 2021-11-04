<template>
    <v-app style="background-color:#F6F6F9">
        <section class="register-now container">
            <div class="row">
                <div class="col-md-7 content">
                    <h1 class="title">
                    <!-- <img :src="require('@/assets/img/partials/bg-circle.png')" class="bg-circle" /> -->
                        Percayakan Pengelolaan Pengiriman Paket <span class="order">Orderanmu</span> 
                        <span class="kepada">Kepada</span>
                        <v-img :src="require('@/assets/img/partials/komship-title.png')" class="komship" />
                    </h1>
                    <p class="description">Dengan menggunakan Komship proses pengiriman paket orderan akan lebih mudah dan menguntungkan. Tidak hanya itu, kamu akan makin untung dengan adanya cashback biaya pengiriman barang COD dan kemudahan penarikan dana hasil dari transaksi COD kapanpun setelah barang diterima pembeli.</p>
                    <button class="btn btn-primary btn-register-now">Daftar sekarang juga</button>
                </div>
                <div class="col-md-5 image"><v-img :src="require('@/assets/img/partials/home-model.png')" max-width="563px" /></div>
            </div>
        </section>
        <section class="service" id="service">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5 col-md-6">
                        <h2 class="title">Kenapa Harus Komship?</h2>
                    </div>
                    <div class="col-lg-7 col-md-6 description">
                        Dengan komship proses pengelolaan orderan tidak sebatas pada pengiriman barang saja. Namun banyak manfaat dari layanan Komship yang dibisa kamu dapatkan untuk peningkatan bisnismu.
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col-lg-4 col-md-6">
                        <div class="card content">
                            <div class="card-body">
                                <v-img :src="require('@/assets/img/icons/rts-icon.png')" class="icons" />
                                <h5 class="title-content">RTS rendah</h5>
                                <p class="description-content">Tingkat pengembalian barang rendah, pebisnis semakin untung.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="card content">
                            <div class="card-body">
                                <v-img :src="require('@/assets/img/icons/income-icon.png')" class="icons" />
                                <h5 class="title-content">Informasi penghasilan</h5>
                                <p class="description-content">Makin mudah pantau penghasilan terupdate  kapanpun dan dimanapun</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="card content">
                            <div class="card-body">
                                <v-img :src="require('@/assets/img/icons/analyst-icon.png')" class="icons" />
                                <h5 class="title-content">Analisa Produk Terlaris</h5>
                                <p class="description-content">Dapatkan insight pengembangan produk dengan analisa produk terlaris.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="card content">
                            <div class="card-body">
                                <v-img :src="require('@/assets/img/icons/monitoring-cs-icon.png')" class="icons" />
                                <h5 class="title-content">Pantau Performa Customer Service</h5>
                                <p class="description-content">Makin mudah memaksimalkan kinerja CS dengan sistem pemantauan praktis dan real-time.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="card content">
                            <div class="card-body">
                                <v-img :src="require('@/assets/img/icons/cod-icon.png')" class="icons" />
                                <h5 class="title-content">Pencairan uang COD kapan saja</h5>
                                <p class="description-content">Cashflow pantang terganggu, dengan kemudahan pencaiaran dana kapanpun</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="card content">
                            <div class="card-body">
                                <v-img :src="require('@/assets/img/icons/cashback-icon.png')" class="icons" />
                                <h5 class="title-content">Cashback ongkos kirim</h5>
                                <p class="description-content">Semakin rajin kirim barang, semakin untung! cashback ongkis kirim menantimu</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="feature" id="feature">
            <div class="container">
                <h2 class="title">Fitur</h2>
                <div class="row">
                    <div class="col-md-6 content">
                        <h2 class="title-content">Dashboard Komship</h2>
                        <p class="description-content">Dapatkan informasi terupdate dan insight tentang produk terlaris, customer loyal, top admin order, top customer service, hingga laporan penghasilan penjualan secara realtime hanya di satu dashboard.</p>
                    </div>
                    <div class="col-md-6">
                        <v-img :src="require('@/assets/img/partials/dashboard-feature.png')" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <v-img :src="require('@/assets/img/partials/income-feature.png')" />
                    </div>
                    <div class="col-md-6 content">
                        <h2 class="title-content">Informasi Penghasilan</h2>
                        <p class="description-content">Pebisnis akan semakin mudah menganalisa data penghasilan baik dari  transaksi menggunakan metode COD ataupun transfer bank.</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 content">
                        <h2 class="title-content">Pengelolaan Produk</h2>
                        <p class="description-content">Penyesuaian daftar produk hingga update stok dapat diatur dengan mudah dalam satu sistem yang terintegrasi.</p>
                    </div>
                    <div class="col-md-6">
                        <v-img :src="require('@/assets/img/partials/maintenance-feature.png')" />
                    </div>
                </div>
            </div>
        </section>
        <section class="conclusion">
            <div class="row">
                <img :src="require('@/assets/img/partials/bg-left-conclusion.png')" class="bg-left-conclusion" />
                <div class="col-md-6 content">
                    <p class="description-content">Komship saat ini telah bekerjasama dengan JNE untuk menjadi mitra ekspedisi untuk pengiriman barang. Ketika UMKM menggunakan layanan Komship, maka UMKM akan mendapatkan cashback ongkir sebesar 25%.</p>
                    <button class="btn btn-register-conclusion btn-outline-light">Daftar sekarang</button>
                </div>
                <img :src="require('@/assets/img/partials/bg-right-conclusion.png')" class="bg-right-conclusion" />
            </div>
        </section>
    </v-app>
</template>
<style>
.register-now{
    display: flex;
    width: 100%;
    padding-bottom: 5vw;
    background-color: #f6f6f9;
}
/* .register-now .bg-circle{
    position: absolute;
    z-index: 0;
} */
.register-now .content{
    margin-top: 5vw;
}
.register-now .title{
    font-weight: 700;
    font-size: 40px;
    line-height: 160%;
}
.register-now .title .kepada{
    display: flex;
}
.register-now .title .order{
    color: #FF6A3A;
}
.register-now .title .komship{
    position: relative;
    max-width: 203px;
    left: 11.5vw;
    top: -70px;
}
.register-now .description{
    margin-top: -70px;
    width: 80%;
    color:#828282;
    font-size: 18px;
    line-height: 28.8px;
    font-weight: 400;
}
.register-now .btn-register-now{
    margin-top: 1.5vw;
    font-weight: 800;
    font-size: 16px;
    width: 231px;
    height: 60px;
}

/* serviceYYY */
.service{
    padding-top: 5vw;
    background-color: #f8f9fa;
}
.service .title{
    font-weight: 700;
    font-size: 32px;
    display: flex;
    justify-content: center;
}
.service .description{
    color:#828282;
    font-weight: 400;
    line-height: 24px;
}
.service .content{
    border: none;
    border-radius: 10px;
    height: 230px;
    margin-bottom: 1.8vw;
}
.service .title-content{
    margin-top: 1.5vw;
    font-size: 18px;
    font-weight: 600;
}
.service .description-content{
    color: #828282;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
}
.service .icons{
    width: 80px;
}

/* feature */
.feature{
    background-color: #f8f9fa;
    padding-top: 5vw;
}
.feature .title{
    display: flex;
    justify-content: center;
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 5vw;
}
.feature .content{
    margin: auto;
}
.feature .title-content{
    font-size: 32px;
    font-weight: 700;
}
.feature .description-content{
    width: 85%;
    color: #828282;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
}
.conclusion{
    display: flex;
    justify-content: center;
    height: 316px;
    background-color: #FF6A3A;
    color: #FFFFFF;
}
.conclusion .content{
    margin: auto;
    text-align: center;
    font-size: 16px;
    line-height: 150%;
}
.conclusion .description-content{
    color:#FFFFFF;
}
.conclusion .btn-register-conclusion{
    width: 208px;
    height: 60px;
    border-radius: 12px;
}
.conclusion .bg-left-conclusion{
    position: absolute;
    left: -33px;
    margin-top: 45px;
    width: 117px;
    height: 216px;
}
.conclusion .bg-right-conclusion{
    position: absolute;
    display: block;
    margin-top: 15px;
    right: -40px;
    width: 200px;
    height: 286px;
}
</style>