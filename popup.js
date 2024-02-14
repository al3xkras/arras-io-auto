chrome.runtime.connect({ name: "popup" });

const input_seq = document.getElementById("sequence")
const checkbox_enabled = document.getElementById("enabled")

chrome.storage.sync.get("upgrade_sequence", (value) =>{
    input_seq.value = value["upgrade_sequence"]
});
chrome.storage.sync.get("enabled", (value) =>{
    checkbox_enabled.checked = value["enabled"]
});

input_seq.addEventListener("input", (event) => {
    chrome.storage.sync.set({ "upgrade_sequence": event.target.value });
})
checkbox_enabled.addEventListener('change', (event) => {
    chrome.storage.sync.set({ "enabled": !!event.currentTarget.checked });
})
