import optionConfig from './config'
import Common from '../comcon'
import Utils from '../../utils/index'
export default class YqcJs extends Common {
    constructor(){
        super(optionConfig)
        this.init()
        this.lock = false;
    }

    async createBox({
        text='这是唯一弹窗',
        durtion=2000
    } = {}){
        let box = document.querySelector('#yqc_box') || null;
        let styleObj = {};
        let styleHiden = {
            display:"none"
        };
        if(this.lock) return;
        const removeDom = ()=>{
            Utils.styleObj(styleHiden,box)
            document.body.removeChild(box)
            this.lock = false;
        }
        if(!box){
            this.lock = true;
            box = document.createElement('div');
            box.innerHTML = text;
            box.id = 'yqc_box';
            styleObj = {
                color:'red',
                transition:'visibility 5s linear',
                display:"block",
                position: 'fixed',
                top: '10%',
                left: '50%',
                transform: 'translate(-50%,-10%)',
                border: '1px solid #000000',
                padding: '20px 50px',
            };
            Utils.styleObj(styleObj,box)
            document.body.appendChild(box)
        } else {
            const textBox = box.innerHTML;
            if(text === textBox){
                await Utils.awaitTimer(durtion)
                removeDom()
            } else {
                removeDom()
            }
        }

        await Utils.awaitTimer(durtion)
        removeDom()
    }
} 