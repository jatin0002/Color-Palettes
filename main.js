
const layers = document.querySelectorAll(".layer").forEach((itm) => {
  itm.addEventListener("dblclick", function () {
    let randomNo2 = Math.floor(Math.random() * 255);
    let randomNo1 = Math.floor(Math.random() * 255);
    let randomNo3 = Math.floor(Math.random() * 255);
    let colorNumber = `rgb(${randomNo1} , ${randomNo2} , ${randomNo3})`;
    itm.style.backgroundColor = colorNumber;

    this.textContent = colorNumber;
  });
});
