var t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,t11,t12,t13,t14,t15,t16,t17,t18,t19,t20,t21,t22,t23,t24,t25,t26,t27,t28,t29,t30,t31,t32,t33,t34,t35,t36,t37,t38,t39,t40,t41,t42,t43,t44,t45,t46,t47,t48,t49,t50,t51,t52,t53,t54,t55,t56,t57,t58,t59,t60,t61,t62,t63,t64,t65,t66,t67,t68,t69,t70,t71,t72,t73,t74,t75,t76,t77,t78,t79,t80,t81,t82,t83,t84,t85,t86,t87,t88,t89,t90;
var number;
var rand;
var r;
var gameState;
var done;
var gt1,gt2,gt3,gt4,gt5,gt6,gt7,gt8,gt9,gt10,gt11,gt12,gt13,gt14,gt15,gt16,gt17,gt18,gt19,gt20,gt21,gt22,gt23,gt24,gt25,gt26,gt27,gt28,gt29,gt30,gt31,gt32,gt33,gt34,gt35,gt36,gt37,gt38,gt39,gt40,gt41,gt42,gt43,gt44,gt45,gt46,gt47,gt48,gt49,gt50,gt51,gt52,gt53,gt54,gt55,gt56,gt57,gt58,gt59,gt60,gt61,gt64,gt65,gt66,gt67,gt68,gt69,gt70,gt71,gt72,gt73,gt74,gt75,gt76,gt77,gt78,gt79,gt80,gt81,gt82,gt83,gt84,gt85,gt86,gt87,gt88,gt89,gt90;

