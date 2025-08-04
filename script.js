const quizData = {
  webdev: {
    1: [
      // Easy Level - 10 questions
      {
        q: "What does HTML stand for?",
        options: [
          "Hyper Text Markup Language",
          "High Tech Modern Language",
          "Home Tool Markup Language",
          "Hyperlink Text Markup Language",
        ],
        correct: 0,
      },
      {
        q: "Which tag is used to create a paragraph in HTML?",
        options: ["<paragraph>", "<p>", "<para>", "<text>"],
        correct: 1,
      },
      {
        q: "What does CSS stand for?",
        options: ["Computer Style Sheets", "Creative Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"],
        correct: 2,
      },
      {
        q: "Which HTML tag is used to create a link?",
        options: ["<link>", "<a>", "<href>", "<url>"],
        correct: 1,
      },
      {
        q: "What is the correct way to comment in HTML?",
        options: ["// comment", "/* comment */", "<!-- comment -->", "# comment"],
        correct: 2,
      },
      {
        q: "Which CSS property is used to change text color?",
        options: ["font-color", "text-color", "color", "foreground-color"],
        correct: 2,
      },
      {
        q: "What is the correct way to create a function in JavaScript?",
        options: [
          "function = myFunction() {}",
          "function myFunction() {}",
          "create myFunction() {}",
          "def myFunction() {}",
        ],
        correct: 1,
      },
      {
        q: "Which HTML tag is used to link an external CSS file?",
        options: ["<css>", "<link>", "<style>", "<stylesheet>"],
        correct: 1,
      },
      {
        q: "What is the default display property of a div element?",
        options: ["inline", "block", "inline-block", "flex"],
        correct: 1,
      },
      {
        q: "Which JavaScript method is used to add an element to the end of an array?",
        options: ["push()", "add()", "append()", "insert()"],
        correct: 0,
      },
    ],
    2: [
      // Medium Level - 10 questions
      {
        q: "What is the difference between '==' and '===' in JavaScript?",
        options: ["No difference", "=== checks type and value", "== is faster", "=== is deprecated"],
        correct: 1,
      },
      {
        q: "Which CSS property is used to create flexbox layout?",
        options: ["display: flex", "layout: flex", "flex: true", "flexbox: on"],
        correct: 0,
      },
      {
        q: "What is closure in JavaScript?",
        options: [
          "A way to close functions",
          "Function with access to outer scope",
          "A loop structure",
          "An error handling method",
        ],
        correct: 1,
      },
      {
        q: "Which CSS unit is relative to the viewport width?",
        options: ["px", "em", "vw", "rem"],
        correct: 2,
      },
      {
        q: "What is the purpose of 'use strict' in JavaScript?",
        options: ["Makes code faster", "Enables strict mode", "Imports libraries", "Creates constants"],
        correct: 1,
      },
      {
        q: "Which CSS property controls the stacking order of elements?",
        options: ["stack-order", "z-index", "layer", "position-index"],
        correct: 1,
      },
      {
        q: "What is the difference between let and var in JavaScript?",
        options: ["No difference", "let has block scope", "var is faster", "let is deprecated"],
        correct: 1,
      },
      {
        q: "Which CSS selector has the highest specificity?",
        options: ["ID selector", "Class selector", "Element selector", "Universal selector"],
        correct: 0,
      },
      {
        q: "What is the DOM in web development?",
        options: ["Data Object Model", "Document Object Model", "Dynamic Object Model", "Display Object Model"],
        correct: 1,
      },
      {
        q: "Which method is used to select an element by ID in JavaScript?",
        options: ["getElementById()", "selectById()", "getElement()", "findById()"],
        correct: 0,
      },
    ],
    3: [
      // Hard Level - 10 questions
      {
        q: "What is the event loop in JavaScript?",
        options: ["A for loop", "Mechanism for handling async operations", "A debugging tool", "A type of function"],
        correct: 1,
      },
      {
        q: "Which CSS property creates a new stacking context?",
        options: ["position: relative", "z-index: 1", "opacity: 0.99", "All of the above"],
        correct: 3,
      },
      {
        q: "What is the difference between call() and apply() in JavaScript?",
        options: [
          "No difference",
          "call() takes arguments separately, apply() takes array",
          "apply() is faster",
          "call() is deprecated",
        ],
        correct: 1,
      },
      {
        q: "What is CSS specificity calculation?",
        options: [
          "Random priority",
          "Inline(1000) > ID(100) > Class(10) > Element(1)",
          "Alphabetical order",
          "File order only",
        ],
        correct: 1,
      },
      {
        q: "What is hoisting in JavaScript?",
        options: [
          "Moving variables to top",
          "Variable and function declarations moved to top of scope",
          "A performance optimization",
          "An error type",
        ],
        correct: 1,
      },
      {
        q: "What is the difference between WeakMap and Map in JavaScript?",
        options: [
          "WeakMap keys must be objects and are weakly referenced",
          "WeakMap is faster",
          "No difference",
          "WeakMap stores less data",
        ],
        correct: 0,
      },
      {
        q: "What is the Temporal Dead Zone in JavaScript?",
        options: [
          "Memory leak",
          "Time before let/const variables are initialized",
          "Async function delay",
          "Error handling zone",
        ],
        correct: 1,
      },
      {
        q: "What is CSS Grid's difference from Flexbox?",
        options: ["No difference", "Grid is 2D, Flexbox is 1D", "Grid is older", "Flexbox is faster"],
        correct: 1,
      },
      {
        q: "What is a Promise in JavaScript?",
        options: [
          "A guarantee",
          "Object representing eventual completion of async operation",
          "A loop",
          "A variable type",
        ],
        correct: 1,
      },
      {
        q: "What is the difference between microtasks and macrotasks?",
        options: [
          "Size difference",
          "Microtasks have higher priority in event loop",
          "No difference",
          "Macrotasks are faster",
        ],
        correct: 1,
      },
    ],
  },
  history: {
    1: [
      // Easy Level - 10 questions
      {
        q: "Who was the first President of the United States?",
        options: ["Thomas Jefferson", "George Washington", "John Adams", "Benjamin Franklin"],
        correct: 1,
      },
      {
        q: "In which year did World War II end?",
        options: ["1944", "1945", "1946", "1947"],
        correct: 1,
      },
      {
        q: "Which country gifted the Statue of Liberty to the USA?",
        options: ["England", "Spain", "France", "Italy"],
        correct: 2,
      },
      {
        q: "Who was the first man to walk on the moon?",
        options: ["Buzz Aldrin", "Neil Armstrong", "John Glenn", "Alan Shepard"],
        correct: 1,
      },
      {
        q: "Which ancient wonder was located in Egypt?",
        options: ["Hanging Gardens", "Colossus of Rhodes", "Great Pyramid of Giza", "Lighthouse of Alexandria"],
        correct: 2,
      },
      {
        q: "The Berlin Wall fell in which year?",
        options: ["1987", "1988", "1989", "1990"],
        correct: 2,
      },
      {
        q: "Who painted the ceiling of the Sistine Chapel?",
        options: ["Leonardo da Vinci", "Raphael", "Michelangelo", "Donatello"],
        correct: 2,
      },
      {
        q: "Which empire was ruled by Julius Caesar?",
        options: ["Greek Empire", "Roman Empire", "Byzantine Empire", "Ottoman Empire"],
        correct: 1,
      },
      {
        q: "The French Revolution began in which year?",
        options: ["1789", "1799", "1776", "1804"],
        correct: 0,
      },
      {
        q: "Who was known as the 'Iron Lady'?",
        options: ["Queen Elizabeth II", "Margaret Thatcher", "Indira Gandhi", "Golda Meir"],
        correct: 1,
      },
    ],
    2: [
      // Medium Level - 10 questions
      {
        q: "Which treaty ended World War I?",
        options: ["Treaty of Versailles", "Treaty of Paris", "Treaty of Vienna", "Treaty of Westphalia"],
        correct: 0,
      },
      {
        q: "Who was the last Tsar of Russia?",
        options: ["Nicholas I", "Alexander III", "Nicholas II", "Alexander II"],
        correct: 2,
      },
      {
        q: "The Hundred Years' War was fought between which countries?",
        options: ["England and France", "Spain and Portugal", "Germany and Austria", "Italy and Greece"],
        correct: 0,
      },
      {
        q: "Which civilization built Machu Picchu?",
        options: ["Aztec", "Maya", "Inca", "Olmec"],
        correct: 2,
      },
      {
        q: "Who wrote 'The Communist Manifesto'?",
        options: ["Vladimir Lenin", "Karl Marx and Friedrich Engels", "Joseph Stalin", "Leon Trotsky"],
        correct: 1,
      },
      {
        q: "The Renaissance began in which country?",
        options: ["France", "Germany", "Italy", "England"],
        correct: 2,
      },
      {
        q: "Which explorer is credited with discovering America?",
        options: ["Vasco da Gama", "Christopher Columbus", "Ferdinand Magellan", "Marco Polo"],
        correct: 1,
      },
      {
        q: "The Industrial Revolution started in which country?",
        options: ["France", "Germany", "United States", "England"],
        correct: 3,
      },
      {
        q: "Who was the Egyptian queen who had relationships with Julius Caesar and Mark Antony?",
        options: ["Nefertiti", "Cleopatra", "Hatshepsut", "Ankhesenamun"],
        correct: 1,
      },
      {
        q: "Which war was fought between the North and South in America?",
        options: ["Revolutionary War", "War of 1812", "Civil War", "Spanish-American War"],
        correct: 2,
      },
    ],
    3: [
      // Hard Level - 10 questions
      {
        q: "What was the name of the ship on which Charles Darwin made his famous voyage?",
        options: ["HMS Victory", "HMS Beagle", "HMS Endeavour", "HMS Bounty"],
        correct: 1,
      },
      {
        q: "Which battle is considered the turning point of the American Civil War?",
        options: ["Battle of Bull Run", "Battle of Antietam", "Battle of Gettysburg", "Battle of Shiloh"],
        correct: 2,
      },
      {
        q: "Who was the Byzantine Emperor during the First Crusade?",
        options: ["Justinian I", "Alexios I Komnenos", "Constantine XI", "Basil II"],
        correct: 1,
      },
      {
        q: "What was the primary cause of the Opium Wars?",
        options: [
          "Territorial disputes",
          "Trade imbalances and opium trade",
          "Religious conflicts",
          "Colonial expansion",
        ],
        correct: 1,
      },
      {
        q: "Which ancient Greek philosopher taught Alexander the Great?",
        options: ["Socrates", "Plato", "Aristotle", "Pythagoras"],
        correct: 2,
      },
      {
        q: "What was the significance of the Peace of Augsburg (1555)?",
        options: [
          "Ended Thirty Years' War",
          "Established cuius regio, eius religio principle",
          "Created Holy Roman Empire",
          "Started Protestant Reformation",
        ],
        correct: 1,
      },
      {
        q: "Who was the Mongol general who conquered Baghdad in 1258?",
        options: ["Genghis Khan", "Kublai Khan", "Hulagu Khan", "Batu Khan"],
        correct: 2,
      },
      {
        q: "What was the primary economic theory behind European mercantilism?",
        options: [
          "Free trade",
          "Zero-sum wealth with favorable trade balance",
          "Socialist economics",
          "Laissez-faire capitalism",
        ],
        correct: 1,
      },
      {
        q: "Which treaty established the principle of balance of power in Europe after Napoleon?",
        options: ["Treaty of Vienna", "Congress of Vienna", "Treaty of Paris", "Treaty of Tilsit"],
        correct: 1,
      },
      {
        q: "What was the Defenestration of Prague and when did it occur?",
        options: [
          "1618, throwing officials from window, started Thirty Years' War",
          "1648, peace treaty signing",
          "1620, battle victory",
          "1635, religious conversion",
        ],
        correct: 0,
      },
    ],
  },
  general: {
    1: [
      // Easy Level - 10 questions
      {
        q: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        correct: 1,
      },
      {
        q: "What is the capital of France?",
        options: ["London", "Berlin", "Paris", "Madrid"],
        correct: 2,
      },
      {
        q: "How many continents are there?",
        options: ["5", "6", "7", "8"],
        correct: 2,
      },
      {
        q: "Which animal is known as the king of the jungle?",
        options: ["Tiger", "Elephant", "Lion", "Bear"],
        correct: 2,
      },
      {
        q: "What is the largest ocean on Earth?",
        options: ["Atlantic", "Indian", "Arctic", "Pacific"],
        correct: 3,
      },
      {
        q: "What is the capital of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Perth"],
        correct: 2,
      },
      {
        q: "Which gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        correct: 2,
      },
      {
        q: "What is the largest mammal in the world?",
        options: ["African Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
        correct: 1,
      },
      {
        q: "Which element has the chemical symbol 'O'?",
        options: ["Gold", "Oxygen", "Silver", "Iron"],
        correct: 1,
      },
      {
        q: "What is the smallest country in the world?",
        options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
        correct: 1,
      },
    ],
    2: [
      // Medium Level - 10 questions
      {
        q: "Which country has the most natural lakes?",
        options: ["Russia", "United States", "Canada", "Finland"],
        correct: 2,
      },
      {
        q: "What is the hardest natural substance on Earth?",
        options: ["Gold", "Iron", "Diamond", "Platinum"],
        correct: 2,
      },
      {
        q: "Which mountain range contains Mount Everest?",
        options: ["Andes", "Rocky Mountains", "Himalayas", "Alps"],
        correct: 2,
      },
      {
        q: "What is the currency of Japan?",
        options: ["Yuan", "Won", "Yen", "Ringgit"],
        correct: 2,
      },
      {
        q: "Which planet has the most moons?",
        options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
        correct: 1,
      },
      {
        q: "What is the longest river in the world?",
        options: ["Amazon", "Nile", "Mississippi", "Yangtze"],
        correct: 1,
      },
      {
        q: "Which country is both in Europe and Asia?",
        options: ["Russia", "Turkey", "Kazakhstan", "All of the above"],
        correct: 3,
      },
      {
        q: "What is the most spoken language in the world?",
        options: ["English", "Spanish", "Mandarin Chinese", "Hindi"],
        correct: 2,
      },
      {
        q: "Which organ in the human body produces insulin?",
        options: ["Liver", "Kidney", "Pancreas", "Heart"],
        correct: 2,
      },
      {
        q: "What is the study of earthquakes called?",
        options: ["Geology", "Seismology", "Meteorology", "Volcanology"],
        correct: 1,
      },
    ],
    3: [
      // Hard Level - 10 questions
      {
        q: "What is the deepest point in Earth's oceans?",
        options: ["Puerto Rico Trench", "Java Trench", "Mariana Trench", "Peru-Chile Trench"],
        correct: 2,
      },
      {
        q: "Which element has the highest melting point?",
        options: ["Carbon", "Tungsten", "Rhenium", "Osmium"],
        correct: 1,
      },
      {
        q: "What is the most abundant gas in Earth's atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
        correct: 2,
      },
      {
        q: "Which country has the longest coastline in the world?",
        options: ["Russia", "Canada", "Norway", "Chile"],
        correct: 1,
      },
      {
        q: "What is the speed of light in a vacuum?",
        options: ["299,792,458 m/s", "300,000,000 m/s", "299,000,000 m/s", "301,000,000 m/s"],
        correct: 0,
      },
      {
        q: "What is the Chandrasekhar limit?",
        options: [
          "Maximum mass of white dwarf star",
          "Speed of cosmic expansion",
          "Minimum temperature in space",
          "Maximum size of black holes",
        ],
        correct: 0,
      },
      {
        q: "Which isotope is used in carbon dating?",
        options: ["Carbon-12", "Carbon-13", "Carbon-14", "Carbon-15"],
        correct: 2,
      },
      {
        q: "What is the most electronegative element?",
        options: ["Oxygen", "Nitrogen", "Fluorine", "Chlorine"],
        correct: 2,
      },
      {
        q: "What is the phenomenon where light bends around massive objects?",
        options: ["Refraction", "Diffraction", "Gravitational lensing", "Dispersion"],
        correct: 2,
      },
      {
        q: "Which particle is responsible for the Higgs mechanism?",
        options: ["Photon", "Electron", "Higgs boson", "Neutrino"],
        correct: 2,
      },
    ],
  },
  maths: {
    1: [
      // Easy Level - 10 questions
      {
        q: "What is 15 + 27?",
        options: ["42", "41", "43", "40"],
        correct: 0,
      },
      {
        q: "What is 8 × 7?",
        options: ["54", "55", "56", "57"],
        correct: 2,
      },
      {
        q: "What is 100 - 37?",
        options: ["63", "62", "64", "61"],
        correct: 0,
      },
      {
        q: "What is 144 ÷ 12?",
        options: ["11", "12", "13", "14"],
        correct: 1,
      },
      {
        q: "What is 5²?",
        options: ["10", "20", "25", "30"],
        correct: 2,
      },
      {
        q: "What is the square root of 64?",
        options: ["6", "7", "8", "9"],
        correct: 2,
      },
      {
        q: "What is 25% of 200?",
        options: ["25", "50", "75", "100"],
        correct: 1,
      },
      {
        q: "What is 3³?",
        options: ["6", "9", "27", "81"],
        correct: 2,
      },
      {
        q: "What is the value of π (pi) approximately?",
        options: ["3.14", "3.41", "4.13", "1.34"],
        correct: 0,
      },
      {
        q: "What is 45 ÷ 5?",
        options: ["8", "9", "10", "11"],
        correct: 1,
      },
    ],
    2: [
      // Medium Level - 10 questions
      {
        q: "What is the derivative of x²?",
        options: ["x", "2x", "x²", "2x²"],
        correct: 1,
      },
      {
        q: "What is the sum of angles in a triangle?",
        options: ["90°", "180°", "270°", "360°"],
        correct: 1,
      },
      {
        q: "What is log₁₀(1000)?",
        options: ["2", "3", "4", "5"],
        correct: 1,
      },
      {
        q: "What is the area of a circle with radius 5?",
        options: ["25π", "10π", "5π", "15π"],
        correct: 0,
      },
      {
        q: "What is the slope of the line y = 3x + 2?",
        options: ["2", "3", "5", "1"],
        correct: 1,
      },
      {
        q: "What is the quadratic formula?",
        options: [
          "x = -b ± √(b²-4ac) / 2a",
          "x = b ± √(b²+4ac) / 2a",
          "x = -b ± √(b²+4ac) / a",
          "x = b ± √(b²-4ac) / a",
        ],
        correct: 0,
      },
      {
        q: "What is sin(90°)?",
        options: ["0", "1", "0.5", "√3/2"],
        correct: 1,
      },
      {
        q: "What is the factorial of 5 (5!)?",
        options: ["25", "60", "120", "100"],
        correct: 2,
      },
      {
        q: "What is the volume of a cube with side length 4?",
        options: ["16", "32", "48", "64"],
        correct: 3,
      },
      {
        q: "What is the next number in the Fibonacci sequence: 1, 1, 2, 3, 5, 8, ?",
        options: ["11", "12", "13", "14"],
        correct: 2,
      },
    ],
    3: [
      // Hard Level - 10 questions
      {
        q: "What is the integral of cos(x)?",
        options: ["-sin(x)", "sin(x)", "cos(x)", "-cos(x)"],
        correct: 1,
      },
      {
        q: "What is the limit of (sin x)/x as x approaches 0?",
        options: ["0", "1", "∞", "undefined"],
        correct: 1,
      },
      {
        q: "What is the determinant of [[2,3],[1,4]]?",
        options: ["5", "8", "11", "14"],
        correct: 0,
      },
      {
        q: "What is e^(iπ) + 1 equal to? (Euler's identity)",
        options: ["-1", "0", "1", "i"],
        correct: 1,
      },
      {
        q: "What is the Taylor series expansion of e^x around x=0?",
        options: ["1 + x + x²/2! + x³/3! + ...", "x + x²/2 + x³/3 + ...", "1 + x + x² + x³ + ...", "x + x² + x³ + ..."],
        correct: 0,
      },
      {
        q: "What is the Riemann Hypothesis about?",
        options: ["Prime number distribution", "Geometry of space", "Quantum mechanics", "Chaos theory"],
        correct: 0,
      },
      {
        q: "What is the dimension of the Mandelbrot set?",
        options: ["1", "1.5", "2", "Fractal dimension ≈ 2"],
        correct: 3,
      },
      {
        q: "What is the Banach-Tarski paradox?",
        options: [
          "Sphere can be decomposed and reassembled into two identical spheres",
          "Infinite sets have same cardinality",
          "Parallel lines meet at infinity",
          "Time travel paradox",
        ],
        correct: 0,
      },
      {
        q: "What is the chromatic number of a planar graph (Four Color Theorem)?",
        options: ["3", "4", "5", "6"],
        correct: 1,
      },
      {
        q: "What is the value of the Euler-Mascheroni constant γ approximately?",
        options: ["0.577", "1.618", "2.718", "3.141"],
        correct: 0,
      },
    ],
  },
}

