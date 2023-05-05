<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Origin, Content-Type, Accept");
header('Content-Type: application/json');

// Get JSON data from the request body
$json_data = file_get_contents('php://input');
$data = json_decode($json_data, true);
error_log("Received data: " . print_r($data, true));

if (isset($_SESSION['staffID'])) {
    header('Location: Homepage.php');
    exit();
  }
  

$resp = array();
$email = isset($data['email']) ? $data['email'] : null;
$pass = isset($data['pass']) ? $data['pass'] : null;

if(empty($email) || empty($pass)){
    die("Error: Please enter all fields");
} else {
    // Connect to the database
    $DB = new SQLite3('LocalGPSurgery.db');
    
    // Query the database for the staff with the given email and password
    $SQL = $DB->prepare("SELECT * FROM DoctorStaff WHERE StaffEmail = :email AND StaffPass = :pass");
    $SQL->bindValue(':email', $email);
    $SQL->bindValue(':pass', $pass);
    $result = $SQL->execute();
    
    
    // Check if a staff with the given email was found in the database
    if($row = $result->fetchArray(SQLITE3_ASSOC)) {
        // Verify the password
        if($pass == $row['StaffPass']) {
            // Start a new session and store the staff's ID
            session_start();
            $_SESSION['staffID'] = $row['StaffID'];
            $resp['status'] = "success";
            $resp['message'] = "Login successful";
            $resp['StaffID'] = $row['StaffID'];            
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
