({
    baseUrl: '.',
    out: 'dist/jean-failure.js',
    optimize: 'uglify2',
    name: 'node_modules/jean-amd/dist/jean-amd',
    include: ["src/Failure"],
    wrap: {
        start: 
        "(function (root, factory) { \n" +
        " \t if (typeof define === 'function' && define.amd) { \n" +
        "\t \t define([], factory); \n" +
        "\t} else if(typeof module === 'object' && module.exports) { \n" +
        "\t\t module.exports = factory(); \n " +
        "\t} else { \n" +
        "\t \troot.Failure = root.Failure || {}; \n" +
        "\t \troot.Failure = factory();\n" +
        "\t}\n" +
        "}(this, function() {",
        end:
        "\n \t return require('src/Failure'); \n" +
        "}));"
    },
     paths:{
       
    }
})