class Sprit{
    constructor({position, ImageSrc, scale=1, MaxFrames={x:1,y:1},offset={x:0,y:0} }){
        this.position = position
        this.image= new Image()
        this.image.src= ImageSrc
        this.scale=scale
        this.MaxFrames=MaxFrames
        this.NowFrame={x:0,y:0}
        this.FrameCount=0
        this.FrameHold=10
        this.offset=offset

    }
    draw(){
        c.drawImage(this.image ,this.NowFrame.x * (this.image.width / this.MaxFrames.x),this.NowFrame.y*(this.image.height / this.MaxFrames.y),this.image.width / this.MaxFrames.x, this.image.height /this.MaxFrames.y , this.position.x - this.offset.x , this.position.y - this.offset.y , (this.image.width /this.MaxFrames.x) * this.scale ,(this.image.height /this.MaxFrames.y * this.scale) )
       }
       
    
    update(){
        this.draw()
        this.animateFrames()

        
    }

    animateFrames(){
        this.FrameCount++
        if (this.FrameCount % this.FrameHold ==0) {
           if (this.NowFrame.x < this.MaxFrames.x -1) {
            this.NowFrame.x++
        }else {
            this.NowFrame.x=0
            if (this.NowFrame.y <this.MaxFrames.y -1) {
                this.NowFrame.y++
            }else{
                this.NowFrame.y=0
            }
        }
        }
    }
}

class JujutsuUsers extends Sprit {
    constructor({position,volocity,color="red",AttackRange,ImageSrc, scale=1, MaxFrames={x:1,y:1},offset={x:0,y:0},Sprits,AttackBox={AttackRange:{}, width:undefined , height:undefined},AttackFrame}){
        super({position,ImageSrc,scale,MaxFrames,offset})
        this.volocity=volocity
        this.height= 150 
        this.width=50
        this.lastKey
        this.color=color
        this.AttackBox={
            position:{
                x:this.position.x,
                y:this.position.y
            } ,
            height:AttackBox.height,
            width:AttackBox.width,
            AttackRange:AttackBox.AttackRange
        }
        this.isAttacking
        this.Hp=100
        this.NowFrame={x:0,y:0}
        this.FrameCount=0
        this.FrameHold=15
        this.Sprits=Sprits
        for (const sprit in this.Sprits) {
            Sprits[sprit].image= new Image()
            Sprits[sprit].image.src=Sprits[sprit].ImageSrc
        }
        this.AttackFrame=AttackFrame
        this.Dead=false

    }
    update(){
        this.draw()
        if (!this.Dead)this.animateFrames()
        this.AttackBox.position.x=this.position.x + this.AttackBox.AttackRange.x
        this.AttackBox.position.y=this.position.y +this.AttackBox.AttackRange.y
        this.position.x +=this.volocity.x
        this.position.y += this.volocity.y
        
        //c.fillStyle="red"
        //c.fillRect(this.AttackBox.position.x,this.AttackBox.position.y,this.AttackBox.width,this.AttackBox.height)
        //c.fillStyle="white"
        //c.fillRect(this.position.x,this.position.y,this.width,this.height)
        


        if (this.position.y + this.volocity.y + this.height >= canvas.height -66) {
            this.volocity.y = 0
            this.position.y=474.1999999999998
        }else this.volocity.y+=gravity
    }
    TakeHit(){
        this.Hp-=20
        if (this.Hp<=0) {
            this.SwitchSprits('Death')
        }else this.SwitchSprits('TakeHit')
    }



    Attack(enemy){
        if (this.isAttacking && this.NowFrame.x==this.AttackFrame) {
           if (rectangularCollision({rectangle1: this , rectangle2:enemy})) {
            if (this==Gojo) {
                Skuna.TakeHit()
                gsap.to('#SkunaHp',{
                    width:Skuna.Hp + '%'
                })
            }if (this==Skuna) {
                Gojo.TakeHit()
                gsap.to('#GojoHp',{
                    width:Gojo.Hp + '%'
                })
            }
            this.isAttacking=false
           }
    }
    }

