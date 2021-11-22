function getLogs() {
    fetch("/getLogs")
    .then(res => res.json())
    .then(data => document.getElementById("logsDisplay").innerText = data["logs"])
};