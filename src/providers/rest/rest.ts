import { HttpClient, HttpHeaders, RequestOptions, Http } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  apiUrl = 'http://192.168.10.20:3000';

  constructor(public http: HttpClient) {
    console.log('Hello RestServiceProvider Provider');
  }

  getExpiryDatas() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/expiredata').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  addExpiryDataItem(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/expiredata', data, {
        headers: new HttpHeaders().set({ 'Content-Type': 'application/x-www-form-urlencoded' }),
      })
        .subscribe(res => {
          resolve(res);
        });
    });
  }

}
