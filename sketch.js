var tela = 0
var largura = 380 //largura botões tela inícial
var largura1 = 150 //largura botão creditos
var largura2 = 100 //largura botão voltar
var largurapeca = 160
var altura = 80 //altura botões tela inícial
var altura1= 50 //altura botão creditos
var altura2 = 30 //altura botão créditos
var alturapeca = 200
var xpeca = 25
var xMenu = 180 //posição x botões tela inicial
var xMenu1 = 45 //posição x botão créditos
var xvoltar = 580 //posição x botão voltar
var ypeca = 130
var yMenu1 = 370 //posição y botão jogar
var yMenu2 = 470 //posição y botão como jogar
var yMenu3 = 570 //posição y botão informações
var yMenu4 = 900 //posição y botão créditos
var yvoltar = 50 //posição y botão voltar
var imgCartas = []
var matrizCartasViradas = []
var cartaVirada;
var imgFundoCartaAzul;
var matrizImgCartas = []
var matrizImgCartasFundo = []
var imgFundoCartaAmarela
var cartasFundo = []
var matrizPar=[]
var matrizValores=[]
var valoresCartas = []
var posInicialX=55
var posInicialY=40
var larguraCarta=160
var alturaCarta = 205

var xTotal=0
var yTotal=0
var larguraTotal = 650
var alturaTotal = 1000

var indicesOriginais=[]
var indicesEmbaralhados=[]

var contClick = 0
var contPares=0

var linColAnterior=[]

function preload() {
  img = loadImage('backgroundMenu.png');
  logo= loadImage('LogoTipo.png')
  iso= loadImage('IsoTipo.png')
  peca = loadImage('Peças do jogo da memória - LoP.png');
  bg= loadImage('backgroundJogo.png')
  cj=loadImage('comojogar.png')
  inf=loadImage('informacoes.png')
  fonte=loadFont('BebasNeue-Regular.otf')
  creditos=loadImage('tela-créditos.png')
  imgCarta1=loadImage('1.png')
  fogos=loadImage('fogos-ok.gif')
  imgFundoCartaAzul = loadImage('fundoCartaAzul.png')
  imgFundoCartaAmarela= loadImage('fundoCartaAmarelo.png')
  for(c=1;c<=8;c++){
    tempImgConta = loadImage(""+c+".png")
    imgCartas.push(tempImgConta)
    valoresCartas.push(c)
    cartasFundo.push(imgFundoCartaAzul)
    tempImg = loadImage(""+c+".1.png")
    imgCartas.push(tempImg)
    cartasFundo.push(imgFundoCartaAmarela)
    valoresCartas.push(c)
  }

}

function setup() {
  createCanvas(750, 1000);
  cartaVirada = true
  for(i=0;i<16;i++){
    indicesOriginais[i]=i
  }
  indicesEmbaralhados= embaralhar(indicesOriginais)
  console.log( indicesEmbaralhados)
  
    cont=0
  for(l=0;l<4;l++){
    tempPecaLinha=[]
    tempCartaVirada = []
    tempCartasFundo=[]
    tempValor=[]
    tempPar=[]
    for(i=0;i<4;i++){
      tempPecaLinha[i]=imgCartas[indicesEmbaralhados[cont]]
      tempValor[i]=valoresCartas[indicesEmbaralhados[cont]]
      tempCartasFundo[i]=cartasFundo[indicesEmbaralhados[cont]]
      tempCartaVirada[i] = false
      tempPar[i]=false
      cont++
    }
    matrizCartasViradas[l]= tempCartaVirada
    matrizImgCartas[l]=tempPecaLinha
    matrizImgCartasFundo [l]=tempCartasFundo
    matrizValores[l]=tempValor
    matrizPar[l]=tempPar
  }
  
}

