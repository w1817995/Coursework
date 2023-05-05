<?php
session_start();
header('Access-Control-Allow-Origin: *');
$date = $_POST['dates'];
$time = $_POST['timer'];
$nhs = $_GET['nhs'];
$staffID = $_GET['staffid'];
if (empty($date) || empty($time)) {
    die('Error: All fields are required.');
}
else{
    try {
        // Establish database connection
        $pdo = new SQLite3('LocalGPSurgery.db');
    
        // Check if connection is successful
        if (!$pdo) {
            die('Error: Could not establish database connection.');
        }
    
        // Prepare SQL statement
        $sql = "INSERT INTO Appointment (appointmentDate, appointmentTime, NHSNumber,StaffID) 
        VALUES ('$date', '$time', $nhs, $staffID)";

        $stmt = $pdo->prepare($sql);
        $stmt->execute();
    
        if(!$stmt){
            echo "Data not inserted! Try again";
        }
        else{
            // Output success message
            echo 'Data inserted successfully';
        }
    }
    catch(PDOException $e){
        // Output error message and error code
        echo 'Error inserting data: ' . $e->getMessage() . ' (code: ' . $e->getCode() . ')';
    }
    
}
?>
