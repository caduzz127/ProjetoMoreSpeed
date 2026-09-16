<?php
require_once __DIR__ . "/../vendor/autoload.php";

use PhpOffice\PhpSpreadsheet\IOFactory;


$usuarios = ["admin" => "admin"];

$validarUsuario = 1;
$nome = $_POST["nome"] ?? "";
$senha = $_POST["senha"] ?? "";


function validarLogin($usuarios, $nome, $senha)
{
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if (isset($usuarios[$nome])) {
            if ($usuarios[$nome] == $senha) {
                return 1;
            } else {
                $_SERVER["REQUEST_METHOD"] = "GET";

                return 0;
            }
        } else {
            $_SERVER["REQUEST_METHOD"] = "GET";
            return 0;
        }

    }
}
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $validarUsuario = validarLogin($usuarios, $nome, $senha);
}

if (($_SERVER["REQUEST_METHOD"] == "POST") && $validarUsuario) {
    $caminho = __DIR__ . "/../docs/cadastros.xlsx";


    // Verifica se existe
    if (!file_exists($caminho)) {
        $erro = "A planilha de cadastros não foi encontrada.";
    }


    // Verifica se o arquivo existe mas está vazio
    elseif (filesize($caminho) === 0) {
        $erro = "A planilha está vazia.";
    }


    // Arquivo existe e possui conteúdo
    else {

        try {

            $planilha = IOFactory::load($caminho);

            $pagina = $planilha->getActiveSheet();

            $dados = $pagina->toArray();


            // Só possui cabeçalho ou nenhuma linha
            if (count($dados) <= 1) {
                $erro = "Nenhum cadastro foi encontrado.";
            }

        } catch (Exception $e) {

            $erro = "Não foi possível abrir a planilha.";

        }

    }



}



?>

<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login | More Speed</title>
    <link rel="stylesheet" href="assets/css/telaAcessar.css">
    <link rel="shortcut icon" href="assets/imgs/logoMore.jpg?v=82" type="image/x-icon">
</head>

<body>
    <?php if ($_SERVER["REQUEST_METHOD"] == "GET"): ?>
        <div class="login-container">

            <div class="login-header">
                <h1>More Speed</h1>
                <p>Acesse sua conta</p>
                <div class="login-detalhe"></div>
            </div>

            <form method="POST">

                <div class="form-group">
                    <label for="nome">Nome</label>

                    <input type="text" id="nome" name="nome" placeholder="Digite seu nome" required>
                </div>

                <div class="form-group">
                    <label for="senha">Senha</label>

                    <input type="password" id="senha" name="senha" placeholder="Digite sua senha" required>
                </div>
                <?php if (!$validarUsuario): ?>

                    <p class="mensagem">Usuário ou Senha incorreta*</p>

                <?php endif; ?>
                <button type="submit" class="btn-entrar">
                    Entrar
                </button>

            </form>

        </div>
    <?php elseif (($_SERVER["REQUEST_METHOD"] == "POST") && $validarUsuario): ?>
        <?php if (isset($erro)): ?>
            <div class="erro-container">
                <div class="erro-card">
                    <div class="erro-icone">!</div>

                    <div class="erro-texto">
                        <h3>Ops! Algo deu errado</h3>
                        <p><?= htmlspecialchars($erro) ?></p>
                    </div>
                </div>
            </div>

        <?php else: ?>
            <div class="main">

                <div class="container-h2">
                    <h2>PLANILHA DOS CLIENTES DO PRÉ CADASTRO</h2>
                </div>
                <div class="tabela-container">
                    <table class="tabela-cadastros">

                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>CPF</th>
                                <th>Celular</th>
                                <th>Cupom</th>
                            </tr>
                        </thead>

                        <tbody>

                            <?php for ($i = 2; $i < count($dados); $i++): ?>

                                <tr>
                                    <td><?= htmlspecialchars($dados[$i][0]) ?></td>
                                    <td><?= htmlspecialchars($dados[$i][1]) ?></td>
                                    <td><?= htmlspecialchars($dados[$i][2]) ?></td>
                                    <td><?= htmlspecialchars($dados[$i][3]) ?></td>
                                </tr>

                            <?php endfor; ?>

                        </tbody>

                    </table>

                </div>

            </div>
        <?php endif; ?>
    <?php endif; ?>
</body>

</html>