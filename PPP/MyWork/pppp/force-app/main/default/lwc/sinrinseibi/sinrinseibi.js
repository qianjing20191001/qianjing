import { LightningElement,track } from 'lwc';

export default class Sinrinseibi extends LightningElement {
    @track input1 = 0;
    @track input2 = 0;
    @track input3 = 0;
    @track input1_1 = 0;
    @track input1_2 = 0;
    @track input1_3 = 0;
    @track input3_1 = 0;
    @track input3_2 = 0;
    @track input3_3 = 0;
    @track countNum1 = 0;
    @track countNum1_1 = 0;
    @track countNum1_2 = 0;
    @track countNum1_3 = 0;
    @track countNum2 = 0;
    @track countNum2_1 = 0;
    @track countNum2_2 = 0;
    @track countNum2_3 = 0;
    @track countNum3 = 0;
    @track countNum3_1 = 0;
    @track countNum3_2 = 0;
    @track countNum3_3 = 0;
    @track countNum4 = 0;
    @track countNum4_1 = 0;
    @track countNum4_2 = 0;
    @track countNum4_3 = 0;
    @track countNum4 = 0;
    @track countNum4_1 = 0;
    @track countNum4_2 = 0;
    @track countNum4_3 = 0;
    @track countNum5 = 0;
    @track countNum5_1 = 0;
    @track countNum5_2 = 0;
    @track countNum5_3 = 0;
    @track countNum6 = 0;
    @track countNum6_1 = 0;
    @track countNum6_2 = 0;
    @track countNum6_3 = 0;
    @track countNum7 = 0;
    @track countNum7_1 = 0;
    @track countNum7_2 = 0;
    @track countNum7_3 = 0;
    @track countNum8 = 0;
    @track countNum8_1 = 0;
    @track countNum8_2 = 0;
    @track countNum8_3 = 0;
    @track countNum9 = 0;
    @track countNum9_1 = 0;
    @track countNum9_2 = 0;
    @track countNum9_3 = 0;
    @track countNum10 = 0;
    @track countNum10_1 = 0;
    @track countNum10_2 = 0;
    @track countNum10_3 = 0;
    @track countNum11 = 0;
    @track countNum11_1 = 0;
    @track countNum11_2 = 0;
    @track countNum11_3 = 0;
    @track countNum12 = 0;
    @track countNum13 = 0;
    @track countNum14 = 0;

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
        this.handleCount10();
        this.handleCount11();
    }

    //事業費森林環境保全直接支援事業・全体(1,311,300,000)＝国庫補助金+県負担金+所有者(施行者)・施行主体等負担金
    handleCount1(){
        this.input1 = this.template.querySelector('[data-field-name="countNum1_1"]').value;
        this.input2 = this.template.querySelector('[data-field-name="countNum1_2"]').value;
        this.input3 = this.template.querySelector('[data-field-name="countNum1_3"]').value;
        this.countNum1 = Number(this.input1) + Number(this.input2) + Number(this.input3);
       
        
    }

    //事業費森林環境保全直接支援事業・うち県補助事業(1,270,300,000)＝国庫補助金+県負担金+所有者(施行者)・施行主体等負担金
    handleCount2(){
        this.input1 = this.template.querySelector('[data-field-name="countNum2_1"]').value;
        this.input2 = this.template.querySelector('[data-field-name="countNum2_2"]').value;
        this.input3 = this.template.querySelector('[data-field-name="countNum2_3"]').value;
        this.countNum2 = Number(this.input1) + Number(this.input2) + Number(this.input3);

    }
    //事業費森林環境保全直接支援事業・指導監督費(20,000,000)＝国庫補助金+県負担金+所有者(施行者)・施行主体等負担金
    handleCount3(){
        this.input1 = this.template.querySelector('[data-field-name="countNum3_1"]').value;
        this.input2 = this.template.querySelector('[data-field-name="countNum3_2"]').value;
        this.input3 = this.template.querySelector('[data-field-name="countNum3_3"]').value;
        this.countNum3 = Number(this.input1) + Number(this.input2) + Number(this.input3);
    
    }

    //事業費森林環境保全直接支援事業・合計＝国庫補助金+県負担金+所有者(施行者)・施行主体等負担金
    handleCount4(){
        this.input1_1 = this.template.querySelector('[data-field-name="countNum1_1"]').value;
        this.input1_2 = this.template.querySelector('[data-field-name="countNum1_2"]').value;
        this.input1_3 = this.template.querySelector('[data-field-name="countNum1_3"]').value;
        this.input3_1 = this.template.querySelector('[data-field-name="countNum3_1"]').value;
        this.input3_2 = this.template.querySelector('[data-field-name="countNum3_2"]').value;
        this.input3_3 = this.template.querySelector('[data-field-name="countNum3_3"]').value;
        this.countNum12 = this.template.querySelector('[data-field-name="countNum12"]').value;
        this.countNum4 = this.countNum4_1 + this.countNum4_2 + this.countNum4_3; 
        //合計＝全体+指導監督費
        this.countNum4 = this.countNum1 + this.countNum3;
        this.countNum4_1 = Number(this.input1_1) + Number(this.input3_1);
        this.countNum4_2 = Number(this.input1_2) + Number(this.input3_2);
        this.countNum4_3 = Number(this.input1_3) + Number(this.input3_3);
        this.countNum13 = Number(this.countNum12) + this.countNum3;
    }

    //環境林整備事業・公的森林整備(84,950,000)＝国庫補助金+県負担金+所有者(施行者)・施行主体等負担金
    handleCount5(){
        this.input1 = this.template.querySelector('[data-field-name="countNum5_1"]').value;
        this.input2 = this.template.querySelector('[data-field-name="countNum5_2"]').value;
        this.input3 = this.template.querySelector('[data-field-name="countNum5_3"]').value;
        this.countNum5 = Number(this.input1) + Number(this.input2) + Number(this.input3);


    }

     //環境林整備事業・被害森林整備(76,500,000)＝国庫補助金+県負担金+所有者(施行者)・施行主体等負担金
    handleCount6(){
        this.input1 = this.template.querySelector('[data-field-name="countNum6_1"]').value;
        this.input2 = this.template.querySelector('[data-field-name="countNum6_2"]').value;
        this.input3 = this.template.querySelector('[data-field-name="countNum6_3"]').value;
        this.countNum6 = Number(this.input1) + Number(this.input2) + Number(this.input3);

    }

     //環境林整備事業・全体(193,000,000)＝国庫補助金+県負担金+所有者(施行者)・施行主体等負担金
    handleCount7(){
        this.input1 = this.template.querySelector('[data-field-name="countNum7_1"]').value;
        this.input2 = this.template.querySelector('[data-field-name="countNum7_2"]').value;
        this.input3 = this.template.querySelector('[data-field-name="countNum7_3"]').value;
        this.countNum7 = Number(this.input1) + Number(this.input2) + Number(this.input3);


    }

    //環境林整備事業・うち県補助事業(193,000,000)＝国庫補助金+県負担金+所有者(施行者)・施行主体等負担金
    handleCount8(){
        this.input1 = this.template.querySelector('[data-field-name="countNum8_1"]').value;
        this.input2 = this.template.querySelector('[data-field-name="countNum8_2"]').value;
        this.input3 = this.template.querySelector('[data-field-name="countNum8_3"]').value;
        this.countNum8 = Number(this.input1) + Number(this.input2) + Number(this.input3);

    }

    //環境林整備事業・指導監督費(7,000,000)＝国庫補助金+県負担金+所有者(施行者)・施行主体等負担金
    handleCount9(){
        this.input1 = this.template.querySelector('[data-field-name="countNum9_1"]').value;
        this.input2 = this.template.querySelector('[data-field-name="countNum9_2"]').value;
        this.input3 = this.template.querySelector('[data-field-name="countNum9_3"]').value;
        this.countNum9 = Number(this.input1) + Number(this.input2) + Number(this.input3);


    }

    //事業費森林環境保全直接支援事業・合計＝国庫補助金+県負担金+所有者(施行者)・施行主体等負担金
    handleCount10(){
        this.input1_1 = this.template.querySelector('[data-field-name="countNum7_1"]').value;
        this.input1_2 = this.template.querySelector('[data-field-name="countNum7_2"]').value;
        this.input1_3 = this.template.querySelector('[data-field-name="countNum7_3"]').value;
        this.input3_1 = this.template.querySelector('[data-field-name="countNum9_1"]').value;
        this.input3_2 = this.template.querySelector('[data-field-name="countNum9_2"]').value;
        this.input3_3 = this.template.querySelector('[data-field-name="countNum9_3"]').value;
        this.countNum10 = this.countNum10_1 + this.countNum10_2 + this.countNum10_3; 

        //合計＝全体+指導監督費
        this.countNum10 = this.countNum7 + this.countNum9;
        this.countNum10_1 = Number(this.input1_1) + Number(this.input3_1);
        this.countNum10_2 = Number(this.input1_2) + Number(this.input3_2);
        this.countNum10_3 = Number(this.input1_3) + Number(this.input3_3);
    }

    //総計＝国庫補助金+県負担金+所有者(施行者)・施行主体等負担金
    handleCount11(){
        this.countNum11= this.countNum11_1 + this.countNum11_2 + this.countNum11_3; 
        //総計＝合計1+合計2
        this.countNum11 = this.countNum4 + this.countNum10;
        this.countNum11_1 = this.countNum4_1 + this.countNum10_1;
        this.countNum11_2 = this.countNum4_2 + this.countNum10_2;
        this.countNum11_3 = this.countNum4_3 + this.countNum10_3;
        this.countNum14 = this.countNum13 + this.countNum10;
    }
}