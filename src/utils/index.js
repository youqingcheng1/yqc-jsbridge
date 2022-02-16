export default {
    isIos(){
        return !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
    },
    isFunction(option){
        return Object.prototype.toString.call(option) === '[object Function]'
    },
    isObject(option){
        return Object.prototype.toString.call(option) === '[object Object]'
    },
    //初始化成数组或对象
    valueInit(option){
        if(typeof option !== 'object' || option === null || option === undefined){
            return option
        }
        const va = Object.prototype.toString.call(option)

        if(va === '[object Array]'){
            return []
        } else {
            return {}
        }
    },
    //转换成for of能用的itorator类型
    objEntries(option){
        let key = Object.keys(option)
        let arr = [];
        for(let k of key){
            arr.push([k,option[k]])
        }
        return arr;
    },
    //js 内联样式填充
    styleObj(option,container){
        let op = option;
        if(this.isObject(option)) op = this.objEntries(option);
        for(let [key,value] of op){
            container.style[key] = value
        }
    },
    //setTimer 包裹async/await
    awaitTimer(durtion){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve()
            },durtion)
        })
    }
}