function telaComoJogar(){
  background(208,208,208);
    image(cj,0,0)
    if ( mouseX > xvoltar && mouseX <xvoltar+largura2 && mouseY> yvoltar && mouseY<yvoltar + altura2){
        noFill()
        stroke(0)
        strokeWeight(4)
        rect(xvoltar, yvoltar, largura2, altura2, 100);
      
    }
    noStroke()
    fill(0)
    textSize(30)
    text("voltar",630,77)
}

function telaInformacoes(){
  background(208,208,208);
    image(inf,0,0)
     if ( mouseX > xMenu1 && mouseX <xMenu1+largura1 && mouseY> yMenu4 && mouseY<yMenu4 + altura){
        noFill()
        stroke(0)
        strokeWeight(4)
        rect(xMenu1, yMenu4, largura1, altura1, 100);
      
    }
    noStroke()
    fill(0)
    textSize(40)
    text("CRÉDITOS",120,937)
    if ( mouseX > xvoltar && mouseX <xvoltar+largura2 && mouseY> yvoltar && mouseY<yvoltar + altura2){
        noFill()
        stroke(0)
        strokeWeight(4)
        rect(xvoltar, yvoltar, largura2, altura2, 100);
      
    }
    noStroke()
    fill(0)
    textSize(30)
    text("voltar",630,77)
}

function telaCreditos() {
  image(creditos,0,0)
    if ( mouseX > xvoltar && mouseX <xvoltar+largura2 && mouseY> yvoltar && mouseY<yvoltar + altura2){
        noFill()
        stroke(0)
        strokeWeight(4)
        rect(xvoltar, yvoltar, largura2, altura2, 100);
      
    }
    noStroke()
    fill(0)
    textSize(30)
    text("voltar",630,77)
    
}

function telaMenu() {
  background(208,208,208);
    image(img,0,0)
      image(logo,0,0)
    textAlign(CENTER)
    textSize(60)
    textFont(fonte)
    
    //jogar
    if ( mouseX > xMenu && mouseX <xMenu+largura && mouseY> yMenu1 && mouseY< yMenu1 + altura){
        noFill()
        stroke(41,156,177)
        strokeWeight(4)
        rect(xMenu, yMenu1, largura, altura, 100);
      
    }
    noStroke()
    fill(41,156,177)
    text("JOGAR",370,430)
        
    
    //como jogar
    if(mouseX > xMenu && mouseX < xMenu+largura && mouseY> yMenu2 && mouseY< yMenu2 + altura){
      noFill()
      stroke(41,156,177)
      strokeWeight(4)
      rect(xMenu, yMenu2, largura, altura, 100);
      
    }
    noStroke()
    fill(41,156,177)
    text("COMO JOGAR",370,530)
  
    //informações
    if(mouseX > xMenu && mouseX < xMenu+largura && mouseY> yMenu3 && mouseY< yMenu3 + altura){
      noFill()
      stroke(41,156,177)
      strokeWeight(4)
      rect(xMenu, yMenu3, largura, altura, 100);
    }
    noStroke()
    fill(41,156,177)
    text("INFORMAÇÕES",370,630)
  
}

function MostrarCartas(){
  
  posInicialX=55
  posInicialY=40
  larguraCarta=160
  alturaCarta = 205
  posY=posInicialY
  for(l=0;l<4;l++){
     posX=posInicialX
    for(i=0;i<4;i++){
      if(matrizCartasViradas[l][i] || matrizPar[l][i]){
        image( matrizImgCartas[l][i],posX,posY)
      }
      else{
        image(matrizImgCartasFundo[l][i],posX,posY)
      }
      posX=posX+larguraCarta
    }
    posY=posY+alturaCarta
  }
   
  
} 

function converte(mx,my){
  mx= mx -  posInicialX
  my = my - posInicialY
  posLinha = parseInt(mx/larguraCarta)
  posColuna = parseInt(my/alturaCarta)
  console.log(posLinha,posColuna)
  posLC=[]
  posLC[1]= posLinha 
  posLC[0]= posColuna
  return posLC
}

