// data.js
window.sharedData = {
  favoritos: JSON.parse(localStorage.getItem("favoritos")) || [],
  setFavoritos(favs) {
    this.favoritos = favs;
    localStorage.setItem("favoritos", JSON.stringify(favs));
  },
};
