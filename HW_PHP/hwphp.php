<!-- Задача № 2 -->
<?php
$arr = array (3, 1, 6, 0, 4, 5);
foreach ($arr as $value) {
       $value **= 2;
       $sum += $value;
}
  var_dump($sum);

// Задача № 3
for ($i = 0; $i <15; $i++) {
  for ($j = 0; $j <= $i; $j++) {
  echo ("*");
  } echo "<br>";
}

//задача № 4
$week = [
  '1'=>'понедельник',
  '2'=>'вторник',
  '3'=>'среда',
  '4'=>'четверг',
  '5'=>'пятница',
  '6'=>'суббота',
  '7'=>'воскресенье'
  ];
foreach ($week as $key => $day) {
  if ($key == date('N')) {
      echo ("<b> $day </b>");
  } else echo($day. " ");
}


//задача № 5
$arr = [
  '1' => [
      'price' => 10,
      'count' => 2
      ],
  '2' => [
      'price' => 5,
      'count' => 5
      ],
  '3' => [
      'price' => 8,
      'count' => 5
      ],
  '4' => [
      'price' => 12,
      'count' => 4
      ],
  '5' => [
      'price' => 8,
      'count' => 4
      ],
  ];
asort($arr);
foreach ($arr as $item => $value) {
  var_dump ($value['price']);
    }


















 ?>
