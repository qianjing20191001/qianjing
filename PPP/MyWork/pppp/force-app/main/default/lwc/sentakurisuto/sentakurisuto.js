import { LightningElement, api} from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class RecordEditFormSample extends LightningElement {

    @api recordId; // Bear Id
    
    get supervisorId(){
        return this.hyou1;
    }

    handleSubmit(event) {
        event.preventDefault();       // stop the form from submitting
        const fields = event.detail.fields;
        if(fields.reportNo === null || fields.reportNo === '') {
            const evt = new ShowToastEvent({
                title: "Account Operated Failed",
                message: "Account Industry cannot be blank",
                variant: "error"
            });
            this.dispatchEvent(evt);
            return;
        }
        this.template.querySelector('lightning-record-edit-form').submit(fields);
    }

    handleLoad() {
    }

    // hyou1= 

    handleSuccess(event) {
        this.hyou1 = event.detail.id;
        window.console.log("this.hyou1="+this.hyou1);
        const evt = new ShowToastEvent({
            title: "Account Operated Success",
            message: event.detail.id,
            variant: "success", 
        });
        this.dispatchEvent(evt);
    }

    

    handleError(event) {
        const evt = new ShowToastEvent({
            title: "Account Operated Failed",
            message: event.detail.message,
            variant: "error"
        });
        this.dispatchEvent(evt);
    }

    handleReset(event) {
        const inputFields = this.template.querySelectorAll(
            'lightning-input-field'
        );
        if (inputFields) {
            inputFields.forEach(field => {
                field.reset();
            });
        }
     }
}