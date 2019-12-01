import { LightningElement, track } from 'lwc';

export default class SinnrinnKannkyoSyuunyuuSeisannN extends LightningElement {

    @track input1 = 0;
    @track input2 = 0;

    @track input3 = 0;
    @track input4 = 0;

    @track input5 = 0;
    @track input6 = 0;

    @track countNum1 = 0;
    @track countNum2 = 0;
    @track countNum3 = 0;
    @track countNum4 = 0;
    @track countNum5 = 0;

    @track countNum3_1 = 0;
    @track countNum3_2 = 0;

    @track countNum5_1 = 0;
    @track countNum5_2 = 0;



    isFirst = true;
    renderedCallback() {
        if (this.isFirst) {
            // initialize component
            this.handleCount1();
        }
        this.isFirst = false;
    }

    handleCount1() {
        //国庫補助金
        this.input1 = this.template.querySelector('[data-field-name="countNum1_1"]').value;
        this.input2 = this.template.querySelector('[data-field-name="countNum1_2"]').value;
        this.countNum1 = Number(this.input1) + Number(this.input2);
        //県(都道府)負担金
        this.input3 = this.template.querySelector('[data-field-name="countNum2_1"]').value;
        this.input4 = this.template.querySelector('[data-field-name="countNum2_2"]').value;
        this.countNum2 = Number(this.input3) + Number(this.input4);
        //精算額
        this.input5 = this.template.querySelector('[data-field-name="countNum4_1"]').value;
        this.input6 = this.template.querySelector('[data-field-name="countNum4_2"]').value;
        this.countNum4 = Number(this.input5) + Number(this.input6);

        //計ROW2  
        this.countNum3_1 = Number(this.input1) + Number(this.input3);
        //計ROW3
        this.countNum3_2 = Number(this.input2) + Number(this.input4);
        //計ROW1
        this.countNum3 = Number(this.countNum3_1) + Number(this.countNum3_2);

        //差引増△減額 ROW2
        if (Number(this.countNum3_1) > Number(this.input5)) {
            this.fugou2 = "△";
            this.countNum5_1 = Number(this.countNum3_1) - Number(this.input5);
        } else {
            this.fugou2 = "";
            this.countNum5_1 = Number(this.input5) - Number(this.countNum3_1);
        }

        //差引増△減額 ROW3
        if (Number(this.countNum3_2) > Number(this.input6)) {
            this.fugou3 = "△";
            this.countNum5_2 = Number(this.countNum3_2) - Number(this.input6);
        } else {
            this.fugou3 = "";
            this.countNum5_2 = Number(this.input6) - Number(this.countNum3_2);
        }

        //差引増△減額 ROW1
        if (Number(this.countNum3) > Number(this.countNum4)) {
           this.fugou1 = "△";
            this.countNum5 = Number(this.countNum3) - Number(this.countNum4);
        } else {
           this.fugou1 = "";
            this.countNum5 = Number(this.countNum4) - Number(this.countNum3);
        }

    }



}