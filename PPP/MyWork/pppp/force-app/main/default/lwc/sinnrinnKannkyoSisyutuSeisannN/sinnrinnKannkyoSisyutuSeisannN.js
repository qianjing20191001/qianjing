import { LightningElement, track } from "lwc";

export default class SinnrinnKannkyoSisyutuSeisannN extends LightningElement {
  //予算額
  @track input1 = 0;
  @track input2 = 0;

  @track input3 = 0;
  @track input4 = 0;

  @track input9 = 0;
  @track input10 = 0;

  // 精算額
  @track input5 = 0;
  @track input6 = 0;

  @track input7 = 0;
  @track input8 = 0;
  
  @track input11 = 0;
  @track input12 = 0;

  //予算額
  @track countNum1 = 0;
  @track countNum2 = 0;
  //精算額
  @track countNum3 = 0;
  @track countNum4 = 0;

  //差引増△減額
  @track countNum5 = 0;
  @track countNum6 = 0;

  //  市町村営等補助金
  @track countNum7 = 0;
  @track countNum8 = 0;
  @track countNum9 = 0;
  //指導監督費--人 件 費
  @track countNum21 = 0;
  @track countNum22 = 0;
  @track countNum23 = 0;

  //指導監督費--旅    費
  @track countNum24 = 0;
  @track countNum25 = 0;
  @track countNum26 = 0;

  //指導監督費--庁    費
  @track countNum27 = 0;
  @track countNum28 = 0;
  @track countNum29 = 0;

  @track countNum5_1 = 0;
  @track countNum5_2 = 0;
  @track countNum6_1 = 0;
  @track countNum6_2 = 0;
  @track countNum23_1 = 0;
  @track countNum23_2 = 0;
  @track countNum26_1 = 0;
  @track countNum26_2 = 0;
  @track countNum29_1 = 0;
  @track countNum29_2 = 0;

  //計1--予算額
  @track smallSum1_1 = 0;
  @track smallSum2_1 = 0;
  @track smallSum3_1 = 0;

  @track smallSum4_1 = 0;
  @track smallSum5_1 = 0;
  @track smallSum6_1 = 0;
  //計1--精算額
  @track smallSum1_2 = 0;
  @track smallSum2_2 = 0;
  @track smallSum3_2 = 0;

  @track smallSum4_2 = 0;
  @track smallSum5_2 = 0;
  @track smallSum6_2 = 0;
  //計1--差引増△減額
  @track smallSum1_3 = 0;
  @track smallSum2_3 = 0;
  @track smallSum3_3 = 0;

  @track smallSum4_3 = 0;
  @track smallSum5_3 = 0;
  @track smallSum6_3 = 0;

  isFirst = true;
  renderedCallback() {
    // initialize component
    if (this.isFirst) {
      // 林業専用道整備以外に係るもの
      this.handleCount1();
      //市町村営等補助金
      this.handleCount2();

      //指導監督費
      this.handleCount3();
    }
    this.isFirst = false;
  }

