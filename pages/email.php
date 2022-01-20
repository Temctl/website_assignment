
<?php
    echo"subit the form";
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

    $email_from = $email;
    $email_subject = "question $first_name $last_name";
    $to = "utemuka@gmail.com";
    $email_header = "From: $email \r\n"

    mail($to, $email_subject, $question, $email_header);
?>
