const map1 = {
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
const map2 = {
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
    return map1[name];
  },

  getNameByCode: function(code) {
    return map2[code];
  }
};
export default languages;
