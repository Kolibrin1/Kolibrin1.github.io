function getPrices() {
    return {
      prodTypes: [100, 120, 150],
      optionPrices: {
        option2: 100,
        option3: 200
      },
      secureOptions: {
        check1: 300,
        check2: 400
      }
    };
  }
  
  function totalSum(v) {
    let s = document.getElementsByName("Rate");
    let select = s[0];
  
    let radioBtn = document.getElementById("optionSpecial");
    radioBtn.style.display = ((select.value === "1" || select.value === "3") ? "none" : "block");
  
  
  
    let checkBx = document.getElementById("VIP");
    checkBx.style.display = (select.value === "3" ? "block" : "none");
    let price = 0;
  
    let prices = getPrices();
    let priceIndex = parseInt(select.value) - 1;
    if (priceIndex >= 0) {
      price = prices.prodTypes[priceIndex];
    }
  
    if (select.value === "2") {
      let radio = document.getElementsByName("optionSpecial");
      radio.forEach(function (radio) {
        if (radio.checked) {
          let optionPrice = prices.optionPrices[radio.value];
          if (optionPrice !== undefined) {
            price += optionPrice;
          }
        }
      });
    }
    if (select.value === "3") {
      let checkbox = document.getElementsByName("VIP");
      checkbox.forEach(function (checkbox) {
        if (checkbox.checked) {
          let checkboxPrice = prices.secureOptions[checkbox.value];
          if (checkboxPrice !== undefined) {
            price += checkboxPrice;
          }
        }
      });
    }
  
    let forbiddenSymbols = /^(?!(0))\d+$/;
    let total = document.getElementById("result");
    if (v.match(forbiddenSymbols) === null) {
      total.innerHTML = "Число введено некорректно";
    }
    else {
      total.innerHTML = + v * price + " рублей";
    }
  
  }
  
  
  
  
  window.addEventListener("DOMContentLoaded", function (event) {
    let radio = document.getElementById("optionSpecial");
    radio.style.display = "none";
  
    let checkbox = document.getElementById("VIP");
    checkbox.style.display = "none";
  
    let v = document.getElementById("field");
    v.addEventListener("input", function (event) {
      totalSum(v.value);
    });
  
    let s = document.getElementsByName("Rate");
    let select = s[0];
    select.addEventListener("change", function (event) {
      let target = event.target;
      totalSum(v.value);
    });
  
    let radioBtn = document.getElementsByName("optionSpecial");
    radioBtn.forEach(function (radio) {
      radio.addEventListener("change", function (event) {
        let r = event.target;
        totalSum(v.value);
      });
    });
  
  
    let checkboxBtn = document.getElementsByName("VIP");
    checkboxBtn.forEach(function (checkbox) {
      checkbox.addEventListener("change", function (event) {
        let c = event.target;
        totalSum(v.value);
      });
    });
  
  });