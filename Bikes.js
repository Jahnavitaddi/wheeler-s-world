var BikesData = [{
    image_url: "B1.jpeg",
    brand: "Royal Enfield Classic 350",
    para: "349cc engine,32kmpl milage",
    rs: 225000,
    price: "Rs. 225000",
    wishList: "WISHLIST ♡",
    addToBag: "ADD TO BAG",
},
{
    image_url: "B2.jpeg",
    brand: "KTM RC 390",
    para:"373cc engine,25.89kmpl milage",
    rs: 318000,
    price: "Rs. 318000",
    wishList: "WISHLIST ♡",
    addToBag: "ADD TO BAG",
},
{
    image_url: "B3.jpeg",
    brand: "Yamaha FZ-SFI",
    para: "149cc engine,85kmpl milage",
    rs: 121000,
    price: "Rs. 121000",
    wishList: "WISHLIST ♡",
    addToBag: "ADD TO BAG",
},
{
    image_url: "B4.jpeg",
    brand: "Hero Splendor Pro",
    para: "97.2cc engine,82kmph milage",
    rs: 50000,
    price: "Rs. 50000",
    wishList: "WISHLIST ♡",
    addToBag: "ADD TO BAG",
},
{
    image_url: "B5.jpeg",
    brand: "DUKE",
    para: "199.5cc engine,142kmpl milage",
    rs: 193000,
    price: "Rs. 193000",
    wishList: "WISHLIST ♡",
    addToBag: "ADD TO BAG",
},
{
    image_url: "B6.jpeg",
    brand: "HERO HF 100",
    para: "97.2cc engine,70kmpl milage",
    rs: 59018,
    price: "Rs. 59018",
    wishList: "WISHLIST ♡",
    addToBag: "ADD TO BAG",
},
{
    image_url: "B7.jpeg",
    brand: "Kawasaki NINJA 300",
    para: "296cc engine,30kmpl milage",
    rs: 343000,
    price: "Rs. 343000",
    wishList: "WISHLIST ♡",
    addToBag: "ADD TO BAG",
},
{
    image_url: "B8.jpeg",
    brand: "Yamaha R15",
    para: "155cc engine,40kmpl milage",
    rs: 164900,
    price: "Rs. 164900",
    wishList: "WISHLIST ♡",
    addToBag: "ADD TO BAG",
},

];

var wishList = JSON.parse(localStorage.getItem("wishListObj")) || [];

var bagList = JSON.parse(localStorage.getItem("BagListObj")) || [];


window.addEventListener('load', function(){
    displayPage(BikesData)
  })

  document.getElementById('nameSort').addEventListener('change', sortNames);
    function sortNames(){
      var selected = document.getElementById('nameSort').value;
      if(selected == 'asc'){
        BikesData.sort(function(a, b){
            if(a.brand > b.brand) return 1
            if(a.brand < b.brand) return -1
            return 0;
        })
        
        displayPage(BikesData); 
      }
      else{
        BikesData.sort(function(a, b){
          if(a.brand > b.brand) return -1
          if(a.brand < b.brand) return 1
          return 0
        })
    
        displayPage(BikesData)
      }
    }

    document.getElementById('priceSort').addEventListener('change', sortPrice); 
    function sortPrice(){
      var selected = document.getElementById('priceSort').value;
      if(selected == 'lth'){
        BikesData.sort(function(a, b){
          return a.rs-b.rs;
        })
        displayPage(BikesData); 
      }
      else{
        BikesData.sort(function(a, b){
          return b.rs - a.rs
        })
        displayPage(BikesData)
      }
    }

    document.getElementById('brandFilter').addEventListener('change', filterBrand);
    function filterBrand(){
      var selected = document.getElementById('brandFilter').value
      var newArray = BikesData.filter(function(element){
          if(element.brand == selected){
            return element;
          }
      })
      displayPage(newArray);
    }

    function displayPage(BikesData) {

        document.getElementById("container").innerHTML = "";

        // Total

BikesData.map(function(element) {
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
