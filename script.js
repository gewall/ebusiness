const catalogList = [
  {
    id: 0,
    nama: "Cermin",
    deskripsi: "abcdefghijk",
    harga: 20000,
  },
  {
    id: 1,
    nama: "Cermin dua",
    deskripsi: "abcdelmnopq",
    harga: 20000,
  },
];

const showTopProductList = () => {
  const topProductId = document.getElementById("list-produk-unggulan");
  const tes = catalogList.map((item) => {
    return `
    <div class="col">
          <div class="d-flex flex-column x-card" style="width: 12rem;">
              <img src="https://via.placeholder.com/1920x1200.png?text=${
                item.nama
              }" class="card-img-top "
                  style="height: 280px; object-fit: cover;" alt="...">
              <div class="card-body x-card-body my-2">
                  <h5 class="fs-5">${item.nama}</h5>
                  <h4 class="fs-4 text-muted" style="word-break:break-word;">${
                    item.deskripsi
                  }</h4>
                  <h4 class="fs-5">${new Intl.NumberFormat("ID-id", {
                    style: "currency",
                    currency: "IDR",
                  }).format(item.harga)}</h4>
                  <button class="text-dark btn btn-transparent "><span class="text-decoration-underline">Tambah
                          Keranjang</span></button>
              </div>
          </div>
      </div>
    `;
  });
  console.log(tes);
  topProductId.innerHTML += tes;
};

const showOurProductList = () => {
  const ourProductId = document.getElementById("list-produk-kami");
  catalogList.map((item) => {
    ourProductId.innerHTML += `
    <div class="col">
          <div class="d-flex flex-column x-card" >
              <img src="https://via.placeholder.com/1920x1200.png?text=${
                item.nama
              }" class="card-img-top "
                  style="height: 280px; object-fit: cover;" alt="...">
              <div class="card-body x-card-body my-2">
                  <h5 class="fs-5">${item.nama}</h5>
                  <h4 class="fs-4 text-muted"  style="word-break:break-word;">${
                    item.deskripsi
                  }</h4>
                  <h4 class="fs-5">${new Intl.NumberFormat("ID-id", {
                    style: "currency",
                    currency: "IDR",
                  }).format(item.harga)}</h4>
                  <button class="text-dark btn btn-transparent "><span class="text-decoration-underline">Tambah
                          Keranjang</span></button>
              </div>
          </div>
      </div>
    `;
  });
};

const showHeroProductList = () => {
  const heroProductId = document.getElementById("list-produk-hero");
  catalogList.map((item) => {
    heroProductId.innerHTML += `
    <div class="col">
          <div class="d-flex flex-column x-card bg-white" >
              <img src="https://via.placeholder.com/1920x1200.png?text=${
                item.nama
              }" class="card-img-top "
                  style="height: 280px; object-fit: cover;" alt="...">
              <div class="card-body x-card-body my-2">
                  <h5 class="fs-5">${item.nama}</h5>
                  <h4 class="fs-4 text-muted"  style="word-break:break-word;">${
                    item.deskripsi
                  }</h4>
                  <h4 class="fs-5">${new Intl.NumberFormat("ID-id", {
                    style: "currency",
                    currency: "IDR",
                  }).format(item.harga)}</h4>
                  <button class="text-dark btn btn-transparent "><span class="text-decoration-underline">Tambah
                          Keranjang</span></button>
              </div>
          </div>
      </div>
    `;
  });
};

const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

showTopProductList();
showOurProductList();
showHeroProductList();
