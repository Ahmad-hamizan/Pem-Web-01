// Login
function login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;
  let form = document.getElementById("loginForm");

  if (user == "admin" && pass == "12345") {
    alert("Login Berhasil");
    form.setAttribute("Action", "/projek_uas/backend/pages/index.html");
  } else {
    alert("Login Gagal Boyy!!");
  }
}
