package com.example.ParkingApp;

import com.example.ParkingApp.model.Employee;
import com.example.ParkingApp.model.Vehicle;
import com.example.ParkingApp.repository.EmployeeRepository;
//import com.example.ParkingApp.repository.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories(basePackages = "com.example.ParkingApp.repository")
@SpringBootApplication
public class ParkingAppApplication {

	@Autowired
	EmployeeRepository employeeRepository;
	//VehicleRepository vehicleRepository;


	public static void main(String[] args) {
		SpringApplication.run(ParkingAppApplication.class, args);
	}

	//@Override
//	public void run(String... args) throws Exception {
//		employeeRepository.save(new Employee("Jess", "McKenzie", "257", "WICA", "@jessmckenziee", "jess@lala.com"));
//		vehicleRepository.save(new Vehicle("BO55 000", "Merc", "T4","Red"));
//	}

}
