import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  getAll(username: string, password: string) {
    return this.http
      .get(
        environment.apiurl +
          'insert.php?username=' +
          username +
          '&password=' +
          password +
          '&token=HWV8joY1OZYliRSLrJ0Spk5fiasqAWP7'
        // {
        //   headers: {
        //     'Content-Type': 'application/x-www-form-urlencoded',
        //   },
        // }
      )
      .map((data) => {
        // console.log(result)
        let arr: any = data;
        // for (var i in result) {
        //     arr[i] = (JSON.parse(result[i]))
        // }
        return arr;
      });
  }
}
