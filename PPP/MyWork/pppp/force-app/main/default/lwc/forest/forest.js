import { LightningElement,track } from 'lwc';

export default class Forest extends LightningElement {
    @track input1 = 0;
    @track input2 = 0;
    @track input3 = 0;
    @track input4 = 0;
    @track input5 = 0;
    @track input6 = 0;
    @track input7 = 0;
    @track input8 = 0;
    @track input9 = 0;
    @track input10 = 0;
    @track input11 = 0;
    @track input12 = 0;
    @track input13 = 0;
    @track input14 = 0;
    @track input15 = 0;
    @track input16 = 0;
    @track input17 = 0;
    @track input18 = 0;
    @track input19 = 0;
    @track input20 = 0;
    @track input21 = 0;
    @track input22 = 0;
    @track input23 = 0;
    @track input24 = 0;

    @track countNum1 = 0;
    @track countNum1_1 = 0;
    @track countNum1_2 = 0;
    @track countNum1_3 = 0;
    @track countNum1_4 = 0;
    @track countNum1_5 = 0;
    @track countNum1_6 = 0;
    @track countNum1_7 = 0;
    @track countNum1_8 = 0;
    @track countNum1_9 = 0;  
    @track countNum2_1 = 0;
    @track countNum2_2 = 0;
    @track countNum2_3 = 0;
    @track countNum2_4 = 0;
    @track countNum2_5 = 0;
    @track countNum2_6 = 0;
    @track countNum2_7 = 0;
    @track countNum2_8 = 0;
    @track countNum2_9 = 0;
    @track countNum3_1 = 0;
    @track countNum3_2 = 0;
    @track countNum3_3 = 0;
    @track countNum3_4 = 0;
    @track countNum3_5 = 0;
    @track countNum3_6 = 0;   
    @track countNum3_7 = 0; 
    @track countNum3_8 = 0; 
    @track countNum3_9 = 0;  
    @track countNum3_1 = 0;
    @track countNum3_2 = 0;
    @track countNum3_3 = 0;
    @track countNum4_1 = 0;
    @track countNum4_2 = 0;
    @track countNum4_3 = 0;   
    @track countNum4_4 = 0; 
    @track countNum4_5 = 0; 
    @track countNum4_6 = 0;  
    @track countNum4_7 = 0;
    @track countNum4_8 = 0;
    @track countNum4_9 = 0;   
    @track countNum4_10 = 0; 
    @track countNum4_11 = 0; 
    @track countNum4_12 = 0;  
    @track countNum4_13 = 0;
    @track countNum4_14 = 0;
    @track countNum4_15 = 0;   
    @track countNum4_16 = 0; 
    @track countNum4_17 = 0; 
    @track countNum4_18 = 0;  
    @track countNum4_19 = 0;
    @track countNum4_20 = 0;
    @track countNum4_21 = 0;   
    @track countNum5_1 = 0;
    @track countNum5_2 = 0;
    @track countNum5_3 = 0;
    @track countNum5_4 = 0;
    @track countNum5_5 = 0;
    @track countNum5_6 = 0;  
    @track countNum5_7 = 0;
    @track countNum5_8 = 0;
    @track countNum5_9 = 0;  
    @track countNum6_1 = 0;
    @track countNum6_2 = 0;
    @track countNum6_3 = 0;
    @track countNum6_4 = 0;
    @track countNum6_5 = 0;
    @track countNum6_6 = 0;  
    @track countNum6_7 = 0;
    @track countNum6_8 = 0;
    @track countNum6_9 = 0; 
    @track countNum7_1 = 0;
    @track countNum7_2 = 0;
    @track countNum7_3 = 0;
    @track countNum7_4 = 0;
    @track countNum7_5 = 0;
    @track countNum7_6 = 0; 
    @track countNum7_7 = 0;
    @track countNum7_8 = 0;
    @track countNum7_9 = 0; 

    renderedCallback() {
        // initialize component
        this.handleCount1();
        this.handleCount2();
        this.handleCount3();
        this.handleCount4();
        this.handleCount5();
    }

