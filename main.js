var canvas= new fabric.Canvas('myCanvas');

width_block = 30 ;
height_block = 30 ; 

player_x = 10;
player_y = 10;

var player_object = "" ;
var block_object = "" ;

function update_player(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object= Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}

function newImage(get_Image){
fabric.Image.fromURL(get_Image, function(Img){
    block_object= Img;
    block_object.scaleToWidth(width_block);
    block_object.scaleToHeight(height_block);
    block_object.set({
        top:player_y,
        left:player_x
    });
    canvas.add(block_object);
});
}

window.addEventListener("keydown" , my_keydown);

function my_keydown(e){
    key_pressed= e.keyCode;
    console.log(key_pressed);
    if(key_pressed=='38'){
        up();
        console.log("up");
    }

    if(key_pressed=='40'){
        down();
        console.log("down");
    }

    if(key_pressed=='37'){
        left();
        console.log("left");
    }

    if(key_pressed=='39'){
        right();
        console.log("right");
    }
    
    if(key_pressed=='68'){
        newImage('dark_green.png');
        console.log("d");
    }
    
    if(key_pressed=='67'){
        newImage('cloud.jpg');
        console.log("c");
    }

    if(key_pressed=='71'){
        newImage('ground.png');
        console.log("g");
    }

    if(key_pressed=='76'){
        newImage('light_green.png');
        console.log("l");
    }

    if(key_pressed=='82'){
        newImage('roof.jpg');
        console.log("r");
    }

    if(key_pressed=='84'){
        newImage('trunk.jpg');
        console.log("t");
    }

    if(key_pressed=='85'){
        newImage('unique.png');
        console.log("u");
    }

    if(key_pressed=='87'){
        newImage('wall.jpg');
        console.log("w");
    }

    if(key_pressed=='89'){
        newImage('yellow_wall.png');
        console.log("y");
    }

    if(e.shiftKey==true && key_pressed=='80'){
        console.log("shift and p pressed together");
        width_block= width_block + 10;
        height_block= height_block + 10;
        document.getElementById("width").innerHTML=width_block;
        document.getElementById("height").innerHTML=height_block;
    }

    if(e.shiftKey==true && key_pressed=='77'){
        console.log("shift and m pressed together");
        width_block= width_block - 10;
        height_block= height_block - 10;
        document.getElementById("width").innerHTML=width_block;
        document.getElementById("height").innerHTML=height_block;
    }
}

function up(){
    if(player_y>=0){
        player_y= player_y - height_block;
        console.log("Height of the block is " + height_block);
        console.log("When up arrow key is pressed, x = " + player_x + ", y = " + player_y);
        canvas.remove(player_object);
        update_player();
    }
}

function down(){
    if(player_y<= 500){
        player_y= player_y + height_block;
        console.log("Height of the block is " + height_block);
        console.log("When down arrow key is pressed, x = " + player_x + ", y = " + player_y);
        canvas.remove(player_object);
        update_player();
    }
}

function left(){
    if(player_x >= 0){
        player_x= player_x - width_block;
        console.log("Width of the block is " + width_block);
        console.log("When left arrow key is pressed, x = " + player_x + ", y = " + player_y);
        canvas.remove(player_object);
        update_player();
   }
}

function right(){
    if(player_x <= 900){
        player_x= player_x + width_block;
        console.log("Width of the block is " + width_block);
        console.log("When right arrow key is pressed, x = " + player_x +", y = " + player_y);
        canvas.remove(player_object);
        update_player();
    }
}