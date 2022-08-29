// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { NO_ERRORS_SCHEMA } from "@angular/core";

// import { PatientRegistrationComponent } from './patient-registration.component';
// import { By } from '@angular/platform-browser';
// import { first, of } from 'rxjs';
// import { Patient } from '../patient';
// import { PatientRegistrationService } from '../patient-registration.service';
// // describe('PatientRegistrationComponent', () => {
// //   let component: PatientRegistrationComponent;
// //   let fixture: ComponentFixture<PatientRegistrationComponent>;

// //   beforeEach(async () => {
// //     await TestBed.configureTestingModule({
// //       declarations: [ PatientRegistrationComponent ]
// //     })
// //     .compileComponents();

// //     fixture = TestBed.createComponent(PatientRegistrationComponent);
// //     component = fixture.componentInstance;
// //     fixture.detectChanges();
// //   });

// //   it('should create', () => {
// //     expect(component).toBeTruthy();
// //   });
// // });
// describe('Posts Component', () => {
//     let Patient: Patient[];
//     let component: PatientRegistrationComponent;
//     let mockPostService: any;
//     let fixture: ComponentFixture<PatientRegistrationComponent>;
  
//     beforeEach(() => {
//         Patient = [
//         {
//           patientName:'body 1',
// 	      dateOfVisit:'10-20-2022',
// 	      visitedDoctor:'kittu',
// 	      precription:'dola',
// 	      doctId:1,
//         },
//         {
//             patientName:'body 1',
//             dateOfVisit:'10-20-2022',
//             visitedDoctor:'kittu',
//             precription:'dola',
//             doctId:1,
//         },
//         {
//             patientName:'body 1',
//             dateOfVisit:'10-20-2022',
//             visitedDoctor:'kittu',
//             precription:'dola',
//             doctId:1,
//         },
//       ];
  
//       mockPostService = jasmine.createSpyObj(['doPatRegistration', 'getPatientById']);
  
//       TestBed.configureTestingModule({
//         declarations: [PatientRegistrationComponent, PatientRegistrationComponent],
//         providers: [
//           {
//             provide: PatientRegistrationService,
//             useValue: mockPostService,
//           },
//         ],
//       });
  
//       fixture = TestBed.createComponent(PatientRegistrationComponent);
//       component = fixture.componentInstance;
//     });
  
//     it('should create exact same number of Post Component with Posts', () => {
//       mockPostService.getPosts.and.returnValue(of(Patient));
//       //ngOnInit()
//       fixture.detectChanges();
//       const postComponentDEs = fixture.debugElement.queryAll(
//         By.directive(PatientRegistrationComponent)
//       );
  
//       expect(postComponentDEs.length).toEqual(Patient.length);
//     });
  
//     it('should check whether exact post is sending to PostComponent', () => {
//       mockPostService.getPosts.and.returnValue(of(Patient));
//       fixture.detectChanges();
//       const postComponentDEs = fixture.debugElement.queryAll(
//         By.directive(PatientRegistrationComponent)
//       );
  
//       for (let i = 0; i < postComponentDEs.length; i++) {
//         let postComponentInstance = postComponentDEs[i]
//           .componentInstance as PatientRegistrationComponent;
//         expect(postComponentInstance.patient.patientName).toEqual(Patient[i].patientName);
//       }
//     });
// });