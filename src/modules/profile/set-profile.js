const clientName = document.getElementById("clientname")
const clientSince = document.getElementById("clientsince")

export function setProfileInfo(name, since){
  clientName.textContent = name;
  clientSince.textContent = "Cliente desde " + since;
}