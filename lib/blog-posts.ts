export type BlogPost = {
  excerpt: string;
  href: string;
  tag: string;
  title: string;
};

export const blogPosts: BlogPost[] = [
  {
    title: "Pelajari apa itu arti REFFUL",
    excerpt:
      "Kenali istilah dasar jual-beli supaya tidak salah paham saat membaca bukti transaksi member lain.",
    href: "/blog/arti-refful",
    tag: "Fundamental",
  },
  {
    title: "Sistem Jual Beli di DreamSTORE",
    excerpt:
      "Kenapa ada seller yang langsung di-take down? Simak SOP internal sebelum produk tayang.",
    href: "/blog/system-jualbeli",
    tag: "Inside Store",
  },
  {
    title: "Bangun Group MC Yang Aktif",
    excerpt:
      "Gunakan katalog mingguan, role admin, dan ice breaker sederhana agar member betah diskusi.",
    href: "/tutorial/group",
    tag: "Komunitas",
  },
  {
    title: "Checklist Rekber Biar Anti Drama",
    excerpt:
      "Step-by-step singkat mulai dari cek ID, bukti transfer, sampai serah terima akun.",
    href: "/tutorial/posting",
    tag: "Keamanan",
  },
];
