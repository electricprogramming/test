const languages = {
    "English": "en",
    "Chinese": "zh",
    "Spanish": "es",
    "Hindi": "hi",
    "Arabic": "ar",
    "French": "fr",
    "Bengali": "bn",
    "Portuguese": "pt",
    "Russian": "ru",
    "German": "de"
}
const reverseLanguages = {
    "en": "English",
    "zh": "Chinese",
    "es": "Spanish",
    "hi": "Hindi",
    "ar": "Arabic",
    "fr": "French",
    "bn": "Bengali",
    "pt": "Portuguese",
    "ru": "Russian",
    "de": "German"
}
const languages = {
  getCodeByName: function(name) {
    return languages[name];
  },

  getNameByCode: function(code) {
    return reverseLanguages[code];
  }
};
export default languages;
