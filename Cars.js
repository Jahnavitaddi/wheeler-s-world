var CarsData = [{
    image_url: "c1.jpeg",
    brand: "Renault DUSTER",
    para: "1498cc engine,20kmpl milage",
    rs: 849000,
    price: "Rs. 849000",
    wishList: "WISHLIST ♡",
    addToBag: "ADD TO BAG",
},
{
    image_url: "c2.jpeg",
    brand: "Hyundai grand i10",
    para:"1197cc engine,21kmpl milage",
    rs: 851000,
    price: "Rs. 851000",
    wishList: "WISHLIST ♡",
    addToBag: "ADD TO BAG",
},
{
    image_url: "c3.jpeg",
    brand: "Brezza",
    para: "1462cc engine,25kmpl milage",
    rs: 829000,
    price: "Rs. 829000",
    wishList: "WISHLIST ♡",
    addToBag: "ADD TO BAG",
},
{
    image_url: "c4.jpeg",
    brand: "Mahindra Thar",
    para: "2184cc engine,15kmph milage",
    rs: 1670000,
    price: "Rs. 1670000",
    wishList: "WISHLIST ♡",
    addToBag: "ADD TO BAG",
},
{
    image_url: "c5.jpeg",
    brand: "Audi",
    para: "1984cc engine,14.27kmpl milage",
    rs: 2220000,
    price: "Rs. 2220000",
    wishList: "WISHLIST ♡",
    addToBag: "ADD TO BAG",
},
{
    image_url: "c6.jpeg",
    brand: "Hyundai creta",
    para: "1498cc engine,23kmpl milage",
    rs: 1910000,
    price: "Rs.1910000",
    wishList: "WISHLIST ♡",
    addToBag: "ADD TO BAG",
},
{
    image_url: "c7.jpeg",
    brand: "Benz",
    para: "2925cc engine,23.52kmpl milage",
    rs: 4520000,
    price: "Rs. 4520000",
    wishList: "WISHLIST ♡",
    addToBag: "ADD TO BAG",
},
{
    image_url: "c8.jpeg",
    brand: "Tata Nano",
    para: "625cc engine,25.4kmpl milage",
    rs: 325000,
    price: "Rs. 325000",
    wishList: "WISHLIST ♡",
    addToBag: "ADD TO BAG",
},

];

var wishList = JSON.parse(localStorage.getItem("wishListObj")) || [];

var bagList = JSON.parse(localStorage.getItem("BagListObj")) || [];


window.addEventListener('load', function(){
    displayPage(CarsData)
  })

  document.getElementById('nameSort').addEventListener('change', sortNames);
    function sortNames(){
      var selected = document.getElementById('nameSort').value;
      if(selected == 'asc'){
        CarsData.sort(function(a, b){
            if(a.brand > b.brand) return 1
            if(a.brand < b.brand) return -1
            return 0;
        })
        
        displayPage(CarsData); 
      }
      else{
        CarsData.sort(function(a, b){
          if(a.brand > b.brand) return -1
          if(a.brand < b.brand) return 1
          return 0
        })
    
        displayPage(CarsData)
      }
    }

    document.getElementById('priceSort').addEventListener('change', sortPrice); 
    function sortPrice(){
      var selected = document.getElementById('priceSort').value;
      if(selected == 'lth'){
        CarsData.sort(function(a, b){
          return a.rs-b.rs;
        })
        displayPage(CarsData); 
      }
      else{
        CarsData.sort(function(a, b){
          return b.rs - a.rs
        })
        displayPage(CarsData)
      }
    }

    document.getElementById('brandFilter').addEventListener('change', filterBrand);
    function filterBrand(){
      var selected = document.getElementById('brandFilter').value
      var newArray = CarsData.filter(function(element){
          if(element.brand == selected){
            return element;
          }
      })
      displayPage(newArray);
    }

    function displayPage(CarsData) {

        document.getElementById("container").innerHTML = "";

        // Total

CarsData.map(function(element) {
    var box = document.createElement("div");
    box.style.cursor = "pointer";
    
    var img = document.createElement("img");
    img.src = element.image_url;
    
    var contentBox = document.createElement("div");
    contentBox.setAttribute("class", "contentBox");
    
    var brand = document.createElement("h3");
    brand.textContent = element.brand;
    brand.style.color="black";
    
    var para = document.createElement("h3");
    para.textContent = element.para;
    para.style.color="#7c7d9c";
    
    var mix = document.createElement("div");
    mix.setAttribute("class", "mixbox");
    
    var price = document.createElement("h2");
    price.textContent = element.price;
    price.style.color="#d90429";
    

    mix.append(price);
    
    var wishList = document.createElement("p");
    wishList.setAttribute("class", "wishListp");
    wishList.textContent = element.wishList;
    wishList.style.cursor = "pointer";
    
    wishList.addEventListener("click", function() {
        addToWishlist(element);
        wishList.style.color = "green";
        wishList.innerText = "ADDED TO WISHLIST";
    });
    
    var addToBag = document.createElement("p");
    addToBag.setAttribute("class", "addToBagp");
    addToBag.textContent = element.addToBag;
    addToBag.style.cursor = "pointer";
    
    addToBag.addEventListener("click", function() {
        addToBaglist(element);
        addToBag.innerText = "ADDED TO BAG";
    });
    
    contentBox.append(brand, para, mix, wishList, addToBag);
    box.append(img, contentBox);
    
    document.querySelector("#container").append(box);
    });
    
    
    // Total

}



function addToWishlist(element) {
wishList.push(element);
localStorage.setItem("wishListObj", JSON.stringify(wishList));
}

function addToBaglist(element) {
bagList.push(element);
localStorage.setItem("BagListObj", JSON.stringify(bagList));
}

document.getElementById("land").addEventListener("click", function() {
window.location.href = "wheelersworld.html";
});
