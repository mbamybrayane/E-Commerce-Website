<?php
// Connexion à la base de données
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ecommerce";

$conn = new mysqli($servername, $username, $password, $dbname);

// Vérifie si la connexion est réussie
if ($conn->connect_error) {
    die("Erreur de connexion: " . $conn->connect_error);
}

// Récupère les données envoyées en JSON par fetch
$data = json_decode(file_get_contents('php://input'), true);

$username = $data['username'];
$email = $data['email'];
$password = password_hash($data['password'], PASSWORD_DEFAULT); // Hachage du mot de passe

// Vérifie si l'email existe déjà
$sql = "SELECT * FROM users WHERE email='$email'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "Cet email est déjà enregistré.";
} else {
    // Insère les informations dans la base de données
    $sql = "INSERT INTO users (username, email, password) VALUES ('$username', '$email', '$password')";
    
    if ($conn->query($sql) === TRUE) {
        echo "Inscription réussie !";
    } else {
        echo "Erreur : " . $conn->error;
    }
}

$conn->close();
?>
