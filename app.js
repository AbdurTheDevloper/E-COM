//  navbar 
let navBar = document.getElementById("nav-icon-wrap");
let navItem = document.querySelector(".nav-ul");

navBar.addEventListener("click", ()=>{
    
    if(navItem.style.right == "0px"){
        navItem.style.right = "-999px"
    }else{
        navItem.style.right = "0px"
    }
})

//  product area 

let mensProduct = document.getElementById("product-mens");
let womansProduct = document.getElementById("product-woman");
let productElectronics = document.getElementById("product-electronics");
let productServesing = document.getElementById("product-servesing");
// catagores btn 
let mensPBtn =document.getElementById("mensPBtn");
let WomanPBtn = document.getElementById(("WomanPBtn"));
let electroBtn = document.getElementById("electroBtn");
let ServiBtn = document.getElementById("ServiBtn");
 // btn working

 mensPBtn.addEventListener("click", ()=>{
    mensProduct.style.display = "block"
    womansProduct.style.display = "none"
    productElectronics.style.display = "none"
    productServesing.style.display = "none"
 })
 WomanPBtn.addEventListener("click", ()=>{
    mensProduct.style.display = "none"
    womansProduct.style.display = "block"
    productElectronics.style.display = "none"
    productServesing.style.display = "none"
 })
 electroBtn.addEventListener("click", ()=>{
    mensProduct.style.display = "none"
    womansProduct.style.display = "none"
    productElectronics.style.display = "block"
    productServesing.style.display = "none"
 })
 ServiBtn.addEventListener("click", ()=>{
    mensProduct.style.display = "none"
    womansProduct.style.display = "none"
    productElectronics.style.display = "none"
    productServesing.style.display = "block"
 })