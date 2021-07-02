import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
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
      .pipe(map((data) => {
        // console.log(result)
        let arr: any = data;
        // for (var i in result) {
        //     arr[i] = (JSON.parse(result[i]))
        // }
        return arr;
      }));
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
      .pipe(map((data) => {
        // console.log(result)
        let arr: any = data;
        // for (var i in result) {
        //     arr[i] = (JSON.parse(result[i]))
        // }
        return arr;
      }));
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
      .pipe(map((data) => {
        // console.log(result)
        let arr: any = data;
        // for (var i in result) {
        //     arr[i] = (JSON.parse(result[i]))
        // }
        return arr;
      }));
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
      .pipe(map((data) => {
        // console.log(result)
        let arr: any = data;
        // for (var i in result) {
        //     arr[i] = (JSON.parse(result[i]))
        // }
        return arr;
      }));
  }
  insertcalc1(
    username: string,
    patient_id: string,
    name: string,
    age: string,
    gender: string,
    city: string,
    s_blood_pressure: string,
    d_blood_pressure: string,
    hypertension: string,
    abn_renal: string,
    liver_function: string,
    stroke: string,
    bleeding: string,
    labile_inrs: string,
    elderly: string,
    drugs: string,
    alcohol: string,
    has_bled_score: string,
    bleed_100_pat: string
   
  ) {
    return this.http
      .get(
        environment.apiurl +
        'calc1_hasbled.php?username=' +
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
        '&hypertension='+
        hypertension + 
    '&abn_renal=' +
    abn_renal +
      '&liver_function=' +  
    liver_function +  
    '&stroke=' +  
    stroke +  
    '&bleeding=' +  
    bleeding +  
    '&labile_inrs=' +
    labile_inrs +
    '&elderly=' +   
    elderly +   
    '&drugs=' +
    drugs +
    '&alcohol=' +
    alcohol +
    '&has_bled_score=' +  
    has_bled_score +  
    '&bleed_100_pat=' +
    bleed_100_pat +     
          '&token=HWV8joY1OZYliRSLrJ0Spk5fiasqAWP7'
        // {
        //   headers: {
        //     'Content-Type': 'application/x-www-form-urlencoded',
        //   },
        // }
      )
      .pipe(map((data) => {
        // console.log(result)
        let arr: any = data;
        // for (var i in result) {
        //     arr[i] = (JSON.parse(result[i]))
        // }
        return arr;
      }));
  }
  insertcalc2(
    username: string,
    patient_id: string,
    name: string,
    age: string,
    gender: string,
    city: string,
    s_blood_pressure: string,
    d_blood_pressure: string,
    anemia: string,
    severe_renal_disease: string,
    age_greater_above_75: string,
    prior_hemorrhage: string,
    hypertension_history: string,
    atria_score: string,
    risk_category: string,
    clinical_interpretation: string
    
   
  ) {
    return this.http
      .get(
        environment.apiurl +
        'calc2_atria.php?username=' +
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

        '&anemia='+
        anemia + 
    '&severe_renal_disease=' +
    severe_renal_disease +
      '&age_greater_above_75=' +  
    age_greater_above_75 +  
    '&prior_hemorrhage=' +  
    prior_hemorrhage +  
    '&hypertension_history=' +  
    hypertension_history +  
    '&atria_score=' +
    atria_score +
    '&risk_category=' +   
    risk_category +   
    '&clinical_interpretation=' +
    clinical_interpretation +
    '&alcohol=' +     
          '&token=HWV8joY1OZYliRSLrJ0Spk5fiasqAWP7'
        // {
        //   headers: {
        //     'Content-Type': 'application/x-www-form-urlencoded',
        //   },
        // }
      )
      .pipe(map((data) => {
        // console.log(result)
        let arr: any = data;
        // for (var i in result) {
        //     arr[i] = (JSON.parse(result[i]))
        // }
        return arr;
      }));
  }
  insertcalc3(
    username: string,
    patient_id: string,
    name: string,
    age: string,
    gender: string,
    city: string,
    s_blood_pressure: string,
    d_blood_pressure: string,
    previous_vte: string,
    known_thrombophilia: string,
    current_lower_limb_paralysis: string,
    current_cancer: string,
    immobilized_more_equal_7: string,
    icu_ccu_stay: string,
    age_above_60: string,
    improve_risk_score: string,
    clinical_interpretation: string
    
   
  ) {
    return this.http
      .get(
        environment.apiurl +
        'calc3_vte.php?username=' +
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

        '&previous_vte='+
        previous_vte + 
    '&known_thrombophilia=' +
    known_thrombophilia +
      '&current_lower_limb_paralysis=' +  
    current_lower_limb_paralysis +  
    '&current_cancer=' +  
    current_cancer +  
    '&immobilized_more_equal_7=' +  
    immobilized_more_equal_7 +  
    '&icu_ccu_stay=' +
    icu_ccu_stay +
    '&age_above_60=' +   
    age_above_60 +   
    '&improve_risk_score=' +
    improve_risk_score +
    '&clinical_interpretation=' +
    clinical_interpretation +
    '&alcohol=' +     
          '&token=HWV8joY1OZYliRSLrJ0Spk5fiasqAWP7'
        // {
        //   headers: {
        //     'Content-Type': 'application/x-www-form-urlencoded',
        //   },
        // }
      )
      .pipe(map((data) => {
        // console.log(result)
        let arr: any = data;
        // for (var i in result) {
        //     arr[i] = (JSON.parse(result[i]))
        // }
        return arr;
      }));
  }
  insertcalc4(
    username: string,
    patient_id: string,
    name: string,
    age: string,
    gender: string,
    city: string,
    s_blood_pressure: string,
    d_blood_pressure: string,
    Congestive_heart_failure: string,
    Hypertension: string,
    Age_75_years: string,
    Diabetes_mellitus: string,
    Stroke_Ischemic_Attack_hromboembolic_event: string,
    vascular_disease: string,
    Age_65_to_74_years: string,
    Sex_category: string,
    total_score: string,
    Risk_levelRisk_levelAdjusted_Stroke_Risk: string,
    Thromboembolic_event_rate: string,
    Treatment_Recommendations: string
   
  ) {
    return this.http
      .get(
        environment.apiurl +
        'calc4_chadvad.php?username=' +
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
        '&Congestive_heart_failure='+
        Congestive_heart_failure + 
    '&Hypertension=' +
    Hypertension +
      '&Age_75_years=' +  
    Age_75_years +  
    '&Diabetes_mellitus=' +  
    Diabetes_mellitus +  
    '&Stroke_Ischemic_Attack_hromboembolic_event=' +  
    Stroke_Ischemic_Attack_hromboembolic_event +  
    '&vascular_disease=' +
    vascular_disease +
    '&Age_65_to_74_years=' +   
    Age_65_to_74_years +   
    '&Sex_category=' +
    Sex_category +
    '&total_score=' +
    total_score +
    '&Risk_levelRisk_levelAdjusted_Stroke_Risk=' +  
    Risk_levelRisk_levelAdjusted_Stroke_Risk +  
    '&Thromboembolic_event_rate=' +
    Thromboembolic_event_rate +     
    '&Treatment_Recommendations=' +
    Treatment_Recommendations +    
          '&token=HWV8joY1OZYliRSLrJ0Spk5fiasqAWP7'
        // {
        //   headers: {
        //     'Content-Type': 'application/x-www-form-urlencoded',
        //   },
        // }
      )
      .pipe(map((data) => {
        // console.log(result)
        let arr: any = data;
        // for (var i in result) {
        //     arr[i] = (JSON.parse(result[i]))
        // }
        return arr;
      }));
  }
  insertcalc5(
    username: string,
    patient_id: string,
    name: string,
    age: string,
    gender: string,
    city: string,
    s_blood_pressure: string,
    d_blood_pressure: string,
    Age_years: string,
    HDL_Cholesterol: string,
    Systolic_Blood_Pressure: string,
    Total_Cholesterol: string,
    cvd_Gender: string,
    On_BP_medication: string,
    Cigarette_smoker: string,
    Diabetes_present: string,
    CVD_Risk: string,
    Heart_Age_Vascular_Age: string
   
  ) {
    return this.http
      .get(
        environment.apiurl +
        'calc5_cvd.php?username=' +
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
        '&Age_years='+
        Age_years + 
    '&HDL_Cholesterol=' +
    HDL_Cholesterol +
      '&Systolic_Blood_Pressure=' +  
    Systolic_Blood_Pressure +  
    '&Total_Cholesterol=' +  
    Total_Cholesterol +  
    '&cvd_Gender=' +  
    cvd_Gender +  
    '&On_BP_medication=' +
    On_BP_medication +
    '&Cigarette_smoker=' +   
    Cigarette_smoker +   
    '&Diabetes_present=' +
    Diabetes_present +
    '&CVD_Risk=' +
    CVD_Risk +
    '&Heart_Age_Vascular_Age=' +  
    Heart_Age_Vascular_Age +    
          '&token=HWV8joY1OZYliRSLrJ0Spk5fiasqAWP7'
        // {
        //   headers: {
        //     'Content-Type': 'application/x-www-form-urlencoded',
        //   },
        // }
      )
      .pipe(map((data) => {
        // console.log(result)
        let arr: any = data;
        // for (var i in result) {
        //     arr[i] = (JSON.parse(result[i]))
        // }
        return arr;
      }));
  }
  insertcalc6(
    username: string,
    patient_id: string,
    name: string,
    age: string,
    gender: string,
    city: string,
    s_blood_pressure: string,
    d_blood_pressure: string,
    Repiratory_rate_breaths_per_min: string,
    Pulse_oximetry: string,
    O2_flow_rate: string,
    d_dimer: string,
    qCSI_Score: string,
    Risk_group: string,
    Risk_of_critical_illness: string,
    Anticoagulation_Recommendation: string
   
  ) {
    return this.http
      .get(
        environment.apiurl +
        'calc6_covid.php?username=' +
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
        '&Repiratory_rate_breaths_per_min='+
        Repiratory_rate_breaths_per_min + 
    '&Pulse_oximetry=' +
    Pulse_oximetry +
      '&O2_flow_rate=' +  
    O2_flow_rate +  
    '&d_dimer=' +  
    d_dimer +  
    '&qCSI_Score=' +  
    qCSI_Score +  
    '&Risk_group=' +
    Risk_group +
    '&Risk_of_critical_illness=' +   
    Risk_of_critical_illness +   
    '&Anticoagulation_Recommendation=' +
    Anticoagulation_Recommendation +
        
          '&token=HWV8joY1OZYliRSLrJ0Spk5fiasqAWP7'
        // {
        //   headers: {
        //     'Content-Type': 'application/x-www-form-urlencoded',
        //   },
        // }
      )
      .pipe(map((data) => {
        // console.log(result)
        let arr: any = data;
        // for (var i in result) {
        //     arr[i] = (JSON.parse(result[i]))
        // }
        return arr;
      }));
  }
  insertcalc7(
    username: string,
    patient_id: string,
    name: string,
    age: string,
    gender: string,
    city: string,
    s_blood_pressure: string,
    d_blood_pressure: string,
    Body_Weight: string,
    Indication: string,
    Target_ACT: string,
    Hepatic_Impairment: string,
    Bolus_dose: string,
    Bolus_Volume: string,
    Continuous_Infusion_Dose: string,
    Continuous_Infusion_Rate: string
   
  ) {
    return this.http
      .get(
        environment.apiurl +
        'calc7_argatroban.php?username=' +
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
        '&Body_Weight='+
        Body_Weight + 
    '&Indication=' +
    Indication +
      '&Target_ACT=' +  
    Target_ACT +  
    '&Hepatic_Impairment=' +  
    Hepatic_Impairment +  
    '&Bolus_dose=' +  
    Bolus_dose +  
    '&Bolus_Volume=' +
    Bolus_Volume +
    '&Continuous_Infusion_Dose=' +   
    Continuous_Infusion_Dose +   
    '&Continuous_Infusion_Rate=' +
    Continuous_Infusion_Rate +
       
          '&token=HWV8joY1OZYliRSLrJ0Spk5fiasqAWP7'
        // {
        //   headers: {
        //     'Content-Type': 'application/x-www-form-urlencoded',
        //   },
        // }
      )
      .pipe(map((data) => {
        // console.log(result)
        let arr: any = data;
        // for (var i in result) {
        //     arr[i] = (JSON.parse(result[i]))
        // }
        return arr;
      }));
  }
}
