ig.module(
    'game.entities.player'
).requires(
    'impact.entity'
).defines(function(){

EntityPlayer = ig.Entity.extend({
    animSheet: new ig.AnimationSheet('media/player.png', 16, 16),
    size: {x: 8, y: 14},
    offset: {x: 4, y:2},
    // flip: false,
    // maxVel: {x: 175, y: 150},
    // friction: {x: 800, y: 1},
    // accelGround: 1000,
    // accelAir: 200,
    // jump: 250,

    init: function (x, y, settings) {
        this.parent(x, y, settings);
        this.addAnim('idle', 1, [0]);
        this.setupAnimation();
    },

    setupAnimation: function (){
        // this.addAnim('run', 0.07, [0, 1, 2, 3, 4, 5]);
        // this.addAnim('jump', 1, [9]);
        // this.addAnim('fall', 0.4, [6, 7]);
    },

    update: function (){
        this.parent();
        this.checkLateralMovement();
        this.checkVerticalMovement();
    },

    draw: function () {
        this.parent();

        // if (this.vel.y < 0){
        //     this.currentAnim = this.anims.jump;
        // } else if (this.vel.y > 0){
        //     this.currentAnim = this.anims.fall;
        // } else if (this.vel.x !== 0) {
        //     this.currentAnim = this.anims.run;
        // } else {
        //     this.currentAnim = this.anims.idle;
        // }
        // this.currentAnim.flip.x = this.flip;
    },
    checkLateralMovement: function () {
        // var accel = this.standing ? this.accelGround : this.accelAir;
        // if (ig.input.state('left')){
        //     this.accel.x = -accel;
        //     this.flip = true;
        // } else if (ig.input.state('right')){
        //     this.accel.x = accel;
        //     this.flip = false;
        // } else {
        //     this.accel.x = 0;
        // }
    },

    checkVerticalMovement: function () {
        // if (this.standing && ig.input.pressed('jump')){
        //     this.vel.y = -this.jump;
        // }
    }

});

});
