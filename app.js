const spreadCatalog = [
  {
    id: "single",
    name: "Single Card Insight",
    shortLabel: "1 card",
    description: "A quick pulse check when you need one clean message.",
    layoutClass: "spread-layout-single",
    positions: [
      {
        title: "Core Message",
        summary: "The clearest energy around your question.",
        purpose: "This card names the main truth asking for your attention right now."
      }
    ]
  },
  {
    id: "three",
    name: "Past, Present, Future",
    shortLabel: "3 cards",
    description: "A classic timeline spread for understanding how a situation is moving.",
    layoutClass: "spread-layout-three",
    positions: [
      {
        title: "Past",
        summary: "What has shaped the situation so far.",
        purpose: "This position shows the energy or history that led you into the current moment."
      },
      {
        title: "Present",
        summary: "What is most alive in the situation now.",
        purpose: "This position reveals what is active, visible, and ready to be acknowledged right now."
      },
      {
        title: "Future",
        summary: "Where the current path is pointing next.",
        purpose: "This position suggests the likely direction of the story if nothing essential changes."
      }
    ]
  },
  {
    id: "relationship",
    name: "Relationship Mirror",
    shortLabel: "4 cards",
    description: "Useful for partnerships, dating dynamics, and any two-person connection.",
    layoutClass: "spread-layout-relationship",
    positions: [
      {
        title: "You",
        summary: "What you are bringing into the connection.",
        purpose: "This position reveals your current stance, needs, or emotional posture."
      },
      {
        title: "Other Person",
        summary: "What the other side may be bringing.",
        purpose: "This position highlights the energy or perspective you are meeting across from you."
      },
      {
        title: "Dynamic",
        summary: "What the relationship between you is asking for.",
        purpose: "This position describes the heartbeat of the connection itself."
      },
      {
        title: "Growth Path",
        summary: "How the connection can move in a healthier direction.",
        purpose: "This position points toward the most useful next adjustment or invitation."
      }
    ]
  },
  {
    id: "decision",
    name: "Decision Compass",
    shortLabel: "5 cards",
    description: "Compares two paths and highlights what supports a wiser choice.",
    layoutClass: "spread-layout-decision",
    positions: [
      {
        title: "Option A",
        summary: "The feeling or promise of the first path.",
        purpose: "This position shows the energy that gathers when you lean toward one choice."
      },
      {
        title: "Option B",
        summary: "The feeling or promise of the second path.",
        purpose: "This position shows the energy that gathers when you lean toward the alternative choice."
      },
      {
        title: "Hidden Influence",
        summary: "What may be quietly steering the decision.",
        purpose: "This position uncovers motives, fears, or facts that may be harder to see."
      },
      {
        title: "Wise Choice",
        summary: "The posture that leads to the soundest decision.",
        purpose: "This position points toward the inner quality that will help you choose well."
      },
      {
        title: "Likely Outcome",
        summary: "The direction that becomes available when the lesson lands.",
        purpose: "This position offers the most probable result if you follow the reading honestly."
      }
    ]
  },
  {
    id: "celtic",
    name: "Celtic Cross Classic",
    shortLabel: "10 cards",
    description: "A fuller reading for layered questions, crossroads, and major life turns.",
    layoutClass: "spread-layout-celtic",
    positions: [
      {
        title: "Present Situation",
        summary: "Where you stand now.",
        purpose: "This card anchors the reading in the energy that is currently defining the situation."
      },
      {
        title: "Challenge",
        summary: "What crosses or complicates it.",
        purpose: "This position names the tension, block, or friction point in the story."
      },
      {
        title: "Foundation",
        summary: "What sits underneath the issue.",
        purpose: "This position reveals the root layer, past pattern, or emotional base underneath the question."
      },
      {
        title: "Recent Past",
        summary: "What is fading but still matters.",
        purpose: "This position shows what has just shaped the present and may still linger."
      },
      {
        title: "Conscious Aim",
        summary: "What you know, want, or are trying to reach.",
        purpose: "This position points to the thought, goal, or expectation at the top of your mind."
      },
      {
        title: "Near Future",
        summary: "What is arriving soon.",
        purpose: "This position reveals the next wave of movement if the present pattern keeps going."
      },
      {
        title: "Self",
        summary: "How you are positioned inside the matter.",
        purpose: "This position reflects your attitude, role, and current way of relating to the issue."
      },
      {
        title: "Environment",
        summary: "What surrounds you externally.",
        purpose: "This position highlights the people, pressures, or context around you."
      },
      {
        title: "Hopes and Fears",
        summary: "What you long for and worry about at once.",
        purpose: "This position reveals the emotional mix that can quietly shape your expectations."
      },
      {
        title: "Outcome",
        summary: "Where the reading resolves if its lesson is followed.",
        purpose: "This position gives the most likely landing point of the current energy."
      }
    ]
  }
];

