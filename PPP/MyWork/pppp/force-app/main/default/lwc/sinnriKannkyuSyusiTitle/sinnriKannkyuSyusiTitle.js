import { LightningElement,track } from 'lwc';


// 年度区分
var NeDoOptions = [
    { label: '明治', value: '明治' },
    { label: '大正', value: '大正' },
    { label: '昭和', value: '昭和' },
    { label: '平成', value: '平成' },
    { label: '令和', value: '令和' },
];
export default class SinnriKannkyuSyusiTitle extends LightningElement {

    @track neDo;
    @track NeDoOptions = NeDoOptions;

    /**
         *年度変更
    */
       handleNeDoChange(event){
        this.neDO =event.target.value;
    }


   
}