  handleCount1() {
    //林業専用道整備以外に係るもの--予算額
    this.input1 = this.template.querySelector(
      '[data-field-name="countNum1_1"]'
    ).value;
    this.countNum1_1 = this.input1 ;
    this.input2 = this.template.querySelector(
      '[data-field-name="countNum1_2"]'
    ).value;
    this.countNum1_2 = this.input2 ;
    this.countNum1 = Number(this.input1) + Number(this.input2);

    //林業専用道整備以外に係るもののうち、本工事費等--予算額
    this.input3 = this.template.querySelector(
      '[data-field-name="countNum2_1"]'
    ).value;
    //this.countNum2_1 = this.input3;
    this.input4 = this.template.querySelector(
      '[data-field-name="countNum2_2"]'
    ).value;
      //  this.countNum2_2 = this.input4;
    this.countNum2 = Number(this.input3) + Number(this.input4);
    //計 県営事業費--予算額
    this.smallSum1_1 = Number(this.countNum1) + Number(this.countNum2);

    //this.smallSum2_1 = Number(this.countNum1_1) + Number(this.countNum1_2);
    // eslint-disable-next-line no-console
    console.log("this.smallSum2_1" + this.smallSum2_1);
    this.smallSum2_1 = Number(this.input1) + Number(this.input3);
    this.smallSum3_1 = Number(this.input2) + Number(this.input4);
    //this.smallSum3_1 = Number(this.countNum1_2) + Number(this.countNum2_2);


    //林業専用道整備以外に係るもの--精算額
    this.input5 = this.template.querySelector(
      '[data-field-name="countNum3_1"]'
    ).value;
    this.countNum3_1 = this.input5;
    this.input6 = this.template.querySelector(
      '[data-field-name="countNum3_2"]'
    ).value;
    this.countNum3_2 = this.input6;

    this.countNum3 = Number(this.input5) + Number(this.input6);

    //林業専用道整備以外に係るもののうち、本工事費等--精算額
    this.input7 = this.template.querySelector(
      '[data-field-name="countNum4_1"]'
    ).value;
    //this.countNum4_1 = this.input7;
    this.input8 = this.template.querySelector(
      '[data-field-name="countNum4_2"]'
    ).value;
       // this.countNum4_2 = this.input8;
    this.countNum4 = Number(this.input7) + Number(this.input8);
    //計 県営事業費--精算額
    this.smallSum1_2 = Number(this.countNum3) + Number(this.countNum4);
   this.smallSum2_2 = Number(this.input5) + Number(this.input7);
   //this.smallSum2_2 = Number(this.countNum3_1) + Number(this.countNum4_1);
    this.smallSum3_2 = Number(this.input6) + Number(this.input8);
    //this.smallSum3_2 = Number(this.countNum3_2) + Number(this.countNum4_2);

    //差引増△減額 ROW1
    if (Number(this.countNum1) > Number(this.countNum3)) {
      this.fugou1 = "△";
      this.countNum5 = Number(this.countNum1) - Number(this.countNum3);
    } else {
      this.fugou1 = "";
      this.countNum5 = Number(this.countNum3) - Number(this.countNum1);
    }

    //差引増△減額 ROW2
    if (Number(this.input1) > Number(this.input5)) {
      this.fugou2 = "△";
      this.countNum5_1 = Number(this.input1) - Number(this.input5);
    } else {
      this.fugou2 = "";
      this.countNum5_1 = Number(this.input5) - Number(this.input1);
    }

    //差引増△減額 ROW3
    if (Number(this.input2) > Number(this.input6)) {
      this.fugou3 = "△";
      this.countNum5_2 = Number(this.input2) - Number(this.input6);
    } else {
      this.fugou3 = "";
      this.countNum5_2 = Number(this.input6) - Number(this.input2);
    }

    //差引増△減額 ROW4
    if (Number(this.countNum2) > Number(this.countNum4)) {
      this.fugou4 = "△";
      this.countNum6 = Number(this.countNum2) - Number(this.countNum4);
    } else {
      this.fugou4 = "";
      this.countNum6 = Number(this.countNum4) - Number(this.countNum2);
    }

    //差引増△減額 ROW5
    if (Number(this.input3) > Number(this.input7)) {
      this.fugou5 = "△";
      this.countNum6_1 = Number(this.input3) - Number(this.input7);
    } else {
      this.fugou5 = "";
      this.countNum6_1 = Number(this.input7) - Number(this.input3);
    }

    //差引増△減額 ROW6
    if (Number(this.input4) > Number(this.input8)) {
      this.fugou6 = "△";
      this.countNum6_2 = Number(this.input4) - Number(this.input8);
    } else {
      this.fugou6 = "";
      this.countNum6_2 = Number(this.input8) - Number(this.input4);
    }

    //計 県営事業費--差引増△減額 ROW7
    if (Number(this.smallSum1_1) > Number(this.smallSum1_2)) {
      this.fugou7 = "△";
      this.smallSum1_3 = Number(this.smallSum1_1) - Number(this.smallSum1_2);
    } else {
      this.fugou7 = "";
      this.smallSum1_3 = Number(this.smallSum1_2) - Number(this.smallSum1_1);
    }

    //計 県営事業費--差引増△減額 ROW8
    if (Number(this.smallSum2_1) > Number(this.smallSum2_2)) {
      this.fugou8 = "△";
      this.smallSum2_3 = Number(this.smallSum2_1) - Number(this.smallSum2_2);
    } else {
      this.fugou8 = "";
      this.smallSum2_3 = Number(this.smallSum2_2) - Number(this.smallSum2_1);
    }

    //計 県営事業費--差引増△減額 ROW9
    if (Number(this.smallSum3_1) > Number(this.smallSum3_2)) {
      this.fugou9 = "△";
      this.smallSum3_3 = Number(this.smallSum3_1) - Number(this.smallSum3_2);
    } else {
      this.fugou9 = "";
      this.smallSum3_3 = Number(this.smallSum3_2) - Number(this.smallSum3_1);
    }
    /*-- ----------------------合計------------------------*/
    this.sum1();
    this.sum2();
    this.sum3();
  }