function setup() {
  createCanvas(610,610);

  t1 = createSprite(35,35,50,50);
  t2 = createSprite(95,35,50,50);
  t3 = createSprite(155,35,50,50);
  t4 = createSprite(215,35,50,50);
  t5 = createSprite(275,35,50,50);
  t6 = createSprite(335,35,50,50);
  t7 = createSprite(395,35,50,50);
  t8 = createSprite(455,35,50,50);
  t9 = createSprite(515,35,50,50);
  t10 = createSprite(575,35,50,50);

  t11 = createSprite(35,95,50,50);
  t12 = createSprite(95,95,50,50);
  t13 = createSprite(155,95,50,50);
  t14 = createSprite(215,95,50,50);
  t15 = createSprite(275,95,50,50);
  t16 = createSprite(335,95,50,50);
  t17 = createSprite(395,95,50,50);
  t18 = createSprite(455,95,50,50);
  t19 = createSprite(515,95,50,50);
  t20 = createSprite(575,95,50,50);

  t21 = createSprite(35,155,50,50);
  t22 = createSprite(95,155,50,50);
  t23 = createSprite(155,155,50,50);
  t24 = createSprite(215,155,50,50);
  t25 = createSprite(275,155,50,50);
  t26 = createSprite(335,155,50,50);
  t27 = createSprite(395,155,50,50);
  t28 = createSprite(455,155,50,50);
  t29 = createSprite(515,155,50,50);
  t30 = createSprite(575,155,50,50);

  t31 = createSprite(35,215,50,50);
  t32 = createSprite(95,215,50,50);
  t33 = createSprite(155,215,50,50);
  t34 = createSprite(215,215,50,50);
  t35 = createSprite(275,215,50,50);
  t36 = createSprite(335,215,50,50);
  t37 = createSprite(395,215,50,50);
  t38 = createSprite(455,215,50,50);
  t39 = createSprite(515,215,50,50);
  t40 = createSprite(575,215,50,50);

  t41 = createSprite(35,275,50,50);
  t42 = createSprite(95,275,50,50);
  t43 = createSprite(155,275,50,50);
  t44 = createSprite(215,275,50,50);
  t45 = createSprite(275,275,50,50);
  t46 = createSprite(335,275,50,50);
  t47 = createSprite(395,275,50,50);
  t48 = createSprite(455,275,50,50);
  t49 = createSprite(515,275,50,50);
  t50 = createSprite(575,275,50,50);

  t51 = createSprite(35,335,50,50);
  t52 = createSprite(95,335,50,50);
  t53 = createSprite(155,335,50,50);
  t54 = createSprite(215,335,50,50);
  t55 = createSprite(275,335,50,50);
  t56 = createSprite(335,335,50,50);
  t57 = createSprite(395,335,50,50);
  t58 = createSprite(455,335,50,50);
  t59 = createSprite(515,335,50,50);
  t60 = createSprite(575,335,50,50);

  t61 = createSprite(35,395,50,50);
  t62 = createSprite(95,395,50,50);
  t63 = createSprite(155,395,50,50);
  t64 = createSprite(215,395,50,50);
  t65 = createSprite(275,395,50,50);
  t66 = createSprite(335,395,50,50);
  t67 = createSprite(395,395,50,50);
  t68 = createSprite(455,395,50,50);
  t69 = createSprite(515,395,50,50);
  t70 = createSprite(575,395,50,50);

  t71 = createSprite(35,455,50,50);
  t72 = createSprite(95,455,50,50);
  t73 = createSprite(155,455,50,50);
  t74 = createSprite(215,455,50,50);
  t75 = createSprite(275,455,50,50);
  t76 = createSprite(335,455,50,50);
  t77 = createSprite(395,455,50,50);
  t78 = createSprite(455,455,50,50);
  t79 = createSprite(515,455,50,50);
  t80 = createSprite(575,455,50,50);

  t81 = createSprite(35,515,50,50);
  t82 = createSprite(95,515,50,50);
  t83 = createSprite(155,515,50,50);
  t84 = createSprite(215,515,50,50);
  t85 = createSprite(275,515,50,50);
  t86 = createSprite(335,515,50,50);
  t87 = createSprite(395,515,50,50);
  t88 = createSprite(455,515,50,50);
  t89 = createSprite(515,515,50,50);
  t90 = createSprite(575,515,50,50);

  number = createSprite(305,575,170,50);

  done = createSprite(450,575,50,50);

  t1.shapeColor = "white";
  t2.shapeColor = "white";
  t3.shapeColor = "white";
  t4.shapeColor = "white";
  t5.shapeColor = "white";
  t6.shapeColor = "white";
  t7.shapeColor = "white";
  t8.shapeColor = "white";
  t9.shapeColor = "white";
  t10.shapeColor = "white";

  t11.shapeColor = "white";
  t12.shapeColor = "white";
  t13.shapeColor = "white";
  t14.shapeColor = "white";
  t15.shapeColor = "white";
  t16.shapeColor = "white";
  t17.shapeColor = "white";
  t18.shapeColor = "white";
  t19.shapeColor = "white";
  t20.shapeColor = "white";

  t21.shapeColor = "white";
  t22.shapeColor = "white";
  t23.shapeColor = "white";
  t24.shapeColor = "white";
  t25.shapeColor = "white";
  t26.shapeColor = "white";
  t27.shapeColor = "white";
  t28.shapeColor = "white";
  t29.shapeColor = "white";
  t30.shapeColor = "white";

  t31.shapeColor = "white";
  t32.shapeColor = "white";
  t33.shapeColor = "white";
  t34.shapeColor = "white";
  t35.shapeColor = "white";
  t36.shapeColor = "white";
  t37.shapeColor = "white";
  t38.shapeColor = "white";
  t39.shapeColor = "white";
  t40.shapeColor = "white";

  t41.shapeColor = "white";
  t42.shapeColor = "white";
  t43.shapeColor = "white";
  t44.shapeColor = "white";
  t45.shapeColor = "white";
  t46.shapeColor = "white";
  t47.shapeColor = "white";
  t48.shapeColor = "white";
  t49.shapeColor = "white";
  t50.shapeColor = "white";

  t51.shapeColor = "white";
  t52.shapeColor = "white";
  t53.shapeColor = "white";
  t54.shapeColor = "white";
  t55.shapeColor = "white";
  t56.shapeColor = "white";
  t57.shapeColor = "white";
  t58.shapeColor = "white";
  t59.shapeColor = "white";
  t60.shapeColor = "white";

  t61.shapeColor = "white";
  t62.shapeColor = "white";
  t63.shapeColor = "white";
  t64.shapeColor = "white";
  t65.shapeColor = "white";
  t66.shapeColor = "white";
  t67.shapeColor = "white";
  t68.shapeColor = "white";
  t69.shapeColor = "white";
  t70.shapeColor = "white";

  t71.shapeColor = "white";
  t72.shapeColor = "white";
  t73.shapeColor = "white";
  t74.shapeColor = "white";
  t75.shapeColor = "white";
  t76.shapeColor = "white";
  t77.shapeColor = "white";
  t78.shapeColor = "white";
  t79.shapeColor = "white";
  t80.shapeColor = "white";

  t81.shapeColor = "white";
  t82.shapeColor = "white";
  t83.shapeColor = "white";
  t84.shapeColor = "white";
  t85.shapeColor = "white";
  t86.shapeColor = "white";
  t87.shapeColor = "white";
  t88.shapeColor = "white";
  t89.shapeColor = "white";
  t90.shapeColor = "white";

  number.shapeColor = "white";

  done.shapeColor = "white";

  gameState = 0;

  gt1 = 0;
  gt2 = 0;
  gt3 = 0;
  gt4 = 0;
  gt5 = 0;
  gt6 = 0;
  gt7 = 0;
  gt8 = 0;
  gt9 = 0;
  gt10 = 0;

  gt11 = 0;
  gt12 = 0;
  gt13 = 0;
  gt14 = 0;
  gt15 = 0;
  gt16 = 0;
  gt17 = 0;
  gt18 = 0;
  gt19 = 0;
  gt20 = 0;

  gt21 = 0;
  gt22 = 0;
  gt23 = 0;
  gt24 = 0;
  gt25 = 0;
  gt26 = 0;
  gt27 = 0;
  gt28 = 0;
  gt29 = 0;
  gt30 = 0;

  gt31 = 0;
  gt32 = 0;
  gt33 = 0;
  gt34 = 0;
  gt35 = 0;
  gt36 = 0;
  gt37 = 0;
  gt38 = 0;
  gt39 = 0;
  gt40 = 0;

  gt41 = 0;
  gt42 = 0;
  gt43 = 0;
  gt44 = 0;
  gt45 = 0;
  gt46 = 0;
  gt47 = 0;
  gt48 = 0;
  gt49 = 0;
  gt50 = 0;

  gt51 = 0;
  gt52 = 0;
  gt53 = 0;
  gt54 = 0;
  gt55 = 0;
  gt56 = 0;
  gt57 = 0;
  gt58 = 0;
  gt59 = 0;
  gt60 = 0;

  gt61 = 0;
  gt62 = 0;
  gt63 = 0;
  gt64 = 0;
  gt65 = 0;
  gt66 = 0;
  gt67 = 0;
  gt68 = 0;
  gt69 = 0;
  gt70 = 0;

  gt71 = 0;
  gt72 = 0;
  gt73 = 0;
  gt74 = 0;
  gt75 = 0;
  gt76 = 0;
  gt77 = 0;
  gt78 = 0;
  gt79 = 0;
  gt80 = 0;

  gt81 = 0;
  gt82 = 0;
  gt83 = 0;
  gt84 = 0;
  gt85 = 0;
  gt86 = 0;
  gt87 = 0;
  gt88 = 0;
  gt89 = 0;
  gt90 = 0;
}

