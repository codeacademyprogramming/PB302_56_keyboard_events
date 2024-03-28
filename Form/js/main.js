
let input = document.getElementById("usernameInput")
document.getElementById("registerForm").addEventListener("submit",function(e){
    e.preventDefault();
    if(checkUsername()){
        let toastElem = document.querySelector(".toast");
        var toast = new bootstrap.Toast(toastElem)
        
        toast.show()
    }

})

function checkUsername(){
    if(input.value.length<3 || input.value.length>20){
        return false;
    }


    return true;
}
