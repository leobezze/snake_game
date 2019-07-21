window.onload = function(){
 
            let stage = document.getElementById('stage'); //pega o elemento do html
            let ctx = stage.getContext("2d");
            document.addEventListener("keydown", keyPush);
            // setInterval define um intervalo para uma função ser chamada varias vezes com aquele intervalo
            setInterval(game, 80);
 
            // vel = quantas casas a cobrinha vai andar cada vez que a logica passar por ela
            const vel = 1;
 
            let velX = velY = 0; // velX velocidade x | velY velocidade y
            let pontoX =10;  //posição da cabeça da cobra
            let pontoY = 15;
            let tamanhoPeca = 30; //tamanho da Peça
            let quantidPeca = 20; // quantidade de peças
            let ax=ay=15; 
 
            let trail = [];
            tail = 5;
 
            //função game chama a cobra a cada intervalo 80
            function game(){
                pontoX += velX;
                pontoY += velY;
                if (pontoX <0) {
                    pontoX = quantidPeca-1;
                }
                if (pontoX > quantidPeca-1) {
                    pontoX = 0;
                }
                if (pontoY < 0) {
                    pontoY = quantidPeca-1;
                }
                if (pontoY > quantidPeca-1) {
                    pontoY = 0;
                }
 
                ctx.fillStyle = "gray";
                ctx.fillRect(0,0, stage.width, stage.height);
 
                ctx.fillStyle = "red";
                ctx.fillRect(ax*tamanhoPeca, ay*tamanhoPeca, tamanhoPeca,tamanhoPeca);
 
                ctx.fillStyle = "green";
                for (let i = 0; i < trail.length; i++) {
                    ctx.fillRect(trail[i].x*tamanhoPeca, trail[i].y*tamanhoPeca, tamanhoPeca-1,tamanhoPeca-1);
                    if (trail[i].x == pontoX && trail[i].y == pontoY)
                    {
                        velX = velY=0;
                        tail =5;
                    }
                }
 
                trail.push({x:pontoX,y:pontoY })
                while (trail.length > tail) {
                    trail.shift();
                }
 
                if (ax==pontoX && ay==pontoY){
                    tail++;
                    ax = Math.floor(Math.random()*quantidPeca);
                    ay = Math.floor(Math.random()*quantidPeca);
                }
 
            }
 
            function keyPush(event){
 
                switch (event.keyCode) {
                    case 37: // Left
                        velX = -vel;
                        velY = 0;
                        break;
                    case 38: // up
                        velX = 0;
                        velY = -vel;
                        break;
                    case 39: // right
                        velX = vel;
                        velY = 0;
                        break;
                    case 40: // down
                        velX = 0;
                        velY = vel;
                        break;         
                    default:
                       
                        break;
                }
 
 
            }
 
        }