    SwitchSprits(sprit){
        if (this.image===this.Sprits.Death.image ) {
            if (this.NowFrame.x===this.Sprits.Death.MaxFrames.x -1) this.Dead=true
                return
            
            
        }

        if ((this.image==this.Sprits.Attack1.image && this.NowFrame.x < this.Sprits.Attack1.MaxFrames.x -1)||(this.image==this.Sprits.Attack1Reverse.image && this.NowFrame.x < this.Sprits.Attack1Reverse.MaxFrames.x -1) ) return
        if (this.image==this.Sprits.TakeHit.image && this.NowFrame.x < this.Sprits.TakeHit.MaxFrames.x -1 ) return
        switch (sprit) {
            case 'Idle':
                if (this.image!=this.Sprits.Idle.image) {
                    this.MaxFrames=this.Sprits.Idle.MaxFrames
                    this.image=this.Sprits.Idle.image
                    this.NowFrame={x:0,y:0}
                }
                
                break;
            case 'IdleReverse':
                if (this.image!=this.Sprits.IdleReverse.image) {
                    this.MaxFrames=this.Sprits.IdleReverse.MaxFrames
                    this.image=this.Sprits.IdleReverse.image
                    this.NowFrame={x:0,y:0}
                }
                
                break;
            case 'Run':
                if (this.image!=this.Sprits.Run.image) {
                    this.MaxFrames=this.Sprits.Run.MaxFrames
                    this.image=this.Sprits.Run.image
                    this.NowFrame={x:0,y:0}
                }
                
                break;
            case 'RunReverse':
                if (this.image!=this.Sprits.RunReverse.image) {
                    this.MaxFrames=this.Sprits.RunReverse.MaxFrames
                    this.image=this.Sprits.RunReverse.image
                    this.NowFrame={x:0,y:0}
                }
                
                break;
            case 'Jump':
                if ( this.image!=this.Sprits.Jump.image) {
                    this.MaxFrames=this.Sprits.Jump.MaxFrames
                    this.image=this.Sprits.Jump.image
                    this.NowFrame={x:0,y:0}
                }
                
                break;
            case 'JumpReverse':
                if (this.image!=this.Sprits.JumpReverse.image) {
                    this.MaxFrames=this.Sprits.JumpReverse.MaxFrames
                    this.image=this.Sprits.JumpReverse.image
                    this.NowFrame={x:0,y:0}
                }
                break;
            case 'Fall':
                if (this.image!=this.Sprits.Fall.image) {
                    this.MaxFrames=this.Sprits.Fall.MaxFrames
                    this.image=this.Sprits.Fall.image
                    this.NowFrame={x:0,y:0}
                }
                break;
            case 'FallReverse':
                if (this.image!=this.Sprits.FallReverse.image) {
                    this.MaxFrames=this.Sprits.FallReverse.MaxFrames
                    this.image=this.Sprits.FallReverse.image
                    this.NowFrame={x:0,y:0}
                }
                break;
            case 'Attack1':
                if (this.image!=this.Sprits.Attack1.image) {
                    this.MaxFrames=this.Sprits.Attack1.MaxFrames
                    this.image=this.Sprits.Attack1.image
                    this.NowFrame={x:0,y:0}
                }
                break;
            case 'Attack1Reverse':
                if (this.image!=this.Sprits.Attack1Reverse.image) {
                    this.MaxFrames=this.Sprits.Attack1Reverse.MaxFrames
                    this.image=this.Sprits.Attack1Reverse.image
                    this.NowFrame={x:0,y:0}
                }
                break;
            case 'TakeHit':
                if (this.image!=this.Sprits.TakeHit.image) {
                    this.MaxFrames=this.Sprits.TakeHit.MaxFrames
                    this.image=this.Sprits.TakeHit.image
                    this.NowFrame={x:0,y:0}
                }
                break;
            case 'Death':
                if (this.image!=this.Sprits.Death.image) {
                    this.MaxFrames=this.Sprits.Death.MaxFrames
                    this.image=this.Sprits.Death.image
                    this.NowFrame={x:0,y:0}
                }
                break;

        
            default:
                break;
        }
    }
}