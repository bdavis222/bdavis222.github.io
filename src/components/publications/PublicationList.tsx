import Publication from "./Publication";

interface Props {
  publications: number[];
  expanded: boolean;
}

function PublicationList({ publications, expanded }: Props) {
  const colors = ["green", "purple", "red", "yellow"]; // Other options are "blue", "primaryGray", and "secondaryGray"
  const publicationList: {}[] = [];
  const allPublications = [
    {
      title:
        "Dot Scanner: Open-source Software for Quantitative Live-cell Imagining in planta",
      shortTitle: "Dot Scanner: Software for Live-cell Imagining in planta",
      journal: "The Plant Journal",
      date: "Feb 2024",
      link: "https://onlinelibrary.wiley.com/doi/10.1111/tpj.16662",
      abstract:
        "Confocal microscopy has greatly aided our understanding of the major cellular processes and trafficking pathways responsible for plant growth and development. However, a drawback of these studies is that they often rely on the manual analysis of a vast number of images, which is time-consuming, error-prone, and subject to bias. To overcome these limitations, we developed Dot Scanner, a Python program for analyzing the densities, lifetimes, and displacements of fluorescently tagged particles in an unbiased, automated, and efficient manner. Dot Scanner was validated by performing side-by-side analysis in Fiji-ImageJ of particles involved in cellulose biosynthesis. We found that the particle densities and lifetimes were comparable in both Dot Scanner and Fiji-ImageJ, verifying the accuracy of Dot Scanner. Dot Scanner largely outperforms Fiji-ImageJ, since it suffers far less selection bias when calculating particle lifetimes and is much more efficient at distinguishing between weak signals and background signal caused by bleaching. Not only does Dot Scanner obtain much more robust results, but it is a highly efficient program, since it automates much of the analyses, shortening workflow durations from weeks to minutes. This free and accessible program will be a highly advantageous tool for analyzing live-cell imaging in plants.",
    },
    {
      title: "Late-stage Evolution of Low- and Intermediate-mass Stars",
      shortTitle: "Late-stage Evolution of Low- and Intermediate-mass Stars",
      journal: "The Pennsylvania State University",
      date: "May 2022",
      link: "https://etda.libraries.psu.edu/files/final_submissions/25432",
      abstract:
        "Great strides have been made in recent years to better understand the late stages of stellar evolution for low- and intermediate-mass stars, and, specifically, the asymptotic giant branch (AGB) and post-AGB (PAGB) phases. Even still, there is a great amount of work to be done, as large discrepancies between theory and observations remain. In this dissertation, I perform observational studies of pre- and post-AGB stellar evolution for low- and intermediate-mass stars, so as to provide better constraints for future theoretical models.",
    },
    {
      title:
        "Yellow Post-asymptotic-giant-branch Stars as Standard Candles. I. Calibration of the Luminosity Function in Galactic Globular Clusters",
      shortTitle:
        "Yellow Post-asymptotic-giant-branch Stars as Standard Candles",
      journal: "The Astrophysical Journal",
      date: "May 2022",
      link: "https://iopscience.iop.org/article/10.3847/1538-4357/ac674d",
      abstract:
        'We use the results of a survey for low-surface-gravity stars in Galactic (and LMC) globular clusters to show that "yellow" post-asymptotic-branch (yPAGB) stars are likely to be excellent extragalactic standard candles, capable of producing distances to early-type galaxies that are accurate to a couple of percent. We show that the mean bolometric magnitude of the 10 yPAGB stars in globular clusters is〈M_bol〉= −3.38 ± 0.03, a value that is ∼0.2 mag brighter than that predicted from the latest post-horizontal-branch evolutionary tracks. More importantly, we show that the observed dispersion in the distribution is only 0.10 mag, i.e., better than the scatter for individual Cepheids. We describe the physics that can produce such a small dispersion and show that, if one restricts surveys to the color range 0.0 ≲ (B − V)₀ ≲ 0.5, then samples of nonvariable yPAGB stars can be identified quite easily with a minimum of contamination. The extremely bright absolute V magnitudes of these stars (〈Mᵥ〉= −3.37) make them, by far, the visually brightest objects in old stellar populations and ideal Population II standard candles for measurements out to ∼10 Mpc with current instrumentation. A Hubble Space Telescope survey in the halos of galaxies in the M81 and Sculptor groups could therefore serve as an effective cross-check on both the Cepheid and tip-of-the-red-giant-branch distance scales.',
    },
    {
      title:
        "Spectroscopic Confirmation of Two Luminous Post-AGB Stars in the Globular Cluster M19",
      shortTitle:
        "Spectroscopic Confirmation of Two Luminous Post-AGB Stars in M19",
      journal: "The Astronomical Journal",
      date: "Apr 2022",
      link: "https://arxiv.org/abs/2204.07206",
      abstract:
        'The visually brightest stars in globular clusters (GCs) are the ones evolving off the asymptotic giant branch (AGB) and passing through spectral types F and A--the "yellow" post-AGB (yPAGB) stars. yPAGB stars are potentially excellent "Population II" standard candles for measuring extragalactic distances. A recent survey of the Galactic GC system, using uBVI photometry to identify stars of low surface gravities with large Balmer discontinuities, discovered a candidate luminous yPAGB star in the GC M19 (NGC 6273), designated ZNG 4. The same survey also identified a bright, hotter candidate blue PAGB star, ZNG 2, lying near the top of the white-dwarf cooling sequence. Both PAGB candidates have proper motions and parallaxes in the recent Gaia Early Data Release 3 consistent with cluster membership, but they still lacked spectroscopic verification. Here we present moderate-resolution spectra of both stars, confirming them as low-gravity objects that are extremely likely to be cluster members. Through comparison with a library of synthetic spectra, we made approximate estimates of the stars\' atmospheric parameters. We find that the yPAGB star ZNG 4 has an effective temperature of T_eff ~ 6500 K, a surface gravity of log(g) ~ 1, and a metallicity of [Fe/H] ~ -1.5, similar to that of the host cluster. The blue PAGB star ZNG 2 has T_eff ~ 18000 K, log(g) ~ 3, and an apparently low metallicity in the range of [Fe/H] ~ -2.0 to -2.5. Both stars are bright (V=12.5 and 13.3, respectively). We urge high-dispersion spectroscopic follow-up to determine detailed atmospheric parameters and chemical compositions, and to monitor radial velocities.',
    },
    {
      title: "A Census of AHB Stars in Galactic Globular Clusters",
      shortTitle: "A Census of AHB Stars in Galactic Globular Clusters",
      journal: "The Astrophysical Journal",
      date: "Feb 2022",
      link: "https://iopscience.iop.org/article/10.3847/1538-4357/ac4224",
      abstract:
        "We have carried out a search for above-horizontal-branch (AHB) stars—objects lying above the horizontal branch (HB) and blueward of the asymptotic giant branch (AGB) in the color–magnitude diagram—in 97 Galactic and seven Magellanic Cloud globular clusters (GCs). We selected AHB candidates based on photometry in the uBVI system, which is optimized for detection of low-surface-gravity stars with large Balmer jumps, in the color range −0.05 ≤ (B − V)₀ ≤ 1.0. We then used Gaia astrometry and Gaussian-mixture modeling to confirm cluster membership and remove field interlopers. Our final catalog contains 438 AHB stars, classified and interpreted in the context of post-HB evolution as follows: (1) AHB1: 280 stars fainter than Mᵥ = −0.8, evolving redward from the blue HB (BHB) toward the base of the AGB. (2) Post-AGB (PAGB): 13 stars brighter than Mᵥ ≃ −2.75, departing from the top of the AGB and evolving rapidly blueward. (3) AHB2: 145 stars, with absolute magnitudes between those of the AHB1 and PAGB groups. This last category includes a mixture of objects leaving the extreme BHB and evolving toward the AGB, and brighter ones moving back from the AGB toward higher temperatures. Among the AHB1 stars are 59 RR Lyrae interlopers, observed by chance in our survey near maximum light. PAGB and AHB2 stars (including W Virginis Cepheids) overwhelmingly belong to GCs containing BHB stars, in accordance with predictions of post-HB evolutionary tracks. We suggest that most W Vir variables are evolving toward lower temperatures and are in their first crossings of the instability strip. Nonvariable yellow PAGB stars show promise as a Population II standard candle for distance measurement.",
    },
    {
      title:
        "Toward Precision Cosmology With Improved PNLF Distances Using VLT-MUSE I. Methodology and Tests",
      shortTitle: "Toward Precision Cosmology With Improved PNLF Distances",
      journal: "The Astrophysical Journal",
      date: "Jul 2021",
      link: "https://iopscience.iop.org/article/10.3847/1538-4357/ac02ca",
      abstract:
        "The [OIII] λ5007 planetary nebula luminosity function (PNLF) is an established distance indicator that has been used for more than 30 yr to measure the distances of galaxies out to ∼15 Mpc. With the advent of the Multi-Unit Spectroscopic Explorer on the Very Large Telescope (MUSE) as an efficient wide-field integral-field spectrograph, the PNLF method is due for a renaissance, as the spatial and spectral information contained in the instrument's data cubes provides many advantages over classical narrowband imaging. Here we use archival MUSE data to explore the potential of a novel differential emission-line filter (DELF) technique to produce spectrophotometry that is more accurate and more sensitive than other methods. We show that DELF analyses are superior to classical techniques in high surface brightness regions of galaxies, and we validate the method both through simulations and via the analysis of data from two early-type galaxies (NGC 1380 and NGC 474) and one late-type spiral (NGC 628). We demonstrate that with adaptive optics support or under excellent seeing conditions, the technique is capable of producing precision (≲0.05 mag) [OIII] photometry out to distances of 40 Mpc while providing discrimination between planetary nebulae and other emission-line objects such as HII regions, supernova remnants, and background galaxies. These capabilities enable us to use MUSE to measure precise PNLF distances beyond the reach of Cepheids and the tip of the red giant branch method and become an additional tool for constraining the local value of the Hubble constant.",
    },
    {
      title: "Two Luminous Post-AGB Stars in the Galactic Globular Cluster M19",
      shortTitle:
        "Two Luminous Post-AGB Stars in the Galactic Globular Cluster M19",
      journal: "The Astronomical Journal",
      date: "Feb 2021",
      link: "https://iopscience.iop.org/article/10.3847/1538-3881/abdbb3",
      abstract:
        'We report the discovery of a luminous "yellow" post–asymptotic giant branch (PAGB) star in the globular cluster (GC) M19 (NGC 6273), identified during our uBVI survey of Galactic GCs. The uBVI photometric system is optimized to detect stars with large Balmer discontinuities, indicating very low surface gravities and high luminosities. The spectral energy distribution (SED) of the star is consistent with an effective temperature of about 6250 K and a surface gravity of log(g) = 0.5. We use Gaia data to show that the star\'s proper motion and radial velocity are consistent with cluster membership. One aim of our program is to test yellow PAGB stars as candidate Population II standard candles for determining extragalactic distances. We derive a visual absolute magnitude of Mᵥ = − 3.39 ± 0.09 for the M19 star. This is in close agreement with the Mᵥ values found for yellow PAGB stars in the GCs ω Cen, NGC 5986, and M79, indicating a very narrow luminosity function. These objects are 4 mag brighter than RR Lyrae variables, and they can largely avoid the issues of interstellar extinction that are a problem for Population I distance indicators. We also identified a second luminous PAGB object in M19, this one a hotter "UV-bright" star. Its SED is consistent with an effective temperature of about 11,750 K and log(g) = 2.0. The two objects have nearly identical bolometric luminosities, log(L/L⊙) = 3.24 and 3.22, respectively.',
    },
    {
      title:
        "Hubble Space Telescope Spectroscopy of a Planetary Nebula in an M31 Open Cluster: Hot-bottom Burning at 3.4 M⊙",
      shortTitle: "HST Spectroscopy of a Planetary Nebula in an Open Cluster",
      journal: "The Astrophysical Journal",
      date: "Oct 2019",
      link: "https://iopscience.iop.org/article/10.3847/1538-4357/ab44d4",
      abstract:
        "We use imaging and spectroscopy from the Hubble Space Telescope (HST) to examine the properties of a bright planetary nebula (PN) projected within M31's young open cluster B477-D075. We show that the probability of a chance superposition of the PN on the cluster is small, ≲2%. Moreover, the radial velocity of the PN is the same as that of the cluster within the measurement error of ∼10 km/s. Given the expected ∼70 km/s velocity dispersion in this region, ∼8 kpc from M31's nucleus, the velocity data again make it extremely likely that the PN belongs to the cluster. Applying isochrone fitting to archival color–magnitude photometric data from the HST Advanced Camera for Surveys, we determine the cluster age and metallicity to be 290 Myr and Z = 0.0071, respectively, implying an initial mass of 3.38 ± 0.2 M⊙ for any PN produced by the cluster. From HST's Space Telescope Imaging Spectrograph observations and Cloudy photoionization modeling, we find that the PN is likely a Type I planetary, with a nitrogen abundance that is enhanced by ∼5–6 times over the solar value scaled to the cluster metallicity. If the PN is indeed a cluster member, these data present strong empirical evidence that hot-bottom burning occurs in asymptotic giant branch stars with initial masses as low as 3.4 M⊙.",
    },
    {
      title: "A Recurrent Nova Super-Remnant in the Andromeda Galaxy",
      shortTitle: "A Recurrent Nova Super-Remnant in Andromeda",
      journal: "Nature",
      date: "Jan 2019",
      link: "https://www.nature.com/articles/s41586-018-0825-4.epdf?author_access_token=Efv4kYyb8NweZ1W1tYmiYdRgN0jAjWel9jnR3ZoTv0N8qBJDnwa59hGY4PDdFI5yg_gnOrjBQgwM9FCrVQsuZahhXf1Qwl_lZHr5DDGM34vvvO_OQYNvo7VsvJMiCWIlCU1wcJOxs7-ZwFTtSFhguQ%3D%3D",
      abstract:
        'The accretion of hydrogen onto a white dwarf star ignites a classical nova eruption—a thermonuclear runaway in the accumulated envelope of gas, leading to luminosities up to a million times that of the Sun and a high-velocity mass ejection that produces a remnant shell (mainly consisting of insterstellar medium). Close to the upper mass limit of a white dwarf (1.4 solar masses), rapid accretion of hydrogen (about 10−7 solar masses per year) from a stellar companion leads to frequent eruptions on timescales of years to decades. Such binary systems are known as recurrent novae. The ejecta of recurrent novae, initially moving at velocities of up to 10,000 kilometres per second, must "sweep up" the surrounding interstellar medium, creating cavities in space around the nova binary. No remnant larger than one parsec across from any single classical or recurrent nova eruption is known, but thousands of successive recurrent nova eruptions should be capable of generating shells hundreds of parsecs across. Here we report that the most frequently recurring nova, M31N 2008-12a in the Andromeda galaxy (Messier 31 or NGC 224), which erupts annually, is indeed surrounded by such a super-remnant with a projected size of at least 134 by 90 parsecs. Larger than almost all known remnants of even supernova explosions, the existence of this shell demonstrates that the nova M31N 2008-12a has erupted with high frequency for millions of years.',
    },
    {
      title:
        "The True Luminosities of Planetary Nebulae in M31’s Bulge: Massive Central Stars from an Old Stellar Population",
      shortTitle: "The True Luminosities of Planetary Nebulae in M31’s Bulge",
      journal: "The Astrophysical Journal",
      date: "Aug 2018",
      link: "https://iopscience.iop.org/article/10.3847/1538-4357/aad3c4",
      abstract:
        "We measure the Balmer decrements of 23 of the brightest planetary nebulae (PNe) in the inner bulge (r ≲ 3') of M31 and deredden the bright end of the region's [OIII] λ5007 PN luminosity function. We show that the most luminous PNe produce ≳1200 L⊙ of power in their [OIII] λ5007 line, implying central star luminosities of at least ∼11,000 L⊙. Even with the most recent accelerated-evolution post-AGB models, such luminosities require central star masses in excess of 0.66 M⊙ and main-sequence progenitors of at least ∼2.5 M⊙. Since M31's bulge has very few intermediate-age stars, we conclude that conventional single-star evolution cannot be responsible for these extremely luminous objects. We also present the circumstellar extinctions for the region's bright PNe and demonstrate that the distribution is similar to that found for PNe in the Large Magellanic Cloud, with a median value of A_5007 = 0.71. Finally, we compare our results to extinction measurements made for PNe in the E6 elliptical NGC 4697 and the interacting lenticular NGC 5128. We show that such extinctions are not unusual and that the existence of very high-mass PN central stars is a general feature of old stellar populations. Our results suggest that single-star population synthesis models significantly underestimate the maximum luminosities and total integrated light of AGB stars.",
    },
    {
      title:
        "The Keck/OSIRIS Nearby AGN Survey (KONA) I. The Nuclear K-band Properties of Nearby AGN",
      shortTitle: "The Nuclear K-band Properties of Nearby AGN",
      journal: "The Astrophysical Journal",
      date: "May 2018",
      link: "https://iopscience.iop.org/article/10.3847/1538-4357/aab9ad/meta",
      abstract:
        "We introduce the Keck OSIRIS Nearby AGN survey (KONA), a new adaptive optics-assisted integral-field spectroscopic survey of Seyfert galaxies. KONA permits at ∼0.1 arcsec resolution a detailed study of the nuclear kinematic structure of gas and stars in a representative sample of 40 local bona fide active galactic nucleus (AGN). KONA seeks to characterize the physical processes responsible for the coevolution of supermassive black holes and galaxies, principally inflows and outflows. With these IFU data of the nuclear regions of 40 Seyfert galaxies, the KONA survey will be able to study, for the first time, a number of key topics with meaningful statistics. In this paper, we study the nuclear K-band properties of nearby AGN. We find that the K-band (2.1 μm) luminosities of the compact Seyfert 1 nuclei are correlated with the hard X-ray luminosities, implying a non-stellar origin for the majority of the continuum emission. The best-fit correlation is log(Lₖ) = 0.9log(L) + 4 over three orders of magnitude in both K-band and X-ray luminosities. We find no strong correlation between 2.1 μm luminosity and hard X-ray luminosity for the Seyfert 2 galaxies. The spatial extent and spectral slope of the Seyfert 2 galaxies indicate the presence of nuclear star formation and attenuating material (gas and dust), which in some cases is compact and in some galaxies extended. We detect coronal-line emission in 36 galaxies and for the first time in 5 galaxies. Finally, we find 4/20 galaxies that are usually classified as Seyfert 2 based on their optical spectra exhibit a broad component of Brγ emission, and one galaxy (NGC 7465) shows evidence of a double nucleus.",
    },
    {
      title:
        "The Planetary Nebula Luminosity Function (PNLF): Contamination from Supernova Remnants",
      shortTitle:
        "The Planetary Nebula Luminosity Function (PNLF): Contamination from Supernova Remnants",
      journal: "Research Notes of the AAS",
      date: "Feb 2018",
      link: "https://iopscience.iop.org/article/10.3847/2515-5172/aab045",
      abstract: "",
    },
    {
      title:
        "The Recurrent Nova Candidate M31N 1966-08a = 1968-10c is a Galactic Flare Star",
      shortTitle:
        "The Recurrent Nova Candidate M31N 1966-08a = 1968-10c is a Galactic Flare Star",
      journal: "Research Notes of the AAS",
      date: "Dec 2017",
      link: "https://iopscience.iop.org/article/10.3847/2515-5172/aaa086/meta",
      abstract: "",
    },
  ];

  const publicationNumbers =
    publications.length == 0
      ? [...Array(allPublications.length).keys()]
      : publications;

  publicationNumbers.forEach((publicationNumber, index) => {
    const publication = allPublications[publicationNumber];
    publicationList.push(
      <div
        className={
          expanded
            ? ""
            : index % 2 == 0
            ? "publication-column-left"
            : "publication-column-right"
        }
      >
        <Publication
          title={expanded ? publication["title"] : publication["shortTitle"]}
          journal={publication["journal"]}
          date={publication["date"]}
          link={publication["link"]}
          color={colors[index % colors.length]}
          abstract={publication["abstract"]}
          expanded={expanded}
        />
      </div>
    );
  });

  return <>{publicationList}</>;
}

export default PublicationList;
