function createCalculator() {
  return {
    display: document.querySelector(".display"),

    start() {
      this.clickButton();
    },

    clickButton() {
      document.addEventListener("click", function (e) {
        const el = e.target;
        if(el.classList.contains('btn-num')) {
            this.btnToDisplay(el.innerText);
        }
      }.bind(this));
    },

    btnToDisplay(valor) {
        this.display.value += valor;
    }
  };
}
const calculator = createCalculator();
calculator.start();
