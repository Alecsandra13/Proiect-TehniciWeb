<?php
switch($_SERVER["REQUEST_METHOD"])
{ 
    case "GET":

    $val = $_GET["com"];

    switch($val)
    {
        case "1":
        echo "REVIEWS / ADDRESSES / NEWS / PHONE NUMBERS";
        break;
        case "2":
        echo "Test";
        break;
        case "3":
        echo "Test";
        break;
    }
    break;

    case "POST":

    $val = $_POST["com"];

    switch($val)
    {
        case "1":
        echo "
              Deoarece stim cat de dificil este sa alegi locul potrivit in care sa iti petreci weekend-urile cu prietenii, sa iti petreci mai mult timp cu familia si copiii. Am creat acest site pentru a va darui oferte de nerefuzat in unele dintre cele mai frumoase locuri din Romania;
        break;
        case "2":
        echo "Test";
        break;
        case "3":
        echo "Test";
        break;
    }
    break;

    case "PUT":

    $val = $_GET["com"];

    switch($val)
    {
        case "1":
        echo "Actualizarea a fost realizata cu succes!";
        break;
        case "2":
        echo "Test";
        break;
        case "3":
        echo "Test";
        break;
    }
    break;

    case "DELETE":

    $val = $_GET["com"];

    switch($val)
    {
        case "1":
        echo "Test";
        break;
        case "2":
        echo "Continutul a fost sters!";
        break;
        case "3":
        echo "Test";
        break;
    }
    break;
}