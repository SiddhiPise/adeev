var playbutton
var Gamestate;
var player , enemy

function preload() {
}

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight-4);
    
    playbutton = createSprite(windowWidth/2+500,windowHeight/2+200);

    Gamestate = "Homepage"

    edges=createEdgeSprites();

    player = createSprite (windowWidth/2-500,30) ;
    enemy = createSprite (windowWidth/2+500,150) ;
    enemy.velocityY = 10;
   
    player.visible = false
    enemy.visible = false
    arrowGroup = new Group ();
}

function draw(){
    background("lightblue");
    
    if (Gamestate==="Homepage") {
        background("yellow");   
    }

    if (mousePressedOver(playbutton)) {
        Gamestate = "level1" ;
        playbutton.visible=false
    } 
    
    if (Gamestate==="level1") {
        background ("lightblue")
        player.visible = true
        enemy.visible = true
        enemy.bounceOff(edges[3])
        enemy.bounceOff(edges[2])
        player.bounceOff(edges[3])
        player.bounceOff(edges[2])
            
            if (keyDown(UP_ARROW)) {
            player.y = player.y - 50;   
            }
        
            if (keyDown(DOWN_ARROW)) {
            player.y = player.y + 50;   
            }

            if (keyDown("space")) {
                
                var arrow = createSprite(200,200,20,20);
                arrow.y= player.y;
                arrow.x=player.x;
                arrow.velocityX = 10;
                arrowGroup.add(arrow);
            }
        
            if (arrowGroup.isTouching (enemy)){
                Gamestate ="level2";
                
            }
           
        
        }

        else if (Gamestate === "level2"){

            background ("pink");
            enemy.visible =false;
            player.visible =false;

        }
        drawSprites() ;  
}

