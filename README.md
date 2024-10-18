# Projekt-R

Apnea Detection Based on Respiratory Sounds Recorded by a Microphone
Real-time acquisition of signals from a digital MEMS microphone, with storage in the microcontroller’s RAM. Sound processing on the microcontroller includes developing an algorithm to track the envelope of the breathing waveform, segmentation of respiratory cycles, detection, and measurement of apnea intervals (absence of breathing). Time stamps are added using an RTC (real-time clock), and data (times, apnea intervals) are stored on an SD card.

Sleep Duration Detection Based on Body Position Using Inertial Sensors
Real-time acquisition of signals from an integrated inertial MEMS sensor chip (IMU – accelerometer + gyroscope), capturing 3-axis acceleration (x, y, z), 3-axis angular velocity, and/or pressure sensors for altitude measurement. Acceleration is converted into displacement, and angular velocity into orientation. Posture changes are detected to identify: 1. laying down and 2. getting out of bed, for the purpose of measuring sleep intervals using the RTC. The detected moments of laying down/getting up are used to start/stop the measurement in part 1).

Optional: Wireless Transmission and Display of Information
Transmission to a mobile phone (via Bluetooth) or a network server (via WiFi) occurs upon waking up, triggered by detection in part 2). This feature displays apnea intervals and statistics for the previous night.
