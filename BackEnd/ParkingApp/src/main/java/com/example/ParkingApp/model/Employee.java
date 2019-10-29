package com.example.ParkingApp.model;


import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name="employees")
public class Employee {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @Column(name="employee_id")
    private long employeeId;
    @Column(name="permit_number")
    private String permitNum;
    @Column(name="first_name")
    private String firstName;
    @Column(name="last_name")
    private String lastName;
    @Column(name = "skype_id")
    private String workSkype;
    @Column(name ="email")
    private String workEmail;
    @Column(name = "dept")
    private String dept;


    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name="employees_vehicles", joinColumns = {@JoinColumn(name="employee_id")},
            inverseJoinColumns ={@JoinColumn(name="vehicle_id")})
    public List<Vehicle> vehicles; //= new ArrayList<Vehicle>();
    //public Set<Vehicle> vehicleSet = new HashSet<Vehicle>();

public Employee () {}

    public Employee (String permitNum, String firstName, String lastName, String workSkype, String workEmail, String dept) {
        this.permitNum = permitNum;
        this.firstName = firstName;
        this.lastName = lastName;
        this.workSkype = workSkype;
        this.workEmail = workEmail;
        this.dept = dept;


    }

    @Override
    public String toString() {
        return String.format(
                "Employee [permit=%s, firstName='%s', lastName='%s', workSkype='%s', workEmail='%s', dept='%s']",
                permitNum, firstName, lastName, workSkype, workEmail, dept);
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


