#this file includes  the notes which are about setup of development environment

#npm  package.json
npm init

#install babel in project folder 
npm install --save-dev babel-cli babel-preset-react babel-preset-es2015 babel-preset-stage-0

echo '{ "presets": ["react"] }' > .babelrc

#bi script: "babel  webClient/reactSrc --out-dir webClient/reactBin"

#install webpack
npm i webpack -g

npm install webpack --save-dev

#Webpack Loaders Install
npm install --save-dev style-loader css-loader toolbox-loader sass-loader

npm install babel-loader --save-dev

#Webpack Config webpack.config.js
#Webpack command :  webpack --progress --colors --watch

#install react 
npm install --save react react-dom

#install react-toolbox
$ npm install --save react-toolbox
    
#install react devtools extension on chrome
npm install --save-dev react-addons-css-transition-group@~0.14.0 || ~15.3.0
npm install --save-dev extract-text-webpack-plugin
npm install --save-dev webpack-hot-middleware 
npm install --save-dev postcss-loader


#webpack --display-error-details for error details..


