let output=document.querySelector('.output');
let result=document.querySelector('.result');
let keys=document.querySelectorAll('button')


keys.forEach(function(key){

    key.addEventListener("click", calculate);

});


function calculate(){
   
    if(this.innerText=="AC"){
        output.innerText="";
        result.innerText="0";

    }
    else if(this.innerText=="DEL"){
        output.textContent=output.textContent.substr(0,output.textContent.length-1);
    }

    else if(this.innerText=="="){
        result.innerText=eval(output.innerText);
        
        setTimeout(()=>{
            output.innerHTML=result.innerText;
            result.innerText="";
            
        },500);

        result.style.animation="big 0.2s ease-in-out forwards";
        output.style.animation="small 0.2s ease-in-out forwards";
        
    }
   
    else{
    output.innerText=output.innerText+this.innerText;
    }
    
}