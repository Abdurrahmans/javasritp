

window.onload =()=>{
    main();
}



function main(){

    const root = document.querySelector('#root');
    const changeBtn = document.querySelector('#change-btn');
    const output = document.querySelector('#output')

    changeBtn.addEventListener('click',function(){
        const bgClolor = generateRGBColor();
        root.style.backgroundColor = bgClolor;
        output.value = bgClolor;

    })


}


function generateRGBColor(){

    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}
