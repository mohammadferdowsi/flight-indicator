({
    baseUrl: '.',
    out: 'dist/jean-interface.js',
    optimize: 'uglify2',
    name: "node_modules/jean-amd/dist/jean-amd",
    include: ["src/Interface"],
    wrap: {
        start: 
        "(function (root, factory) { \n" +
        " \t if (typeof define === 'function' && define.amd) { \n" +
        "\t \t define([], factory); \n" +
        "\t} else if(typeof module === 'object' && module.exports) { \n" +
        "\t\t module.exports = factory(); \n " +
        "\t} else { \n" +
        "\t \troot.Interface = root.Interface || {}; \n" +
        "\t \troot.Interface = factory();\n" +
        "\t}\n" +
        "}(this, function() {",
        end:
        "\n \t return require('src/Interface'); \n" +
        "}));"
    },
    paths: {
        NotImplementedError: "src/NotImplementedError",
        TypeCheck: "node_modules/jean-type-check/src/TypeCheck",
        Failure: "node_modules/jean-failure/src/Failure"
    }
})