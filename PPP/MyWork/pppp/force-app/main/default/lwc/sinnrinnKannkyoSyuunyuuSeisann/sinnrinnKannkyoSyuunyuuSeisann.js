import { LightningElement,track} from 'lwc';

export default class SinnrinnKannkyoSyuunyuuSeisann extends LightningElement {
    @track input21 = 0;
    @track input31 = 0;
    @track input22 = 0;
    @track input32 = 0;

    @track input12 = 0;
    @track input32 = 0;

    @track input24 = 0;
    @track input34 = 0;

    //国庫補助金の列1
    @track countNum11 = 0;
    @track countNum23 = 0;

    @track countNum13 = 0;
    @track countNum12 = 0;

    @track countNum33 = 0;
    

    @track countNum14 = 0;
    @track countNum25 = 0;

    @track countNum35 = 0;
    @track countNum15 = 0;

    @track temp = 0;
    isFirst = true;

    renderedCallback() {
        if(this.isFirst){
        // initialize component
        this.handleCount21();
        this.handleCount31();
        this.handleCount22();
        this.handleCount32();
        this.handleCount24();
        this.handleCount34();
        }
        this.isFirst = false;
    }
    //CELL_21 の計算関数
    handleCount21() {
        this.input21 = this.template.querySelector('[data-field-name="countNum2_1"]').value;
        this.input31 = this.template.querySelector('[data-field-name="countNum3_1"]').value;
        //CELL_11
        this.countNum11 = Number(this.input21) + Number(this.input31);
        //CELL_23
        this.input22 = this.template.querySelector('[data-field-name="countNum2_2"]').value;
        this.countNum23 = Number(this.input21) + Number(this.input22);
        //CELL_13
        this.countNum13 = this.countNum11 + this.countNum12;
        //CELL_15
        if(Number(this.countNum13) > Number(this.countNum14)){
            this.fugou1 = "△";    
            this.countNum15 = Number(this.countNum13) - Number(this.countNum14);
        }else{
            this.fugou1 = "";
            this.countNum15 =Number(this.countNum14)-Number(this.countNum13);
            }
        }
   

    //CELL_31 の計算関数
    handleCount31() {
        this.input31 = this.template.querySelector('[data-field-name="countNum3_1"]').value;
        this.input21 = this.template.querySelector('[data-field-name="countNum2_1"]').value;
        //CELL_11
        this.countNum11 = Number(this.input31) + Number(this.input21);
        //CELL_33
        this.input32 = this.template.querySelector('[data-field-name="countNum3_2"]').value;
        this.countNum33 = Number(this.input31) + Number(this.input32);
        }
   

    //CELL22 の計算関数
    handleCount22() {
        this.input22 = this.template.querySelector('[data-field-name="countNum2_2"]').value;
        this.input32 = this.template.querySelector('[data-field-name="countNum3_2"]').value;
        //CELL_12
        this.countNum12 = Number(this.input22) + Number(this.input32);
    }

    //CELL32 の計算関数
    handleCount32() {
        this.input22 = this.template.querySelector('[data-field-name="countNum2_2"]').value;
        this.input32 = this.template.querySelector('[data-field-name="countNum3_2"]').value;
        //CELL_12
        this.countNum12 = Number(this.input22) + Number(this.input32);
        //CELL_33
        this.input31 = this.template.querySelector('[data-field-name="countNum3_1"]').value;
        this.countNum33 = Number(this.input31) + Number(this.input32);
    }

    //CELL24 の計算関数
    handleCount24() {
        this.input24 = this.template.querySelector('[data-field-name="countNum2_4"]').value;
        this.input34 = this.template.querySelector('[data-field-name="countNum3_4"]').value;
        //CELL_14
        this.countNum14 = Number(this.input24) + Number(this.input34);
        //CELL_25
        if(Number(this.countNum23) > Number(this.input24)){
            //this.temp= Number(this.countNum23)-Number(this.input24);
            this.fugou2 = "△";
            this.countNum25 =Number(this.countNum23)-Number(this.input24);
        }else{
            this.fugou2 = "";
            this.countNum25 =Number(this.input24)-Number(this.countNum23);
        }
    }

    //CELL34 の計算関数
    handleCount34() {
        this.input24 = this.template.querySelector('[data-field-name="countNum2_4"]').value;
        this.input34 = this.template.querySelector('[data-field-name="countNum3_4"]').value;
        //CELL_14
        this.countNum14 = Number(this.input24) + Number(this.input34);
        //CELL_35
        if(Number(this.countNum33) > Number(this.input34)){
            this.fugou3 = "△";
            this.countNum35 =Number(this.countNum33)-Number(this.input34);
        }else{
            this.fugou3 = "";
            this.countNum35 =Number(this.input34)-Number(this.countNum33);
        }
    }

 

}