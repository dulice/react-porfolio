import mernEcom from "../image/mern-ecom.png";
import bookingApp from "../image/booking-app.png";
import crypto from "../image/crypto.png";
import movieImg from "../image/movie.png";
import cooking from "../image/cooking.png";
import social from "../image/social.png";
import drawing from "../image/drawing.png";

export const data = [
  {
    id: "0",
    name: "Ecommerce Website",
    image: mernEcom,
    demo: "https://shopmm-clone.onrender.com",
    source: "https://github.com/dulice/shopmm-clone",
    description:
      "Build ecommerce website create frontend with REACT, backend with EXPRESS and store data into MONGODB. I am using frontend with Reactjs and user global control state Context Api. Using backend with nodejs framework express and store data with Mongodb. For UI using MaterialUI, store data with REDUX, fetch data with REDUX TOOLKIT, store image into CLOUDINARY, chat customer and admin with SOCKET.IO, payment gateway with STRIPE.<br/><br/>Card Number: 4242 4242 4242 4242<br/> MM/YY: 12 / 24 <br/>CVC: 123 <br/>",
  },
  {
    id: "1",
    name: "Social Website",
    image: social,
    demo: "https://social-hub-tbrg.onrender.com",
    source: "https://github.com/dulice/social-app",
    description: `This social media project create frontend with REACT, backend with EXPRESS and store data into MONGODB.<br/> 
      For UI using tailwindCss, store user information with redux, chat data with context hook, store image with cloudinary`,
  },
  {
    id: "2",
    name: "Booking App",
    image: bookingApp,
    demo: "https://hotelbooking-dulice.netlify.app",
    source: "https://github.com/dulice/booking",
    description: `In this hotel booking project, we use frontend with react library, managment a state with context hook, manipulate titles with helmet, create a protected route and use stripe payment gateway.<br/>
      Create a backend with node express framework, use mongodb database, create schema with mongoose, authentication with jsonwebtoken, encrypt password is bcrypt.`,
  },
  {
    id: "3",
    name: "Crypto Currency Tracker",
    image: crypto,
    demo: "https://ddcrypto-hunter.netlify.app/",
    source: "https://github.com/dulice/crypto-tracker",
    description:
      "This is a crypto tracker app using frontend with React and fetching api with redux toolkit. To get top crypto currency, fetching api from coin ranking and to get the daily news update of crypto currency, fetching api from bing news search api.",
  },
  {
    id: "4",
    name: "Movie Trailer App",
    image: movieImg,
    demo: "https://ddmovie.netlify.app/",
    source: "https://github.com/dulice/movie-app",
    description:
      "This is a full responsive movie trailer App include search bar, top movie, top tv show, popular people, etc. Using frontend as a Reactjs and CSS framwork Bootstrap. Fetching data from TMDB.",
  },
  {
    id: "5",
    name: "Cooking Recipe App",
    image: cooking,
    demo: "https://recipe-app-dulice.netlify.app/",
    source: "https://github.com/dulice/cooking-app",
    description:
      "I created cooking recipe app using React and fetching api from spoonacular. You can search every recipe and can see the instruction and also ingredients.",
  },
  {
    id: "6",
    name: "Drawing App",
    image: drawing,
    demo: "https://drawing-app-dulice.vercel.app/",
    source: "https://github.com/dulice/drawing-app",
    description: "Build drawing website with HTML, CSS and Typescript",
  },
];
