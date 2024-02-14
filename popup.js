chrome.runtime.connect({ name: "popup" });

const parse_sequence = (seq)=>{
    return seq.trim("\n").split("\n")
}

const input_seq = document.getElementById("sequence")
const checkbox_enabled = document.getElementById("enabled")
const choice = document.getElementById("choice")

chrome.storage.sync.get(["upgrade_sequence","enabled","choice"], (value) =>{
    input_seq.value = value["upgrade_sequence"].join("\n")
    checkbox_enabled.checked = value["enabled"]
    choice.value = value["choice"]
});

input_seq.addEventListener("input", (event) => {
    chrome.storage.sync.set({ "upgrade_sequence": parse_sequence(event.target.value)});
})
checkbox_enabled.addEventListener('change', (event) => {
    chrome.storage.sync.set({ "enabled": !!event.currentTarget.checked });
})
choice.addEventListener('change', (event) => {
    chrome.storage.sync.set({ "choice": event.currentTarget.options[event.currentTarget.selectedIndex].value });
})

