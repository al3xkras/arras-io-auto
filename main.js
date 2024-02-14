
window.addEventListener("message", (event)=>{
    const data = event.data
    if (data[0] === "arras.io-main" && data[1] === "respawn"){
        chrome.storage.sync.get("enabled", (val) =>{
            if (!val["enabled"]) return
            setTimeout(()=>{
            chrome.storage.sync.get("upgrade_sequence", (val) =>{
                seq = val["upgrade_sequence"]
                if (!seq) return
                chrome.runtime.sendMessage({keySequence: seq});
            });
        }, 250)
        })
    }
    console.log("event.data " + JSON.stringify(event.data))
}, false);