const quizTitles = {
  webdev: "🎓 Ready to Test Your Web Development Knowledge?",
  history: "🏛️ Ready to Test Your History Knowledge?",
  general: "🧠 Ready to Test Your General Knowledge?",
  maths: "🔢 Ready to Test Your Math Skills?",
}

const quizDescriptions = {
  webdev: "Test your knowledge of HTML, CSS, JavaScript and web development!",
  history: "Explore your knowledge of historical events and figures!",
  general: "Challenge yourself with questions from various topics!",
  maths: "Put your mathematical skills to the test!",
}

const levelInfo = {
  1: { name: "Easy", icon: "🟢", color: "#22c55e" },
  2: { name: "Medium", icon: "🟡", color: "#eab308" },
  3: { name: "Hard", icon: "🔴", color: "#ef4444" },
}

let currentQuiz = "webdev"
let currentLevel = 1
let current = 0
let score = 0
let timer
let timeLeft = 15
let isQuizRunning = false

const startScreen = document.getElementById("startScreen")
const quizContainer = document.getElementById("quiz")
const questionEl = document.getElementById("question")
const optionsEl = document.getElementById("options")
const nextBtn = document.getElementById("nextBtn")
const resultEl = document.getElementById("result")
const timerEl = document.getElementById("timer")
const progressBar = document.getElementById("progressBar")
const correctSound = document.getElementById("correctSound")
const wrongSound = document.getElementById("wrongSound")
const tickSound = document.getElementById("tickSound")
const revealSound = document.getElementById("revealSound")
const questionCounter = document.getElementById("questionCounter")
const resultContent = document.getElementById("resultContent")
const quizTitle = document.getElementById("quizTitle")
const quizDescription = document.getElementById("quizDescription")
const currentLevelDisplay = document.getElementById("currentLevelDisplay")

