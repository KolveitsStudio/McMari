const productsArr = [
  {src : "Images/Produkts1.jpg", alt: "Bilde", virsraksts: "Produkts", apraksts: "Produkta apraksts"},
  {src : "Images/Produkts2.jpg", alt: "Bilde", virsraksts: "Produkts", apraksts: "Produkta apraksts"},
  {src : "Images/Produkts3.jpg", alt: "Bilde", virsraksts: "Produkts", apraksts: "Produkta apraksts"},
  {src : "Images/Produkts2.jpg", alt: "Bilde", virsraksts: "Produkts", apraksts: "Produkta apraksts"},
  {src : "Images/Produkts3.jpg", alt: "Bilde", virsraksts: "Produkts", apraksts: "Produkta apraksts"},
  {src : "Images/Produkts1.jpg", alt: "Bilde", virsraksts: "Produkts", apraksts: "Produkta apraksts"}
]

function populateProducts(){
  const products = document.querySelector("#productWrapper").firstElementChild;

  products.innerHTML = productsArr.map((x, i)=>
    `
    <div class="product-card m-2 " style="animation-delay:${i*80}ms">
        <img class="product-image" src="${x.src}" alt="${x.alt}" >
        <div class="product-caption bg-white text-center">
            <h2 class="mx-auto mt-3 fw-bold text-uppercase fs-4">${x.virsraksts}</h2>
            <p class="ms-4 fw-semibold">${x.apraksts}</p>
        </div>
    </div>
    `
  ).join("")
}

  window.onload = () => {
    populateProducts();
}
