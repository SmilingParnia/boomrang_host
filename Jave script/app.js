// dark and ligh mode
let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')

const enableDarkmode = () => {
  document.body.classList.add('darkmode')
  localStorage.setItem('darkmode', 'active')
}

const diableDarkmode = () => {
  document.body.classList.remove('darkmode')
  localStorage.setItem('darkmode', null)
}

if(darkmode === "active") enableDarkmode()

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem('darkmode')
  darkmode !== "active" ? enableDarkmode() : diableDarkmode() 
})




// sidebar 
const openButton = document.getElementById('open-sidebar-button')
const navbar = document.getElementById('navbar')

const media = window.matchMedia("(width < 700px)")

media.addEventListener('change', (e) => updateNavbar(e))

function updateNavbar(e){
  const isMobile = e.matches
  console.log(isMobile)
  if(isMobile){
    navbar.setAttribute('insert','true')
  }
  else{
    // desktop device
    navbar.removeAttribute('inert')
  }
}

function openSidebar(){
  navbar.classList.add('show')
  openButton.setAttribute('aria-expanded','true')
  navbar.removeAttribute('inert');
}
function closeSidebar(){
  navbar.classList.remove('show')
  openButton.setAttribute('aria-expanded','false')
  navbar.removeAttribute('inert','true')
}
const navlinks = document.querySelectorAll('nav a')
navlinks.forEach(link => {
  link.addEventListener('click', () =>{
    closeSidebar()
  })
})




searchToggle = document.querySelector(".searchToggle")
//js code to toggle search box
      searchToggle.addEventListener("click" , () =>{
      searchToggle.classList.toggle("active");
     });

    // aos animation
     AOS.init({
      duration:800,
      offset:150,

  });




  // faq section
  const accordionContent = document.querySelectorAll(".accordion-content");

  accordionContent.forEach((item, index) => {
      let header = item.querySelector(".header");
  
      header.addEventListener("click", () => {
          item.classList.toggle("open");
  
          let description = item.querySelector(".description");
          if (item.classList.contains("open")) {
              description.style.height = `${description.scrollHeight}px`;
              header.querySelector("i").classList.replace("bx-chevron-left", "bx-chevron-down");
          } else {
              description.style.height = "0px";
              header.querySelector("i").classList.replace("bx-chevron-down", "bx-chevron-left");
          }
          removeOpen(index);
      });
  });
  
  function removeOpen(index1) {
      accordionContent.forEach((item2, index2) => {
          if (index1 !== index2) {
              item2.classList.remove("open");
  
              let des = item2.querySelector(".description");
              des.style.height = "0px";
              item2.querySelector("i").classList.replace("bx-chevron-down", "bx-chevron-left");
          }
      });
  }
