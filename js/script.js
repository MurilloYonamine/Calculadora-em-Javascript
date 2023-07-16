function createCalculator() {
  return {
    display: document.querySelector(".display"),

    start() {
      this.clickButton();
      this.clearDisplay();
      this.pressEnter();
    },

    pressEnter() {
        this.display.addEventListener('keyup',e => {
            if(e.keyCode === 13) {
                this.calculation();
            }
        })
    },

    clearDisplay() {
      this.display.value = "";
    },

    deleteOne() {
      this.display.value = this.display.value.slice(0, -1);
    },

    calculation() {
      let calc = this.display.value;
      try {
        calc = eval(calc);

        if (!calc) {
          alert("Conta inválida!");
          this.clearDisplay();
          return;
        }
        this.display.value = String(calc);
      } catch (e) {
        alert("Conta inválida!");
        this.clearDisplay();
        return;
      }
    },

    clickButton() {
      document.addEventListener("click", (e) => {
        const el = e.target;
        if (el.classList.contains("btn-num")) {
          this.btnToDisplay(el.innerText);
        }

        if (el.classList.contains("btn-clear")) {
          this.clearDisplay();
        }

        if (el.classList.contains("btn-del")) {
          this.deleteOne();
        }

        if (el.classList.contains("btn-eq")) {
          this.calculation();
        }
      });
    },

    btnToDisplay(valor) {
      this.display.value += valor;
    },
  };
}
const calculator = createCalculator();
calculator.start();
