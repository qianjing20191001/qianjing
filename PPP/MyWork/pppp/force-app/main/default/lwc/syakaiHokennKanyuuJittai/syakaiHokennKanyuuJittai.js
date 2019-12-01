import { LightningElement, track } from 'lwc';

export default class SyakaiHokennKanyuuJittai extends LightningElement {

    @track input1 = '';
    @track input2 = '';
    @track input3 = '';
    @track input4 = '';
    @track input5 = '';
    @track input6 = '';

    @track countNum1 = '';
    @track countNum2 = '';
    @track countNum3 = '';
    @track countNum4 = '';
    @track countNum5 = '';


    @track countNum1_8 = '';
    @track countNum1_10 = '';
    @track countNum1_10 = '';
    @track countNum1_12 = '';
    @track countNum1_14 = '';
    @track countNum1_16 = '';

    @track countNum2_8 = '';
    @track countNum2_10 = '';
    @track countNum2_10 = '';
    @track countNum2_12 = '';
    @track countNum2_14 = '';
    @track countNum2_16 = '';

    @track countNum3_8 = '';
    @track countNum3_10 = '';
    @track countNum3_10 = '';
    @track countNum3_12 = '';
    @track countNum3_14 = '';
    @track countNum3_16 = '';

    @track text16naiyou = '林退共';
    @track text16naiyou2 = '建退共';
    @track tennKanji = "点";