const majorArcana = [
  {
    number: 0,
    name: "The Fool",
    keywords: ["beginnings", "trust", "open road"],
    upright: "A new path wants your courage more than your certainty.",
    reversed: "Fear of the unknown or careless leaps can make the next step feel unsteady."
  },
  {
    number: 1,
    name: "The Magician",
    keywords: ["will", "resourcefulness", "focus"],
    upright: "You already hold the tools to shape this moment with intention.",
    reversed: "Scattered attention or doubt can weaken your ability to use what you have."
  },
  {
    number: 2,
    name: "The High Priestess",
    keywords: ["intuition", "mystery", "inner knowing"],
    upright: "Quiet wisdom is available when you stop forcing clarity and listen inward.",
    reversed: "Signals are being ignored, overthought, or buried beneath noise."
  },
  {
    number: 3,
    name: "The Empress",
    keywords: ["nurture", "abundance", "creation"],
    upright: "Growth comes through care, patience, and allowing something to fully develop.",
    reversed: "Overgiving, creative blocks, or neglecting your own needs can thin your energy."
  },
  {
    number: 4,
    name: "The Emperor",
    keywords: ["structure", "leadership", "authority"],
    upright: "Steady structure and clear boundaries create the safety needed for progress.",
    reversed: "Control issues, rigidity, or resistance to responsibility may be distorting the situation."
  },
  {
    number: 5,
    name: "The Hierophant",
    keywords: ["tradition", "guidance", "shared wisdom"],
    upright: "There is value in proven guidance, ritual, or learning from established paths.",
    reversed: "Question whether convention still serves you or is keeping you smaller than necessary."
  },
  {
    number: 6,
    name: "The Lovers",
    keywords: ["choice", "union", "alignment"],
    upright: "This is about wholehearted alignment, not just attraction or preference.",
    reversed: "Mixed motives or misalignment can weaken commitment and clarity."
  },
  {
    number: 7,
    name: "The Chariot",
    keywords: ["momentum", "direction", "discipline"],
    upright: "Focused movement succeeds when your will, emotion, and action pull together.",
    reversed: "A loss of direction, impatience, or inner conflict can stall forward movement."
  },
  {
    number: 8,
    name: "Strength",
    keywords: ["courage", "gentle power", "steadiness"],
    upright: "Quiet courage and self-trust can tame what force alone cannot.",
    reversed: "Self-doubt, exhaustion, or avoiding the harder feeling may weaken your stance."
  },
  {
    number: 9,
    name: "The Hermit",
    keywords: ["reflection", "solitude", "inner lantern"],
    upright: "A slower, more private search for truth is wiser than rushing for answers.",
    reversed: "Isolation, avoidance, or refusing reflection can keep insight out of reach."
  },
  {
    number: 10,
    name: "Wheel of Fortune",
    keywords: ["cycles", "change", "timing"],
    upright: "The wheel is turning, and timing now matters as much as effort.",
    reversed: "Resisting change or trying to control the uncontrollable can create extra friction."
  },
  {
    number: 11,
    name: "Justice",
    keywords: ["truth", "balance", "accountability"],
    upright: "Clear-eyed honesty and fair choices bring the strongest long-term outcome.",
    reversed: "Bias, avoidance, or imbalance may be asking for correction."
  },
  {
    number: 12,
    name: "The Hanged Man",
    keywords: ["pause", "surrender", "new perspective"],
    upright: "Meaning emerges when you stop pushing and allow your perspective to change.",
    reversed: "The pause may feel frustrating because you are resisting the shift it requires."
  },
  {
    number: 13,
    name: "Death",
    keywords: ["ending", "release", "transformation"],
    upright: "Something needs to end so the next chapter has room to begin.",
    reversed: "Clinging to what is over can make transition longer and heavier."
  },
  {
    number: 14,
    name: "Temperance",
    keywords: ["integration", "patience", "balance"],
    upright: "Healing happens through moderation, blending, and respectful pacing.",
    reversed: "Extremes, impatience, or poor timing can keep things from settling."
  },
  {
    number: 15,
    name: "The Devil",
    keywords: ["attachment", "temptation", "shadow"],
    upright: "Look closely at the habits, fears, or attachments that are quietly binding you.",
    reversed: "There is real potential to loosen a pattern that has held too much power."
  },
  {
    number: 16,
    name: "The Tower",
    keywords: ["disruption", "revelation", "breakthrough"],
    upright: "A destabilizing truth can clear what was unsound and make honesty possible.",
    reversed: "The shake-up may be happening inwardly first, or denial may be delaying a needed release."
  },
  {
    number: 17,
    name: "The Star",
    keywords: ["hope", "renewal", "guiding light"],
    upright: "Hope returns when you act from sincerity rather than performance.",
    reversed: "Discouragement may be temporary, but it still asks for gentle restoration."
  },
  {
    number: 18,
    name: "The Moon",
    keywords: ["uncertainty", "instinct", "hidden tides"],
    upright: "Not everything is fully visible yet, so intuition matters as much as logic.",
    reversed: "Confusion can begin to lift when hidden dynamics are named out loud."
  },
  {
    number: 19,
    name: "The Sun",
    keywords: ["clarity", "joy", "confidence"],
    upright: "Warmth, confidence, and clearer truth are available here.",
    reversed: "Light is present, but worry or self-protection may be muting it."
  },
  {
    number: 20,
    name: "Judgement",
    keywords: ["calling", "awakening", "reckoning"],
    upright: "A deeper call asks you to answer honestly and rise into the next version of yourself.",
    reversed: "Self-criticism or hesitation may be delaying a decision your spirit already recognizes."
  },
  {
    number: 21,
    name: "The World",
    keywords: ["completion", "wholeness", "arrival"],
    upright: "A cycle is ready to come full circle, bringing integration and earned closure.",
    reversed: "A final lesson or loose end may need attention before true completion lands."
  }
];

