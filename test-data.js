const A = "assets/images/";
const TOTAL_POINTS = 50;

const choice = (id, prompt, options, answer, explanation, image = "") => ({ id, type: "choice", prompt, options, answers: [answer], explanation, image, points: 1 });
const input = (id, prompt, answers, explanation, image = "") => ({ id, type: "input", prompt, answers, explanation, image, points: 1 });

const sections = [
  { key: "A", label: "A", title: "Two of the three words are correct. Listen and circle the correct letters.", note: "Listen carefully, then choose the pair containing both correct letters.", points: 4, audio: "assets/audio/Listening-A.mp3", questions: [
    choice("A1", "1. a kangaroo · b katydid · c ladybug", ["a + b", "a + c", "b + c"], "b + c", "The recording identifies katydid and ladybug, so the correct letters are b and c."),
    choice("A2", "2. a grasshopper · b kangaroo · c thicket", ["a + b", "a + c", "b + c"], "a + b", "The recording identifies grasshopper and kangaroo, so the correct letters are a and b."),
    choice("A3", "3. a butterfly · b cricket · c bee", ["a + b", "a + c", "b + c"], "b + c", "The recording identifies cricket and bee, so the correct letters are b and c."),
    choice("A4", "4. a leap · b beetle · c escape", ["a + b", "a + c", "b + c"], "a + c", "The recording identifies leap and escape, so the correct letters are a and c.")
  ]},
  { key: "B", label: "B", title: "Complete the sentences.", note: "Write the word that matches each definition.", points: 3, questions: [
    input("B1", "1. The ___ has a lot of bushes and trees.", ["thicket"], "A thicket is a dense area of bushes and small trees."),
    input("B2", "2. A ___ is a dried grape. It is small and brown.", ["raisin"], "A dried grape is called a raisin."),
    input("B3", "3. A ___ is yellow and black and can sting you — be careful!", ["bee"], "A bee is a yellow-and-black insect that can sting.")
  ]},
  { key: "C", label: "C", title: "Complete the sentences. Then match them to the pictures.", note: "Write the missing insect, then choose the original picture label. The letters label the pictures only.", points: 6, questions: [
    { id: "C1", type: "pictureWord", points: 2, prompt: "1. A ___ eats tree leaves. It is not good for plants!", pictures: [
      { value: "a", image: A + "c-a.png" }, { value: "b", image: A + "c-b.png" }, { value: "c", image: A + "c-c.png" }
    ], parts: [
      { key: "word", label: "Missing word", type: "input", answers: ["beetle"], explanation: "A beetle can feed on leaves and damage plants." },
      { key: "picture", label: "Picture label", type: "pictureChoice", answers: ["b"], explanation: "Picture b shows a beetle." }
    ]},
    { id: "C2", type: "pictureWord", points: 2, prompt: "2. A ___ is very noisy at night. Sometimes you can hear the sound from your bedroom.", pictures: [
      { value: "a", image: A + "c-a.png" }, { value: "b", image: A + "c-b.png" }, { value: "c", image: A + "c-c.png" }
    ], parts: [
      { key: "word", label: "Missing word", type: "input", answers: ["cricket"], explanation: "Crickets make a loud chirping sound, especially at night." },
      { key: "picture", label: "Picture label", type: "pictureChoice", answers: ["c"], explanation: "Picture c shows a cricket." }
    ]},
    { id: "C3", type: "pictureWord", points: 2, prompt: "3. A ___ can jump high.", pictures: [
      { value: "a", image: A + "c-a.png" }, { value: "b", image: A + "c-b.png" }, { value: "c", image: A + "c-c.png" }
    ], parts: [
      { key: "word", label: "Missing word", type: "input", answers: ["grasshopper"], explanation: "A grasshopper has powerful back legs for jumping." },
      { key: "picture", label: "Picture label", type: "pictureChoice", answers: ["a"], explanation: "Picture a shows a grasshopper." }
    ]}
  ]},
  { key: "D", label: "D", title: "Circle the correct words.", note: "Choose the past continuous form that agrees with the subject.", points: 4, questions: [
    choice("D1", "1. The children was playing / were playing outside yesterday.", ["was playing", "were playing"], "were playing", "Children is plural, so use were playing."),
    choice("D2", "2. The animals wasn't eating / weren't eating the leaves of the trees.", ["wasn't eating", "weren't eating"], "weren't eating", "Animals is plural, so use weren't eating."),
    choice("D3", "3. Was / Were the students learning about insects?", ["Was", "Were"], "Were", "Students is plural, so the question begins with Were."),
    choice("D4", "4. The bird wasn't flying / weren't flying in the sky.", ["wasn't flying", "weren't flying"], "wasn't flying", "The bird is singular, so use wasn't flying.")
  ]},
  { key: "E", label: "E", title: "Complete the sentences. Use the past continuous form of the verbs in parentheses.", note: "Use was or were + verb-ing. The picture helps you identify the positive or negative form.", points: 4, questions: [
    input("E1", "1. Kevin ___ to the teacher. (listen)", ["wasn't listening", "was not listening"], "Kevin is singular, and the picture shows that he was not listening, so use wasn't listening.", A + "e-1.png"),
    input("E2", "2. I ___ a poem. (write)", ["was writing"], "With I, the past continuous is was + writing.", A + "e-2.png"),
    input("E3", "3. The sun ___. (shine)", ["wasn't shining", "was not shining"], "The picture shows rain and no sunshine, so use wasn't shining.", A + "e-3.png"),
    input("E4", "4. The children ___ baseball. (play)", ["were playing"], "Children is plural, so use were + playing.", A + "e-4.png")
  ]},
  { key: "F", label: "F", title: "Complete the sentences.", note: "Use the word box. One phrase is not needed.", points: 4, wordBank: ["was cooking", "wasn't sleeping", "weren't singing", "weren't drinking", "were you doing"], questions: [
    input("F1", "1. What ___ yesterday?", ["were you doing"], "A past continuous question with you uses were you doing."),
    input("F2", "2. The birds ___ in the middle of the night.", ["weren't singing", "were not singing"], "Birds is plural, so the negative past continuous form is weren't singing."),
    input("F3", "3. My sister ___ a delicious breakfast this morning.", ["was cooking"], "My sister is singular, so use was cooking."),
    input("F4", "4. Delia ___ because it was 2:00 in the afternoon.", ["wasn't sleeping", "was not sleeping"], "Delia is singular, so the negative past continuous form is wasn't sleeping.")
  ]},
  { key: "G", label: "G", title: "Complete the sentences.", note: "Use the word box. One word is not needed.", points: 6, wordBank: ["imagine", "syllables", "rhyming words", "describe", "exact", "letter", "observe"], questions: [
    input("G1", "1. What words can ___ what this animal looks like?", ["describe"], "Describe means to say what someone or something is like."),
    input("G2", "2. Cat, hat, and mat are ___.", ["rhyming words"], "These words rhyme because they share the same ending sound."),
    input("G3", "3. I ___ your country is very beautiful!", ["imagine"], "Imagine means to form an idea or picture in your mind."),
    input("G4", "4. The word happy has two ___.", ["syllables"], "Happy has two spoken beats: hap-py."),
    input("G5", "5. I like to ___ birds flying in the sky.", ["observe"], "Observe means to watch something carefully."),
    input("G6", "6. Haiku poems have an ___ number of syllables per line.", ["exact"], "Exact means completely correct and fixed, not approximate.")
  ]},
  { key: "H", label: "H", title: "Circle the correct answer.", note: "Choose True or False.", points: 4, questions: [
    choice("H1", "1. Happy, sad, and beautiful are adjectives.", ["T", "F"], "T", "These words describe feelings or qualities, so they are adjectives."),
    choice("H2", "2. You can see snowflakes in the summer.", ["T", "F"], "F", "Snowflakes normally form in cold winter weather, not summer."),
    choice("H3", "3. Bird, tree, and table are verbs.", ["T", "F"], "F", "Bird, tree, and table name things, so they are nouns."),
    choice("H4", "4. The word mountain has eight letters.", ["T", "F"], "T", "Mountain is spelled m-o-u-n-t-a-i-n: eight letters.")
  ]},
  { key: "I", label: "I", title: "Look and complete the sentences.", note: "Use the picture to write the correct word.", points: 4, questions: [
    input("I1", "1. An ___ swims in the ocean.", ["angelfish"], "The picture shows an angelfish.", A + "i-1.png"),
    input("I2", "2. A ___ sings in the tree.", ["robin"], "The picture shows a robin on a branch.", A + "i-2.png"),
    input("I3", "3. A ___ begins with a capital letter and ends with a period.", ["sentence"], "A complete sentence begins with a capital letter and ends with punctuation.", A + "i-3.png"),
    input("I4", "4. A ___ is a person, place, or thing.", ["noun"], "A noun names a person, place, thing, or idea.", A + "i-4.png")
  ]},
  { key: "J", label: "J", title: "Listen. Then circle the correct answer.", note: "Listen for the correct tense and complete meaning.", points: 4, audio: "assets/audio/Listening-J.mp3", questions: [
    choice("J1", "1.", ["I was watching TV.", "I watched TV."], "I was watching TV.", "The recording uses the past continuous: was watching."),
    choice("J2", "2.", ["It started to snow.", "It starts to snow."], "It started to snow.", "The recording describes a completed past event: started."),
    choice("J3", "3.", ["Yes, they were reading their books.", "Yes, they read books."], "Yes, they were reading their books.", "The recording uses were reading for an action in progress."),
    choice("J4", "4.", ["Pete fell asleep.", "Pete falls asleep."], "Pete fell asleep.", "The recording uses the past form fell.")
  ]},
  { key: "K", label: "K", title: "Check the correct answer.", note: "Choose the option that completes each sentence correctly.", points: 3, questions: [
    choice("K1", "1. I was sleeping when the plane ___.", ["landed", "lands"], "landed", "Both actions are in the past: the plane landed while I was sleeping."),
    choice("K2", "2. ___ when it started to snow?", ["Were you eating dinner", "Were you ate"], "Were you eating dinner", "A past continuous question uses Were + subject + verb-ing."),
    choice("K3", "3. Manisha was walking in the park when she ___ a butterfly.", ["were seeing", "saw"], "saw", "Saw is the simple past event that happened during the longer action was walking.")
  ]},
  { key: "L", label: "L", title: "Write the words in the correct order to make sentences. Then match them to the pictures.", note: "Write each complete sentence and choose its original picture label. Each item is worth one point, so both parts must be correct.", points: 4, questions: [
    { id: "L1", type: "pictureWord", points: 1, prompt: "1. was / cleaning / when / the phone / rang / Mary / the kitchen", pictures: [
      { value: "a", image: A + "l-a.png" }, { value: "b", image: A + "l-b.png" }, { value: "c", image: A + "l-c.png" }, { value: "d", image: A + "l-d.png" }
    ], parts: [
      { key: "sentence", label: "Complete sentence", type: "input", answers: ["Mary was cleaning the kitchen when the phone rang.", "Mary was cleaning the kitchen when the phone rang"], explanation: "Use past continuous for the longer action and simple past for the interrupting event." },
      { key: "picture", label: "Picture label", type: "pictureChoice", answers: ["c"], explanation: "Picture c shows Mary cleaning the kitchen." }
    ]},
    { id: "L2", type: "pictureWord", points: 1, prompt: "2. were / rain / swimming / when / We / it / started / to", pictures: [
      { value: "a", image: A + "l-a.png" }, { value: "b", image: A + "l-b.png" }, { value: "c", image: A + "l-c.png" }, { value: "d", image: A + "l-d.png" }
    ], parts: [
      { key: "sentence", label: "Complete sentence", type: "input", answers: ["We were swimming when it started to rain.", "We were swimming when it started to rain"], explanation: "Were swimming is the action in progress; started is the shorter past event." },
      { key: "picture", label: "Picture label", type: "pictureChoice", answers: ["b"], explanation: "Picture b shows people swimming when it started to rain." }
    ]},
    { id: "L3", type: "pictureWord", points: 1, prompt: "3. when / Ahmed / fell / a book / asleep / he / reading / was", pictures: [
      { value: "a", image: A + "l-a.png" }, { value: "b", image: A + "l-b.png" }, { value: "c", image: A + "l-c.png" }, { value: "d", image: A + "l-d.png" }
    ], parts: [
      { key: "sentence", label: "Complete sentence", type: "input", answers: ["Ahmed was reading a book when he fell asleep.", "Ahmed was reading a book when he fell asleep"], explanation: "Was reading is the longer action; fell asleep is the event that happened during it." },
      { key: "picture", label: "Picture label", type: "pictureChoice", answers: ["a"], explanation: "Picture a shows Ahmed asleep with a book." }
    ]},
    { id: "L4", type: "pictureWord", points: 1, prompt: "4. walking / a robin / when / I / in the thicket / I / saw / was", pictures: [
      { value: "a", image: A + "l-a.png" }, { value: "b", image: A + "l-b.png" }, { value: "c", image: A + "l-c.png" }, { value: "d", image: A + "l-d.png" }
    ], parts: [
      { key: "sentence", label: "Complete sentence", type: "input", answers: ["I was walking in the thicket when I saw a robin.", "I was walking in the thicket when I saw a robin"], explanation: "Was walking is the background action; saw is the shorter event." },
      { key: "picture", label: "Picture label", type: "pictureChoice", answers: ["d"], explanation: "Picture d shows a person walking in the thicket and seeing a robin." }
    ]}
  ]}
];
