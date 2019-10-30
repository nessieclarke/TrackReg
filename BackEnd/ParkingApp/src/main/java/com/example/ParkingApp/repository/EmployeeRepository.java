package com.example.ParkingApp.repository;

import com.example.ParkingApp.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;



import java.util.List;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

    @Query(value = "SELECT v from Vehicle v join Employee e where e.first_name = :first_name", nativeQuery = true)
    List<Employee> findAllByFirstName(@Param("first_name") String first_name);


//employee

    // could be JpaRepository or CRUDRepository still Jpa as is Hibernate
}

//    Employee = JPA Entity, and @Param is used to bind the method parameter {} to Query parameter {}.
//    @RequestParam is used to bind method parameter to web URL request parameter.