function playSound(audioElement) {
  try {
    audioElement.currentTime = 0
    const playPromise = audioElement.play()
    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        console.log("Audio play failed:", error)
        setTimeout(() => {
          try {
            audioElement.play()
          } catch (e) {
            console.log("Audio fallback also failed:", e)
          }
        }, 100)
      })
    }
  } catch (error) {
    console.log("Audio error:", error)
  }
}

function stopSound(audioElement) {
  try {
    audioElement.pause()
    audioElement.currentTime = 0
  } catch (error) {
    console.log("Audio stop error:", error)
  }
}

function selectLevel(level) {
  if (isQuizRunning) {
    return // Don't allow level change while running
  }

  currentLevel = level

  // Update active state for level buttons
  document.querySelectorAll(".level-btn").forEach((btn) => {
    btn.classList.remove("active")
  })
  document.querySelector(`[data-level="${level}"]`).classList.add("active")

  // Update current level display
  const levelData = levelInfo[level]
  currentLevelDisplay.textContent = `${levelData.icon} Level ${level} - ${levelData.name}`

  // Reset quiz state
  current = 0
  score = 0

  // If we're in result screen, go back to start screen
  if (!resultEl.classList.contains("hidden")) {
    showStartScreen()
  }
}

function selectQuiz(quizType) {
  if (isQuizRunning) {
    return // Don't allow quiz change while running
  }

  currentQuiz = quizType

  // Update active state
  document.querySelectorAll(".quiz-option").forEach((option) => {
    option.classList.remove("active")
  })
  document.querySelector(`[data-quiz="${quizType}"]`).classList.add("active")

  // Update title and description
  quizTitle.textContent = quizTitles[quizType]
  quizDescription.textContent = quizDescriptions[quizType]

  // Reset quiz state completely
  current = 0
  score = 0

  // Clear any existing timer
  if (timer) {
    clearInterval(timer)
  }

  // Stop any playing sounds
  stopSound(tickSound)

  // Reset all UI elements to initial state
  questionEl.classList.remove("hidden")
  optionsEl.classList.remove("hidden")
  nextBtn.classList.add("hidden")
  timerEl.classList.remove("hidden")
  questionCounter.classList.remove("hidden")
  progressBar.parentElement.classList.remove("hidden")
  resultEl.classList.add("hidden")

  // Show start screen
  startScreen.classList.remove("hidden")
  quizContainer.classList.add("hidden")
  isQuizRunning = false

  // Enable quiz and level selection
  document.querySelectorAll(".quiz-option").forEach((option) => {
    option.style.pointerEvents = "auto"
    option.style.opacity = "1"
  })
  document.querySelectorAll(".level-btn").forEach((btn) => {
    btn.style.pointerEvents = "auto"
    btn.style.opacity = "1"
  })
}

