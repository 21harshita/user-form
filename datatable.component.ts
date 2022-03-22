import { Component, OnInit ,OnDestroy} from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { DatatableService } from './datatable.service';
// import { DatatableService } from './datatable.service';
@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnDestroy ,OnInit {

  dtOptions: DataTables.Settings = {};
  persons: any[] = [];
  dtTrigger: Subject<any> = new Subject<any>();

  

  constructor(private data:DatatableService ) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };
    this.persons = this.data.getPersons();
    this.dtTrigger.next();
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

}

