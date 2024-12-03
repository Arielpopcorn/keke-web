import keke from '../constants/images/keke_headshot.jpg';
import gen_chang from '../constants/images/genChangHsu.jpg';
import yu_pei from '../constants/images/YuPeiTseng.jpg';
import sun_yi from '../constants/images/SunYi.jpg';
import ching_lin from '../constants/images/ChingLinHuang.jpg';
import shuo from '../constants/images/ShuoWei.jpg';
import joe from '../constants/images/JoeWan.jpg';
import chin_te from '../constants/images/ChinTeTsai.jpg';
import hsiang_chih from '../constants/images/HsiangChihLo.jpg';
import guan_yu from '../constants/images/GuanYuChen.jpg';
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
},{
  id: 2,
  name: "Joe Wan",
  position: "Postdoctoral Researcher",
  cover: joe,
  content: [{
    id: 1,
    text: "Joe is interested in the interface between community and ecosystem ecology. Since he joined us in 2023, Joe's work has focused on adapting coexistence theory to address a broader range of systems and questions, with forest trees and their microbial interactions as a guiding example. Joe received his doctorate from ETH Zürich in 2023, where he studied the implications of community interactions for carbon cycling with Prof. ",
    url: null,
  }, {
    id: 2,
    text: "Tom Crowther",
    url: "https://crowtherlab.com/about-tom-crowther/",
  }, {
    id: 3,
    text: ". Learn more about his research ",
    url: null
  }, {
    id: 4,
    text: "here",
    url: "https://joe-wan.github.io/",
  }, {
    id: 5,
    text: ".",
    url: null
  }]
},{
  id: 3,
  name: "Chin-Te Tsai",
  position: "Research Assistant",
  cover: chin_te,
  content: [{
    id: 1,
    text: "Chin-Te is interested in exploring the connections between micro- and macro-scales, particularly through the study of interactions between microbiomes and their hosts. Chin-Te completed his master's degree through a joint program between Soochow University and Academia Sinica. From 2022 to 2024, he worked with Professors ",
    url: null,
  }, {
    id: 2,
    text: "Shan-Hua Yang",
    url: "https://sites.google.com/view/shanhuayang/home",
  }, {
    id: 3,
    text: " and ",
    url: null
  }, {
    id: 4,
    text: "Sung-Yin Yang",
    url: "https://scholar.google.com/citations?user=y5kW4akAAAAJ&hl=zh-TW",
  }, {
    id: 5,
    text: ", focusing on the seasonal dynamics of coral reef microbiomes in locations experiencing extreme temperature fluctuations. Chin-Te joined our lab in 2024 and now helps to conduct next-generation sequencing while also developing a research topic of his own.",
    url: null
  }]
},{
  id: 4,
  name: "Yi Sun",
  position: "Research Assistant",
  cover: sun_yi,
  content: [{
    id: 1,
    text: "Sun Yi is interested in predator-prey interactions and predator decision-making, with a particular focus on mimicry systems. During his undergraduate studies at National Taiwan University, he conducted research on the coevolution arms race and color patterns of mimicry systems with Prof. ",
    url: null,
  }, {
    id: 2,
    text: "Hui-Yun Tseng",
    url: "https://lizardweevil.wixsite.com/mysite",
  }, {
    id: 3,
    text: ". Sun Yi joined the lab in 2022 to study how predator learning and mimic-model similarity affect the dynamics of mimicy systems. He completed his Masters in 2024 and is now a research assistant in our lab.",
    url: null
  }]
},{
  id: 5,
  name: "Hsiang-Chih Lo",
  position: "Master student",
  cover: hsiang_chih,
  content: [{
    id: 1,
    text: "Hsiang-Chih is interested in species competition, particularly when the effect of animal behavior is added into the picture. During her undergraduate studies at National Taiwan University, she conducted experiments on fall armyworm in Prof. ",
    url: null,
  }, {
    id: 2,
    text: "Chuan-Kai Ho",
    url: "https://scholar.google.com/citations?user=_SNS7pMAAAAJ&hl=en",
  }, {
    id: 3,
    text: "'s lab. Her research revealed consistent cannibalistic behavior among fall armyworm larvae, despite the potential negative impact of cannibalism on individual performance. These empirical experiences sparked her interest in developing models that integrate cannibalism and intraguild predation, which she has been working on since joining our lab in 2024.",
    url: null
  }]
},{
  id: 6,
  name: "Guan-Yu Chen",
  position: "Master student",
  cover: guan_yu,
  content: [{
    id: 1,
    text: "Guan-Yu is interested in plant-pathogen interactions, especially when such interactions are influenced by other biological factors. Guan-Yu received his bachelor degree from the Department of Plant Pathology, National Chung Hsing University, where he learned many mechanisms of how plants and microorganisms interact, which then inspired him to explore the unknown questions of plant pathosystem with theoretical approach after joining the lab in 2024. Currently, Guan-Yu is studying how hyperparasite affect pathogen strains coexistence in host-pathogen-hyperparasite system.",
    url: null,
  }]
},{
  id: 7,
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


export const ALUMNI = [{
  id: 1,
  name: "Ching-Lin Huang (Andy)",
  position: "Research Assistant (2023/10 - 2024/07)",
  cover: ching_lin,
  content: [{
    id: 1,
    text: "Andy joined the lab in 2023 as a research assistant to develop models that incorporate complex plant demography with plant-soil feedback. He also conducted a greenhouse experiment to study how decaying microbial effects would influence seedling competition. Andy is interested in how dispersal and evolution interactively influence species coexistence. He is now pursuing a PhD degree with Prof. ",
    url: null,
  }, {
    id: 2,
    text: "Alison Shaw",
    url: "https://allisonkshaw.weebly.com/",
  }, {
    id: 3,
    text: " at the University of Minnesota. Learn more about his research ",
    url: null
  }, {
    id: 4,
    text: "here",
    url: "https://scholar.google.com.tw/citations?user=mytujjwAAAAJ&hl=zh-TW&authuser=1",
  }, {
    id: 5,
    text: ". ",
    url: null
  }]
}, {
  id: 2,
  name: "Shou Wei",
  position: "Research Assistant (2023/08 - 2024/07)",
  cover: shuo,
  content: [{
    id: 1,
    text: "Shuo joined the lab as research assistant in 2023 to study the density-dependence of plant-soil microbe interactions. With his expertise in silviculture, he also helped many of our greenhouse experiments. He is interested in forest regeneration and applying trait-based approach to understand how plant communities respond to environmental stress. Shuo is now pursuing a PhD degree with Prof. ",
    url: null,
  }, {
    id: 2,
    text: "Liza Comita",
    url: "http://www.comitalab.com/",
  }, {
    id: 3,
    text: " at Yale University. Learn more about his research ",
    url: null
  }, {
    id: 4,
    text: "here",
    url: "https://scholar.google.com/citations?user=IMxMiFEAAAAJ&hl=en&oi=sra",
  }, {
    id: 5,
    text: ". ",
    url: null
  }]
}, {
  id: 3,
  name: "Yu-Pei Tseng",
  position: "Research Assistant (2022/10 - 2024/04)",
  cover: yu_pei,
  content: [{
    id: 1,
    text: "Yu-Pei joined the lab as a research assistant in 2022 to study the temporal dimensions of plant-soil microbe interactions through a combination of greenhouse experiments and high-throughput sequencing. She has also spearheaded our study on the bird's nest fern microbiome in canopy islands and our project on density-dependent soil conditioning. Yu-Pei is now pursuing a PhD degree with Prof. ",
    url: null,
  }, {
    id: 2,
    text: "Andrew Letten",
    url: "https://andrewletten.wordpress.com/",
  }, {
    id: 3,
    text: " at the University of Queensland, working on the impact of resource fluctuations on microbial communities.",
    url: null
  }]
}, {
  id: 4,
  name: "Gen-Chang Hsu",
  position: "Research Assistant (2022/03 - 2023/06)",
  cover: gen_chang,
  content: [{
    id: 1,
    text: "Gen-Chang’s first joined the lab as a teaching assistant for our theoretical ecology course in 2021 and later became our research assistant. In our lab, he organized field soil sampling and greenhouse experiments to study how plant-soil feedbacks persisted through time. His research interests revolve around species interactions and their ecological dynamics. Gen-Chang is now persuing a PhD degree with Prof. ",
    url: null,
  }, {
    id: 2,
    text: "Jennifer Thaler",
    url: "https://blogs.cornell.edu/thaler/",
  }, {
    id: 3,
    text: " at Connell University. Learn more about his research ",
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
}]
