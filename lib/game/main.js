ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
    'game.levels.dorm1'
)
.defines(function(){

var MainGame = ig.Game.extend({
	gravity: 800,

    init: function() {
        ig.input.bind(ig.KEY.LEFT_ARROW, 'left');
        ig.input.bind(ig.KEY.RIGHT_ARROW, 'right');
        ig.input.bind(ig.KEY.UP_ARROW, 'jump');

        this.loadLevel(LevelDorm1);
	},
	
	update: function() {
		var player = this.getEntitiesByType(EntityPlayer)[0];
        if(player){
            this.screen.x = player.pos.x - ig.system.width/2;
            this.screen.y = player.pos.y - ig.system.height/1.5;
        }

        this.parent();
	}

});

ig.main( '#canvas', MainGame, 60, 320, 160, 2 );

});
