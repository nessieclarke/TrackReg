package com.example.ParkingApp.repository;

import com.example.ParkingApp.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {


    //or could be CRUDRepository still Jpa as is Hibernate
}
