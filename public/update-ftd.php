<?php
$token = $_GET['token'] ?? '';
$data = file_get_contents('php://input');

// Token seguro para FTD
if ($token !== 'a12bd45ef98c6d01') {
    http_response_code(403);
    exit('Acesso negado');
}

// Remove espaços extras e garante uma quebra de linha no final
$data = trim($data) . "\n";

file_put_contents('ftd.txt', $data, FILE_APPEND);
echo '✅ FTD atualizado com sucesso';