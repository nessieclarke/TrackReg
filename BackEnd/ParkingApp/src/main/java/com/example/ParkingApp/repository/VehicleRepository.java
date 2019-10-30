package com.example.ParkingApp.repository;

import com.example.ParkingApp.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VehicleRepository extends JpaRepository<Employee, Long> {
}

//do i even need this?