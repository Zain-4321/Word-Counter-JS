const TextArea=document.querySelector("#textarea");
const totalChar=document.getElementById("totalchar");
const charRemain=document.getElementById("remainchar");


TextArea.addEventListener("keyup",()=>{
    wordCounter();
})
wordCounter();


function wordCounter(){
    totalChar.innerText=TextArea.value.length;
    charRemain.innerText=TextArea.getAttribute("maxlength")-TextArea.value.length;
}
