(() => {
  "use strict";

  const WORDS = [
    "which", "there", "their", "about", "would", "these", "other", "words", "could", "write",
    "first", "water", "after", "where", "right", "think", "three", "years", "place", "sound",
    "great", "again", "still", "every", "small", "found", "those", "never", "under", "might",
    "while", "house", "world", "below", "asked", "going", "large", "until", "along", "shall",
    "being", "often", "earth", "began", "since", "study", "night", "light", "above", "paper",
    "parts", "young", "story", "point", "times", "heard", "whole", "white", "given", "means",
    "music", "miles", "thing", "today", "later", "using", "money", "lines", "order", "group",
    "among", "learn", "known", "space", "table", "early", "trees", "short", "hands", "state",
    "black", "shown", "stood", "front", "voice", "kinds", "makes", "comes", "close", "power",
    "lived", "vowel", "taken", "built", "heart", "ready", "quite", "class", "bring", "round",
    "horse", "shows", "piece", "green", "stand", "birds", "start", "river", "tried", "least",
    "field", "whose", "girls", "leave", "added", "color", "third", "hours", "moved", "plant",
    "doing", "names", "forms", "heavy", "ideas", "cried", "check", "floor", "begin", "woman",
    "alone", "plane", "spell", "watch", "carry", "wrote", "clear", "named", "books", "child",
    "glass", "human", "takes", "party", "build", "seems", "blood", "sides", "seven", "mouth",
    "solve", "north", "value", "death", "maybe", "happy", "tells", "gives", "looks", "shape",
    "lives", "steps", "areas", "sense", "speak", "force", "ocean", "speed", "women", "metal",
    "south", "grass", "scale", "cells", "lower", "sleep", "wrong", "pages", "ships", "needs",
    "rocks", "eight", "major", "level", "total", "ahead", "reach", "stars", "store", "sight",
    "terms", "catch", "works", "board", "cover", "songs", "equal", "stone", "waves", "guess",
    "dance", "spoke", "break", "cause", "radio", "weeks", "lands", "basic", "liked", "trade",
    "fresh", "final", "fight", "meant", "drive", "spent", "local", "waxes", "knows", "train",
    "bread", "homes", "teeth", "coast", "thick", "brown", "clean", "quiet", "sugar", "facts",
    "steel", "forth", "rules", "notes", "units", "peace", "month", "verbs", "seeds", "helps",
    "sharp", "visit", "woods", "chief", "walls", "cross", "wings", "grown", "cases", "foods",
    "crops", "fruit", "stick", "wants", "stage", "sheep", "nouns", "plain", "drink", "bones",
    "apart", "turns", "moves", "touch", "angle", "based", "range", "marks", "tired", "older",
    "farms", "spend", "shoes", "goods", "chair", "twice", "cents", "empty", "alike", "style",
    "broke", "pairs", "count", "enjoy", "score", "shore", "roots", "paint", "heads", "shook",
    "serve", "angry", "crowd", "wheel", "quick", "dress", "share", "alive", "noise", "solid",
    "cloth", "signs", "hills", "types", "drawn", "worth", "truck", "piano", "upper", "loved",
    "usual", "faces", "drove", "cabin", "boats", "towns", "proud", "court", "model", "prime",
    "fifty", "plans", "yards", "prove", "tools", "price", "sheet", "smell", "boxes", "raise",
    "match", "truth", "roads", "threw", "enemy", "lunch", "chart", "scene", "graph", "doubt",
    "guide", "winds", "block", "grain", "smoke", "mixed", "games", "wagon", "sweet", "topic",
    "extra", "plate", "title", "knife", "fence", "falls", "cloud", "wheat", "plays", "enter",
    "broad", "steam", "atoms", "press", "lying", "basis", "clock", "taste", "grows", "thank",
    "storm", "agree", "brain", "track", "smile", "funny", "beach", "stock", "hurry", "saved",
    "sorry", "giant", "trail", "offer", "ought", "rough", "daily", "avoid", "keeps", "throw",
    "allow", "cream", "laugh", "edges", "teach", "frame", "bells", "dream", "magic", "occur",
    "ended", "chord", "false", "skill", "holes", "dozen", "brave", "apple", "climb", "outer",
    "pitch", "ruler", "holds", "fixed", "costs", "calls", "blank", "staff", "labor", "eaten",
    "youth", "tones", "honor", "globe", "gases", "doors", "poles", "loose", "apply", "tears",
    "exact", "brush", "chest", "layer", "whale", "minor", "faith", "tests", "judge", "items",
    "worry", "waste", "hoped", "strip", "begun", "aside", "lakes", "bound", "depth", "candy",
    "event", "worse", "aware", "shell", "rooms", "ranch", "image", "snake", "aloud", "dried",
    "likes", "motor", "pound", "knees", "refer", "fully", "chain", "shirt", "flour", "drops",
    "spite", "orbit", "banks", "shoot", "curve", "tribe", "tight", "blind", "slept", "shade",
    "claim", "flies", "theme", "queen", "fifth", "union", "hence", "straw", "entry", "issue",
    "birth", "feels", "anger", "brief", "rhyme", "glory", "guard", "flows", "flesh", "owned",
    "trick", "yours", "sizes", "noted", "width", "burst", "route", "lungs", "uncle", "bears",
    "royal", "kings", "forty", "trial", "cards", "brass", "opera", "chose", "owner", "vapor",
    "beats", "mouse", "tough", "wires", "meter", "tower", "finds", "inner", "stuck", "arrow",
    "poems", "label", "swing", "solar", "truly", "tense", "beans", "split", "rises", "weigh",
    "hotel", "stems", "pride", "swung", "grade", "digit", "badly", "boots", "pilot", "sales",
    "swept", "lucky", "prize", "stove", "tubes", "acres", "wound", "steep", "slide", "trunk",
    "error", "porch", "slave", "exist", "faced", "mines", "marry", "juice", "raced", "waved",
    "goose", "trust", "fewer", "favor", "mills", "views", "joint", "eager", "spots", "blend",
    "rings", "adult", "index", "nails", "horns", "balls", "flame", "rates", "drill", "trace",
    "skins", "waxed", "seats", "stuff", "ratio", "minds", "silly", "coins", "hello", "trips"
  ];
  const MAX_TRIES = 6;
  const board = document.querySelector("#board");
  const form = document.querySelector("#guess-form");
  const input = document.querySelector("#guess-input");
  const submitButton = document.querySelector("#submit-button");
  const feedback = document.querySelector("#feedback");
  const triesLeft = document.querySelector("#tries-left");
  const inputCount = document.querySelector("#input-count");
  const restartButton = document.querySelector("#restart-button");
  let target = "";
  let currentRow = 0;
  let finished = false;
  let puzzle = 1;

  function makeBoard() {
    board.replaceChildren();
    for (let row = 0; row < MAX_TRIES; row += 1) {
      for (let col = 0; col < 5; col += 1) {
        const tile = document.createElement("div");
        tile.className = "tile";
        tile.setAttribute("role", "gridcell");
        tile.setAttribute("aria-label", `Row ${row + 1}, letter ${col + 1}, empty`);
        tile.dataset.row = String(row);
        tile.dataset.col = String(col);
        board.append(tile);
      }
    }
  }

  function chooseWord() {
    return WORDS[Math.floor(Math.random() * WORDS.length)];
  }

  function tileAt(row, col) {
    return board.querySelector(`[data-row="${row}"][data-col="${col}"]`);
  }

  function setFeedback(message, type = "") {
    feedback.textContent = message;
    feedback.className = `feedback${type ? ` ${type}` : ""}`;
  }

  function evaluateGuess(guess) {
    const result = Array(5).fill("absent");
    const remaining = target.split("");
    for (let i = 0; i < 5; i += 1) {
      if (guess[i] === target[i]) {
        result[i] = "correct";
        remaining[i] = null;
      }
    }
    for (let i = 0; i < 5; i += 1) {
      if (result[i] === "correct") continue;
      const match = remaining.indexOf(guess[i]);
      if (match !== -1) {
        result[i] = "present";
        remaining[match] = null;
      }
    }
    return result;
  }

  function finish(won) {
    finished = true;
    input.disabled = true;
    submitButton.disabled = true;
    restartButton.hidden = false;
    if (won) {
      setFeedback(`Brilliant! You found “${target.toUpperCase()}” in ${currentRow} ${currentRow === 1 ? "try" : "tries"}.`, "success");
    } else {
      setFeedback(`Game over — the word was “${target.toUpperCase()}”. Give it another go?`, "game-over");
    }
    input.setAttribute("aria-label", "Game finished. Start a new game to guess another word.");
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (finished) return;
    const guess = input.value.trim().toLowerCase();
    if (!/^[a-z]{5}$/.test(guess)) {
      setFeedback("Please enter a word with exactly five letters.", "error");
      input.focus();
      return;
    }

    const result = evaluateGuess(guess);
    for (let col = 0; col < 5; col += 1) {
      const tile = tileAt(currentRow, col);
      tile.textContent = guess[col];
      tile.classList.add("filled", result[col], "reveal");
      tile.style.animationDelay = `${col * 90}ms`;
      tile.setAttribute("aria-label", `Row ${currentRow + 1}, letter ${col + 1}, ${guess[col]}, ${result[col]}`);
    }

    currentRow += 1;
    triesLeft.textContent = String(MAX_TRIES - currentRow);
    input.value = "";
    inputCount.textContent = "0 / 5";

    if (guess === target) {
      finish(true);
    } else if (currentRow === MAX_TRIES) {
      finish(false);
    } else {
      const remaining = MAX_TRIES - currentRow;
      setFeedback(`Not quite. ${remaining} ${remaining === 1 ? "guess" : "guesses"} ${remaining === 1 ? "remains" : "remain"}.`);
      input.focus();
    }
  });

  input.addEventListener("input", () => {
    const clean = input.value.replace(/[^a-z]/gi, "").slice(0, 5).toUpperCase();
    if (input.value !== clean) input.value = clean;
    inputCount.textContent = `${clean.length} / 5`;
    if (feedback.classList.contains("error")) setFeedback("Your first guess is just a tap away.");
  });

  restartButton.addEventListener("click", () => {
    puzzle += 1;
    startGame();
    input.focus();
  });

  function startGame() {
    target = chooseWord();
    currentRow = 0;
    finished = false;
    makeBoard();
    input.disabled = false;
    input.value = "";
    input.removeAttribute("aria-label");
    submitButton.disabled = false;
    restartButton.hidden = true;
    triesLeft.textContent = String(MAX_TRIES);
    inputCount.textContent = "0 / 5";
    document.querySelector("#puzzle-number").textContent = String(puzzle).padStart(3, "0");
    setFeedback("Your first guess is just a tap away.");
  }

  startGame();
})();

