var cartarr =JSON.parse(localStorage.getItem("BagListObj"))||[];

var itemcount = cartarr.length;
document.querySelector(".wishcount").innerText =` ${itemcount} Items`

cartarr.map(function(ele,ind){

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
      removefromcart(ind)
  })


  var buttonbag =document.createElement("button")
  buttonbag.innerText ="Buy Now";
  
  buttonbag.addEventListener("click", function(){
   sendtocart(ele,ind)
})



  var buttonholder = document.createElement("div");
  buttonholder.className ="buttonholder"
  buttonholder.append(buttonrm,buttonbag)
  box.append(buttonholder)

   
    document.querySelector(".container").append(box)
})



function removefromcart(ind){

cartarr.splice(ind,1)
localStorage.setItem("BagListObj",JSON.stringify(cartarr))
window.location.href="cart.html"

}



function sendtocart(ele,ind){

    window.location.href="registration.html"

     }

document.getElementById('landingPage').addEventListener('click', function(){
window.location.href = "wheelersworld.html"
})
