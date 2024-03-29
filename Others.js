var OthersData = [{
    image_url: "O1.jpeg",
    brand: "EICHER Starline 2050 D supermax staff Bus",
    para: "E474 engine,9kmpl milage",
    rs: 1728000,
    price: "Rs. 1728000",
    wishList: "WISHLIST ♡",
    addToBag: "ADD TO BAG",
},
{
    image_url: "O2.jpeg",
    brand: "Auto",
    para:"1512cc engine,6.5kmpl milage",
    rs: 2565000,
    price: "Rs. 2565000",
    wishList: "WISHLIST ♡",
    addToBag: "ADD TO BAG",
},
{
    image_url: "O3.jpeg",
    brand: "Auto rickshaw",
    para: "598cc engine,20kmpl milage",
    rs: 234000,
    price: "Rs. 234000",
    wishList: "WISHLIST ♡",
    addToBag: "ADD TO BAG",
},
{
    image_url: "O4.jpeg",
    brand: "Volkswagen TRansporter T5",
    para: "174 PS TDI engine",
    rs: 2528000,
    price: "Rs. 2528000",
    wishList: "WISHLIST ♡",
    addToBag: "ADD TO BAG",
},
{
    image_url: "O5.jpeg",
    brand: "Eicher school bus",
    para: "E474 engine,7kmpl milage",
    rs: 1370000,
    price: "Rs. 1370000",
    wishList: "WISHLIST ♡",
    addToBag: "ADD TO BAG",
},
{
    image_url: "O6.jpeg",
    brand: "Tuk Bajaj AUTO",
    para: "2 stroke cng engine,10kmpl milage",
    rs: 150000,
    price: "Rs. 150000",
    wishList: "WISHLIST ♡",
    addToBag: "ADD TO BAG",
},
{
    image_url: "O7.jpeg",
    brand: "Mahindra JIVO",
    para: "245 DI engine,23kmpl milage",
    rs: 390000,
    price: "Rs. 390000",
    wishList: "WISHLIST ♡",
    addToBag: "ADD TO BAG",
},
{
    image_url: "O8.jpeg",
    brand: "Tata Ultra 1212 LPT BS6 truck",
    para: "5212cc engine,35kmpl milage",
    rs: 2565000,
    price: "Rs. 2565000",
    wishList: "WISHLIST ♡",
    addToBag: "ADD TO BAG",
},

];

var wishList = JSON.parse(localStorage.getItem("wishListObj")) || [];

var bagList = JSON.parse(localStorage.getItem("BagListObj")) || [];


window.addEventListener('load', function(){
    displayPage(OthersData)
  })

  document.getElementById('nameSort').addEventListener('change', sortNames);
    function sortNames(){
      var selected = document.getElementById('nameSort').value;
      if(selected == 'asc'){
        OthersData.sort(function(a, b){
            if(a.brand > b.brand) return 1
            if(a.brand < b.brand) return -1
            return 0;
        })
        
        displayPage(OthersData); 
      }
      else{
        OthersData.sort(function(a, b){
          if(a.brand > b.brand) return -1
          if(a.brand < b.brand) return 1
          return 0
        })
    
        displayPage(OthersData)
      }
    }

    document.getElementById('priceSort').addEventListener('change', sortPrice); 
    function sortPrice(){
      var selected = document.getElementById('priceSort').value;
      if(selected == 'lth'){
        OthersData.sort(function(a, b){
          return a.rs-b.rs;
        })
        displayPage(OthersData); 
      }
      else{
        BikesData.sort(function(a, b){
          return b.rs - a.rs
        })
        displayPage(OthersData)
      }
    }

    document.getElementById('brandFilter').addEventListener('change', filterBrand);
    function filterBrand(){
      var selected = document.getElementById('brandFilter').value
      var newArray = OthersData.filter(function(element){
          if(element.brand == selected){
            return element;
          }
      })
      displayPage(newArray);
    }

    function displayPage(OthersData) {

        document.getElementById("container").innerHTML = "";

        // Total

OthersData.map(function(element) {
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
    para.style.color="#7f7d9c";
    
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
