import keke from '../constants/images/keke_headshot.jpg';
import gen_chang from '../constants/images/GenChangHsu.jpg';
import yu_pei from '../constants/images/YuPeiTseng.jpg';
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
  position: "Research Assistant",
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
    text: "). Gen-Chang first joined the lab as a teaching assistant for our theoretical ecology course in 2021 and later became our research assistant. In our lab he conducts greenhouse experiments to study how plant-soil feedbacks vary through time. Learn more about his research and experiences ",
    url: null
  }, {
    id: 4,
    text: "here",
    url: "https://genchanghsu.github.io/",
  }, {
    id: 5,
    text: ". ",
    url: null
  }]
},
{
  id: 3,
  name: "Yu-Pei Tseng",
  position: "Research Assistant",
  cover: yu_pei,
  content: [{
    id: 1,
    text: "Yu-Pei is interested in community and metacommunity ecology, especially in exploring the underlying mechanisms of shaping community assembly and species diversity. She completed her Master’s degree at National Taiwan University. Yu-Pei worked with ",
    url: null,
  }, {
    id: 2,
    text: "David Zelený",
    url: "https://www.davidzeleny.net/veglab/doku.php?id=start",
  }, {
    id: 3,
    text: " to study how the landscape structure affects the local species diversity of woody specialists in montane cloud forests in Taiwan. Yu-Pei joined the lab as a research assistant in 2022 to study the microbial community in forest soil and canopy substrate. ",
    url: null
  }]
},{
  id: 4,
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
