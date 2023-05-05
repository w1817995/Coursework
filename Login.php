<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Origin, Content-Type, Accept");
header('Content-Type: application/json');

// Get JSON data from the request body
$json_data = file_get_contents('php://input');
$data = json_decode($json_data, true);
error_log("Received data: " . print_r($data, true));

if(isset($_SESSION['NHSNumber'])){
    header('Location: Homepage.php');
    exit();
}


$resp = array();
$nhs = isset($data['nhs']) ? $data['nhs'] : null;
$email = isset($data['email']) ? $data['email'] : null;
$pass = isset($data['pass']) ? $data['pass'] : null;

if(empty($nhs) || empty($email) || empty($pass)){
    die("Error: Please enter all fields");
} else {
    // Connect to the database
    $DB = new SQLite3('LocalGPSurgery.db');
    
    // Query the database for the patient with the given NHS Number
    $SQL = $DB->prepare("SELECT * FROM LocalPatient WHERE NHSNumber=:nhs");
    $SQL->bindValue(':nhs', $nhs, SQLITE3_INTEGER);
    $result = $SQL->execute();
    
    // Check if a user with the given NHS number was found in the database
    if($row = $result->fetchArray(SQLITE3_ASSOC)) {
        // Verify the password
        if($pass == $row['patientPassword']) {
            // Start a new session and store the user's NHS number
            session_start();
            $_SESSION['NHSNumber'] = $row['NHSNumber'];
            $resp['status'] = "success";
            $resp['message'] = "Login successful";
            
        } else {
            $resp['status'] = "error";
            $resp['message'] = "Invalid password";
        }
    } else {
        $resp['status'] = "error";
        $resp['message'] = "User not found";
    }
    
    
    // Return the response as a JSON object
    echo json_encode($resp);
    exit;
}
?>
