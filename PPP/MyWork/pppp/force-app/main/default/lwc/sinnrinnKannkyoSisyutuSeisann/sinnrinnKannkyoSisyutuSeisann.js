import { LightningElement, track } from 'lwc';

export default class SinnrinnKannkyoSisyutuSeisann extends LightningElement {

    @track input21 = 0;
    @track input31 = 0;

    @track input22 = 0;
    @track input32 = 0;

    @track input51 = 0;
    @track input61 = 0;
    @track countNum11_1 = 0;
    @track countNum12_1 = 0;
    @track countNum11_2 = 0;
    @track countNum12_2 = 0;

    @track input52 = 0;
    @track input62 = 0;



    @track countNum11 = 0;
    @track countNum12 = 0;
    @track countNum21 = 0;
    @track countNum22 = 0;
    @track countNum13 = 0;
    @track countNum23 = 0;
    @track countNum33 = 0;

    @track countNum41 = 0;
    @track countNum42 = 0;
    @track countNum43 = 0;
    @track countNum51 = 0;
    @track countNum52 = 0;
    @track countNum53 = 0;

    @track countNum63 = 0;

    @track countNum71 = 0;
    @track countNum81 = 0;
    @track countNum91 = 0;

    @track countNum72 = 0;
    @track countNum82 = 0;
    @track countNum92 = 0;

    @track countNum73 = 0;
    @track countNum83 = 0;
    @track countNum93 = 0;


    //市町村営等補助金
    @track input11_1 = 0;
    @track input12_1 = 0;

    @track input11_2 = 0;
    @track input12_2 = 0;

    @track countNum10_1 = 0;
    @track countNum10_2 = 0;


    @track countNum10_3 = 0;
    @track countNum11_3 = 0;
    @track countNum12_3 = 0;

    //人 件 費
    
    @track input14_1 = 0;
    @track input15_1 = 0;

    @track input14_2 = 0;
    @track input15_2 = 0;
    
	@track countNum13_1 = 0;
	@track countNum13_2 = 0;
	
    @track countNum13_3 = 0;
    @track countNum14_3 = 0;
    @track countNum15_3 = 0;

    //旅費
    @track input17_1 = 0;
    @track input18_1 = 0;

    @track input17_2 = 0;
    @track input18_2 = 0;
    
    @track countNum16_1 = 0;
    @track countNum16_2 = 0;
    
    @track countNum16_3 = 0;
    @track countNum17_3 = 0;
    @track countNum18_3 = 0;


    //庁費
    @track input20_1 = 0;
    @track input21_1 = 0;

    @track input20_2 = 0;
    @track input21_2 = 0;
    
    @track countNum19_1 = 0;
    @track countNum19_2 = 0;
    
    @track countNum19_3 = 0;
    @track countNum20_3 = 0;
    @track countNum21_3 = 0;
    //指導監督費-計
    @track countNum22_1 = 0;
    @track countNum23_1 = 0;
    @track countNum24_1 = 0;
    
    @track countNum22_2 = 0;
    @track countNum23_2 = 0;
    @track countNum24_2 = 0;

    @track countNum22_3 = 0;
    @track countNum23_3 = 0;
    @track countNum24_3 = 0;


    //合計-予算額
    @track countNum25_1 = 0;
    @track countNum26_1 = 0;
    @track countNum27_1 = 0;

    //合計-精算額
    @track countNum25_2= 0;
    @track countNum26_2 = 0;
    @track countNum27_2 = 0;

    //合計-差引増△減額
    @track countNum25_3 = 0;
    @track countNum26_3 = 0;
    @track countNum27_3 = 0;

