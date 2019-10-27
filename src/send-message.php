<?php
    $postData = file_get_contents('php://input');
    $data = json_decode($postData, true);

    mail("furchinchillas@gmail.com", $data['title'], $data['message'],"From: abfc@abfc.h1n.ru \r\n");
?>