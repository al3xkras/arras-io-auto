chrome.runtime.connect({ name: "popup" });

const parse_sequence = (seq)=>{
    return seq.trim("\n").split("\n")
}

const checkbox_enabled = document.getElementById("enabled")
const choice = document.getElementById("choice")
const current_id = document.getElementById("current_id")

const input_seq = CodeMirror.fromTextArea(document.getElementById("sequence"), {
    lineNumbers: true,
    matchBrackets: true,
    width: 150
});

input_seq.setOption('theme', 'cobalt');
input_seq.setSize(350, 150);

chrome.storage.sync.get(["upgrade_sequence","enabled","choice", "last_choice"], (value) =>{
    input_seq.setValue(value["upgrade_sequence"].join("\n"))
    checkbox_enabled.checked = value["enabled"]
    choice.value = value["choice"]
    current_id.innerHTML = "Current ID: "+Math.max(1, (value["last_choice"] || 0) + 1)
});

input_seq.on("change", () => {
    chrome.storage.sync.set({ "upgrade_sequence": parse_sequence(input_seq.getValue())});
})

checkbox_enabled.addEventListener('change', (event) => {
    chrome.storage.sync.set({ "enabled": !!event.currentTarget.checked });
})
choice.addEventListener('change', (event) => {
    chrome.storage.sync.set({ "choice": event.currentTarget.options[event.currentTarget.selectedIndex].value });
})