    isFirst = true;
    renderedCallback() {
        // initialize component
        if(this.isFirst){
        // 林業専用道整備以外に係るもの
        this.handleCount21();
        this.handleCount31();
        this.handleCount22();
        this.handleCount32();

        //林業専用道整備以外に係るもののうち、本工事費等
        this.handleCount51();
        this.handleCount61();
        this.handleCount52();
        this.handleCount62();

        //市町村営等補助金
        this.handleCount11_1();  
        this.handleCount12_1();      
        this.handleCount12_2();

        //人 件 費
        this.handleCount14_1();  
        this.handleCount14_2(); 
        this.handleCount15_1();     
        this.handleCount15_2();

        //旅費
        this.handleCount17_1() 
        this.handleCount18_1() 
        this.handleCount17_2() 
        this.handleCount18_2()

        //庁費
        this.handleCount20_1();
        this.handleCount21_1();
        this.handleCount20_2();
        this.handleCount21_2();
        }
        this.isFirst = false;
    }
    //------------------林業専用道整備以外に係るもの----------------------------//
    //CELL_21 の計算関数_予算額
    handleCount21() {
        this.input21 = this.template.querySelector('[data-field-name="countNum2_1"]').value;
        this.input31 = this.template.querySelector('[data-field-name="countNum3_1"]').value;
        //CELL_11
        this.countNum11 = Number(this.input21) + Number(this.input31);
        //console.log("this.countNum11="+this.countNum11);
        //console.log("this.countNum12="+this.countNum12);
        //CELL_13
        if (Number(this.countNum11) > Number(this.countNum12)) {
            this.fugou1 = "△";
            this.countNum13 = Number(this.countNum11) - Number(this.countNum12);
        } else {
            this.fugou1 = "";
            this.countNum13 = Number(this.countNum12) - Number(this.countNum11);
        }


        //CELL_23
        this.input22 = this.template.querySelector('[data-field-name="countNum2_2"]').value;
        if (Number(this.input21) > Number(this.input22)) {
            this.fugou2 = "△";
            this.countNum23 = Number(this.input21) - Number(this.input22);
        } else {
            this.fugou2 = "";
            this.countNum23 = Number(this.input22) - Number(this.input21);
        }


        //CELL_33
        this.input32 = this.template.querySelector('[data-field-name="countNum3_2"]').value;
        if (Number(this.input31) > Number(this.input32)) {
            this.fugou3 = "△";
            this.countNum33 = Number(this.input31) - Number(this.input32);
        } else {
            this.fugou3 = "";
            this.countNum33 = Number(this.input32) - Number(this.input31);
        }

        //---------------県営事業費--計--予算額----------------------//
        this.countNum71 = Number(this.countNum11) + Number(this.countNum41);
        this.countNum81 = Number(this.input21) + Number(this.input51);

        //---------------合計--予算額----------------------//
        this.countNum25_1 = Number(this.countNum71) + Number(this.countNum10_1)+ Number(this.countNum22_1);
        this.countNum26_1 = Number(this.countNum81) + Number(this.countNum11_1)+ Number(this.countNum22_1);

        //CELL25_3
        if (Number(this.countNum25_1) > Number(this.countNum25_2)) {
            this.fugou25 = "△";
            this.countNum25_3 = Number(this.countNum25_1) - Number(this.countNum25_2);
        } else {
            this.fugou25 = "";
            this.countNum25_3 = Number(this.countNum25_2) - Number(this.countNum25_1);
        }


        //CELL26_3
        if (Number(this.countNum26_1) > Number(this.countNum26_2)) {
            this.fugou26 = "△";
            this.countNum26_3 = Number(this.countNum26_1) - Number(this.countNum26_2);
        } else {
            this.fugou26 = "";
            this.countNum26_3 = Number(this.countNum26_2) - Number(this.countNum26_1);
        }


        //CELL27_3
        if (Number(this.countNum27_1) > Number(this.countNum27_2)) {
            this.fugou27 = "△";
            this.countNum27_3 = Number(this.countNum27_1) - Number(this.countNum27_2);
        } else {
            this.fugou27 = "";
            this.countNum27_3 = Number(this.countNum27_2) - Number(this.countNum27_1);
        }
    }
    // 林業専用道整備以外に係るもの
    // CELL_31 の計算関数_予算額
    handleCount31() {
        this.input21 = this.template.querySelector('[data-field-name="countNum2_1"]').value;
        this.input31 = this.template.querySelector('[data-field-name="countNum3_1"]').value;
        //CELL_11
        this.countNum11 = Number(this.input21) + Number(this.input31);
        //---------------計 予算額----------------------//
        this.countNum91 = Number(this.input31) + Number(this.input61);

         //---------------合計--予算額----------------------//
         this.countNum27_1 = Number(this.countNum91) + Number(this.countNum12_1)+ Number(this.countNum24_1);


    }

