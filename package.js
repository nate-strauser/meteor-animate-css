Package.describe({
    name:"natestrauser:animate-css",
    summary: "Animate.css packaged for meteor",
  version: "3.2.6",
  git: "https://github.com/nate-strauser/meteor-animate-css.git"
});

Package.on_use(function (api) {
  api.versionsFrom("METEOR@0.9.0");
    api.add_files("lib/animate.css/animate.css", "client");
});