  handleCount2() {
    //林業専用道整備以外に係るもの--予算額
    this.input1 = this.template.querySelector(
      '[data-field-name="countNum7_1"]'
    ).value;
        this.countNum7_1 = this.input1;
    this.input2 = this.template.querySelector(
      '[data-field-name="countNum7_2"]'
    ).value;
    this.countNum7_2 = this.input2;
    //this.countNum7 = Number(this.input1) + Number(this.input2);
    this.countNum7 = Number(this.countNum7_1) + Number(this.countNum7_2);

    //林業専用道整備以外に係るもののうち、本工事費等--予算額
    this.input3 = this.template.querySelector(
      '[data-field-name="countNum8_1"]'
    ).value;
        this.countNum8_1 = this.input3;
    this.input4 = this.template.querySelector(
      '[data-field-name="countNum8_2"]'
    ).value;
    this.countNum8_2 = this.input4;
    //this.countNum8 = Number(this.input3) + Number(this.input4);
    this.countNum8 = Number(this.countNum8_1) + Number(this.countNum8_2);
    //市町村営等補助金--差引増△減額 ROW10
    if (Number(this.countNum7) > Number(this.countNum8)) {
      this.fugou10 = "△";
      this.countNum9 = Number(this.countNum7) - Number(this.countNum8);
    } else {
      this.fugou10 = "";
      this.countNum9 = Number(this.countNum8) - Number(this.countNum7);
    }

    //市町村営等補助金--差引増△減額 ROW11
    if (Number(this.input1) > Number(this.input3)) {
      this.fugou11 = "△";
      this.countNum9_1 = Number(this.input1) - Number(this.input3);
    } else {
      this.fugou11 = "";
      this.countNum9_1 = Number(this.input3) - Number(this.input1);
    }

    //市町村営等補助金--差引増△減額 ROW12
    if (Number(this.input2) > Number(this.input4)) {
      this.fugou12 = "△";
      this.countNum9_2 = Number(this.input2) - Number(this.input4);
    } else {
      this.fugou12 = "";
      this.countNum9_2 = Number(this.input4) - Number(this.input2);
    }

     /*-- ----------------------合計------------------------*/
     this.sum1();
     this.sum2();
     this.sum3();
  }