    //林業専用道整備以外に係るもの
    //CELL_22 の計算関数_精算額
    handleCount22() {
        this.input22 = this.template.querySelector('[data-field-name="countNum2_2"]').value;
        this.input32 = this.template.querySelector('[data-field-name="countNum3_2"]').value;
        //CELL_12
        this.countNum12 = Number(this.input22) + Number(this.input32);

        //---------------計 精算額----------------------//
        this.input52 = this.template.querySelector('[data-field-name="countNum5_2"]').value;
        this.countNum72 = Number(this.countNum12) + Number(this.countNum42);
        this.countNum82 = Number(this.input22) + Number(this.input52);

        //---------------合計--精算額---------------------//
        this.countNum11_2 = this.template.querySelector('[data-field-name="countNum11_2"]').value;
        
        this.countNum25_2 = Number(this.countNum72) + Number(this.countNum10_2)+ Number(this.countNum22_2);
        this.countNum26_2 = Number(this.countNum82) + Number(this.countNum11_2)+ Number(this.countNum23_2);

    }

    //林業専用道整備以外に係るもの
    //CELL_32 の計算関数_精算額
    handleCount32() {
        this.input22 = this.template.querySelector('[data-field-name="countNum2_2"]').value;
        this.input32 = this.template.querySelector('[data-field-name="countNum3_2"]').value;
        //CELL_21
        this.countNum12 = Number(this.input22) + Number(this.input32);

        //---------------計 精算額----------------------//
        this.input62 = this.template.querySelector('[data-field-name="countNum6_2"]').value;
        this.countNum92 = Number(this.input32) + Number(this.input62);

         //---------------合計--精算額----------------------//
         this.countNum12_2 = this.template.querySelector('[data-field-name="countNum12_2"]').value;
         this.countNum27_2 = Number(this.countNum92) + Number(this.countNum12_2)+ Number(this.countNum24_2);

    }

    //---------------林業専用道整備以外に係るもののうち、本工事費等----------------------//

    //CELL_51 の計算関数_予算額

    handleCount51() {
        this.input51 = this.template.querySelector('[data-field-name="countNum5_1"]').value;
        this.input61 = this.template.querySelector('[data-field-name="countNum6_1"]').value;
        //CELL_41
        this.countNum41 = Number(this.input51) + Number(this.input61);
        //CELL_43
        if (Number(this.countNum41) > Number(this.countNum42)) {
            this.fugou4 = "△";
            this.countNum43 = Number(this.countNum41) - Number(this.countNum42);
        } else {
            this.fugou4 = "";
            this.countNum43 = Number(this.countNum42) - Number(this.countNum41);
        }

        //CELL_53
        this.input52 = this.template.querySelector('[data-field-name="countNum5_2"]').value;
        if (Number(this.input51) > Number(this.input52)) {
            this.fugou5 = "△";
            this.countNum53 = Number(this.input51) - Number(this.input52);
        } else {
            this.fugou5 = "";
            this.countNum53 = Number(this.input52) - Number(this.input51);
        }

        //CELL_63
        this.input62 = this.template.querySelector('[data-field-name="countNum6_2"]').value;
        if (Number(this.input61) > Number(this.input62)) {
            this.fugou6 = "△";
            this.countNum63 = Number(this.input61) - Number(this.input62);
        } else {
            this.fugou6 = "";
            this.countNum63 = Number(this.input62) - Number(this.input61);
        }

        //CELL_73
        if (Number(this.countNum71) > Number(this.countNum72)) {
            this.fugou7 = "△";
            this.countNum73 = Number(this.countNum71) - Number(this.countNum72);
        } else {
            this.fugou7 = "";
            this.countNum73 = Number(this.countNum72) - Number(this.countNum71);

        }

        //CELL_83
        if (Number(this.countNum81) > Number(this.countNum82)) {
            this.fugou8 = "△";
            this.countNum83 = Number(this.countNum81) - Number(this.countNum82);
        } else {
            this.fugou8 = "";
            this.countNum83 = Number(this.countNum82) - Number(this.countNum81);
        }
        //CELL_93
        if (Number(this.countNum91) > Number(this.countNum92)) {
            this.fugou9 = "△";
            this.countNum93 = Number(this.countNum91) - Number(this.countNum92);
        } else {
            this.fugou9 = "";
            this.countNum93 = Number(this.countNum92) - Number(this.countNum91);
        }

    }
    // 林業専用道整備以外に係るもののうち、本工事費等
    // CELL_61 の計算関数_予算額
    handleCount61() {
        this.input51 = this.template.querySelector('[data-field-name="countNum5_1"]').value;
        this.input61 = this.template.querySelector('[data-field-name="countNum6_1"]').value;
        //CELL_41
        this.countNum41 = Number(this.input51) + Number(this.input61);
    }

