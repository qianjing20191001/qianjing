import { LightningElement, track } from 'lwc';
import serachAccs from '@salesforce/apex/LWCExampleController.retriveAccs';


// datatable columns
const columns = [
    {
        label: 'Name',
        fieldName: 'AccName',
        type: 'url',
        typeAttributes: {label: { fieldName: 'Name' }, target: '_blank'}
    }, {
        label: 'Industry',
        fieldName: 'Industry',
    }, {
        label: 'Phone',
        fieldName: 'Phone',
        type: 'phone',
    }, {
        label: 'Type',
        fieldName: 'Type',
        type: 'text'
    },
];
export default class CustomSearchInLWC extends LightningElement {
    @track searchData;
    @track columns = columns;
    @track errorMsg = '';
    strSearchAccName = '';
    @track hrefdata; 
    

    handleAccountName(event) {
        this.strSearchAccName = event.detail.value;
    }

    handleSearch() {
        if(!this.strSearchAccName) {
            this.errorMsg = 'Please enter account name to search.';
            this.searchData = undefined;
            return;
        }

        serachAccs({strAccName : this.strSearchAccName})
        .then(result => {
            result.forEach((record) => {
                record.AccName = '/' + record.Id;
            });

            this.searchData = result;
            
        })
        .catch(error => {
            this.searchData = undefined;
            window.console.log('error =====> '+JSON.stringify(error));
            if(error) {
                this.errorMsg = error.body.message;
            }
        }) 
    }

    exportToCSV(){
      let columnHeader = ["Name", "Industry", "Phone", "Type"];  // This array holds the Column headers to be displayd
      let jsonKeys = ["accountName", "accountIndustry", "accountPhone", "accountType"]; // This array holds the keys in the json data  
      var jsonRecordsData = this.accountList;  
      let csvIterativeData;  
      let csvSeperator  
      let newLineCharacter;  
      csvSeperator = ",";  
      newLineCharacter = "\n";  
      csvIterativeData = "";  
      csvIterativeData += columnHeader.join(csvSeperator);  
      csvIterativeData += newLineCharacter;  
      for (let i = 0; i < jsonRecordsData.length; i++) {  
        let counter = 0;  
        for (let iteratorObj in jsonKeys) {  
          let dataKey = jsonKeys[iteratorObj];  
          if (counter > 0) {  csvIterativeData += csvSeperator;  }  
          if (  jsonRecordsData[i][dataKey] !== null &&  
            jsonRecordsData[i][dataKey] !== undefined  
          ) {  csvIterativeData += '"' + jsonRecordsData[i][dataKey] + '"';  
          } else {  csvIterativeData += '""';  
          }  
          counter++;  
        }  
        csvIterativeData += newLineCharacter;  
      }  
      console.log("csvIterativeData", csvIterativeData);  
      this.hrefdata = "data:text/csv;charset=utf-8," + encodeURI(csvIterativeData);  
    }  


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


