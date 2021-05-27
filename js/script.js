console.log('Jeg virker'); //JS check

// Toggle mobile menu
const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');

function toggleMenu() {
  if (menu.classList.contains('active')) {
    menu.classList.remove('active');
    toggle.querySelector('a').innerHTML = "<i class='fas fa-bars'></i>"
  } else {
    menu.classList.add('active');
    toggle.querySelector('a').innerHTML = "<i class='fas fa-times'></i>"
  }
}

toggle.addEventListener('click', toggleMenu, false);

// Submenu
const items = document.querySelectorAll('.item')
const arrow = document.querySelector('.fa-caret-down')

function toggleItem() {
  if (this.classList.contains('submenu-active')) {
    this.classList.remove('submenu-active')
    arrow.classList.remove('rotate')
  } else if (menu.querySelector('.submenu-active')) {
    menu.querySelector('.submenu-active').classList.remove('submenu-active');
    this.classList.add('submenu-active')
    // arrow.classList.add('.rotate')
  } else {
    this.classList.add('submenu-active')
    arrow.classList.add('rotate')
  }
}

for (let item of items) {
  if (item.querySelector('.submenu')) {
    item.addEventListener('click', toggleItem, false);
    item.addEventListener('keypress', toggleItem, false);
  }
}
// Close submenu from anywhere in the page
function closeSubmenu(e) {
  let isClickInside = menu.contains(e.target)

  if (!isClickInside && menu.querySelector('.submenu-active')) {
    menu.querySelector('.submenu-active').classList.remove('submenu-active');
    arrow.classList.remove('rotate');
  }
}
document.addEventListener('click', closeSubmenu, false)

// Google Map API
function initMap() {
  // The location of Couteau
  const couteau = { lat: 56.152538, lng: 10.204006 }
  // The map, centered at Couteau
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: couteau,
  });
  // The marker, positioned at Couteau
  const marker = new google.maps.Marker({
    position: couteau,
    map: map,
  })
}

//Login form (modal)
document.getElementById('login_btn').addEventListener('click', show_modal);

function show_modal() {
  document.querySelector('.modal').style.display = 'block'
}

document.querySelector('.close').addEventListener('click', hide_modal);

function hide_modal() {
  document.getElementById('id01').style.display = 'none'
}
