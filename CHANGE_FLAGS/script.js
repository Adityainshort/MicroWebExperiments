let drops  = document.querySelectorAll("select")
for (const ops of drops) {
    for (const key in countryList) {
        let newoption = document.createElement("option")
        newoption.value=countryList[key]
        newoption.innerText=key
        // console.log(newoption)
        if(countryList[key]=="IN" ){
            newoption.selected = "selected"
        }
        ops.appendChild(newoption)
    }
    ops.addEventListener("change",(e)=>{
        console.log(e.target.value)
        updateflag(e.target.value)
    })
}

function updateflag(code){
    let src = `https://flagsapi.com/${code}/flat/64.png`
    let img = document.querySelector("img")
    // console.log(img)
    img.src = src;
}