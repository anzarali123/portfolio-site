import fashionkart from "./fashionkart.png";
import netflix from "./netflix.png";
import thunderbolt from "./thunderbolt.png";
import traveleasy from "./traveleasy.png";

const data = [
  {
    img: netflix,
    title: "Netflix Clone",
    builtWith: "React,TMDB API, Firebase, Node, Mongodb, Express",
    code: "https://github.com/anzarali123/netflix_clone",
    live: "https://anzarali-netflix.herokuapp.com/signin",
    description:
      "A netflix clone which uses TMDB API to fetch movies and shows.Firebase is used to sign in and signup the user.Implemented a functionality to add and remove movies to your list using node, express and mongodb.",
  },
  {
    img: fashionkart,
    title: "Fashionkart",
    builtWith: "React, Firebase , Context API ,Stripe API ,",
    code: "https://github.com/anzarali123/fashionkart",
    live: "https://anzarali-fashionkart.netlify.app/",
    description:
      "A fully fledged e-commerce application with sign in and signup functionality using firebase.Also implemented a stripe API for payments.",
  },

  {
    img: thunderbolt,
    title: "Thunderbolt",
    builtWith: "React, Chakra UI,Node,Express,Mongodb,Socket.io,Cloudinary",
    code: "https://github.com/anzarali123/Thunderbolt-v2",
    live: "https://anzarali-thunderbolt.herokuapp.com/",
    description:
      "A real time chat application where you can create a group chat and can also do a one on one chat.Used Chakra-UI for the frontend, nodejs for the backend and mongodb to store data.",
  },

  {
    img: traveleasy,
    title: "TravelEasy",
    builtWith: "React, Material-UI, Travel API, Mapbox",
    code: "https://github.com/anzarali123/TravelEasy",
    live: "https://anzarali-traveleasy.netlify.app/",
    description:
      "Built with React and material-ui, this application fetches restaurants all around the world.Also integrated a map using mapbox.Rapid api is used to fetch the restaurants data.",
  },
];

export default data;
