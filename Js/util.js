function NahIllWin({Gojo,Skuna}){
    clearTimeout(IdTimer)
    document.querySelector("#TheThing").style.display= 'flex'
        if (Gojo.Hp==Skuna.Hp) {
            document.querySelector("#TheThing").innerHTML="Tie "
        }else if (Gojo.Hp>Skuna.Hp) {
            document.querySelector("#TheThing").innerHTML="But would you lose??? \n Nah I'll Win "
            
        }else {
            document.querySelector("#TheThing").innerHTML="Be Proud U Are Strong "
        }

}
let Timer=60
let IdTimer
function CountDown(){
    if (Timer>0) {
        IdTimer=setTimeout(CountDown,1000)
        Timer--
        document.querySelector("#Timer").innerHTML=Timer
    }
    if (Timer==0) {
        NahIllWin({Gojo,Skuna,IdTimer})
    }
    
}
function rectangularCollision({ rectangle1, rectangle2 }) {
    return (
      rectangle1.AttackBox.position.x + rectangle1.AttackBox.width >=
        rectangle2.position.x &&
      rectangle1.AttackBox.position.x <=
        rectangle2.position.x + rectangle2.width &&
      rectangle1.AttackBox.position.y + rectangle1.AttackBox.height >=
        rectangle2.position.y &&
      rectangle1.AttackBox.position.y <= rectangle2.position.y + rectangle2.height
    )
  }
function Attack(Skuna){
    if (this.isAttacking) {
       if (this.lastKey=='d') {
            this.SwitchSprits('Attack1')
        }else if (this.lastKey=='a') {
            this.SwitchSprits('Attack1Reverse')
        }
       if (this.lastKey=='ArrowLeft') {
            this.SwitchSprits('Attack1')
        }else if (this.lastKey=='ArrowRight') {
            this.SwitchSprits('Attack1Reverse')
        }
        
        
    if (this.AttackBox.position.x + this.AttackBox.width + this.AttackBox.AttackRange.x>= Skuna.position.x && this.AttackBox.position.x + this.AttackBox.AttackRange.x< Skuna.position.x + Skuna.width && this.AttackBox.position.y + this.AttackBox.height >= Skuna.position.y && Skuna.position.y + Skuna.width >= this.AttackBox.position.y ) {
        if (this.AttackBox.AttackRange.x==0 ) {
            Skuna.Hp-=20
            document.querySelector("#SkunaHp").style.width=Skuna.Hp + '%'  
        }if(this.AttackBox.AttackRange.x!=0 ){
            Skuna.Hp-=20
            document.querySelector("#GojoHp").style.width=Skuna.Hp + '%'
        }
    }
    this.isAttacking=false
}
}