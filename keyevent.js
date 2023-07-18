// // keyboard Events

document.addEventListener('DOMContentLoaded', init);

function init(){
    
    let txt = document.getElementById('txt');
    // txt.addEventListener('keydown', anyKey);
    document.addEventListener('keydown', anyKey);
    // txt.addEventListener('change',changeEvent)
    // log(txt)
    
}

function anyKey(ev){
    log( ev.type, ev.target);
    let target = ev.currentTarget;
    let tag = target.tagName;
    let char = ev.char || ev.charCode || ev.which;
    log(char, tag);
    let s = String.fromCharCode(char);
    //log(s);
    switch(char){
        case 37:
            log('LEFT');
            break;
        case 40:
            log('DOWN');
            break;
    }
  
}
// Input eventlisteners
// change
// blur event
// input 
// function changeEvent(ev){
    

//     console.log (ev.targert.value);
//  }



// let  Mark = {
//     changeColor: function(ev){
//         log(ev)
//        let target = ev.currentTarget 
//         target.style.backgroundColor = "purple";
//         target.style.color = "#ffffff";
//     },
//     init: function(){
//         let name1 = document.getElementById('namespace');
//         name1.addEventListener("mouseout", this.changeColor);
//     }
// }

// Mark.init();