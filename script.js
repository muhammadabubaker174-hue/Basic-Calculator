let buttons=document.querySelectorAll(".button")
let input=document.querySelector(".calculation")

buttons.forEach((btn) => {
     btn.addEventListener("click",() =>{
        const value =btn.innerText;
         if(value === "DEL") { 
              input.innerText = input.innerText.slice(0,-1)
        } else if (value === "AC") {
              input.innerText=""
        } else if(value==="=") {
            try{
              input.innerText=eval(input.innerText)
            }
            catch{
                input.innerText="ERROR"
            } 
        } else if (value==="%"){
              if (input.innerText!==""){
                 input.innerText=eval(input.innerText)/100
              }

        } else{
            input.innerText+=value
            if (value === "%"){
                let percent=value;
                console.log(percent)
            }
        }
     })
 })