function draw() {
  background("red");  

  if(mousePressedOver(number) && gameState === 0){
    next();
    gameState = 1;
  }

  if(gameState === 1 && mousePressedOver(done)){
    gameState = 0;
  }
  
  drawSprites();

  fill("blue");
  textSize(30);

  text("1",t1.x-10,t1.y+10);
  text("2",t2.x-10,t2.y+10);
  text("3",t3.x-10,t3.y+10);
  text("4",t4.x-10,t4.y+10);
  text("5",t5.x-10,t5.y+10);
  text("6",t6.x-10,t6.y+10);
  text("7",t7.x-10,t7.y+10);
  text("8",t8.x-10,t8.y+10);
  text("9",t9.x-10,t9.y+10);
  text("10",t10.x-15,t10.y+10);

  text("11",t11.x-15,t11.y+10);
  text("12",t12.x-15,t12.y+10);
  text("13",t13.x-15,t13.y+10);
  text("14",t14.x-15,t14.y+10);
  text("15",t15.x-15,t15.y+10);
  text("16",t16.x-15,t16.y+10);
  text("17",t17.x-15,t17.y+10);
  text("18",t18.x-15,t18.y+10);
  text("19",t19.x-15,t19.y+10);
  text("20",t20.x-15,t20.y+10);

  text("21",t21.x-15,t21.y+10);
  text("22",t22.x-15,t22.y+10);
  text("23",t23.x-15,t23.y+10);
  text("24",t24.x-15,t24.y+10);
  text("25",t25.x-15,t25.y+10);
  text("26",t26.x-15,t26.y+10);
  text("27",t27.x-15,t27.y+10);
  text("28",t28.x-15,t28.y+10);
  text("29",t29.x-15,t29.y+10);
  text("30",t30.x-15,t30.y+10);

  text("31",t31.x-15,t31.y+10);
  text("32",t32.x-15,t32.y+10);
  text("33",t33.x-15,t33.y+10);
  text("34",t34.x-15,t34.y+10);
  text("35",t35.x-15,t35.y+10);
  text("36",t36.x-15,t36.y+10);
  text("37",t37.x-15,t37.y+10);
  text("38",t38.x-15,t38.y+10);
  text("39",t39.x-15,t39.y+10);
  text("40",t40.x-15,t40.y+10);

  text("41",t41.x-15,t41.y+10);
  text("42",t42.x-15,t42.y+10);
  text("43",t43.x-15,t43.y+10);
  text("44",t44.x-15,t44.y+10);
  text("45",t45.x-15,t45.y+10);
  text("46",t46.x-15,t46.y+10);
  text("47",t47.x-15,t47.y+10);
  text("48",t48.x-15,t48.y+10);
  text("49",t49.x-15,t49.y+10);
  text("50",t50.x-15,t50.y+10);

  text("51",t51.x-15,t51.y+10);
  text("52",t52.x-15,t52.y+10);
  text("53",t53.x-15,t53.y+10);
  text("54",t54.x-15,t54.y+10);
  text("55",t55.x-15,t55.y+10);
  text("56",t56.x-15,t56.y+10);
  text("57",t57.x-15,t57.y+10);
  text("58",t58.x-15,t58.y+10);
  text("59",t59.x-15,t59.y+10);
  text("60",t60.x-15,t60.y+10);

  text("61",t61.x-15,t61.y+10);
  text("62",t62.x-15,t62.y+10);
  text("63",t63.x-15,t63.y+10);
  text("64",t64.x-15,t64.y+10);
  text("65",t65.x-15,t65.y+10);
  text("66",t66.x-15,t66.y+10);
  text("67",t67.x-15,t67.y+10);
  text("68",t68.x-15,t68.y+10);
  text("69",t69.x-15,t69.y+10);
  text("70",t70.x-15,t70.y+10);

  text("71",t71.x-15,t71.y+10);
  text("72",t72.x-15,t72.y+10);
  text("73",t73.x-15,t73.y+10);
  text("74",t74.x-15,t74.y+10);
  text("75",t75.x-15,t75.y+10);
  text("76",t76.x-15,t76.y+10);
  text("77",t77.x-15,t77.y+10);
  text("78",t78.x-15,t78.y+10);
  text("79",t79.x-15,t79.y+10);
  text("80",t80.x-15,t80.y+10);

  text("81",t81.x-15,t81.y+10);
  text("82",t82.x-15,t82.y+10);
  text("83",t83.x-15,t83.y+10);
  text("84",t84.x-15,t84.y+10);
  text("85",t85.x-15,t85.y+10);
  text("86",t86.x-15,t86.y+10);
  text("87",t87.x-15,t87.y+10);
  text("88",t88.x-15,t88.y+10);
  text("89",t89.x-15,t89.y+10);
  text("90",t90.x-15,t90.y+10);

  text("NEXT",number.x-35,number.y+10);

  textSize(15);
  text("DONE",done.x-20,done.y+10);
}

