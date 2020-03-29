const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let errorMessage = "";

function addImage(){
    let visibleImage = document.getElementById("error-img").style.visibility = "visible";
    return visibleImage;
}

function validate(text){
    if(text.value.match(mailformat)){
        //document.emailForm.text.focus();
        return true;
    }
    else if(text.value=""){
        errorMessage = document.getElementById("error-message").textContent = "Please provide a valid email";
        addImage();
        event.preventDefault();
        return errorMessage;
    }
    else{
        errorMessage = document.getElementById("error-message").textContent = "Please provide a valid email";
        addImage();
        event.preventDefault();
        return errorMessage;
    }
}
