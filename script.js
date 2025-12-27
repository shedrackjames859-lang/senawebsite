// Toggle service options
function toggleOptions(){
    const options = document.getElementById("serviceOptions");
    options.style.display = options.style.display === "none" ? "block" : "none";
}

// Send message
function sendMessage(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let service = document.getElementById("predefinedService").value;

    if(name === "" || email === ""){
        alert("Tafadhali jaza jina na email yako!");
        return;
    }

    // Hifadhi kwenye localStorage
    let messages = JSON.parse(localStorage.getItem("messages")) || [];
    messages.push({name, email, service});
    localStorage.setItem("messages", JSON.stringify(messages));

    // Popup confirmation
    alert("Asante " + name + "! Umechagua huduma: " + service);

    // Reset form
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("predefinedService").selectedIndex = 0;
    document.getElementById("serviceOptions").style.display = "none";

    // Update history
    displayHistory();
}

// Display history
function displayHistory(){
    let messages = JSON.parse(localStorage.getItem("messages")) || [];
    let historyList = document.getElementById("historyList");
    historyList.innerHTML = "";

    messages.forEach(msg => {
        let li = document.createElement("li");
        li.textContent = msg.name + " (" + msg.email + "): " + msg.service;
        historyList.appendChild(li);
    });
}

// Show history on page load
window.onload = displayHistory;
