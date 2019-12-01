import { LightningElement, track } from 'lwc';

export default class SinnrinnSeibiJigyoRinndou extends LightningElement {
    @track input1 = 0;
    @track input2 = 0;
    @track input3 = 0;
    @track input4 = 0;
    //(項)地方創生基盤整備事業推進費 第１行1~4列の数値
    @track countNum1 = 0;
    @track countNum2 = 0;
    @track countNum3 = 0;
    @track countNum4 = 0;

    // //命名規則 :[列数]_[行数] ,行数は実際のROW12から計算する。
    //     //項)地方創生基盤整備事業推進費 ・事業費
    // @track countNum1_3 = 0;
    // @track countNum1_6 = 0;

    // // (目)地方創生整備推進交付金
    //   // 第１列
    // @track countNum1_7 = 0;
    // @track countNum1_8 = 0;
    // @track countNum1_9 = 0;

    //  // 第２列
    // @track countNum2_3 = 0;
    // @track countNum2_6 = 0;
    // @track countNum2_7 = 0;
    // @track countNum2_8 = 0;
    // @track countNum2_9 = 0;

    // // 第3列
    // @track countNum3_3 = 0;
    // @track countNum3_6 = 0;
    // @track countNum3_7 = 0;
    // @track countNum3_8 = 0;
    // @track countNum3_9 = 0;

    // // 第4列
    // @track countNum4_3 = 0;
    // @track countNum4_6 = 0;
    // @track countNum4_7 = 0;
    // @track countNum4_8 = 0;
    // @track countNum4_9 = 0;


    // //(項)地方創生基盤整備事業推進費
    //  // 第１列
    // @track countNum1_10 =0;
    // @track countNum1_11 =0;
    //  // 第２列
    // @track countNum2_10 =0;
    // @track countNum2_11 =0;
    // // 第２列
    // @track countNum3_10 =0;
    // @track countNum3_11 =0;
    // // 第4列
    // @track countNum4_10 =0;
    // @track countNum4_11 =0;

    //(項)森林整備事業費
    @track countNum5 = 0;
    @track countNum6 = 0;
    @track countNum7 = 0;
    @track countNum8 = 0;

    //(項)地域再生推進費
    @track countNum9 = 0;
    @track countNum10 = 0;
    @track countNum11 = 0;
    @track countNum12 = 0;

    //(項)森林整備事業費
    @track countNum13 = 0;
    @track countNum14 = 0;
    @track countNum15 = 0;
    @track countNum16 = 0;

    //合計--事業費
    @track countNum17_1 = 0;
    @track countNum17_2 = 0;
    @track countNum17_3 = 0;

    //合計--協議額
    @track countNum18_1 = 0;
    @track countNum18_2 = 0;
    @track countNum18_3 = 0;

    //合計--精算額
    @track countNum19_1 = 0;
    @track countNum19_2 = 0;
    @track countNum19_3 = 0;


    //合計--指導監督費
    @track countNum20_1 = 0;
    @track countNum20_2 = 0;
    @track countNum20_3 = 0;

    isFirst = true;

    renderedCallback() {
        if(this.isFirst){
        //(項)地方創生基盤整備事業推進費
        this.handleCount1();
        this.handleCount2();
        this.handleCount3();
        this.handleCount4();

        //(項)森林整備事業費
        this.handleCount5();
        this.handleCount6();
        this.handleCount7();
        this.handleCount8();

        //(項)地域再生推進費
        this.handleCount9();
        this.handleCount10();
        this.handleCount11();
        this.handleCount12();

        //(項)森林整備事業費
        this.handleCount13();
        this.handleCount14();
        this.handleCount15();
        this.handleCount16();
        }
        this.isFirst = false;
    }

    //(項)地方創生基盤整備事業推進費--事業費
    handleCount1() {
        //(目細)指導監督交付金
        this.input1 = this.template.querySelector('[data-field-name="countNum1_1"]').value;
        this.input2 = this.template.querySelector('[data-field-name="countNum1_2"]').value;
        this.countNum1_3 = Number(this.input1) + Number(this.input2);
        //(目細))地方創生道整備推進交付金
        this.input3 = this.template.querySelector('[data-field-name="countNum1_4"]').value;
        this.input4 = this.template.querySelector('[data-field-name="countNum1_5"]').value;
        this.countNum1_6 = Number(this.input3) + Number(this.input4);
        // (目)地方創生整備推進交付金
        this.countNum1_7 = Number(this.input1) + Number(this.input3);
        this.countNum1_8 = Number(this.input2) + Number(this.input4);
        this.countNum1_9 = Number(this.countNum1_7) + Number(this.countNum1_8);
        //(項)地方創生基盤整備事業推進費
        this.countNum1_10 = this.countNum1_7;  // 将来変わるかも
        this.countNum1_11 = this.countNum1_8;  // 将来変わるかも
        this.countNum1 = this.countNum1_10 + this.countNum1_11;
        //合計--事業費
        this.sum1();
        this.sum2();
        this.sum3();
    }

