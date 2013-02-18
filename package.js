Package.describe({
    summary: "Animate.css packaged for meteor"
});

Package.on_use(function (api) {
    api.add_files("lib/animate.css/animate.css", "client");
});
