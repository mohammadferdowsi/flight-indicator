define(["Hello", "World"], function (Hello, World) {
    return { value: Hello.value + " " + World.value };
});