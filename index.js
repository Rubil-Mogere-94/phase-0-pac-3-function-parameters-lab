function introduction(name) {
  return `Hi, my name is ${name}.`;
}

function introductionWithLanguage(name, language) {
  return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

function introductionWithLanguageOptional(name, language = "JavaScript") {
  return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

// Export the functions so the tests can access them
module.exports = {
  introduction,
  introductionWithLanguage,
  introductionWithLanguageOptional
};
