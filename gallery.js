const galleryArr = [
  {src : "", alt: "Bilde", caption: "Kautkads apraksts"},
  {src : "", alt: "Bilde", caption: "Kautkads apraksts"},
  {src : "", alt: "Bilde", caption: "Kautkads apraksts"},
  {src : "", alt: "Bilde", caption: "Kautkads apraksts"},
  {src : "", alt: "Bilde", caption: "Kautkads apraksts"},
  {src : "", alt: "Bilde", caption: "Kautkads apraksts"},
  {src : "", alt: "Bilde", caption: "Kautkads apraksts"},
  {src : "", alt: "Bilde", caption: "Kautkads apraksts"},
  {src : "", alt: "Bilde", caption: "Kautkads apraksts"},
  {src : "", alt: "Bilde", caption: "Kautkads apraksts"},
  {src : "", alt: "Bilde", caption: "Kautkads apraksts"},
  {src : "", alt: "Bilde", caption: "Kautkads apraksts"},
  {src : "", alt: "Bilde", caption: "Kautkads apraksts"},
]

function populateGallery(){
  const gallery = document.querySelector("#galleryContainer");

  gallery.innerHTML = galleryArr.map((x, i)=>
    `
    <div class="gallery-item d-flex" style="animation-delay:${i*80}ms">
      <img class="d-block bg-white" src="${x.src}" alt="${x.alt}">
      <div class="caption d-flex align-items-center justify-content-center bg-white"><p class="my-auto">${x.caption}</p></div>
    </div>
    `
  ).join("")
}

  window.onload = () => {
    populateGallery();
}