import proj1 from "../assets/artist.jpg";
import proj2 from "../assets/weather.webp";
import proj3 from "../assets/ecommerce.avif";

export const ProjectList = [
  {
    id: 0,
    name: "Artists Profile Builder App",
    image: proj1,
    skills: "React, NodeJs, Express,ContextApi,MongoDb,Mern-stack",
    desc: "An app with authentication. Allows user to build a profile for their favorite artists (name, image-Url ,genre, country and a description). Also users can save Artists-profile to the favorites and view them in favorites tab.",
  },
  {
    id: 1,
    name: "Weather Updates App",
    image: proj2,
    skills: "React,ContextApi",
    desc: "A weather updates application. Takes in country, city, town name and returns the current weather conditions in that area i.e. temperature, humidity, is it raining? etc",
  },
  {
    id: 2,
    name: "Ecommerce-stores",
    image: proj3,
    skills: "React,NodeJs,Express,ContextApi,MongoDb,mern-stack",
    desc: "A full-stack MERN Ecommerce-stores with authentication and stripe payments integration",
  },
];
