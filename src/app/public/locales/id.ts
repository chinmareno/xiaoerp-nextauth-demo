import type { Locales } from "./client";

export default {
  login: "masuk",
  logo: "Xiao ERP",
  hero1: "Permudah Bisnis Anda dengan",
  hero2: "Solusi ERP Cerdas",
  hero3:
    "Integrasikan akuntansi, inventori, pembelian, dan penjualan dalam satu platform kuat. Dibuat untuk bisnis kecil, dirancang untuk bertumbuh menjadi bisnis besar.",
  herotrial: "Mulai Uji Coba Gratis",
  herodemo: "Tonton Demo",
  herocardtitle1: "Aman & Terpercaya",
  herocarddesc1: "Keamanan tingkat enterprise untuk data bisnis Anda",
  herocardtitle2: "Super Cepat",
  herocarddesc2: "Performa optimal untuk alur kerja yang mulus",
  herocardtitle3: "Kolaborasi Tim",
  herocarddesc3: "Dirancang agar tim dapat bekerja secara efisien",
  moduleoverviewtitle: "Modul ERP Lengkap",
  moduleoverviewdesc:
    "Semua kebutuhan bisnis Anda dalam satu platform terintegrasi. Setiap modul bekerja secara bersamaaan.",
  modulesoverviewcards: {
    accounting: {
      title: "Akuntansi",
      desc: "Kelola keuangan secara menyeluruh dengan pencatatan otomatis, penagihan, dan pelaporan.",
      features:
        "Buku Besar Umum||Hutang & Piutang||Laporan Keuangan||Manajemen Pajak",
    },
    inventory: {
      title: "Manajemen Stok",
      desc: "Pantau stok secara real-time dengan notifikasi otomatis dan pengelolaan gudang.",
      features:
        "Pelacakan Stok||Manajemen Gudang||Peringatan Stok Rendah||Katalog Produk",
    },
    purchasing: {
      title: "Pembelian",
      desc: "Permudah proses pengadaan dari pengelolaan vendor hingga pemesanan.",
      features:
        "Manajemen Vendor||Pemesanan Pembelian||Evaluasi Pemasok||Analisis Biaya",
    },
    sales: {
      title: "Penjualan",
      desc: "Kelola seluruh proses penjualan dengan integrasi CRM dan analitik kinerja.",
      features:
        "Manajemen Prospek||Pembuatan Penawaran||Analisis Penjualan||Portal Pelanggan",
    },
  },
} satisfies Locales;
