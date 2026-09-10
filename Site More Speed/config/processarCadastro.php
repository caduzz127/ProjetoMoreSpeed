<?php
require_once __DIR__ . '/../vendor/autoload.php';
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\IOFactory;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use PhpOffice\PhpSpreadsheet\Style\Alignment;
use PhpOffice\PhpSpreadsheet\Style\Fill;
use PhpOffice\PhpSpreadsheet\Cell\DataType;

session_start();
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    header("Location: ../public/index.php");
    exit;
}

$dados = $_SESSION["cadastro"];

$nome = $dados["nome"];
$cpf = $dados["cpf"];
$celular = $dados["celular"];
$cupom = $dados["cupom"];


$caminhoArquivo = __DIR__ . '/../docs/cadastros.xlsx';

if (file_exists($caminhoArquivo)) {
    $planilha = IOFactory::load($caminhoArquivo);

    $pagina = $planilha->getActiveSheet();


} else {
    $planilha = new Spreadsheet();

    $pagina = $planilha->getActiveSheet();

    $pagina->mergeCells('A1:D1');

    $pagina->setCellValue('A1', 'PRÉ CADASTRO DOS CLIENTES VINDO PELO SITE');

    $pagina->getStyle('A1')->getFont()->setBold(true);
    $pagina->getStyle('A1')->getFont()->setSize(14);

    $pagina->getStyle('A1')->getAlignment()->setHorizontal(
        Alignment::HORIZONTAL_CENTER
    );

    $pagina->getStyle('A1')->getFill()
        ->setFillType(Fill::FILL_SOLID)
        ->getStartColor()
        ->setARGB('FFFFFF00');

    $pagina->setCellValue('A1', 'Clientes Cadastrados');

    $pagina->setCellValue('A2', 'NOME');
    $pagina->setCellValue('B2', 'CPF');
    $pagina->setCellValue('C2', 'CELULAR');
    $pagina->setCellValue('D2', 'CUPOM');

    $pagina->getStyle('A2')->getAlignment()->setHorizontal(
        Alignment::HORIZONTAL_CENTER
    );
    $pagina->getStyle('B2')->getAlignment()->setHorizontal(
        Alignment::HORIZONTAL_CENTER
    );
    $pagina->getStyle('C2')->getAlignment()->setHorizontal(
        Alignment::HORIZONTAL_CENTER
    );
    $pagina->getStyle('D2')->getAlignment()->setHorizontal(
        Alignment::HORIZONTAL_CENTER
    );


    $pagina->getColumnDimension('A')->setWidth(35);
    $pagina->getColumnDimension('B')->setWidth(20);
    $pagina->getColumnDimension('C')->setWidth(20);
    $pagina->getColumnDimension('D')->setWidth(20);


}

$ultimaLinha = $pagina->getHighestRow();

$novaLinha = $ultimaLinha + 1;


// =========================
// ADICIONAR CADASTRO
// =========================

$pagina->setCellValue("A{$novaLinha}", $nome);
$pagina->setCellValue("B{$novaLinha}", $cpf);
$pagina->setCellValue("C{$novaLinha}", $celular);
$pagina->setCellValue("D{$novaLinha}", $cupom);


$pagina->setCellValueExplicit(
    "B{$novaLinha}",
    $cpf,
    DataType::TYPE_STRING
);

// TELEFONE como TEXTO
$pagina->setCellValueExplicit(
    "C{$novaLinha}",
    $celular,
    DataType::TYPE_STRING
);


// =========================
// SALVAR
// =========================

$writer = new Xlsx($planilha);

$writer->save($caminhoArquivo);




header("Location: ../public/index.html");
exit;
?>