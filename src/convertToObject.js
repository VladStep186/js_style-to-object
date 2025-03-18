'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // const cutString = sourceString.split(';');
  // const deleteSpace = cutString.filter((key) => key.trim());

  // const result = deleteSpace.reduce((acc, style) => {
  //   const [property, value] = style.split(':').map((part) => part.trim());

  //   acc[property] = value;

  //   return acc;
  // }, {});

  // return result;


  const cssObject = sourceString
    .split(';')
    .filter(deleteSpace => deleteSpace.trim())
    .map(style => style.split(':').map(part => part.trim()))
    .reduce((styles, [property, value]) => {
      styles[property] = value;

      return styles;
    }, {});

  return cssObject;
}

module.exports = convertToObject;
