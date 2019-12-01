import { LightningElement, track } from "lwc";

import getAccountList from "@salesforce/apex/CsvDownloadController.getAccounts";
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import serachAccs from '@salesforce/apex/CsvDownloadController.retriveAccs';
const columns = [
  {
    label: "申請年度",
    fieldName: "sinnSeiNedo",
    type: "text"
  },
  {
    label: "都道府県コード",
    fieldName: "toDoFuKeiCode",
    type: "text"
  },
  {
    label: "地域協議会コード",
    fieldName: "chiikiCode",
    type: "text"
  },
  {
    label: "地域協議会等管理コード",
    fieldName: "chiikiKanriCode",
    type: "text"
  },
  {
    label: "共済組合コード",
    fieldName: "kaiSaikumiCode",
    type: "text"
  },
  {
    label: "農業者名（漢字）",
    fieldName: "NogyouSya",
    type: "text"
  }
];
export default class CSVDOWNLOAD extends LightningElement {
 
  @track columns = columns;
  @track searchData;
  @track searchData1;
  @track error;
  @track strSearchNedo;
  constructor() {
    super();
    this.getallaccounts();
}

getallaccounts() {
  getAccountList()
  .then(result => {
      this.searchData = result;
      this.error = undefined;
  })
  .catch(error => {
      this.error = error;
      this.dispatchEvent(
          new ShowToastEvent({
              title: 'Error while getting Accounts', 
              message: error.message, 
              variant: 'error'
          }),
      );
      this.searchData = undefined;
  });
}

  handleSearchNedo(event) {
    this.strSearchNedo = event.detail.value;
    
  }
  handleSearchTodofukei(event) {
    this.strSearchTodofukei = event.detail.value;
  }
  handleSearchChiiki(event) {
    this.strSearchChiiki = event.detail.value;
  }
  handleSearchChiikiKanri(event) {
    this.strSearchChiikiKanri = event.detail.value;
  }
  handleSearchkaiSaikumi(event) {
    this.strSearchkaiSaikumi = event.detail.value;
  }

  handleSearchNogyouSya(event) {
    this.strSearchNogyouSya = event.detail.value;
  }

  handleSearch() {
    if (!this.strSearchNedo) {
      this.errorMsg = "Please enter correct 年度 to search.";
      this.searchData1 = undefined;
      return;
    }
    // eslint-disable-next-line no-undef
    Console.LOG("NEDO:" +this.strSearchNedo)
    // if (!this.strSearchTodofukei) {
    //   this.errorMsg = "Please enter correct 都道府県コードto search.";
    //   this.searchData = undefined;
    //   return;
    // }

    // if (!this.strSearchChiiki) {
    //   this.errorMsg = "Please enter correct 地域協議会コード to search.";
    //   this.searchData = undefined;
    //   return;
    // }

    // if (!this.strSearchChiikiKanri) {
    //   this.errorMsg = "Please enter correct 地域協議会等管理コード to search.";
    //   this.searchData = undefined;
    //   return;
    // }

    // if (!this.strSearchkaiSaikumi) {
    //   this.errorMsg = "Please enter correct 共済組合コード to search.";
    //   this.searchData = undefined;
    //   return;
    // }

    // if (!this.strSearchNogyouSya) {
    //   this.errorMsg = "Please enter correct 農業者名（漢字） to search.";
    //   this.searchData = undefined;
    //   return;
    // }
    serachAccs({sinnSeiNedo: this.strSearchNedo})
      // toDoFuKeiCode: this.strSearchTodofukei,
      // chiikiCode: this.strSearchChiiki,
      // chiikiKanriCode: this.strSearchChiikiKanri,
      // kaiSaikumiCode: this.strSearchkaiSaikumi,
      // NogyouSya: this.strSearchNogyouSya
    
      .then(result => {
        result.forEach(record => {
          
          record.sinnSeiNedo =  '/' + record.ID;
          // record.toDoFuKeiCode = '/' + record.Id;
          // record.chiikiCode = '/' + record.Id;
          // record.chiikiKanriCode = '/' + record.Id;
          // record.kaiSaikumiCode = '/' + record.Id;
          // record.NogyouSya = '/' + record.Id;
        });

        this.searchData1 = result;
      })
      .catch(error => {
        this.searchData1 = undefined;
        window.console.log("error =====> " + JSON.stringify(error));
        if (error) {
          this.errorMsg = error.body.message;
        }
      })
  }

  // this method validates the data and creates the csv file to download
  downloadCSVFile() {   
    let rowEnd = '\n';
    let csvString = '';
    // this set elminates the duplicates if have any duplicate keys
    let rowData = new Set();

    // getting keys from data
    this.searchData.forEach(function (record) {
        Object.keys(record).forEach(function (key) {
            rowData.add(key);
        });
    });

    // Array.from() method returns an Array object from any object with a length property or an iterable object.
    rowData = Array.from(rowData);
    
    // splitting using ','
    csvString += rowData.join(',');
    csvString += rowEnd;

    // main for loop to get the data based on key value
    for(let i=0; i < this.searchData.length; i++){
        let colValue = 0;

        // validating keys in data
        for(let key in rowData) {
            if(rowData.hasOwnProperty(key)) {
                // Key value 
                // Ex: Id, Name
                let rowKey = rowData[key];
                // add , after every value except the first.
                if(colValue > 0){
                    csvString += ',';
                }
                // If the column is undefined, it as blank in the CSV file.
                let value = this.searchData[i][rowKey] === undefined ? '' : this.searchData[i][rowKey];
                csvString += '"'+ value +'"';
                colValue++;
            }
        }
        csvString += rowEnd;
    }

    // Creating anchor element to download
    let downloadElement = document.createElement('a');

    // This  encodeURI encodes special characters, except: , / ? : @ & = + $ # (Use encodeURIComponent() to encode these characters).
    downloadElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csvString);
    downloadElement.target = '_self';
    // CSV File Name
    downloadElement.download = 'Account Data.csv';
    // below statement is required if you are using firefox browser
    document.body.appendChild(downloadElement);
    // click() Javascript function to download CSV file
    downloadElement.click(); 
}
}