const suitDefinitions = {
  wands: {
    label: "Wands",
    icon: "bi-fire",
    realm: "action, courage, passion, and creative momentum",
    keywords: ["spark", "action"],
    color: "ember"
  },
  cups: {
    label: "Cups",
    icon: "bi-droplet",
    realm: "emotion, intuition, connection, and vulnerability",
    keywords: ["feeling", "relationship"],
    color: "tide"
  },
  swords: {
    label: "Swords",
    icon: "bi-wind",
    realm: "thought, truth, conflict, and mental clarity",
    keywords: ["mind", "truth"],
    color: "storm"
  },
  pentacles: {
    label: "Pentacles",
    icon: "bi-coin",
    realm: "work, resources, body, and long-term stability",
    keywords: ["grounding", "resources"],
    color: "earth"
  }
};

const rankDefinitions = [
  {
    rank: "Ace",
    keywords: ["potential", "opening"],
    upright: "A fresh beginning is available in the realm of",
    reversed: "Untapped potential or a delayed beginning is lingering in the realm of"
  },
  {
    rank: "Two",
    keywords: ["choice", "balance"],
    upright: "A choice, exchange, or balancing act is shaping the realm of",
    reversed: "Indecision or imbalance is making the realm of difficult to steady"
  },
  {
    rank: "Three",
    keywords: ["growth", "expansion"],
    upright: "Growth through collaboration, discovery, or first results is appearing in the realm of",
    reversed: "Scattered effort or delayed progress is slowing the realm of"
  },
  {
    rank: "Four",
    keywords: ["structure", "stability"],
    upright: "A need for rest, structure, or stronger foundations is present in the realm of",
    reversed: "Restlessness or shaky structure is unsettling the realm of"
  },
  {
    rank: "Five",
    keywords: ["friction", "disruption"],
    upright: "Challenge, contrast, or tension is pushing growth in the realm of",
    reversed: "Avoided conflict or lingering instability is complicating the realm of"
  },
  {
    rank: "Six",
    keywords: ["adjustment", "transition"],
    upright: "Movement, support, or rebalancing is available in the realm of",
    reversed: "Progress is possible, but old weight is still slowing the realm of"
  },
  {
    rank: "Seven",
    keywords: ["assessment", "testing"],
    upright: "Discernment, patience, or strategic effort is required in the realm of",
    reversed: "Impatience or defensiveness is clouding the realm of"
  },
  {
    rank: "Eight",
    keywords: ["momentum", "skill"],
    upright: "Momentum, repetition, or deeper mastery is developing in the realm of",
    reversed: "Stagnation or rushed effort is interrupting the realm of"
  },
  {
    rank: "Nine",
    keywords: ["culmination", "intensity"],
    upright: "The realm of is approaching a peak that asks for maturity and awareness",
    reversed: "Strain, overextension, or hard-to-shake worry is hovering around the realm of"
  },
  {
    rank: "Ten",
    keywords: ["completion", "full cycle"],
    upright: "A full cycle, result, or heavier responsibility is completing itself in the realm of",
    reversed: "An overloaded cycle or unfinished release is lingering in the realm of"
  },
  {
    rank: "Page",
    keywords: ["curiosity", "learning"],
    upright: "A message, beginner's mindset, or new sensitivity is entering the realm of",
    reversed: "Immaturity, avoidance, or mixed signals are blurring the realm of"
  },
  {
    rank: "Knight",
    keywords: ["drive", "motion"],
    upright: "Strong movement, pursuit, or focused drive is charging through the realm of",
    reversed: "Impulsiveness, hesitation, or misdirected force is disturbing the realm of"
  },
  {
    rank: "Queen",
    keywords: ["embodiment", "maturity"],
    upright: "An embodied, intuitive, or deeply practiced approach is strengthening the realm of",
    reversed: "Withheld wisdom or emotional imbalance is affecting the realm of"
  },
  {
    rank: "King",
    keywords: ["mastery", "authority"],
    upright: "Leadership, command, or mature stewardship is defining the realm of",
    reversed: "Control issues or misused authority are distorting the realm of"
  }
];

