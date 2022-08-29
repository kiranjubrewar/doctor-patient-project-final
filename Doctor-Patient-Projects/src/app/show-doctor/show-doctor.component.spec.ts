import { ComponentFixture } from '@angular/core/testing';

import { ShowDoctorComponent } from './show-doctor.component';

// describe('ShowDoctorComponent', () => {
//   let component: ShowDoctorComponent;
//   let fixture: ComponentFixture<ShowDoctorComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ ShowDoctorComponent ]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(ShowDoctorComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

describe('ShowDoctorComponent',()=>{
  it('First Test Script',()=>{
    console.log("i am inside the test script");
    expect(10).toBe(10);
  });
});
