import type { Locales } from "./client";

const id: Locales = {
  logo: "Xiao ERP",
  landingPage: {
    navbar: {
      login: "Masuk",
      signup: "Daftar",
    },
    footer: {
      xiaoErp: {
        title: "Xiao ERP",
        desc: "Solusi ERP lengkap yang dirancang untuk membantu usaha kecil menyederhanakan operasional dan mendorong pertumbuhan.",
      },
      modules: {
        title: "Modul",
        accounting: "Akuntansi",
        inventory: "Inventaris",
        purchasing: "Pembelian",
        sales: "Penjualan",
      },
      support: {
        title: "Dukungan",
        documentation: "Dokumentasi",
        help: "Pusat Bantuan",
        contactUs: "Hubungi Kami",
      },
      company: {
        title: "Perusahaan",
        aboutUs: "Tentang Kami",
        pricing: "Harga",
        privacyPolicy: "Kebijakan Privasi",
        termsOfService: "Syarat & Ketentuan",
      },
      allRightReserved: "Seluruh hak cipta dilindungi.",
      availableIn: "Tersedia dalam",
    },
    rootPath: {
      hero: {
        title: "Permudah Operasional Bisnis Anda dengan",
        title2: "Solusi ERP Cerdas",
        desc: "Gabungkan akuntansi, inventaris, pembelian, dan penjualan dalam satu platform andal. Dirancang khusus untuk UKM agar lebih efisien dan siap berkembang.",
        trialButton: "Coba Gratis",
        demoButton: "Lihat Demo",
        card1: {
          title: "Aman & Andal",
          desc: "Keamanan setara perusahaan besar untuk data bisnis Anda, dengan penyimpanan di Indonesia dan Tiongkok.",
        },
        card2: {
          title: "Performa Tinggi",
          desc: "Kinerja cepat dan responsif untuk alur kerja yang lancar dan latensi rendah.",
        },
        card3: {
          title: "Kolaborasi Tim",
          desc: "Dibuat untuk mendukung kerja tim dengan akses bersama dan pelacakan tugas yang efisien.",
        },
      },
      moduleOverview: {
        title: "Modul ERP Lengkap",
        desc: "Semua yang dibutuhkan bisnis Anda dalam satu platform terintegrasi. Setiap modul terhubung untuk efisiensi maksimal.",
        learnMoreButton: "Pelajari Selengkapnya",
        accounting: {
          title: "Modul Akuntansi",
          desc: "Manajemen keuangan menyeluruh dengan pembukuan otomatis, faktur, dan pelaporan keuangan.",
          features:
            "Buku Besar||Hutang/Piutang||Laporan Keuangan||Manajemen Pajak",
        },
        inventory: {
          title: "Modul Inventaris",
          desc: "Pantau stok secara real-time dengan peringatan otomatis dan pengelolaan gudang yang efisien.",
          features:
            "Pelacakan Stok||Manajemen Gudang||Peringatan Stok Rendah||Katalog Produk",
        },
        purchasing: {
          title: "Modul Pembelian",
          desc: "Permudah proses pengadaan — dari manajemen vendor hingga analisis biaya dan pemesanan.",
          features:
            "Manajemen Vendor||Pesanan Pembelian||Evaluasi Pemasok||Analisis Biaya",
        },
        sales: {
          title: "Modul Penjualan",
          desc: "Kelola seluruh proses penjualan, terintegrasi dengan CRM dan dilengkapi analitik kinerja.",
          features:
            "Manajemen Prospek||Pembuatan Penawaran||Analitik Penjualan||Portal Pelanggan",
        },
        lastCard: {
          title: "Dirancang untuk Tumbuh Bersama Anda",
          desc: "Baik baru mulai maupun berkembang pesat, Xiao ERP siap mengikuti pertumbuhan bisnis Anda — satu modul demi satu modul.",
        },
      },
    },
    modulesPath: {
      visualFlowTitle: "Kolaborasi Lancar Antar Departemen",
      backHome: "Kembali ke Beranda",

      accounting: {
        header: {
          title: "Modul Akuntansi",
          desc: "Permudah urusan keuangan dengan otomatisasi pintar",
        },
        summary: {
          title: "Apa yang Dilakukan Modul Akuntansi",
          desc: "Modul ini membantu otomatisasi pencatatan transaksi hingga pelaporan keuangan, tanpa perlu input manual. Terhubung langsung dengan penjualan, inventaris, dan operasional secara real-time.",
        },
        visualFlow: {
          before1: {
            title: "Modul Penjualan",
            desc: "Membuat faktur dan memperbarui piutang",
          },
          before2: {
            title: "Modul Inventaris",
            desc: "Memberikan data HPP dan update stok",
          },
          center: {
            title: "Modul Akuntansi",
            desc: "Pusat kendali keuangan perusahaan",
          },
          after1: {
            title: "Modul Biaya",
            desc: "Mengirim data biaya dari HR/Operasional",
          },
          after2: {
            title: "Modul Laporan",
            desc: "Membuat laporan otomatis dari data akuntansi",
          },
        },
        featureGridTitle: "Fitur Utama Modul Akuntansi",
        useCase: {
          title: "Contoh Kasus Nyata",
          desc: "Misalnya, tim sales menutup transaksi Rp225 juta. Begitu dikonfirmasi, sistem otomatis membuat faktur, mencatat transaksi, menghitung pajak, memperbarui piutang, dan mencocokkan pembayaran. Laporan keuangan pun langsung siap tanpa proses manual.",
        },
        benefitListTitle: "Manfaat yang Didapatkan",
        features: {
          generalLedger: {
            title: "Buku Besar",
            desc: "Mencatat setiap transaksi secara lengkap dan real-time dengan kategori otomatis.",
          },
          accountsPayableOrReceivable: {
            title: "Hutang & Piutang",
            desc: "Kelola faktur dan tagihan dengan pengingat otomatis untuk jatuh tempo.",
          },
          financialReport: {
            title: "Laporan Keuangan",
            desc: "Neraca, Laba Rugi, dan Arus Kas yang dibuat otomatis dan mudah diekspor.",
          },
          taxManagement: {
            title: "Manajemen Pajak",
            desc: "Hitung pajak otomatis dan integrasi dengan sistem perpajakan lokal.",
          },
        },
        benefits:
          "Meminimalkan kesalahan input manual||" +
          "Data keuangan siap diaudit kapan saja||" +
          "Integrasi mulus dengan penjualan dan inventaris||" +
          "Patuhi aturan pajak lokal secara otomatis||" +
          "Ekspor laporan ke Excel, PDF, atau software akuntansi",
      },

      inventory: {
        header: {
          title: "Modul Inventaris",
          desc: "Kelola stok dengan mudah dan akurat",
        },
        summary: {
          title: "Fungsi Modul Inventaris",
          desc: "Pantau stok secara otomatis, dapatkan peringatan kalau stok menipis, dan pastikan stok selalu update sesuai penjualan dan pembelian.",
        },
        visualFlow: {
          before1: {
            title: "Modul Penjualan",
            desc: "Memicu pengurangan stok",
          },
          before2: {
            title: "Modul Pembelian",
            desc: "Menambahkan stok baru ke gudang",
          },
          center: {
            title: "Modul Inventaris",
            desc: "Pusat kendali stok barang",
          },
          after1: {
            title: "Modul Akuntansi",
            desc: "Update nilai persediaan dan HPP",
          },
          after2: {
            title: "Modul Laporan",
            desc: "Buat laporan stok dan audit secara otomatis",
          },
        },
        featureGridTitle: "Fitur Utama Inventaris",
        useCase: {
          title: "Contoh Kasus",
          desc: "Ketika pesanan 500 unit diproses, stok langsung berkurang, sistem memberi peringatan stok menipis, dan buat permintaan pembelian untuk restock. Semua update secara otomatis di modul terkait.",
        },
        benefitListTitle: "Manfaat untuk Bisnis Anda",
        features: {
          stockManagement: {
            title: "Manajemen Stok",
            desc: "Lacak stok di berbagai lokasi secara real-time.",
          },
          purchaseOrders: {
            title: "Integrasi Pesanan Pembelian",
            desc: "Stok otomatis bertambah saat barang diterima dari PO.",
          },
          salesSync: {
            title: "Sinkronisasi Penjualan",
            desc: "Stok otomatis berkurang ketika penjualan terjadi, supaya data selalu akurat.",
          },
          stockAudits: {
            title: "Audit Stok",
            desc: "Lakukan pengecekan dan rekonsiliasi stok rutin dengan catatan lengkap.",
          },
        },
        benefits:
          "Hindari kehabisan dan penumpukan stok||" +
          "Kurangi kesalahan di gudang||" +
          "Dukung pelacakan multi lokasi dan batch||" +
          "Stok selalu terupdate antar modul||" +
          "Data historis untuk prediksi pemesanan ulang lebih baik",
      },

      purchasing: {
        header: {
          title: "Modul Pembelian",
          desc: "Kontrol penuh proses pengadaan barang",
        },
        summary: {
          title: "Sederhanakan Pengadaan Anda",
          desc: "Mulai dari permintaan pembelian sampai penerimaan barang dan pencocokan faktur, semua bisa dipantau dan dikelola dalam satu sistem.",
        },
        visualFlow: {
          before1: {
            title: "Permintaan Pembelian",
            desc: "Diajuin oleh departemen terkait",
          },
          before2: {
            title: "Persetujuan Manajer",
            desc: "Validasi sebelum PO diterbitkan",
          },
          center: {
            title: "Modul Pembelian",
            desc: "Pusat data vendor dan pesanan",
          },
          after1: {
            title: "Update Stok",
            desc: "Barang diterima dan disimpan",
          },
          after2: {
            title: "Modul Akuntansi",
            desc: "Faktur dan pembayaran dicatat",
          },
        },
        featureGridTitle: "Fitur Penting Modul Pembelian",
        useCase: {
          title: "Studi Kasus",
          desc: "Misalnya, permintaan 200 kursi kantor diproses cepat melalui sistem: PR diajukan, disetujui, PO diterbitkan, dan faktur dicocokkan saat barang diterima.",
        },
        benefitListTitle: "Keunggulan Sistem Pengadaan",
        features: {
          purchaseRequests: {
            title: "Permintaan Pembelian",
            desc: "Permintaan dibuat dan berjalan otomatis lewat jalur persetujuan.",
          },
          vendorComparison: {
            title: "Perbandingan Vendor",
            desc: "Evaluasi harga, waktu pengiriman, dan kinerja vendor sebelum PO diterbitkan.",
          },
          purchaseOrders: {
            title: "Pesanan Pembelian",
            desc: "Buat PO dari permintaan yang sudah disetujui, lengkap dengan validasi anggaran.",
          },
          receivingAndReconciliation: {
            title: "Penerimaan & Rekonsiliasi",
            desc: "Cocokkan barang diterima dengan PO dan faktur secara otomatis.",
          },
        },
        benefits:
          "Kurangi pembelian tak sah atau ganda||" +
          "Data pengadaan dan vendor tersimpan lengkap||" +
          "Update otomatis di inventaris dan akuntansi||" +
          "Bantu negosiasi dengan catatan kinerja vendor||" +
          "Proses audit jadi lebih mudah dan transparan",
      },

      sales: {
        header: {
          title: "Modul Penjualan",
          desc: "Kelola penjualan dari prospek sampai pendapatan dengan mudah",
        },
        summary: {
          title: "Fungsi Modul Penjualan",
          desc: "Mulai dari lead, buat penawaran, sampai pengiriman dan faktur, semuanya terintegrasi dengan CRM, inventaris, dan akuntansi agar proses lebih cepat dan tanpa ribet.",
        },
        visualFlow: {
          before1: {
            title: "CRM",
            desc: "Kelola prospek dan kontak",
          },
          before2: {
            title: "Kualifikasi",
            desc: "Kenali kebutuhan dan anggaran pelanggan",
          },
          center: {
            title: "Modul Penjualan",
            desc: "Penawaran dan pesanan",
          },
          after1: {
            title: "Modul Inventaris",
            desc: "Alokasi stok",
          },
          after2: {
            title: "Modul Akuntansi",
            desc: "Faktur dan pencatatan pendapatan",
          },
        },
        featureGridTitle: "Fitur Utama Penjualan",
        useCase: {
          title: "Skenario Nyata",
          desc: "Saat prospek masuk dari CRM, tim sales cepat buat penawaran, sistem langsung ubah jadi sales order, update stok, buat faktur, dan catat pendapatan—semua otomatis dan tanpa penundaan.",
        },
        benefitListTitle: "Manfaat Modul Penjualan",
        features: {
          customerManagement: {
            title: "Manajemen Pelanggan",
            desc: "Kelola relasi dan riwayat interaksi dalam satu tempat.",
          },
          quotationInvoicing: {
            title: "Penawaran & Faktur",
            desc: "Buat penawaran dan faktur dengan data otomatis dan akurat.",
          },
          salesOrders: {
            title: "Pesanan Penjualan",
            desc: "Ubah penawaran jadi pesanan dengan cek stok langsung.",
          },
          orderFulfillment: {
            title: "Pemenuhan Pesanan",
            desc: "Pantau pengiriman dan proses pesanan secara menyeluruh.",
          },
        },
        benefits:
          "Mempercepat siklus penjualan dengan otomatisasi||" +
          "Kurangi kesalahan manual dalam dokumen||" +
          "Dapatkan visibilitas penuh dari prospek sampai pendapatan||" +
          "Integrasi mulus dengan modul lain||" +
          "Tingkatkan kepuasan pelanggan lewat respons cepat",
      },
    },
  },
};

export default id;
