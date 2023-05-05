<?php
//Fareed Khan Mohamed Rafi helped me with the whole page
session_start();
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
// Connect to the database
try {
    $db = new PDO('sqlite:LocalGPSurgery.db');
} catch (PDOException $e) {
    die("Error connecting to database: " . $e->getMessage());
}

// Get the NHS number from the query string
$nhs = $_GET['nhs'];

// Query the database to get user details
$query = "SELECT * FROM LocalPatient WHERE NHSNumber=:nhs";
$stmt = $db->prepare($query);
$stmt->bindParam(':nhs', $nhs);
$stmt->execute();

// Fetch the user details from the database
$user = $stmt->fetch(PDO::FETCH_ASSOC);


// Return the user details in a JSON format
echo json_encode($user);
?>