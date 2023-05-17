<?php 
       if (isset($_POST['name'])) {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $phonenumber = $_POST['phonenumber'];
        $message = $_POST['message'];
        if ($name && $phonenumber && $email && $message) {
         $content = "<br/><br /> <b>Contact Form Data</b> <br/><br/>".
         "<b>Name:</b> {$name} <br/>".
         "<b>Email: </b> {$email} <br/>".
         "<b>Phone Number: </b> {$phonenumber} <br/>".
         "<b>Message:</b> ". ($message);
         $subject = "Message from: {$email}";
         $header = "From: {$email}\r\n";
         $header .= "Reply-To: {$email}\r\n";
         $header .= "X-Mailer: PHP/". phpversion();
         $header .= "MIME-Version: 1.0\r\n";
         $header .= "Content-type: text/html; charset=iso-8859-1\r\n";
         $mailed = mail('sajidxullah@gmail.com',$subject, $content, $header);
         if ($mailed ) {
          header("Location: ../index.html");
         }else
          echo "Mail was not delivered";
        }
       }
      ?>