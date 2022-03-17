<?php
$discord_server = $_POST['discord_server'];
$specific_channel = $_POST['specific_channel'];
$discord_user = $_POST['discord_user'];

if (!empty($discord__server) || !empty($specific_channel) || !empty($discord_user)) {
    $host = "Hostname";
    $dbUsername = "root";
    $dbPassword = "";
    $dbname = "";

    //create connection
    $conn = new mysqli($host, $dbUsername, $dbPassword, $dbname);

    if(mysqli_connect_error()){
        die('Error');
    } else {
        $Insert = "Insert Into db (discord_server, specific_channel, discord_user) values(?, ?, ?)";
    }

} else {
    echo "No value entered";
    die();
}
?>