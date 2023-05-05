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
$query = "SELECT DoseNo as DoseNum, VaccinationDate as vaccinationDate, VaccineManufacturer as vaccineManufacturer, DiseaseTargeted as diseaseTargeted, VaccineType as vaccineType, Product as product, VaccineBatchNumber as vaccineBatchNumber, CountryOfVaccination as countryOfVaccination, Authority as authority, TotalSeriesOfDoses as totalSeriesOfDoses, DisplayName as displayName, SNOMEDCode as snomedCode, DateEntered as dateEntered, ProcedureCode as procedureCode, Booster as booster FROM MedicalRecords WHERE NHSNumber = :nhs ORDER BY VaccinationDate ASC";
$stmt = $db->prepare($query);
$stmt->bindParam(':nhs', $nhs);
$stmt->execute();

// Fetch all records as an array
$records = $stmt->fetchAll(PDO::FETCH_ASSOC);

// Return the records as JSON
echo json_encode($records);

?>