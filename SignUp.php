<?php
//Fareed Khan Mohamed Rafi did lines 4-22.
//Muhammad Saad Faisal helped with the rest of the pages.
session_start();
header('Access-Control-Allow-Origin: *');
$firstname = $_POST['fname'];
$surname = $_POST['sname'];
$gender = $_POST['gender'];
$postcode = $_POST['post'];
$date = $_POST['dates'];
$email = $_POST['email'];
$password = $_POST['pass'];
$confirmpass = $_POST['conf_pass'];

// Validate form data
if (empty($firstname) || empty($surname) || empty($date) || empty($gender) || empty($postcode) || empty($email) || empty($password) || empty($confirmpass)) {
    die('Error: All fields are required.');
}
else{
    if($password <> $confirmpass){
        echo "<p>Password does not match. Please enter the correct password.</p>"; 
     } 
     else{
        try {
            // Connect to SQLite database
            
            $pdo = new SQLite3("LocalGPSurgery.db");
        
            // Prepare SQL statement
            $sql = "INSERT INTO LocalPatient (patientForename, patientSurname, patientDOB, patientGender, patientPostcode, patientEmail, patientPassword) VALUES ('$firstname','$surname','$date','$gender','$postcode','$email','$password')";
            $stmt = $pdo->prepare($sql);        
            $stmt->execute();
        
            if(!$stmt){
                echo "You are not logged in! Try again";
            }
            else{
            // Output success message
            echo 'Data inserted successfully';
            }
        } catch (PDOException $e) {
            // Output error message and error code
            echo 'Error inserting data: ' . $e->getMessage() . ' (code: ' . $e->getCode() . ')';
        }
     } 
   }

?>
