package com.example.ParkingApp.repository;

import com.example.ParkingApp.model.Employee;
import com.example.ParkingApp.model.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;



import java.util.List;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    //@Query(value = "SELECT v from Vehicle v join Employee e where e.firstname = :firstname", nativeQuery = true)
    List<Vehicle> findAllByFirstName(@Param("firstname")String firstname);
//employee

    // could be JpaRepository or CRUDRepository still Jpa as is Hibernate
}

