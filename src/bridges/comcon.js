export default class Common{
    constructor(optionConfig){
        this.apis = {
            hasInit:false
        }
        this.optionConfig = optionConfig || {};
    }

    init(){
        Object.keys(this.optionConfig).forEach(option=>{
            this.apis[this.optionConfig[option].method] = this[this.optionConfig[option].method]
        })
        this.apis.hasInit = true;
        console.log('初始化成功')
    }
} 