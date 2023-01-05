let onEvent = document.querySelectorAll(".container"); //Catat
for (let i = 0; i < onEvent.length; i++) {
  let j = i + 1;
  onEvent[i].addEventListener("click", onClick);
  function onClick(event) {
    let element = event.currentTarget.firstElementChild;
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    // let alt = element.getAttribute("alt");
    document.getElementById("h1").innerHTML = element.alt;
    document.getElementById("p").innerHTML =
      "Ini adalah gambar ke " +
      j +
      " dan menampilkan sebuah gambar " +
      element.alt;
  }
}

let span = document.getElementsByClassName("close")[0];
span.onclick = () => {
  document.getElementById("modal01").style.display = "none";
};