function next(){
  rand = random(1,90);
  r = round(rand);
  console.log(r);

  if(r === 1){
    t1.shapeColor = "yellow";
    gt1 = 1;
  }
  if(r === 2){
    t2.shapeColor = "yellow";
    gt2 = 1;
  }
  if(r === 3){
    t3.shapeColor = "yellow";
    gt3 = 1;
  }
  if(r === 4){
    t4.shapeColor = "yellow";
    gt4 = 1;
  }
  if(r === 5){
    t5.shapeColor = "yellow";
    gt5 = 1;
  }
  if(r === 6){
    t6.shapeColor = "yellow";
    gt6 = 1;
  }
  if(r === 7){
    t7.shapeColor = "yellow";
    gt7 = 1;
  }
  if(r === 8){
    t8.shapeColor = "yellow";
    gt8 = 1;
  }
  if(r === 9){
    t9.shapeColor = "yellow";
    gt9 = 1;
  }
  if(r === 10){
    t10.shapeColor = "yellow";
    gt10 = 1;
  }

  if(r === 11){
    t11.shapeColor = "yellow";
    gt11 = 1;
  }
  if(r === 12){
    t12.shapeColor = "yellow";
    gt12 = 1;
  }
  if(r === 13){
    t13.shapeColor = "yellow";
    gt13 = 1;
  }
  if(r === 14){
    t14.shapeColor = "yellow";
    gt14 = 1;
  }
  if(r === 15){
    t15.shapeColor = "yellow";
    gt15 = 1;
  }
  if(r === 16){
    t16.shapeColor = "yellow";
    gt16 = 1;
  }
  if(r === 17){
    t17.shapeColor = "yellow";
    gt17 = 1;
  }
  if(r === 18){
    t18.shapeColor = "yellow";
    gt18 = 1;
  }
  if(r === 19){
    t19.shapeColor = "yellow";
    gt19 = 1;
  }
  if(r === 20){
    t20.shapeColor = "yellow";
    gt20 = 1;
  }

  if(r === 21){
    t21.shapeColor = "yellow";
    gt21 = 1;
  }
  if(r === 22){
    t22.shapeColor = "yellow";
    gt22 = 1;
  }
  if(r === 23){
    t23.shapeColor = "yellow";
    gt23 = 1;
  }
  if(r === 24){
    t24.shapeColor = "yellow";
    gt24 = 1;
  }
  if(r === 25){
    t25.shapeColor = "yellow";
    gt25 = 1;
  }
  if(r === 26){
    t26.shapeColor = "yellow";
    gt26 = 1;
  }
  if(r === 27){
    t27.shapeColor = "yellow";
    gt27 = 1
  }
  if(r === 28){
    t28.shapeColor = "yellow";
    gt28 = 1;
  }
  if(r === 29){
    t29.shapeColor = "yellow";
    gt29 = 1;
  }
  if(r === 30){
    t30.shapeColor = "yellow";
    gt30 = 1;
  }

  if(r === 31){
    t31.shapeColor = "yellow";
    gt31 = 1;
  }
  if(r === 32){
    t32.shapeColor = "yellow";
    gt32 = 1;
  }
  if(r === 33){
    t33.shapeColor = "yellow";
    gt33 = 1;
  }
  if(r === 34){
    t34.shapeColor = "yellow";
    gt34 = 1;
  }
  if(r === 35){
    t35.shapeColor = "yellow";
    gt35 = 1;
  }
  if(r === 36){
    t36.shapeColor = "yellow";
    gt36 = 1;
  }
  if(r === 37){
    t37.shapeColor = "yellow";
    gt37 = 1;
  }
  if(r === 38){
    t38.shapeColor = "yellow";
    gt38 = 1;
  }
  if(r === 39){
    t39.shapeColor = "yellow";
    gt39 = 1;
  }
  if(r === 40){
    t40.shapeColor = "yellow";
    gt40 = 1;
  }

  if(r === 41){
    t41.shapeColor = "yellow";
    gt41 = 1;
  }
  if(r === 42){
    t42.shapeColor = "yellow";
    gt42 = 1;
  }
  if(r === 43){
    t43.shapeColor = "yellow";
    gt43 = 1;
  }
  if(r === 44){
    t44.shapeColor = "yellow";
    gt44 = 1;
  }
  if(r === 45){
    t45.shapeColor = "yellow";
    gt45 = 1;
  }
  if(r === 46){
    t46.shapeColor = "yellow";
    gt46 = 1;
  }
  if(r === 47){
    t47.shapeColor = "yellow";
    gt47 = 1;
  }
  if(r === 48){
    t48.shapeColor = "yellow";
    gt48 = 1;
  }
  if(r === 49){
    t49.shapeColor = "yellow";
    gt49 = 1;
  }
  if(r === 50){
    t50.shapeColor = "yellow";
    gt50 = 1;
  }

  if(r === 51){
    t51.shapeColor = "yellow";
    gt51 = 1;
  }
  if(r === 52){
    t52.shapeColor = "yellow";
    gt52 = 1;
  }
  if(r === 53){
    t53.shapeColor = "yellow";
    gt53 = 1;
  }
  if(r === 54){
    t54.shapeColor = "yellow";
    gt54 = 1;
  }
  if(r === 55){
    t55.shapeColor = "yellow";
    gt55 = 1;
  }
  if(r === 56){
    t56.shapeColor = "yellow";
    gt56 = 1;
  }
  if(r === 57){
    t57.shapeColor = "yellow";
    gt57 = 1;
  }
  if(r === 58){
    t58.shapeColor = "yellow";
    gt58 = 1;
  }
  if(r === 59){
    t59.shapeColor = "yellow";
    gt59 = 1;
  }
  if(r === 60){
    t60.shapeColor = "yellow";
    gt60 = 1;
  }

  if(r === 61){
    t61.shapeColor = "yellow";
    gt61 = 1;
  }
  if(r === 62){
    t62.shapeColor = "yellow";
    gt62 = 1;
  }
  if(r === 63){
    t63.shapeColor = "yellow";
    gt63 = 1;
  }
  if(r === 64){
    t64.shapeColor = "yellow";
    gt64 = 1;
  }
  if(r === 65){
    t65.shapeColor = "yellow";
    gt65 = 1;
  }
  if(r === 66){
    t66.shapeColor = "yellow";
    gt66 = 1;
  }
  if(r === 67){
    t67.shapeColor = "yellow";
    gt67 = 1;
  }
  if(r === 68){
    t68.shapeColor = "yellow";
    gt68 = 1;
  }
  if(r === 69){
    t69.shapeColor = "yellow";
    gt69 = 1;
  }
  if(r === 70){
    t70.shapeColor = "yellow";
    gt70 = 1;
  }

  if(r === 71){
    t71.shapeColor = "yellow";
    gt71 = 1;
  }
  if(r === 72){
    t72.shapeColor = "yellow";
    gt72 = 1;
  }
  if(r === 73){
    t73.shapeColor = "yellow";
    gt73 = 1;
  }
  if(r === 74){
    t74.shapeColor = "yellow";
    gt74 = 1;
  }
  if(r === 75){
    t75.shapeColor = "yellow";
    gt75 = 1;
  }
  if(r === 76){
    t76.shapeColor = "yellow";
    gt76 = 1;
  }
  if(r === 77){
    t77.shapeColor = "yellow";
    gt77 = 1;
  }
  if(r === 78){
    t78.shapeColor = "yellow";
    gt78 = 1;
  }
  if(r === 79){
    t79.shapeColor = "yellow";
    gt79 = 1;
  }
  if(r === 80){
    t80.shapeColor = "yellow";
    gt80 = 1;
  }

  if(r === 81){
    t81.shapeColor = "yellow";
    gt81 = 1;
  }
  if(r === 82){
    t82.shapeColor = "yellow";
    gt82 = 1;
  }
  if(r === 83){
    t83.shapeColor = "yellow";
    gt83 = 1;
  }
  if(r === 84){
    t84.shapeColor = "yellow";
    gt84 = 1;
  }
  if(r === 85){
    t85.shapeColor = "yellow";
    gt85 = 1;
  }
  if(r === 86){
    t86.shapeColor = "yellow";
    gt86 = 1;
  }
  if(r === 87){
    t87.shapeColor = "yellow";
    gt87 = 1;
  }
  if(r === 88){
    t88.shapeColor = "yellow";
    gt88 = 1;
  }
  if(r === 89){
    t89.shapeColor = "yellow";
    gt89 = 1;
  }
  if(r === 90){
    t90.shapeColor = "yellow";
    gt90 = 1;
  }
}