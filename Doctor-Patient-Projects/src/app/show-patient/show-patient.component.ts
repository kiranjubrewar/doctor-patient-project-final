import { Component, OnInit } from '@angular/core';
import { PatientRegistrationService } from '../patient-registration.service';
//import { Patient } from '../patient';

@Component({
  selector: 'app-show-patient',
  templateUrl: './show-patient.component.html',
  styleUrls: ['./show-patient.component.css']
})
export class ShowPatientComponent implements OnInit {

  patients:any;
  message:any;
  patientId:any;
  tablehide:boolean=false;


  constructor(private service:PatientRegistrationService) { }

  

   public getPatientDetails(patientId:number){
    let response= this.service.getPatientById(patientId);
    response.subscribe((data)=>this.patients=data);
    

   
   
   }

  ngOnInit(): void {

    
  }

}
