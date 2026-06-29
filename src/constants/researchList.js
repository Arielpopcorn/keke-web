import img1 from '../constants/images/research1.jpg';
import RunHorseLight_1_1 from '../constants/images/RunHorseLight_1_1.jpg';
import RunHorseLight_1_2 from '../constants/images/RunHorseLight_1_2.jpg';
import RunHorseLight_1_3 from '../constants/images/RunHorseLight_1_3.jpg';
import RunHorseLight_1_4 from '../constants/images/RunHorseLight_1_4.jpg';
import img2 from '../constants/images/research2.jpg';
import RunHorseLight_2_1 from '../constants/images/RunHorseLight_2_1.jpg';
import RunHorseLight_2_2 from '../constants/images/RunHorseLight_2_2.jpg';
import img3 from '../constants/images/research3.jpg';
import RunHorseLight_3_1 from '../constants/images/RunHorseLight_3_1.jpg';
import RunHorseLight_3_2 from '../constants/images/RunHorseLight_3_2.jpg';
import RunHorseLight_3_3 from '../constants/images/RunHorseLight_3_3.jpg';
import img4 from '../constants/images/research4.jpg';
import RunHorseLight_4_1 from '../constants/images/RunHorseLight_4_1.jpg';
import RunHorseLight_4_2 from '../constants/images/RunHorseLight_4_2.jpg';
import RunHorseLight_4_3 from '../constants/images/RunHorseLight_4_3.jpg';
import img5 from '../constants/images/research5.jpg';
import RunHorseLight_5_1 from '../constants/images/RunHorseLight_5_1.jpg';
import RunHorseLight_5_2 from '../constants/images/RunHorseLight_5_2.jpg';
import img6 from '../constants/images/research6.jpg';
import RunHorseLight_6_1 from '../constants/images/RunHorseLight_6_1.jpg';
import RunHorseLight_6_2 from '../constants/images/RunHorseLight_6_2.jpg';