function telaDoJogo(){
  background(208,208,208)
  image(bg,0,0)
  image(iso,-30,+2)
   textAlign(CENTER)
    textSize(60)
    textFont(fonte)
  
  
  //converte(mouseX,mouseY)
  /*
  if(cartaVirada){
    image( matrizImgCartas[0][2],20,80)
  }
  else{
    image(imgFundoCartaAzul,20,80)
  }
  */
  MostrarCartas()
  fill(29,29,29)
    text("fase 1",340,950)
}

function TelaFinal(){
  image(bg,0,0)
    image(fogos,0,200,800,900)
  fill(29,29,29)
    textFont(fonte)
    textSize(100)
    text("Parabéns!",340,200)
  
  textSize(40)
    text("Você conseguiu",340,240)
}

function draw() {
  //tela menu
  if(tela==0){
    telaMenu()
  }
      
  //tela jogo em ação
  
  if(tela==1){
    telaDoJogo()
  }
  
  // tela como jogar
  if(tela==2){
    telaComoJogar()
  }
  
   // tela informações 
  if(tela==3){
    telaInformacoes()
  }
  
  //créditos
  if(tela==4){
    telaCreditos()
  }
  
  if(contPares ==16 ){
    TelaFinal()
  }
  
}
  


function mouseClicked() {
  if(tela==0){ 
    if ( mouseX > xMenu && mouseX <xMenu+largura && mouseY> yMenu1 && mouseY< yMenu1 + altura){
      //botão jogar
          tela=1
    }
    else{
      if(mouseX > xMenu && mouseX < xMenu+largura && mouseY> yMenu2 && mouseY<yMenu2 + altura){
        //botão como jogar
        tela=2
      }
      else{
        if(mouseX > xMenu && mouseX <xMenu+largura && mouseY>yMenu3 && mouseY<yMenu3 + altura){
      //botão informações
          tela=3
        }
      }
    }      
   } //botões do menu
  else{
    if(tela==1){
    linCol=converte(mouseX,mouseY)
    matrizCartasViradas[linCol[0]][linCol[1]] = true
    contClick=contClick+1
      if(contClick==2){
         if(matrizValores[linCol[0]][linCol[1]]==matrizValores[linColAnterior[0]][linColAnterior[1]]){
            matrizPar[linCol[0]][linCol[1]]=true
             matrizPar[linColAnterior[0]][linColAnterior[1]]=true
           
               contPares=contPares+2
           
          }
      }
       
      if(contClick>2){
        for(l=0;l<4;l++){
          for(c=0;c<4;c++){
              matrizCartasViradas[l][c]=false
          }
        }
        matrizCartasViradas[linCol[0]][linCol[1]] = true
         contClick=1
      }
      if(contClick==1){
        linColAnterior=linCol
      }
  }
    else{
      if(tela==2){
        if( mouseX > xvoltar && mouseX <xvoltar+largura2 && mouseY> yvoltar && mouseY<yvoltar + altura2){
      tela=0
    }
  } //botão de voltar (tela de como jogar)
      else{
        if(tela==3){
          if ( mouseX > xMenu1 && mouseX <xMenu1+largura1 && mouseY> yMenu4 && mouseY<yMenu4 + altura1){
      //botão creditos
             tela=4
        }
        else{
          if( mouseX > xvoltar && mouseX <xvoltar+largura2 && mouseY> yvoltar && mouseY<yvoltar + altura2){
        tela=0
        }
      }
    } 
   }//botão de créditos e botão de voltar
  if(tela==4){
    if( mouseX > xvoltar && mouseX <xvoltar+largura2 && mouseY> yvoltar && mouseY<yvoltar + altura2){
      tela=0
    }
  } //botão de voltar (tela e créditos)
  }
}
}
    
function embaralhar(vetorA){
  
  vetorB=[]
  quantInicialELementos=vetorA.length
  for(j=0;j<16;j++){
    i=parseInt(Math.random()*vetorA.length)
    vx=vetorA.splice(i,1)
    vetorB.push(vx[0])
  }
  return vetorB
}