# Light Up Your Menorah

## Introduction @unplugged

Let's light up your menorah! A menorah is a special candle holder used during Chanukah. It has 9 candles - 8 regular candles and 1 special helper candle called the shammash.

In this tutorial, you'll learn how to make the menorah light up with beautiful colors!

![A menorah with lights](/pxt-atisa/static/projects/digital-io/blinky/gallery.png)

```package
chanukah-menorah-lantern
```

```config
feature=uf2
feature=light
```

## Step 1 @fullscreen

First, let's make the lights bright enough to see! Add ``||menorah:set brightness||`` and set it to `110`. This makes the lights nice and bright, but not too bright.

```blocks
menorah.setBrightness(110)
```

## Step 2 @fullscreen

Let's light up the shammash! The shammash is the special helper candle in the middle (candle number 5). It helps light the other candles.

Add ``||menorah:set Menorah candle||`` and set candle `5` to a gold color. Then add ``||menorah:set Menorah flame||`` and set flame `5` to gold too. Use the color picker to choose a nice gold color!

```blocks
menorah.setBrightness(110)
menorah.setCandle(5, 0xffcc00)
menorah.setFlame(5, 0xffcc00)
```

## Step 3 @fullscreen

Now let's light the leftmost candle! This is candle number 1. Add ``||menorah:set Menorah candle||`` for candle `1` and choose a blue color. Then add ``||menorah:set Menorah flame||`` for flame `1` and make it gold.

```blocks
menorah.setBrightness(110)
menorah.setCandle(5, 0xffcc00)
menorah.setFlame(5, 0xffcc00)
menorah.setCandle(1, 0x0000ff)
menorah.setFlame(1, 0xffcc00)
```

## Step 4 @fullscreen

Finally, let's light up the base of the menorah! The base has 9 lights. We'll use a loop to light them all up.

Add ``||menorah:set Menorah base light %baseNumber to %color||`` and set base light `1` to a blue color. Then add a ``||loops:for||`` loop that goes from `1` to `9` with a placeholder statement inside. Drag the ``||menorah:set Menorah base light %baseNumber to %color||`` block inside the loop to replace the placeholder, and change the number `1` to use the loop variable `i`.

```blocks
menorah.setBrightness(110)
menorah.setCandle(5, 0xffcc00)
menorah.setFlame(5, 0xffcc00)
menorah.setCandle(1, 0x0000ff)
menorah.setFlame(1, 0xffcc00)
menorah.setMenorahBaseLight(1, 0x0000cd)
for (let i = 1; i <= 9; i++) {
    let x = 0
}
```

## Step 5 @fullscreen

Look at the simulator! Can you see the menorah lighting up? The shammash should be glowing in the middle, the leftmost candle should be lit, and the base should be glowing blue.

If you have a menorah board, click ``|Download|`` to put your code on the board and see the real lights!