    //(項)地方創生基盤整備事業推進費--指導監督費--協議額
    handleCount2() {
        //(目細)指導監督交付金
        this.input1 = this.template.querySelector('[data-field-name="countNum2_1"]').value;
        this.input2 = this.template.querySelector('[data-field-name="countNum2_2"]').value;
        this.countNum2_3 = Number(this.input1) + Number(this.input2);
        //(目細))地方創生道整備推進交付金
        this.input3 = this.template.querySelector('[data-field-name="countNum2_4"]').value;
        this.input4 = this.template.querySelector('[data-field-name="countNum2_5"]').value;
        this.countNum2_6 = Number(this.input3) + Number(this.input4);
        // (目)地方創生整備推進交付金
        this.countNum2_7 = Number(this.input1) + Number(this.input3);
        this.countNum2_8 = Number(this.input2) + Number(this.input4);
        this.countNum2_9 = Number(this.countNum2_7) + Number(this.countNum2_8);
        //(項)地方創生基盤整備事業推進費
        this.countNum2_10 = this.countNum2_7;  // 将来変わるかも
        this.countNum2_11 = this.countNum2_8;  // 将来変わるかも
        this.countNum2 = this.countNum2_10 + this.countNum2_11;

        // //合計--協議額
        this.sum1();
        this.sum2();
        this.sum3();
    }

    //(項)地方創生基盤整備事業推進費--指導監督費--精算額
    handleCount3() {
        //(目細)指導監督交付金
        this.input1 = this.template.querySelector('[data-field-name="countNum3_1"]').value;
        this.input2 = this.template.querySelector('[data-field-name="countNum3_2"]').value;
        this.countNum3_3 = Number(this.input1) + Number(this.input2);
        //(目細))地方創生道整備推進交付金
        this.input3 = this.template.querySelector('[data-field-name="countNum3_4"]').value;
        this.input4 = this.template.querySelector('[data-field-name="countNum3_5"]').value;
        this.countNum3_6 = Number(this.input3) + Number(this.input4);
        // (目)地方創生整備推進交付金
        this.countNum3_7 = Number(this.input1) + Number(this.input3);
        this.countNum3_8 = Number(this.input2) + Number(this.input4);
        this.countNum3_9 = Number(this.countNum3_7) + Number(this.countNum3_8);
        //(項)地方創生基盤整備事業推進費
        this.countNum3_10 = this.countNum3_7;  // 将来変わるかも
        this.countNum3_11 = this.countNum3_8;  // 将来変わるかも
        this.countNum3 = this.countNum3_10 + this.countNum3_11;

        // //合計--精算額
        this.sum1();
        this.sum2();
        this.sum3();
    }

    //(項)地方創生基盤整備事業推進費--指導監督費協議額のうち 国庫金相当額(うち食糧費)
    handleCount4() {
        //(目細)指導監督交付金
        this.input1 = this.template.querySelector('[data-field-name="countNum4_1"]').value;
        this.input2 = this.template.querySelector('[data-field-name="countNum4_2"]').value;
        this.countNum4_3 = Number(this.input1) + Number(this.input2);
        //(目細))地方創生道整備推進交付金
        this.input3 = this.template.querySelector('[data-field-name="countNum4_4"]').value;
        this.input4 = this.template.querySelector('[data-field-name="countNum4_5"]').value;
        this.countNum4_6 = Number(this.input3) + Number(this.input4);
        // (目)地方創生整備推進交付金
        this.countNum4_7 = Number(this.input1) + Number(this.input3);
        this.countNum4_8 = Number(this.input2) + Number(this.input4);
        this.countNum4_9 = Number(this.countNum4_7) + Number(this.countNum4_8);
        //(項)地方創生基盤整備事業推進費
        this.countNum4_10 = this.countNum4_7;  // 将来変わるかも
        this.countNum4_11 = this.countNum4_8;  // 将来変わるかも
        this.countNum4 = this.countNum4_10 + this.countNum4_11;

        // //合計--指導監督費
        this.sum1();
        this.sum2();
        this.sum3();
    }


