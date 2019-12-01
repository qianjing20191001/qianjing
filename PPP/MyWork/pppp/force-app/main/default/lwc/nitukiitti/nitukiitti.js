import { LightningElement,track } from 'lwc';

export default class Nitukiitti extends LightningElement {
    
    @track input1 = 0;
    @track input2 = 0;
    @track countNum1 = 0;
    @track countNum1_1 = 0;
    @track countNum1_2 = 0;
    @track countNum1 = 0;
    @track countNum2_1 = 0;
    @track countNum2_2 = 0;
    @track countNum2 = 0;
    @track countNum3_1 = 0;
    @track countNum3_2 = 0;
    @track countNum3 = 0;
    @track countNum4_1 = 0;
    @track countNum4_2 = 0;
    @track countNum4 = 0;
    @track countNum5_1 = 0;
    @track countNum5_2 = 0;
    @track countNum5 = 0;
    @track countNum6_1 = 0;
    @track countNum6_2 = 0;
    @track countNum6 = 0;
    @track countNum7_1 = 0;
    @track countNum7_2 = 0;
    @track countNum7 = 0;
    @track countNum8_1 = 0;
    @track countNum8_2 = 0;
    @track countNum8 = 0;
    @track countNum9_1 = 0;
    @track countNum9_2 = 0;
    @track countNum9 = 0;
    @track countNum10_1 = 0;
    @track countNum10 = 0;
    @track countNum11_1 = 0;
    @track countNum11 = 0;
    @track countNum12_1 = 0;
    @track countNum12 = 0;

    renderedCallback(){
        this.handleCount1();
        this.handleCount2();
        this.handleCount3();
        this.handleCount4();
        this.handleCount5();
        this.handleCount6();
        this.handleCount7();
        this.handleCount8();
        this.handleCount9();
    }

    //全体計画・事業量の合計(列の計算)
    handleCount1(){
        this.input1 = this.template.querySelector('[data-field-name="countNum1_1"]').value;
        this.input2 = this.template.querySelector('[data-field-name="countNum1_2"]').value;
        this.countNum1 = Number(this.input1) + Number(this.input2);
    }

    //全体計画・事業費の合計(列の計算)
    handleCount2(){
        this.input1 = this.template.querySelector('[data-field-name="countNum2_1"]').value;
        this.input2 = this.template.querySelector('[data-field-name="countNum2_2"]').value;
        this.countNum2 = Number(this.input1) + Number(this.input2);
    }

    //前年までの執行状況・事業量の合計(列の計算)
    handleCount3(){
        this.input1 = this.template.querySelector('[data-field-name="countNum3_1"]').value;
        this.input2 = this.template.querySelector('[data-field-name="countNum3_2"]').value;
        this.countNum3 = Number(this.input1) + Number(this.input2);
    }

    //前年までの執行状況・事業費の合計(列の計算)
    handleCount4(){
        this.input1 = this.template.querySelector('[data-field-name="countNum4_1"]').value;
        this.input2 = this.template.querySelector('[data-field-name="countNum4_2"]').value;
        this.countNum4 = Number(this.input1) + Number(this.input2);
    }

    //当該年度・事業量の合計(列の計算)
    handleCount5(){
        this.input1 = this.template.querySelector('[data-field-name="countNum5_1"]').value;
        this.input2 = this.template.querySelector('[data-field-name="countNum5_2"]').value;
        this.countNum10_1 = this.template.querySelector('[data-field-name="countNum10_1"]').value;
        this.countNum5 = Number(this.input1) + Number(this.input2);
        //総計
        this.countNum10 = Number(this.countNum10_1) + this.countNum5;
    }

    //当該年度・事業費の合計(列の計算)
    handleCount6(){
        this.input1 = this.template.querySelector('[data-field-name="countNum6_1"]').value;
        this.input2 = this.template.querySelector('[data-field-name="countNum6_2"]').value;
        this.countNum11_1 = this.template.querySelector('[data-field-name="countNum11_1"]').value;
        this.countNum6 = Number(this.input1) + Number(this.input2);
        //総計
        this.countNum11 = Number(this.countNum11_1) + this.countNum6;
        
    }

    //当該年度・国庫補助金の合計(列の計算)
    handleCount7(){
        this.input1 = this.template.querySelector('[data-field-name="countNum7_1"]').value;
        this.input2 = this.template.querySelector('[data-field-name="countNum7_2"]').value;
        this.countNum12_1 = this.template.querySelector('[data-field-name="countNum12_1"]').value;
        this.countNum7 = Number(this.input1) + Number(this.input2);
        //総計
        this.countNum12 = Number(this.countNum12_1) + this.countNum7;
        
    }

    //累計・事業量の合計(前年までの執行状況+当該年度)
    handleCount8(){
        this.countNum3_1 = this.template.querySelector('[data-field-name="countNum3_1"]').value;
        this.countNum5_1 = this.template.querySelector('[data-field-name="countNum5_1"]').value;
        this.countNum3_2 = this.template.querySelector('[data-field-name="countNum3_2"]').value;
        this.countNum5_2 = this.template.querySelector('[data-field-name="countNum5_2"]').value;
        this.countNum8 = Number(this.countNum8_1) + Number(this.countNum8_2);
        this.countNum8_1 = Number(this.countNum3_1) + Number(this.countNum5_1);
        this.countNum8_2 = Number(this.countNum3_2) + Number(this.countNum5_2);
        this.countNum8 = this.countNum3 + this.countNum5;
    }

    //累計・事業費の合計(前年までの執行状況+当該年度)
    handleCount9(){
        this.countNum4_1 = this.template.querySelector('[data-field-name="countNum4_1"]').value;
        this.countNum6_1 = this.template.querySelector('[data-field-name="countNum6_1"]').value;
        this.countNum4_2 = this.template.querySelector('[data-field-name="countNum4_2"]').value;
        this.countNum6_2 = this.template.querySelector('[data-field-name="countNum6_2"]').value;
        this.countNum9_1 = Number(this.countNum4_1) + Number(this.countNum6_1);
        this.countNum9_2 = Number(this.countNum4_2) + Number(this.countNum6_2);
        this.countNum9 = Number(this.countNum9_1) + Number(this.countNum9_2);
        this.countNum9 = this.countNum4 + this.countNum6;
    }

}