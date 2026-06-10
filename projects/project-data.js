const projectImages = (slug, count) =>
  Array.from({ length: count }, (_, index) => {
    const number = String(index + 1).padStart(2, "0");
    return `../assets/projects/${slug}/${number}.jpg`;
  });

window.WILOW_PROJECTS = [
  {
    id: "surrealism-vs-reality",
    title: "FW 2024 - Surrealism vs Reality, Palais Royal",
    category: "Editorial",
    role: "Styling, image direction",
    location: "Paris",
    year: "2024",
    deck:
      "A study in visual tension, built from sculptural volume, cool restraint, and a silhouette that feels almost suspended.",
    body:
      "The project frames styling as a controlled interruption. Soft blue atmosphere, sharp surfaces, and deliberately strange proportion work together to hold the image between elegance and unease.",
    cover: "../assets/projects/surrealism-vs-reality/10.jpg",
    images: projectImages("surrealism-vs-reality", 10),
  },
  {
    id: "burna-boy",
    title: "HTSI - Burna Boy, Lagos Interior Story",
    category: "Campaign",
    role: "Styling, editorial image direction",
    location: "Lagos",
    year: "2024",
    deck:
      "Portraiture shaped through color, pattern, confidence, and the quiet authority of a lived-in interior.",
    body:
      "The styling rhythm moves between richness and restraint, letting texture and body language carry the image without over-explaining it.",
    cover: "../assets/projects/burna-boy/01.jpg",
    images: projectImages("burna-boy", 10),
  },
  {
    id: "guillaume-diop",
    title: "Guillaume Diop - Tailoring, Sunlight, Restraint",
    category: "Lookbook",
    role: "Styling, image direction",
    location: "Paris",
    year: "2024",
    deck:
      "A quiet tailoring story, built around daylight, clean proportion, and precise restraint.",
    body:
      "The images use space and stillness as part of the styling language. The clothes remain exact, but the atmosphere keeps the work personal and human.",
    cover: "../assets/projects/guillaume-diop/01.jpg",
    images: projectImages("guillaume-diop", 8),
  },
  {
    id: "rodeo-love",
    title: "Rodeo Love - Shape, Attitude, and Distance",
    category: "Personal work",
    role: "Styling",
    location: "Paris",
    year: "2024",
    deck:
      "A personal fashion story that leans into gesture, confidence, and sculptural attitude.",
    body:
      "The work uses distance and posture to let each look hold its own mood. The styling is graphic, direct, and intentionally charged.",
    cover: "../assets/projects/rodeo-love/01.jpg",
    images: projectImages("rodeo-love", 9),
  },
  {
    id: "merchants-of-venice",
    title: "Merchants of Venice - Man About Town",
    category: "Editorial",
    role: "Styling",
    location: "Venice",
    year: "2022",
    deck:
      "An editorial sequence shaped by movement, old-world surfaces, and a cinematic sense of travel.",
    body:
      "The styling holds a classic structure while allowing the setting to push the images into something more atmospheric and unsettled.",
    cover: "../assets/projects/merchants-of-venice/01.jpg",
    images: projectImages("merchants-of-venice", 10),
  },
  {
    id: "wonderland",
    title: "Wonderland - Youth, Silhouette, and Attitude",
    category: "Personal work",
    role: "Styling",
    location: "London",
    year: "2024",
    deck:
      "A compact editorial story built around youth, directness, and a sharper fashion attitude.",
    body:
      "The styling keeps the silhouette graphic and emotionally readable, with each frame treated as a concise fashion statement.",
    cover: "../assets/projects/wonderland/01.jpg",
    images: projectImages("wonderland", 6),
  },
  {
    id: "araloyin",
    title: "Araloyin - Movement and Surface",
    category: "Editorial",
    role: "Styling",
    location: "Paris",
    year: "2024",
    deck:
      "A kinetic editorial study focused on gesture, fabric behavior, and changing rhythm across the frame.",
    body:
      "The series lets the styling move between softness and structure, using repetition and variation to build a wider image world.",
    cover: "../assets/projects/araloyin/01.jpg",
    images: projectImages("araloyin", 10),
  },
  {
    id: "farewell-solstice",
    title: "Farewell to the Solstice - Man About Town",
    category: "Editorial",
    role: "Styling",
    location: "Europe",
    year: "2022",
    deck:
      "A sunlit menswear story with warmth, looseness, and a natural sense of progression.",
    body:
      "The styling is grounded in texture and ease, letting the images feel expansive while keeping the silhouette deliberate.",
    cover: "../assets/projects/farewell-solstice/01.jpg",
    images: projectImages("farewell-solstice", 12),
  },
  {
    id: "promising-debut",
    title: "Promising Debut - Vestal",
    category: "Lookbook",
    role: "Styling, lookbook direction",
    location: "Paris",
    year: "2023",
    deck:
      "A lookbook sequence shaped around emerging talent, clean styling decisions, and quiet visual confidence.",
    body:
      "The project keeps the frame direct and readable, allowing garment, model, and attitude to sit in equal balance.",
    cover: "../assets/projects/promising-debut/01.jpg",
    images: projectImages("promising-debut", 10),
  },
];
