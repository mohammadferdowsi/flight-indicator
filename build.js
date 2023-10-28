({
    baseUrl: '.',
    out: 'dist/flight-indicator.js',
    optimize: 'uglify2',
    name: 'src/Libs/jean-amd/dist/jean-amd',
    include: ["src/Gauges/Base/FlightIndicator"],
    wrap: {
        start: 
        "(function (root, factory) { \n" +
        " \t if (typeof define === 'function' && define.amd) { \n" +
        "\t \t define([], factory); \n" +
        "\t} else { \n" +
        "\t \troot.FlightIndicator = root.FlightIndicator || {}; \n" +
        "\t \troot.FlightIndicator = factory();\n" +
        "\t}\n" +
        "}(this, function() {",
        end:
        "\n \t return require('src/Gauges/Base/FlightIndicator'); \n" +
        "}));"
    },
     paths:{
        "text": "node_modules/requirejs-text/text",
        "Inheritance": "src/Libs/jean-inheritance/src/Inheritance",
        "TypeCheck": "src/Libs/jean-type-check/src/TypeCheck",
        "Failure": "src/Libs/jean-failure/src/Failure",
        "Interface": "src/Libs/jean-interface/src/Interface",
        "NotImplementedError": "src/Libs/jean-interface/src/NotImplementedError",
        
        "BaseOptions": "src/Gauges/Base/BaseOptions",
        "IndicatorBase": "src/Gauges/Base/IndicatorBase",

        "HeadingIndicator": "src/Gauges/Heading/HeadingIndicator",
        "heading-html": "src/Gauges/Heading/html/heading.html",

        "SpeedIndicator": "src/Gauges/Speed/SpeedIndicator",
        "speed-html": "src/Gauges/Speed/html/speed.html",

        "AltitudeIndicator": "src/Gauges/Altitude/AltitudeIndicator",
        "altitude-html": "src/Gauges/Altitude/html/altitude.html",

        "HorizonIndicator": "src/Gauges/Horizon/HorizonIndicator",
        "horizon-html": "src/Gauges/Horizon/html/horizon.html",

        "VerticalSpeedIndicator": "src/Gauges/VerticalSpeed/VerticalSpeedIndicator",
        "vertical-speed-html": "src/Gauges/VerticalSpeed/html/vertical-speed.html",

        "TurnIndicator": "src/Gauges/Turn/TurnIndicator",
        "turn-html": "src/Gauges/Turn/html/turn.html",

        "StickIndicator": "src/Gauges/Stick/StickIndicator",
        "stick-html": "src/Gauges/Stick/html/stick.html",

        "PedalIndicator": "src/Gauges/Pedal/PedalIndicator",
        "pedal-html": "src/Gauges/Pedal/html/pedal.html",

        "CollectiveIndicator": "src/Gauges/Collective/CollectiveIndicator",
        "collective-html": "src/Gauges/Collective/html/collective.html"
    },
    stubModules: ["text"]
})