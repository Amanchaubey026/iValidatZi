// let result = {
//     "tag": "",
//     "free": true,
//     "role": false,
//     "user": "amanchaubey86",
//     "email": "amanchaubey86@gmail.com",
//     "score": 0.64,
//     "state": "deliverable",
//     "domain": "gmail.com",
//     "reason": "valid_mailbox",
//     "mx_found": true,
//     "catch_all": null,
//     "disposable": false,
//     "smtp_check": true,
//     "did_you_mean": "",
//     "format_valid": true
//   }

submitBtn.addEventListener('click',async(e)=>{
    e.preventDefault();
    resultContainer.innerHTML = `<img src="loading.svg" alt="">`
    console.log("Clicked!");
    let email = document.getElementById("email").value;
    let keyID = "ema_live_yHEMJ97bw1U17bXIDacEGPXEYNiw54g0hAWHhat4"
    let url = `https://api.emailvalidation.io/v1/info?apikey=${keyID}&email=${email}`
    let res = await fetch(url);
    let result = await res.json()
    let str = ``
    for(key of Object.keys(result)){
        if(result[key] !=="" && result[key] !==" "){
            str = str + `<div> ${key} : ${result[key]} </div>`
        }

    }
    resultContainer.innerHTML = str;

})