    //CELL_52 の計算関数_精算額
    handleCount52() {
        this.input52 = this.template.querySelector('[data-field-name="countNum5_2"]').value;
        this.input62 = this.template.querySelector('[data-field-name="countNum6_2"]').value;
        //CELL_42
        this.countNum42 = Number(this.input52) + Number(this.input62);
        //---------------計 精算額----------------------//
        this.input22 = this.template.querySelector('[data-field-name="countNum2_2"]').value;
        this.countNum82 = Number(this.input22) + Number(this.input52);

    }

    //CELL_62 の計算関数_精算額
    handleCount62() {
        this.input52 = this.template.querySelector('[data-field-name="countNum5_2"]').value;
        this.input62 = this.template.querySelector('[data-field-name="countNum6_2"]').value;
        //CELL_42
        this.countNum42 = Number(this.input52) + Number(this.input62);

    }

    //----------------------市町村営等補助金-----//

    //CELL11_1 の計算関数_予算額
    handleCount11_1() {
    this.input11_1 = this.template.querySelector('[data-field-name="countNum11_1"]').value;
    this.countNum11_1 =this.input11_1;
    this.input12_1 = this.template.querySelector('[data-field-name="countNum12_1"]').value;
    this.countNum12_1 =this.input12_1;
    //CELL10_1
    this.countNum10_1 = Number(this.input11_1) + Number(this.input12_1);


    //CELL10_3
    if (Number(this.countNum10_1) > Number(this.countNum10_2)) {
        this.fugou10 = "△";
        this.countNum10_3 = Number(this.countNum10_1) - Number(this.countNum10_2);
    } else {
        this.fugou10 = "";
        this.countNum10_3 = Number(this.countNum10_2) - Number(this.countNum10_1);
    }


    //CELL11_3
    this.input11_2 = this.template.querySelector('[data-field-name="countNum11_2"]').value;
    if (Number(this.input11_1) > Number(this.input11_2)) {
        this.fugou11 = "△";
        this.countNum11_3 = Number(this.input11_1) - Number(this.input11_2);
    } else {
        this.fugou11 = "";
        this.countNum11_3 = Number(this.input11_2) - Number(this.input11_1);
    }


    //CELL12_3
    this.input12_2 = this.template.querySelector('[data-field-name="countNum12_2"]').value;
    if (Number(this.input12_1) > Number(this.input12_2)) {
        this.fugou12 = "△";
        this.countNum12_3 = Number(this.input12_1) - Number(this.input12_2);
    } else {
        this.fugou12 = "";
        this.countNum12_3 = Number(this.input12_2) - Number(this.input12_1);
    }

    }

