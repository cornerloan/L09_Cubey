class MouseSmiley extends Phaser.Scene {
    constructor() {
        super("mouseSmiley");
        this.my = {sprite: {}};
    }

    preload() {
        // Assets from Kenny Assets pack "Shape Characters"
        // https://kenney.nl/assets/shape-characters
        this.load.setPath("./assets/");
        // body
        this.load.image("yellowBody", "yellow_body_squircle.png");
        // smiles
        this.load.image("smile", "face_a.png");
        this.load.image("smileDimple", "face_c.png");
        // hands
        this.load.image("handOpen", "hand_yellow_open.png");
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>mouseSmiley.js</h2>'

    }

    create() {
        let my = this.my;



    }

    update() {
        let my = this.my;
        
        
        var pointer = this.input.activePointer;
        if(pointer.isDown){
            console.log("click");
            var touchX = pointer.downX;
            var touchY = pointer.downY;

            // Create the main body sprite
            my.sprite.body = this.add.sprite(touchX, touchY, "yellowBody");

            // Create the smile sprite
            my.sprite.smile = this.add.sprite(touchX, touchY + 20, "smile");
        
            // Create the sprite for the left and right hands
            my.sprite.leftOpenHand = this.add.sprite(touchX - 125, touchY + 20, "handOpen");
            my.sprite.leftOpenHand.flipX = true;   // flip sprite to have thumb on correct side
            my.sprite.rightOpenHand = this.add.sprite(touchX + 125, touchY + 20, "handOpen");

        }
        
       /*
        var pointer = this.input.activePointer;
        this.input.on("pointerdown", function(pointer) {
            console.log("click");
            var touchX = pointer.x;
            var touchY = pointer.y;

            // Create the main body sprite
            my.sprite.body = this.add.sprite(touchX, touchY, "yellowBody");

            // Create the smile sprite
            my.sprite.smile = this.add.sprite(touchX, touchY + 20, "smile");
    
            // Create the sprite for the left and right hands
            my.sprite.leftOpenHand = this.add.sprite(touchX - 125, touchY + 20, "handOpen");
            my.sprite.leftOpenHand.flipX = true;   // flip sprite to have thumb on correct side
            my.sprite.rightOpenHand = this.add.sprite(touchX + 125, touchY + 20, "handOpen");

       });
       */
    }




}