export const RESEARCH_LIST = [{
    id: "1",
    slides: [RunHorseLight_1_1, RunHorseLight_1_2, RunHorseLight_1_3, RunHorseLight_1_4],
    title: "Temporal dimension of PSF",
    cover: img1,
    tags:  ['All', 'Plant-soil feedback', 'Ontogenetic niche shift'],
    paragraph: [
      "Plant conditioning of soil microbial communities is a time-dependent process, but how plant-soil feedback (PSF) strength varies with the duration of soil conditioning remains poorly understood. We have studied this temporal dimension using both empirical and theoretical approaches. In a Californian foredune ecosystem, we used annual aerial photos to estimate plant ages and reconstructed a > 20-year chronosequence of soil conditioning for the four dominant plant species. By combining this spatial reconstruction with high-throughput sequencing and greenhouse experiments, we showed that soil microbial communities continuously turn over during plant conditioning and that the resulting PSFs exhibit different temporal patterns depending on the plant-soil combination (Ke et al., 2021, New Phytologist). On the theory side, we have also developed patch occupancy model that incorporate the temporal dimensions of plant-soil microbe interactions, showing that whether microbial effects are cross-generational critically affects the ability of host-specific pathogens to promote plant coexistence (Ke and Levine, 2021, The American Naturalist).",
      "",
      "Our theoretical work highlights two key factors that determine the temporal extent of PSF: the plant demographic transition affected by soil microbes and the maintenance of microbial effects between consecutive plant generations (Ke et al., 2025, Ecological Monographs). Recently, we have conducted PSF experiments that better capture the temporal dimensions of PSF in nature, with a particular focus on the persistence of microbial effects after plant death (Ou et al., biorxiv; Huang et al., 2026, Plant and Soil). For example, in California annual plant communities, we incorporated a lag phase after soil conditioning to simulate the effect of the dry Mediterranean summer on PSF. With collaborators, we also used forest inventory data to identify dead trees in the Fushan forest dynamic plot in Taiwan, allowing us to study the decay of PSF and understand its community-level consequences. By incorporating natural demographic contexts into PSF experiments, we aim to improve our understanding of the role PSF plays in various systems.",
    ]
  }, {
    id: "2",
    slides: [RunHorseLight_2_2, RunHorseLight_2_1],
    title: "Mechanistic understanding of PSF",
    cover: img2,
    tags:  ['All', 'Plant-soil feedback'],
    paragraph: [
      "Plant-soil feedback (PSF) studies often treat soil microbial communities as a black box with a net positive or negative effect on plant performance. However, the microbial community consists of many different functional groups that interact with other belowground processes in distinct ways. To take a more mechanistic peek into this black box, previously we have developed models linking two major belowground processes: plant-mediated nutrient cycling (i.e., litter-mediated PSF) and plant-soil microbe interactions (i.e., microbial-mediated PSF). We have shown that plant litter decomposability, a key trait controlling nutrient cycling, can strongly increase PSF strength when mycorrhizal fungi are abundant, but not when pathogens dominate the microbial community. This result stems from the fact that the two microbial functional groups have different indirect interactions with litter dynamics. In particular, mycorrhizal fungi create an environment with depleted soil nutrients and enhanced litter production, and therefore, the benefits of having higher litter decomposability are amplified under such an environment (Ke et al., 2015, New Phytologist; Ke and Miki, 2015, Frontiers in Microbiology).",
      "",
      "In recent collaborations, we are building mechanistic models that further integrate litter- and microbial-mediated PSFs into resource competition theory (Chung et al., 2023, Journal of Ecology). For example, we are considering how different microbial functional groups (e.g., pathogens, mutualists, decomposers) influence the supply and demand of soil nutrients during plant competition. We are also conducting experiments to study how litter input affects the decay of PSF in California chaparral ecosystems (Ou et al., biorxiv). Together, we believe this will allow us to better predict the consequences of PSF across environmental contexts.",
    ]
  }, {
    id: "3",
    slides: [RunHorseLight_3_1, RunHorseLight_3_2, RunHorseLight_3_3],
    title: "Linking PSF and coexistence theory",
    cover: img3,
    tags: ['All', 'Plant-soil feedback', 'Species coexistence'],
    paragraph: [
      "Growing evidence shows that soil microbes affect plant coexistence in a variety of systems. However, since these systems vary in the impacts microbes have on plants and in the ways plants compete with each other, it is challenging to integrate results into a general predictive theory. To this end, we have suggested that the concepts of niche and fitness differences from modern coexistence theory should be used to contextualize the diverse effects soil microbes have on plant coexistence (Ke and Wan, 2020, Ecological Monographs). For example, by applying modern coexistence theory to a mechanistic model of plant-soil feedback, we have clarified how the interaction network predicts whether soil microbes affect primarily niche or fitness differences among competing plants, and how soil microbes affect the importance of plant-plant competition for resources. Based on perspectives from coexistence theory, we have also proposed an efficient experimental framework that can simultaneously quantify microbial effects and plant-plant competition, even in the presence of nonlinear density-dependency (Ke and Wan, 2023, Plant and Soil). In recent collaborations, we are applying this experimental design to understand plant competitive dynamics in natural ecosystems (Van Nuland et al., 2023, Journal of Ecology; Huang et al., 2026, Plant and Soil).",
    ]
  }, {
    id: "4",
    slides: [RunHorseLight_4_3, RunHorseLight_4_1, RunHorseLight_4_2],
    title: "Synthesizing coexistence theories",
    cover: img4,
    tags: ['All', 'Species coexistence'],
    paragraph: [
      "When developing models to describe competitive interactions, ecologists often use either phenomenological models, such as Lotka-Volterra models, that summarize the net effects species have on one another, or mechanistic models, such as consumer-resource models, that explicitly describe the limiting factors underlying competition. Previously, we have connected these perspectives by linking modern coexistence theory with niche theory, showing how resource supply and consumer traits translate into changes in species’ niche and fitness differences, thereby leading to different competitive outcomes (Letten et al., 2017, Ecological Monographs; Ke and Letten, 2018, Nature Ecology and Evolution).",
      "",
      "In recent collaborations, we have dug further into the details of calculating the niche and fitness components of modern coexistence theory. In particular, we showed that different definitions give different interpretations of the underlying mechanisms that shape species coexistence (Spaak et al., 2023, Oikos). We have also extended modern coexistence theory to ask how niche and fitness differences predict not only competitive outcomes but also the structure and function of the coexisting community, an extension that we term functional coexistence theory (Wan et al., 2025, Ecological Monographs). Together with collaborators, we are exploring how this new theory holds when considering multiple species and non-additivity in competition.",
    ]
  }, {
    id: "5",
    slides: [RunHorseLight_5_2, RunHorseLight_5_1],
    title: "Stage dependent species interactions",
    cover: img5,
    tags: ['All', 'Ontogenetic niche shift'],
    paragraph: [
      "Ontogeny and stage structure can strongly modify how species interactions are temporally coordinated and how they shape community dynamics. Our lab combines empirical and theoretical approaches to develop a temporally explicit perspective of community ecology. For example, we developed a model integrating stage-structured food-web theory with hybrid community theory, showing that ontogenetic shifts in interaction type, such as juveniles acting as herbivores and adults as pollinators, can stabilize community dynamics (Ke and Nakazawa, 2018, Oikos). We have also used plant-soil microbe interactions as a model system to study the temporal dimensions of species interactions. For example, we have combined aerial photo analysis, high-throughput sequencing, greenhouse experiments, and ecological modeling to study how plant-soil microbe interactions change with the length of soil conditioning and decay (Ke et al., 2021, New Phytologist; Ke and Levine, 2021, The American Naturalist; Huang et al., 2026, Plant and Soil).",
      "",
      "Moving forward, we are interested in how the effects of soil microbes on plant performance change across the plant life cycle. Specifically, we are using Bidens pilosa, an aggressive invasive species in Taiwan, as a model system to study how soil microbes alter its germination, growth, and reproduction, as well as those of its native competitors. We are also developing stochastic competition models that incorporate microbe-mediated changes in transition matrices, allowing us to integrate these different microbial effects. Finally, changes in soil states across plant ontogeny (e.g., conditioning by living plants and decaying after plant death) also form a stage-structured model. We are working to synthesize mathematical techniques for calculating invasion growth rates, an important metric for predicting species coexistence, in such models to improve analytical tractability.",
    ]
  }, {
    id: "6",
    slides: [RunHorseLight_6_1, RunHorseLight_6_2],
    title: "Bird's nest fern microbiome",
    cover: img6,
    tags: ['All', 'Microbial ecology'],
    paragraph: [
      "Epiphytic bird's nest ferns create suspended soil habitats high in forest canopies, forming natural 'biotic islands' that host diverse microbial communities. Because each fern varies in size, age, and spatial isolation, this system provides a unique opportunity to ask how classical ideas from island biogeography and metacommunity theory apply to habitats that are themselves formed and modified by living organisms. In recent work, we have used bird's nest ferns to test how patch size and isolation shape fungal and bacterial diversity, and to identify the mechanisms underlying these patterns. Our results suggest that larger ferns support higher microbial diversity because their growth creates stronger environmental heterogeneity through decomposition-driven pH gradients within the nest structure (Tseng et al. biorxiv). This makes bird's nest ferns an especially exciting system for linking local habitat complexity with regional processes such as dispersal.",
      "",
      "Beyond these first results, the system opens the door to many broader ecological questions. For example, we are interested in how host tree species, litter chemistry, and co-occurring epiphytes influence microbiome assembly. Another interesting question is how the three-dimensional structure of the forest canopy shapes metacommunity dynamics, especially when energy and nutrient flow move unidirectionally from the canopy, potentially forming a meta-ecosystem. More generally, bird's nest ferns allow us to study how habitat development by organisms feeds back to shape biodiversity itself.",
    ]
  }
];
