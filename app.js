let valueCards = parseInt(document.getElementById('cards').value)
let valueEnergy = parseInt(document.getElementById('energy').value)
var adds = document.getElementById("addition")
var add = document.getElementById("add")
var nxtGame = document.getElementById('nxtG')

function energyCount(){
    var minus = document.getElementById("minus")
    var nxt = document.getElementById('nxt')
    var i = 1
    
    
    
    nxt.addEventListener('click', ()=>{

        i++

        var round = document.getElementById('round').innerHTML = "Round " + i;
        
        
        if(valueEnergy === 9){
            valueEnergy++;
            document.getElementById("energy").value = valueEnergy;
        }else{
            valueEnergy+=2;
            document.getElementById("energy").value = valueEnergy;
        }

        

        if(valueEnergy === 10){
            add.disabled = true
            nxt.disabled = true
        }

        if(valueCards === 11){

            valueCards++;
            document.getElementById("cards").value = valueCards;
        }else if(valueCards === 10){
            valueCards+=2;
            document.getElementById("cards").value = valueCards;
        }else{
            valueCards+=3;
            document.getElementById("cards").value = valueCards;
        }


        if(valueCards === 12){
            adds.disabled = true
            nxt.disabled = true
        }
   
    })
    add.addEventListener('click', ()=>{
        
        
        valueEnergy++;
        document.getElementById("energy").value = valueEnergy;

        if(valueEnergy === 10){
            add.disabled = true
            nxt.disabled = true
        }
        minus.disabled = false
    })
    minus.addEventListener('click', ()=>{
        valueEnergy--;
        document.getElementById("energy").value = valueEnergy;

        if(valueEnergy == 0){
            
            minus.disabled = true
        }
        add.disabled = false
        nxt.disabled = false
    })

    nxtGame.addEventListener('click', ()=>{
        window.location.reload();
    })

}
energyCount();

function cardCount(){
    
    const minuses = document.getElementById("subtraction")
    const plus = document.getElementById("adds")

    adds.addEventListener('click', ()=>{
       
        valueCards++;
        document.getElementById("cards").value = valueCards;

        if(valueCards === 12){
            adds.disabled = true
            nxt.disabled = true
        }
        minuses.disabled = false
        plus.disabled = false
    })
    minuses.addEventListener('click', ()=>{
        valueCards--;
        document.getElementById("cards").value = valueCards;

        if(valueCards == 0){
            minuses.disabled = true
            plus.disabled = true
        }
        adds.disabled = false
        nxt.disabled = false
    })
    
    
    plus.addEventListener('click', ()=>{
        var value = parseInt(document.getElementById('cards').value)
        value--;
        document.getElementById("cards").value = value;

        if(value == 0){
            plus.disabled = true
            minuses.disabled = true
        }
        
    })

}
cardCount();

// function zeroCardCount(){
//     const plus = document.getElementById("adds")
    

    

//     plus.addEventListener('click', ()=>{
//         var value = parseInt(document.getElementById('cards').value)
//         value--;
//         document.getElementById("cards").value = value;

//         if(value == 0){
//             plus.disabled = true
//         }
        
//     })
//     // minuses.addEventListener('click', ()=>{
//     //     let value = parseInt(document.getElementById('cards').value)
//     //     value--;
//     //     document.getElementById("cards").value = value;

//     //     if(value == 0){
//     //         minuses.disabled = true
//     //     }
//     //     adds.disabled = false
//     // })

// }
// zeroCardCount();