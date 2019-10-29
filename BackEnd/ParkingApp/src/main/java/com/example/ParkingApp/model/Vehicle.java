package com.example.ParkingApp.model;

import javax.persistence.*;
import java.util.List;


@Entity
@Table(name="vehicles")
public class Vehicle {
//    @OneToMany(mappedBy = "employees")
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "vehicle_id")
    private long vehicleId;
    @Column(name = "reg_number")
    private String carReg;
    @Column(name = "make")
    private String carMake;
    @Column(name = "model")
    private String carModel;
    @Column(name = "colour")
    private String carColour;
    @ManyToMany(mappedBy = "vehicles")
    private List<Employee> employees;



    public Vehicle() {
    }


    public Vehicle(String carReg, String carMake, String carModel, String carColour) {
        this.carReg = carReg;
        this.carMake = carMake;
        this.carModel = carModel;
        this.carColour = carColour;

    }

    @Override
    public String toString() {
        return String.format(
                "Vehicle [carReg=%s, carMake='%s', carModel='%s', carColour='%s']",
                carReg, carMake, carModel, carColour);
    }

    public long getVehicleId() {
        return vehicleId;
    }

    public void setVehicleId(long vehicleId) {
        this.vehicleId = vehicleId;
    }

    public String getCarReg() {
        return carReg;
    }

    public void setCarReg(String carReg) {
        this.carReg = carReg;
    }

    public String getCarMake() {
        return carMake;
    }

    public void setCarMake(String carMake) {
        this.carMake = carMake;
    }

    public String getCarModel() {
        return carModel;
    }

    public void setCarModel(String carModel) {
        this.carModel = carModel;
    }

    public String getCarColour() {
        return carColour;
    }

    public void setCarColour(String carColour) {
        this.carColour = carColour;
    }
}