  handleCount3() {
    //指導監督費-人件費-予算額
    this.input1 = this.template.querySelector(
      '[data-field-name="countNum21_1"]'
    ).value;
    this.countNum21_1 = this.input1;
    this.input2 = this.template.querySelector(
      '[data-field-name="countNum21_2"]'
    ).value;
    this.countNum21_2 = this.input2;
    this.countNum21 = Number(this.input1) + Number(this.input2);

    //指導監督費-旅費-予算額
    this.input3 = this.template.querySelector(
      '[data-field-name="countNum24_1"]'
    ).value;
    this.countNum24_1 = this.input3;
    this.input4 = this.template.querySelector(
      '[data-field-name="countNum24_2"]'
    ).value;
    this.countNum24 = Number(this.input3) + Number(this.input4);

    //指導監督費-庁費-予算額
    this.input9 = this.template.querySelector(
      '[data-field-name="countNum27_1"]'
    ).value;
    this.countNum27_1 = this.input9 ;
    this.input10 = this.template.querySelector(
      '[data-field-name="countNum27_2"]'
    ).value;
    this.countNum27 = Number(this.input9) + Number(this.input10);

    //計 指導監督費--予算額
    this.smallSum4_1 = Number(this.countNum21) + Number(this.countNum24) + Number(this.countNum27);
    this.smallSum5_1 = Number(this.input1) + Number(this.input3) + Number(this.input9);

    //     this.smallSum5_1 =
    //   Number(this.countNum21_1) + Number(this.countNum24_1) + Number(this.countNum27_1);
    this.smallSum6_1 = Number(this.input2) + Number(this.input4) + Number(this.input10);
    /*     ------------------------指導監督費  -----------------------------*/
    //指導監督費-人件費--精算額
    this.input5 = this.template.querySelector(
      '[data-field-name="countNum22_1"]'
    ).value;
    this.countNum22_1 = this.input5;
    this.input6 = this.template.querySelector(
      '[data-field-name="countNum22_2"]'
    ).value;
    this.countNum22 = Number(this.input5) + Number(this.input6);

    //指導監督費-旅費-精算額
    this.input7 = this.template.querySelector(
      '[data-field-name="countNum25_1"]'
    ).value;
    this.countNum25_1 = this.input7;
    this.input8 = this.template.querySelector(
      '[data-field-name="countNum25_2"]'
    ).value;
    this.countNum25_2 = this.input8;
    //this.countNum25 = Number(this.input7) + Number(this.input8);
    this.countNum25 = Number(this.countNum25_1) + Number(this.countNum25_2);

    //指導監督費-庁費-予算額
    this.input11 = this.template.querySelector(
      '[data-field-name="countNum28_1"]'
    ).value;
    this.countNum28_1 = this.input11;
    this.input12 = this.template.querySelector(
      '[data-field-name="countNum28_2"]'
    ).value;
    this.countNum28 = Number(this.input11) + Number(this.input12);

    //計 指導監督費--精算額
    this.smallSum4_2 = Number(this.countNum22) + Number(this.countNum25) + Number(this.countNum28);

    this.smallSum5_2 = Number(this.input5) + Number(this.input7) + Number(this.input11);
    this.smallSum6_2 = Number(this.input6) + Number(this.input8) + Number(this.input12);
  


    //差引増△減額 ROW13
    if (Number(this.countNum21) > Number(this.countNum22)) {
      this.fugou13 = "△";
      this.countNum23 = Number(this.countNum21) - Number(this.countNum22);
    } else {
      this.fugou13 = "";
      this.countNum23 = Number(this.countNum22) - Number(this.countNum21);
    }

    //差引増△減額 ROW14
    if (Number(this.input1) > Number(this.input5)) {
      this.fugou14 = "△";
      this.countNum23_1 = Number(this.input1) - Number(this.input5);
    } else {
      this.fugou14 = "";
      this.countNum23_1 = Number(this.input5) - Number(this.input1);
    }

    //差引増△減額 ROW15
    if (Number(this.input2) > Number(this.input6)) {
      this.fugou15 = "△";
      this.countNum23_2 = Number(this.input2) - Number(this.input6);
    } else {
      this.fugou15 = "";
      this.countNum23_2 = Number(this.input6) - Number(this.input2);
    }

    //差引増△減額 ROW16
    if (Number(this.countNum24) > Number(this.countNum25)) {
      this.fugou16 = "△";
      this.countNum26 = Number(this.countNum24) - Number(this.countNum25);
    } else {
      this.fugou16 = "";
      this.countNum26 = Number(this.countNum25) - Number(this.countNum24);
    }

    //差引増△減額 ROW17
    if (Number(this.input3) > Number(this.input7)) {
      this.fugou17 = "△";
      this.countNum26_1 = Number(this.input3) - Number(this.input7);
    } else {
      this.fugou17 = "";
      this.countNum26_1 = Number(this.input7) - Number(this.input3);
    }

    //差引増△減額 ROW18
    if (Number(this.input4) > Number(this.input8)) {
      this.fugou18 = "△";
      this.countNum26_2 = Number(this.input4) - Number(this.input8);
    } else {
      this.fugou18 = "";
      this.countNum26_2 = Number(this.input8) - Number(this.input4);
    }

     //差引増△減額 ROW19
     if (Number(this.countNum27) > Number(this.countNum28)) {
        this.fugou19 = "△";
        this.countNum29 = Number(this.countNum27) - Number(this.countNum28);
      } else {
        this.fugou16 = "";
        this.countNum29 = Number(this.countNum28) - Number(this.countNum27);
      }
  
      //差引増△減額 ROW20
      if (Number(this.input9) > Number(this.input11)) {
        this.fugou20 = "△";
        this.countNum29_1 = Number(this.input9) - Number(this.input11);
      } else {
        this.fugou20 = "";
        this.countNum29_1 = Number(this.input11) - Number(this.input9);
      }
  
      //差引増△減額 ROW21
      if (Number(this.input10) > Number(this.input12)) {
        this.fugou21 = "△";
        this.countNum29_2 = Number(this.input10) - Number(this.input12);
      } else {
        this.fugou21 = "";
        this.countNum29_2 = Number(this.input12) - Number(this.input10);
      }

    //計 指導監督費--差引増△減額 ROW22
    if (Number(this.smallSum4_1) > Number(this.smallSum4_2)) {
      this.fugou22 = "△";
      this.smallSum4_3 = Number(this.smallSum4_1) - Number(this.smallSum4_2);
    } else {
      this.fugou22 = "";
      this.smallSum4_3 = Number(this.smallSum4_2) - Number(this.smallSum4_1);
    }

    //計 指導監督費--差引増△減額 ROW23
    if (Number(this.smallSum5_1) > Number(this.smallSum5_2)) {
      this.fugou23 = "△";
      this.smallSum5_3 = Number(this.smallSum5_1) - Number(this.smallSum5_2);
    } else {
      this.fugou23 = "";
      this.smallSum5_3 = Number(this.smallSum5_2) - Number(this.smallSum5_1);
    }

    //計 指導監督費--差引増△減額 ROW24
    if (Number(this.smallSum6_1) > Number(this.smallSum6_2)) {
      this.fugou24 = "△";
      this.smallSum6_3 = Number(this.smallSum6_1) - Number(this.smallSum6_2);
    } else {
      this.fugou24 = "";
      this.smallSum6_3 = Number(this.smallSum6_2) - Number(this.smallSum6_1);
    }
     /*-- ----------------------合計------------------------*/
     this.sum1();
     this.sum2();
     this.sum3();
  }

//合計1--Sum[行数]][列数]
  sum1(){
    this.Sum1_1 = Number(this.smallSum1_1) + Number(this.countNum7) + Number(this.smallSum4_1);
    this.Sum1_2 = Number(this.smallSum1_2) + Number(this.countNum8) + Number(this.smallSum4_2);
    if (Number(this.Sum1_1) > Number(this.Sum1_2)) {
        this.fugou25 = "△";
        this.Sum1_3 = Number(this.Sum1_1) - Number(this.Sum1_2);
      } else {
        this.fugou25 = "";
        this.Sum1_3 = Number(this.Sum1_2) - Number(this.Sum1_1);
      }

  }

