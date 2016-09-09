#this file includes  the notes which are about setup of development environment

#npm  package.json
npm init

#install babel in project folder 
npm install --save-dev babel-cli babel-preset-react

echo '{ "presets": ["react"] }' > .babelrc

#bi script: "babel  webClient/reactSrc --out-dir webClient/reactBin"

#install webpack
npm i webpack -g

npm install webpack --save-dev


#install react 
npm install --save react react-dom


