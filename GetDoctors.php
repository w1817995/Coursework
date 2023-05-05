<?php
//Fareed Khan Mohamed Rafi did the whole page
header('Access-Control-Allow-Origin: *');

try {
    // connect to the database
    $pdo = new PDO('sqlite:LocalGPSurgery.db');
    
    // query the doctors table for doctor names
    $stmt = $pdo->query('SELECT * FROM DoctorStaff');
    
    // fetch all doctor names and store in an array
    $doctorNames = $stmt->fetchAll(PDO::FETCH_COLUMN);
    
    // output the array as JSON
    echo json_encode($doctorNames);
    
} catch (PDOException $e) {
    // output error message and error code
    echo 'Error fetching data: ' . $e->getMessage() . ' (code: ' . $e->getCode() . ')';
}