    handleCount1() {
        this.input1 = this.template.querySelector('[data-field-name="countNum1_1"]').value;
        this.input2 = this.template.querySelector('[data-field-name="countNum1_2"]').value;
        this.input3 = this.template.querySelector('[data-field-name="countNum1_3"]').value;
        this.input4 = this.template.querySelector('[data-field-name="countNum1_4"]').value;
        this.input5 = this.template.querySelector('[data-field-name="countNum1_5"]').value;
        this.input6 = this.template.querySelector('[data-field-name="countNum1_6"]').value;
        this.input7 = this.template.querySelector('[data-field-name="countNum1_7"]').value;
        this.input8 = this.template.querySelector('[data-field-name="countNum1_8"]').value;
        this.input9 = this.template.querySelector('[data-field-name="countNum1_9"]').value;
        this.input10 = this.template.querySelector('[data-field-name="countNum1_10"]').value;
        this.input11 = this.template.querySelector('[data-field-name="countNum1_11"]').value;
        this.input12 = this.template.querySelector('[data-field-name="countNum1_12"]').value;
        this.countNum1_1 = Number(this.input1) + Number(this.input2);
        this.countNum1_2 = Number(this.input3) + Number(this.input4);
        this.countNum1_3 = Number(this.input5) + Number(this.input6);

        if(Number(this.input7) === 0 && Number(this.input8)===0){
            this.countNum1_4 = "";
        }else{
            this.countNum1_4 = Number(this.input7) + Number(this.input8);
        }

        if(Number(this.input9) === 0 && Number(this.input10)===0){
            this.countNum1_5 = "";
        }else{
            this.countNum1_5 = Number(this.input9) + Number(this.input10);
        }

        if(Number(this.input11) === 0 && Number(this.input12)===0){
            this.countNum1_6 = "";
        }else{
            this.countNum1_6 = Number(this.input11) + Number(this.input12);
        }

        //summary
        this.countNum1_7 = this.countNum1_1 + this.countNum1_2 + this.countNum1_3
                            + this.countNum1_4 + this.countNum1_5 + this.countNum1_6;
        this.countNum1_8 = Number(this.input1) + Number(this.input3) + Number(this.input5)
                            + Number(this.input7) + Number(this.input9) +Number(this.input11);
        this.countNum1_9 = Number(this.input2) + Number(this.input4) + Number(this.input6)
                             + Number(this.input8) + Number(this.input10) + Number(this.input12);
    }

