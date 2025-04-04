# 🚑 Ambulance Call

**Ambulance Call** is a web-based platform that allows users to quickly and securely **book ambulances based on their location and budget**. Built with Firebase integration, it features real-time authentication, an intuitive booking form, and a filtered results page to streamline emergency medical response.


## 🔥 Features

✅ **User Authentication**  
  Sign in using **Google**, **Email/Password**, or **Phone (OTP)** via Firebase.

✅ **Ambulance Booking**  
  Users enter their **location** and **budget** to find available ambulances.

✅ **Filtered Results**  
  Displays ambulances that match the user's criteria or shows a "No results found" message.

✅ **Local Storage Handling**  
  Temporarily stores booking data using `localStorage` and clears it after confirmation.

✅ **Dynamic UI Management**  
  Interface components appear or hide based on user actions to ensure a clean experience.


## 🗂 Project Structure


📂 ambu  
├── 📂 assets            # Images & media (e.g., ambulance-bg.jpg)  
├── firebaseConfig.js   # Firebase setup  
├── auth.js            # Handles user authentication  
├── booking.html       # Ambulance booking form (location & budget input)  
├── results.html       # Displays ambulances based on budget  
├── index.html         # Main page with "Back to Home" button  
├── styles.css         # Styles (includes background section)  
├── script.js         # Handles booking logic & localStorage usage  


## 🚀 Tech Stack:  
->Frontend: HTML, CSS, JavaScript  
->Backend: Firebase (Authentication & Database)  


## 🛠 Setup & Installation  
1️⃣ Clone the repository  
(git clone https://github.com/AdityaJadli06/AMBULANCECALL.gitcd AMBULANCECALL)  

2️⃣ Set up Firebase  
Go to Firebase Console(https://console.firebase.google.com/)  
Create a new project  
Enable Authentication (Google, Email/Password, Phone OTP)  
Get the Firebase config and replace it in firebaseConfig.js  

3️⃣ Run the project  
Open index.html in your browser  

## 📌Usage:  
1. Sign in using Google, email.
    
2. Enter your location and phone number.  

3. Get a list of available ambulances based on your location.  

4. Book an ambulance and confirm the details.  

## 🤝Contributing:  
Contributions are welcome! Feel free to fork the repository, make improvements, and submit a pull request.

