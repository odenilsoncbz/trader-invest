<?php
$token = $_GET['token'] ?? '';
$data = file_get_contents('php://input');

// Token seguro para MAPA
if ($token !== 'f43de2019acb784e') {
    http_response_code(403);
    exit('Acesso negado');
}

// Remove espaços extras e garante uma quebra de linha no final
$data = trim($data) . "\n";

file_put_contents('mapa.txt', $data, FILE_APPEND);
echo '✅ MAPA atualizado com sucesso';