    handleCount2() {
        this.input1 = this.template.querySelector('[data-field-name="countNum2_1"]').value;
        this.input2 = this.template.querySelector('[data-field-name="countNum2_2"]').value;
        this.input3 = this.template.querySelector('[data-field-name="countNum2_3"]').value;
        this.input4 = this.template.querySelector('[data-field-name="countNum2_4"]').value;
        this.input5 = this.template.querySelector('[data-field-name="countNum2_5"]').value;
        this.input6 = this.template.querySelector('[data-field-name="countNum2_6"]').value;
        this.input7 = this.template.querySelector('[data-field-name="countNum2_7"]').value;
        this.input8 = this.template.querySelector('[data-field-name="countNum2_8"]').value;
        this.input9 = this.template.querySelector('[data-field-name="countNum2_9"]').value;
        this.input10 = this.template.querySelector('[data-field-name="countNum2_10"]').value;
        this.input11 = this.template.querySelector('[data-field-name="countNum2_11"]').value;
        this.input12 = this.template.querySelector('[data-field-name="countNum2_12"]').value;
        this.input13 = this.template.querySelector('[data-field-name="countNum3_1"]').value;
        this.input14 = this.template.querySelector('[data-field-name="countNum3_2"]').value;
        this.input15 = this.template.querySelector('[data-field-name="countNum3_3"]').value;
        this.input16 = this.template.querySelector('[data-field-name="countNum3_4"]').value;
        this.input17 = this.template.querySelector('[data-field-name="countNum3_5"]').value;
        this.input18 = this.template.querySelector('[data-field-name="countNum3_6"]').value;
        this.input19 = this.template.querySelector('[data-field-name="countNum3_7"]').value;
        this.input20 = this.template.querySelector('[data-field-name="countNum3_8"]').value;
        this.input21 = this.template.querySelector('[data-field-name="countNum3_9"]').value;
        this.input22 = this.template.querySelector('[data-field-name="countNum3_10"]').value;
        this.input23 = this.template.querySelector('[data-field-name="countNum3_11"]').value;
        this.input24 = this.template.querySelector('[data-field-name="countNum3_12"]').value;
        this.countNum2_1 = Number(this.input1) + Number(this.input2);
        this.countNum2_2 = Number(this.input3) + Number(this.input4);
        this.countNum2_3 = Number(this.input5) + Number(this.input6);
        if(Number(this.input7) === 0 && Number(this.input8)===0){
            this.countNum2_4 = "";
        }else{
            this.countNum2_4 = Number(this.input7) + Number(this.input8);
        }

        if(Number(this.input9) === 0 && Number(this.input10)===0){
            this.countNum2_5 = "";
        }else{
            this.countNum2_5 = Number(this.input9) + Number(this.input10);
        }

        if(Number(this.input11) === 0 && Number(this.input12)===0){
            this.countNum2_6 = "";
        }else{
            this.countNum2_6 = Number(this.input11) + Number(this.input12);
        }

        this.countNum3_1 = Number(this.input13) + Number(this.input14);
        this.countNum3_2 = Number(this.input15) + Number(this.input16);
        this.countNum3_3 = Number(this.input17) + Number(this.input18);
        if(Number(this.input19) === 0 && Number(this.input20)===0){
            this.countNum3_4 = "";
        }else{
            this.countNum3_4 = Number(this.input19) + Number(this.input20);
        }

        if(Number(this.input21) === 0 && Number(this.input22)===0){
            this.countNum3_5 = "";
        }else{
            this.countNum3_5 = Number(this.input21) + Number(this.input22);
        }

        if(Number(this.input23) === 0 && Number(this.input24)===0){
            this.countNum3_6 = "";
        }else{
            this.countNum3_6 = Number(this.input23) + Number(this.input24);
        }

        this.countNum4_1 = this.countNum2_1 + this.countNum3_1;
        this.countNum4_2 = Number(this.input1) + Number(this.input13);
        this.countNum4_3 = Number(this.input2) + Number(this.input14);
        this.countNum4_4 = this.countNum2_2 + this.countNum3_2;
        this.countNum4_5 = Number(this.input3) + Number(this.input15);
        this.countNum4_6 = Number(this.input4) + Number(this.input16);
        this.countNum4_7 = this.countNum2_3 + this.countNum3_3;
        this.countNum4_8 = Number(this.input5) + Number(this.input17);
        this.countNum4_9 = Number(this.input6) + Number(this.input18);
        this.countNum4_10 = this.countNum2_4 + this.countNum3_4;
        
        if(Number(this.input7) === 0 && Number(this.input19)===0){
            this.countNum4_11 = "";
        }else{
            this.countNum4_11 = Number(this.input7) + Number(this.input19);
        }

        if(Number(this.input8) === 0 && Number(this.input20)===0){
            this.countNum4_12 = "";
        }else{
            this.countNum4_12 = Number(this.input8) + Number(this.input20);
        }
        
        this.countNum4_13 = this.countNum2_5 + this.countNum3_5;

        if(Number(this.input9) === 0 && Number(this.input21)===0){
            this.countNum4_14 = "";
        }else{
            this.countNum4_14 = Number(this.input9) + Number(this.input21);
        }

        if(Number(this.input10) === 0 && Number(this.input22)===0){
            this.countNum4_15 = "";
        }else{
            this.countNum4_15 = Number(this.input10) + Number(this.input22);
        }

        this.countNum4_16 = this.countNum2_6 + this.countNum3_6;   

        if(Number(this.input11) === 0 && Number(this.input23)===0){
            this.countNum4_17 = "";
        }else{
            this.countNum4_17 = Number(this.input11) + Number(this.input23);
        }

        if(Number(this.input12) === 0 && Number(this.input24)===0){
            this.countNum4_18 = "";
        }else{
            this.countNum4_18 = Number(this.input12) + Number(this.input24);
        }

        //summary
        this.countNum2_7 = this.countNum2_1 + this.countNum2_2 + this.countNum2_3
                            + this.countNum2_4 + this.countNum2_5 +this.countNum2_6;
        this.countNum2_8 = Number(this.input1) + Number(this.input3) + Number(this.input5)
                            + Number(this.input7) + Number(this.input9) + Number(this.input11);
        this.countNum2_9 = Number(this.input2) + Number(this.input4) + Number(this.input6)
                            + Number(this.input8) + Number(this.input10) + Number(this.input12);
        this.countNum3_7 =this.countNum3_1 + this.countNum3_2 + this.countNum3_3
                            + this.countNum3_4 + this.countNum3_5 +this.countNum3_6;
        this.countNum3_8 = Number(this.input13) + Number(this.input15) + Number(this.input17)
                            + Number(this.input19) + Number(this.input21) + Number(this.input23);
        this.countNum3_9 = Number(this.input14) + Number(this.input16) + Number(this.input18)
                            + Number(this.input20) + Number(this.input22) + Number(this.input24);
        this.countNum4_19 = this.countNum4_1 + this.countNum4_4 + this.countNum4_7
                            + this.countNum4_10 + this.countNum4_13 + this.countNum4_16;
        this.countNum4_20 = this.countNum4_2 + this.countNum4_5 + this.countNum4_8
                            + this.countNum4_11 + this.countNum4_14 + this.countNum4_17;
        this.countNum4_21 = this.countNum4_3 + this.countNum4_6 + this.countNum4_9
                            + this.countNum4_12 + this.countNum4_15 + this.countNum4_18;
    }
    

