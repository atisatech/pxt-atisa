# Philippine Parol Holiday Lantern

Board configuration for Philippine Parol Holiday Lantern PCB v1.

## Hardware
- Based on Adafruit ItsyBitsy M0 Express
- 24 NeoPixel LEDs (14 on D9, 10 on D7)
- I2C sensor support
- Speaker on A0

## Usage

### Basic Usage

```typescript
// Set brightness and show lights
parol.setBrightness(128)
parol.setAll(0xff0000)  // Set all LEDs red
parol.show()

// Set individual Parol parts
parol.setOuterRing(1, 0xff0000)  // Set first Outer Ring light to red
parol.setRay(1, 0x00ff00)        // Set first Ray to green
parol.setPetal(1, 0x0000ff)      // Set first Petal to blue
parol.setLeftTassel(1, 0xffff00) // Set first Left Tassel to yellow
parol.setRightTassel(1, 0xff00ff) // Set first Right Tassel to magenta
parol.show()

// Set all of a specific part
parol.setAllOuterRing(0xff0000)  // Set all Outer Ring lights to red
parol.setAllRays(0x00ff00)       // Set all Rays to green
parol.setAllPetals(0x0000ff)      // Set all Petals to blue
parol.show()
```

### Motion Sensor

```typescript
// Initialize motion sensor
parol.initMotionSensor()

// Check for motion
if (parol.isMotionDetected()) {
    parol.setAll(0xffffff)  // Turn all lights white when motion detected
    parol.show()
}
```

### Advanced Usage

```typescript
// Direct pixel control (0-23)
parol.setPixelColor(0, 0xff0000)  // Set first LED red
parol.show()

// Get board reference
let board = parol.strip()
```

## Features
- ✅ Working hardware (WebUSB upload)
- ✅ Working simulator (24 LED visualization)
- ✅ Parol-specific blocks for easy control (Outer Ring, Rays, Petals, Tassels)
- ✅ Motion sensor support
- ✅ 1-based indexing for 8-year-old students