    //(項)森林整備事業費--事業費
    handleCount5() {
        //(目細々)林業専用道整備事業
        this.input1 = this.template.querySelector('[data-field-name="countNum5_1"]').value;
        this.input2 = this.template.querySelector('[data-field-name="countNum5_2"]').value;

        this.countNum5_3 = Number(this.input1) + Number(this.input2);

        this.countNum5_4 = Number(this.input1);// 将来変わるかも  (目細)林業専用道整備事業費補助の下から第１行
        this.countNum5_5 = Number(this.input2);// 将来変わるかも  (目細)林業専用道整備事業費補助の下から第２行
        // (目細)林業専用道整備事業費補助
        this.countNum5_6 = Number(this.countNum5_4) + Number(this.countNum5_5);
        // (目)森林環境保全整備事業費補助
        this.countNum5_7 = this.countNum5_4 // 将来変わるかも   (目)森林環境保全整備事業費補助 の第３行 =  各「(目細)林業専用道整備事業費補助の第３行」相加之和
        this.countNum5_8 = this.countNum5_5 // 将来変わるかも   (目)森林環境保全整備事業費補助 の第2行 =  各「(目細)林業専用道整備事業費補助の第2行」相加之和
        this.countNum5_9 = this.countNum5_7 + this.countNum5_8;

        //(項)森林整備事業費
        this.countNum5_10 = this.countNum5_7; // 将来変わるかも ,2.3...项相加
        this.countNum5_11 = this.countNum5_8; // 将来変わるかも
        this.countNum5 = this.countNum5_10 + this.countNum5_11;

        //合計--事業費
        this.sum1();
        this.sum2();
        this.sum3();
    }

    //(項)森林整備事業費--指導監督費・協議額
    handleCount6() {
        //(目細々)林業専用道整備事業
        this.input1 = this.template.querySelector('[data-field-name="countNum6_1"]').value;
        this.input2 = this.template.querySelector('[data-field-name="countNum6_2"]').value;

        this.countNum6_3 = Number(this.input1) + Number(this.input2);

        this.countNum6_4 = Number(this.input1);// 将来変わるかも  (目細)林業専用道整備事業費補助の下から第１行
        this.countNum6_5 = Number(this.input2);// 将来変わるかも  (目細)林業専用道整備事業費補助の下から第２行
        // (目細)林業専用道整備事業費補助
        this.countNum6_6 = Number(this.countNum6_4) + Number(this.countNum6_5);
        // (目)森林環境保全整備事業費補助
        this.countNum6_7 = this.countNum6_4 // 将来変わるかも   (目)森林環境保全整備事業費補助 の第３行 =  各「(目細)林業専用道整備事業費補助の第３行」相加之和
        this.countNum6_8 = this.countNum6_5 // 将来変わるかも   (目)森林環境保全整備事業費補助 の第2行 =  各「(目細)林業専用道整備事業費補助の第2行」相加之和
        this.countNum6_9 = this.countNum6_7 + this.countNum6_8;

        //(項)森林整備事業費
        this.countNum6_10 = this.countNum6_7; // 将来変わるかも ,2.3...项相加
        this.countNum6_11 = this.countNum6_8; // 将来変わるかも
        this.countNum6 = this.countNum6_10 + this.countNum6_11;

        // //合計--協議額
        this.sum1();
        this.sum2();
        this.sum3();
    }
    //(項)森林整備事業費--指導監督費・精算額
    handleCount7() {
        //(目細々)林業専用道整備事業
        this.input1 = this.template.querySelector('[data-field-name="countNum7_1"]').value;
        this.input2 = this.template.querySelector('[data-field-name="countNum7_2"]').value;

        this.countNum7_3 = Number(this.input1) + Number(this.input2);

        this.countNum7_4 = Number(this.input1);// 将来変わるかも  (目細)林業専用道整備事業費補助の下から第１行
        this.countNum7_5 = Number(this.input2);// 将来変わるかも  (目細)林業専用道整備事業費補助の下から第２行
        // (目細)林業専用道整備事業費補助
        this.countNum7_6 = Number(this.countNum7_4) + Number(this.countNum7_5);
        // (目)森林環境保全整備事業費補助
        this.countNum7_7 = this.countNum7_4 // 将来変わるかも   (目)森林環境保全整備事業費補助 の第３行 =  各「(目細)林業専用道整備事業費補助の第３行」相加之和
        this.countNum7_8 = this.countNum7_5 // 将来変わるかも   (目)森林環境保全整備事業費補助 の第2行 =  各「(目細)林業専用道整備事業費補助の第2行」相加之和
        this.countNum7_9 = this.countNum7_7 + this.countNum7_8;

        //(項)森林整備事業費
        this.countNum7_10 = this.countNum7_7; // 将来変わるかも ,2.3...项相加
        this.countNum7_11 = this.countNum7_8; // 将来変わるかも
        this.countNum7 = this.countNum7_10 + this.countNum7_11;

        // //合計--精算額
        this.sum1();
        this.sum2();
        this.sum3();
    }

