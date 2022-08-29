package com.patientservice;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.patientservice.entity.Patient;
import com.patientservice.repository.PatientRepository;
import com.patientservice.service.PatientService;


public class PatientServiceApplicationTestsImpl extends PatientServiceApplicationTests {

	@Autowired
	private PatientService patientservice;
	@MockBean
	private PatientRepository patientrepository;
	
	@Test
	public void testcreateDoctor() {
		Patient patient=new Patient();
		patient.setDateOfVisit("kiran");
		patient.setDoctId(12L);
		patient.setPatientId(1L);
		patient.setPatientName("kittu");
		patient.setPrecription("ent");
		patient.setVisitedDoctor("kittu");
		Mockito.when(patientrepository.save(patient)).thenReturn(patient);
		assertThat(patientservice.savePatient(patient)).isEqualTo("Hi kittu your Registration process successfully completed");
	}
	
}
