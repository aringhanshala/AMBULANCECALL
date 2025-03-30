document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("bookingForm");

    if (form) {
        // Clear previous localStorage data when booking page loads
        localStorage.removeItem("userLocation");
        localStorage.removeItem("userBudget");

        form.addEventListener("submit", function (event) {
            event.preventDefault();
            const location = document.getElementById("location").value.trim();
            const budget = document.getElementById("budget").value.trim();

            if (!location || !budget) {
                alert("⚠️ Please enter both location and budget!");
                return;
            }

            localStorage.setItem("userLocation", location);
            localStorage.setItem("userBudget", budget);
            window.location.href = "results.html";
        });
    }

    if (location.pathname.endsWith("results.html")) {
        const locationInput = localStorage.getItem("userLocation");
        const budget = localStorage.getItem("userBudget");

        if (!locationInput || !budget) {
            alert("⚠️ Please fill out the booking form first!");
            window.location.href = "booking.html";
            return;
        }

        const ambulances = [
            { name: "City Care Ambulance", time: "5 min", cost: 500 },
            { name: "Rapid Medics", time: "8 min", cost: 700 },
            { name: "Emergency Aid", time: "10 min", cost: 600 },
        ];

        const list = document.getElementById("ambulanceList");
        let found = false;

        ambulances.forEach((amb) => {
            if (amb.cost <= parseFloat(budget)) {
                found = true;
                const item = document.createElement("li");
                item.innerHTML = `<b>${amb.name}</b> - ${amb.time} away (₹${amb.cost}) 
                    <button class="btn-primary" onclick="bookAmbulance('${amb.name}')">Book</button>`;
                list.appendChild(item);
            }
        });

        if (!found) {
            list.innerHTML = "<p>🚨 No ambulances available within your budget. Try increasing your budget or searching again.</p>";
        }
    }
});

function bookAmbulance(name) {
    alert(`✅ ${name} has been booked! Ambulance is on the way.`);
    localStorage.removeItem("userLocation");
    localStorage.removeItem("userBudget");
    window.location.href = "index.html";
}
