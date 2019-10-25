/* MOCK DATA: To insert values into Employee table */


INSERT INTO Employee 

(permit_number, first_name, last_name, skype_id, email, dept)

VALUES

(244, "Kara", "Brown", "live.kara.brown", "kara@raytheon.co.uk", "Engineering"),
(252, "Vanessa", "Tsang", "live.vanessa.tsang", "vanessa@raytheon.co.uk", "Engineering"),
(288, "Paul", "White", "live.paul.white", "paul@raytheon.co.uk", "Finance"),
(363, "Jess", "Kit", "live.jess.kit", "jess@raytheon.co.uk", "HR");


/* MOCK DATA: To insert values into Vehicle table */


INSERT INTO Vehicle 

(vehicle_id, reg_number, make, model, colour)

VALUES

("BV10 SEP", "Honda", "Jazz", "Red"),
("DB51 SMR", "BMW", "Z3", "Silver"),
("OP65 AWR", "Ford", "Focus", "Black"),
("GR22 SMX", "VW", "Polo", "Blue");


/* MOCK DATA: To insert values into Employee_Vehicle table (join table) */


INSERT INTO Employee_Vehicle 

(employee_ide, vehicle_id)

VALUES

(),
(),
(),
();
