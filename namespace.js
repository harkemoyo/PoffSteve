// namespace js
let  Mark = {
    changeColor: function(ev){
        log(ev)
       let target = ev.currentTarget 
        target.style.backgroundColor = "green";
        target.style.color = "#ffffff";
    },
    init: function(){
        let name1 = document.getElementById('namespace');
        name1.addEventListener("mouseout", this.changeColor);
    }
}
Mark.init();