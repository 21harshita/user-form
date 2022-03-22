import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatatableService {
  id: number;
  firstname: string;
  lastname: string;

persons : any[]=[{
  id: 1,
  firstName: "A" ,
  lastName: "A",
},

{
  id: 2,
  firstName: "B" ,
  lastName: "B",
},


{
  id: 3,
  firstName: "C" ,
  lastName: "C",
}


];
  constructor() { }

  getPersons(){
    return this.persons;
  }
}
