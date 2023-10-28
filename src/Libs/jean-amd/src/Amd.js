var require, define;
(function (window) {
    var modules = { resolved: {}, unresolved: {} };
    function getResolvedModules(dependencies) {
        for (var i = 0, resolvedModules = []; i < dependencies.length; i++) {
            var resolvedModule = modules.resolved[dependencies[i]];
            if (resolvedModule) {
                resolvedModules.push(resolvedModule);
            }
        }
        return resolvedModules;
    }
    function checkUnresolved() {
        for (var id in modules.unresolved) {
            var module = modules.unresolved[id];
            var resolvedModules = getResolvedModules(module.dependencies);
            resolve(id, module.factory, module.dependencies, resolvedModules, false);
        }
    }
    function resolve(id, factory, dependencies, resolvedModules, saveUnresolved) {
        if (resolvedModules.length === dependencies.length) {
            var mod = factory.apply(factory, resolvedModules);
            modules.resolved[id] = mod ? mod : {};
        } else if (saveUnresolved) {
            modules.unresolved[id] = {
                dependencies: dependencies,
                factory: factory
            }
        }
    }
    define = function (id, dependencies, factory) {
        if (modules.resolved[id]) {
            console.warn("There is already a module with id <" + id + "> defined. Therefore this module will be ignored");
            return;
        } else if ((typeof id !== "string") || (!Array.isArray(dependencies)) || (typeof factory !== "function")) {
            console.warn("Passed arguments for module are invalid");
            return;
        }
        if (dependencies.length === 0) {
            resolve(id, factory, dependencies, [], false);
        } else {
            resolve(id, factory, dependencies, getResolvedModules(dependencies), true);
        }
        checkUnresolved();
    };
    define.amd = {}; 
    require = function (dependencies, factory) {
        dependencies = Array.isArray(dependencies) ? dependencies : [dependencies];
        var resolvedModules = getResolvedModules(dependencies);
        if(resolvedModules.length === 1 && !factory){
            return resolvedModules[0];
        }
        if (resolvedModules.length === dependencies.length && factory) {
            factory.apply(factory, resolvedModules);
        } else {
            throw new Error("Not all modules are resolved");
        }
    };
})();