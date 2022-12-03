// ? Created this array for rendering name, image and price on html body.
const product = [
  {
    id: 0,
    name: "iPhone 6S",
    image: "./images/22.jpg",
    price: 799,
  },
  {
    id: 1,
    name: "iPhone 5S",
    image: "./images/23.jpg",
    price: 349,
  },
  {
    id: 2,
    name: "Macbook",
    image: "./images/24.jpg",
    price: 1499,
  },
  {
    id: 3,
    name: "Macbook Air",
    image: "./images/25.jpg",
    price: 999,
  },
  {
    id: 4,
    name: "Macbook Air 2013",
    image: "./images/26.jpg",
    price: 599,
  },
  {
    id: 5,
    name: "Macbook Air 2012",
    image: "./images/27.jpg",
    price: 499,
  },
];


const products = [...new Set(product.map((product)=>{
return product
}))]
let i = 0 ;
// Take root element to loop through array and show it in different blocks of table
// Here I use array method to select every element in array i.e. Map Method
document.getElementById('root').innerHTML= products.map((product)=>{
    var {image, name, price} = product;
    return(
        `<div class="box">
            <div class = "img-box">
                <img class="images" src=${image}></img>
            </div>
            <div class = "bottom">
                <p>${name}</p>
                <h2>$ ${price}.00</h2>`+
                "<button onclick='addToCart("+(i++)+")'> Add to cart </button>"+
           `</div>
        </div>`
    )
}).join('')

// Took empty cart
var cart =[];
// I created this function to add product to cart when I click on add to cart button
function addToCart(a){
    cart.push({...products[a]});
    displayCart();
}


// This display cart funtion shows the total of price and total number of product in cart
function displayCart(){
    let total=0;
    // Shows cart size
    document.getElementById("count").innerHTML=cart.length;
    // Shows fist price to Zero(0) when nothing in cart
    document.getElementById('total').innerHTML = "$"+0+".00";
        document.getElementById("cartItem").innerHTML = cart.map((item) =>{
            var {price} = item ;
            total=total+price;
            document.getElementById("total").innerHTML = "$" + total + ".00";
        })
}