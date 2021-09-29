// Compress and bundle to a single file
({
  baseUrl: './downgraded/libs',
  paths: {
    modules: '../modules',
    model: '../model',
    controllers: '../controllers',
    views: '../views',
    configs: '../configs'
  },
  name: "../main", // the(single?) entry point
  out: "./release/bundle.js", // output a single file
}
)

// Compress file by file and out put to a directory
/*
({
  baseUrl: './downgraded',
  paths: {
    modules: './modules',
    //model: './model',
    controllers: './controllers',
    views: './views',
    configs: './configs',
    main: './main.js'
  },
  dir: 'release'  // output a dir of files
}
)
*/
