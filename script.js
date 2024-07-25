function getUpdatedTime(){
const now=new Date
const hours=now.getHours()
const minutes=now.getMinutes().toString().padStart(2,0)
const seconds=now.getSeconds().toString().padStart(2,0)

const timestring= `${hours}:${minutes}:${seconds}`
document.getElementById("clock").textContent=timestring


}
getUpdatedTime()
setInterval(getUpdatedTime,1000)