<!DOCTYPE html>
<html>
<head>
	<title>سایت شخصی حسین حیدری</title>
	<meta charset="utf-8">
</head>
<body>

	<?php 


$name = $_POST['name'];
$family = $_POST['family'];
$email = $_POST['email'];
$text = $_POST['text'];

$to = "admin@hossein-heydari.ir";

$msg = $name."\n".$family."\n".$text;

$header = "From: ".$email;


mail($to, "از سایت شخصی" , $msg , $header);
mail($email, "از سایت شخصی حسین حیدری" , "با سلام خدمت شما دوست عزیز   \n \nسپاسگزاریم بابت ارسال ایمیل ، در اسرع وقت بررسی میشود.  \n \n حسین حیدری" , "From: admin@hossein-heydari.ir");


 ?>

</body>

<script type="text/javascript">
	


window.onload = function(){

 if (confirm("با موفقیت ارسال شد.")) {
   window.location = "https://hossein-heydari.ir/";
}
else {
    window.location = "https://hossein-heydari.ir/";
}
}

</script>
</html>