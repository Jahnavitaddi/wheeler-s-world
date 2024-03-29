

var wisharr =JSON.parse(localStorage.getItem("wishListObj"))||[];

var itemcount = wisharr.length;
document.querySelector(".wishcount").innerText =` ${itemcount} Items`

wisharr.map(function(ele,ind){

    var box =document.createElement("div")
    
   
    var image =document.createElement("img")
    image.src =ele.image_url;

    var imgbox =document.createElement("div")
    box.className ="imgbox"
    imgbox.append(image)

    box.append(imgbox)

    var brand =document.createElement("h3");
    brand.innerText=ele.brand ;
    brand.style.color="black";
    box.append(brand)
    var para =document.createElement("h3");
    para.innerText=ele.para ;
    para.style.color="#7c7d9c";
    box.append(para)
   
    var price = document.createElement("h2");
    price.innerText = ele.price
    price.style.color ="#d90429";
    box.append(price)

  var buttonrm =document.createElement("button")
  buttonrm.innerText ="Remove"
  
  buttonrm.addEventListener("click", function(){
      removefromwish(ind)
  })


  var buttonbag =document.createElement("button")
  buttonbag.innerText ="Add to Bag";
  
  buttonbag.addEventListener("click", function(){
   sendtocart(ele,ind)
})



  var buttonholder = document.createElement("div");
  buttonholder.className ="buttonholder"
  buttonholder.append(buttonrm,buttonbag)
  box.append(buttonholder)

   
    document.querySelector(".container").append(box)
})



function removefromwish(ind){

wisharr.splice(ind,1)
localStorage.setItem("wishListObj",JSON.stringify(wisharr))
window.location.href="wishlist.html"

}

// localStorage.setItem("BagListObj" , JSON.stringify(bagList))
var baglist = JSON.parse(localStorage.getItem("BagListObj"))||[];

function sendtocart(ele,ind){

  baglist.unshift(ele);
  localStorage.setItem("BagListObj",JSON.stringify(baglist))

  wisharr.splice(ind,1)
  localStorage.setItem("wishListObj",JSON.stringify(wisharr))
    window.location.href="wishlist.html"

     }

document.getElementById('landingPage').addEventListener('click', function(){
window.location.href = "wheelersworld.html"
})
