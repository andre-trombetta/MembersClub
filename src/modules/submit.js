import {getInfo} from "../services/load.js"
import {setCardInfo} from "./card/set-card.js"
import {setLogInfo} from "./log/set-log.js"
import {setProfileInfo} from "./profile/set-profile.js"
import {setRemainingInfo} from "./remaining/set-remaining.js"

const idInput = document.getElementById("inputcardid");
const form = document.querySelector("form")


form.onsubmit = async(event) => {
  // stop default 
  event.preventDefault();

  try {
    const id = idInput.value.trim();

    const data = await getInfo({id});

    console.log(data.loyaltyCard)

    const test = data.loyaltyCard
    console.log(test)
    setCardInfo(test);
    setLogInfo(data.appointmentHistory);
    setProfileInfo(data.name, data.clientSince);
    setRemainingInfo(data.loyaltyCard)

  }catch (error) {
    alert("Não foi possível achar cliente com este ID")
    console.log(error)
    
  }
}