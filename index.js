const canvas = document.querySelector("canvas")
const c = canvas.getContext("2d")

canvas.width=1458
canvas.height=690

c.fillRect(0,0,canvas.width,canvas.height)

const gravity=0.2

const keys={
    a:{
        pressed:false
    },
    d:{
        pressed:false
    },
    ArrowLeft:{
        pressed:false
    },
    ArrowRight:{
        pressed:false
    }
}

const Arena= new Sprit({
    position:{
        x:0,
        y:0
    },
    ImageSrc:"img/background.png",
    scale:1,
})

//const fire= new Sprit({
  //  position:{
    //    x:-200,
      //  y:-200
    //},
    //ImageSrc:"img/fire.png",
    //scale: 1.7,
    //MaxFrames:{
        //x:5,
        //y:2
    //}
   
//})

const Gojo=new JujutsuUsers({position:{
    x:0,
    y:0
}, volocity:{
    x:0,
    y:0
},color:"purple",
  AttackRange:{
    x:0,
    y:0
  },
  ImageSrc:"img/Fantasy Warrior/Sprites/Idle.png",
  scale:3,
  MaxFrames:{
    x:10,
    y:1
  },
  offset:{
    x:215,
    y:180
  },
  Sprits:{
    Idle:{
        ImageSrc:"img/Fantasy Warrior/Sprites/Idle.png",
        MaxFrames:{
            x:10,
            y:1
        }
    },
    IdleReverse:{
        ImageSrc:"img/Fantasy Warrior/Sprites/IdleReverse.png",
        MaxFrames:{
            x:10,
            y:1
        }
    },
    Run:{
        ImageSrc:"img/Fantasy Warrior/Sprites/Run.png",
        MaxFrames:{
            x:8,
            y:1
        }

    },
    RunReverse:{
        ImageSrc:"img/Fantasy Warrior/Sprites/RunReverse.png",
        MaxFrames:{
            x:8,
            y:1
        }

    },
    Jump:{
        ImageSrc:"img/Fantasy Warrior/Sprites/Jump.png",
        MaxFrames:{
            x:3,
            y:1
        }
    },
    JumpReverse:{
        ImageSrc:"img/Fantasy Warrior/Sprites/JumpReverse.png",
        MaxFrames:{
            x:3,
            y:1
        }

    },
    Fall:{
        ImageSrc:"img/Fantasy Warrior/Sprites/Fall.png",
        MaxFrames:{
            x:3,
            y:1
        }
    },
    FallReverse:{
        ImageSrc:"img/Fantasy Warrior/Sprites/FallReverse.png",
        MaxFrames:{
            x:3,
            y:1
        }
    },
    Attack1:{
        ImageSrc:"img/Fantasy Warrior/Sprites/Attack1.png",
        MaxFrames:{
            x:7,
            y:1
        }
    },
    Attack1Reverse:{
        ImageSrc:"img/Fantasy Warrior/Sprites/Attack1Reverse.png",
        MaxFrames:{
            x:7,
            y:1
        }
    },
    TakeHit:{
        ImageSrc:"img/Fantasy Warrior/Sprites/Take hit.png",
        MaxFrames:{
            x:3,
            y:1
        }
    },
    Death:{
        ImageSrc:"img/Fantasy Warrior/Sprites/Death.png",
        MaxFrames:{
            x:7,
            y:1
        }
    }
  },
  AttackBox:{
    AttackRange:{
    x:0,
    y:0
    },   
    width:180,
    height:100
  },
  AttackFrame:4
 
})


const Skuna=new JujutsuUsers({position:{
    x:1024,
    y:0
}, volocity:{
    x:0,
    y:0
},color:"pink",
  AttackRange:{
    x:0,
    y:0
  },
  ImageSrc:"img/Martial Hero 2/Sprites/Idle.png",
  scale:3,
  MaxFrames:{
    x:4,
    y:1
  },
  offset:{
    x:270,
    y:260
  },
  Sprits:{
    Idle:{
        ImageSrc:"img/Martial Hero 2/Sprites/Idle.png",
        MaxFrames:{
            x:4,
            y:1
        }
    },
    IdleReverse:{
        ImageSrc:"img/Martial Hero 2/Sprites/IdleReverse.png",
        MaxFrames:{
            x:4,
            y:1
        }
    },
    Run:{
        ImageSrc:"img/Martial Hero 2/Sprites/Run.png",
        MaxFrames:{
            x:8,
            y:1
        }

    },
    RunReverse:{
        ImageSrc:"img/Martial Hero 2/Sprites/RunReverse.png",
        MaxFrames:{
            x:8,
            y:1
        }

    },
    Jump:{
        ImageSrc:"img/Martial Hero 2/Sprites/Jump.png",
        MaxFrames:{
            x:2,
            y:1
        }
    },
    JumpReverse:{
        ImageSrc:"img/Martial Hero 2/Sprites/JumpReverse.png",
        MaxFrames:{
            x:2,
            y:1
        }

    },
    Fall:{
        ImageSrc:"img/Martial Hero 2/Sprites/Fall.png",
        MaxFrames:{
            x:2,
            y:1
        }
    },
    FallReverse:{
        ImageSrc:"img/Martial Hero 2/Sprites/FallReverse.png",
        MaxFrames:{
            x:2,
            y:1
        }
    },
    Attack1:{
        ImageSrc:"img/Martial Hero 2/Sprites/Attack1.png",
        MaxFrames:{
            x:4,
            y:1
        }
    },
    Attack1Reverse:{
        ImageSrc:"img/Martial Hero 2/Sprites/Attack1Reverse.png",
        MaxFrames:{
            x:4,
            y:1
        }
    },
    TakeHit:{
        ImageSrc:"img/Martial Hero 2/Sprites/Take hit.png",
        MaxFrames:{
            x:3,
            y:1
        }
    },
    Death:{
        ImageSrc:"img/Martial Hero 2/Sprites/Death.png",
        MaxFrames:{
            x:7,
            y:1
        }
    }
  },
  AttackBox:{
    AttackRange:{
    x:-210,
    y:0
    },   
    width:210,
    height:50
  },
  AttackFrame:1
})

