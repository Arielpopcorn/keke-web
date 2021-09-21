import keke from '../constants/images/keke.jpg';
import gen_chang from '../constants/images/genChangHsu.jpg';
import keke_cv from '../constants/pdf/keke_cv.pdf';
import avatar2 from '../constants/images/avatar2.png';

export const MEMBERS = [{
  id: 1,
  name: "Po-Ju Ke",
  position: "Assistant Professor",
  cover: keke,
  content: [{
    id: 1,
    text: "Po-Ju is interested in the community- and ecosystem-level consequences of species interactions, with a particular focus on how plant communities are structured by the interactions among plants and their associated soil microbes. As a community/theoretical ecologist, he enjoys collaborating with other lab members on the variety of projects that they developed. Po-Ju received his PhD from Stanford University, where he studied the temporal dynamics of plant-soil feedbacks and species coexistence theory with ",
    url: null,
  }, {
    id: 2,
    text: "Tadashi Fukami",
    url: "https://web.stanford.edu/~fukamit/",
  }, {
    id: 3,
    text: " He was subsequently a postdoctoral researcher at Princeton University with ",
    url: null
  }, {
    id: 4,
    text: "Jonathan Levine",
    url: "https://levine.princeton.edu/"
  }, {
    id: 5,
    text: ", studying the demographic context of plant-soil feedback, before joining National Taiwan University in 2021.",
    url: null
  }],
  cv: keke_cv
},
{
  id: 2,
  name: "Gen-Chang Hsu",
  position: "Teaching Assistant",
  cover: gen_chang,
  content: [{
    id: 1,
    text: "Gen-Chang’s research interests revolve around species interactions and their ecological dynamics. He is also into data science and visualization (check out his blog ",
    url: null,
  }, {
    id: 2,
    text: "here",
    url: "https://genchanghsu.github.io/ggGallery/",
  }, {
    id: 3,
    text: "). Outdoors and traveling are his favorites outside of research. Currently, Gen-Chang is affiliated with the lab as a teaching assistant for our theoretical ecology course. Learn more about his research and experiences ",
    url: null
  }, {
    id: 4,
    text: "here",
    url: "https://genchanghsu.github.io/",
  }, {
    id: 5,
    text: ". Stay inquisitive and never stop exploring!",
    url: null
  }]
},{
  id: 3,
  name: "You",
  position: "Student",
  cover: avatar2,
  content: [{
    id: 1,
    text: "This could be you!",
    url: null
  }],
  cv: null
}]
