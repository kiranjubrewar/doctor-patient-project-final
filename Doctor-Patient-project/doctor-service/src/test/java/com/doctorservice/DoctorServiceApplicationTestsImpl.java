package com.doctorservice;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.doctorservice.entity.Doctor;
import com.doctorservice.repository.DoctorRepository;
import com.doctorservice.service.DoctorService;

@SpringBootTest
public class DoctorServiceApplicationTestsImpl extends DoctorServiceApplicationTests{
	
	@Autowired
	private DoctorService doctorservice;
	@MockBean
	private DoctorRepository doctorrepository;
	
	@Test
	public void testcreateDoctor() {
		Doctor doctor=new Doctor();
		doctor.setDocName("kiran");
		doctor.setDoctAge(12);
		doctor.setDoctGender("male");
		doctor.setDoctId(1L);
		doctor.setDoctSpecialist("ent");
		doctor.setNumberOfpatientAttneded(30L);
		Mockito.when(doctorrepository.save(doctor)).thenReturn(doctor);
		assertThat(doctorservice.registerDoctor(doctor)).isEqualTo("Hi Dr.kiran your Registration process successfully completed");
	}

}
