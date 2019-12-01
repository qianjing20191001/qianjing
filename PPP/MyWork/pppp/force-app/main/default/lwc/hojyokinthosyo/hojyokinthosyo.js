import { LightningElement, track } from 'lwc';

export default class Hojyokinthosyo extends LightningElement {
    @track input1 = 0;
    @track input2 = 0;
    @track countNum1 = 0;
    @track countNum1_1 = 0;
    @track countNum1_2 = 0;
    @track countNum2 = 0;
    @track countNum3 = 0;
    @track countNum4 = 0;
    @track countNum5 = 0;
    @track countNum6 = 0;
    @track countNum7 = 0;
    @track countNum8 = 0;
    @track countNum9 = 0;
    @track countNum10 = 0;
    @track countNum10_1 = 0;
    @track countNum10_2 = 0;
    @track countNum11 = 0;
    @track countNum12 = 0;
    @track countNum13 = 0;
    @track countNum14 = 0;
    @track countNum15 = 0;
    @track countNum16 = 0;
    @track countNum17 = 0;
    @track countNum18 = 0;
    @track countNum19 = 0;
    @track countNum20 = 0;
    @track countNum21 = 0;
    @track countNum22 = 0;
    @track countNum23 = 0;
    @track countNum24 = 0;
    @track countNum25 = 0;
    @track countNum26 = 0;
    @track countNum27 = 0;
    @track countNum28 = 0;

    renderedCallback() {
        // initialize component
        this.handleCount1();
        this.handleCount3();
        this.handleCount4();
        this.handleCount5();
        this.handleCount6();
        this.handleCount7();
        this.handleCount8();
        this.handleCount9();
        this.handleCount11();
        this.handleCount12();
        this.handleCount13();
        this.handleCount14();
        this.handleCount15();
        this.handleCount16();
        this.handleCount17();
        this.handleCount18();
    }

    handleCount1() {
        this.input1 = this.template.querySelector('[data-field-name="countNum2_1"]').value;
        this.input2 = this.template.querySelector('[data-field-name="countNum2_2"]').value;
        this.countNum2 = Number(this.input1) + Number(this.input2);
        this.countNum1_1 = this.input1;
        this.countNum1_2 = this.input2;
        this.countNum1 = Number(this.countNum1_1) + Number(this.countNum1_2);
        //summary
        this.countNum20 = this.countNum2 + this.countNum11;
        this.countNum19 = this.countNum20;
        this.countNum28 = this.countNum20;
    }

    handleCount3() {
        this.input1 = this.template.querySelector('[data-field-name="countNum3_1"]').value;
        this.input2 = this.template.querySelector('[data-field-name="countNum3_2"]').value;
        this.countNum3 = Number(this.input1) + Number(this.input2);
        //summary
        this.countNum21 = this.countNum3 + this.countNum12;
    }

    handleCount4() {
        this.input1 = this.template.querySelector('[data-field-name="countNum4_1"]').value;
        this.input2 = this.template.querySelector('[data-field-name="countNum4_2"]').value;
        this.countNum4 = Number(this.input1) + Number(this.input2);
        //summary
        this.countNum22 = this.countNum4 + this.countNum13;
    }

    handleCount5() {
        this.input1 = this.template.querySelector('[data-field-name="countNum5_1"]').value;
        this.input2 = this.template.querySelector('[data-field-name="countNum5_2"]').value;
        this.countNum5 = Number(this.input1) + Number(this.input2);
        //summary
        this.countNum23 = this.countNum5 + this.countNum14;
    }

    handleCount6() {
        this.input1 = this.template.querySelector('[data-field-name="countNum6_1"]').value;
        this.input2 = this.template.querySelector('[data-field-name="countNum6_2"]').value;
        this.countNum6 = Number(this.input1) + Number(this.input2);
        //summary
        this.countNum24 = this.countNum6 + this.countNum15;
    }

