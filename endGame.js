class EndGame extends Phaser.Scene
{

    constructor()
    {
        super("EndGame");
        this.mensagem;
    }

  

    create()
    {
        
        this.add.image(0,0,"fundo").setOrigin(0,0);
        let btnPlay = this.add.image(100,50,"btnPlay").setOrigin(0,0);
        btnPlay.setInteractive();
        let btnHome = this.add.image(300, 200,"btnVoltar").setOrigin(0,0);
        btnHome.setInteractive();
        btnPlay.on("pointerdown", () => this.scene.start("PlayGame"));
        btnHome.on("pointerdown", () => this.scene.start("HomeGame"));
    }
}