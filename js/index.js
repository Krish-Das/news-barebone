// ! ------------- you can delete this on production : getting sizes of the container --------
const sizeMonitor = document.createElement("div");
function createSizeMonitor() {
  sizeMonitor.innerHTML = `
    <p>NaN</p>
    <p>NaN</p>
    `;
  sizeMonitor.style = `
    font-size: 10px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100000;
    padding: 1px 5px;
    background-color: white;
    border-bottom-right-radius: 5px;
    line-height: 1;
    `;
  document.body.appendChild(sizeMonitor);
}
function monitorSize() {
  const screenSize = sizeMonitor.firstElementChild;
  const containerSize = sizeMonitor.lastElementChild;
  const firstContainer = document.querySelector("main section .container");
  screenSize.innerText = `${innerWidth} ⨯ ${innerHeight}`;
  containerSize.innerText = `${firstContainer.clientWidth} ⨯ ${firstContainer.clientHeight}`;
}
createSizeMonitor();
monitorSize();
window.addEventListener("resize", monitorSize);
