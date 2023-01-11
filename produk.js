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
    stok: 20,
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
    stok: 20,
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
    stok: 20,
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
    stok: 20,
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
    stok: 20,
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
    stok: 20,
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
    stok: 20,
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
    stok: 20,
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
    stok: 20,
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
    stok: 20,
  },
];

const showOurProductList = () => {
  const ourProductId = document.getElementById("list-produk-kami");
  catalogList.map((item) => {
    ourProductId.innerHTML += `
      <div class="col">
            <div class="d-flex flex-column x-card" >
                <img src="../imgs/${item.imgs[0]}.jpg" class="card-img-top "
                    style="height: 280px; object-fit: cover;" alt="...">
                <div class="card-body x-card-body my-2">
                    <h5 class="fs-5">${item.nama}</h5>
                    <h4 class="fs-6 text-muted"  style="word-break:break-word;">${item.pilihan
                      .map((i) => i.tipe)
                      .join(" | ")}</h4>
                    <h4 class="fs-5">${new Intl.NumberFormat("ID-id", {
                      style: "currency",
                      currency: "IDR",
                    }).format(item.pilihan[0].harga)}</h4>
                    <a class="text-dark btn btn-transparent " href="detail.html?id=${
                      item.id
                    }"><span class="text-decoration-underline">Tambah
                            Keranjang</span></a>
                </div>
            </div>
        </div>
      `;
  });
};

const showHeroProductList = () => {
  const heroProductId = document.getElementById("list-produk-hero");
  catalogList.slice(0, 2).map((item) => {
    heroProductId.innerHTML += `
      <div class="col">
            <div class="d-flex flex-column x-card bg-white" >
                <img src="../imgs/${item.imgs[0]}.jpg" class="card-img-top "
                    style="height: 280px; object-fit: cover;" alt="...">
                <div class="card-body x-card-body my-2">
                    <h5 class="fs-5">${item.nama}</h5>
                    <h4 class="fs-6 text-muted"  style="word-break:break-word;">${item.pilihan
                      .map((i) => i.tipe)
                      .join(" | ")}</h4>
                    <h4 class="fs-5">${new Intl.NumberFormat("ID-id", {
                      style: "currency",
                      currency: "IDR",
                    }).format(item.pilihan[0].harga)}</h4>
                    <a class="text-dark btn btn-transparent " href="detail.html?id=${
                      item.id
                    }"><span class="text-decoration-underline">Tambah
                            Keranjang</span></a>
                </div>
            </div>
        </div>
      `;
  });
};

const handlePesanan = () => {
  const getItem = localStorage.getItem("keranjang");
  const convGetItem = JSON.parse(getItem);

  const listId = document.getElementById("list-pesanan");
  const totalId = document.getElementById("total-pesanan");
  let totalHarga = 0;

  convGetItem.map((item, i) => {
    totalId.innerHTML = `total: ${new Intl.NumberFormat("ID-id", {
      style: "currency",
      currency: "IDR",
    }).format((totalHarga += item.pilihan[0].harga))}`;
    listId.innerHTML += `
    <li class="list-group-item">
    <div class="row flex-nowrap">
        <div class="col">
            <img src="../imgs/${
              item.imgs[0]
            }.jpg" class="img-fluid rounded-start" alt="${
      item.nama
    }" width="200" height="200">
        </div>
        <div class="col">
            <p>${item.nama}</p>
            <p>Harga : ${new Intl.NumberFormat("ID-id", {
              style: "currency",
              currency: "IDR",
            }).format(item.pilihan[0].harga)}</p>
        </div>
    </div>
</li>
    `;
  });
};

const handleCart = () => {
  const getItem = localStorage.getItem("keranjang");
  const convGetItem = JSON.parse(getItem);

  const kuantitas = document.getElementById("kuantitas-keranjang") || 1;
  const totalId = document.getElementById("total-keranjang");
  let totalHarga = 0;

  const listId = document.getElementById("list-keranjang");

  convGetItem.map((item, i) => {
    totalId.innerHTML = `total: ${new Intl.NumberFormat("ID-id", {
      style: "currency",
      currency: "IDR",
    }).format((totalHarga += item.pilihan[0].harga))}`;
    listId.innerHTML += `
    <div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
        <div class="col-md-4" id="foto-keranjang">
            <img src="../imgs/${
              item.imgs[0]
            }.jpg" class="img-fluid rounded-start" alt="${item.nama}">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title" id="nama-keranjang">${item.nama}</h5>
                <div class="">
                    <label for="exampleFormControlInput1" class="form-label">Kuantitas</label>
                    <input type="number" class="form-control" id="kuantitas-keranjang"
                        placeholder="Masukan jumlah barang" value="1" readonly>
                </div>
                <div>
                    <p class="m-0">Harga</p>
                    <p class="m-0" id="harga-keranjang">${new Intl.NumberFormat(
                      "ID-id",
                      {
                        style: "currency",
                        currency: "IDR",
                      }
                    ).format(item.pilihan[0].harga * kuantitas)}</p>
                </div>
                <div class="my-2">
                    <Button class="btn btn-danger" onClick="handleCartRemove(${
                      item.id
                    })">Hapus</Button>
                </div>
            </div>
        </div>
    </div>
</div>
    `;
  });
};

const handleCartRemove = (id) => {
  console.log(id);

  const getItem = localStorage.getItem("keranjang");
  const convGetItem = JSON.parse(getItem);

  const newItem = convGetItem.filter((a) => a.id !== id);

  const convNewItem = JSON.stringify(newItem);
  localStorage.setItem("keranjang", convNewItem);
};

const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

showHeroProductList();
showOurProductList();
handleCart();
handleCartRemove();
handlePesanan();
