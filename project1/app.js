

window.onload =()=>{
    main();
}



function main(){

    const root = document.querySelector('#root');
    const changeBtn = document.querySelector('#change-btn');

    changeBtn.addEventListener('click',function(){
        const bgClolor = generateRGBColor();
        root.style.backgroundColor = bgClolor;

    })


}


function generateRGBColor(){

    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);

    return `rgb(${red}, ${green},${blue})`
}