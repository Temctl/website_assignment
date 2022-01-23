
<?php
    if(!isset($_POST['submit'])){
        echo"subit the form";
    }

    $first_name = $_POST['first_name'];
    $last_name = $_POST['first_name'];
    $country = $_POST['country'];
    $email = $_POST['email'];
    $question = $_POST['question'];

    if(empty($email)||empty($question)){
        echo"cannot leave inputs empty";
        exit;
    }
?>
