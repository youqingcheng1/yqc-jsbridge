// import YqcJs from "../../src/bridges/yqc-js";
import('../../src/bridges/yqc-js')
const demo = document.querySelector(".demo");
demo.onclick = function (e) { 
    const id = e.target.getAttribute('id');
    if(!id) return;
    switch(id){
        case 'testBox':
            yqcjs.createBox({
                text:'这个是box'
            });
            break;
        default:;
    }
 }