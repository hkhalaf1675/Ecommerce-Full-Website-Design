// user auth from login page
function authUser(obj,event){
    event.preventDefault();
    let user = {
        userEmail : document.getElementById("email").value,
        userPassword : document.getElementById("password").value,
        auth : false
    }
    fetch("https://jsecommerceproject-default-rtdb.firebaseio.com/user.json")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        for (const key in data) {
            if(data[key].email == user.userEmail && data[key].password == user.userPassword && data[key].isAdmin == 1){
                window.open("admin.html","_self");
            }
            else if(data[key].email == user.userEmail && data[key].password == user.userPassword){
                user.auth = true;
                break;
            }
        }
        
    if(user.auth == false){
        document.getElementById("error").style.display = "block";
    }
    else{
        localStorage.setItem("userEmail" , user.userEmail);//sessionStorage.setItem("userEmail" , user.userEmail);
        localStorage.setItem("userAuth" , "1");//sessionStorage.setItem("userAuth" , "1");

        window.open("home.html" , "_self");
    }
    })
}
// --------------------------------------------
function logOut(){
    localStorage.removeItem("userAuth");//sessionStorage.removeItem("userAuth");
    localStorage.removeItem("userEmail");//sessionStorage.removeItem("userEmail");

    window.open("login.html","_self");
}
