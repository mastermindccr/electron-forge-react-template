# How to run the template?
1. `npm i` to install dependencies 
2. `npm start` to run the template

## Simple Configurations
- change port
    - change `port` and `loggerPort` defined in `forge.config.js`
- add pages
    - add new page in `src/pages/`
    - add new route in `src/app.jsx`

# How to build the template into an executable?
1. `npm run package -- --arch="<arch>"` to package the template, `<arch>` can be `x64`, `ia32`, `armv7l`, `arm64` or `all` etc.
2. `npm run make -- --arch="<arch>"` to make the template into a single executable, `<arch>` can be `x64`, `ia32`, `armv7l`, `arm64` or `all` etc.