import { LightningElement, track } from 'lwc';
const CSS_CLASS = 'modal-hidden';

// 申請元　都道府県
var shinnSeiMotoOptions = [
        { label: '北海道', value: '北海道' },
        { label: '青森', value: '青森' },
            { label: '北海道', value: '北海道' },
        { label: '岩手', value: '岩手' },
            { label: '宮城', value: '宮城' },
        { label: '青森', value: '青森' },
            { label: '静岡', value: '静岡' },
        { label: '京都', value: '京都' },
            { label: '大阪', value: '大阪' },
        { label: '東京', value: '東京' },
    ];

export default class App extends LightningElement {
    /**
     * @track indicates that if this object changes,
     * the UI should update to reflect those changes.
     */

    @track shinnSeiMoto;
    @track shinnSeiMotoOptions = shinnSeiMotoOptions;

       /**
         *区分変更
        */


       handleShinnSeiMotoChange(event){
        this.shinnSeiMoto =event.target.value;
    }

  @track activeTab = 'tab1';

    handleActive(event) {
        this.activeTab = event.target.value;
    }
    

    
}