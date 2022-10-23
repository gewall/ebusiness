const catalogList = [
  {
    id: 0,
    nama: "Ruby Mirror",
    pilihan: [
      {
        tipe: "30Cm",
        harga: 75000,
      },
      {
        tipe: "60Cm",
        harga: 160000,
      },
    ],
    imgs: ["ruby"],
  },
  {
    id: 1,
    nama: "Epsilon Mirror",
    pilihan: [
      {
        tipe: "Led",
        harga: 100000,
      },
      {
        tipe: "Non Led",
        harga: 90000,
      },
    ],
    imgs: ["epsile led", "epsile non"],
  },
  {
    id: 2,
    nama: "Hexagon Mirror",
    pilihan: [
      {
        tipe: "Non Led",
        harga: 70000,
      },
      {
        tipe: "Led",
        harga: 100000,
      },
    ],
    imgs: ["hexagon led", "hexagon non"],
  },
  {
    id: 3,
    nama: "Cloud Mirror",
    pilihan: [
      {
        tipe: "Awan Kecil",
        harga: 50000,
      },
      {
        tipe: "Awan Besar",
        harga: 94000,
      },
      {
        tipe: "Satu Set",
        harga: 114000,
      },
    ],
    imgs: ["cloud kecil", "cloud besar", "cloud lengkap"],
  },
  {
    id: 4,
    nama: "Bloom Square Mirror",
    pilihan: [
      {
        tipe: "10x15",
        harga: 46000,
      },
      {
        tipe: "10x20",
        harga: 58000,
      },
    ],
    imgs: ["bloom 15", "bloom 20"],
  },
  {
    id: 5,
    nama: "Bloom Round Mirror",
    pilihan: [
      {
        tipe: "15Cm",
        harga: 65000,
      },
      {
        tipe: "20Cm",
        harga: 78000,
      },
    ],
    imgs: ["bround 15", "bround 20"],
  },
  {
    id: 6,
    nama: "Ariel Shell Mirror",
    pilihan: [
      {
        tipe: "Pink",
        harga: 28000,
      },
      {
        tipe: "Ungu",
        harga: 28000,
      },
      {
        tipe: "Biru",
        harga: 28000,
      },
      {
        tipe: "Putih",
        harga: 28000,
      },
    ],
    imgs: ["ariel"],
  },
  {
    id: 7,
    nama: "Vintage Mirror",
    pilihan: [
      {
        tipe: "Bulat",
        harga: 70000,
      },
      { tipe: "Hati", harga: 70000 },
    ],
    imgs: ["bulat", "hati"],
  },
  {
    id: 8,
    nama: "Cermin Gantung",
    pilihan: [
      {
        harga: 120000,
      },
    ],
    imgs: ["gantung"],
  },
  {
    id: 9,
    nama: "Vintage Oval Mirror",
    pilihan: [
      {
        tipe: "gold",
        harga: 80000,
      },
      {
        tipe: "silver",
        harga: 80000,
      },
    ],
    imgs: ["gold", "silver"],
  },
];

const getDetailProduct = () => {
  const params = window.location.search;
  const search = new URLSearchParams(params);
  const id = search.get("id");

  const item = catalogList.find((i) => parseInt(i.id) === parseInt(id));

  console.log(item);
};

getDetailProduct();
