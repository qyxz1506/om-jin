
(() => {
  window.OMJIN = window.OMJIN || {};

  window.OMJIN.speak = function (text) {
    if (!("speechSynthesis" in window)) {
      alert("Browser tidak mendukung pembaca suara.");
      return;
    }

    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "id-ID";
    speechSynthesis.speak(utterance);
  };
})();