    handleCount3() {
        this.input1 = this.template.querySelector('[data-field-name="countNum5_1"]').value;
        this.input2 = this.template.querySelector('[data-field-name="countNum5_2"]').value;
        this.input3 = this.template.querySelector('[data-field-name="countNum5_3"]').value;
        this.input4 = this.template.querySelector('[data-field-name="countNum5_4"]').value;
        this.input5 = this.template.querySelector('[data-field-name="countNum5_5"]').value;
        this.input6 = this.template.querySelector('[data-field-name="countNum5_6"]').value;
        this.input7 = this.template.querySelector('[data-field-name="countNum5_7"]').value;
        this.input8 = this.template.querySelector('[data-field-name="countNum5_8"]').value;
        this.input9 = this.template.querySelector('[data-field-name="countNum5_9"]').value;
        this.input10 = this.template.querySelector('[data-field-name="countNum5_10"]').value;
        this.input11 = this.template.querySelector('[data-field-name="countNum5_11"]').value;
        this.input12 = this.template.querySelector('[data-field-name="countNum5_12"]').value;
        this.countNum5_1 = Number(this.input1) + Number(this.input2);
        this.countNum5_2 = Number(this.input3) + Number(this.input4);
        this.countNum5_3 = Number(this.input5) + Number(this.input6);
        if(Number(this.input7) === 0 && Number(this.input8)===0){
            this.countNum5_4 = "";
        }else{
            this.countNum5_4 = Number(this.input7) + Number(this.input8);
        }

        if(Number(this.input9) === 0 && Number(this.input10)===0){
            this.countNum5_5 = "";
        }else{
            this.countNum5_5 = Number(this.input9) + Number(this.input10);
        }

        if(Number(this.input11) === 0 && Number(this.input12)===0){
            this.countNum5_6 = "";
        }else{
            this.countNum5_6 = Number(this.input11) + Number(this.input12);
        }
        //summary
        this.countNum5_7 = this.countNum5_1 + this.countNum5_2 + this.countNum5_3
                            + this.countNum5_4 + this.countNum5_5 + this.countNum5_6;
        this.countNum5_8 = Number(this.input1) + Number(this.input3) + Number(this.input5)
                            + Number(this.input7) + Number(this.input9) + Number(this.input11);
        this.countNum5_9 = Number(this.input2) + Number(this.input4) + Number(this.input6)
                            + Number(this.input8) + Number(this.input10) + Number(this.input12);
    }

