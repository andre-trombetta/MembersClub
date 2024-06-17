const remaningBar = document.getElementById("remainingbar")
const remaningCount = document.getElementById("remainingcount")
const remaningCuts = document.getElementById("remainingcuts")

export function setRemainingInfo(loyaltyCard){
  remaningCount.textContent = loyaltyCard.totalCuts + " de " + loyaltyCard.cutsNeeded;
  remaningCuts.textContent = loyaltyCard.cutsRemaining
  const cutValue = (22 / Number(loyaltyCard.cutsNeeded)) * loyaltyCard.totalCuts
  remainingbar.style.width = cutValue+"rem"
}