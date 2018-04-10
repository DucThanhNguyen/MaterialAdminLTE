
Introduction
============
**[AdminLTE](https://github.com/almasaeed2010/AdminLTE)** is a fully responsive admin template. Based on **[Bootstrap 3](https://github.com/twbs/bootstrap)** framework. Highly customizable and easy to use. Fits many screen resolutions from small mobile devices to large desktops.

**[MaterialAdminLTE](https://github.com/DucThanhNguyen/MaterialAdminLTE)** is a **[Material Design](https://material.google.com/)** for **AdminLTE** using **[Bootstrap Material Design](https://github.com/FezVrasta/bootstrap-material-design)**

Check out the live preview now and see for yourself.

## Demo
- Live preview: [https://ducthanhnguyen.github.io/MaterialAdminLTE](https://ducthanhnguyen.github.io/MaterialAdminLTE)
- Screenshot:
<img src="https://raw.githubusercontent.com/DucThanhNguyen/MaterialAdminLTE/gh-pages/documentation/MaterialAdminLTE_Dashboard.JPG">

## AdminLTE Documentation & Installation Guide
- Offline documentation is avaiable in the source code at the folder: [/documentation/index.html](https://github.com/DucThanhNguyen/MaterialAdminLTE/blob/master/documentation/index.html)
- Visit the [online documentation](https://adminlte.io/docs) for the most updated guide.

## What's changed in AdminLTE
We tried to make minimal change to the original AdminLTE so that it's easier for upgrading to the new version of it

Here are files and folder that's added to the original source code:
```
MaterialAdminLTE/
├── build/
|   ├── bootstrap-material-design-less/*
|   |   └── plugins/*
|   └── material-less/
|       ├── bootstrap-social.less
|       ├── MaterialAdminLTE.less
|       └── skins
|           ├── all-md-skins.less
|           ├── skin-md-black.less
|           ├── ...
|           └── skin-md-yellow-light.less
└── build/
    ├── css/
    |   ├── bootstrap-material-design.css
    |   ├── MaterialAdminLTE.css
    |   ├── ripples.css
    |   └── skins
    |       ├── all-md-skins.css
    |       ├── skin-md-black.css
    |       ├── ...
    |       └── skin-md-yellow-light.css
    ├── img/
    |   └── patterns/
    |       ├── user-panel-bg_blue.jpg
    |       ├── ...
    |       └── user-panel-bg_yellow.jpg
    └── js/
        ├── material.js
        └── ripples.js
```
In html pages of AdminLTE, we added following lines of code
```
  <!-- Material Design -->
  <link rel="stylesheet" href="dist/css/bootstrap-material-design.min.css">
  <link rel="stylesheet" href="dist/css/ripples.min.css">
  <link rel="stylesheet" href="dist/css/MaterialAdminLTE.min.css">
  <!-- AdminLTE Material Skins. Choose a skin from the css/skins
       folder instead of downloading all of them to reduce the load. -->
  <link rel="stylesheet" href="dist/css/skins/all-md-skins.min.css">
</head>
```
```
  <!-- Material Design -->
  <script src="dist/js/material.min.js"></script>
  <script src="dist/js/ripples.min.js"></script>
  <script>
    $.material.init();
  </script>
</body>
```
## Roard map
- Upgrade to **AdminLTE 3** with **Bootstrap 4** as soon as the stable version of AdminLTE is released
- Upgrade to **[Material Design for Bootstrap 4](https://fezvrasta.github.io/bootstrap-material-design/)**

## License
 MaterialAdminLTE is an open source project that is licensed under [MIT](http://opensource.org/licenses/MIT).
