# Play Music with Your Menorah

## Introduction @unplugged

Let's add music to your Menorah! In this tutorial, you'll learn how to make your menorah play a beautiful melody and light up with colors!

![A menorah with lights](/pxt-atisa/static/projects/digital-io/blinky/gallery.png)

```package
chanukah-menorah-lantern
```

```config
feature=uf2
feature=light
feature=music
```

## Step 1 @fullscreen

You'll see an ``||loops:onStart||`` block in your workspace. This block runs your code once when the program starts.

Inside the ``||loops:onStart||`` block, drag ``||menorah:set brightness||`` and set it to `20`. This brightness is bright enough to see, and it helps preserve the LED life so your menorah will last longer.

```blocks
menorah.setBrightness(20)
```

## Step 2 @fullscreen

Now let's light up your menorah! Still inside the ``||loops:onStart||`` block, drag ``||menorah:set all to color||`` underneath the brightness block. Set it to gold to give your menorah a beautiful warm glow!

```blocks
menorah.setBrightness(20)
menorah.setAll(0xffd700)
```

## Step 3 @fullscreen

Perfect! Now we need to tell the lights to actually turn on. Drag ``||menorah:show lights||`` underneath the "set all" block. This updates the LEDs so you can see the lights!

```blocks
menorah.setBrightness(20)
menorah.setAll(0xffd700)
menorah.show()
```

## Step 4 @fullscreen

Now let's add music! Still inside the ``||loops:onStart||`` block, drag ``||music:play melody||`` underneath the "show lights" block. 

Click on the melody to open the melody editor, then click on the notes to create a simple melody. Start with a few notes - you can add up to 8 notes in the melody editor!

```blocks
menorah.setBrightness(20)
menorah.setAll(0xffd700)
menorah.show()
music.playMelody("C D E F G A B C5 ", 120)
```

## Step 5 @fullscreen

Look at the simulator! Can you see your menorah lighting up in gold? Can you hear the music playing? The lights should turn on and then the melody should play!

## Step 6 @fullscreen

![Melody Gallery tab](/pxt-atisa/static/projects/music/melodygallery.png)

Want to try a different melody? You can choose from preset melodies! Click on the "Gallery" tab in the melody editor and choose from any in the list. (Click the 💡 lightbulb icon if you need help finding it!)

## Step 7 @fullscreen

![Connecting your menorah board](/pxt-atisa/static/projects/chanukah/connect-device.gif)

Plug in your board, click the three dots (⋯) next to Download, then "Connect Device". Select "ItsyBitsy M0 Express" and click Connect. When you see the USB icon, click Download!

