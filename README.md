[logo-heading]: img/heading.preview.png
[logo-speed]: img/speed.preview.png
[logo-altitude]: img/altitude.preview.png

[logo-horizon]: img/horizon.preview.png
[logo-vertical-speed]: img/vertical-speed.preview.png 
[logo-turn]: img/turn.preview.png 

[logo-stick]: img/stick.preview.png
[logo-pedal]: img/pedal.preview.png
[logo-collective]: img/collective.preview.png

[logo-coming-soon]: img/coming_soon.preview.png

## Description

Provides Javascript animated SVGs that support the standard flight indicators for heading, speed, altitude, pitch and roll, vertical speed and turn. In addition, helicopter-specific flight parameter indicators are available for stick positioning, pedal positioning and the angle of the collective lever. 

## Installation

This package doesn't exist in npmjs repository anymore and also gathering dependencies to run the app was a pain. So I gathered required dependecies from author repository and merged it into currect directory. So you can easily install it form my git repository.

`npm i https://github.com/mohammadferdowsi/flight-indicator.git`

## Preview

- Visit an  [implemented example](https://je-an.github.io/jean-flight-indicator/example/index.html)

Standard
---

|     Heading     |    Speed      |      Altitude    |
|:----------:|:----------:|:----------:|
|     ![compass indicator][logo-heading]    |     ![Speed indicator][logo-speed]      |   ![Altitude indicator][logo-altitude]       |
|     Displays aircraft heading    |     Displays aircraft speed    |  Displays aircraft altitude    |

---

|     Horizon     |   Vertical Speed      |      Turn    |
|:----------:|:----------:|:----------:|
|     ![Compass indicator][logo-horizon]     |     ![VSpeed indicator][logo-vertical-speed]      |   ![Turn indicator][logo-turn]       |
|    Displays aircraft pitch and roll |     Displays aircraft vertical speed   |  Displays aircraft turn       |    

Helicopter specific 
---
 
|     Stick     |    Pedal      |      Collective    |
|:----------:|:----------:|:----------:|
|     ![Stick indicator][logo-stick]     |     ![Pedal indicator][logo-pedal]      |   ![Collective indicator][logo-collective]       |
|     Displays helicopter stick position     |     Displays helicopter pedal position    |  Displays helicopter collective hand gear position       |

## Code Example
- Use it as browser variable

```js
// Set basic options for all flight indicators
FlightIndicator.setOptions({
        assets: "../img/" // path where the svgs are located
});

// Create all indicator and pass the id of the html element 
// which shall be used as container for the specific indicator svg
 var speed = new FlightIndicator.Speed({
    containerId: "speed-container",
    onIndicatorReady: function () {
        
    }
});
var heading = new FlightIndicator.Heading({
    containerId: "heading-container",
    onIndicatorReady: function () {
        
    }
});
var altitude = new FlightIndicator.Altitude({
    containerId: "altitude-container",
    onIndicatorReady: function () {
        
    }
});
var horizon = new FlightIndicator.Horizon({
    containerId: "horizon-container",
    onIndicatorReady: function () {
        
    }
});
var verticalSpeed = new FlightIndicator.VerticalSpeed({
    containerId: "vertical-speed-container",
    onIndicatorReady: function () {
        
    }
});
var turn = new FlightIndicator.Turn({
    containerId: "turn-container",
    onIndicatorReady: function () {
        
    }
});
var stick = new FlightIndicator.Stick({
    containerId: "stick-container",
    onIndicatorReady: function () {
        
    }
});
var pedal = new FlightIndicator.Pedal({
    containerId: "pedal-container",
    onIndicatorReady: function () {
        
    }
});
var collective = new FlightIndicator.Collective({
    containerId: "collective-container",
    onIndicatorReady: function () {
        
    }
});

// Update methods. 
// Call this methods for each new value you want to display
// For a smooth visualisation of the values within the specific indicator, 
// it is recommended to update every 50ms.
speed.update(/* number within range from 0kt to 160kt */);
heading.update(/* number within range from 360° to -360° */);
altitude.update(/* number within range from 0ft to 99999ft */);
horizon.update(
    /* number within range from 40° to -40° */, 
    /* number within range from 30° to -30° */
);
verticalSpeed.update(/* number within range from 4000ft to -4000ft */)
turn.update(
    /* number within range from -3°/sec to 3°/sec */, 
    /* number within range from -1 to 1 */
);
stick.update(
    /* number within range from 1 to -1 */, 
    /* number within range from 1 to -1 */
);
pedal.update(
    /* number within range from 1 to 0 */, 
    /* number within range from 1 to 0 */
);
collective.update(/* number within range from 0° to 60° */);
```

- Use it with require.js

```js
require(["path/to/FlightIndicator"], function(FlightIndicator){
    // Work with FlightIndicator
});
```

## Debugging

- Host `example/index.html` and display it in your browser

## Support
Supports AMD eco system. If there is no loader, FlightIndicator is registered as a browser variable.

## License

MIT

