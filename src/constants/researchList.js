import img1 from '../constants/images/research1.jpg';
import RunHorseLight_1 from '../constants/images/RunHorseLight_1.jpg';
import RunHorseLight_2 from '../constants/images/RunHorseLight_2.jpg';
import RunHorseLight_3 from '../constants/images/RunHorseLight_3.jpg';
import img2 from '../constants/images/research2.jpg';
import img3 from '../constants/images/research3.jpg';
import img4 from '../constants/images/research4.jpg';
import img5 from '../constants/images/research5.jpg';

export const RESEARCH_LIST = [{
  id: "1",
  slides: [RunHorseLight_1, RunHorseLight_2, RunHorseLight_3],
  title: "Temporal dimension of PSF",
  tags:  ['All', 'Plant-soil feedback', 'Ontogenetic niche shift'],
  paragraph: [
    "Plant conditioning of soil microbial communities is a time-dependent process, but how PSF strengths vary with the duration of soil conditioning and whether plants differ in their temporal development pattern of PSF remains unknown. This information is critical when predicting the consequences of PSF because plant individuals may experience different microbial effects depending on how long neighboring plants have conditioned the soil. In the past, we have tackled this problem with annual aerial photos of a Californian foredune ecosystem. Using GIS spatial analysis, we estimated the age of individual plants and reconstructed >20-year chronosequence of soil conditioning length for all four dominant plants in the community. With a combination of high-throughput sequencing and greenhouse experiments, we have shown that soil microbial communities are continuously turning over due to plant conditioning and the PSF resulting from these shifts in microbial communities exhibit different temporal patterns depending on the plant-soil combination (Ke et al., 2021, New Phytologist).",
    "We have also tackled this research theme via theoretical models. Current models of PSF often make simplifying assumptions when describing soil microbial dynamics and plant demographic processes, obscuring the temporal factors that regulate how soil microbes affect plant communities. Our lab continues to develop models that incorporate different temporal dimensions of plant-soil microbe interactions. One example is that we developed a novel patch occupancy model to show that whether or not microbial effects are cross-generational critically affects the ability of host-specific pathogens to promote plant coexistence (Ke and Levine, 2021, The American Naturalist). This model highlights two key factors that determine the temporal extent of microbial effects: the plant demographic transition affected by soil microbes (i.e., ontogeny) and the decay rate of microbial effects between consecutive plant generations (i.e., interaction timing).",
    "Our theoretical research has motivated us to design PSF experiments that better capture how plant-soil microbe interactions operate in nature. A common practice in PSF experiments is to transplant target species immediately after soil conditioning. However, for some plant communities, this is not an accurate representation of when plants interact with soil microbes, thereby biasing the estimation of microbial effects. We are developing PSF experiments, in ecosystems including the California chaparral and Taiwan’s subtropical forests, that better capture the decay process of PSF to understand their community-level consequences. By incorporating the natural demographic context into PSF experiments, we aim to improve our understanding of the role PSF plays in various systems.",
  ]
  }, {
    id: "2",
    slides: [img2],
    title: "Mechanistic understanding of PSF",
    tags:  ['All', 'Plant-soil feedback'],
    paragraph: [
      "Focusing on plant-soil feedback, I have developed models to investigate the interdependency among two major belowground processes: plant-mediated nutrient cycling (i.e., litter-mediated PSF) and plant-soil microbe interactions (i.e., microbial-mediated PSF). I have shown that plant litter decomposability, a key trait controlling nutrient cycling, has a strong positive effect on a plant’s PSF strength when mycorrhizal fungi are abundant, but not when pathogens dominate the microbial community. This result stems from the fact that the two microbial functional groups have different indirect interactions with litter dynamics. In particular, mycorrhizal fungi create an environment with depleted soil nutrient and enhanced litter production, and therefore the benefits of having higher litter decomposability are amplified under such an environment. Data compiled from empirical studies also supported this theoretical prediction (Ke et al., 2015, New Phytol.; Ke & Miki, 2015, Front. Microbiol.). Inspired by these results, I aim to build novel mechanistic models that further integrate litter- and microbial-mediated PSFs into resource competition theory, thereby better predicting the consequences of PSF across environmental contexts.",
    ]
  }, {
    id: "3",
    slides: [img3],
    title: "Linking PSF and coexistence theory",
    tags: ['All', 'Plant-soil feedback', 'Species coexistence'],
    paragraph: [
      "I have also demonstrated that the phenomenological perspective of MCT provides a framework to contextualize the diverse effects soil microbes have on plant coexistence (Ke & Wan, 2020, Ecol. Monogr.). By applying MCT to a mechanistic model of plant-soil feedback, I clarified how the interaction network predicts whether soil microbes act primarily as stabilizing or equalizing forces, and how soil microbes affect the importance of plant-plant competition for resources. By applying our predictive framework to experimental data, I have shown that the microbial effects that determine plant coexistence might not be the ones with the largest magnitude but instead depends on the context of plant-plant competition.",
    ]
  }, {
    id: "4",
    slides: [img4],
    title: "Synthesizing coexistence theories",
    tags: ['All', 'Species coexistence'],
    paragraph: [
      "The maintenance of biodiversity boils down to the stable coexistence of interacting species. When developing models to describe competitive interactions, two approaches are broadly applicable to various organisms. Some ecologists adopt a phenomenological approach, which seeks to capture an aggregated measure of the negative effects species have on each other and does not require full knowledge on how species compete (i.e., Lotka-Volterra models). In contrast, others adopt a mechanistic approach, which attempts to gain a highly resolved understanding of the competitive process by directly modeling the limiting factors underlying competition (e.g., consumer-resource models). Despite shared goals, little communication and translation of governing principles across the two perspectives preclude further conceptual advances at their interface.",
      "When used in combination, I have found that the inferential capacity of these two approaches is greater than the sum of their parts. For example, modern coexistence theory (MCT), a prominent theoretical framework mainly based on phenomenological models, recognizes stabilizing (i.e., increasing species’ niche differences) and equalizing (i.e., decreasing species’ competitive hierarchies) processes as two higher-level ecological forces maintaining coexistence. By linking MCT with a consumer-resource model, I demonstrated that mechanistic models could provide an explicit connection between causal mechanisms and emergent phenomena. Specifically, I have shown how changes in resource supply and consumer traits translate into stabilizing and equalizing forces that either leads to coexistence (Letten*, Ke*, Fukami, 2017, Ecol. Monogr.) or priority effects (Ke & Letten, 2018, Nature Ecol. Evol.). My collaborators and I are now incorporating metabolic theory into our synthetic framework, thereby linking the effects of temperature on organismal performance to competitive interactions. The resulting unified theory elucidates how global warming influences competitive outcomes via the stabilizing and equalizing forces of MCT."
    ]
  }, {
    id: "5",
    slides: [img5],
    title: "Stage dependent species interactions",
    tags: ['All', 'Ontogenetic niche shift'],
    paragraph: [
      "More content coming soon.",
    ]
  }
];