const elements = {
  spreadPicker: document.querySelector("#spreadPicker"),
  spreadPreviewTitle: document.querySelector("#spreadPreviewTitle"),
  spreadPreviewCount: document.querySelector("#spreadPreviewCount"),
  spreadPreviewDescription: document.querySelector("#spreadPreviewDescription"),
  spreadPreviewPositions: document.querySelector("#spreadPreviewPositions"),
  questionInput: document.querySelector("#questionInput"),
  drawButton: document.querySelector("#drawButton"),
  resetButton: document.querySelector("#resetButton"),
  resultsSection: document.querySelector("#readingResults"),
  readingTitle: document.querySelector("#readingTitle"),
  readingQuestion: document.querySelector("#readingQuestion"),
  readingMeta: document.querySelector("#readingMeta"),
  readingSummary: document.querySelector("#readingSummary"),
  cardsContainer: document.querySelector("#cardsContainer"),
  readingTakeaways: document.querySelector("#readingTakeaways")
};

const tarotDeck = buildDeck();
let selectedSpreadId = "three";

initialize();

function initialize() {
  renderSpreadPicker();
  renderSpreadPreview();
  elements.drawButton.addEventListener("click", handleDraw);
  elements.resetButton.addEventListener("click", resetReading);
  elements.questionInput.addEventListener("input", () => {
    elements.questionInput.classList.remove("is-invalid");
  });
}

function buildDeck() {
  const majorCards = majorArcana.map((card) => ({
    id: `major-${card.number}`,
    kind: "major",
    suitKey: "major",
    suit: "Major Arcana",
    icon: "bi-stars",
    ...card
  }));

  const minorCards = Object.entries(suitDefinitions).flatMap(([suitKey, suitConfig]) =>
    rankDefinitions.map((rankConfig) => ({
      id: `${rankConfig.rank.toLowerCase()}-${suitKey}`,
      kind: "minor",
      suitKey,
      suit: suitConfig.label,
      icon: suitConfig.icon,
      name: `${rankConfig.rank} of ${suitConfig.label}`,
      keywords: [...rankConfig.keywords, ...suitConfig.keywords],
      upright: `${rankConfig.upright} ${suitConfig.realm}.`,
      reversed: `${rankConfig.reversed} ${suitConfig.realm}.`
    }))
  );

  return [...majorCards, ...minorCards];
}

function renderSpreadPicker() {
  elements.spreadPicker.innerHTML = spreadCatalog
    .map(
      (spread) => `
        <div class="col-md-6">
          <button
            type="button"
            class="spread-choice ${spread.id === selectedSpreadId ? "is-active" : ""}"
            data-spread-id="${spread.id}"
            aria-pressed="${spread.id === selectedSpreadId ? "true" : "false"}"
          >
            <div class="spread-choice__eyebrow">
              <span>${spread.shortLabel}</span>
              <i class="bi bi-sparkles"></i>
            </div>
            <div class="spread-choice__title">${spread.name}</div>
            <p class="spread-choice__description">${spread.description}</p>
          </button>
        </div>
      `
    )
    .join("");

  elements.spreadPicker.querySelectorAll("[data-spread-id]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedSpreadId = button.dataset.spreadId;
      renderSpreadPicker();
      renderSpreadPreview();
    });
  });
}

