<?php
  if (isset($_POST['button'])){
    $nombre = $_POST['name'];
    $email = $_POST['email'];
    $mensaje = $_POST['message'];


    $mailTo = "gup.coach@gmail.com";
    $headers "From: ".$email;
    $txt = "GrowUP ha recivido un mensaje de " .$nombre.".\n\n".$mensaje;

    mail($mailTo, $txt, $headers);
    #header("Location: index.php?mailsend");
    #echo "<p><strong>Gracias por contactarse. te responderemos a la brevedad.</strong></p>";
  }
 ?>
