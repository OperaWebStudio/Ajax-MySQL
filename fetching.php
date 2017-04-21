<?php
include_once('database.php');

$sql = "SELECT * FROM `comments`";
$res = $mysqli->query($sql);
$result = array();

while( $row = mysqli_fetch_array($res) )
array_push($result, array(
                          'name' => $row[0],
                          'email'  => $row[1],
                          'message' => $row[2])
                        );

echo json_encode(array("result" => $result));

$mysqli->close ();

?>