  //合計2--[行数]][列数]
  sum2(){
    this.Sum2_1 = Number(this.smallSum2_1) + Number(this.countNum7_1) + Number(this.smallSum5_1);
    this.Sum2_2 = Number(this.smallSum2_2) + Number(this.countNum8_1) + Number(this.smallSum5_2);
    if (Number(this.Sum2_1) > Number(this.Sum2_2)) {
        this.fugou26 = "△";
        this.Sum2_3 = Number(this.Sum2_1) - Number(this.Sum2_2);
      } else {
        this.fugou26 = "";
        this.Sum2_3 = Number(this.Sum2_2) - Number(this.Sum2_1);
      }
  }

   //合計3--[行数]][列数]
   sum3(){
    this.Sum3_1 = Number(this.smallSum3_1) + Number(this.countNum7_2) + Number(this.smallSum6_1);
    this.Sum3_2 = Number(this.smallSum3_2) + Number(this.countNum8_2) + Number(this.smallSum6_2);
    if (Number(this.Sum3_1) > Number(this.Sum3_2)) {
        this.fugou27 = "△";
        this.Sum3_3 = Number(this.Sum3_1) - Number(this.Sum3_2);
      } else {
        this.fugou27 = "";
        this.Sum3_3 = Number(this.Sum3_2) - Number(this.Sum3_1);
      }

  }

}