    //CELL12_1 の計算関数_予算額
    handleCount12_1() {
        this.input11_1 = this.template.querySelector('[data-field-name="countNum11_1"]').value;
        this.input12_1 = this.template.querySelector('[data-field-name="countNum12_1"]').value;
        //CELL10_1
        this.countNum10_1 = Number(this.input11_1) + Number(this.input12_1);
    }

    //CELL11_2 の計算関数_精算額
    handleCount11_2() {
        this.input11_2 = this.template.querySelector('[data-field-name="countNum11_2"]').value;
        this.input12_2 = this.template.querySelector('[data-field-name="countNum12_2"]').value;
        //CELL10_2
        this.countNum10_2 = Number(this.input11_2) + Number(this.input12_2);
    
        }
    
    //CELL12_2 の計算関数_精算額
    handleCount12_2() {
        this.input11_2 = this.template.querySelector('[data-field-name="countNum11_2"]').value;
        this.input12_2 = this.template.querySelector('[data-field-name="countNum12_2"]').value;
        //CELL10_1
        this.countNum10_2 = Number(this.input11_2) + Number(this.input12_2);
    }



    //-------------------------指導監督費---①人 件 費-------------------------------//
    //CELL14_1 の計算関数_予算額
    handleCount14_1() {
        this.input14_1 = this.template.querySelector('[data-field-name="countNum14_1"]').value;
        this.input15_1 = this.template.querySelector('[data-field-name="countNum15_1"]').value;
        //CELL14_1
        this.countNum13_1 = Number(this.input14_1) + Number(this.input15_1);

        //CELL13_3
        if (Number(this.countNum13_1) > Number(this.countNum13_2)) {
            this.fugou13 = "△";
            this.countNum13_3 = Number(this.countNum13_1) - Number(this.countNum13_2);
        } else {
            this.fugou13 = "";
            this.countNum13_3 = Number(this.countNum13_2) - Number(this.countNum13_1);
        }


        //CELL14_3
        this.input14_2 = this.template.querySelector('[data-field-name="countNum14_2"]').value;
        if (Number(this.input14_1) > Number(this.input14_2)) {
            this.fugou14 = "△";
            this.countNum14_3 = Number(this.input14_1) - Number(this.input14_2);
        } else {
            this.fugou14 = "";
            this.countNum14_3 = Number(this.input14_2) - Number(this.input14_1);
        }


        //CELL15_3
        this.input15_2 = this.template.querySelector('[data-field-name="countNum15_2"]').value;
        if (Number(this.input15_1) > Number(this.input15_2)) {
            this.fugou15 = "△";
            this.countNum15_3 = Number(this.input15_1) - Number(this.input15_2);
        } else {
            this.fugou15 = "";
            this.countNum15_3 = Number(this.input15_2) - Number(this.input15_1);
        }

        //---------------計 予算額----------------------//
        this.countNum22_1 = Number(this.countNum13_1) + Number(this.countNum16_1)+Number(this.countNum19_1);
        this.input17_1 = this.template.querySelector('[data-field-name="countNum17_1"]').value;
        this.input20_1 = this.template.querySelector('[data-field-name="countNum20_1"]').value;
        this.countNum23_1 = Number(this.input14_1) + Number(this.input17_1) +Number(this.input20_1);

        //---------------計 差引増△減額-----------------//
        //CELL22_3
        if (Number(this.countNum22_1) > Number(this.countNum22_2)) {
            this.fugou22 = "△";
            this.countNum22_3 = Number(this.countNum22_1) - Number(this.countNum22_2);
        } else {
            this.fugou22 = "";
            this.countNum22_3 = Number(this.countNum22_2) - Number(this.countNum22_1);
        }

        //CELL23_3
        if (Number(this.countNum23_1) > Number(this.countNum23_2)) {
            this.fugou23 = "△";
            this.countNum23_3 = Number(this.countNum23_1) - Number(this.countNum23_2);
        } else {
            this.fugou23 = "";
            this.countNum23_3 = Number(this.countNum23_2) - Number(this.countNum23_1);
        }

        
    }

