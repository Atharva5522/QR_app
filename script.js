let input = document.querySelector("input");
let button = document.querySelector("button");
let image = document.querySelector("img");
let box = document.querySelector("box")

const  scanqr = async(e) =>{
    e.preventDefault()
    const fetcqr =await fetch("https://api.qrserver.com/v1/create-qr-code/?size=250*250&data=${input.value}");
    const response = fetcqr.url
   
    

     image.setAttribute('src',response)
    
   
    
    
    
}

button.addEventListener("click",scanqr);