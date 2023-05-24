
let div = null;
window.onload =()=>{
    main();
}



function main(){

    const root = document.querySelector('#root');
    const changeBtn = document.querySelector('#change-btn');
    const output = document.querySelector('#output')
    const copyBtn = document.querySelector('#copy-btn')

    changeBtn.addEventListener('click',function(){
        const bgClolor = generateRGBColor();
        root.style.backgroundColor = bgClolor;
        output.value = bgClolor;

    })

    copyBtn.addEventListener('click',function(){
        navigator.clipboard.writeText(output.value);
        if(div != null){
            div.remove();
            div = null;
        }
        generateToastMessage(`${output.value} copied`);
      
    })


}


function generateRGBColor(){

    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}


function generateToastMessage(msg){

 div = document.createElement('div');
 div.innerText = msg;
 div.className= 'toast-message toast-message-slide-in';


 div.addEventListener('click',function(){
    div.classList.remove('toast-message-slide-in');
    div.classList.add('toast-message-slide-out');

    div.addEventListener('animationend', function(){
        div.remove();
        div = null;

    });
 });

 document.body.appendChild(div);
}