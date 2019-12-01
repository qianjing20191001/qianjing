import { LightningElement,track } from 'lwc';

export default class Hojyokin extends LightningElement {
    @track input1 = 0;
    @track input2 = 0;
    @track input3 = 0;
    @track input4 = 0;
    @track input5 = 0;
    @track countNum1_1 = 0;
    @track countNum1_2 = 0;
    @track countNum1_3 = 0;
    @track countNum1_4 = 0;
    @track countNum1_5 = 0;
    @track countNum2_1 = 0;
    @track countNum2_2 = 0;
    @track countNum2_3 = 0;
    @track countNum2_4 = 0;
    @track countNum2_5 = 0;
    @track countNum3_1 = 0;
    @track countNum3_2 = 0;
    @track countNum3_3 = 0;
    @track countNum3_4 = 0;
    @track countNum3_5 = 0;
    @track countNum1 = 0;
    @track countNum2 = 0;
    @track countNum3 = 0;
    @track countNum4 = 0;
    @track countNum5 = 0;

    renderedCallback(){
        this.handleCount1();
        this.handleCount2();
        this.handleCount3();
    }

    handleCount1(){
        this.input1 = this.template.querySelector('[data-field-name="countNum1_1"]').value.slice(0,1);
        this.input2 = this.template.querySelector('[data-field-name="countNum1_2"]').value.slice(0,1);
        this.input3 = this.template.querySelector('[data-field-name="countNum1_3"]').value.slice(0,1);
        this.input4 = this.template.querySelector('[data-field-name="countNum1_4"]').value.slice(0,1);
        this.input5 = this.template.querySelector('[data-field-name="countNum1_5"]').value.slice(0,1);
        this.countNum1 = Number(this.input1) + Number(this.input2) + Number(this.input3) + Number(this.input4) + Number(this.input5);

        
    }
    handleCount2(){
        this.input1 = this.template.querySelector('[data-field-name="countNum2_1"]').value.slice(0,1);
        this.input2 = this.template.querySelector('[data-field-name="countNum2_2"]').value.slice(0,1);
        this.input3 = this.template.querySelector('[data-field-name="countNum2_3"]').value.slice(0,1);
        this.input4 = this.template.querySelector('[data-field-name="countNum2_4"]').value.slice(0,1);
        this.input5 = this.template.querySelector('[data-field-name="countNum2_5"]').value.slice(0,1);
        this.countNum2 = Number(this.input1) + Number(this.input2) + Number(this.input3) + Number(this.input4) + Number(this.input5);
        
    }
    handleCount3(){
        this.input1 = this.template.querySelector('[data-field-name="countNum3_1"]').value.slice(0,1);
        this.input2 = this.template.querySelector('[data-field-name="countNum3_2"]').value.slice(0,1);
        this.input3 = this.template.querySelector('[data-field-name="countNum3_3"]').value.slice(0,1);
        this.input4 = this.template.querySelector('[data-field-name="countNum3_4"]').value.slice(0,1);
        this.input5 = this.template.querySelector('[data-field-name="countNum3_5"]').value.slice(0,1);
        this.countNum3 = Number(this.input1) + Number(this.input2) + Number(this.input3) + Number(this.input4) + Number(this.input5);
        //summary
        this.countNum4 = this.countNum1 + this.countNum2 + this.countNum3;
        //averege
        this.countNum5 = (this.countNum1 + this.countNum2 + this.countNum3)/3;
    }

    
}