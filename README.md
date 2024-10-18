# Wearable Sensor System for Sleep Apnea Monitoring

The system consists of three parts:

1. **Apnea Detection Based on Respiratory Sounds Recorded by a Microphone**  
   Real-time acquisition of signals from a digital MEMS microphone, with storage in the microcontroller’s RAM. Sound processing on the microcontroller includes developing an algorithm to track the envelope of the breathing waveform, segmentation of respiratory cycles, detection, and measurement of apnea intervals (absence of breathing). Time stamps are added using an RTC (real-time clock), and data (times, apnea intervals) are stored on an SD card.

2. **Sleep Duration Detection Based on Body Position Using Inertial Sensors**  
   Real-time acquisition of signals from an integrated inertial MEMS sensor chip (IMU – accelerometer + gyroscope), capturing 3-axis acceleration (x, y, z), 3-axis angular velocity, and/or pressure sensors for altitude measurement. Acceleration is converted into displacement, and angular velocity into orientation. Posture changes are detected to identify: 
   - Laying down 
   - Getting out of bed  

   These detections are used to measure sleep intervals using the RTC. The detected moments of laying down/getting up are used to start/stop the measurement in part 1.

3. **Optional: Wireless Transmission and Display of Information**  
   Transmission to a mobile phone (via Bluetooth) or a network server (via WiFi) occurs upon waking up, triggered by detection in part 2. This feature displays apnea intervals and statistics for the previous night.

---


## Development Tools and Materials

We are using the **Cypress/Infineon PSoC 62S2 Wi-Fi BT Pioneer Kit (CY8CKIT-062S2-43012)** with the **IoT Sense Expansion Kit (CY8CKIT-028-SENSE)** for hardware development.

- [PSoC 62S2 Wi-Fi BT Pioneer Kit](https://www.infineon.com/cms/en/product/evaluation-boards/cy8ckit-062s2-43012/)
- [IoT Sense Expansion Kit](https://www.infineon.com/cms/en/product/evaluation-boards/cy8ckit-028-sense/)

For software development, we are using **Eclipse IDE** along with **ModusToolbox™ Tools Package**

---

This project is carried out by students Nikola Marinović, Ivan Stipić and Iva Zubčić, under the mentorship of doc. dr. sc. Dinko Oletić. The project is scheduled to run from October 2024 to February 2025.
