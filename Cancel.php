<?php
//Nasteha Omar Ahmed did the whole page
// Retrieve the appointment data from the request
$appointment = $_POST['appointment'];
// Sanitize the input to prevent SQL injection attacks
$appointment = filter_var($appointment, FILTER_SANITIZE_NUMBER_INT);

// Connect to the database
$DB = new SQLite3('LocalGPSurgery.db');

// Update the appointment record in the database
$stmt = $DB->prepare('DELETE FROM Appointment WHERE appointmentDate = :appointment');
$stmt->bindValue(':appointment', $appointment, SQLITE3_INTEGER);
$result = $stmt->execute();

if ($result) {
  $response = array('success' => true);
} else {
  $response = array('success' => false, 'error' => $DB->lastErrorMsg());
}

// Close the database connection
$DB->close();

// Send a response back to the front-end
header('Content-Type: application/json');
echo json_encode($response);
?>