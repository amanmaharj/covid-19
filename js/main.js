
function listing(data){

const list = document.createElement('li')

list.textContent = data

document.getElementById("detail").appendChild(list);


}

function clearUl(){
   location.reload()
}



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
        
        let tableRow = document.createElement('tr')
        document.querySelector('table').append(tableRow)

        let tableData1 = document.createElement('td')
        let tableData2 = document.createElement('td')
        let tableData3 = document.createElement('td')
        let tableData4 = document.createElement('td')

        tableRow.appendChild(tableData1)
        tableRow.appendChild(tableData2)
        tableRow.appendChild(tableData3)
        tableRow.appendChild(tableData4)
    
        tableData1.innerHTML = jsonData.response[i].country 
        tableData2.innerHTML = jsonData.response[i].cases.total
        tableData3.innerHTML = jsonData.response[i].deaths.total
        tableData4.innerHTML = jsonData.response[i].cases.recovered
    
    }
}

//When search button is entered it will display the stat for that country only.
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
    
    for(i=0;i<jsonData.response.length;i++){
      if  (jsonData.response[i].country==document.querySelector('input').value) {
    
        const x = document.createElement("button")
        x.setAttribute('content','clear')
        x.textContent = "clear";
        document.querySelector('p').append(x)


            listing("Country Name : " + jsonData.response[i].country )
            listing("Total Cases : " + jsonData.response[i].cases.total)
            listing("Total Recovered : " + jsonData.response[i].cases.recovered)
            listing("Total Death : " + jsonData.response[i].deaths.total)
        
            document.querySelector('input').value = "";

           

            
            


        
       }
       
     }
    
    })
    
})



