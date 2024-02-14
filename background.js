
const def_seq = ["kyu122333344444444555555556666666677778888990"]
const def_enabled = true
const def_choice = 1


chrome.storage.sync.get(["upgrade_sequence", "enabled", "choice"], (value) =>{
    const seq = value["upgrade_sequence"]
    if (!seq instanceof Array) {
        chrome.storage.sync.set({ "upgrade_sequence": def_seq });
    }
    const enabled = value["enabled"]
    if (typeof enabled !== "boolean") {
        chrome.storage.sync.set({ "enabled": def_enabled });
    }
    const choice = value["choice"]
    if (typeof choice !== "string") {
        chrome.storage.sync.set({ "choice": def_choice });
    }
});

chrome.storage.sync.set({ "last_choice": 0 });

chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
    if(message.keySequence){
        const sequence = message.keySequence
        keycodes_seq = sequence.split('').map(toKeyCode)
        chrome.tabs.query({active: true}, function(tabs) {
            chrome.debugger.attach({ tabId: tabs[0].id }, "1.0");
            keycodes_seq.forEach(k=>{
                chrome.debugger.sendCommand({ tabId: tabs[0].id }, 'Input.dispatchKeyEvent',
                Object.assign({},{ type: 'keyDown'}, k));
                chrome.debugger.sendCommand({ tabId: tabs[0].id }, 'Input.dispatchKeyEvent',
                Object.assign({},{ type: 'keyUp'}, k));
            })
            chrome.debugger.detach({ tabId: tabs[0].id });
        });
    } else if (message.popup){

    }
});

chrome.runtime.onConnect.addListener(function(port) {
    if (port.name === "popup") {
        console.log("on popup connect")
        //port.onDisconnect.addListener(on_popup_disconnect);
    }
});

function toKeyCode(char){
    if (!keycodes)
        console.error("keycodes were not loaded")
    return {
        windowsVirtualKeyCode:keycodes["windowsVirtualKeyCode"][char],
        nativeVirtualKeyCode:keycodes["nativeVirtualKeyCode"][char],
        macCharCode:keycodes["macCharCode"][char]
    }
}

var keycodes ={
    "nativeVirtualKeyCode": {
        "a": 65,
        "b": 66,
        "c": 67,
        "d": 68,
        "e": 69,
        "f": 70,
        "g": 71,
        "h": 72,
        "i": 73,
        "j": 74,
        "k": 75,
        "l": 76,
        "m": 77,
        "n": 78,
        "o": 79,
        "p": 80,
        "q": 81,
        "r": 82,
        "s": 83,
        "t": 84,
        "u": 85,
        "v": 86,
        "w": 87,
        "x": 88,
        "y": 89,
        "z": 90,
        "0": 48,
        "1": 49,
        "2": 50,
        "3": 51,
        "4": 52,
        "5": 53,
        "6": 54,
        "7": 55,
        "8": 56,
        "9": 57,
        "esc": 27,
        "enter": 13,
        "shift": 16,
        "ctrl": 17,
        "alt": 18
    },
    "macCharCode": {
        "a":97,
        "b":98,
        "c":99,
        "d":100,
        "e":101,
        "f":102,
        "g":103,
        "h":104,
        "i":105,
        "j":106,
        "k":107,
        "l":108,
        "n":110,
        "o":111,
        "p":112,
        "q":113,
        "r":114,
        "s":115,
        "t":116,
        "u":117,
        "v":118,
        "w":119,
        "x":120,
        "y":121,
        "z":122,
        "0":48,
        "1":49,
        "2":50,
        "3":51,
        "4":52,
        "5":53,
        "6":54,
        "7":55,
        "8":56,
        "9":57
    },
    "windowsVirtualKeyCode": {
      "9": 57,
      "a": 65,
      "b": 66,
      "c": 67,
      "d": 68,
      "e": 69,
      "f": 70,
      "g": 71,
      "h": 72,
      "i": 73,
      "j": 74,
      "k": 75,
      "l": 76,
      "m": 77,
      "n": 78,
      "o": 79,
      "p": 80,
      "q": 81,
      "r": 82,
      "s": 83,
      "t": 84,
      "u": 85,
      "v": 86,
      "w": 87,
      "x": 88,
      "y": 89,
      "z": 90,
      "0": 48,
      "1": 49,
      "2": 50,
      "3": 51,
      "4": 52,
      "5": 53,
      "6": 54,
      "7": 55,
      "8": 56
    }
}