    handleCount7() {
        this.input1 = this.template.querySelector('[data-field-name="countNum7_1"]').value;
        this.input2 = this.template.querySelector('[data-field-name="countNum7_2"]').value;
        this.countNum7 = Number(this.input1) + Number(this.input2);
        //summary
        this.countNum25 = this.countNum7 + this.countNum16;
    }

    handleCount8() {
        this.input1 = this.template.querySelector('[data-field-name="countNum8_1"]').value;
        this.input2 = this.template.querySelector('[data-field-name="countNum8_2"]').value;
        this.countNum8 = Number(this.input1) + Number(this.input2);
        //summary
        this.countNum26 = this.countNum8 + this.countNum17;
    }

    handleCount9() {
        this.input1 = this.template.querySelector('[data-field-name="countNum9_1"]').value;
        this.input2 = this.template.querySelector('[data-field-name="countNum9_2"]').value;
        this.countNum9 = Number(this.input1) + Number(this.input2);
        //summary
        this.countNum27 = this.countNum9 + this.countNum18;
    }

    handleCount11() {
        this.input1 = this.template.querySelector('[data-field-name="countNum11_1"]').value;
        this.input2 = this.template.querySelector('[data-field-name="countNum11_2"]').value;
        this.countNum11 = Number(this.input1) + Number(this.input2);
        this.countNum10_1 = this.input1;
        this.countNum10_2 = this.input2;
        this.countNum10 = Number(this.countNum10_1) + Number(this.countNum10_2);
        //summary
        this.countNum20 = this.countNum2 + this.countNum11;
        this.countNum19 = this.countNum20;
        this.countNum28 = this.countNum20;
    }

    handleCount12() {
        this.input1 = this.template.querySelector('[data-field-name="countNum12_1"]').value;
        this.input2 = this.template.querySelector('[data-field-name="countNum12_2"]').value;
        this.countNum12 = Number(this.input1) + Number(this.input2);
        //summary
        this.countNum21 = this.countNum3 + this.countNum12;
    }

    handleCount13() {
        this.input1 = this.template.querySelector('[data-field-name="countNum13_1"]').value;
        this.input2 = this.template.querySelector('[data-field-name="countNum13_2"]').value;
        this.countNum13 = Number(this.input1) + Number(this.input2);
        //summary
        this.countNum22 = this.countNum4 + this.countNum13;
    }

    handleCount14() {
        this.input1 = this.template.querySelector('[data-field-name="countNum14_1"]').value;
        this.input2 = this.template.querySelector('[data-field-name="countNum14_2"]').value;
        this.countNum14 = Number(this.input1) + Number(this.input2);
        //summary
        this.countNum23 = this.countNum5 + this.countNum14;
    }

    handleCount15() {
        this.input1 = this.template.querySelector('[data-field-name="countNum15_1"]').value;
        this.input2 = this.template.querySelector('[data-field-name="countNum15_2"]').value;
        this.countNum15 = Number(this.input1) + Number(this.input2);
        //summary
        this.countNum24 = this.countNum6 + this.countNum15;
    }

    handleCount16() {
        this.input1 = this.template.querySelector('[data-field-name="countNum16_1"]').value;
        this.input2 = this.template.querySelector('[data-field-name="countNum16_2"]').value;
        this.countNum16 = Number(this.input1) + Number(this.input2);
        //summary
        this.countNum25 = this.countNum7 + this.countNum16;
    }

    handleCount17() {
        this.input1 = this.template.querySelector('[data-field-name="countNum17_1"]').value;
        this.input2 = this.template.querySelector('[data-field-name="countNum17_2"]').value;
        this.countNum17 = Number(this.input1) + Number(this.input2);
        //summary
        this.countNum26 = this.countNum8 + this.countNum17;
    }

    handleCount18() {
        this.input1 = this.template.querySelector('[data-field-name="countNum18_1"]').value;
        this.input2 = this.template.querySelector('[data-field-name="countNum18_2"]').value;
        this.countNum18 = Number(this.input1) + Number(this.input2);
        //summary
        this.countNum27 = this.countNum9 + this.countNum18;
    }

}