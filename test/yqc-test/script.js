const demo = document.querySelector(".demo");
demo.onclick = function (e) { 
    const id = e.target.getAttribute('id');
    if(!id) return;
    switch(id){
        case 'test':
            console.log(111);
            break;
        default:;
    }
 }