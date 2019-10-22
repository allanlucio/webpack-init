Promise.all(
    [import("./es6"),
    import("./es6")]
).then(function(modules){
    console.log(modules[0].default);
    console.log(modules[1].default);
});