CountDown()

function anime(){
    window.requestAnimationFrame(anime)
    c.fillStyle="black"
    c.fillRect(0 , 0 , canvas.width , canvas.height)
    Arena.update()
    //fire.update()
    Gojo.update()
    Skuna.update()

    Gojo.volocity.x=0
    Skuna.volocity.x=0
    if (keys.a.pressed && Gojo.lastKey==="a" && Gojo.position.x > 0) {
        Gojo.volocity.x=-5
        Gojo.SwitchSprits('RunReverse')
    }else if (keys.d.pressed && Gojo.lastKey==="d" && Gojo.position.x < canvas.width - Gojo.width ) {
        Gojo.volocity.x=5
        Gojo.SwitchSprits('Run')
    } else{
        if (Gojo.lastKey=="d") {
            Gojo.SwitchSprits('Idle')
        }else if (Gojo.lastKey=="a") {
            Gojo.SwitchSprits('IdleReverse')
        }
    }
    if (Gojo.volocity.y <0 && Gojo.lastKey=="d") {
        Gojo.SwitchSprits('Jump')
    }else if (Gojo.volocity.y <0 && Gojo.lastKey=="a") {
        Gojo.SwitchSprits('JumpReverse')
    } if (Gojo.volocity.y >0 && Gojo.lastKey=="d") {
        Gojo.SwitchSprits('Fall')
    }else if (Gojo.volocity.y >0 && Gojo.lastKey=="a") {
        Gojo.SwitchSprits('FallReverse')
    }
    
    if (keys.ArrowLeft.pressed && Skuna.lastKey==="ArrowLeft" && Skuna.position.x > 0) {
        Skuna.volocity.x=-5
        Skuna.SwitchSprits('Run')
    }else if (keys.ArrowRight.pressed && Skuna.lastKey==="ArrowRight" && Skuna.position.x < canvas.width - Skuna.width) {
        Skuna.volocity.x=5
        Skuna.SwitchSprits('RunReverse')
    }else{
        if (Skuna.lastKey=="ArrowLeft") {
            Skuna.SwitchSprits('Idle')
        }else if (Skuna.lastKey=="ArrowRight") {
            Skuna.SwitchSprits('IdleReverse')
        }
    }
    if (Skuna.volocity.y <0 && Skuna.lastKey=="ArrowLeft") {
        Skuna.SwitchSprits('Jump')
    }else if (Skuna.volocity.y <0 && Skuna.lastKey=="ArrowRight") {
        Skuna.SwitchSprits('JumpReverse')
    } if (Skuna.volocity.y >0 && Skuna.lastKey=="ArrowLeft") {
        Skuna.SwitchSprits('Fall')
    }else if (Skuna.volocity.y >0 && Skuna.lastKey=="ArrowRight") {
        Skuna.SwitchSprits('FallReverse')
    }
     
    

    if (Gojo.Hp <=0 || Skuna.Hp <=0) {
        NahIllWin({Gojo,Skuna,IdTimer})
    }
    Gojo.Attack(Skuna)
    Skuna.Attack(Gojo)


}
anime()


window.addEventListener('keydown',(event)=>{
    if (!Gojo.Dead) {
        switch (event.key) {
        case 'd':
            keys.d.pressed=true
            Gojo.lastKey="d"
            break;
        case 'a':
            keys.a.pressed=true
            Gojo.lastKey="a"
            break;
        case ' ':
            Gojo.isAttacking=true
            if (Gojo.lastKey=='d') {
                Gojo.SwitchSprits('Attack1')
            }else if (Gojo.lastKey=='a') {
                Gojo.SwitchSprits('Attack1Reverse')
            }
            break;
        case 'w':
            Gojo.volocity.y= -10
            break;
    }}
    if (!Skuna.Dead) {
        switch(event.key){
            case 'ArrowLeft':
            keys.ArrowLeft.pressed=true
            Skuna.lastKey="ArrowLeft"
            break;
        
        case 'ArrowRight':
            keys.ArrowRight.pressed=true
            Skuna.lastKey="ArrowRight"
            break;
        
        case 'ArrowUp':
            Skuna.volocity.y= -10
            break;
        
        case '0':
            Skuna.isAttacking=true
            if (Skuna.lastKey=='ArrowLeft') {
                Skuna.SwitchSprits('Attack1')
            }else if (Skuna.lastKey=='ArrowRight') {
                Skuna.SwitchSprits('Attack1Reverse')
            }
            break;

    }
        }
    

})


window.addEventListener('keyup',(event)=>{
    switch (event.key) {
        case 'd':
            keys.d.pressed=false
            break;
        case 'ArrowLeft':
            keys.ArrowLeft.pressed=false
            break;
        case 'a':
            keys.a.pressed=false
            break;
        case 'ArrowRight':
            keys.ArrowRight.pressed=false
            break;
    }
})