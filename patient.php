
<?php
// Melissa Akinci


header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
session_start();
// Connect to the database
try {
    $db = new PDO('sqlite:LocalGPSurgery.db');
} catch (PDOException $e) {
    die("Error connecting to database: " . $e->getMessage());
}
$nhs = $_GET['nhs'];
    // Query the database to get user details
$SQLquery = " SELECT NHSNumber as NHSNo, patientForename as Forename, patientSurname as  Surname, patientDOB as DOfB, patientGender as Gender, patientPostcode as Postcode, patientEmail as Email FROM LocalPatient";
$stmt = $db->prepare($SQLquery);
$stmt->execute();

// Fetch all records as an array
$records = $stmt->fetchAll(PDO::FETCH_ASSOC);

// Return the records as JSON
echo json_encode($records);

?>