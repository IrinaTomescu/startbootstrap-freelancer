<?php
// Check for empty fields
if(empty($_POST['nameOrderForm'])  		||
   empty($_POST['emailOrderForm']) 		||
   empty($_POST['city'])	||
   empty($_POST['phone'])	||
   empty($_POST['paintingDimensions'])	||
   empty($_POST['paintingTheme'])	||
   !filter_var($_POST['emailOrderForm'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }
	
$name = strip_tags(htmlspecialchars($_POST['nameOrderForm']));
$email_address = strip_tags(htmlspecialchars($_POST['emailOrderForm']));
$city = strip_tags(htmlspecialchars($_POST['city']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));
$paintingDimensions = strip_tags(htmlspecialchars($_POST['paintingDimensions']));
$paintingTheme = strip_tags(htmlspecialchars($_POST['paintingTheme']));
	
// Create the email and send the message
$to = 'irinacristina.tomescu@gmail.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Madonia Art - Painting Order for:  $name";
$email_body = "You have received a new painting order from your painting order form.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email_address\n\nPhone: $phone \n\nCity: $city\n\nPainting dimensions: $paintingDimensions\n\nPainting theme:\n$paintingTheme";
$headers = "From: office@madonia.ro\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";	
mail($to,$email_subject,$email_body,$headers);
return true;			
?>
