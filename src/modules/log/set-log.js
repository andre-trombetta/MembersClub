const logList =  document.getElementById("logList")
const logCuts = document.getElementById("logCuts")

export function setLogInfo(appointmentHistory)
{
  console.log("log:",appointmentHistory);

  logList.textContent = ""
  logCuts.textContent = (appointmentHistory.length + 1) + " cortes"

  for(let i = 0; i < appointmentHistory.length; i++){
    
    const il = document.createElement("il")
    const div = document.createElement("div")
    const strong = document.createElement("strong")
    const br = document.createElement("br")
    const span = document.createElement("span")
    const img = document.createElement("img")
    strong.textContent = appointmentHistory[i].date
    span.textContent = appointmentHistory[i].time
    div.append(strong, br, span)
    img.setAttribute("src", "src/assets/checkhist.svg")
    il.append(div, img)
    logList.append(il)
  }
    
}