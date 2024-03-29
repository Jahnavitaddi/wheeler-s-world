var BicyclesData = [{
    image_url: "bi1.jpeg",
    brand: "Conqueror",
    para:"Chaze by MILIND Soman BGX 20 dual hybrid bicycle",
    rs: 9999,
    price: "Rs. 9999",
    wishList: "WISHLIST ♡",
    addToBag: "ADD TO BAG",
},
{
    image_url: "bi2.jpeg",
    brand: "Urban Terrain",
    para:"BOLT UT5001S27.5 Steel mountain bicycle",
    rs: 6399,
    price: "Rs. 6399",
    wishList: "WISHLIST ♡",
    addToBag: "ADD TO BAG",
},
{
    image_url: "bi3.jpeg",
    brand: "Avon Buke",
    para: "Thrust MTB 17.5 Frame Hybrid bicycles",
    rs: 6299,
    price: "Rs. 6299",
    wishList: "WISHLIST ♡",
    addToBag: "ADD TO BAG",
},
{
    image_url: "bi4.jpeg",
    brand: "Hercules",
    para: "Hercules Roadeo FX300HT bicycles",
    rs: 8499,
    price: "Rs. 8499",
    wishList: "WISHLIST ♡",
    addToBag: "ADD TO BAG",
},
{
    image_url: "bi5.jpeg",
    brand: "Ladybird",
    para: "BSA Ladybird Rhea 8730;BSA bicycles",
    rs: 7940,
    price: "Rs. 7940",
    wishList: "WISHLIST ♡",
    addToBag: "ADD TO BAG",
},
{
    image_url: "bi6.jpeg",
    brand: "Cult Sport",
    para: "Urban Terrian steel Mountain bicycles",
    rs: 8599,
    price: "Rs. 8599",
    wishList: "WISHLIST ♡",
    addToBag: "ADD TO BAG",
},
{
    image_url: "bi7.jpeg",
    brand: "Hero",
    para: "Hero bicycles for kids steel",
    rs: 7299,
    price: "Rs. 7299",
    wishList: "WISHLIST ♡",
    addToBag: "ADD TO BAG",
},
{
    image_url: "bi8.jpeg",
    brand: "Triad",
    para: "Spyder MTB bicycles 27.5T Mountain bicycles",
    rs: 11999,
    price: "Rs. 11999",
    wishList: "WISHLIST ♡",
    addToBag: "ADD TO BAG",
},

];

var wishList = JSON.parse(localStorage.getItem("wishListObj")) || [];

var bagList = JSON.parse(localStorage.getItem("BagListObj")) || [];


window.addEventListener('load', function(){
    displayPage(BicyclesData)
  })

  document.getElementById('nameSort').addEventListener('change', sortNames);
    function sortNames(){
      var selected = document.getElementById('nameSort').value;
      if(selected == 'asc'){
        BicyclesData.sort(function(a, b){
            if(a.brand > b.brand) return 1
            if(a.brand < b.brand) return -1
            return 0;
        })
        
        displayPage(BicyclesData); 
      }
      else{
        BicyclesData.sort(function(a, b){
          if(a.brand > b.brand) return -1
          if(a.brand < b.brand) return 1
          return 0
        })
    
        displayPage(BicyclesData)
      }
    }

    document.getElementById('priceSort').addEventListener('change', sortPrice); 
    function sortPrice(){
      var selected = document.getElementById('priceSort').value;
      if(selected == 'lth'){
        BicyclesData.sort(function(a, b){
          return a.rs-b.rs;
        })
        displayPage(BicyclesData); 
      }
      else{
        BicyclesData.sort(function(a, b){
          return b.rs - a.rs
        })
        displayPage(BicyclesData)
      }
    }

    document.getElementById('brandFilter').addEventListener('change', filterBrand);
    function filterBrand(){
      var selected = document.getElementById('brandFilter').value
      var newArray = BicyclesData.filter(function(element){
          if(element.brand == selected){
            return element;
          }
      })
      displayPage(newArray);
    }

    function displayPage(BicyclesData) {

        document.getElementById("container").innerHTML = "";

        // Total

BicyclesData.map(function(element) {
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
