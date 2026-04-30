export const MOVIES = [
  {
    id: 1,
    title: "Interstellar Echoes",
    genre: "Sci-Fi",
    duration: "2h 28m",
    rating: 8.7,
    lang: "English",
    poster: "🚀",
    bg: "#dbeafe",
    desc: "A crew of astronauts travel through a wormhole in search of a new home for humanity.",
    cast: "Matthew Fox, Priya Sen, Leon Osei",
  },
  {
    id: 2,
    title: "Rangeen Zindagi",
    genre: "Drama",
    duration: "2h 05m",
    rating: 8.2,
    lang: "Hindi",
    poster: "🎭",
    bg: "#fce7f3",
    desc: "A painter rediscovers life and love after losing sight in one eye.",
    cast: "Ranveer Kapoor, Deepika Mehra",
  },
  {
    id: 3,
    title: "Velocity",
    genre: "Action",
    duration: "1h 58m",
    rating: 7.5,
    lang: "English",
    poster: "🏎️",
    bg: "#fef3c7",
    desc: "A street racer turned Interpol asset must outrun a criminal syndicate across three continents.",
    cast: "Jake Torres, Amara Diallo",
  },
  {
    id: 4,
    title: "The Quiet Forest",
    genre: "Horror",
    duration: "1h 44m",
    rating: 7.9,
    lang: "English",
    poster: "🌲",
    bg: "#dcfce7",
    desc: "A family moves to an inherited estate deep in the woods — only to find they are not alone.",
    cast: "Sienna Walsh, Tom Breck",
  },
  {
    id: 5,
    title: "Cosmic Comedy",
    genre: "Comedy",
    duration: "1h 52m",
    rating: 7.1,
    lang: "English",
    poster: "✨",
    bg: "#ede9fe",
    desc: "Two rival astronomers accidentally broadcast Earth's pettiest arguments to an alien civilization.",
    cast: "Keanu Park, Lily Chen",
  },
  {
    id: 6,
    title: "Ek Villain 3",
    genre: "Action",
    duration: "2h 15m",
    rating: 7.3,
    lang: "Hindi",
    poster: "🔥",
    bg: "#fee2e2",
    desc: "A vigilante hunts the city's most dangerous crime lord while hiding a dark secret.",
    cast: "Arjun Singh, Shraddha Nair",
  },
];

export const CINEMAS = [
  { id: "c1", name: "PVR Cinemas", location: "Koramangala" },
  { id: "c2", name: "INOX Multiplex", location: "Indiranagar" },
  { id: "c3", name: "Cinepolis", location: "Whitefield" },
];

export const SHOW_TIMES = ["10:00 AM", "12:30 PM", "03:15 PM", "06:00 PM", "09:30 PM"];
export const HOUSEFULL = ["12:30 PM", "06:00 PM"];

export const GENRES = ["All", "Sci-Fi", "Drama", "Action", "Horror", "Comedy"];

export const DATES = Array.from({ length: 5 }, (_, i) => {
  const d = new Date();
  d.setDate(d.getDate() + i);
  return {
    key: i,
    label:
      i === 0
        ? "Today"
        : i === 1
        ? "Tomorrow"
        : d.toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short" }),
  };
});