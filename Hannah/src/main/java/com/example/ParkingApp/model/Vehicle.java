package com.example.ParkingApp.model;

import javax.persistence.*;


@Entity
@Table(name="vehicle")
public class Vehicle {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @Column(name="vehicle_id")
    private long vehicleId;
    private String carReg;
    private String carMake;
    private String carModel;
    private String carColour;


    public Vehicle() {}

    public Vehicle (String carReg, String carMake, String carModel, String carColour) {
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

    public long getId() {
        return vehicleId;
    }

    public void setId(long id) {
        this.vehicleId = id;
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

