import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private data: any;

  constructor() { }

  setData(data: any) {
    this.data = data;
  }

  getData(): any {
    return this.data;
  }
}
