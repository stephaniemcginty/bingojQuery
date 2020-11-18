

// Now comes the code that must wait to run until the document is fully loaded
document.addEventListener("DOMContentLoaded", function (event) {

    var deleteButton = document.getElementById('deleteButton');

    deleteButton.addEventListener('click', function(){
       var rmvCheckBoxes = document.getElementsByName('delete');
    
        for(var i = 0; i < rmvCheckBoxes.length; i++)
        {
            if(rmvCheckBoxes[i].checked)
            {
                removeElm(rmvCheckBoxes[i]);    
            }
        }  
    });
    
    function removeElm(elm){
       elm.parentElement.removeChild(elm);
    }
    
});  



