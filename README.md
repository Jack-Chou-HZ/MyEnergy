# HTML5-ECMAScript-12-RequireJS
A playground for HTML5 + ECMAScript 12th Edition + RequireJS
## Author info
- Name: Jack-Chou-HZ (@jack_sparrow_hz)
- Email: better.product.go@gmail.com
# About how to make a release
1. Steps:
    1. Run `yarn lint` // Use eslint to perform a static check of \*.js files
    2. Run `yarn transf` // Transform the \*.jsx files into \*.js files using babel cli
    3. Run `yarn downgrade` // Downgrade the ES2015+ \*.js files into ECMAScript 5th edition formate using babel cli
    4. Run `yarn compress` // Compress the ECMAScript 5th edition files (as is or into a single bundle.js file)
    5. Run `bash ./makeuprelease.sh`
    6. The `./release` directory is ready for nginx to serve via the http protocol
2. The behavior of the `yarn compress` command is configured by the r.compress.config.js config file.
3. The `r.compress.config.js` config file has two options:
    1. compress the js files one by one and out put them one by one
    2. compress the js files and bundle them into one file
    <br/>Neither of the option take care of non-js files (such as ./assets, and html files), so we need to copy them into the `./release` directory manually (that's what the makeuprelease.sh
  script does)
4. **When using the `3.2` option to make a release, we still need the require.js to be loaded before the bundle.js file,
 so the script tag in the index.html file is modified slightly
 into:<br/> `<script async data-main='./bundle.js' src='./require.js'>`**
 <br\>The require.js file could be a compressed version or an original version
# About the project directory structure
 1. Introduction to the root directory:
     1. The files not in any directories are called the project files.<br/>
     They are config files such as `.eslintrc.json, .gitignore, .babelrc,` package.json, etc... <br/>
     Or some shell scripts such as `makeuprelease.sh`
     2. The src directory is the root directory of project source codes. It contains all non-3rd-party source codes(except the `libs` directory which contains 3rd-party source codes and some stylesheets in `styles` directory)
     3. The downgraded directory contains \*.js files downgraded by babel cli into ECMAScript 5th edition (browser friendly)

