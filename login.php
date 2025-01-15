<?php
session_start();

if (isset($_POST['submit'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Ici, tu devrais vérifier le mot de passe contre une base de données ou un fichier de configuration
    // Pour simplifier, on va utiliser un mot de passe fixe pour cet exemple
    if ($username === 'admin' && $password === '48596232') {
        $_SESSION['logged_in'] = true;
        header('Location: index.html');
        exit();
    } else {
        echo "Mot de passe incorrect.";
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Connexion</title>
</head>
<body>
    <form method="post">
        <label for="username">Nom d'utilisateur :</label>
        <input type="text" id="username" name="username"><br>
        <label for="password">Mot de passe :</label>
        <input type="password" id="password" name="password"><br>
        <input type="submit" name="submit" value="Se connecter">
    </form>
</body>
</html>