    // 指導監督費-人件費
    // CELL15_1 の計算関数_予算額
    handleCount15_1() {
        this.input14_1 = this.template.querySelector('[data-field-name="countNum14_1"]').value;
        this.input15_1 = this.template.querySelector('[data-field-name="countNum15_1"]').value;
        //CELL13_1
        this.countNum13_1 = Number(this.input14_1) + Number(this.input15_1);
        //---------------計 予算額----------------------//
        this.input18_1 = this.template.querySelector('[data-field-name="countNum18_1"]').value;
        this.input21_1 = this.template.querySelector('[data-field-name="countNum21_1"]').value;
        this.countNum24_1 = Number(this.input15_1) + Number(this.input18_1)+ Number(this.input21_1);

        
        //CELL24_3
        if (Number(this.countNum24_1) > Number(this.countNum24_2)) {
            this.fugou24 = "△";
            this.countNum24_3 = Number(this.countNum24_1) - Number(this.countNum24_2);
        } else {
            this.fugou24 = "";
            this.countNum24_3 = Number(this.countNum24_2) - Number(this.countNum24_1);
        } 

    }

    //指導監督費-人件費
    //CELL14_2 の計算関数_精算額
    handleCount14_2() {
        this.input14_2 = this.template.querySelector('[data-field-name="countNum14_2"]').value;
        this.input15_2 = this.template.querySelector('[data-field-name="countNum15_2"]').value;
        //CELL13_2
        this.countNum13_2 = Number(this.input14_2) + Number(this.input15_2);

        //---------------計 精算額----------------------//
        this.input17_2 = this.template.querySelector('[data-field-name="countNum17_2"]').value;
        this.input20_2 = this.template.querySelector('[data-field-name="countNum20_2"]').value;
        this.countNum22_2 = Number(this.countNum13_2) + Number(this.countNum16_2)+Number(this.countNum19_2);
        this.countNum23_2 = Number(this.input14_2) + Number(this.input17_2)+ Number(this.input20_2);
    }

    //指導監督費-人件費
    //CELL15_2 の計算関数_精算額
    handleCount15_2() {
        this.input14_2 = this.template.querySelector('[data-field-name="countNum14_2"]').value;
        this.input15_2 = this.template.querySelector('[data-field-name="countNum15_2"]').value;
        //CELL13_2
        this.countNum13_2 = Number(this.input14_2) + Number(this.input15_2);

        //---------------計 精算額----------------------//
        this.input18_2 = this.template.querySelector('[data-field-name="countNum18_2"]').value;
        this.input21_2 = this.template.querySelector('[data-field-name="countNum21_2"]').value;
        this.countNum24_2 = Number(this.input15_2) + Number(this.input18_2)+Number(this.input21_2);

    }

     //-------------------------指導監督費---②旅 費-------------------------------//
     //CELL16_1 の計算関数_予算額
     handleCount17_1() {
        this.input17_1 = this.template.querySelector('[data-field-name="countNum17_1"]').value;
        this.input18_1 = this.template.querySelector('[data-field-name="countNum18_1"]').value;
        //CELL16_1
        this.countNum16_1 = Number(this.input17_1) + Number(this.input18_1);

        //CELL16_3
        if (Number(this.countNum16_1) > Number(this.countNum16_2)) {
            this.fugou16 = "△";
            this.countNum16_3 = Number(this.countNum16_1) - Number(this.countNum16_2);
        } else {
            this.fugou16 = "";
            this.countNum16_3 = Number(this.countNum16_2) - Number(this.countNum16_1);
        }


        //CELL17_3
        this.input17_2 = this.template.querySelector('[data-field-name="countNum17_2"]').value;
        if (Number(this.input17_1) > Number(this.input17_2)) {
            this.fugou17 = "△";
            this.countNum17_3 = Number(this.input17_1) - Number(this.input17_2);
        } else {
            this.fugou17 = "";
            this.countNum17_3 = Number(this.input17_2) - Number(this.input17_1);
        }


        //CELL18_3
        this.input18_2 = this.template.querySelector('[data-field-name="countNum18_2"]').value;
        if (Number(this.input18_1) > Number(this.input18_2)) {
            this.fugou18 = "△";
            this.countNum18_3 = Number(this.input18_1) - Number(this.input18_2);
        } else {
            this.fugou18 = "";
            this.countNum18_3 = Number(this.input18_2) - Number(this.input18_1);
        }

        //---------------計 予算額----------------------//
        this.countNum22_2 = Number(this.countNum13_2) + Number(this.countNum16_2)+Number(this.countNum19_2);
        this.input17_2 = this.template.querySelector('[data-field-name="countNum17_2"]').value;
        this.input20_2 = this.template.querySelector('[data-field-name="countNum20_2"]').value;
        this.countNum23_2 = Number(this.input14_2) + Number(this.input17_2) +Number(this.input20_2);
    }

