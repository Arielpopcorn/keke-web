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
import pdf_2024_2 from '../constants/pdf/2024_Letten_et_al_2024_EcologyLetters.pdf';
import pdf_2024_3 from '../constants/pdf/2024_Miki_and_Ke_2024_JournalTheoreticalBiology.pdf';
import pdf_2025_1 from '../constants/pdf/2025_Miki_et_al_2025_PhysicaD.pdf';
import pdf_2025_2 from '../constants/pdf/2025_Magee_et_al_2025_EcologyLetters.pdf';
import pdf_2025_3 from '../constants/pdf/2025_Ke_et_al_2025_EcologicalMonographs.pdf';
import pdf_2025_4 from '../constants/pdf/2025_Wan_et_al_2025_EcologicalMonographs.pdf';
import pdf_2026_1 from '../constants/pdf/2026_Davis_et_al_2026_EcologyLetters.pdf';
import pdf_2026_2 from '../constants/pdf/2026_Huang_et_al_2026_PlantSoil.pdf';
import pdf_2026_3 from '../constants/pdf/2026_Senthilnathan_et_al_2026_PlantSoil.pdf';
import pdf_2026_4 from '../constants/pdf/2026_Sun_and_Ke_2026_JAnimalEcol.pdf';
import pdf_preprint_1 from '../constants/pdf/preprint_Ou_et_al_2024_biorxiv.pdf';
import pdf_preprint_4 from '../constants/pdf/preprint_Tseng_et_al_2026_biorxiv.pdf';


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
  doi: "https://nph.onlinelibrary.wiley.com/doi/full/10.1111/nph.13215",
  abstract: "Reciprocal interaction between plant and soil (plant–soil feedback, PSF) can determine plant community structure. Understanding which traits control interspecific variation of PSF strength is crucial for plant ecology. Studies have highlighted either plant-mediated nutrient cycling (litter-mediated PSF) or plant–microbe interaction (microbial-mediated PSF) as important PSF mechanisms, each attributing PSF variation to different traits. However, this separation neglects the complex indirect interactions between the two mechanisms. We developed a model coupling litter- and microbial-mediated PSFs to identify the relative importance of traits in controlling PSF strength, and its dependency on the composition of root-associated microbes (i.e. pathogens and/or mycorrhizal fungi). Results showed that although plant carbon: nitrogen (C : N) ratio and microbial nutrient acquisition traits were consistently important, the importance of litter decomposability varied. Litter decomposability was not a major PSF determinant when pathogens are present. However, its importance increased with the relative abundance of mycorrhizal fungi as nutrient released from the mycorrhizal-enhanced litter production to the nutrient-depleted soils result in synergistic increase of soil nutrient and mycorrhizal abundance. Data compiled from empirical studies also supported our predictions. We propose that the importance of litter decomposability depends on the composition of root-associated microbes. Our results provide new perspectives in plant invasion and trait-based ecology."
}, {
  id: "2",
  title: "Incorporating the soil environment and microbial community into plant competition theory",
  authors : ["Po-Ju Ke", "Takeshi Mik"],
  year: "2015",
  magazine: "Frontiers in Microbiology, 6: 1066 ",
  highlighted: [],
  pdf: pdf_2015_2,
  doi: "https://www.frontiersin.org/articles/10.3389/fmicb.2015.01066/full",
  abstract: "Plants affect microbial communities and abiotic properties of nearby soils, which in turn influence plant growth and interspecific interaction, forming plant–soil feedback (PSF). PSF is a key determinant influencing plant population dynamics, community structure, and ecosystem functions. Despite accumulating evidence for the importance of PSF and the development of specific PSF models, different models are not yet fully integrated. Here, we review the theoretical progress in understanding PSF. When first proposed, PSF was integrated with various mathematical frameworks to discuss its influence on plant competition.Recent theoretical models have advanced PSF research at different levels of ecological organization by considering multiple species, applying spatially explicit simulations to examine how local-scale predictions apply to larger scales, and assessing the effect of PSF on plant temporal dynamics over the course of succession. We then review two foundational models for microbial- and litter-mediated PSF. We present a theoretical framework to illustrate that although the two models are typically presented separately, their behavior can be understood together by invasibility analysis. We conclude with suggestions for future directions in PSF theoretical studies, which include specifically addressing microbial diversity to integrate litter- and microbial-mediated PSF, and applying PSF to general coexistence theory through a trait-based approach."
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
  doi: "https://esajournals.onlinelibrary.wiley.com/doi/10.1002/ecm.1242",
  abstract: "Modern coexistence theory and contemporary niche theory represent parallel frameworks for understanding the niche’s role in species coexistence. Despite increasing prominence and shared goals, their compatibility and complementarity have received little attention. This paucity of overlap not only presents an obstacle to newcomers to the field, but it also precludes further conceptual advances at their interface. Here, we present a synthetic treatment of the two frameworks. We review their main concepts and explore their theoretical and empirical relationship, focusing on how the resource supply ratio, impact niche, and requirement niche of contemporary niche theory translate into the stabilizing and equalizing processes of modern coexistence theory. We show, for a general consumer–resource model, that varying resource supply ratios reflects an equalizing process; varying impact niche overlap reflects a stabilizing process; and varying requirement niche overlap may be both stabilizing and equalizing, but has no qualitative effect on coexistence. These generalizations provide mechanistic insight into modern coexistence theory, while also clarifying the role of contemporary niche theory’s impacts and requirements in mediating coexistence. From an empirical perspective, we recommend a hierarchical approach, in which quantification of the strength of stabilizing mechanisms is used to guide more focused investigation into the underlying niche factors determining species coexistence. Future research that considers alternative assumptions, including different forms of species interaction, spatiotemporal heterogeneity, and priority effects, would facilitate a more complete synthesis of the two frameworks."
}, {
  id: "4",
  title: "Statistical recipe for quantifying microbial functional diversity from EcoPlate metabolic profiling",
  authors : ["Takeshi Miki*", "Taichi Yokokawa*", "Po-Ju Ke", "I-Fang Hsieh", "Chih-hao Hsieh", "Tomonori Kume", "Kinuyo Yoneya", "Kazaaki Matsui"],
  year: "2018",
  magazine: "Ecological Research, 33(1), 249-260",
  highlighted: [],
  pdf: pdf_2018_1,
  doi: "https://esj-journals.onlinelibrary.wiley.com/doi/abs/10.1007/s11284-017-1554-0",
  abstract: "EcoPlate quantifies the ability of a microbial community to utilize 31 distinct carbon substrates, by monitoring color development of microplate wells during incubation. Well color patterns represent metabolic profiles. Previous studies typically used color patterns representing average values of three technical replicates on the final day of the incubation and did not consider substrate chemical diversity. However, color fluctuates during incubation and color varies between replicates, undermining statistical power to distinguish differences among samples in microbial functional composition and diversity. Therefore, we developed a protocol to improve statistical power with two approaches. First, we optimized data treatment for color development during incubation and technical replicates. Second, we incorporated chemical structural information for the 31 carbon substrates into the computation. Our framework implemented as the protocol in the R environment is able to compare the statistical power among different calculation methods. When we applied it to data from aquatic microcosm and forest soil systems, we observed substantial improvement in statistical power when we incorporated temporal patterns during incubation instead of using only endpoint data. Using maximum or minimum values of technical replicates also sometimes gave better results than averages. Incorporating chemical structural information based on fuzzy set theory could improve statistical power but only when relative color density information was considered; it was not seen when the pattern was first binarized into the presence or absence of metabolic activity. Finally, we discuss research directions to improve these approaches and offer some practical considerations for applying our methods to other datasets."
}, {
  id: "5",
  title: "Ontogenetic antagonism-mutualism coupling: perspectives on resilience of stage-structured communities",
  authors : ["Po-Ju Ke", "Takefumi Nakazawa"],
  year: "2018",
  magazine: "Oikos, 127(3), 353-363",
  highlighted: [],
  pdf: pdf_2018_2,
  doi: "https://onlinelibrary.wiley.com/doi/10.1111/oik.04702",
  abstract: "Organisms typically change their diets ontogenetically. Recent studies have shown that an ontogenetic diet shift undermines the resilience of stage-structured food webs. Here, we study the integration of stage-structured food-web theory into theory of hybrid community (i.e. mixture of different interaction types), considering that not only diet but also interaction type often changes because of ontogenetic niche shift (e.g. the metamorphosis of pollinating insects, in which juveniles and adults are herbivores and pollinators, respectively). We developed and mathematically analysed a one-consumer two-resource model in which juvenile and adult consumers utilise different resources as antagonists and mutualists, respectively. Model analyses illustrated that the consumer either goes extinct or coexists with the resources depending on the initial condition when the resources have low carrying capacities while their community dynamics always converge to a single steady state when the resources have high carrying capacities. These dynamic features are different from those of the corresponding purely antagonistic module in previous studies, in which the consumer always goes extinct for low resource carrying capacities while the dynamics converge to either juvenile-dominated or adult-dominated state depending on the initial conditions for high resource carrying capacities. Taken together, we can suggest that ontogenetic antagonism–mutualism coupling is stabilising in that it increases the potential for species coexistence in unproductive environments while improving community resilience in productive environments. Further, these effects are generally robust to interaction nonlinearity. Beyond the previous concern of the instability in stage-structured food-webs, our results suggest that antagonism–mutualism coupling can play a crucial role in stabilising stage-structured hybrid (e.g. plant–animal) communities under environmental changes. The present study represents an important first step in understanding how interaction type diversity can mediate the dynamics of stage-structured communities."
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
  doi: "https://www.pnas.org/content/115/26/6745",
  abstract: "Understanding the origins and maintenance of biodiversity remains one of biology’s grand challenges. From theory and observational evidence, we know that variability in environmental conditions through time is likely critical to the coexistence of competing species. Nevertheless, experimental tests of fluctuationdriven coexistence are rare and have typically focused on just one of two potential mechanisms, the temporal storage effect, to the neglect of the theoretically equally plausible mechanism known as relative nonlinearity of competition.We combined experiments and simulations in a system of nectar yeasts to quantify the relative contribution of the two mechanisms to coexistence. Resource competition models parameterized from single-species assays predicted the outcomes of mixed-culture competition experiments with 83% accuracy. Model simulations revealed that both mechanisms have measurable effects on coexistence and that relative nonlinearity can be equal or greater in magnitude to the temporal storage effect. In addition, we show that their effect on coexistence can be both antagonistic and complementary. These results falsify the common assumption that relative nonlinearity is of negligible importance, and in doing so reveal the importance of testing coexistence mechanisms in combination."
}, {
  id: "7",
  title: "Coexistence theory and the frequency-dependence of priority effects",
  authors : ["Po-Ju Ke*", "Andrew D. Letten*"],
  year: "2018",
  magazine: "Nature Ecology & Evolution, 2, 1691-1695",
  highlighted: [],
  pdf: pdf_2018_4,
  doi: "https://www.nature.com/articles/s41559-018-0679-z?proof=t",
  abstract: "Priority effects are commonly used to describe a broad suite of phenomena capturing the influence of species arrival order on the diversity, composition and function of ecological communities. Several studies have suggested reframing priority effects around the stabilizing and equalizing concepts of coexistence theory. We show that the only compatible priority effects are those characterized by positive frequency-dependence, irrespective of whether they emerge in equilibrium or non-equilibrium systems."
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
  doi: "https://www.nature.com/articles/s41559-018-0709-x",
  abstract: "A foundational paradigm in biological and Earth sciences is that our planet is divided into distinct ecoregions and biomes demarking unique assemblages of species. This notion has profoundly influenced scientific research and environmental policy. Given recent advances in technology and data availability, however, we are now poised to ask whether ecoregions meaningfully delimit biological communities. Using over 200 million observations of plants, animals and fungi we show compelling evidence that ecoregions delineate terrestrial biodiversity patterns. We achieve this by testing two competing hypotheses: the sharp-transition hypothesis, positing that ecoregion borders divide differentiated biotic communities; and the gradualtransition hypothesis, proposing instead that species turnover is continuous and largely independent of ecoregion borders. We find strong support for the sharp-transition hypothesis across all taxa, although adherence to ecoregion boundaries varies across taxa. Although plant and vertebrate species are tightly linked to sharp ecoregion boundaries, arthropods and fungi show weaker affiliations to this set of ecoregion borders. Our results highlight the essential value of ecological data for setting conservation priorities and reinforce the importance of protecting habitats across as many ecoregions as possible. Specifically, we conclude that ecoregion-based conservation planning can guide investments that simultaneously protect species-, community and ecosystem-level biodiversity, key for securing Earth’s life support systems into the future."
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
  doi: "https://esajournals.onlinelibrary.wiley.com/doi/abs/10.1002/ecm.1391",
  abstract: "Growing evidence shows that soil microbes affect plant coexistence in a variety of systems. However, since these systems vary in the impacts microbes have on plants and in the ways plants compete with each other, it is challenging to integrate results into a general predictive theory. To this end, we suggest that the concepts of niche and fitness difference from modern coexistence theory should be used to contextualize how soil microbes contribute to plant coexistence. Synthesizing a range of mechanisms under a general plant–soil microbe interaction model, we show that, depending on host specificity, both pathogens and mutualists can affect the niche difference between competing plants. However, we emphasize the need to also consider the effect of soil microbes on plant fitness differences, a role often overlooked when examining their role in plant coexistence. Additionally, since our framework predicts that soil microbes modify the importance of plant–plant competition relative to other factors for determining the outcome of competition, we suggest that experimental work should simultaneously quantify microbial effects and plant competition. Thus, we propose experimental designs that efficiently measure both processes and show how our framework can be applied to identify the underlying drivers of coexistence. Using an empirical case study, we demonstrate that the processes driving coexistence can be counterintuitive, and that our general predictive framework provides a better way to identify the true processes through which soil microbes affect coexistence."
}, {
  id: "10",
  title: "Weak intra-guild predation facilitates consumer coexistence but does not guarantee higher consumer density",
  authors : ["Feng-Hsun Chang", "Po-Ju Ke", "Bradley Cardinale"],
  year: "2020",
  magazine: "Ecological Modelling, 424: 109019",
  highlighted: [],
  pdf: pdf_2020_2,
  doi: "https://www.sciencedirect.com/science/article/abs/pii/S0304380020300910?via=ihub",
  abstract: "In plant communities, resource partitioning has been shown to facilitate species coexistence and, in turn, enhance community density. Such positive effects of resource partitioning in higher trophic levels are not as obvious possibly due to the occurrence of intra-guild predation (IGP). We thus built a model to explore the joint effects of IGP and resource partitioning on consumer coexistence and their collective density as rarely have studies investigated this joint effect. The model consists of two prey resources that do not directly compete with each other and two consumers that are engaged in IGP and can partition their use of the two prey resources. This model shows that the effects of IGP on consumer coexistence depend on which consumer requires the lower resource density to persist. When the IG predator is the inferior competitor, weak IGP enhances coexistence by lowering the minimum degree of partitioning that is required for coexistence; otherwise, IGP always constrains coexistence. In addition, the effects of IGP on total consumer density (Z_tot) depends on which consumer has the lower maximum growth potential, defined as the difference between their maximum growth rate and mortality. Weak IGP increases Z_tot when the IG predator has lower maximum growth potential; otherwise, IGP always decreases Z_tot. Last, the criterion for IGP to have positive effects on consumer coexistence and Z_tot are different. Our results show that weak to intermediate strengths of intra-guild predation can facilitate consumer coexistence and total community density, but consumer coexistence does not guarantee higher consumer density."
}, {
  id: "11",
  title: "Age-specific habitat preference, carrying capacity, and landscape structure determine the response of population spatial variability to fishing-driven age truncation",
  authors : ["Hsiao-Hang Tao", "Gaël Dur", "Po-Ju Ke", "Sami Souissi", "Chih-hao Hsieh"],
  year: "2021",
  magazine: "Ecology and Evolution, 11(11), 6358-6370",
  highlighted: [],
  pdf: pdf_2021_1,
  doi: "https://onlinelibrary.wiley.com/doi/full/10.1002/ece3.7486",
  abstract: "Understanding the mechanisms underlying spatial variability of exploited fish is critical for the sustainable management of fish stocks. Empirical studies suggest that size-selective fishing can elevate fish population spatial variability (i.e., more heterogeneous distribution) through age truncation, making the population less resilient to changing environment. However, species differ in how their spatial variability responds to age truncation and the underlying mechanisms remain unclear. We hypothesize that age-specific habitat preference, together with environmental carrying capacity and landscape structure, determines the response of population spatial variability to fishing-induced age truncation. To test these hypotheses, we design an individual-based model of an age-structured fish population on a two-dimensional landscape under size-selective fishing. Individual fish reproduces and survives, and moves between habitats according to age-specific habitat preference and density-dependent habitat selection. Population spatial variability elevates with increasing age truncation, and the response is stronger for populations with stronger age-specific habitat preference. On a gradient landscape, reducing carrying capacity elevates the relative importance of density dependence in habitat selection, which weakens the response of spatial variability to age truncation for populations with strong age-specific habitat preference. On a fragmented landscape, both populations with strong and weak age-specific habitat preferences are restricted at local optimal habitats, and reducing carrying capacity weakens the responses of spatial variability to age truncation for both populations. We demonstrate that to track and predict the changes in population spatial variability under exploitation, it is essential to consider the interactive effects of age-specific habitat preference, carrying capacity, and landscape structure. To improve spatial management in fisheries, it is crucial to enhance empirical and theoretical developments in the methodology to quantify age-specific habitat preference of marine fish, and to understand how climatic change influences carrying capacity and landscape continuity."
}, {
  id: "12",
  title: "Dynamic plant-soil microbe interactions: the neglected effect of soil conditioning time",
  authors : ["Po-Ju Ke", "Peter C. Zee", "Tadashi Fukami"],
  year: "2021",
  magazine: "New Phytologist, 231(4), 1546-1558",
  highlighted: [],
  pdf: pdf_2021_2,
  doi: "https://nph.onlinelibrary.wiley.com/doi/10.1111/nph.17420?af=R",
  abstract: "Plant–soil feedback (PSF) may change in strength over the life of plant individuals as plants continue to modify the soil microbial community. However, the temporal variation in PSF is rarely quantified and its impacts on plant communities remain unknown. Using a chronosequence reconstructed from annual aerial photographs of a coastal dune ecosystem, we characterized > 20-yr changes in soil microbial communities associated with individuals of the four dominant perennial species, one legume and three nonlegume. We also quantified the effects of soil biota on conspecific and heterospecific seedling performance in a glasshouse experiment that preserved soil properties of these individual plants. Additionally, we used a general individual-based model to explore the potential consequences of temporally varying PSF on plant community assembly. In all plant species, microbial communities changed with plant age. However, responses of plants to the turnover in microbial composition depended on the identity of the seedling species: only the soil biota effect experienced by the nonlegume species became increasingly negative with longer soil conditioning. Model simulation suggested that temporal changes in PSF could affect the transient dynamics of plant community assembly. These results suggest that temporal variation in PSF over the life of individual plants should be considered to understand how PSF structures plant communities."
}, {
  id: "13",
  title: "The temporal dimension of plant-soil microbe interactions: mechanisms promoting feedback between generations",
  authors : ["Po-Ju Ke", "Jonathan M. Levine"],
  year: "2021",
  magazine: "The American Naturalist, 198(3), E80-E94",
  highlighted: [],
  pdf: pdf_2021_3,
  doi: "https://www.journals.uchicago.edu/doi/10.1086/715577",
  abstract: "Soil microbes can influence plant competitive outcomes by stabilizing plant community dynamics or mediating plant competitive hierarchies. Which effect dominates depends on whether microbial effects can extend beyond the focal conditioning individual. While it is well known that microbial effects can extend to other individuals through space, we lack an explicit theoretical understanding of the factors that regulate their spread to other individuals in subsequent generations. Here, we examine how the commonly assumed stabilizing effects of host-specific pathogens in fact depend on two factors that allow microbial effects to be cross-generational—which plant demographic vital rate is influenced by microbes and the conditioning and decay rates of soil microbial communities. With a novel patch occupancy model that incorporates the transition of soil states following plant colonization and mortality, we show that host-specific pathogens enable plant coexistence when they suppress conspecific plant colonization of empty patches but contribute to competitive hierarchies when they modify only the mortality and fecundity of the conditioning plant individual. In a series of model extensions, we further demonstrate that these latter microbial effects can still promote coexistence, but only when microbial communities decay slowly following plant death, thereby allowing microbial effects to be cross-generational. Our study calls for further empirical work quantifying the demographic rates most affected by soil microbes as well as the timescales of conditioning and decay."
}, {
  id: "14",
  title: "Reconstructing large interaction networks from empirical time series data",
  authors : ["Chun-Wei Chang", "Takeshi Miki", "Masayuki Ushio", "Po-Ju Ke", "Hsiao-Pei Lu", "Fuh-Kwo Shiah", "Chih-hao Hsieh"],
  year: "2021",
  magazine: "Ecology Letters, 24(12), 2763-2774",
  highlighted: [],
  pdf: pdf_2021_4,
  doi: "https://onlinelibrary.wiley.com/doi/abs/10.1111/ele.13897",
  abstract: "Reconstructing interactions from observational data is a critical need for investigating natural biological networks, wherein network dimensionality is usually high. However, these pose a challenge to existing methods that can quantify only small interaction networks. Here, we proposed a novel approach to reconstruct high-dimensional interaction Jacobian networks using empirical time series without specific model assumptions. This method, named “multiview distance regularised S-map,” generalised the state space reconstruction to accommodate high dimensionality and overcome difficulties in quantifying massive interactions with limited data. When evaluating this method using time series generated from theoretical models involving hundreds of interacting species, estimated strengths of interaction Jacobians were in good agreement with theoretical expectations. Applying this method to a natural bacterial community helped identify important species from the interaction network and revealed mechanisms governing the dynamical stability of a bacterial community. The proposed method overcame the challenge of high dimensionality in large natural dynamical systems."
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
  doi: "https://www.journals.uchicago.edu/doi/10.1086/717206",
  abstract: "A scientific understanding of the biological world arises when ideas about how nature works are formalized, tested, refined, and then tested again. Although the benefits of feedback between theoretical and empirical research are widely acknowledged by ecologists, this link is still not as strong as it could be in ecological research. This is in part because theory, particularly when expressed mathematically, can feel inaccessible to empiricists who may have little formal training in advanced math. To address this persistent barrier, we provide a general and accessible guide that covers the basic, step-by-step process of how to approach, understand, and use ecological theory in empirical work. We first give an overview of how and why mathematical theory is created, then outline four specific ways to use both mathematical and verbal theory to motivate empirical work, and finally present a practical tool kit for reading and understanding the mathematical aspects of ecological theory.We hope that empowering empiricists to embrace theory in their work will help move the field closer to a full integration of theoretical and empirical research."
}, {
  id: "16",
  title: "The effects of ecological selection on species diversity and trait distribution: predictions and an empirical test",
  authors : ["Niv DeMalach", "Po-Ju Ke", "Tadashi Fukami"],
  year: "2022",
  magazine: "Ecology, 103(1): e03567",
  highlighted: [],
  pdf: pdf_2022_2,
  doi: "https://esajournals.onlinelibrary.wiley.com/doi/ftr/10.1002/ecy.3567",
  abstract: "Ecological selection is a major driver of community assembly. Selection is classified as stabilizing when species with intermediate trait values gain the highest reproductive success, whereas selection is considered directional when fitness is highest for species with extreme trait values. Previous studies have investigated the effects of different selection types on trait distribution, but the effects of selection on species diversity have remained unclear. Here, we propose a framework for inferring the type and strength of selection by studying species diversity and trait distribution together against null expectations. We use a simulation model to confirm our prediction that directional selection should lead to lower species diversity than stabilizing selection despite a similar effect on trait community-weighted variance. We apply the framework to a mesocosm system of annual plants to test whether differences in species diversity between two habitats that vary in productivity are related to differences in selection on seed mass. We show that, in both habitats, species diversity was lower than the null expectation, but that species diversity was lower in the more productive habitat. We attribute this difference to strong directional selection for large-seeded species in the productive habitat as indicated by trait community-weighted mean being higher and community-weighted variance being lower than the null expectations. In the less productive habitat, we found that community-weighted variance was higher than expected by chance, suggesting that seed mass could be a driver of niche partitioning under such conditions. Altogether, our results suggest that viewing species diversity and trait distribution as interrelated patterns driven by the same process, ecological selection, is helpful in understanding community assembly."
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
  doi: "https://academic.oup.com/bioscience/article-abstract/72/3/300/6482999",
  abstract: "Theories underpin science. In biology, theories are often formalized in the form of mathematical models, which may render them inaccessible to those lacking mathematical training. In the present article, we consider how theories could be presented to better aid understanding. We provide concrete recommendations inspired by cognitive load theory, a branch of psychology that addresses impediments to knowledge acquisition. We classify these recommendations into two classes: those that increase the links between new and existing information and those that reduce unnecessary or irrelevant complexities. For each, we provide concrete examples to illustrate the scenarios in which they apply. By enhancing a reader’s familiarity with the material, these recommendations lower the mental capacity required to learn new information. Our hope is that these recommendations can provide a pathway for theoreticians to increase the accessibility of their work and for empiricists to engage with theory, strengthening the feedback between theory and experimentation."
}, {
  id: "18",
  title: "Water shifts the balance of coexistence",
  authors : ["Po-Ju Ke"],
  year: "2022",
  magazine: "Nature Ecology & Evolution, 6, 496-497",
  highlighted: [],
  pdf: pdf_2022_4,
  doi: "https://www.nature.com/articles/s41559-022-01725-y",
  abstract: "Experimentally manipulating precipitation levels in a plant–soil feedback experiment reveals changes to the interactions between plants and soil microbes that render community dynamics less predictable under wetter conditions."
}, {
  id: "19",
  title: "Mycorrhizal nutrient acquisition strategies shape tree competition and coexistence dynamics",
  authors : ["Michael E. Van Nuland", "Po-Ju Ke", "Joe Wan", "Kabir G. Peay"],
  year: "2023",
  magazine: "Journal of Ecology, 111(3), 564-577",
  highlighted: [],
  pdf: pdf_2023_2,
  doi: "https://besjournals.onlinelibrary.wiley.com/doi/abs/10.1111/1365-2745.14040",
  abstract: "Mycorrhizal fungi with different nutrient acquisition strategies influence plant species performance and physiology, thereby defining their trophic niche. This might drive resource competition dynamics that cumulatively impact tree species coexistence, but few manipulative experiments have directly tested this. Combining surveys and experiments in a modern coexistence theory framework, we tested how variation in mycorrhizal strategies and nutrient conditions affects plant competitive outcomes. We focused on two genera of co-occurring tree species with different mycorrhizal states: Acer (arbuscular mycorrhizal, AM) and Populus (dual mycorrhizal, but often considered predominantly ectomycorrhizal, EM). The EM and AM fungal responsiveness in Populus species varied with latitude and nitrogen (N) limitation. Host-specific soil microbiome conditioning and inorganic N fertilization combined to qualitatively affect coexistence outcomes. Lower N conditions favoured Populus over Acer trees, and N fertilization reversed this outcome for southern species, aligning with regional-scale forest mycorrhizal transitions. Results from the coexistence experiment also predict competitive exclusion between the tree species pairs, which could arise, in part, from their mycorrhizal differences and is consistent with alternative stable states in dominant forest mycorrhizal strategies. Such bistability appears in natural systems as a bimodal distribution of Populus vs. Acer tree species dominance using long-term forest inventory data. The magnitude and outcome of microbially mediated competition between Populus and Acer depends on soil nutrient availability, which likely relates to their mycorrhizal differentiation. These findings support the importance of mycorrhizal symbioses for contributing to large-scale biogeographical patterns of tree species trophic niche separation across soil resource gradients and bistability in forest mycorrhizal structure."
}, {
  id: "20",
  title: "A general approach for quantifying microbial effects on plant competition",
  authors : ["Po-Ju Ke*", "Joe Wan*"],
  year: "2023",
  magazine: "Plant and soil, 485, 57-70",
  highlighted: [],
  pdf: pdf_2023_1,
  doi: "https://link.springer.com/article/10.1007/s11104-022-05744-3",
  abstract: "A growing perspective in plant ecology highlights the ways that microbial interactions can promote or hinder plant coexistence. Towards this aim, recently-proposed approaches provide ways to empirically quantify how microbes affect the outcome of competition between plants. One such approach experimentally measures competition coefficients by comparing biomass performance of plants growing individually or with competitors, then quantifies microbial effects by comparing with a sterilization treatment. Nonetheless, the complexity of plant–microbe interactions presents general challenges when linking observations of microbial effects to underlying models. Building on insights from modern coexistence theory, we propose a comprehensive density gradient design to quantify the combined impact of plant–plant competition and plant–soil microbe interactions on plant coexistence patterns. We show how the implementation of a density gradient design can help quantify potential nonlinearities and facilitative interactions in plant–soil microbe interactions, which are properties once thought to hinder the quantification of the microbial impact of plant competitive outcome. We provide guidelines for setting up the experiment and accurately interpreting the results. We argue that future studies should aim to parameterize suitable demographic models to characterize the contribution of soil microbes to plant coexistence."
}, {
  id: "21",
  title: "Different measures of niche and fitness differences tell different tales",
  authors : ["Jurg W. Spaak", "Po-Ju Ke", "Andrew D. Letten", "Frederik De Laender"],
  year: "2023",
  magazine: "Oikos, 2023(4): e09573",
  highlighted: [],
  pdf: pdf_2023_3,
  doi: "https://onlinelibrary.wiley.com/doi/full/10.1111/oik.09573",
  abstract: "In modern coexistence theory, species coexistence can either arise via strong niche differences or weak fitness differences. Having a common currency for interpreting these mechanisms is essential for synthesizing knowledge across different studies and systems. However, several methods for quantifying niche and fitness differences exist, with little guidance on how and why these methods differ. Here, we first organize the available methods into three groups and review their differences from a conceptual point of view. Next, we apply four methods to quantify niche and fitness differences to one simulated and one empirical data set. We show that these methods do not only differ quantitatively, but affect how we interpret coexistence. Specifically, the different methods disagree on how resource supply rates (simulated data) or plant traits (empirical data) affect niche and fitness differences. We argue for a better theoretical understanding of what connects and sets apart different methods and more precise empirical measurements to foster appropriate method selection in coexistence theory."
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
  doi: "https://onlinelibrary.wiley.com/doi/full/10.1111/oik.09415",
  abstract: "Predicting or controlling the state of an ecological community is a core global change challenge. Dynamical models provide one toolkit, but parameterizing these models can be challenging, and interpretation can be difficult. We here propose rewriting dynamical model parameters in terms of more interpretable and measurable functional traits and environmental variables (trait and environment mediated parameterizations; TEMPs). For prediction, this approach could help make interpretable forecasts of equilibrium community dynamics (species coexistence), invasibility surfaces (dynamics due to biotic context), and responses to environmental change (dynamics due to abiotic context). For control, this approach could help identify policies that yield desired species and trait compositions through perturbations of the abundance of species with certain traits, or of the environment."
}, {
  id: "23",
  title: "The effect of non-linear competitive interactions on quantifying niche and fitness differences",
  authors : ["Jurg W. Spaak", "Remi Millet", "Po-Ju Ke", "Andrew D. Letten", "Frederik De Laender"],
  year: "2023",
  magazine: "Theoretical Ecology, 16, 161–170",
  highlighted: [],
  pdf: pdf_2023_5,
  doi: "https://link.springer.com/article/10.1007/s12080-023-00560-6",
  abstract: "The niche and fitness differences of modern coexistence theory separate mechanisms into stabilizing and equalizing components. Although this decomposition can help us predict and understand species coexistence, the extent to which mechanistic inference is sensitive to the method used to partition niche and fitness differences remains unclear. We apply two alternative methods to assess niche and fitness differences to four well-known community models. We show that because standard methods based on linear approximations do not capture the full community dynamics, they can sometimes lead to incorrect predictions of coexistence and misleading interpretations of stabilizing and equalizing mechanisms. Specifically, they fail when both species occupy the same niche or in the presence of positive frequency dependence. Conversely, a more recently developed method to decompose niche and fitness differences, which accounts for the full non-linear dynamics of competition, consistently identifies the correct contribution of stabilizing and equalizing components. This approach further reveals that when the true complexity of the system is taken into account, essentially all mechanisms comprise both stabilizing and equalizing components and that local maxima and minima of stabilizing and equalizing mechanisms exist. Amidst growing interest in the role of non-additive and higher order interactions in regulating species coexistence, we propose that the effective decomposition of niche and fitness differences will become increasingly reliant on methods that account for the inherent non-linearity of community dynamics."
}, {
  id: "24",
  title: "Mechanistic approaches to investigate soil microbe-mediated plant competition",
  authors : ["Y. Anny Chung", "Po-Ju Ke", "Peter B. Adler"],
  year: "2023",
  magazine: "Journal of Ecology, 111(8), 1587-1810",
  highlighted: [],
  pdf: pdf_2023_6,
  doi: "https://besjournals.onlinelibrary.wiley.com/doi/10.1111/1365-2745.14156",
  abstract: "Interactions between plants and soil microbes can influence plant population dynamics and diversity in plant communities. Traditional theoretical paradigms view the microbial community as a black box with net effects described by phenomenological models. This approach struggles to quantify the importance of plant–microbe interactions relative to other competition and coexistence mechanisms and to explain context dependence in microbe effects. We argue that a mechanistic framework focused on microbial functional groups will lead to conceptual and empirical advances, as demonstrated by extending resource ratio theory to plant–microbe interactions. We review the diverse pathways by which different microbial functional groups can influence plant resource competition. Finally, we suggest approaches to link theory with observations to measure the key parameters of our framework. Our review highlights recent experimental advancements for uncovering microbial mechanisms that alter plant host resource competition and coexistence. We synthesize these mechanisms into a conceptual model that provides a framework for future experiments to investigate the importance of plant–microbe interactions in structuring plant populations and communities."
}, {
  id: "25",
  title: "When the window is a mirror: how do dominant theories limit our understanding of nature? (ESA 2023 INS23)",
  authors : ["Anita Simha", "Aubrie James", "Julia D. Monk", "Heng-Xing Zou", "Po-Ju Ke", "Alexandra Wright", "Malyon D. Bimler", "Christopher M. Moore", "Suzanne Pierre", "Lauren N. Carley", "Gaurav Kandlikar"],
  year: "2024",
  magazine: "The Bulletin of the Ecological Society of America, 2024: e02145",
  highlighted: [],
  pdf: pdf_2024_1,
  doi: "https://esajournals.onlinelibrary.wiley.com/doi/10.1002/bes2.2145",
  abstract: "Our speakers described the limits of theory on topics ranging from sexual behavior to plant–microbe interactions to genetic polymorphism. This allowed us to look for uniting themes across subdisciplines of ecology. In bringing these subdisciplines together, we attempted to highlight such limitations not as isolated exceptions, but rather as recurring consequences of singular, dominant ways of approaching ecological questions. Our session emphasized the importance of creativity and wonderment in scientific research and the power of pluralistic approaches for confronting theoretical limitations brought on by societal assumptions."
}, {
  id: "26",
  title: "Microbial dormancy supports multi-species coexistence under resource fluctuations",
  authors : ["Andrew D. Letten*", "Masato Yamamichi", "James A. Richardson", "Po-Ju Ke*"],
  year: "2024",
  magazine: "Ecology Letters, 27(9): e14507",
  highlighted: [],
  pdf: pdf_2024_2,
  doi: "https://onlinelibrary.wiley.com/doi/10.1111/ele.14507",
  abstract: "The ability for microbes to enter dormant states is adaptive under resource fluctuations and has been linked to the maintenance of diversity. Nevertheless, the mechanism by which microbial dormancy gives rise to the density-dependent feedbacks required for stable coexistence under resource fluctuations is not well understood. Via analysis of consumer-resource models, we show that the stable coexistence of dormancy and non-dormancy strategists is a consequence of the former benefiting more from resource fluctuations while simultaneously reducing overall resource variability, which sets up the requisite negative frequency dependence. Moreover, we find that dormants can coexist alongside gleaner and opportunist strategies in a competitive-exclusion-defying case of three species coexistence on a single resource. This multi-species coexistence is typically characterised by non-simple assembly rules that cannot be predicted from pairwise competition outcomes. The diversity maintained via this three-way trade-off represents a novel phenomenon that is ripe for further theoretical and empirical inquiry."
}, {
  id: "27",
  title: "Macroscale vertical power-law distribution of bacteria in dark oceans can emerge from microscale bacteria-particle interactions",
  authors : ["Takeshi Miki", "Po-Ju Ke"],
  year: "2024",
  magazine: "Journal of Theoretical Biology, 595: 111956",
  highlighted: [],
  pdf: pdf_2024_3,
  doi: "https://www.sciencedirect.com/science/article/abs/pii/S0022519324002418",
  abstract: "Microbes in the dark oceans are a key determinant of remineralization of sinking carbon particles. However, most marine ecosystem models overlook how microbes aggregate on particles and the microscale interactions between particle-associated microbes, making it difficult to obtain mechanistic insights on their vertical power-law decay pattern. Here, we present a spatial population model where the attachment and detachment processes of bacterial cells depend on local density of particle-associated bacteria. We show that the power-law relationship can emerge when the non-random aggregated distribution of bacteria is considered without any depth-specific environmental parameters. Furthermore, the comparison between model behavior and empirical patterns in the Pacific and Southern Ocean indicated that temperature-dependent hydrolysis rate and nutrient-dependent sinking rate of particles are key parameters to explain the regional variations of the power-law exponent. The mechanistic approach developed here provides a pathway to link micro-scale interactions between individuals to macro-scale food chain structures and carbon cycle."
}, {
  id: "28",
  title: "How to quantify interaction strengths? A critical rethinking of the interaction Jacobian and evaluation methods for non-parametric inference in time series analysis",
  authors : ["Takeshi Miki", "Chun-Wei Chang", "Po-Ju Ke", "Arndt Telschow", "Cheng-Han Tsai", "Masayuki Ushio", "Chih-hao Hsieh"],
  year: "2025",
  magazine: "Physica D: Nonlinear Phenomena, 476(2025): 134613",
  highlighted: [],
  pdf: pdf_2025_1,
  doi: "https://www.sciencedirect.com/science/article/pii/S0167278925000922",
  abstract: "Quantifying interaction strengths between state variables in dynamical systems is essential for understanding ecological networks. Within the empirical dynamic modeling approach, multivariate S-map infers the interaction Jacobian from multivariate time series data without assuming specific dynamical models. This approach enables the non-parametric statistical inference of interspecific interactions through state space reconstruction. However, deviations in the biological interpretation and numerical implementation of the interaction Jacobian from its unique mathematical definition pose challenges. We mathematically reintroduce the interaction Jacobian by starting our derivation with differential quotients, uncovering two key problems: (1) the mismatch between the interaction Jacobian and its biological meaning complicates comparisons between interspecific and intraspecific interaction strengths; (2) the interaction Jacobian is not fully implemented in the parametric Jacobian numerically derived from given parametric models, especially ordinary differential equation models. As a result, model-based evaluations of S-map methods become inappropriate. To address these problems, (1) we propose adjusting the diagonal elements of the interaction Jacobian by subtracting 1 to resolve the comparability problem between interspecific and intraspecific interaction strengths. Simulations of population dynamics showed that this adjustment prevents overestimation of intraspecific interaction strengths, allowing for meaningful comparisons. (2) We introduce an alternative parametric Jacobian and then cumulative interaction strength (CIS), providing a more rigorous benchmark for evaluating S-map methods. Furthermore, we demonstrated that the numerical gap between CIS and the existing parametric Jacobian is substantial in realistic scenarios, suggesting CIS as a preferred benchmark for future evaluations. These solutions offer a clearer framework for developing non-parametric approaches in ecological time series analysis."
}, {
  id: "29",
  title: "Memories of trees past: coexistence implications of legacy conspecific density dependence",
  authors : ["Lukas Magee", "Daniel Smith", "David Bauman", "Po-Ju Ke", "Helene Muller-Landau", "Kristina Anderson-Teixeira", "Jessica Shue", "David Orwig", "Sean McMahon", "Stephanie Bohlman", "Raelene Crandall", "Ben Weinstein", "Sergio Marconi", "Jeremy Lichstein", "James Gillooly", "Robert Bagchi", "Joseph LaManna", "Daniel Johnson"],
  year: "2025",
  magazine: "Ecology Letters, 28(10): e70197",
  highlighted: [],
  pdf: pdf_2025_2,
  doi: "https://onlinelibrary.wiley.com/doi/full/10.1111/ele.70197",
  abstract: "The Janzen-Connell Hypothesis posits that plant species diversity is maintained by a reduction in seedling survival near living conspecific trees relative to heterospecifics–known as negative conspecific density dependence (CDD). CDD facilitates coexistence if stronger than heterospecific density dependence (HDD). However, whether and how long CDD persists after trees die is unknown. In a three-year study across three forests, we monitored seedling survival near living and dead trees, both conspecific and heterospecific, across a seven-year chrono-sequence since tree death. CDD persisted for at least 5 years after tree death (‘legacy CDD’), and most species showed stronger CDD relative to HDD through time. We used our empirical findings to parametrize a theoretical community dynamics model. Our model suggests that both stabilising niche differences and fitness differences persist after tree death. While legacy CDD can facilitate coexistence, fitness differences often overwhelmed niche differences, making competitive exclusion the most likely outcome."
}, {
  id: "30",
  title: "Time will tell: the temporal and demographic contexts of plant-soil microbe interactions",
  authors : ["Po-Ju Ke", "Gaurav S. Kandlikar", "Suzanne X. Ou", "Gen-Chang Hsu", "Joe Wan", "Meghna Krishnada"],
  year: "2025",
  magazine: "Ecological Monographs, 95(3): e70032",
  highlighted: [],
  pdf: pdf_2025_3,
  doi: "https://esajournals.onlinelibrary.wiley.com/doi/full/10.1002/ecm.70032",
  abstract: "Soil microorganisms can have profound impacts on plant community dynamics and have received increasing attention in the context of plant–soil feedback. The effects of soil microbes on plant community dynamics are classically evaluated with a two-phase experimental design that consists of a conditioning phase, during which plants modify the soil microbial community, and a response phase, during which the biomass performance of plants is measured as their response to the soil modification. Predicting plant community-level outcomes based on these greenhouse experimental results implicitly assumes that plant–soil microbe interactions remain constant through time. However, a growing body of research points to a complex temporal trajectory of plant–soil microbe interactions, with microbial effects varying with the conditioning duration, plant development, and time since conditioning. Most previous studies also implicitly assume that measuring plant biomass performance alone adequately captures the most critical impacts soil microbes have on plant population dynamics, neglecting that soil microbes also govern other key demographic processes over the plant life cycle. Here, we discuss the relevance of these temporal and demographic dimensions of plant–soil microbe interactions when extrapolating experimental results and propose modeling frameworks that can incorporate the new empirical evidence. By integrating empirical and theoretical approaches, we provide a roadmap for more nuanced predictions of the long-term consequences of plant–soil microbe interactions in nature."
}, {
  id: "31",
  title: "Functional coexistence theory: a mechanistic framework linking biodiversity to ecosystem function",
  authors : ["Joe Wan", "Po-Ju Ke", "Iris Hordijk", "Lalasia Bialic-Murphy", "Thomas W. Crowther"],
  year: "2025",
  magazine: "Ecological Monographs, 95(3): e70033",
  highlighted: [],
  pdf: pdf_2025_4,
  doi: "https://esajournals.onlinelibrary.wiley.com/doi/full/10.1002/ecm.70033",
  abstract: "Theory and experiments show that diverse ecosystems often have higher levels of function (for instance, biomass production), yet it remains challenging to identify the biological mechanisms responsible. We synthesize developments in coexistence theory into a general theoretical framework linking community coexistence to ecosystem function. Our framework, which we term functional coexistence theory, identifies three components determining the total function of a community of coexisting species. The first component directly corresponds to the niche differences that enable pairwise species coexistence and to the complementarity component from the additive partition of biodiversity effects. The second component measures whether higher functioning species also have higher fitness under competition, providing a missing link between the additive partition’s selection effect and modern coexistence theory’s concept of equalization. The third component is least well studied: reducing functional imbalances between species increases niche difference’s positive effect on function. Using a mechanistic model of resource competition, we show that our framework can link the structure and function of multispecies communities and that it can predict changes in coexistence and ecosystem function along gradients of resource availability. In particular, we expect the effect of resource level on biodiversity–function relationships to be limited in magnitude and variable in sign because it should be primarily mediated by fitness. Next, we confirm our theoretical expectations by fitting this model to data from a classic plant competition experiment. Finally, we apply our framework to simulations of multiple ecosystem functions, demonstrating that relationships between niche, fitness, and function also predict a community’s multifunctionality, or ability to simultaneously show high levels of multiple functions. Taken together, our results highlight fundamental links between species coexistence and its consequences for ecosystem function, providing an avenue toward mechanistic and predictive understanding of community–ecosystem feedbacks."
}, {
  id: "32",
  title: "General predictions for the effects of warming on competition",
  authors : ["Kaleigh E. Davis", "Tess N. Grainger", "Po-Ju Ke", "Patrick L. Thompson", "Mary I. O'Connor", "Joey R. Bernhardt"],
  year: "2026",
  magazine: "Ecology Letters, 29(6): e70395",
  highlighted: [],
  pdf: pdf_2026_1,
  doi: "https://onlinelibrary.wiley.com/doi/10.1111/ele.70395",
  abstract: "Understanding the effects of climate change on ecological communities has been limited by a lack of general theory for how temperature affects competition. To fill this knowledge gap, we integrated Modern Coexistence Theory and the Metabolic Theory of Ecology by incorporating empirically derived temperature sensitivities into Modern Coexistence Theory's central model. We then simulated warming in consumer-resource systems and found that warming reduced both niche and fitness differences, making species more ecologically similar and competitive interactions more neutral. The greatest shifts in competition occurred when temperature sensitivities among species were highly asymmetrical. Effects of warming on competition via niche differences were comparable to those on fitness differences, suggesting that the emphasis on vital rates in global change research may overlook key biodiversity drivers. This general theory expands the domains of two prominent ecological theories and provides predictions for how warming may alter competition even in benign regions of species' thermal niches."
}, {
  id: "33",
  title: "Plant–soil feedback persists beyond host death to shape density-dependent plant competition",
  authors : ["Ching-Lin Huang", "Joe Wan", "Shou Wei", "Chia-Hao Chang-Yang", "Po-Ju Ke"],
  year: "2026",
  magazine: "Plant and soil (in press)",
  highlighted: [],
  pdf: pdf_2026_2,
  doi: "https://link.springer.com/article/10.1007/s11104-026-08731-0",
  abstract: "Plant–soil feedback (PSF) shapes plant competition, yet classic PSF experiments often overlook the density dependence and temporal complexities of PSFs, especially after host death. We ask whether microbial effects vary after host death and mediate density dependence in seedling competition. We combined forest census data from a subtropical forest with a density-gradient greenhouse experiment to evaluate how microbial legacies influence seedling competitive outcome. We used two tree species (Engelhardia roxburghiana and Machilus zuihoensis) as model species. In 2023, we collected soil inocula from living and dead trees (died between 2014 and 2019) with unsterilized and sterilized treatments. We applied invasion analysis to infer seedling competitive outcomes and used bootstrapping to evaluate uncertainty. Soil microbial communities shaped seedling competitive outcome, favoring E. roxburghiana. We found a consistent exclusion of M. zuihoensis by E. roxburghiana when using unsterilized soils collected from living and dead hosts, indicating that PSF persists for over 4–9 years after host death. In contrast, we found E. roxburghiana persisted in sterilized inoculum from living but not from dead hosts, suggesting underlying abiotic changes which might be masked by microbial effects. Moreover, we found significant evidence that soil microbes can mediate negative, nonlinear density dependence in seedling competition. We provide experimental evidence of persistent microbial legacies that shape plant competition in a subtropical forest. Our study demonstrates how integrating field-based census data with density-gradient experiments and explicit uncertainty estimation can better capture the temporal dimensions, complexities of density dependence, and uncertainties of PSF."
}, {
  id: "34",
  title: "Plants, soil, and coexistence: an alternative approach to modelling plant‑soil feedback",
  authors : ["Athmanathan Senthilnathan", "Po-Ju Ke", "Xinyi Yan", "Kerri Crawford", "Rafael D’Andrea"],
  year: "2026",
  magazine: "Plant and soil (in press)",
  highlighted: [],
  pdf: pdf_2026_3,
  doi: "https://link.springer.com/article/10.1007/s11104-026-08915-8",
  abstract: "Plant-soil feedback (PSF) affects plant coexistence and diversity. Although the current paradigm provides a direct experimental method to quantify PSF and explains coexistence with varying levels of success, the emphasis on pairwise interactions hinders linking PSF to community patterns. We propose a new framework emphasizing the role of individual plants in soil dynamics. Our framework suggests a common-garden experiment to quantify PSF which is species-specific rather than focused on species pairs, which require fewer treatment groups. We illustrate how data from such an experiment can be used to quantify PSF using simulated data of plant-soil dynamics. We show that the current approach is susceptible to mispredicting coexistence due to incomplete characterization of the timescale of soil conditioning. Our proposed framework remedies this issue and expands the realm of possible coexistence outcomes dependent on the soil’s history. Our proposed experiments are designed to confront the implicit assumptions in current PSF research and reveal gaps in our understanding of how plants condition the soil. The shift in focus from pairwise PSF measures to species-based soil conditioning offers a better path to linking PSF to plant coexistence and community structure, and to forecasting the effects of PSF under changing environments."
}, {
  id: "35",
  title: "Predator decision-making shapes the dynamics and stability of mimicry systems",
  authors : ["Yi Sun", "Po-Ju Ke"],
  year: "2026",
  magazine: "Journal of Animal Ecology (in press)",
  highlighted: [],
  pdf: pdf_2026_4,
  doi: "https://besjournals.onlinelibrary.wiley.com/doi/10.1111/1365-2656.70319",
  abstract: "Mimicry is an anti-predator strategy in which prey species (the mimic) resemble an unprofitable species (the model) to deceive predators. Despite theoretical expectations for perfect mimicry, imperfect mimicry, where the mimic resembles its model imperfectly, is widespread in nature. To understand how imperfect mimicry can persist ecologically, we studied the effect of different predator recognition processes on the dynamics and stability of various mimicry systems. Specifically, we extended a dynamical model that integrates optimal foraging and signal detection theories by introducing a novel abundance-dependent recognition mechanism, where predators' perception of the similarity between mimic and model is influenced by the relative abundance of prey types. We demonstrate that intermediate similarity promotes stable community dynamics and increases mimic abundance in single Batesian mimicry systems. Moreover, abundance-dependent recognition leads predators to reduce attack on mimics with low morphological similarity, further contributing to system stability. Extending the framework to a multi-mimicry system, we find that Batesian and Müllerian mimics have contrasting effects: Intermediate Batesian similarity continues to stabilize the system, while high Müllerian similarity provides additional protection and can offset destabilization caused by highly similar Batesian mimics. Our study offers a novel explanation for the prevalence of imperfect mimicry in nature and highlights how recognition processes shape the ecological stability of mimicry systems."
}, {
  id: "36",
  title: "Extending island biogeography theory to biotic islands: Microbial communities in epiphytic bird's nest fern Asplenium nidus",
  authors : ["Yu-Pei Tseng", "Shou Wei", "Po-Ju Ke"],
  year: "Preprints",
  magazine: "bioRxiv",
  highlighted: [],
  pdf: pdf_preprint_4,
  doi: "https://www.biorxiv.org/content/10.64898/2026.03.30.715435v1",
  abstract: "Biotic insular systems differ from conventional islands in that patch properties change as habitat-forming organisms grow, raising questions about the applicability of island biogeography theory (IBT). Using epiphytic bird's nest ferns (Asplenium nidus) as a model system, we tested whether fungal and bacterial communities exhibit species-area relationships and evaluated the roles of passive sampling, disproportionate effects, environmental heterogeneity, and assessed isolation effects using distance–decay patterns in community similarity. We treated individual ferns as microbial islands and sampled 24 individuals spanning three size classes. Microbial communities across litter layers were characterized using high-throughput sequencing, and humus chemistry was measured to quantify microhabitat variation. We applied a multi-scale rarefaction framework to partition diversity components and used distance–decay relationships to assess dispersal limitation. Both fungal and bacterial communities exhibited positive species-area relationships. Fungal richness was driven by both disproportionate effects and environmental heterogeneity, whereas bacterial richness was primarily explained by environmental heterogeneity. Larger ferns exhibited greater pH heterogeneity across litter layers, which was associated with increased species turnover, indicating that decomposition-driven gradients promote microbial diversity. Both communities showed significant distance–decay patterns, consistent with dispersal limitation. Our results demonstrate that organism-driven habitat development generates environmental heterogeneity that links area to diversity, supporting the extension of IBT to dynamic biotic island systems."
}];
