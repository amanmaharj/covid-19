
fetch("https://covid-193.p.rapidapi.com/statistics", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "de8ca97b57mshbc75b832708333fp1b73aejsn44cd7debaa77",
		"x-rapidapi-host": "covid-193.p.rapidapi.com"
	}
})
.then((response)=>{
   return response.json()
})

.then(displayData)

//This is the main function to display when the page reload.
function displayData(jsonData){
    
    
    for(i=0;i<jsonData.response.length;i++){
        document.getElementById('detail').innerHTML +="Country Name : " + ( jsonData.response[i].country +", Total covid Cases: "+ jsonData.response[i].cases.total + ", Total Death : "+ jsonData.response[i].deaths.total + ", Total Cases Recovered : "+jsonData.response[i].cases.recovered+"</br>")
        
    }
}


document.getElementById('button1').addEventListener('click',function (){
    fetch("https://covid-193.p.rapidapi.com/statistics", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "de8ca97b57mshbc75b832708333fp1b73aejsn44cd7debaa77",
		"x-rapidapi-host": "covid-193.p.rapidapi.com"
	}
})
.then((response)=>{
   return response.json()
})

.then((jsonData)=>{
    console.log(jsonData)
    for(i=0;i<jsonData.response.length;i++){
      if  (jsonData.response[i].country==document.querySelector('input').value) {
        document.getElementById('detail').innerHTML +="Country Name : " + ( jsonData.response[i].country +", Total covid Cases: "+ jsonData.response[i].cases.total + ", Total Death : "+ jsonData.response[i].deaths.total + ", Total Cases Recovered : "+jsonData.response[i].cases.recovered+"</br>")
        console.log(jsonData.response[i].cases.total)
       }
     }
    
})
})



