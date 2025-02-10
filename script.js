// Responsive navigation menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.querySelector('.nav-menu');
let sidebar = document.getElementById('sidebar')

menuToggle.addEventListener('click', () => {
    sidebar.style.marginRight = "0px";
});

let sideicon = document.getElementById("side-close__icon").addEventListener("click", () => {
  document.getElementById('sidebar').style.marginRight = "-60%"
});

//Footer Section
document.getElementById('linkedin').addEventListener('click', function(){
  window.location.href = 'https://www.linkedin.com/in/tariq-m-58a74829a/';
})

document.getElementById('github').addEventListener('click', function(){
  window.location.href = 'https://github.com/tariq204595';
})
