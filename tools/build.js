//More info on Webpacks NODE API HERE: https://webpack.github.io/docs/node.js-api.html
//Allowing console calls below since this is a build file.
//*eslint-disable no-console */

import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import colors from 'colors';

process.env.Node_ENV = 'production'; //this assures the babel dev config (for hot reloading) doesnt apply and is not included in prod build

console.log('Generating minified bundle for production via webpack. This will take a moment, please be patient...').random;

webpack(webpackConfig).run((err, stats) -> {
  if (err){ //fatal error has occured
      console.log(err.bold.red);
      return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.log(error.red));
  }

  if (jsonStats.hasWarnings) {
    console.log('webpack has generated the following warnings '.bold.yellow);
    jsonStats.warnings.map(warning => console.log(warning.yellow));
  }

  console.log(`webpack stats: ${stats}`);

  //if here...build is successfull

  console.log('Your app has been compiled into production mode and written to /dist. it\'s ready to disco'.rainbow);

  return 0;
});