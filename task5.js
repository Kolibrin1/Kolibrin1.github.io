window.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM fully loaded and parsed");
    function click1() {
        let u = document.getElementById("unit_price").value;
        let cnt = document.getElementById("count").value;
        let r = document.getElementById("result");
        let forbiddenSymbol=/^(?!(0))\d+$/;
        if(u.match(forbiddenSymbol)===null || cnt.match(forbiddenSymbol)===null)
        {
          alert("Введено не число или начинается оно с нуля");
          r.innerHTML="Ошибка";
        }
        else
        {
          r.innerHTML = parseInt(u) * parseInt(cnt);
        }
      }
      let b = document.getElementById("button1");
      b.addEventListener("click", click1);
    });
