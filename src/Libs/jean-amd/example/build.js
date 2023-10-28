({
    baseUrl: '.',
    out: 'app.js',
    optimize: 'none',
    name: "../dist/jean-amd.min",
    include: ["RequireWriter"],
    wrap: true,
     paths:{
       Writer: "ModuleWriter",
       Hello: "ModuleHello",
       World: "ModuleWorld",
    }
})