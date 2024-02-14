console.log('main process');
setInterval(()=>{
    console.log("enter was sent")
    chrome.runtime.sendMessage({ pressEnter: true });
}, 2000)