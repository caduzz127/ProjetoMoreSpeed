<?php
session_start();
$cuponsValidos = [
    "MORE10",
    "MORE20",
    "BEMVINDO10",
    "FIBRA20",
    "MOREVIP"
];

$naoValido = $_SESSION["naoValido"] ?? 0;
unset($_SESSION["naoValido"]);
$method = $_SERVER["REQUEST_METHOD"];
$cupomInserido = "";

//VALIDAÇÃO DO CUPOM
function validarMetodo($method, $cuponsValidos)
{
    if ($method == "POST") {
        $cupomInserido = $_POST["cupom"];
        $nome = $_POST["nome"];
        $cpf = $_POST["cpf"];
        $celular = $_POST["celular"];
        if ($cupomInserido === "" || $cupomInserido === null) {
            $_SESSION["cadastro"] = [
                "nome" => $nome,
                "cpf" => $cpf,
                "celular" => $celular,
                "cupom" => ""
            ];
        } else {
            for ($i = 0; $i < count($cuponsValidos); $i++) {
                if ($cupomInserido == $cuponsValidos[$i]) {
                    $_SESSION["cadastro"] = [
                        "nome" => $nome,
                        "cpf" => $cpf,
                        "celular" => $celular,
                        "cupom" => $cupomInserido
                    ];
                    $_SESSION["naoValido"] = 0;
                    return;
                }
            }

            $_SESSION["naoValido"] = 1;
            header("Location: " . $_SERVER["PHP_SELF"]);
            exit;
        }
    }
}

validarMetodo($method, $cuponsValidos)
    ?>
<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Pré-Cadastro</title>

    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: Arial, Helvetica, sans-serif;
            background-color: #2600ff;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }




        /* PARTE DO FORM PRÉ CADASTRO */
        .container {
            width: 100%;
            max-width: 500px;
            background-color: white;
            padding: 35px;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        h1 {
            text-align: center;
            margin-bottom: 10px;
            color: #0000FA;
        }

        .descricao {
            text-align: center;
            color: #666;
            margin-bottom: 30px;
        }

        form {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .form-group {
            display: flex;
            flex-direction: column;
            gap: 7px;
        }

        label {
            font-size: 14px;
            font-weight: bold;
            color: #333;
        }

        input {
            width: 100%;
            padding: 13px 15px;
            border: 1px solid #ccc;
            border-radius: 7px;
            font-size: 16px;
            outline: none;
            transition: 0.2s;
        }

        input:focus {
            border-color: #0000FA;
            box-shadow: 0 0 0 3px rgba(0, 0, 250, 0.08);
        }

        button {
            width: 100%;
            padding: 14px;
            border: none;
            border-radius: 7px;
            background-color: #0000FA;
            color: white;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
            transition: 0.2s;
        }

        button:hover {
            background-color: #0014C8;
        }

        .obrigatorio {
            color: red;
        }

        .cupom-invalido {
            margin-top: 5px;
            font-size: 13px;
            color: #d93025;
            font-weight: 500;
        }




        /* MODAL DE CONFIRMAÇÃO */
        .confirmacao {
            width: 280px;
            padding: 20px;
            background: white;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.25);
            text-align: center;
        }

        .confirmacao p {
            margin: 0 0 15px;
        }

        .botoes {
            display: flex;
            justify-content: center;
            gap: 10px;
        }

        .botoes button {
            padding: 8px 15px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        .botoes button[type="submit"] {
            background: #0000fa;
            color: white;
        }

        .botoes button[type="button"] {
            background: #0000fa;
        }
    </style>

</head>

<body>
    <?php if ($method == "GET"): ?>
        <main class="container">

            <h1>Pré-Cadastro</h1>
            <p class="descricao">Preencha seus dados para realizar o pré-cadastro. </p>
            <form method="POST">
                <div class="form-group">

                    <label for="nome">Nome completo <span class="obrigatorio">*</span></label>
                    <input type="text" id="nome" name="nome" placeholder="Digite seu nome completo" autocomplete="name"
                        required>
                </div>


                <div class="form-group">
                    <label for="cpf">
                        CPF
                        <span class="obrigatorio">*</span>
                    </label>

                    <input type="text" id="cpf" name="cpf" placeholder="000.000.000-00" maxlength="14" inputmode="numeric"
                        required>

                </div>


                <div class="form-group">

                    <label for="celular">
                        Número de celular
                        <span class="obrigatorio">*</span>
                    </label>

                    <input type="tel" id="celular" name="celular" placeholder="(21) 99999-9999" maxlength="15"
                        autocomplete="tel" required>

                </div>


                <div class="form-group">

                    <label for="cupom">
                        Cupom de desconto
                    </label>

                    <input type="text" id="cupom" name="cupom" placeholder="Digite seu cupom">
                    <?php if ($naoValido): ?>
                        <p class="cupom-invalido">*O cupom inserido não é válido</p>
                    <?php endif; ?>
                </div>


                <button type="submit">
                    Enviar Pré-Cadastro
                </button>

            </form>

        </main>
    <?php else: ?>
        <div class="confirmacao">
            <form action="../config/processarCadastro.php" method="POST">
                <p>Deseja confirmar o cadastro?</p>

                <input type="hidden" name="acao" value="confirmar">

                <div class="botoes">
                    <button type="submit">Confirmar</button>
                    <button type="button" onclick="fecharModal()">Cancelar</button>
                </div>
            </form>
        </div>
    <?php endif; ?>
</body>
<script>
    function fecharModal() {
        window.location.href = "index.html";
    }
</script>
</html>