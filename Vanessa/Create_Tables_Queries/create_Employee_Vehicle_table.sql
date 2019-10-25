/* Creating the Employee_Vehicle table (the join table) */

CREATE TABLE Employee_Vehicle (
    FOREIGN KEY AUTO_INCREMENT (employee_id INT) REFERENCES Employee (employee_id),
    FOREIGN KEY AUTO_INCREMENT (vehicle_id INT) REFERENCES Vehicle (vehicle_id),
);