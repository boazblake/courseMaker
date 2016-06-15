import fs from 'fs';
import cheerio from 'cheerio';
import colors from 'colors';

/*esling-disable no-console*/

fs.readFile('src/index.html', 'utf8', (err, markup) => {
  if (err) {
    return console.log(err.red);
  }

  const $ = cheerio.load(markup);

  /*since a seperarte stylesheet is only utelized for the productuion build, need to dynamicly*/

  $('head').prepend('\u000D <link rel="stylesheet" href="styles.css">');

  fs.writeFile('dist/index.html', $.html(), 'utf8', function (err) {

    // fs.exists("dist/index.html", function(fileok){
    //   if(fileok)fs.readFile("dist/index.html", function(error, data) {
    //     console.log("Contents: " + data);
    //   });
    //   else console.log("file not found".yellow);
    // });
    // console.log("Carry on executing".green);


    if (err) {
      return console.log(err.red);
    }
    console.log('index.html written to /dist successffully'.america);
  });
});