    //(項)森林整備事業費--指導監督費協議額のうち 国庫金相当額(うち食糧費)
    handleCount8() {
        //(目細々)林業専用道整備事業
        this.input1 = this.template.querySelector('[data-field-name="countNum8_1"]').value;
        this.input2 = this.template.querySelector('[data-field-name="countNum8_2"]').value;

        this.countNum8_3 = Number(this.input1) + Number(this.input2);

        this.countNum8_4 = Number(this.input1);// 将来変わるかも  (目細)林業専用道整備事業費補助の下から第１行
        this.countNum8_5 = Number(this.input2);// 将来変わるかも  (目細)林業専用道整備事業費補助の下から第２行
        // (目細)林業専用道整備事業費補助
        this.countNum8_6 = Number(this.countNum8_4) + Number(this.countNum8_5);
        // (目)森林環境保全整備事業費補助
        this.countNum8_7 = this.countNum8_4 // 将来変わるかも   (目)森林環境保全整備事業費補助 の第３行 =  各「(目細)林業専用道整備事業費補助の第３行」相加之和
        this.countNum8_8 = this.countNum8_5 // 将来変わるかも   (目)森林環境保全整備事業費補助 の第2行 =  各「(目細)林業専用道整備事業費補助の第2行」相加之和
        this.countNum8_9 = this.countNum8_7 + this.countNum8_8;

        //(項)森林整備事業費
        this.countNum8_10 = this.countNum8_7;
        this.countNum8_11 = this.countNum8_8; // 将来変わるかも// 将来変わるかも ,2.3...项相加
        this.countNum8 = this.countNum8_10 + this.countNum8_11;

        // //合計--指導監督費
        this.sum1();
        this.sum2();
        this.sum3();
    }
    //(項)地域再生推進費--事業費
    handleCount9() {
        //(目細)指導監督交付金
        this.input1 = this.template.querySelector('[data-field-name="countNum9_1"]').value;
        this.input2 = this.template.querySelector('[data-field-name="countNum9_2"]').value;
        // (目)地域再生基盤強化交付金
        this.countNum9_3 = Number(this.input1) + Number(this.input2);
        //(項)地域再生推進費
        this.countNum9 = Number(this.countNum9_3) // 将来変わるかも ,2.3...项相加

        //合計--事業費
        this.sum1();
        this.sum2();

    }

    //(項)地域再生推進費--協議額
    handleCount10() {
        //(目細)指導監督交付金
        this.input1 = this.template.querySelector('[data-field-name="countNum10_1"]').value;
        this.input2 = this.template.querySelector('[data-field-name="countNum10_2"]').value;
        // (目)地域再生基盤強化交付金
        this.countNum10_3 = Number(this.input1) + Number(this.input2);
        //(項)地域再生推進費
        this.countNum10 = Number(this.countNum10_3) // 将来変わるかも ,2.3...项相加

        // //合計--協議額
        this.sum1();
        this.sum2();

    }

    //(項)地域再生推進費--精算額
    handleCount11() {
        //(目細)指導監督交付金
        this.input1 = this.template.querySelector('[data-field-name="countNum11_1"]').value;
        this.input2 = this.template.querySelector('[data-field-name="countNum11_2"]').value;
        // (目)地域再生基盤強化交付金
        this.countNum11_3 = Number(this.input1) + Number(this.input2);
        //(項)地域再生推進費
        this.countNum11 = Number(this.countNum11_3) // 将来変わるかも ,2.3...项相加

        // //合計--精算額
        this.sum1();
        this.sum2();

    }

    //(項)地域再生推進費--指導監督費協議額のうち 国庫金相当額(うち食糧費)
    handleCount12() {
        //(目細)指導監督交付金
        this.input1 = this.template.querySelector('[data-field-name="countNum12_1"]').value;
        this.input2 = this.template.querySelector('[data-field-name="countNum12_2"]').value;
        // (目)地域再生基盤強化交付金
        this.countNum12_3 = Number(this.input1) + Number(this.input2);
        //(項)地域再生推進費
        this.countNum12 = Number(this.countNum12_3) // 将来変わるかも ,2.3...项相加

        // //合計--指導監督費
        // this.sum1();
        this.sum2();
    }