function showStartScreen() {
  // Clear any existing timer
  if (timer) {
    clearInterval(timer)
  }

  // Stop any playing sounds
  stopSound(tickSound)

  // Reset all UI elements
  questionEl.classList.remove("hidden")
  optionsEl.classList.remove("hidden")
  nextBtn.classList.add("hidden")
  timerEl.classList.remove("hidden")
  questionCounter.classList.remove("hidden")
  progressBar.parentElement.classList.remove("hidden")
  resultEl.classList.add("hidden")

  // Show start screen
  startScreen.classList.remove("hidden")
  quizContainer.classList.add("hidden")
  isQuizRunning = false

  // Enable quiz and level selection
  document.querySelectorAll(".quiz-option").forEach((option) => {
    option.style.pointerEvents = "auto"
    option.style.opacity = "1"
  })
  document.querySelectorAll(".level-btn").forEach((btn) => {
    btn.style.pointerEvents = "auto"
    btn.style.opacity = "1"
  })
}

function startQuiz() {
  startScreen.classList.add("hidden")
  quizContainer.classList.remove("hidden")
  isQuizRunning = true

  // Disable quiz and level selection while running
  document.querySelectorAll(".quiz-option").forEach((option) => {
    option.style.pointerEvents = "none"
    option.style.opacity = "0.6"
  })
  document.querySelectorAll(".level-btn").forEach((btn) => {
    btn.style.pointerEvents = "none"
    btn.style.opacity = "0.6"
  })

  loadQuestion()
}

