
function randint(min, max) { //max exclusive
  return Math.floor(Math.random() * (max - min) + min)
}

window.addEventListener("message", (event)=>{
    const data = event.data
    if (data[0] === "arras.io-main" && data[1] === "respawn"){
        chrome.storage.sync.get("enabled", (val) =>{
            if (!val["enabled"]) return
            setTimeout(()=>{
            chrome.storage.sync.get(["upgrade_sequence","choice", "last_choice"], (val) =>{
                const seq = val["upgrade_sequence"]
                if (!seq) return
                const choice = val["choice"]
                console.log(choice)
                let last_choice = val["last_choice"]
                const upgrade = choice===0 ? seq[last_choice]:
                    (choice===1? seq[randint(0,seq.length)] : null)
                last_choice = (last_choice+1) % seq.length;
                chrome.storage.sync.set({"last_choice":last_choice})
                chrome.runtime.sendMessage({keySequence: upgrade});
            });
        }, 250)
        })
    }
    console.log("event.data " + JSON.stringify(event.data))
}, false);


