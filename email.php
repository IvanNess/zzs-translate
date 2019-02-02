
<?php
$name = $_POST['name'];
$email = $_POST['email'];
$telephone = $_POST['telephone'];
$message = $_POST['message'];
$service = $_POST['service'];
$language = $_POST['language'];

$name = htmlspecialchars($name);
$telephone = htmlspecialchars($telephone);
$message = htmlspecialchars($message);
$service = htmlspecialchars($service);
$language = htmlspecialchars($language);

$name = urldecode($name);
$telephone = urldecode($telephone);
$message = urldecode($message);
$service = urldecode($service);
$language = urldecode($language);

$name = trim($name);
$email = trim($email);
$telephone = trim($telephone);
$message = trim($message);
$service = trim($service);
$language = trim($language);

echo $name;
echo "<br>";
echo $email;
echo "<br>";
echo $message;
echo "<br>";
echo $telephone;
echo "<br>";
echo $service;
echo "<br>";
echo $language;
echo "<br>";

if 
(mail("chai@bk.ru", 
"Заявка с сайта",
"ФИО:" .$name. 
", Telephone:" .$telephone. 
", Message: " .$message. 
", Service:" .$service. 
", Language:" .$language.
", From:" .$email))
{   echo "сообщение успешно отправлено"; 
} else { 
    echo "при отправке сообщения возникли ошибки";
}?>