    handleCount4() {
        this.input1 = this.template.querySelector('[data-field-name="countNum6_1"]').value;
        this.input2 = this.template.querySelector('[data-field-name="countNum6_2"]').value;
        this.input3 = this.template.querySelector('[data-field-name="countNum6_3"]').value;
        this.input4 = this.template.querySelector('[data-field-name="countNum6_4"]').value;
        this.input5 = this.template.querySelector('[data-field-name="countNum6_5"]').value;
        this.input6 = this.template.querySelector('[data-field-name="countNum6_6"]').value;
        this.input7 = this.template.querySelector('[data-field-name="countNum6_7"]').value;
        this.input8 = this.template.querySelector('[data-field-name="countNum6_8"]').value;
        this.input9 = this.template.querySelector('[data-field-name="countNum6_9"]').value;
        this.input10 = this.template.querySelector('[data-field-name="countNum6_10"]').value;
        this.input11 = this.template.querySelector('[data-field-name="countNum6_11"]').value;
        this.input12 = this.template.querySelector('[data-field-name="countNum6_12"]').value;
        this.countNum6_1 = Number(this.input1) + Number(this.input2);
        this.countNum6_2 = Number(this.input3) + Number(this.input4);
        this.countNum6_3 = Number(this.input5) + Number(this.input6);
        if(Number(this.input7) === 0 && Number(this.input8)===0){
            this.countNum6_4 = "";
        }else{
            this.countNum6_4 = Number(this.input7) + Number(this.input8);
        }

        if(Number(this.input9) === 0 && Number(this.input10)===0){
            this.countNum6_5 = "";
        }else{
            this.countNum6_5 = Number(this.input9) + Number(this.input10);
        }

        if(Number(this.input11) === 0 && Number(this.input12)===0){
            this.countNum6_6 = "";
        }else{
            this.countNum6_6 = Number(this.input11) + Number(this.input12);
        }

        //summary
        this.countNum6_7 = this.countNum6_1 + this.countNum6_2 + this.countNum6_3
                            + this.countNum6_4 + this.countNum6_5 + this.countNum6_6;
        this.countNum6_8 = Number(this.input1) + Number(this.input3) + Number(this.input5)
                            + Number(this.input7) + Number(this.input9) + Number(this.input11);
        this.countNum6_9 = Number(this.input2) + Number(this.input4) + Number(this.input6)
                            + Number(this.input8) + Number(this.input10) + Number(this.input12);
    }

    handleCount5() {
        this.input1 = this.template.querySelector('[data-field-name="countNum7_1"]').value;
        this.input2 = this.template.querySelector('[data-field-name="countNum7_2"]').value;
        this.input3 = this.template.querySelector('[data-field-name="countNum7_3"]').value;
        this.input4 = this.template.querySelector('[data-field-name="countNum7_4"]').value;
        this.input5 = this.template.querySelector('[data-field-name="countNum7_5"]').value;
        this.input6 = this.template.querySelector('[data-field-name="countNum7_6"]').value;
        this.input7 = this.template.querySelector('[data-field-name="countNum7_7"]').value;
        this.input8 = this.template.querySelector('[data-field-name="countNum7_8"]').value;
        this.input9 = this.template.querySelector('[data-field-name="countNum7_9"]').value;
        this.input10 = this.template.querySelector('[data-field-name="countNum7_10"]').value;
        this.input11 = this.template.querySelector('[data-field-name="countNum7_11"]').value;
        this.input12 = this.template.querySelector('[data-field-name="countNum7_12"]').value;
        this.countNum7_1 = Number(this.input1) + Number(this.input2);
        this.countNum7_2 = Number(this.input3) + Number(this.input4);
        this.countNum7_3 = Number(this.input5) + Number(this.input6);
        if(Number(this.input7) === 0 && Number(this.input8)===0){
            this.countNum7_4 = "";
        }else{
            this.countNum7_4 = Number(this.input7) + Number(this.input8);
        }

        if(Number(this.input9) === 0 && Number(this.input10)===0){
            this.countNum7_5 = "";
        }else{
            this.countNum7_5 = Number(this.input9) + Number(this.input10);
        }

        if(Number(this.input11) === 0 && Number(this.input12)===0){
            this.countNum7_6 = "";
        }else{
            this.countNum7_6 = Number(this.input11) + Number(this.input12);
        }
        //summary
        this.countNum7_7 = this.countNum7_1 + this.countNum7_2 + this.countNum7_3
                            + this.countNum7_4 + this.countNum7_5 + this.countNum7_6;
        this.countNum7_8 = Number(this.input1) + Number(this.input3) + Number(this.input5)
                            + Number(this.input7) + Number(this.input9) + Number(this.input11);
        this.countNum7_9 = Number(this.input2) + Number(this.input4) + Number(this.input6)
                            + Number(this.input8) + Number(this.input10) + Number(this.input12);
    }
}