    // (項)森林整備事業費  
    handleCount13() {
        //(目細々)林業専用道整備事業
        this.input1 = this.template.querySelector('[data-field-name="countNum13_1"]').value;
        //(目細)林業専用道整備事業費補助
        this.countNum13_2 = Number(this.input1) // 将来変わるかも ,2.3...项相加
        //(目)森林環境保全整備事業費補助
        this.countNum13_3 = Number(this.countNum13_2) // 将来変わるかも ,2.3...项相加
        //(項)森林整備事業費
        this.countNum13 = Number(this.countNum13_3) // 将来変わるかも ,2.3...项相加

        //合計--事業費
        this.sum1();
        this.sum2();
    }

    // (項)森林整備事業費  
    handleCount14() {
        //(目細々)林業専用道整備事業
        this.input1 = this.template.querySelector('[data-field-name="countNum14_1"]').value;
        //(目細)林業専用道整備事業費補助
        this.countNum14_2 = Number(this.input1) // 将来変わるかも ,2.3...项相加
        //(目)森林環境保全整備事業費補助
        this.countNum14_3 = Number(this.countNum14_2) // 将来変わるかも ,2.3...项相加
        //(項)森林整備事業費
        this.countNum14 = Number(this.countNum14_3) // 将来変わるかも ,2.3...项相加

        //合計--協議額
        this.sum1();
        this.sum2();
    }

    // (項)森林整備事業費  
    handleCount15() {
        //(目細々)林業専用道整備事業
        this.input1 = this.template.querySelector('[data-field-name="countNum15_1"]').value;
        //(目細)林業専用道整備事業費補助
        this.countNum15_2 = Number(this.input1) // 将来変わるかも ,2.3...项相加
        //(目)森林環境保全整備事業費補助
        this.countNum15_3 = Number(this.countNum15_2) // 将来変わるかも ,2.3...项相加
        //(項)森林整備事業費
        this.countNum15 = Number(this.countNum15_3) // 将来変わるかも ,2.3...项相加

        //合計--精算額
        this.sum1();
        this.sum2();
    }

    // (項)森林整備事業費  
    handleCount16() {
        //(目細々)林業専用道整備事業
        this.input1 = this.template.querySelector('[data-field-name="countNum16_1"]').value;
        //(目細)林業専用道整備事業費補助
        this.countNum16_2 = Number(this.input1) // 将来変わるかも ,2.3...项相加
        //(目)森林環境保全整備事業費補助
        this.countNum16_3 = Number(this.countNum16_2) // 将来変わるかも ,2.3...项相加
        //(項)森林整備事業費
        this.countNum16 = Number(this.countNum16_3) // 将来変わるかも ,2.3...项相加

        //合計--指導監督費
        this.sum1();
        this.sum2();
    }


    //合計第１行 
    sum1() {
        this.countNum17_1 = Number(this.countNum1) + Number(this.countNum5) + Number(this.countNum9) + Number(this.countNum13);
        this.countNum18_1 = Number(this.countNum2) + Number(this.countNum6) + Number(this.countNum10) + Number(this.countNum14);
        this.countNum19_1 = Number(this.countNum3) + Number(this.countNum7) + Number(this.countNum11) + Number(this.countNum15);
        this.countNum20_1 = Number(this.countNum4) + Number(this.countNum8) + Number(this.countNum12) + Number(this.countNum16);
    }

    //合計第2行 
    sum2() {
        this.countNum17_2 = Number(this.countNum1_11) + Number(this.countNum5_11) + Number(this.countNum9_3) + Number(this.countNum13_3);
        this.countNum18_2 = Number(this.countNum2_11) + Number(this.countNum6_11) + Number(this.countNum10_3) + Number(this.countNum14_3);
        this.countNum19_2 = Number(this.countNum3_11) + Number(this.countNum7_11) + Number(this.countNum11_3) + Number(this.countNum15_3);
        this.countNum20_2 = Number(this.countNum4_11) + Number(this.countNum8_11) + Number(this.countNum12_3) + Number(this.countNum16_3);
    }

    //合計第3行 
    sum3() {
        this.countNum17_3 = Number(this.countNum1_10) + Number(this.countNum5_10);// 将来変わるかも 规律不准
        this.countNum18_3 = Number(this.countNum2_10) + Number(this.countNum6_10);// 将来変わるかも 规律不准
        this.countNum19_3 = Number(this.countNum3_10) + Number(this.countNum7_10);// 将来変わるかも 规律不准
        this.countNum20_3 = Number(this.countNum4_10) + Number(this.countNum8_10);// 将来変わるかも 规律不准
    }



}