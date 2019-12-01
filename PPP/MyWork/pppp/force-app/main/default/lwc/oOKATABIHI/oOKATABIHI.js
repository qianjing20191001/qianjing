import { LightningElement, track} from 'lwc';



// 区分
var KubunnOptions = [
    { label: '森林整備課', value: '森林整備課' },
    { label: '林業戦略課', value: '林業戦略課' },
];

// 事業区分
var jigyokubunnOptions = [
    { label: '林都事業', value: '林都事業' },
    { label: '造林事業', value: '造林事業' },
];
export default class App extends LightningElement {

@track jigyokubunn;
@track Kubunn;
@track jigyokubunnOptions = jigyokubunnOptions;
@track KubunnOptions = KubunnOptions;

    /**
         *区分変更
        */


    handleKubunnChange(event){
        this.Kubunn =event.target.value;
    }
     /**
     *事業区分変更
    */
   handleJigyokubunnChange(event) {
    this.jigyokubunn = event.target.value;
    }


 
    
}