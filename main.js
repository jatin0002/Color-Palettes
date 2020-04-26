
const layers = document.querySelectorAll(".layer").forEach((item) => {
  item.addEventListener("dblclick", function () {
    let randomNo2 = Math.floor(Math.random() * 255);
    let randomNo1 = Math.floor(Math.random() * 255);
    let randomNo3 = Math.floor(Math.random() * 255);
    let colorNumber = `rgb(${randomNo1} , ${randomNo2} , ${randomNo3})`;
    item.style.backgroundColor = colorNumber;

    this.textContent = colorNumber;
  });
});
