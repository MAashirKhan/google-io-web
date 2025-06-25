# DevFest Registration System - Frontend  

This repository contains the frontend for the DevFest Registration System. The application is built using **React.js** with **Vite** as the build tool. It provides an intuitive interface for both users and administrators, offering features for registering attendees, managing registrations, and monitoring event statistics.  

---

## Features  

### User Side  
1. **Home Page**  
   - Overview of the event with essential details.  

2. **Hackathon Guide Page**  
   - Provides guidelines and resources for the hackathon.  

3. **Create Badge Page**  
   - Users can generate personalized event badges.  

4. **Team Page**  
   - Team registration and management features.  

5. **Registration Form**  
   - Three types of registrations:  
     - Hackathon  
     - Workshops  
     - Conference  

### Admin Side  
1. **Dashboard**  
   - Displays attendee statistics and event registration details.  

2. **Data Tables**  
   - Separate pages for managing registration data:  
     - **Hackathon Registrations**  
     - **Workshop Registrations**  
     - **Conference Registrations**  

   - Features for each table:  
     - **Shortlisting**: Approve or reject attendees.  
     - **QR Code Check-in**: Confirm attendees using a QR code scanner.  
     - **Confirmation and Rejection Buttons**: Mark registration status.  

---

## Technology Stack  

- **Frontend Framework**: React.js  
- **Build Tool**: Vite  
- **Component Library**: Ant Design (AntD)  
- **Styling**: Flowbite, HTML, CSS  

---

## Libraries Used  

Here is the list of libraries and their purposes:  

| Library                  | Version   | Purpose                                         |  
|--------------------------|-----------|-------------------------------------------------|  
| @hookform/resolvers      | ^3.9.0    | For resolving form validation using Yup.        |  
| @yudiel/react-qr-scanner | ^2.0.8    | QR code scanning for check-ins.                 |  
| antd                     | ^5.21.4   | UI components and layouts.                      |  
| chart.js                 | ^4.4.4    | Charting library for data visualization.        |  
| file-saver               | ^2.0.5    | To save files on the client-side.               |  
| flowbite-react           | ^0.10.1   | React components compatible with Tailwind CSS.  |  
| html2canvas              | ^1.4.1    | Capturing DOM elements as images.               |  
| radix-ui                 | ^1.0.1    | Building accessible UI primitives.              |  
| react                    | ^18.3.1   | Core library for building the UI.               |  
| react-axios              | ^2.0.6    | Axios hooks for API requests.                   |  
| react-chartjs-2          | ^5.2.0    | React wrapper for Chart.js.                     |  
| react-countup            | ^6.5.3    | Animated counters for statistics.               |  
| react-cropper            | ^2.3.3    | Image cropping functionality.                   |  
| react-data-table-component | ^7.6.2 | For creating and managing data tables.          |  
| react-dom                | ^18.3.1   | Rendering components to the DOM.                |  
| react-dropzone           | ^14.2.10  | Drag-and-drop file uploads.                     |  
| react-ga4                | ^2.1.0    | Google Analytics 4 integration.                 |  
| react-hook-form          | ^7.53.0   | Easy-to-use form management library.            |  
| react-query              | ^3.39.3   | Data fetching and caching.                      |  
| react-router-dom         | ^6.26.2   | For handling routing in the application.        |  
| yup                      | ^1.4.0    | Schema validation for forms.                    |  

---

## Getting Started  

### Prerequisites  
- **Node.js** (version 18 or above recommended)  
- **npm** or **yarn**  

### Installation  

1. Clone the repository:  
   ```bash  
   git clone https://github.com/GDGKolachi/gdgkolachi-devfest-2024.git  
   ```  

2. Navigate to the project directory:  
   ```bash  
   cd gdgkolachi-devfest-2024  
   ```  

3. Install dependencies:  
   ```bash  
   npm install  
   ```  

### Running the Application  

1. Start the development server:  
   ```bash  
   npm run dev  
   ```  

2. Access the application in your browser at:  
   ```  
   http://localhost:5173  
   ```  

## Contribution  

Feel free to fork this repository and create pull requests. Contributions are always welcome!  

---

## License  

This project is licensed under the GDG Kolachi License.  

---

Let us know if you need any further additions!