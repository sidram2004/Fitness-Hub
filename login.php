<?php
// Check if form is submitted
$servername = "localhost"; // Change this if your database is hosted elsewhere
$username = "root";
$password = "";
$dbname = "users"; // 

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Database connection detailsChange this to your database name

    // Create connection
    $conn = new mysqli("localhost", "root", "","users");

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Prepare and bind parameters
    $stmt = $conn->prepare("INSERT INTO user_credentials (username,password) VALUES (?, ?)");
    $stmt->bind_param("ss", $username, $password);

    // Set parameters and execute
    $username = $_POST['username'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT); // Hash the password for security

    if ($stmt->execute()) {
        echo "New record inserted successfully";
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close statement and connection
    $stmt->close();
    $conn->close();
}
?>