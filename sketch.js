//AS IMAGENS NAO CARREGAVAM E DIZIAM QUE NAO EXISTIA MAS ENTÃO EU FIZ DE OUTRA FORMA
//CRIANDO OS MEUS SPRITES USANDO O 'VAR' E O 'CREATESPRITE'

var tom, jerry;
var jerry_barriga,tom_barriga
var olhot1,olhot2;
var olhost1,olhost2;
var olhotb1,olhotb2;
var olhoj1,olhoj2;
var orelhat1,orelhat2;
var orelhaj1,orelhaj2;
var chao;
var alcance1,alcance2;
var sob1,sob2,sob3,sob4

function preload() {
    //load the images here
   
}

function setup(){
    createCanvas(800,700);
  
    chao = createSprite(400,650,800,100)
    chao.shapeColor = ('SaddleBrown')

    alcance1 = createSprite(410,400,240,440);
    alcance1.shapeColor = ('green');
    alcance1.visible = false;
    alcance2 = createSprite(195,500,190,240);
    alcance2.shapeColor = ('red')
    alcance2.visible = false;
   //create tom and jerry sprites here
//////////COMEÇO DO TOM////////////////////////////////////////////////// 
    tom = createSprite(600,500,130,210);
   
    tom_barriga = createSprite(600,520,65,125);
    tom_barriga.shapeColor = ('white')
    
    olhotb1 = createSprite(570,436,30,30);
    olhotb1.shapeColor = ('white');
    olhotb2 = createSprite(630,436,30,30);
    olhotb2.shapeColor = ('white');
    
    olhot1 = createSprite(570,436,10,10);
    olhot1.shapeColor = ('black');
    
    olhot2 = createSprite(630,436,10,10);
    olhot2.shapeColor = ('black');

    olhost1 = createSprite(563,442,10,10);
    olhost1.shapeColor = ('black');
    olhost1.visible = false;

    olhost2 = createSprite(623,442,10,10);
    olhost2.shapeColor = ('black');
    olhost2.visible = false;

    orelhat1 = createSprite(560,390,20,30);
    orelhat2 = createSprite(640,390,20,30);

    sob1 = createSprite(575,406,20,10);
    sob1.shapeColor = ('black');
    sob2 = createSprite(585,416,20,10);
    sob2.shapeColor = ('black');
    sob3 = createSprite(625,406,20,10);
    sob3.shapeColor = ('black')
    sob4 = createSprite(615,416,20,10);
    sob4.shapeColor = ('black');
 //////////FIM DO TOM/////////COMEÇO DO JERRY/////////////////////////////////////////   
    jerry = createSprite(200,576.6,40,57);
    jerry.shapeColor = ('brown');

    jerry_barriga = createSprite(200,582,20,33.5)
    jerry_barriga.shapeColor = ('Wheat')

    olhoj1 = createSprite(190,561,3.6,3.8);
    olhoj1.shapeColor = ('black');
    
    olhoj2 = createSprite(210,561,3.6,3.8);
    olhoj2.shapeColor = ('black');

    orelhaj1 = createSprite(210,547,7,9);
    orelhaj1.shapeColor = ('brown');
    orelhaj2 = createSprite(190,547,7,9);
    orelhaj2.shapeColor = ('brown');


////////////////FIM DO JERRY/////////////////////////////////////////////////////////////////////    
}

function draw() {

    background('skyBlue');
    //Write condition here to evalute if tom and jerry collide
    if (tom.isTouching(alcance1)){
        olhost1.visible = true;
        olhost2.visible = true;
        olhot1.visible = false;
        olhot2.visible = false;

    }else{
        olhost1.visible = false;
        olhost2.visible = false;
        olhot1.visible = true;
        olhot2.visible = true;

    }
    if (tom.isTouching(alcance2)){
        sob1.visible = true;
        sob2.visible = true;
        sob3.visible = true;
        sob4.visible = true;

    }else{
        sob1.visible = false;
        sob2.visible = false;
        sob3.visible = false;
        sob4.visible = false;

    }
   
    keyPressed();

    drawSprites();
    textSize (40);
    
   

}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyDown('a')){
    tom.x= tom.x -2;
    tom_barriga.x = tom_barriga.x -2;
    olhot1.x = olhot1.x -2;
    olhot2.x = olhot2.x -2;
    olhotb1.x = olhotb1.x -2;
    olhotb2.x = olhotb2.x -2;
    orelhat1.x = orelhat1.x -2;
    orelhat2.x = orelhat2.x -2;
    olhost1.x = olhost1.x -2;
    olhost2.x = olhost2.x -2;
    sob1.x = sob1.x -2;
    sob2.x = sob2.x -2;
    sob3.x = sob3.x -2;
    sob4.x = sob4.x -2;
  }
  if (keyDown('d')){
    tom.x= tom.x +2;
    tom_barriga.x = tom_barriga.x +2;
    olhot1.x = olhot1.x +2;
    olhot2.x = olhot2.x +2;
    olhotb1.x = olhotb1.x +2;
    olhotb2.x = olhotb2.x +2;
    orelhat1.x = orelhat1.x +2;
    orelhat2.x = orelhat2.x +2;
    olhost1.x = olhost1.x +2;
    olhost2.x = olhost2.x +2;
    sob1.x = sob1.x +2;
    sob2.x = sob2.x +2;
    sob3.x = sob3.x +2;
    sob4.x = sob4.x +2;
  }

}

