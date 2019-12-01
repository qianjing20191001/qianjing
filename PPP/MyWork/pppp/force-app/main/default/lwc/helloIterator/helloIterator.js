import { LightningElement,track } from 'lwc';
// 出先機関
var desakikikannOptions = [
    { label: '東部農林水産局(徳島)', value: '東部農林水産局(徳島)' },
    { label: '南部総合県民(美波)', value: '南部総合県民(美波)' },
    { label: '南部総合県民(那賀)', value: '南部総合県民(那賀)' },
    { label: '東部農林水産局(吉野川)', value: '東部農林水産局(吉野川)' },
    { label: '西部総合県民局(美馬)', value: '西部総合県民局(美馬)' },
    { label: '西部総合県民局(三好)', value: '西部総合県民局(三好)' },
];

// 事業区分
var desakikikjigyokubunnOptionsannOptions = [
    { label: '林都事業', value: '林都事業' },
    { label: '造林事業', value: '造林事業' },
];

// 区分
var KubunnOptions = [
    { label: '森林整備課', value: '森林整備課' },
    { label: '林業戦略課', value: '林業戦略課' },
];

export default class HelloIterator extends LightningElement {
    @track desakikikann;
    @track jigyokubunn;
    @track Kubunn;
    @track desakikikannOptions = desakikikannOptions;
    @track jigyokubunnOptions = jigyokubunnOptions;
    @track KubunnOptions = KubunnOptions;

    /**
     *出先機関変更
    */
   handleDeSakiKikanChange(event) {
        this.desakikikann = event.target.value;
    }

        /**
     *事業区分変更
    */
   jigyokubunnChange(event) {
    this.jigyokubunn = event.target.value;
    }

    contacts = [
        {
            Id: '003171931112854375',
            Name: 'Amy Taylor',
            Title: 'COO',
        },
        {
            Id: '003192301009134555',
            Name: 'Michael Jones',
            Title: 'CTO',
        },
        {
            Id: '003848991274589432',
            Name: 'Jennifer Wu',
            Title: 'CEO',
        },
    ];
}