class CuentaAtras {

    constructor(ctx, x, y){

        this.ctx = ctx;
        this.x = x;
        this.y = y;

        this.sprite = new Image();
        this.sprite.src = 'assets/images/cuentatras.jpg'
        this.sprite.isReady = false;

        this.sprite.horizontalFrames = 1;
        this.sprite.verticalFrames = 4;
        this.sprite.verticalFramesIndex = 1;
        this.sprite.horizontalFramesIndex = 1;

        this.sprite.onload = () => {
            this.sprite.isReady = true;
            this.sprite.frameWidth = Math.floor(this.sprite.width / this.sprite.horizontalFrames);
            this.sprite.frameHeight = Math.floor(this.sprite.height / this.sprite.verticalFrames);
            this.width = this.sprite.frameWidth;
            this.height = this.sprite.frameHeight;
        }

        this.contando = false;

        this.drawCount = 0;

        this.rotation = 0;
        this.mouseX = 0;
        this.mouseY = 0;

        this.sprite.midWidth = this.sprite.width/2;
        this.sprite.midHeight = this.sprite.height/2;
        
    }

    draw() {
       
        if (this.sprite.isReady && this.contando){
            console.log('hey')
            this.ctx.drawImage(
                this.sprite,
                this.sprite.frameWidth * this.sprite.horizontalFramesIndex,
                this.sprite.frameHeight * this.sprite.verticalFramesIndex,
                this.sprite.frameWidth,
                this.sprite.frameHeight,
                this.x, 
                this.y,
                this.width,
                this.height
            );

            this.drawCount++;
            this.animate();
        }
    }

    animate() {
        if (this.contando) {

            this.animateSprite(0,0,2,50)
        }
    }


    animateSprite(initialVerticalIndex, initialHorizontalIndex, segments, frequency) {
        if (this.sprite.verticalFramesIndex != initialVerticalIndex){
            this.sprite.verticalFramesIndex = initialVerticalIndex;
            this.sprite.horizontalFramesIndex = initialHorizontalIndex;
        } else if (this.drawCount % frequency === 0){
            this.sprite.horizontalFramesIndex = (this.sprite.horizontalFramesIndex + 1) % segments;
            this.drawCount = 0;
        }
    }
}