import { LightningElement,  track ,wire} from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/TestForest__c.Name';
import ReportNo_FIELD from '@salesforce/schema/TestForest__c.reportNo__c';
import Item1_FIELD from '@salesforce/schema/TestForest__c.Item1__c';
import Item2_FIELD from '@salesforce/schema/TestForest__c.Item2__c';
import Item3_FIELD from '@salesforce/schema/TestForest__c.Item3__c';
import Item4_FIELD from '@salesforce/schema/TestForest__c.Item4__c';
import Item5_FIELD from '@salesforce/schema/TestForest__c.Item5__c';
import Item6_FIELD from '@salesforce/schema/TestForest__c.Item6__c';
import TestForest_OBJECT from '@salesforce/schema/TestForest__c';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { refreshApex } from '@salesforce/apex';
import searchReportNo from '@salesforce/apex/testApexController.searchReportNo';
// import { collectValuesOfObjects, collectErrorMessages } from 'c/modelQueryUtils';

/**
 * 申請者情報詳細モーダル
 * @extends LightningElement
 */
// eslint-disable-next-line no-undef
export default class testApexSearch extends LightningElement {
 
    // /** 整備事業支出精算書 */
    // @track testForest;

    /** Record Id  */
    @track reportId;
    
    // //帳票ID取得一時保存
    // @track  wiredTestForestResult;

    @track name = '';
    @track reportNo = '';
    @track item1 = '';
    @track item2 = '';
    @track item3 = '';
    @track item4 = '';
    @track item5 = '';
    @track item6 = '';

        /** 検索結果一覧 */
        @track tableList;
    apiName = '';
    apiReportNo = '';
    apiItem1 = '';
    apiItem2 = '';
    apiItem3 = '';
    apiItem4 = '';
    apiItem5 = '';
    apiItem6 = '';
    
    /** 検索結果一時保存 */
    searchResult;


  
    handleCount7(event) {
        this.reportId = undefined;
        this.name = event.target.value;
    }



    handleCount8(event) {
        //this.reportId = undefined;
        this.reportNo = event.target.value;
    }

    handleCount1(event) {
       //this.reportId = undefined;
        this.item1 = event.target.value;
    }
    handleCount2(event) {
        //this.reportId = undefined;
        this.item2 = event.target.value;
    }
    handleCount3(event) {
        //this.reportId = undefined;
        this.item3 = event.target.value;
    }
    handleCount4(event) {
       // this.reportId = undefined;
        this.item4 = event.target.value;
    }
    handleCount5(event) {
        //this.reportId = undefined;
        this.item5 = event.target.value;
    }
    handleCount6(event) {
        //this.reportId = undefined;
        this.item6 = event.target.value;
    }
    createReport() {
        const fields = {};
        fields[NAME_FIELD.fieldApiName] = this.name;
        fields[ReportNo_FIELD.fieldApiName] = this.reportNo;
        fields[Item1_FIELD.fieldApiName] = this.item1;
        fields[Item2_FIELD.fieldApiName] = this.item2;
        fields[Item3_FIELD.fieldApiName] = this.item3;
        fields[Item4_FIELD.fieldApiName] = this.item4;
        fields[Item5_FIELD.fieldApiName] = this.item5;
        fields[Item6_FIELD.fieldApiName] = this.item6;

        const recordInput = { apiName: TestForest_OBJECT.objectApiName, fields };
        createRecord(recordInput)
            .then(testForest => {
                this.reportId = testForest.id;
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Report created',
                        variant: 'success',
                    }),
                );
            })
            .catch(error => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error creating record',
                        message: error.body.message,
                        variant: 'error',
                    }),
                );
            });
    }

    /** 検索ボタン処理 */
  handleSearch() {
    // eslint-disable-next-line no-console
    console.log('shinseiKinoList handleSearch start');

    this.apiName = this.name;
    this.apiReportNo = this.reportNo;
    this.apiItem1 = this.item1;
    this.apiItem2 = this.item2;
    this.apiItem3 = this.item3;
    this.apiItem4 = this.item4;
    this.apiItem5 = this.item5;
    this.apiItem6 = this.item6;  
    this.refreshDataTable();

    // eslint-disable-next-line no-console
    console.log('shinseiKinoList handleSearch end');
  }

   /**
   * 申請定義データ取得
   */
  @wire(searchReportNo, { reportNo: '$apiReportNo'})
  wiredReortNo(result) {
    // eslint-disable-next-line no-console
    console.log('shinseiKinoList wiredShinseiTeigis start');
    this.searchResult = result;
    if (result.data) {
      // eslint-disable-next-line no-console
      console.log(JSON.stringify(result.data));
      this.tableList = this.tableListTaihi = result.data;
    } else if (result.error) {
      // eslint-disable-next-line no-console
      console.error(JSON.stringify(result.error));
      // TODO: エラー処理
    }
    // eslint-disable-next-line no-console
    console.log('shinseiKinoList wiredShinseiTeigis end');
  }

  /** キャンセル時 */
  handleConfirmClose() {
    const modal = this.template.querySelector('c-test-apex-search');
    this.refreshDataTable();
    modal.hide();
  }

    // データテーブルリフレッシュ
    refreshDataTable() {
        // eslint-disable-next-line no-console
        console.log('shinseiKinoList refreshDataTable start');
        const p = new Promise((resolve) => {
          refreshApex(this.searchResult);
          resolve();
        });
        // eslint-disable-next-line no-console
        console.log('shinseiKinoList refreshDataTable end');
        return p;
    }


}