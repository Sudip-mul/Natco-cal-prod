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

  savereport(username: string, patientname: string, pdfdata: any) {
    let body = {
      username: username,
      patientname: patientname,
      pdfdata: pdfdata,
      token: 'HWV8joY1OZYliRSLrJ0Spk5fiasqAWP7',
    };
    return this.http
      .post(environment.apiurl + 'storereports.php', body)
      .map((data) => {
        // console.log(result)
        let arr: any = data;
        // for (var i in result) {
        //     arr[i] = (JSON.parse(result[i]))
        // }
        return arr;
      });
  }

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

  changePwd(username: string, oldpassword: string, newpassword: string) {
    return this.http
      .get(
        environment.apiurl +
          'updatepassword.php?username=' +
          username +
          '&oldpassword=' +
          oldpassword +
          '&newpassword=' +
          newpassword +
          '&token=HWV8joY1OZYliRSLrJ0Spk5fiasqAWP7'
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

  insertpatient(
    username: string,
    patient_id: string,
    name: string,
    age: string,
    gender: string,
    city: string,
    s_blood_pressure: string,
    d_blood_pressure: string
  ) {
    return this.http
      .get(
        environment.apiurl +
          'patient_insert.php?username=' +
          username +
          '&patient_id=' +
          patient_id +
          '&name=' +
          name +
          '&age=' +
          age +
          '&gender=' +
          gender +
          '&city=' +
          city +
          '&s_blood_pressure=' +
          s_blood_pressure +
          '&d_blood_pressure=' +
          d_blood_pressure +
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
