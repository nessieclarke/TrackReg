package com.example.ParkingApp.model;


import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="employee")
public class Employee {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @Column(name="employee_id")
    private long employeeId;
    private String firstName;
    private String lastName;
    private String permitNum;
    private String dept;
    private String workSkype;
    private String workEmail;

    @ManyToMany
    @JoinTable(name="employee", joinColumns = {@JoinColumn(name="employee_id")},
            inverseJoinColumns ={@JoinColumn(name="vehicle_id")})
    public List<Vehicle> vehicles = new ArrayList<>();



    public Employee (String firstName, String lastName, String permitNum, String dept, String workSkype, String workEmail) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.permitNum = permitNum;
        this.dept = dept;
        this.workSkype = workSkype;
        this.workEmail = workEmail;


    }

    @Override
    public String toString() {
        return String.format(
                "Employee [firstName='%s', lastName='%s', permit=%s, dept='%s', workSkype='%s', workEmail='%s']",
                 firstName, lastName, permitNum, dept, workSkype, workEmail);
    }

    public Long getId() {
        return employeeId;
    }

    public void setId(long id) {
        this.employeeId = id;
    }


    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getPermitNum() {
        return permitNum;
    }

    public void setPermitNum(String permitNum) {
        this.permitNum = permitNum;
    }

    public String getDept() {
        return dept;
    }

    public void setDept(String dept) {
        this.dept = dept;
    }

    public String getWorkSkype() {
            return workSkype;
    }

    public void setWorkSkype(String skypeAdd) {
            this.workSkype = workSkype;
        }

    public String getWorkEmail() {
        return workEmail;
    }

    public void setWorkEmail(String workEmail) {
        this.workEmail = workEmail;
    }



}


