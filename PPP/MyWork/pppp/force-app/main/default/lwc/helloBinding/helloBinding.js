import { LightningElement ,track} from 'lwc';

export default class HelloBinding extends LightningElement {
    @track name='World';
    handleInput(event){
        this.name =event.target.value;
    }

}