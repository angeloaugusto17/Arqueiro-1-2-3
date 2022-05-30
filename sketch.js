//CONSTANTES - BIBLIOTECA MATTER - OK
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//VARIAVEIS - OK
var engine, world;
var canvas;
var player, playerBase, playerArcher;
var playerArrows = [];
var board1, board2;
var numberOfArrows = 10;
var score = 0;
var imgBackground

//CARREGAR IMAGENS/ANIMAÇÕES/SONS - OK
function preload() {
  imgBackground = loadImage("./assets/background.png");
}

//INICIALIZAR VARIAVEIS - EXECUTA UMA VEZ
function setup() {
  //CRIA A TELA - OK
  canvas = createCanvas(windowWidth, windowHeight);

  //INICIALIZA MECANISMO E O MUNDO - OK
  engine = Engine.create();
  world = engine.world;

  //CRIAR A BASE DO CORPO DO JOGADOR COM A CLASSE PlayerBase - #PART1
  playerBase = new PlayerBase(300, 500, 180, 150);

  //CRIAR O CORPO DO JOGADOR COM A CLASSE Player e PlayerArcher - #PART1
  player = new Player(285, playerBase.body.position.y - 153, 50, 180);
  playerArcher = new PlayerArcher(340,playerBase.body.position.y - 180,120,120);

  //CRIAR OS ALVOS COM A CLASSE Board - #PART3
  board1 = new Board(width - 300, 330, 50, 200);
  board2 = new Board(width - 550, height - 300, 50, 200);

}

//DESENHA NA TELA, ADICIONA FUNÇOES - EXECUTA VARIAS VEZES
function draw() {
  //ADICIONA IMAGEM DO CENARIO - OK
  background(imgBackground);

  //ATUALIZA O MECANISMO - OK
  Engine.update(engine);

  //MOSTRA O PLAYER COM A FUNÇÃO Display(); - #PART1
  player.display();
  player.display();
  playerArcher.display();

  //MOSTRA OS ALVOS COM A FUNÇÃO Display(); - #PART3
  board1.display();
  board2.display();

  //MOSTRA TITULO - OK
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("ARQUEIRO ÉPICO", width / 2, 100);

  //MOSTRA CONTAGEM DE FLECHAS - OK
  fill("#FFFF");
  textAlign("center");
  textSize(30);
  text("Flechas Restantes: " + numberOfArrows, 200, 100);
  
  //MOSTRA PONTUAÇÃO - OK
  fill("#FFFF");
  textAlign("center");
  textSize(30);
  text("Pontuação: " + score, width - 200, 100);

}



