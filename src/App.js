import "./styles.css";
import North from "./Assets/north.jpg";
import Creayon from "./Assets/creayon.jpg";
import Paricutin from "./Assets/paricutin.jpg";
import Victoria from "./Assets/vic.jpg";
import Mount from "./Assets/mount.jpg";
import Reef from "./Assets/reef.jpg";
import Rio from "./Assets/rio.jpg";
import LandingPage from "./Pages/LandingPage";

function App() {
  const data = [
    {
      id: 1,
      location: "Aurora Borealis",
      title: "The Northern Lights",
      image: North,
      description:
        "The Northern Lights are auroras, or naturally occurring phenomena that consist of mystifying displays of light in the sky. The northern lights dance across the sky and emanate a diffused glow along the northern horizon. The best places to see this includes: Canada's far north, Alaska, Iceland, Norway, Sweden, and Finland."
    },

    {
      id: 2,
      location: "Arizona, USA",
      title: "The Grand Crayon",
      image: Creayon,
      description:
        "You only need to stand on the rim of the Grand Canyon once to know why it's one of the 7 natural wonders of the natural world. The Grand Canyon's massive and colorful landscape provides breathtaking views that can't be found anywhere else in the world."
    },

    {
      id: 3,
      location: "Michoacán, Mexico.",
      title: "Paricutin",
      image: Paricutin,
      description:
        "Paricutin last erupted in 1952. It was coined one of the natural wonders of the world because mankind witnessed its birth and rapidly growing formation. You can venture on a twelve-mile round-trip to the peak of the volcano, either by hiking or horseback. Hikers will walk through sandy banks and lava fields surrounding the volcano."
    },

    {
      id: 4,
      location: " Zambia and Zimbabwe.",
      title: "Victoria Falls",
      image: Victoria,
      description:
        "This spectacular waterfall runs off from the Zambezi River. Visitors can access the falls from Victoria Falls in Zimbabwe and Livingston in Zambia. Cross the border to gain different perspectives of this magnificent natural wonder. The best views are from Zimbabwe, but you can get a closer experience from Zambia."
    },

    {
      id: 5,
      location: " Nepal and Tibet, China.",
      title: "Mount Everest",
      image: Mount,
      description:
        "Mount Everest has an approximate elevation of 29,029 feet. Mountaineers consider this mountain the highest spot on Earth; however, it is not the tallest mountain in the world, a title that belongs to Mauna Kea in Hawaii.."
    },

    {
      id: 6,
      location: " Austrialia.",
      title: "Great Barrier Reef",
      image: Reef,
      description:
        "As the world's largest coral reef, the Great Barrier Reef includes over 900 islands, roughly 3,000 separate reefs, and sustains a diverse ecosystem. Measuring approximately 2,300 kilometers in length, it covers an immense area of the ocean, much of it a long way offshore."
    },

    {
      id: 7,
      location: " Brazil.",
      title: "Harbor of Rio de Janeiro",
      image: Rio,
      description:
        "The Harbor of Rio de Janeiro is surrounded by granite mountains and pinnacles covered in greenery. Iconic sights surrounding the harbor include Sugar Loaf Mountain, Corcovado Peak, and the Tijuca hills.The traditional way of seeing this natural wonder is to travel via the rack railway to Tijuca National Park. This takes you to the uppermost region, where the statue of Christo Redentor stands atop one of the granite peaks that overlooks the harbor."
    }
  ];

  return (
    <>
      <LandingPage data={data} />
    </>
  );
}

export default App;
