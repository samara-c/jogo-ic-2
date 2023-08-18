var Level = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function Level ()
    {
        Phaser.Scene.call(this, { key: 'level' });
    },

    preload: function ()
    {
        this.load.image('julia_angry_e', 'img/characters/julia_angry_e.png');
        this.load.image('bedroom_day', 'img/bgs/bedroom_day.png');
    },

    create: function ()
    {
        this.add.image(900, 600, 'bedroom_day');
        this.add.image(100, 300, 'julia_angry_e');
        console.log("Oi");
    },

    update: function ()
    {
    }

});

var config = {
    type: Phaser.AUTO,
    width: 900,
    height: 600,
    scene: [ Level ]
};

var game = new Phaser.Game(config);