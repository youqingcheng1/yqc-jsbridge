import YqcJs from "./bridges/yqc-js";

(function(global){
    const initJs = {
        yqcjs: new YqcJs()
    }
    Object.keys(initJs).forEach(key=>{
        const curObj = initJs[key].apis;
        global[key] = curObj
    })
}(window))