// add the product to the cart
// the obj refer to the key of the product
async function addToCart(obj,event){
    event.stopPropagation();
    if(localStorage.getItem("userAuth") != "1"){
        alert("Plz Login First");
        window.open("login.html" , "_self");
    }
    else{
        let productObj = {
            productId : obj.value,
            userEmail : localStorage.getItem("userEmail") //sessionStorage.getItem("userEmail")
        }
        let response = await fetch("https://jsecommerceproject-default-rtdb.firebaseio.com/Carts.json",{
            method:"post",
            body:JSON.stringify(productObj)
        })
    }

}