    @track first = 0;
    renderedCallback() {
        // initialize component
        // 林業専用道整備以外に係るもの
        if (this.first === 0) {
            this.first = 1;
            this.handleCount1();
            this.handleCount2();
            this.handleCount3();
        }

    }
    //ROW1
    handleCount1() {
        this.input1 = this.template.querySelector('[data-field-name="countNum1_7"]').value;
        if (this.input1 === "〇") {
            this.countNum1_8 = "6";
            this.tenn8 = this.tennKanji;
        } else {
            this.countNum1_8 = "";
            this.tenn8 = "";
        }
        this.input2 = this.template.querySelector('[data-field-name="countNum1_9"]').value;
        if (this.input2 === "〇") {
            this.countNum1_10 = "1";
            this.tenn10 = this.tennKanji;
        } else {
            this.countNum1_10 = "";
            this.tenn10 = "";
        }


        this.input3 = this.template.querySelector('[data-field-name="countNum1_11"]').value;
        if (this.input3 === "〇") {
            this.countNum1_12 = "5";
            this.tenn12 = this.tennKanji;
        } else {
            this.countNum1_12 = "";
            this.tenn12 = "";
        }

        this.input4 = this.template.querySelector('[data-field-name="countNum1_13"]').value;
        if (this.input4 === "〇") {
            this.countNum1_14 = "9";
            this.tenn14 = this.tennKanji;
        } else {
            this.countNum1_14 = "";
            this.tenn14 = "";
        }

        this.input5 = this.template.querySelector('[data-field-name="countNum1_15"]').value;
        this.input6 = this.template.querySelector('[data-field-name="text1_16"]').value;

        if (this.input5 === "〇" && this.input6 === this.text16naiyou) {
            this.countNum1_16 = "3";
            this.tenn16 = this.tennKanji;
        } else {
            this.countNum1_16 = "";
            this.tenn16 = "";
        }
        //計1

        this.countNum1 = Number(this.countNum1_8) + Number(this.countNum1_10) + Number(this.countNum1_12) + Number(this.countNum1_14) + Number(this.countNum1_16);
        // eslint-disable-next-line no-console
        console.log("S1:" + this.countNum1);
        if (this.countNum1 === 0) {
            this.countNum1 = "";
            this.tenn1_17 ="";
        }

        // eslint-disable-next-line no-console
        console.log("S2:" + this.countNum1);
        if (this.countNum1 !== "") {
            this.tenn1_17 = this.tennKanji;
        }
        if (this.countNum2 !== "") {
            this.tenn2_17 = this.tennKanji;
        }
        if (this.countNum3 !== "") {
            this.tenn3_17 = this.tennKanji;
        }

       this.sum();
        

      

    }
    //ROW2
    handleCount2() {
        this.input1 = this.template.querySelector('[data-field-name="countNum2_7"]').value;
        if (this.input1 === "〇") {
            this.countNum2_8 = "6";
            this.tenn2_8 = this.tennKanji;
        } else {
            this.countNum2_8 = "";
            this.tenn2_8 = "";
        }
        this.input2 = this.template.querySelector('[data-field-name="countNum2_9"]').value;
        if (this.input2 === "〇") {
            this.countNum2_10 = "1";
            this.tenn2_10 = this.tennKanji;
        } else {
            this.countNum2_10 = "";
            this.tenn2_10 = "";
        }


        this.input3 = this.template.querySelector('[data-field-name="countNum2_11"]').value;
        if (this.input3 === "〇") {
            this.countNum2_12 = "5";
            this.tenn2_12 = this.tennKanji;
        } else {
            this.countNum2_12 = "";
            this.tenn2_12 = "";
        }

        this.input4 = this.template.querySelector('[data-field-name="countNum2_13"]').value;
        if (this.input4 === "〇") {
            this.countNum2_14 = "9";
            this.tenn2_14 = this.tennKanji;
        } else {
            this.countNum2_14 = "";
            this.tenn2_14 = "";
        }

        this.input5 = this.template.querySelector('[data-field-name="countNum2_15"]').value;
        this.input6 = this.template.querySelector('[data-field-name="text2_16"]').value;

        if (this.input5 === "〇" && this.input6 === this.text16naiyou) {
            this.countNum2_16 = "3";
            this.tenn2_16 = this.tennKanji;
        } else {
            this.countNum2_16 = "";
            this.tenn2_16 = "";
        }

        this.countNum2 = Number(this.countNum2_8) + Number(this.countNum2_10) + Number(this.countNum2_12) + Number(this.countNum2_14) + Number(this.countNum2_16);
        if (this.countNum2 === 0) {
            this.countNum2 = "";
            this.tenn2_17 ="";
        }else{
            this.tenn2_17 =this.tennKanji;
        }

        this.sum();
    }
    //ROW3
    handleCount3() {
        this.input1 = this.template.querySelector('[data-field-name="countNum3_7"]').value;
        if (this.input1 === "〇") {
            this.countNum3_8 = "6";
            this.tenn3_8 = this.tennKanji;
        } else {
            this.countNum3_8 = "";
            this.tenn3_8 = "";
        }
        this.input2 = this.template.querySelector('[data-field-name="countNum3_9"]').value;
        if (this.input2 === "〇") {
            this.countNum3_10 = "1";
            this.tenn3_10 = this.tennKanji;
        } else {
            this.countNum3_10 = "";
            this.tenn3_10 = "";
        }


        this.input3 = this.template.querySelector('[data-field-name="countNum3_11"]').value;
        if (this.input3 === "〇") {
            this.countNum3_12 = "5";
            this.tenn3_12 = this.tennKanji;
        } else {
            this.countNum3_12 = "";
            this.tenn3_12 = "";
        }

        this.input4 = this.template.querySelector('[data-field-name="countNum3_13"]').value;
        if (this.input4 === "〇") {
            this.countNum3_14 = "9";
            this.tenn3_14 = this.tennKanji;
        } else {
            this.countNum3_14 = "";
            this.tenn3_14 = "";
        }

        this.input5 = this.template.querySelector('[data-field-name="countNum3_15"]').value;
        this.input6 = this.template.querySelector('[data-field-name="text3_16"]').value;

        if (this.input5 === "〇" && this.input6 === this.text16naiyou) {
            this.countNum3_16 = "3";
            this.tenn3_16 = this.tennKanji;
        } else {
            this.countNum3_16 = "";
            this.tenn3_16 = "";
        }
        //計
        this.countNum3 = Number(this.countNum3_8) + Number(this.countNum3_10) + Number(this.countNum3_12) + Number(this.countNum3_14) + Number(this.countNum3_16);
        if (this.countNum3 === 0) {
            this.countNum3 = "";
            this.tenn3_17 ="";
        }else{
            this.tenn3_17= this.tennKanji;
        }

        this.sum();
         
    }

    sum(){
           //合計
       this.countNum4 = Number(this.countNum1) + Number(this.countNum2) + Number(this.countNum3);
       if (this.countNum4 === 0) {
           this.countNum4 = "";
           this.tenn4 ="";
       }
       if (this.countNum4 !== "") {
           this.tenn4 = this.tennKanji;
           //平均
           this.countNum5 = Number(this.countNum4) / 3;
           if (this.countNum5 === 0) {
               this.countNum5 = "";
               this.tenn5 ="";
           }
           if (this.countNum5 !== "")
               this.tenn5 = this.tennKanji;
       }
         
    }
}