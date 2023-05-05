<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
session_start();
// Connect to the database
try {
    $db = new PDO('sqlite:LocalGPSurgery.db');
} catch (PDOException $e) {
    die("Error connecting to database: " . $e->getMessage());
}
$staffid = $_GET['staffid'];
    // Query the database to get user details
$query = "SELECT appointmentDate as appDate,appointmentTime as appTime,NHSNumber as nhs, StaffID as staffID FROM Appointment WHERE StaffID=:staffid";
$stmt = $db->prepare($query);
$stmt->bindParam(':staffid', $staffid);
$stmt->execute();

// Fetch all records as an array
$records = $stmt->fetchAll(PDO::FETCH_ASSOC);

// Return the records as JSON
echo json_encode($records);
?>