function loadQuestion() {
  const questions = quizData[currentQuiz][currentLevel]
  const q = questions[current]
  questionEl.textContent = q.q
  optionsEl.innerHTML = ""
  nextBtn.classList.add("hidden")
  timeLeft = 15
  updateTimer()
  updateProgressBar()
  updateQuestionCounter()

  q.options.forEach((opt, i) => {
    const div = document.createElement("div")
    div.textContent = opt
    div.className = "option"
    div.onclick = () => selectOption(i)
    optionsEl.appendChild(div)
  })

  timer = setInterval(() => {
    timeLeft--
    updateTimer()
    if (timeLeft <= 0) {
      clearInterval(timer)
      selectOption(-1)
    }
  }, 1000)
}

function updateTimer() {
  timerEl.textContent = `${timeLeft}s`

  if (timeLeft <= 5) {
    timerEl.style.animation = "pulse 0.5s infinite"
    timerEl.style.backgroundColor = "#dc3545"

    if (timeLeft > 0) {
      playSound(tickSound)
    }
  } else {
    timerEl.style.animation = "none"
    timerEl.style.backgroundColor = "#6d28d9"
  }
}

function updateProgressBar() {
  const questions = quizData[currentQuiz][currentLevel]
  const progress = ((current + 1) / questions.length) * 100
  progressBar.style.width = `${progress}%`
}

