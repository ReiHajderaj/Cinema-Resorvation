const input = document.querySelector('select');

const leftSits = document.querySelector('.left')
const middleSits = document.querySelector('.midle')
const rightSits = document.querySelector('.right')
const message = document.querySelector('.message')
const options = document.querySelectorAll('option')


let randNum;
let coutSits = 0;
let price = 0;

function generateSits(section, sitNr){
    for(let i=0; i<sitNr; i++){
        let elm = document.createElement('div')
        elm.classList.add('sit')

        randNum = Math.random()*5;
        if(randNum < 1){
            elm.classList.add('occupied')
        } else{
            elm.classList.add('none')
        }

        section.appendChild(elm)
    }
}

function generatePrice(){
    price = input.value
    
}

function select(e){
    let element = e.target;
    
    if(element.classList[1] != 'occupied'){

            if(element.classList[1] == 'none'){
                coutSits++;
            }else{
                coutSits--;
            }
            element.classList.toggle('none')
            element.classList.toggle('selected')
            if(coutSits == 0){  
                message.innerHTML = `No seat selected`
            } else{
                generatePrice();
    
                message.innerHTML = `You have selected <span class='blue'>${coutSits}
                </span> seats for a price of <span class='blue'>${price * coutSits}$</span`
            }

        
        
    }

    
}



function generate(){

    generateSits(leftSits,12)
    generateSits(rightSits, 12)
    generateSits(middleSits, 24)


    const sitsArr = document.querySelectorAll('.sits div .sit');
    sitsArr.forEach((element) =>{
        element.addEventListener('click', select)
    })

} 



input.addEventListener('change', reset)

function reset (){

    coutSits = 0;
    price = 0;

    message.innerHTML = `No seat selected`
    
    removeSits(leftSits)
    removeSits(rightSits)
    removeSits(middleSits)
    generate()

}

function removeSits(section){
    while(section.hasChildNodes()){
        section.removeChild(section.firstChild)
    }
}


generate();
