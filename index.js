document.getElementById("button").addEventListener("click", function message() {
    fetch("https://apis.scrimba.com/bored/api/activity")
        .then(response => response.json())
        .then(data => document.getElementById("idea").textContent = data.activity,
            document.getElementById("title").textContent = "SlightlyLessBoredBot"
        )    
})