function renderSpreadPreview() {
  const spread = getSelectedSpread();
  elements.spreadPreviewTitle.textContent = spread.name;
  elements.spreadPreviewCount.textContent = `${spread.positions.length} cards`;
  elements.spreadPreviewDescription.textContent = spread.description;
  elements.spreadPreviewPositions.innerHTML = spread.positions
    .map(
      (position, index) => `
        <div class="col-md-6">
          <div class="spread-position-preview">
            <div class="spread-position-preview__index">${index + 1}</div>
            <div class="spread-position-preview__title">${position.title}</div>
            <p class="spread-position-preview__copy">${position.summary}</p>
          </div>
        </div>
      `
    )
    .join("");
}

function handleDraw() {
  const question = elements.questionInput.value.trim();

  if (!question) {
    elements.questionInput.classList.add("is-invalid");
    elements.questionInput.focus();
    return;
  }

  const spread = getSelectedSpread();
  const draws = drawCards(spread.positions.length);
  renderReading(spread, question, draws);
}

function drawCards(count) {
  const shuffled = [...tarotDeck];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }

  return shuffled.slice(0, count).map((card) => ({
    ...card,
    isReversed: Math.random() < 0.35
  }));
}

function renderReading(spread, question, draws) {
  elements.resultsSection.hidden = false;
  elements.readingTitle.textContent = spread.name;
  elements.readingQuestion.textContent = question;
  elements.readingMeta.textContent = `${spread.positions.length} cards · ${countReversed(draws)} reversed`;
  elements.cardsContainer.className = `cards-container ${spread.layoutClass}`;

  const overallInsight = buildOverallInsight(spread, question, draws);
  elements.readingSummary.innerHTML = `
    <h3>${overallInsight.headline}</h3>
    <p class="mb-0">${overallInsight.summary}</p>
  `;

  elements.cardsContainer.innerHTML = draws
    .map((draw, index) => renderReadingCard(draw, spread.positions[index]))
    .join("");

  elements.readingTakeaways.innerHTML = `
    <h3 class="takeaways-title">What to carry forward</h3>
    <ul class="takeaways-list">
      ${overallInsight.takeaways.map((item) => `<li>${item}</li>`).join("")}
    </ul>
  `;

  elements.resultsSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderReadingCard(draw, position) {
  const meaning = draw.isReversed ? draw.reversed : draw.upright;
  const interpretation = buildCardInterpretation(draw, position);
  const orientationLabel = draw.isReversed ? "Reversed" : "Upright";

  return `
    <article class="reading-card">
      <div class="reading-card__inner">
        <div class="reading-card__header">
          <div>
            <div class="reading-card__position">${position.title}</div>
            <div class="reading-card__orientation">${orientationLabel}</div>
          </div>
          <span class="reading-card__orientation">Position ${getSelectedSpread().positions.indexOf(position) + 1}</span>
        </div>

        <div class="reading-card__deck">
          <div class="card-face ${draw.isReversed ? "card-face--reversed" : ""}">
            <div class="card-face__top">
              <span class="card-face__icon"><i class="bi ${draw.icon}"></i></span>
              <span class="card-face__subtitle">${orientationLabel}</span>
            </div>
            <div class="card-face__middle">
              <div class="card-face__title">${draw.name}</div>
            </div>
            <div class="card-face__bottom">
              <span class="card-face__subtitle">${draw.suit}</span>
              <span class="card-face__subtitle">${draw.kind === "major" ? "Major" : "Minor"}</span>
            </div>
          </div>

          <div>
            <h3 class="reading-card__title">${draw.name}</h3>
            <div class="reading-card__subtitle">${position.summary}</div>
            <div class="reading-card__keywords">
              ${draw.keywords.map((keyword) => `<span>${keyword}</span>`).join("")}
            </div>
            <p class="reading-card__text">
              ${meaning} ${interpretation}
            </p>
          </div>
        </div>
      </div>
    </article>
  `;
}

function buildCardInterpretation(draw, position) {
  const realmSentence =
    draw.kind === "major"
      ? "Because this is a major arcana card, the message has extra weight and likely touches a larger turning point."
      : `As a ${draw.suit.toLowerCase()} card, it especially emphasizes ${suitDefinitions[draw.suitKey].realm}.`;

  const orientationSentence = draw.isReversed
    ? "Its reversed position suggests the work is more internal, delayed, or tangled than it first appears."
    : "Its upright position suggests the energy is available and easier to work with directly.";

  return `${position.purpose} ${realmSentence} ${orientationSentence}`;
}

function buildOverallInsight(spread, question, draws) {
  const majorCount = draws.filter((draw) => draw.kind === "major").length;
  const reversedCount = countReversed(draws);
  const leadingSuitKey = getLeadingSuit(draws);
  const finalDraw = draws[draws.length - 1];
  const leadingSuitText = leadingSuitKey
    ? `${suitDefinitions[leadingSuitKey].label} dominate the reading, bringing ${suitDefinitions[leadingSuitKey].realm} to the foreground.`
    : "The reading is evenly mixed, which suggests the question touches several areas of life at once.";
  const majorText =
    majorCount >= Math.ceil(draws.length / 3)
      ? "Several major arcana cards are present, so this feels less like a passing mood and more like a meaningful turning point."
      : "Most of the spread lives in the minor arcana, which points toward practical choices, habits, and day-to-day dynamics.";
  const reversalText =
    reversedCount >= Math.ceil(draws.length / 2)
      ? "With many reversed cards, the reading asks for honesty, patience, and internal course correction before big action."
      : "With more upright than reversed cards, the reading favors visible movement and clearer next steps.";
  const closingMessage = finalDraw.isReversed ? finalDraw.reversed : finalDraw.upright;
  const escapedQuestion = escapeHtml(question);

  return {
    headline: createHeadline(spread, draws),
    summary: `For the question "${escapedQuestion}", this ${spread.name.toLowerCase()} points to a reading shaped by ${leadingSuitText.toLowerCase()} ${majorText} ${reversalText} The spread closes with ${finalDraw.name} in the ${spread.positions[spread.positions.length - 1].title.toLowerCase()} position, suggesting that ${closingMessage.toLowerCase()}`,
    takeaways: [
      leadingSuitKey
        ? `Give extra attention to ${suitDefinitions[leadingSuitKey].realm}, because that is where the reading is concentrating its energy.`
        : "Treat this as a whole-life reading and notice which part of the spread stirred the strongest reaction in you.",
      reversedCount > 0
        ? "Do not rush past the reversed cards. They usually mark the places where your real work is quieter, more private, or not yet fully named."
        : "Use the momentum in the upright cards quickly so the reading becomes action instead of only reflection.",
      `Anchor your next step in the final position, ${spread.positions[spread.positions.length - 1].title}, by asking how ${finalDraw.name} wants to be expressed in real life.`
    ]
  };
}

function createHeadline(spread, draws) {
  const majorCount = draws.filter((draw) => draw.kind === "major").length;
  const leadingSuitKey = getLeadingSuit(draws);

  if (majorCount >= Math.ceil(draws.length / 2)) {
    return "This reading carries turning-point energy.";
  }

  if (leadingSuitKey === "cups") {
    return "Emotion and intuition are leading the message.";
  }

  if (leadingSuitKey === "wands") {
    return "Action and creative courage are at the center of this spread.";
  }

  if (leadingSuitKey === "swords") {
    return "Truth, tension, and clear thinking are shaping the reading.";
  }

  if (leadingSuitKey === "pentacles") {
    return "The cards are grounding the question in practical reality.";
  }

  return `${spread.name} is asking for a balanced read of the whole picture.`;
}

function getLeadingSuit(draws) {
  const counts = draws.reduce((accumulator, draw) => {
    if (draw.kind === "minor") {
      accumulator[draw.suitKey] = (accumulator[draw.suitKey] || 0) + 1;
    }

    return accumulator;
  }, {});

  const sorted = Object.entries(counts).sort((left, right) => right[1] - left[1]);

  if (!sorted.length) {
    return null;
  }

  if (sorted.length > 1 && sorted[0][1] === sorted[1][1]) {
    return null;
  }

  return sorted[0][0];
}

function countReversed(draws) {
  return draws.filter((draw) => draw.isReversed).length;
}

function getSelectedSpread() {
  return spreadCatalog.find((spread) => spread.id === selectedSpreadId);
}

function resetReading() {
  elements.questionInput.value = "";
  elements.questionInput.classList.remove("is-invalid");
  elements.resultsSection.hidden = true;
  elements.readingSummary.innerHTML = "";
  elements.cardsContainer.innerHTML = "";
  elements.readingTakeaways.innerHTML = "";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
