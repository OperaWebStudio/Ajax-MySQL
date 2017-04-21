<?php

include_once('database.php');

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];


if($mysqli->query("INSERT INTO `comments` VALUES('$name','$email','$message')"))
  echo "<div class=\"alert alert-success\" id=\"success_message\">Ваше сообщение отправлено</div>";
else
  echo "<div class=\"alert alert-danger\" id=\"success_message\">Сбой отправки!</div>";

$mysqli->close ();

?>