    // 指導監督費-旅 費
    // CELL18_1 の計算関数_予算額
    handleCount18_1() {
        this.input17_1 = this.template.querySelector('[data-field-name="countNum17_1"]').value;
        this.input18_1 = this.template.querySelector('[data-field-name="countNum18_1"]').value;
        //CELL16_1
        this.countNum16_1 = Number(this.input17_1) + Number(this.input18_1);
        //---------------計 予算額----------------------//
        this.input15_1 = this.template.querySelector('[data-field-name="countNum15_1"]').value;
        this.input21_1 = this.template.querySelector('[data-field-name="countNum21_1"]').value;
        this.countNum24_1 = Number(this.input15_1) + Number(this.input18_1)+ Number(this.input21_1);

    }

    //指導監督費-旅 費
    //CELL17_2 の計算関数_精算額
    handleCount17_2() {
        this.input17_2 = this.template.querySelector('[data-field-name="countNum17_2"]').value;
        this.input18_2 = this.template.querySelector('[data-field-name="countNum18_2"]').value;
        //CELL16_2
        this.countNum16_2 = Number(this.input17_2) + Number(this.input18_2);

        //---------------計 精算額----------------------//
        this.input14_2 = this.template.querySelector('[data-field-name="countNum14_2"]').value;
        this.input20_2 = this.template.querySelector('[data-field-name="countNum20_2"]').value;
        this.countNum22_2 = Number(this.countNum13_2) + Number(this.countNum16_2)+Number(this.countNum19_2);
        this.countNum23_2 = Number(this.input14_2) + Number(this.input17_2)+ Number(this.input20_2);
    }

    //指導監督費-旅 費
    //CELL18_2 の計算関数_精算額
    handleCount18_2() {
        this.input17_2 = this.template.querySelector('[data-field-name="countNum17_2"]').value;
        this.input18_2 = this.template.querySelector('[data-field-name="countNum18_2"]').value;
        //CELL16_2
        this.countNum16_2 = Number(this.input17_2) + Number(this.input18_2);

        // //---------------計 精算額----------------------//
        // this.input15_2 = this.template.querySelector('[data-field-name="countNum15_2"]').value;
        // this.input21_2 = this.template.querySelector('[data-field-name="countNum21_2"]').value;
        // this.countNum24_2 = Number(this.input15_2) + Number(this.input18_2)+Number(this.input21_2);

    }

