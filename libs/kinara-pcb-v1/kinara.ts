namespace kinara {
    let _virtualStrip: light.NeoPixelStrip = null;
    
    /**
     * Get the Kinara 25-LED strip (virtual strip for simulator)
     */
    //% blockId=kinara_strip block="kinara strip"
    //% weight=100
    export function strip(): KinaraVirtualStrip {
        if (!_virtualStrip) {
            // Create one virtual 25-LED strip that simulator can visualize
            _virtualStrip = light.createStrip(pins.D9, 25);
        }
        return new KinaraVirtualStrip(_virtualStrip);
    }
}

class KinaraVirtualStrip {
    constructor(private virtualStrip: light.NeoPixelStrip) {}
    
    /**
     * Set color of pixel at index (0-24)
     */
    //% blockId=kinara_setPixelColor block="%strip|set pixel color at %index|to %color"
    //% index.min=0 index.max=24
    //% color.shadow="colorNumberPicker"
    setPixelColor(index: number, color: number) {
        this.virtualStrip.setPixelColor(index, color);
        this.show();
    }
    
    /**
     * Set all pixels to same color
     */
    //% blockId=kinara_setAll block="%strip|set all %color"
    //% color.shadow="colorNumberPicker"
    setAll(color: number) {
        this.virtualStrip.setAll(color);
        this.show();
    }
    
    /**
     * Update the LED strip
     */
    //% blockId=kinara_show block="%strip|show"
    show() {
        this.virtualStrip.show();
    }
}

