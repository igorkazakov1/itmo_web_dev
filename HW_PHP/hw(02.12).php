<?php
//min max массива
$arr = [23, 890, 44, 67, 67, 21, -4];
$arr2 = [-23, -89, 44, -67, 67, 21, 4];
function getMinElem($arr) {
  $m = $arr[0];
  for ($i = 0; $i < count($arr); $i++) {
    if($m > $arr[$i]) {
      $m = $arr[$i];
    }
  } return $m;
}

function getMaxElem($arr) {
  $M = $arr[0];
  for ($i = 0; $i < count($arr); $i++) {
    if($M < $arr[$i]) {
      $M = $arr[$i];
    }
  } return $M;
}

$min = getMinElem($arr);
$max = getMaxElem($arr2);


var_dump($min);
var_dump($max);

 ?>
