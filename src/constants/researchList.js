import img1 from '../constants/images/research1.jpg';
import RunHorseLight_1_1 from '../constants/images/RunHorseLight_1.jpg';
import RunHorseLight_1_2 from '../constants/images/RunHorseLight_1_2.jpg';
import RunHorseLight_2_1 from '../constants/images/RunHorseLight_2.jpg';
import RunHorseLight_3_1 from '../constants/images/RunHorseLight_3.jpg';
import RunHorseLight_3_2 from '../constants/images/RunHorseLight_3_2.jpg';
import RunHorseLight_4_1 from '../constants/images/RunHorseLight_4.jpg';
import RunHorseLight_4_2 from '../constants/images/RunHorseLight_4_2.jpg';
import RunHorseLight_5_1 from '../constants/images/RunHorseLight_5.jpg';
import img2 from '../constants/images/research2.jpg';
import img3 from '../constants/images/research3.jpg';
import img4 from '../constants/images/research4.jpg';
import img5 from '../constants/images/research5.jpg';

export const RESEARCH_LIST = [{
    id: "1",
    slides: [RunHorseLight_1_1, RunHorseLight_1_2],
    title: "Temporal dimension of PSF",
    cover: img1,
    tags:  ['All', 'Plant-soil feedback', 'Ontogenetic niche shift'],
    paragraph: [
      "Plant conditioning of soil microbial communities is a time-dependent process, but how PSF strengths vary with the duration of soil conditioning and whether plants differ in their temporal development pattern of PSF remains unknown. This information is critical when predicting the consequences of PSF because plant individuals may experience different microbial effects depending on how long neighboring plants have conditioned the soil. In the past, we have tackled this problem with annual aerial photos of a Californian foredune ecosystem. Using GIS spatial analysis, we estimated the age of individual plants and reconstructed >20-year chronosequence of soil conditioning length for all four dominant plants in the community. With a combination of high-throughput sequencing and greenhouse experiments, we have shown that soil microbial communities are continuously turning over due to plant conditioning and the PSF resulting from these shifts in microbial communities exhibit different temporal patterns depending on the plant-soil combination (Ke et al., 2021, New Phytologist).",
      "",
      "We have also tackled this research theme via theoretical models. Current models of PSF often make simplifying assumptions when describing soil microbial dynamics and plant demographic processes, obscuring the temporal factors that regulate how soil microbes affect plant communities. Our lab continues to develop models that incorporate different temporal dimensions of plant-soil microbe interactions. One example is that we developed a novel patch occupancy model to show that whether or not microbial effects are cross-generational critically affects the ability of host-specific pathogens to promote plant coexistence (Ke and Levine, 2021, The American Naturalist). This model highlights two key factors that determine the temporal extent of microbial effects: the plant demographic transition affected by soil microbes (i.e., ontogeny) and the decay rate of microbial effects between consecutive plant generations (i.e., interaction timing).",
      "",
      "Our theoretical research has motivated us to design PSF experiments that better capture how plant-soil microbe interactions operate in nature. A common practice in PSF experiments is to transplant target species immediately after soil conditioning. However, for some plant communities, this is not an accurate representation of when plants interact with soil microbes, thereby biasing the estimation of microbial effects. We are developing PSF experiments, in ecosystems including the California chaparral and Taiwan’s subtropical forests, that better capture the decay process of PSF to understand their community-level consequences. By incorporating the natural demographic context into PSF experiments, we aim to improve our understanding of the role PSF plays in various systems.",
    ]
  }, {
    id: "2",
    slides: [RunHorseLight_2_1],
    title: "Mechanistic understanding of PSF",
    cover: img2,
    tags:  ['All', 'Plant-soil feedback'],
    paragraph: [
      "PSF studies often treat the soil microbial community as a black box that has either a net positive of negative effect on plant performance. However, the microbial community consists of many different functional groups, each with different direct and indirect interactions with other belowground processes. Our ability to predict the strength and impact of PSF would be low unless we take a mechanistic peek into the black box by considering these complex indirect interactions.",
      "",
      "In the past, we had developed models to investigate the interdependency among two major belowground processes: plant-mediated nutrient cycling (i.e., litter-mediated PSF) and plant-soil microbe interactions (i.e., microbial-mediated PSF). we have shown that plant litter decomposability, a key trait controlling nutrient cycling, has a strong positive effect on a plant’s PSF strength when mycorrhizal fungi are abundant, but not when pathogens dominate the microbial community. This result stems from the fact that the two microbial functional groups have different indirect interactions with litter dynamics. In particular, mycorrhizal fungi create an environment with depleted soil nutrient and enhanced litter production, and therefore the benefits of having higher litter decomposability are amplified under such an environment. Data compiled from empirical studies also supported this theoretical prediction (Ke et al., 2015, New Phytologist; Ke and Miki, 2015, Frontiers in Microbiology).",
      "",
      "In recent collaborations, we are building mechanistic models that further integrate litter- and microbial-mediated PSFs into resource competition theory. For example, we are considering how different microbial functions groups (e.g., pathogens, mutualists, decomposers) influences the supply and demand of soil nutrients during plant competition. We are also conducting experiments to study how litter input affects the decay of PSF in California chaparral ecosystems. Together, we believe this will allow us to better predict the consequences of PSF across environmental contexts.",
    ]
  }, {
    id: "3",
    slides: [RunHorseLight_3_1, RunHorseLight_3_2],
    title: "Linking PSF and coexistence theory",
    cover: img3,
    tags: ['All', 'Plant-soil feedback', 'Species coexistence'],
    paragraph: [
      "Growing evidence shows that soil microbes affect plant coexistence in a variety of systems. However, since these systems vary in the impacts microbes have on plants and in the ways plants compete with each other, it is challenging to integrate results into a general predictive theory. To this end, we have suggested that the concepts of niche and fitness difference from modern coexistence theory should be used to contextualize the diverse effects soil microbes have on plant coexistence (Ke and Wan, 2020, Ecological Monographs). For example, by applying modern coexistence theory to a mechanistic model of plant-soil feedback, we have clarified how the interaction network predicts whether soil microbes affect primarily niche or fitness differences among competing plant, and how soil microbes affect the importance of plant-plant competition for resources. Based on perspectives from coexistence theory, we have also proposed an efficient experimental framework that can simultaneously quantify microbial effects and plant-plant competition. In recent collaborations, we are applying this experimental design to understand plant competitive dynamics in natural ecosystems.",
    ]
  }, {
    id: "4",
    slides: [RunHorseLight_4_1, RunHorseLight_4_2],
    title: "Synthesizing coexistence theories",
    cover: img4,
    tags: ['All', 'Species coexistence'],
    paragraph: [
      "When developing models to describe competitive interactions, two approaches are broadly applicable to various organisms. Some ecologists adopt a phenomenological approach, which seeks to capture an aggregated measure of the negative effects species have on each other and does not require full knowledge on how species compete (i.e., Lotka-Volterra models). In contrast, others adopt a mechanistic approach, which attempts to gain a highly resolved understanding of the competitive process by directly modeling the limiting factors underlying competition (e.g., consumer-resource models). Despite shared goals, little communication and translation of governing principles across the two perspectives preclude further conceptual advances at their interface.",
      "",
      "We have made an attempt to integrate these two approaches. We focused on modern coexistence theory, a prominent theoretical framework mainly based on phenomenological models, which recognizes stabilizing (i.e., increasing species’ niche differences) and equalizing (i.e., decreasing species’ fitness differences) processes as two higher-level ecological forces maintaining coexistence. By linking modern coexistence theory with a consumer-resource model, we have demonstrated that mechanistic models could provide an explicit connection between causal mechanisms and emergent phenomena. Specifically, we have shown how changes in resource supply and consumer traits translate into stabilizing and equalizing forces that either leads to coexistence (Letten et al, 2017, Ecological Monographs) or priority effects (Ke and Letten, 2018, Nature Ecology and Evolution).", 
      "",
      "In recent collaborations, we are digging further into the details of calculating the niche and fitness components of modern coexistence theory. In particular, we are studying how different definitions give different interpretations of the underlying mechanisms that shape species coexistence and relative abundance. Furthermore, with collaborators we are also incorporating metabolic theory into our synthetic framework, thereby linking the effects of temperature on organismal performance to competitive interactions and biodiversity.", 
    ]
  }, {
    id: "5",
    slides: [RunHorseLight_5_1],
    title: "Stage dependent species interactions",
    cover: img5,   
    tags: ['All', 'Ontogenetic niche shift'],
    paragraph: [
      "The strength of species interactions is often assumed to be fixed through time. However, greater awareness of the temporal complexity of ecological communities has urged ecologists to challenge this viewpoint. In particular, there is a pressing need to understand how species’ phenology, ontogeny, and stage structure modify the way interactions are coordinated in time and their impact on community structure.",
      "",
      "Our lab combines both empirical and theoretical approaches to develop a temporally-explicit perspective of community ecology. For example, we had developed a model that integrates stage-structured food-web theory with the theory of hybrid community (i.e. mixture of different interaction types), considering that not only diet but also interaction type often changes because of ontogenetic niche shift (e.g. the metamorphosis of pollinating insects, in which juveniles and adults are herbivores and pollinators, respectively). With this model, we suggested that ontogenetic antagonism-mutualism coupling stabilizes community dynamics in that it increases the potential for species coexistence in unproductive environments while improving community resilience in productive environments (Ke and Nakazawa, 2018, Oikos).",
      "",
      "We have also studied the temporal dimension of species interactions using plant-soil microbe interactions as a model system. For example, we developed a model of plant-soil interactions where seedlings and adults were affected by microbes differently and have different effects on nutrient cycling (Ke et al., 2015, New Phytologist). We have also combined aerial photo analysis, high-throughput sequencing, greenhouse experiments, and ecological modeling to study how plant-soil microbe interactions change with the length of soil conditioning and decay (Ke et al., 2021, New Phytologist; Ke and Levine, 2021, The American Naturalist). We hope to further develop this research theme in the future.",
    ]
  }
];
