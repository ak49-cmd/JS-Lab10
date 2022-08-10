var topPosition = 200;
var leftPosition = 0;
function runPuppy() {
                    
    var puppy = document.getElementById("puppyAnimation");
        if(leftPosition == screen.width){
        
        }
        else{
            leftPosition++;
            puppy.style.top = leftPosition + 'px';
            puppy.style.left = leftPosition + 'px';
        }

// add if it reaches the screen end (you can check with screen.availwidth)		
}
