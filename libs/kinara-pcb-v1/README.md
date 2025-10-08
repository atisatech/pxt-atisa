# Kinara PCB V1.0

Custom circuit board from DEVOMECH Solutions featuring 25 individually addressable LEDs in an organic, head-shaped design.

## Features

- **25 SMD LEDs** - Arranged in a grid pattern with organic variation
- **20-pin header** - Compatible with ItsyBitsy M0 Express
- **Custom design** - Unique wavy, head-like shape
- **Orange 3D-printed frame** - Protective housing
- **Individual LED control** - Each LED can be controlled separately

## Pin Mapping

### Digital Pins
- D0-D13: Available for LED control and general I/O
- D2-D8: Primary LED control pins (LED1-LED7)
- D9-D13: Secondary LED control pins (LED8-LED13)
- A0-A5: Analog pins for LED control (LED14-LED25)

### Power
- VCC: 3.3V power
- GND: Ground

### Communication
- SDA: I2C data (A4)
- SCL: I2C clock (A5)

## LED Layout

```
LED7  LED6  LED5  LED4  LED3  LED2  LED1
LED8  LED9  LED10 LED11 LED12 LED13
LED14 LED15 LED16 LED17 LED18 LED19
LED20 LED21 LED22 LED23 LED24 LED25
```

## Usage

This board is designed to work with the Adafruit ItsyBitsy M0 Express microcontroller. The LEDs can be controlled individually using the standard PXT light and pixel libraries.

## Board Dimensions

- Width: 400px (simulator)
- Height: 300px (simulator)
- Pin spacing: 15px
- LED size: 8x8px



