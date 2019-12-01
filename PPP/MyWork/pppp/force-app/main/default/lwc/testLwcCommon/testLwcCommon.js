import { LightningElement, track, wire } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import { updateRecord } from 'lightning/uiRecordApi';
import ID_FIELD from '@salesforce/schema/TestForest__c.Id';
import Name_FIELD from '@salesforce/schema/TestForest__c.Name';
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
import getSingleReport from '@salesforce/apex/testApexController.getSingleReport';

export default class testLwcCommon extends LightningElement {
  /** Record Id  */
  @track reportId;

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


  /** 検索結果一時保存 */
  searchResult;

  @track disabled = false;
  @track error;




  handleCount7(event) {
    // this.reportId = undefined;
    this.name = event.target.value;
  }

  handleCount8(event) {
    //this.reportId = undefined;
    this.reportNo = event.target.value;
  }

  handleCount1(event) {
    this.item1 = event.target.value;
    if (!event.target.value) {
      event.target.reportValidity();
      this.disabled = true;
    }
    else {
      this.disabled = false;
    }
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
    fields[Name_FIELD.fieldApiName] = this.name;
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
    console.log('TestForest handleSearch start');

    this.apiReportNo = this.reportNo;
    // eslint-disable-next-line no-console
    console.log('this.apiReportNo' + this.apiReportNo);

    this.refreshDataTable();
    // eslint-disable-next-line no-console
    console.log('TestForest handleSearch end');
  }

  /**
  * REPORTデータ取得
  */
  idcreate = '';
  @wire(searchReportNo, { reportNo: '$apiReportNo' })
  wiredReortNo(result) {
    // eslint-disable-next-line no-console
    console.log('TestForest wiredReortNo start');
    this.searchResult = result;
    if (result.data) {
      // eslint-disable-next-line no-console
      console.log(JSON.stringify(result.data));
      this.name = result.data[0].Name;
      this.reportNo = result.data[0].reportNo__c;
      this.Item1 = result.data[0].Item1__c;
      this.Item2 = result.data[0].Item2__c;
      this.Item3 = result.data[0].Item3__c;
      this.Item4 = result.data[0].Item4__c;
      this.Item5 = result.data[0].Item5__c;
      this.Item6 = result.data[0].Item6__c;
      this.idcreate = result.data[0].Id;
      // eslint-disable-next-line no-console
      console.log('this.idcreate =' + this.idcreate);
    } else if (result.error) {
      // eslint-disable-next-line no-console
      console.error(JSON.stringify(result.error));
      // TODO: エラー処理
    }
    // eslint-disable-next-line no-console
    console.log('TestForest wiredReortNo end');
  }

  // データテーブルリフレッシュ
  refreshDataTable() {
    // eslint-disable-next-line no-console
    console.log('TestForest refreshDataTable start');
    const p = new Promise((resolve) => {
      refreshApex(this.searchResult);
      resolve();
    });
    // eslint-disable-next-line no-console
    console.log('TestForest refreshDataTable end');
    return p;
  }


  /** キャンセル時 */
  handleConfirmClose() {
    const modal = this.template.querySelector('c-test-apex-search');
    this.refreshDataTable();
    modal.hide();
  }


  @wire(getSingleReport)
  TestForest__c;
  updateReport() {
    // eslint-disable-next-line no-console
    console.log('TestForest updateReport start');
    const allValid = [...this.template.querySelectorAll('lightning-input')]
      .reduce((validSoFar, inputFields) => {
        inputFields.reportValidity();
        return validSoFar && inputFields.checkValidity();
      }, true);

    if (allValid) {
      //Create the recordInput object
      const fields = {};


      fields[ID_FIELD.fieldApiName] = this.idcreate;
      fields[Name_FIELD.fieldApiName] = this.name;
      fields[ReportNo_FIELD.fieldApiName] = this.reportNo;
      fields[Item1_FIELD.fieldApiName] = this.item1;
      fields[Item2_FIELD.fieldApiName] = this.item2;
      fields[Item3_FIELD.fieldApiName] = this.item3;
      fields[Item4_FIELD.fieldApiName] = this.item4;
      fields[Item5_FIELD.fieldApiName] = this.item5;
      fields[Item6_FIELD.fieldApiName] = this.item6;
      // eslint-disable-next-line no-console
      console.log("this.ID " + this.idcreate);

      // eslint-disable-next-line no-console
      console.log("this.reportNo " + this.reportNo);

      // eslint-disable-next-line no-console
      console.log("this.name " + this.name);
      // eslint-disable-next-line no-console
      console.log("this.item1 " + this.item1);
      // eslint-disable-next-line no-console
      console.log("this.item2 " + this.item2);
      // eslint-disable-next-line no-console
      console.log("this.item3 " + this.item3);
      // eslint-disable-next-line no-console
      console.log("this.item4 " + this.item4);
      // eslint-disable-next-line no-console
      console.log("this.item5 " + this.item5);
      //const recordInput = { apiName: TestForest_OBJECT.objectApiName, fields };
      const recordInput = { fields };
      // eslint-disable-next-line no-console
      console.log("this.recordInput " + this.recordInput);
      window.console.log("this.recordInput222 " + recordInput);
      updateRecord(recordInput)
        .then(() => {
          this.dispatchEvent(
            new ShowToastEvent({
              title: 'Success',
              message: 'Test_Forest updated',
              variant: 'success'
            })
          );
          // Display fresh data in the form
          return refreshApex(this.TestForest__c);
        })
        .catch(error => {
          this.dispatchEvent(
            new ShowToastEvent({
              title: 'Error creating record',
              message: error.body.message,
              variant: 'error'
            })
          );
        });
    }
    else {
      // The form is not valid
      this.dispatchEvent(
        new ShowToastEvent({
          title: 'Something is wrong',
          message: 'Check your input and try again.',
          variant: 'error'
        })
      );
    }
    // eslint-disable-next-line no-console
    console.log('TestForest updateReport end');
  }



}