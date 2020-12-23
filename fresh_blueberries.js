const open = require('open');
const fs = require('fs');
const util = require('util');
const { mainPageContent, mainPageHead,
        mainPageStyles, mainPageScripts } = require('./page_content');
const createMovieCardsContent = require('./cards');
const access = util.promisify(fs.access);
const mkdir = util.promisify(fs.mkdir);
const writeFile = util.promisify(fs.writeFile);

/**
 * Open a browser to show movies content
 *
 * @params {Object} movie
 * @return
 * @public
 */
const openMovieCardsPage = function(movies) {
  // Create or overwrite the output file
  const movieCardsContent = createMovieCardsContent(movies);
  const renderedContent = mainPageContent.replace('{movieCards}', movieCardsContent);
  const indexContent = mainPageHead + renderedContent;

  createFileWithContent('.', 'index.html', indexContent);

  // Create a styles directory and a css file
  (async function createStyles() {
    const dirStylesExists = await getDirExists('styles');
    if (!dirStylesExists) {
      await createDir('styles');
    }
    await createFileWithContent('styles', 'style.css', mainPageStyles);
  })();

  // Create a scripts directory and a js file
  (async function createScripts() {
    const dirScriptsExists = await getDirExists('scripts');
    if (!dirScriptsExists) {
      await createDir('scripts');
    }
    await createFileWithContent('scripts', 'script.js', mainPageScripts);
  })();

  console.log('Opening page...');
  open('index.html');
}

/**
 * Create a directory
 *
 * @param {String} directory name
 * @return
 * @private
 */
async function createDir(dir) {
  const promise = new Promise((resolve, reject) => {
    mkdir('./' + dir, (err) => {
      if (err) reject({ error: err });
      resolve({ msg: `directory ${dir} created` });
    });
  });
  await promise.then(r => console.log(r.msg)).catch(e => consol.log(e.error));
}

/**
 * Create a file in a directory
 *
 * @param {String} directory name
 * @param {String} file name
 * @Param {String} content
 * @return
 * @private
 */
async function createFileWithContent(dir, file, content) {
  const promise = new Promise((resolve, reject) => {
    writeFile('./' + dir + '/' + file, content, (err) => {
      if (err) reject({ error: err });
      resolve({ msg: `file ${file} created` });
    });
  });
  await promise.then(r => console.log(r.msg)).catch(e => console.log(e.error));
}

/**
 * Check if a directory exists
 *
 * @param {String} directory name
 * @param {Function} callback
 * @return {Boolean} true
 * @private
 */
async function getDirExists(dir) {
  const promise = new Promise((resolve, reject) => {
    access('./' + dir, fs.constants.F_OK, (err) => {
      if (err) return reject(false);
      return resolve(true);
    });
  });
  const dirExists = await promise.then(r => r).catch(e => e);
  return dirExists;
}

module.exports = openMovieCardsPage;
