<?php
//Nasteha Omar Ahmed did the whole page
header('Access-Control-Allow-Origin: *');

try {
    // connect to the database
    $pdo = new PDO('sqlite:LocalGPSurgery.db');
    
    // query the appointment table for the staff ID and appointment date
    $stmt = $pdo->query('SELECT StaffID, appointmentDate FROM Appointment');
    
    // fetch all the appointment data and store in an array
    $appData = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    // output the array as JSON
    echo json_encode($appData);
    
} catch (PDOException $e) {
    // output error message and error code
    echo 'Error fetching data: ' . $e->getMessage() . ' (code: ' . $e->getCode() . ')';
}
?>
