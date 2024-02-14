
function randint(min, max) { //max exclusive
  return Math.floor(Math.random() * (max - min) + min)
}

const make_upgrade = ()=>{
    chrome.storage.sync.get(["upgrade_sequence","choice", "last_choice"], (val) =>{
        const seq = val["upgrade_sequence"]
        if (!seq) return
        const choice = val["choice"]
        let last_choice = val["last_choice"]
        console.log(choice, seq, last_choice)
        last_choice = choice==="sequential" ?
            (last_choice+1) % seq.length :
            (choice==="random"? randint(0,seq.length) : last_choice)
        const upgrade = seq[last_choice]
        chrome.storage.sync.set({"last_choice":last_choice})
        chrome.runtime.sendMessage({keySequence: upgrade});
    });
}

window.addEventListener("message", (event)=>{
    const data = event.data
    if (data[0] === "arras.io-main" && data[1] === "respawn"){
        chrome.storage.sync.get("enabled", (val) =>{
            if (!val["enabled"]) return
            setTimeout(make_upgrade, 250)
        })
    }
}, false);




