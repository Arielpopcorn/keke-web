import pdf_2015_1 from '../constants/pdf/2015_Ke_et_al_2015_NewPhytologist.pdf';
import pdf_2015_2 from '../constants/pdf/2015_Ke_and_Miki_2015_FrontiersMicrobiology.pdf';
import pdf_2017_1 from '../constants/pdf/2017_Letten_et_al_2017_EcologicalMonographs.pdf';
import pdf_2018_1 from '../constants/pdf/2018_Miki_et_al_2018_EcologicalResearch.pdf';
import pdf_2018_2 from '../constants/pdf/2018_Ke_and_Nakazawa_2018_Oikos.pdf';
import pdf_2018_3 from '../constants/pdf/2018_Letten_et_al_2018_PNAS.pdf';
import pdf_2018_4 from '../constants/pdf/2018_Ke_and_Letten_2018_NatureEcolEvol.pdf';
import pdf_2018_5 from '../constants/pdf/2018_Smith_et_al_2018_NatureEcolEvol.pdf';
import pdf_2020_1 from '../constants/pdf/2020_Ke_and_Wan_2020_EcologicalMonographs.pdf';
import pdf_2020_2 from '../constants/pdf/2020_Chang_et_al_2020_EcologicalModelling.pdf';
import pdf_2021_1 from '../constants/pdf/2021_Tao_et_al_2021_EcologyEvolution.pdf';
import pdf_2021_2 from '../constants/pdf/2021_Ke_et_al_2021_NewPhytologist.pdf';
import pdf_2021_3 from '../constants/pdf/2021_Ke_and_Levine_2021_AmericanNaturalist.pdf';
import pdf_2021_4 from '../constants/pdf/2021_Chang_et_el_2021_EcologyLetters.pdf';
import pdf_2022_1 from '../constants/pdf/2022_Grainger_et_al_2022_AmericanNaturalist.pdf';
import pdf_2022_2 from '../constants/pdf/2022_DeMalach_et_al_2022_Ecology.pdf';
import pdf_2022_3 from '../constants/pdf/2022_Ou_et_al_2022_BioScience.pdf';
import pdf_2022_4 from '../constants/pdf/2022_Ke_2022_NatureEcolEvol.pdf';
import pdf_2023_1 from '../constants/pdf/2023_Ke_and_Wan_2023_PlantSoil.pdf';
import pdf_2023_2 from '../constants/pdf/2023_VanNuland_et_al_2023_JEcol.pdf';
import pdf_2023_3 from '../constants/pdf/2023_Spaak_et_al_2023_Oikos.pdf';
import pdf_2023_4 from '../constants/pdf/2023_Blonder_et_al_2023_Oikos.pdf';
import pdf_2023_5 from '../constants/pdf/2023_Spaak_et_al_2023_TheoreticalEcology.pdf';
import pdf_2023_6 from '../constants/pdf/2023_Chung_et_al_2023_JEcol.pdf';
import pdf_2024_1 from '../constants/pdf/2024_Simha_et_al_2024_BulletinESA.pdf';


