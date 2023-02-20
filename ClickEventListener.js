var saveButton = document.getElementById("saveButton");
function addCountedSaveButtonListener(button){
    let count = 0;
    button.addEventListener("click", function (){
        console.log("Button Clicked", ++count);
    });
}

addCountedSaveButtonListener(saveButton);