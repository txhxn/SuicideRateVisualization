var SuicideData = null;
var yearPosition;
var finalYear = 95;
var yearNumber;
var yeoja;
var namja;
var gye;
let img;

function setup() {
  noStroke();
  createCanvas(windowWidth, windowHeight);
  var url =
    "http://openapi.seoul.go.kr:8088/434f4365526b7468313236754b6b454f/json/octastatapi10775/1/18/";
  loadJSON(url, onSuicide);
}

function draw() {
  let m = map(gye, 6, 235, 0, 100);
  background(50,50,150-m);

  if (SuicideData == null) return;
  mouseValue();
  updateYeoja();
  updateNamja();
  updateGye();

  fill(100);
  rect(windowWidth/4-windowWidth/12, windowHeight - yeoja*2, windowWidth/6, yeoja*2);
  fill(200);
  textSize(50);
  text('female', windowWidth/4, windowHeight);
  textAlign(CENTER);

  fill(100);
  rect(windowWidth*3/4-windowWidth/12, windowHeight - namja*2, windowWidth/6, namja*2);
  fill(200);
  textSize(50);
  text('male', windowWidth*3/4, windowHeight);
  textAlign(CENTER);

  fill(150);
  textSize(150);
  text(gye, windowWidth/2, windowHeight/2);


  fill(255);
  textSize(50);
  text(Math.floor(yearNumber)+'세', windowWidth/20, windowHeight/10);
  textAlign(CENTER);

}

//1. 데이터값 불러오기.
function onSuicide(data) {
  SuicideData = data.octastatapi10775;
}

//1. 마우스의 위치에 따라 연령대 값으로 변환.
//2. 연령대 값은 JSON의 row 값으로 변환.
function mouseValue() {
  yearNumber = map(mouseX, 0, windowWidth, 0, finalYear);

  if (yearNumber >= 0 && yearNumber < 15) {
    yearPosition = 1;
  } else if (yearNumber >= 15 && yearNumber < 20) {
    yearPosition = 2;
  } else if (yearNumber >= 20 && yearNumber < 25) {
    yearPosition = 3;
  } else if (yearNumber >= 25 && yearNumber < 30) {
    yearPosition = 4;
  } else if (yearNumber >= 30 && yearNumber < 35) {
    yearPosition = 5;
  } else if (yearNumber >= 35 && yearNumber < 40) {
    yearPosition = 6;
  } else if (yearNumber >= 40 && yearNumber < 45) {
    yearPosition = 7;
  } else if (yearNumber >= 45 && yearNumber < 50) {
    yearPosition = 8;
  } else if (yearNumber >= 50 && yearNumber < 55) {
    yearPosition = 9;
  } else if (yearNumber >= 55 && yearNumber < 60) {
    yearPosition = 10;
  } else if (yearNumber >= 60 && yearNumber < 65) {
    yearPosition = 11;
  } else if (yearNumber >= 65 && yearNumber < 70) {
    yearPosition = 12;
  } else if (yearNumber >= 70 && yearNumber < 75) {
    yearPosition = 13;
  } else if (yearNumber >= 75 && yearNumber < 80) {
    yearPosition = 14;
  } else if (yearNumber >= 80 && yearNumber < 85) {
    yearPosition = 15;
  } else if (yearNumber >= 85 && yearNumber < 90) {
    yearPosition = 16;
  } else if (yearNumber >= 90) {
    yearPosition = 17;
  }

  console.log(yearNumber);
  console.log(yearPosition);
}

//1. function mouseValue에 따라 var yeoja 값 변환.
function updateYeoja() {
  yeoja = SuicideData.row[yearPosition].YEOJA_1;
  console.log("YEOJA", SuicideData.row[yearPosition].YEOJA_1);
}

//1. function mouseValue에 따라 var namja 값 변환.
function updateNamja() {
  namja = SuicideData.row[yearPosition].NAMJA_1;
  console.log("NAMJA", SuicideData.row[yearPosition].NAMJA_1);
}

//1. function mouseValue에 따라 var gye 값 변환.
function updateGye() {
  gye = SuicideData.row[yearPosition].GYE_1;
  console.log("GYE", SuicideData.row[yearPosition].GYE_1);
}