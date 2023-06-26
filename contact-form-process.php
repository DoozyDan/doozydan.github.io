<?php
    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];

    $email_from = 'dweshkeri@gmail.com';

    $email_subject = "New Form Submission";

    $email_body = "Name: $name.\n".
                    "Email: $visitor_email.\n".
                    "Message: $message.\n";

    $to = "dweshkeri@gmail.com";

    $headers = "From: $email_from \r\n";

    $headers .= "Reply-To: $visitor_email \r\n";

    mail($to,$email_subject,$email_body,$headers);

    header("Location: contact.html");
?>