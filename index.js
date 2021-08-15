const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "steak dinner",
    category: "dinner",
    price: 39.99,
    img: "./images/items-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  }
];

const showAll = document.getElementById("filter-all")
const showBreakfast = document.getElementById("filter-breakfast")
const showLunch = document.getElementById("filter-lunch")
const showShakes = document.getElementById("filter-shakes")
const showDinner = document.getElementById("filter-dinner")

let items = document.getElementsByClassName('each-item')
let main = document.querySelector('body')


showAll.addEventListener('click', allFilter)
showBreakfast.addEventListener('click', breakfastFilter)
showLunch.addEventListener('click', lunchFilter)
showShakes.addEventListener('click', shakesFilter)
showDinner.addEventListener('click', dinnerFilter)


const menuLength = menu.length


function allFilter(){
  if(window.innerWidth < 768){
    for (let i = 0; i < menuLength; i++) {
    items[i].style.display = 'block'
  }}else {
    for (let i = 0; i < menuLength; i++) {
    items[i].style.display = 'flex'
  }
  } 
}




function breakfastFilter(){
  allFilter()
  for (let i = 0; i < menuLength; i++) {
  if ( menu[i].category == 'breakfast'){
    continue
  }else{
    items[i].style.display = 'none'
  }
}}
function lunchFilter(){
  allFilter()
  for (let i = 0; i < menuLength; i++) {
  if ( menu[i].category == 'lunch'){
    continue
  }else{
    items[i].style.display = 'none'
  }
}}
function shakesFilter(){
  allFilter()
  for (let i = 0; i < menuLength; i++) {
  if ( menu[i].category == 'shakes'){
    continue
  }else{
    items[i].style.display = 'none'
  }
}}
function dinnerFilter(){
  allFilter()
  for (let i = 0; i < menuLength; i++) {
  if ( menu[i].category == 'dinner'){
    continue
  }else{
    items[i].style.display = 'none'
  }
}}