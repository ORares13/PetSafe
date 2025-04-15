# PetSafe Monitor

**PetSafe Monitor** is a smart monitoring system designed to track environmental conditions inside a parked car or room. Using a Raspberry Pi equipped with sensors (temperature, humidity, and potentially CO2), it collects real-time data and transmits it to a mobile app. If unsafe conditions are detected, the system sends push notifications to the pet owner, allowing immediate action to be taken. The app also stores historical data to track environmental trends over time.

## **Hardware Components:**

- **Raspberry Pi** 3 Model B V1.2 https://www.raspberrypi.com/products/raspberry-pi-3-model-b/
- **AHT21 module** v0.01 (Temperature and Humidity Sensor) https://ardushop.ro/ro/groundstudio/1598-modul-senzor-umiditate-si-temperatura-aht21-groundstudio-6427854000439.html
- **Jumper Wires**
- **MicroSD Card** (for Raspberry Pi OS)

## **Software Components:**

- **Raspberry Pi OS** (installed on the microSD card) https://www.raspberrypi.com/software/
- **Python** (for reading sensor data)
  - **Libraries**:
    - **Adafruit_DHT** (to read data from AHT21 sensor) https://learn.adafruit.com/dht/dht-circuitpython-code
    - **Requests** (to send data to the cloud)
- **Expo Go (for mobile app development)** https://docs.expo.dev/
- **React Native (for building the mobile app)**

## **Setup Instructions:**

### **Hardware Setup:**
1. **Prepare the Raspberry Pi:**
   - Install Raspberry Pi OS on the microSD card and configure the Raspberry Pi for Wi-Fi.

## 2. Connect the AHT21 Sensor:
   - Connect the **VIN (3.3V)** pin of the AHT21 to the **3.3V** pin (Pin 1) of the Raspberry Pi.
   - Connect the **GND** pin of the AHT21 to any **GND** pin (e.g., Pin 6) on the Raspberry Pi.
   - Connect the **SCL** pin of the AHT21 to **GPIO3 (Pin 5)** on the Raspberry Pi.
   - Connect the **SDA** pin of the AHT21 to **GPIO2 (Pin 3)** on the Raspberry Pi.

3. **Power the Raspberry Pi:**
   - Use a portable USB battery pack or car charger to power the Raspberry Pi.

### **Software Setup:**
1. **Install the Necessary Libraries on Raspberry Pi:**
   - Install libraries to enable the Raspberry Pi to read data from the AHT21 sensor and send the data to the mobile app server.

2. **Mobile App Development (Expo/React Native):**
   - Set up a new Expo project for mobile app development.
   - Install necessary libraries for data fetching and navigation.
   - Build app components to display data and handle unsafe conditions (e.g., temperature and humidity out of range).

3. **Server Communication:**
   - Set up server-side communication to handle the incoming data from the Raspberry Pi and send it to the mobile app.

## **Running the Project:**

### **Raspberry Pi:**
1. Ensure the Raspberry Pi is running the sensor data collection script to read temperature and humidity data.
2. The Raspberry Pi will continuously send the data to the cloud/server.

### **Mobile App:**
1. Launch the Expo app on a mobile device.
2. The app will display the pet’s environmental data in real-time and alert the user when unsafe conditions are detected.