    //-------------------------指導監督費---③庁費-------------------------------//
    //CELL20_1 の計算関数_予算額
    handleCount20_1() {
        this.input20_1 = this.template.querySelector('[data-field-name="countNum20_1"]').value;
        this.input21_1 = this.template.querySelector('[data-field-name="countNum21_1"]').value;
        //CELL19_1
        this.countNum19_1 = Number(this.input20_1) + Number(this.input21_1);

        //CELL19_3
        if (Number(this.countNum19_1) > Number(this.countNum19_2)) {
            this.fugou19 = "△";
            this.countNum19_3 = Number(this.countNum19_1) - Number(this.countNum19_2);
        } else {
            this.fugou19 = "";
            this.countNum19_3 = Number(this.countNum19_2) - Number(this.countNum19_1);
        }


        //CELL20_3
        this.input20_2 = this.template.querySelector('[data-field-name="countNum20_2"]').value;
        if (Number(this.input20_1) > Number(this.input20_2)) {
            this.fugou20 = "△";
            this.countNum20_3 = Number(this.input20_1) - Number(this.input20_2);
        } else {
            this.fugou20 = "";
            this.countNum20_3 = Number(this.input20_2) - Number(this.input20_1);
        }


        //CELL21_3
        this.input21_2 = this.template.querySelector('[data-field-name="countNum21_2"]').value;
        if (Number(this.input21_1) > Number(this.input21_2)) {
            this.fugou21 = "△";
            this.countNum21_3 = Number(this.input21_1) - Number(this.input21_2);
        } else {
            this.fugou21 = "";
            this.countNum21_3 = Number(this.input21_2) - Number(this.input21_1);
        }

        // //---------------指導監督費 計 予算額----------------------//
        // this.countNum22_2 = Number(this.countNum13_2) + Number(this.countNum16_2)+Number(this.countNum19_2);
        // this.input17_2 = this.template.querySelector('[data-field-name="countNum17_2"]').value;
        // this.input20_2 = this.template.querySelector('[data-field-name="countNum20_2"]').value;
        // this.countNum23_2 = Number(this.input14_2) + Number(this.input17_2) +Number(this.input20_2);
    }

    // 指導監督費-庁費
    // CELL21_1 の計算関数_予算額
    handleCount21_1() {
        this.input20_1 = this.template.querySelector('[data-field-name="countNum20_1"]').value;
        this.input21_1 = this.template.querySelector('[data-field-name="countNum21_1"]').value;
        //CELL19_1
        this.countNum19_1 = Number(this.input20_1) + Number(this.input21_1);
        //---------------計 予算額----------------------//
        this.input15_1 = this.template.querySelector('[data-field-name="countNum15_1"]').value;
        this.input18_1 = this.template.querySelector('[data-field-name="countNum18_1"]').value;
        this.countNum24_1 = Number(this.input15_1) + Number(this.input18_1)+ Number(this.input21_1);

    }

    //指導監督費-庁費
    //CELL20_2 の計算関数_精算額
    handleCount20_2() {
        this.input20_2 = this.template.querySelector('[data-field-name="countNum20_2"]').value;
        this.input21_2 = this.template.querySelector('[data-field-name="countNum21_2"]').value;
        //CELL19_2
        this.countNum19_2 = Number(this.input20_2) + Number(this.input21_2);

        // //---------------計 精算額----------------------//
        // this.input14_2 = this.template.querySelector('[data-field-name="countNum14_2"]').value;
        // this.input17_2 = this.template.querySelector('[data-field-name="countNum17_2"]').value;
        // this.countNum22_2 = Number(this.countNum13_2) + Number(this.countNum16_2)+Number(this.countNum19_2);
        // this.countNum23_2 = Number(this.input14_2) + Number(this.input17_2)+ Number(this.input20_2);
    }

    //指導監督費-庁費
    //CELL21_2 の計算関数_精算額
    handleCount21_2() {
        this.input20_2 = this.template.querySelector('[data-field-name="countNum20_2"]').value;
        this.input21_2 = this.template.querySelector('[data-field-name="countNum21_2"]').value;
        //CELL19_2
        this.countNum19_2 = Number(this.input20_2) + Number(this.input21_2);

        // //---------------計 精算額----------------------//
        // this.input15_2 = this.template.querySelector('[data-field-name="countNum15_2"]').value;
        // this.input18_2 = this.template.querySelector('[data-field-name="countNum18_2"]').value;
        // this.countNum24_2 = Number(this.input15_2) + Number(this.input18_2)+Number(this.input21_2);

    }



}