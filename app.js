function energyCount(){
    let add = document.getElementById("add")
    var minus = document.getElementById("minus")

    

    add.addEventListener('click', ()=>{
        var value = parseInt(document.getElementById('energy').value)
        
        

        if(value === 9){
            value++;
            document.getElementById("energy").value = value;
        }else{
            value+=2;
            document.getElementById("energy").value = value;
        }

        if(value === 10){
            add.disabled = true
        }
        minus.disabled = false
    })
    minus.addEventListener('click', ()=>{
        let value = parseInt(document.getElementById('energy').value)
        value--;
        document.getElementById("energy").value = value;

        if(value == 0){
            minus.disabled = true
        }
        add.disabled = false
    })

}
energyCount();

function cardCount(){
    const adds = document.getElementById("addition")
    const minuses = document.getElementById("subtraction")
    const plus = document.getElementById("adds")
    

    adds.addEventListener('click', ()=>{
        var value = parseInt(document.getElementById('cards').value)
        value+=3;
        document.getElementById("cards").value = value;

        if(value == 12){
            adds.disabled = true
        }
        minuses.disabled = false
        plus.disabled = false
    })
    minuses.addEventListener('click', ()=>{
        let value = parseInt(document.getElementById('cards').value)
        value--;
        document.getElementById("cards").value = value;

        if(value == 0){
            minuses.disabled = true
            plus.disabled = true
        }
        adds.disabled = false
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