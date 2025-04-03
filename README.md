🚑 Ambulance Call
Ambulance Call is a web-based platform that allows users to book ambulances based on their location. It features authentication, a booking system, and a results page that filters available ambulances.

🔥 Features
✅ User Authentication: Sign in using Google, email/password, or phone number (OTP) via Firebase.
✅ Ambulance Booking: Users enter their location and budget to find suitable ambulances.
✅ Filtered Results: The system displays ambulances within the user's budget or shows a "No results found" message.
✅ Local Storage Handling: Booking details are temporarily stored in localStorage and cleared after use.
✅ Dynamic UI Management: Sections are shown/hidden based on user interaction.
📂 Project Structure
📂 ambu
├── 📂 assets            # Images & media (e.g., ambulance-bg.jpg)
├── firebaseConfig.js   # Firebase setup
├── auth.js            # Handles user authentication
├── booking.html       # Ambulance booking form (location & budget input)
├── results.html       # Displays ambulances based on budget
├── index.html         # Main page with "Back to Home" button
├── styles.css         # Styles (includes background section)
├── script.js         # Handles booking logic & localStorage usage
🚀 Tech Stack
->Frontend: HTML, CSS, JavaScript
->Backend: Firebase (Authentication & Database)
🛠 Setup & Installation
1️⃣ Clone the repository
(git clone https://github.com/AdityaJadli06/AMBULANCECALL.git
cd AMBULANCECALL)
2️⃣ Set up Firebase

Go to Firebase Console(https://console.firebase.google.com/)

Create a new project

Enable Authentication (Google, Email/Password, Phone OTP)

Get the Firebase config and replace it in firebaseConfig.js

3️⃣ Run the project

Open index.html in your browser

📌 Usage
Sign in using Google, email.

Enter your location and phone number.

Get a list of available ambulances based on your location.

Book an ambulance and confirm the details.

🤝 Contributing
Contributions are welcome! Feel free to fork the repository, make improvements, and submit a pull request.

