<?php

header("Content-Type: application/json");

$produkty = [
    ["id" => 1, "nazwa" => "Laptop"],
    ["id" => 2, "nazwa" => "Myszka"],
    ["id" => 3, "nazwa" => "Klawiatura"],
    ["id" => 4, "nazwa" => "Monitor"],
    ["id" => 5, "nazwa" => "Telefon"]
];

$szukaj = $_GET["szukaj"] ?? "";

$wynik = [];

foreach ($produkty as $produkt) {
    if (stripos($produkt["nazwa"], $szukaj) !== false) {
        $wynik[] = $produkt;
    }
}

echo json_encode($wynik);

?>