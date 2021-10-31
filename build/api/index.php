<?php
require './phpExpress.php';

$app = new phpExpress();

// 시스템 정보 전송
$app->get('/system', function ($req, $res) {
    try {
        $res->send("hi");
    } catch (Exception $e) {
        http_response_code(500);
        $res->send($e);
    }
});