export const PUBLICATIONS = [{
  id: "1",
  title: "The soil microbial community predicts the importance of plant traits in plant–soil feedback",
  authors : ["Po-Ju Ke", "Takeshi Miki", "Tzung-Su Ding"],
  year: "2015",
  magazine: "New Phytologist, 206(1), 329-341",
  highlighted: [{
    id: 1,
    content: [{
      id: 1,
      text: "Cover featured paper",
      url: "https://nph.onlinelibrary.wiley.com/doi/abs/10.1111/nph.13050",
    }]
  }, {
    id: 2,
    content: [{
      id: 1,
      text: "See also ",
      url: null,
    }, {
      id: 2,
      text: "commentary article by Kardol et al. (2015)",
      url: "https://nph.onlinelibrary.wiley.com/doi/full/10.1111/nph.13283",
    }, {
      id: 3,
      text: " New Phytologist, 206(1), 1-4",
      url: null
    }]
  }, {
    id: 3,
    content: [{
      id: 1,
      text: "See also recommendation by Bernhard Schmid, Faculty of 1000 Ecology",
      url: "https://facultyopinions.com/prime/725282790"
    }],
  }],
  pdf: pdf_2015_1,
  doi: "https://nph.onlinelibrary.wiley.com/doi/full/10.1111/nph.13215"
}, {
  id: "2",
  title: "Incorporating the soil environment and microbial community into plant competition theory",
  authors : ["Po-Ju Ke", "Takeshi Mik"],
  year: "2015",
  magazine: "Frontiers in Microbiology, 6: 1066 ",
  highlighted: [],
  pdf: pdf_2015_2,
  doi: "https://www.frontiersin.org/articles/10.3389/fmicb.2015.01066/full"
}, {
  id: "3",
  title: "Linking modern coexistence theory and contemporary niche theory",
  authors : ["Andrew D. Letten*", "Po-Ju Ke*", "Tadashi Fukami"],
  year: "2017",
  magazine: "Ecological Monograph, 87(2), 161-177",
  highlighted: [{
    id: 1,
    content: [{
      id: 1,
      text: "Cover featured paper",
      url: "https://esajournals.onlinelibrary.wiley.com/doi/abs/10.1002/ecm.1266",
    }]
  }, {
    id: 2,
    content: [{
      id: 1,
      text: "Selected for ",
      url: null,
    }, {
      id: 2,
      text: "Outstanding Ecological Theory Paper Award, ESA Theory section",
      url: "https://www.esa.org/theory/awards/past-outstanding-paper-award-recipients/"
    }]
  }, {
    id: 3,
    content: [{
      id: 1,
      text: "See also ",
      url: null,
    }, {
      id: 2,
      text: "recommendation by Da-Yong Zhang",
      url: "https://facultyopinions.com/prime/727070419",
    }, {
      id: 3,
      text: ", Faculty of 1000 Ecology",
      url: null
    }]
  }, {
    id: 4,
    content: [{
      id: 1,
      text: "Included in BES/ESA joint virtual issue, Biodiversity and Ecosystem Services",
      url: "https://besjournals.onlinelibrary.wiley.com/hub/bes_esa-biodiversity-and-ecosystem-services",
    }]
  }],
  pdf: pdf_2017_1,
  doi: "https://esajournals.onlinelibrary.wiley.com/doi/10.1002/ecm.1242"
}, {
  id: "4",
  title: "Statistical recipe for quantifying microbial functional diversity from EcoPlate metabolic profiling",
  authors : ["Takeshi Miki*", "Taichi Yokokawa*", "Po-Ju Ke", "I-Fang Hsieh", "Chih-hao Hsieh", "Tomonori Kume", "Kinuyo Yoneya", "Kazaaki Matsui"],
  year: "2018",
  magazine: "Ecological Research, 33(1), 249-260",
  highlighted: [],
  pdf: pdf_2018_1,
  doi: "https://esj-journals.onlinelibrary.wiley.com/doi/abs/10.1007/s11284-017-1554-0"
}, {
  id: "5",
  title: "Ontogenetic antagonism-mutualism coupling: perspectives on resilience of stage-structured communities",
  authors : ["Po-Ju Ke", "Takefumi Nakazawa"],
  year: "2018",
  magazine: "Oikos, 127(3), 353-363",
  highlighted: [],
  pdf: pdf_2018_2,
  doi: "https://onlinelibrary.wiley.com/doi/10.1111/oik.04702"
}, {
  id: "6",
  title: "Species coexistence through simultaneous fluctuation-dependent mechanisms",
  authors : ["Andrew D. Letten", "Manpreet K. Dhami", "Po-Ju Ke", "Tadashi Fukami"],
  year: "2018",
  magazine: "Proceedings of the National Academy of Science of the United States of America, 115(26), 6745-6750",
  highlighted: [{
    id: 1,
    content: [{
      id: 1,
      text: "Cover featured paper",
      url: "https://www.pnas.org/content/115/26.cover-expansion",
    }]
  }, {
    id: 2,
    content: [{
      id: 1,
      text: "See also ",
      url: null
    }, {
      id: 2,
      text: "news cover in Stanford News by Taylor Kubota",
      url: "https://news.stanford.edu/2018/06/11/nectar-research-sheds-light-ecological-theory/",
    }]
  }],
  pdf: pdf_2018_3,
  doi: "https://www.pnas.org/content/115/26/6745"
}, {
  id: "7",
  title: "Coexistence theory and the frequency-dependence of priority effects",
  authors : ["Po-Ju Ke*", "Andrew D. Letten*"],
  year: "2018",
  magazine: "Nature Ecology & Evolution, 2, 1691-1695",
  highlighted: [],
  pdf: pdf_2018_4,
  doi: "https://www.nature.com/articles/s41559-018-0679-z?proof=t"
}, {
  id: "8",
  title: "A global test of ecoregions",
  authors : ["Jeffery R. Smith", "Andrew D. Letten", "Po-Ju Ke", "Christopher B. Anderson", "J. Nicholas Hendershot", "Manpreet K. Dhami", "Glade A. Dlott", "Tess N. Grainger", "Meghan E. Howard", "Beth M. L. Morrison", "Devin Routh", "Priscilla A. San Juan", "Harold A. Mooney", "Erin A. Mordecai", "Thomas W. Crowther", "Gretchen C. Daily"],
  year: "2018",
  magazine: "Nature Ecology & Evolution, 2, 1889-1896",
  highlighted: [{
    id: 1,
    content: [{
      id: 1,
      text: "See also ",
      url: null
    }, {
      id: 2,
      text:  "news cover in Stanford News by Rob Jordan",
      url: "https://datascience.stanford.edu/news/stanford-researchers-unveil-clues-could-lead-more-affordable-and-effective-conservation-species",
    }]
  }, {
    id: 2,
    content: [{
      id: 1,
      text: "Included in the collection ",
      url: null
    }, {
      id: 2,
      text: "collection of articles",
      url: "https://www.nature.com/collections/ceaeaabjia/",
    }, {
      id: 3,
      text: " celebrating Alexander von Humboldt 250 anniversary",
      url: null
    }]
  }],
  pdf: pdf_2018_5,
  doi: "https://www.nature.com/articles/s41559-018-0709-x"
}, {
  id: "9",
  title: "Effects of soil microbes on plant competition: A perspective from modern coexistence theory",
  authors : ["Po-Ju Ke*", "Joe Wan*"],
  year: "2020",
  magazine: "Ecological Monographs, 90(1): e01391",
  highlighted: [{
    id: 1,
    content: [{
      id: 1,
      text: "Cover featured paper",
      url: "https://esajournals.onlinelibrary.wiley.com/doi/10.1002/ecm.1320"
    }]
  }, {
    id: 2,
    content: [{
      id: 1,
      text: "Selected for ",
      url: null,
    }, {
      id: 2,
      text: "Postdoctoral Excellence Award",
      url: "https://www.esa.org/plantpopulation/awards/",
    }, {
      id: 3,
      text: ", ESA Plant Population Ecology section",
      url: null
    }]
  }],
  pdf: pdf_2020_1,
  doi: "https://esajournals.onlinelibrary.wiley.com/doi/abs/10.1002/ecm.1391"
}, {
  id: "10",
  title: "Weak intra-guild predation facilitates consumer coexistence but does not guarantee higher consumer density",
  authors : ["Feng-Hsun Chang", "Po-Ju Ke", "Bradley Cardinale"],
  year: "2020",
  magazine: "Ecological Modelling, 424: 109019",
  highlighted: [],
  pdf: pdf_2020_2,
  doi: "https://www.sciencedirect.com/science/article/abs/pii/S0304380020300910?via=ihub"
}, {
  id: "11",
  title: "Age-specific habitat preference, carrying capacity, and landscape structure determine the response of population spatial variability to fishing-driven age truncation",
  authors : ["Hsiao-Hang Tao", "Gaël Dur", "Po-Ju Ke", "Sami Souissi", "Chih-hao Hsieh"],
  year: "2021",
  magazine: "Ecology and Evolution, 11(11), 6358-6370",
  highlighted: [],
  pdf: pdf_2021_1,
  doi: "https://onlinelibrary.wiley.com/doi/full/10.1002/ece3.7486"
}, {
  id: "12",
  title: "Dynamic plant-soil microbe interactions: the neglected effect of soil conditioning time",
  authors : ["Po-Ju Ke", "Peter C. Zee", "Tadashi Fukami"],
  year: "2021",
  magazine: "New Phytologist, 231(4), 1546-1558",
  highlighted: [],
  pdf: pdf_2021_2,
  doi: "https://nph.onlinelibrary.wiley.com/doi/10.1111/nph.17420?af=R"
}, {
  id: "13",
  title: "The temporal dimension of plant-soil microbe interactions: mechanisms promoting feedback between generations",
  authors : ["Po-Ju Ke", "Jonathan M. Levine"],
  year: "2021",
  magazine: "The American Naturalist, 198(3), E80-E94",
  highlighted: [],
  pdf: pdf_2021_3,
  doi: "https://www.journals.uchicago.edu/doi/10.1086/715577"
}, {
  id: "14",
  title: "Reconstructing large interaction networks from empirical time series data",
  authors : ["Chun-Wei Chang", "Takeshi Miki", "Masayuki Ushio", "Po-Ju Ke", "Hsiao-Pei Lu", "Fuh-Kwo Shiah", "Chih-hao Hsieh"],
  year: "2021",
  magazine: "Ecology Letters, 24(12), 2763-2774",
  highlighted: [],
  pdf: pdf_2021_4,
  doi: "https://onlinelibrary.wiley.com/doi/abs/10.1111/ele.13897"
}, {
  id: "15",
  title: "An empiricist’s guide to using ecological theory",
  authors : ["Tess N. Grainger", "Athmanathan Senthilnathan*", "Po-Ju Ke*", "Matthew A. Barbour", "Natalie T. Jones", "John P. DeLong", "Sarah P. Otto", "Mary I. O’Connor", "Kyle E. Coblentz", "Nikunj Goel", "Jawad Sakarchi", "Megan Szojka", "Jonathan M. Levine", "Rachel M. Germain"],
  year: "2022",
  magazine: "The Amerian Naturalist, 199(1), 1-20",
  highlighted: [{
    id: 1,
    content: [{
      id: 1,
      text: "See also ",
      url: null,
    }, {
      id: 2,
      text: "recommendation by Kimberley Mathot",
      url: "https://facultyopinions.com/article/740903973",
    }, {
      id: 3,
      text: ", Faculty of 1000 Ecology",
      url: null
    }]
  }],
  pdf: pdf_2022_1,
  doi: "https://www.journals.uchicago.edu/doi/10.1086/717206"
}, {
  id: "16",
  title: "The effects of ecological selection on species diversity and trait distribution: predictions and an empirical test",
  authors : ["Niv DeMalach", "Po-Ju Ke", "Tadashi Fukami"],
  year: "2022",
  magazine: "Ecology, 103(1): e03567",
  highlighted: [],
  pdf: pdf_2022_2,
  doi: "https://esajournals.onlinelibrary.wiley.com/doi/ftr/10.1002/ecy.3567"
}
, {
  id: "17",
  title: "Writing accessible theory in ecology and evolution: Insights from cognitive load theory",
  authors : ["William J-A Ou", "Gil J. B. Henriques", "Athmanathan Senthilnathan", "Po-Ju Ke", "Tess N. Grainger", "Rachel M. Germain"],
  year: "2022",
  magazine: "BioScience, 72(3), 300-313",
  highlighted: [{
    id: 1,
    content: [{
      id: 1,
      text: "See also ",
      url: null,
    }, {
      id: 2,
      text: "recommendation by Ryan Chisholm",
      url: "https://facultyopinions.com/article/741557142",
    }, {
      id: 3,
      text: ", Faculty of 1000 Ecology",
      url: null
    }]
  }],
  pdf: pdf_2022_3,
  doi: "https://academic.oup.com/bioscience/article-abstract/72/3/300/6482999"
}, {
  id: "18",
  title: "Water shifts the balance of coexistence",
  authors : ["Po-Ju Ke"],
  year: "2022",
  magazine: "Nature Ecology & Evolution, 6, 496-497",
  highlighted: [],
  pdf: pdf_2022_4,
  doi: "https://www.nature.com/articles/s41559-022-01725-y"
}, {
  id: "19",
  title: "Mycorrhizal nutrient acquisition strategies shape tree competition and coexistence dynamics",
  authors : ["Michael E. Van Nuland", "Po-Ju Ke", "Joe Wan", "Kabir G. Peay"],
  year: "2023",
  magazine: "Journal of Ecology, 111(3), 564-577",
  highlighted: [],
  pdf: pdf_2023_2,
  doi: "https://besjournals.onlinelibrary.wiley.com/doi/abs/10.1111/1365-2745.14040"
}, {
  id: "20",
  title: "A general approach for quantifying microbial effects on plant competition",
  authors : ["Po-Ju Ke*", "Joe Wan*"],
  year: "2023",
  magazine: "Plant and soil, 485, 57-70",
  highlighted: [],
  pdf: pdf_2023_1,
  doi: "https://link.springer.com/article/10.1007/s11104-022-05744-3"
}, {
  id: "21",
  title: "Different measures of niche and fitness differences tell different tales",
  authors : ["Jurg W. Spaak", "Po-Ju Ke", "Andrew D. Letten", "Frederik De Laender"],
  year: "2023",
  magazine: "Oikos, 2023(4): e09573",
  highlighted: [],
  pdf: pdf_2023_3,
  doi: "https://onlinelibrary.wiley.com/doi/full/10.1111/oik.09573"
}, {
  id: "22",
  title: "Predicting and controlling ecological communities via trait and environment mediated parameterizations of dynamical models",
  authors : ["Benjamin W. Blonder", "Pierre Gauzere", "Lars L. Iversen", "Po-Ju Ke", "William K. Petry", "Courtenay A. Ray", "Roberto Salguero-Gomez", "William Sharpless", "Cyrille Violle"],
  year: "2023",
  magazine: "Oikos, 2023(6): e09415",
  highlighted: [{
    id: 1,
    content: [{
      id: 1,
      text: "Editor's choice",
    }]
  }],
  pdf: pdf_2023_4,
  doi: "https://onlinelibrary.wiley.com/doi/full/10.1111/oik.09415"
}, {
  id: "23",
  title: "The effect of non-linear competitive interactions on quantifying niche and fitness differences",
  authors : ["Jurg W. Spaak", "Remi Millet", "Po-Ju Ke", "Andrew D. Letten", "Frederik De Laender"],
  year: "2023",
  magazine: "Theoretical Ecology, 16, 161–170",
  highlighted: [],
  pdf: pdf_2023_5,
  doi: "https://link.springer.com/article/10.1007/s12080-023-00560-6"
}, {
  id: "24",
  title: "Mechanistic approaches to investigate soil microbe-mediated plant competition",
  authors : ["Y. Anny Chung", "Po-Ju Ke", "Peter B. Adler"],
  year: "2023",
  magazine: "Journal of Ecology, 111(8), 1587-1810",
  highlighted: [],
  pdf: pdf_2023_6,
  doi: "https://besjournals.onlinelibrary.wiley.com/doi/10.1111/1365-2745.14156"
}, {
  id: "25",
  title: "When the window is a mirror: how do dominant theories limit our understanding of nature? (ESA 2023 INS23)",
  authors : ["Anita Simha", "Aubrie James", "Julia D. Monk", "Heng-Xing Zou", "Po-Ju Ke", "Alexandra Wright", "Malyon D. Bimler", "Christopher M. Moore", "Suzanne Pierre", "Lauren N. Carley", "Gaurav Kandlikar"],
  year: "2024",
  magazine: "The Bulletin of the Ecological Society of America, 2024: e02145",
  highlighted: [],
  pdf: pdf_2024_1,
  doi: "https://esajournals.onlinelibrary.wiley.com/doi/10.1002/bes2.2145"
}];
