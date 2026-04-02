(function buildOraclePhraseLibrary() {
  const subjects = [
    "The path ahead",
    "The next answer",
    "The quiet door",
    "Right timing",
    "The deeper truth",
    "The waiting chapter",
    "The turning point",
    "The hidden blessing",
    "The returning light",
    "Your future self"
  ];

  const bridges = [
    "is hidden in",
    "is revealed through",
    "is protected by",
    "is clarified by",
    "is softened by",
    "is steadied by",
    "is opened by",
    "is guided by",
    "is restored through",
    "is shaped by"
  ];

  const endings = [
    "patient listening",
    "a gentler pace",
    "honest restraint",
    "one brave question",
    "clearer boundaries",
    "trusting what is ripening",
    "the courage to pause",
    "choosing less noise",
    "letting the old season close",
    "steady inner truth"
  ];

  const phrases = [];

  subjects.forEach((subject) => {
    bridges.forEach((bridge) => {
      endings.forEach((ending) => {
        phrases.push(`${subject} ${bridge} ${ending}.`);
      });
    });
  });

  const uniquePhrases = Array.from(new Set(phrases));

  if (uniquePhrases.length !== 1000) {
    throw new Error(`Expected 1000 oracle phrases, received ${uniquePhrases.length}.`);
  }

  window.ORACLE_PHRASES = uniquePhrases;
})();
