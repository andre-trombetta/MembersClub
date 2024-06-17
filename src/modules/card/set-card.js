const cardsslots = document.getElementsByClassName("cardslot")
const idCard = document.getElementById("idcard")

export function setCardInfo(loyaltyCard, id){
  
  for(let i = 0; i < cardsslots.length; i++){
    cardsslots[i].textContent = "";
    if(i < loyaltyCard.totalCuts){
      const img = document.createElement("img")
      img.setAttribute("src", "src/assets/PinCheck.png")
      cardsslots[i].append(img)
    }else{
      break
    }    
  }

  idCard.textContent = "ID: " + id


}