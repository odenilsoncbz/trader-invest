<?php
$token = $_GET['token'] ?? '';
$data = file_get_contents('php://input');

if ($token !== 'e97a6f4b2c9d4851') {
    http_response_code(403);
    exit('Acesso negado');
}

// Remove espaços extras e garante uma quebra de linha no final
$data = trim($data) . "\n";

file_put_contents('uid.txt', $data, FILE_APPEND);
echo '✅ UID atualizado com sucesso';