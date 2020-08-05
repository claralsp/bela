var game;

window.onload = function()
{
    let gameConfig = 
    {
        scale:{
            width:800,
            height:600,
            autoCenter:Phaser.Scale.CENTER_BOTH
        },
        physics:{
            default:'arcade',
            arcade: {
                gravity: {
                    y: 100
                },
            }
        },
        backgroundColor: '#bba424',
        scene:[HomeGame, PlayGame, EndGame]
    };
    game = new Phaser.Game(gameConfig);

    window.focus();
}
