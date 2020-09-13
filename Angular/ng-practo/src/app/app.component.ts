import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridNg2 } from 'ag-grid-angular';
import { timer } from 'rxjs';
import { MessageService } from './shared/services';
import { NotificationService, NotificationItem } from './shared/components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  constructor(private _messageService: MessageService,
  private _notificationService: NotificationService){
    
    this._messageService.messageStream$.subscribe(
      data => {
        this.notification = this._notificationService.getNotification(data);
      },
      err => console.log('eeeeeeeeeeeee',err)
    )
  }

  notification: NotificationItem;
  title = 'practo';
//   @ViewChild('agGrid') agGrid: AgGridNg2;


  


//   columnDefs = [
//     {headerName: 'Make', field: 'make', rowGroup: true },
//     {headerName: 'Price', field: 'price'}
// ];

// autoGroupColumnDef = {
//     headerName: 'Model',
//     field: 'model',
//     cellRenderer: 'agGroupCellRenderer',
//     cellRendererParams: {
//         checkbox: true
//     }
// };

// rowData: any;

// ngOnInit(){
//   // this.rowData = this.http.get('https://api.myjson.com/bins/15psn9');
//   this.rowData = this.http.get('https://api.myjson.com/bins/ly7d1');
// }


// getSelectedRows() {
//   const selectedNodes = this.agGrid.api.getSelectedNodes();
//   const selectedData = selectedNodes.map( node => node.data );
//   const selectedDataStringPresentation = selectedData.map( node => node.make + ' ' + node.model).join(', ');
//   console.log(`Selected nodes: ${selectedDataStringPresentation}`);
// }
}
