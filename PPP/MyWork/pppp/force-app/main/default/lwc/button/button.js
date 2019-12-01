import { LightningElement, track } from 'lwc';

export default class button extends LightningElement {
    @track openmodel = false;
    @track norinmodel = false;
    @track sirinmodel = false;
    @track value = '0' ;

    openmodal() {
        this.openmodel = true;
    }
    closeModal() {
        this.openmodel = false;
        this.norinmodel = false;
        this.sirinmodel = false;
        
    } 

    previewMethod() {  
        // eslint-disable-next-line no-console
        // console.log("event.target.value="+event.target.value);
        if (this.value === '0') {
            this.norinmodel = true;
        }else
        {
            this.sirinmodel = true;
        }
    }

    get options() {
        return [
            { label: '農林水産', value: '0' },
            { label: '森林整備事業', value: '1' },           
        ];
    }

    handleChange(event) {
        // eslint-disable-next-line no-console
        console.log("event.detail.value="+event.detail.value);
        this.value = event.detail.value;
    }
}