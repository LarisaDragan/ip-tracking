# IP address tracker

The IP Address Tracker is a web app that allows users to search for IP addresses or domain names to retrieve geographic and network information. It provides details such as the IP address, location, timezone and ISP, along with a map displaying the location.

Challenge project by Frontend Mentor.

## Features

- Allow users to track their own public IP automatically
- Search for an IP address or domain name
- Displays key information including:
   - IP Address
   - Location (city)
   - Timezone
   - ISP (Internet Service Provider)
- Interactive map visualization of the IP location

## Technologies Used

- React
- TypeScript
- CSS
- IP Geolocation API: [IP Geolocation API by IPify](https://geo.ipify.org/)
- Displaying the IP location on the map: [React-Leaflet](https://leafletjs.com/)

## Screenshots
![ip_desktop](https://github.com/user-attachments/assets/d158ccf7-6bd4-4de2-8bdd-5f4047d2835f)

![ip_mobile](https://github.com/user-attachments/assets/4db4ee55-eaa5-4164-a7d8-92b0b347ae2c)


## Instalation

1. Install dependencies:

   ```sh
   npm install
   ```

2. Create a .env file in the root directory and add your API key::
   ```sh
   API_KEY=your_api_key_here
   ```

3. Start the development server:
   ```sh
   npm run dev
   ```
