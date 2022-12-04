
function popup(par) {
    let mainForma = document.getElementById("mainForm");
    let bg = document.getElementById("popup");
    if (par === true) {
      mainForma.style.display = ("block");
      bg.style.opacity = ("2");
      bg.style.pointerEvents = ("all");
      history.pushState(true, null, "#form");
    }
  
    else {
      mainForma.style.display = ("none");
      bg.style.opacity = ("0");
      bg.style.pointerEvents = ("none");
      history.pushState(false, null, "#");
    }
  }
  
  
  let username = document.getElementById("Name");
  let email = document.getElementById("email");
  let mssg = document.getElementById("Textarea");
  let cbox = document.getElementById("check");
  
  
  function save() {
    localStorage.setItem("Name", username.value);
    localStorage.setItem("Email", email.value);
    localStorage.setItem("Message", mssg.value);
    localStorage.setItem("Checkbox", cbox.checked);
  }
  document.addEventListener("DOMContentLoaded", function (event) {
    if (location.hash === "#form") {
      popup(true);
    }
    window.addEventListener("popstate", (e) => {
      popup(e);
    });
    let b = document.getElementById("btn1");
    b.addEventListener("click", () => {
      popup(true);
    });
    let c = document.getElementById("closeForm");
    c.addEventListener("click", () => {
      popup(false);
    });
    let popupBg = document.getElementById("popup");
    document.addEventListener("click", (e) => {
      if (e.target === popupBg) {
        popup(false);
      }
    });
  
    username.value = localStorage.getItem("Name");
    email.value = localStorage.getItem("Email");
    mssg.value = localStorage.getItem("Message");
    if (localStorage.getItem("Checkbox") === "false"){
      cbox.checked = false;}
    else{
      cbox.checked = true;}
  
    username.oninput = save;
    email.oninput = save;
    mssg.oninput = save;
    cbox.onclick = save;
  });
  
  $(function () {
    $(".ajaxForm").submit(function (e) {
      e.preventDefault();
      var href = $(this).attr("action");
      $.ajax({
        type: "POST",
        dataType: "json",
        url: href,
        data: $(this).serialize(),
        success: function (response) {
          if (response.status === "success") {
            alert("Succesfully!");
            localStorage.removeItem("Name");
            localStorage.removeItem("Email");
            localStorage.removeItem("Message");
            localStorage.removeItem("Checkbox");
            username.value = localStorage.getItem("Name");
            email.value = localStorage.getItem("Email");
            mssg.value = localStorage.getItem("Message");
            cbox.checked = false;
          } else {
            alert("Error " + response.message);
          }
        }
      });
    });
  });