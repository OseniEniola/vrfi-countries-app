# VRFI Countries App 🌍  

## Overview  
The **VRFI Countries App** is a React-based web application that allows users to explore countries worldwide using the [REST Countries API](https://restcountries.com/). The app includes login functionality, a searchable/filterable country list, and detailed country information.  


## LOGIN CREDENTIALS
The login form takes any valid email and password. The only validation there is the required field validation
sample credentials:
Email: user@mail.com
Password: Password  

## Features  
👉 **Login Page**: A mock authentication page that redirects users to the country list.  
👉 **Countries List Page**: Fetches and displays countries, with search & filter functionality.  
👉 **Country Details Page**: Displays detailed information about a selected country.  
👉 **Navigation**: Users can navigate back from the details page to the country list.  
👉 **Loading & Error Handling**: Ensures a smooth user experience with proper state management.  
👉 **Responsive & Accessible UI**: Follows best practices for mobile and desktop views.  

## Tech Stack  
🚀 **React + Vite** – For fast and modern frontend development.  
🛋️ **TanStack Query (React Query)** – Handles API requests efficiently with caching.  
🎨 **Bootstrap & Global CSS** – For styling and responsiveness.  
📝 **Formik & Yup** – Form handling and validation.  
⚡ **Lodash (Debouncing)** – Optimizes search input performance.  
♻️ **React.memo & useCallback** – Prevents unnecessary re-renders for better performance.  
🛠 **Axios** – For API requests.  
🎨 **SCSS Modules** – Encapsulated styling per component.  

## Project Setup  
### 1️⃣ Clone the Repository  
```sh  
git clone https://github.com/OseniEniola/vrfi-countries-app.git  
cd vrfi-countries-app  
```

### 2️⃣ Install Dependencies  
```sh  
npm install  
```

### 3️⃣ Set Up Environment Variables  
Create a `.env` file in the project root. Use the provided `.example.env` as a reference:  
```sh  
cp .example.env .env  
```
Modify `.env` and fill in the required values.

### 4️⃣ Run the Project  
```sh  
npm run dev  
```
Then, open **http://localhost:5173/** in your browser.



## Approach & Trade-offs  
1️⃣ **Modular Components** – Created reusable UI components (buttons, input fields, etc.) for maintainability.  
2️⃣ **Performance Optimizations** – Used `React.memo` and `useCallback` to prevent unnecessary renders.  
3️⃣ **API Management with TanStack Query** – Ensures efficient data fetching, caching, and refetching.  
4️⃣ **Debounced Search** – Used `lodash.debounce` to optimize search performance.  
5️⃣ **Styling Choices** – Used `SCSS Modules` for scoped styling while keeping a `global.css` for general styles.  
6️⃣ **Error Handling** – Implemented proper loading and error states to improve user experience.  


