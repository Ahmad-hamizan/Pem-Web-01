// Logout
function logout() {
  if (confirm("Are you sure you want to logout?")) {
    window.location.href = "/projek_uas/frontend/pages/home.html";
  } else {
    return false;
  }
}

// Hamburguer Menu
const sidebar = document.getElementById("sidebar");
const openSidebarButton = document.getElementById("open-sidebar");

openSidebarButton.addEventListener("click", (e) => {
  e.stopPropagation();
  sidebar.classList.toggle("-translate-x-full");
});

// Close the sidebar when clicking outside of it
document.addEventListener("click", (e) => {
  if (!sidebar.contains(e.target) && !openSidebarButton.contains(e.target)) {
    sidebar.classList.add("-translate-x-full");
  }
});