function updateQuestionCounter() {
  const questions = quizData[currentQuiz][currentLevel]
  questionCounter.textContent = `${current + 1} of ${questions.length}`
  questionCounter.style.animation = "none"
  setTimeout(() => {
    questionCounter.style.animation = "counterPulse 0.5s ease-in-out"
  }, 10)
}

function selectOption(selected) {
  clearInterval(timer)
  stopSound(tickSound)

  const questions = quizData[currentQuiz][currentLevel]
  const correct = questions[current].correct
  const options = document.querySelectorAll(".option")

  if (selected === -1) {
    playSound(revealSound)
  }

  options.forEach((opt, i) => {
    opt.onclick = null
    if (i === correct) opt.classList.add("correct")
    if (i === selected && i !== correct) opt.classList.add("wrong")
  })

  const delay = selected === -1 ? 300 : 0
  setTimeout(() => {
    if (selected === correct) {
      score++
      playSound(correctSound)
    } else if (selected !== -1) {
      playSound(wrongSound)
    }
  }, delay)

  nextBtn.classList.remove("hidden")
}

function nextQuestion() {
  current++
  const questions = quizData[currentQuiz][currentLevel]
  if (current < questions.length) {
    loadQuestion()
  } else {
    showResult()
  }
}

function showResult() {
  questionEl.classList.add("hidden")
  optionsEl.classList.add("hidden")
  nextBtn.classList.add("hidden")
  timerEl.classList.add("hidden")
  questionCounter.classList.add("hidden")
  progressBar.parentElement.classList.add("hidden")
  resultEl.classList.remove("hidden")
  isQuizRunning = false

  stopSound(tickSound)

  // Enable quiz and level selection
  document.querySelectorAll(".quiz-option").forEach((option) => {
    option.style.pointerEvents = "auto"
    option.style.opacity = "1"
  })
  document.querySelectorAll(".level-btn").forEach((btn) => {
    btn.style.pointerEvents = "auto"
    btn.style.opacity = "1"
  })

  const questions = quizData[currentQuiz][currentLevel]
  const levelData = levelInfo[currentLevel]

  let message = ""
  let emoji = ""

  if (score >= Math.ceil(questions.length * 0.8)) {
    message = "🎉 Excellent! Outstanding Performance!"
    emoji = "🏆"
  } else if (score >= Math.ceil(questions.length * 0.6)) {
    message = "👏 Good Job! Well Done!"
    emoji = "⭐"
  } else {
    message = "📚 Keep Learning! You Can Do Better!"
    emoji = "💪"
  }

  setTimeout(() => {
    resultContent.innerHTML = `
      <div style="font-size: 48px; margin-bottom: 20px;">${emoji}</div>
      <h2 style="margin-bottom: 15px; color: #6d28d9;">${message}</h2>
      <div style="margin-bottom: 15px; color: ${levelData.color}; font-weight: 600;">
        ${levelData.icon} Level ${currentLevel} - ${levelData.name}
      </div>
      <p style="font-size: 24px; font-weight: 600; margin-bottom: 20px;">Your Score: ${score}/${questions.length}</p>
      <div style="margin-bottom: 20px; color: #6c757d;">
        ${getScoreMessage(score, questions.length)}
      </div>
      <button onclick="restartQuiz()" style="animation: bounce 2s infinite;">Try Again</button>
    `
  }, 500)
}

function getScoreMessage(score, total) {
  const percentage = (score / total) * 100
  if (percentage >= 80) {
    return "🌟 You're a quiz master! Incredible knowledge!"
  } else if (percentage >= 60) {
    return "👍 Great effort! You're on the right track!"
  } else {
    return "📖 Don't give up! Practice makes perfect!"
  }
}

function restartQuiz() {
  current = 0
  score = 0

  stopSound(tickSound)

  questionEl.classList.remove("hidden")
  optionsEl.classList.remove("hidden")
  resultEl.classList.add("hidden")
  timerEl.classList.remove("hidden")
  questionCounter.classList.remove("hidden")
  progressBar.parentElement.classList.remove("hidden")

  startQuiz()
}

function initializeAudio() {
  if (!audioInitialized) {
    correctSound.load()
    wrongSound.load()
    tickSound.load()
    revealSound.load()
    audioInitialized = true
  }
}

let audioInitialized = false

document.addEventListener("click", initializeAudio, { once: true })
document.addEventListener("touchstart", initializeAudio, { once: true })

document.addEventListener("DOMContentLoaded", () => {
  selectQuiz("webdev")
  selectLevel(1)
})
