import ElementDetailsProps from "@/types/ElementTypes";

export const RowSevenElem: ElementDetailsProps[] = [
  {
    id: 87,
    neighbour: ["Radon", "Radium"],
    description:
      "Francium is the most unstable of the first 101 elements. Its longest-lived isotope has a half-life of only 22 minutes. It is produced by the decay of Actinium. It is the most electropositive of all elements, and therefore the most reactive of all metals. It reacts violently with water, and also with air, forming a black coating of Francium Oxide. It is so rare that only a few atoms have been produced. It is therefore not known how it looks like, but it is probably a silvery metal. It is so rare that it is not used for anything, but it could be used for research on the structure of atoms. Francium has the largest atomic diameter and is a very ignoble metal. Its chemical properties are similar to Caesium, but it is a bit less reactive. However it is very difficult to explore, because it is generated only in tiny amounts from Actinium decay. Its most stable isotope, <sup>223</sup>Fr, has a half-life of only 22 minutes.",
    general_properties: {
      name: "Francium",
      atomic_number: 87,
      group: 1,
      period: 7,
      block: "S",
      cas_number: "7440-73-5",
      cid_number: "6337087",
      symbol: "Fr",
    },
    particles: {
      electrons: 87,
      protons: 87,
      neutrons: 136,
    },
    overview: {
      latin_name: "Francium",
      discovery: 1939,
      discoverer: [["Marguerite Perey", "Marguerite_Perey"]],
    },
    atomic_properties: {
      atomic_weight: 223,
      oxidation_states: [1],
      electron_shell_configuration: "K2 L8 M18 N32 O18 P8 Q1",
      electron_configuration:
        "1s<sup>2</sup> 2s<sup>1</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>6</sup> 5s<sup>2</sup> 4d<sup>10</sup> 5p<sup>6</sup> 6s<sup>2</sup> 4f<sup>14</sup> 5d<sup>10</sup> 6p<sup>6</sup> 7s<sup>1</sup>",
      covalent_radius: 260,
    },
    thermodynamic_properties: {
      phase: "Liquid",
      fusion_heat: 2,
      vaporization_heat: 65,
    },
    material_properties: {
      color: "Silver",
    },
    reactivity: {
      valence: 1,
      electronegativity: 0.7,
      ionization_energy: 380,
    },
    neuclear_properties: {
      radioactive: "Yes",
      half_life: "1.3•10<sup>3</sup>",
      lifetime: "1.9•10<sup>3</sup>",
      quantum_numbers: "<sup>2</sup>S<sub>1/2</sub>",
      decay_mode: "Beta",
      isotopes: [
        199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212,
        213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226,
        227, 228, 229, 230, 231, 232,
      ],
    },
    external_links: {
      wikipedia: "https://en.wikipedia.org/wiki/Francium",
      youtube: "https://youtu.be/hpYxllgfMSg",
    },
  },
  {
    id: 88,
    neighbour: ["Francium", "Actinium"],
    description:
      "Radium is a ignoble metal, which chemically is very similar to Barium. It is radioactive, the most stable isotope, <sup>226</sup>Ra, has a half-life of 1602 years and decays to Radon. Radium was discovered by Marie Curie and played and important role in the earliest research of radioactivity. Up to the late 1920s, it was treated quite unscrupulously and was even promoted as being healthy.",
    general_properties: {
      name: "Radium",
      atomic_number: 88,
      group: 2,
      period: 7,
      block: "S",
      cas_number: "7440-14-4",
      cid_number: "6328144",
      symbol: "Ra",
    },
    particles: {
      electrons: 88,
      protons: 88,
      neutrons: 138,
    },
    overview: {
      latin_name: "Radium",
      discovery: 1898,
      discoverer: [
        ["Marie Curie", "Marie_Curie"],
        ["Pierre Curie", "Pierre_Curie"],
      ],
    },
    atomic_properties: {
      atomic_weight: 226,
      oxidation_states: [2],
      electron_shell_configuration: "K2 L8 M18 N32 O18 P8 Q2",
      electron_configuration:
        "1s<sup>2</sup> 2s<sup>1</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>6</sup> 5s<sup>2</sup> 4d<sup>10</sup> 5p<sup>6</sup> 6s<sup>2</sup> 4f<sup>14</sup> 5d<sup>10</sup> 6p<sup>6</sup> 7s<sup>2</sup>",
      covalent_radius: 221,
    },
    thermodynamic_properties: {
      boiling_point: "1737℃",
      melting_point: "700℃",
      phase: "Solid",
      fusion_heat: 8,
      specific_heat: 92,
      vaporization_heat: 125,
    },
    material_properties: {
      color: "Silver",
      density: 5000,
      molar_volume: "4.5•10<sup>-5</sup>",
      thermal_conductivity: 19,
    },
    electromagnetic_properties: {
      electrical_conductivity: "10<sup>6</sup>",
      electrical_type: "Conductor",
      resistivity: "10<sup>-6</sup>",
    },
    reactivity: {
      valence: 2,
      electronegativity: 0.9,
      ionization_energy: 509.3,
    },
    neuclear_properties: {
      radioactive: "Yes",
      half_life: "5•10<sup>10</sup>",
      lifetime: "7.3•10<sup>10</sup>",
      quantum_numbers: "<sup>1</sup>S<sub>0</sub>",
      neutron_cross_section: 13,
      decay_mode: "Alpha",
      isotopes: [
        202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215,
        216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229,
        230, 231, 232, 233, 234,
      ],
    },
    external_links: {
      wikipedia: "https://en.wikipedia.org/wiki/Radium",
      youtube: "https://youtu.be/I_1XelLa1eo",
    },
    atom_structure: {
      crystal_structure: "Body-Centered Cubic",
      lattice_angle: [90, 90, 90],
      lattice_constant: [514.8, 514.8, 514.8],
      space_group_name: "Im_ 3m",
      space_group_number: 229,
    },
  },
  {
    id: 104,
    neighbour: ["Lawrencium", "Dubnium"],
    description:
      "Rutherfordium is the first transactinides element. Those elements all are highly radioactive with half-life in most cases of minutes, seconds and less. Of them, heavier isotopes with a higher neutrons/protons ratio by trend are more stable, compared to the ratio of the lighter elements. But they are also the ones that are more difficult to make, because the original elements used to make them have proportionally less neutrons.",
    general_properties: {
      name: "Rutherfordium",
      atomic_number: 104,
      group: 4,
      period: 7,
      block: "D",
      cas_number: "53850-36-5",
      cid_number: "56951715",
      symbol: "Rf",
    },
    particles: {
      electrons: 104,
      protons: 104,
      neutrons: 163,
    },
    overview: {
      latin_name: "Rutherfordium",
      discovery: 1964,
      discoverer: [["Albert Ghiorso", "Albert_Ghiorso"]],
    },
    atomic_properties: {
      atomic_weight: 267,
      oxidation_states: [4],
      electron_shell_configuration: "K2 L8 M18 N32 O32 P10 Q2",
      electron_configuration:
        "1s<sup>2</sup> 2s<sup>1</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>6</sup> 5s<sup>2</sup> 4d<sup>10</sup> 5p<sup>6</sup> 6s<sup>2</sup> 4f<sup>14</sup> 5d<sup>10</sup> 6p<sup>6</sup> 7s<sup>2</sup> 5f<sup>14</sup> 6d<sup>2</sup>",
    },
    reactivity: {
      valence: 4,
    },
    neuclear_properties: {
      radioactive: "Yes",
      half_life: "4.7•10<sup>4</sup>",
      lifetime: "6.8•10<sup>4</sup>",
      quantum_numbers: "<sup>3</sup>F<sub>2</sub>",
      decay_mode: "Alpha",
      isotopes: [
        253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266,
        267, 268,
      ],
    },
    external_links: {
      wikipedia: "https://en.wikipedia.org/wiki/Rutherfordium",
      youtube: "https://youtu.be/dOj9ZjKnJcY",
    },
  },
  {
    id: 105,
    neighbour: ["Rutherfordium", "Seaborgium"],
    description:
      "First made 1967 by bombarding Americium with Neon, it often decays to Lawrencium. <sup>268</sup>Db has a quite long half-life of 29 hours, it decays by spontaneous fission. Dubnium is highly radioactive: the most stable known isotope, Dubnium-268, has a half-life of about 28 hours. This greatly limits the extent of research on Dubnium.",
    general_properties: {
      name: "Dubnium",
      atomic_number: 105,
      group: 5,
      period: 7,
      block: "D",
      cas_number: "53850-35-4",
      cid_number: "56951718",
      symbol: "Db",
    },
    particles: {
      electrons: 105,
      protons: 105,
      neutrons: 165,
    },
    overview: {
      latin_name: "Rutherfordium",
      discovery: 1964,
      discoverer: [["Albert Ghiorso", "Albert_Ghiorso"]],
    },
    atomic_properties: {
      atomic_weight: 270,
      oxidation_states: [5],
      electron_shell_configuration: "K2 L8 M18 N32 O32 P11 Q2",
      electron_configuration:
        "1s<sup>2</sup> 2s<sup>1</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>6</sup> 5s<sup>2</sup> 4d<sup>10</sup> 5p<sup>6</sup> 6s<sup>2</sup> 4f<sup>14</sup> 5d<sup>10</sup> 6p<sup>6</sup> 7s<sup>2</sup> 5f<sup>14</sup> 6d<sup>3</sup>",
    },
    reactivity: {
      valence: 5,
    },
    neuclear_properties: {
      radioactive: "Yes",
      half_life: "2•10<sup>4</sup>",
      lifetime: "3•10<sup>4</sup>",
      quantum_numbers: "<sup>4</sup>F<sub>3/2</sub>",
      decay_mode: "Alpha",
      isotopes: [
        255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268,
        269, 270,
      ],
    },
    external_links: {
      wikipedia: "https://en.wikipedia.org/wiki/Dubnium",
      youtube: "https://youtu.be/5d4VekfRnMs",
    },
  },
  {
    id: 106,
    neighbour: ["Dubnium", "Bohrium"],
    description:
      "It named after the American neuclear chemist Glenn T Seaborg. As a synthetic element, it can be cretaed in a laboratory but is not found in nature. It is also radioactive; the most stable known isotope, <sup>269</sup>Sg, has a half-life of approximately 14 minutes.",
    general_properties: {
      name: "Seaborgium",
      atomic_number: 106,
      group: 6,
      period: 7,
      block: "D",
      cas_number: "54038-81-2",
      cid_number: "56951717",
      symbol: "Sg",
    },
    particles: {
      electrons: 106,
      protons: 106,
      neutrons: 163,
    },
    overview: {
      latin_name: "Seaborgium",
      discovery: 1967,
      discoverer: [["Albert Ghiorso", "Albert_Ghiorso"]],
    },
    atomic_properties: {
      atomic_weight: 269,
      electron_shell_configuration: "K2 L8 M18 N32 O32 P12 Q2",
      electron_configuration:
        "1s<sup>2</sup> 2s<sup>1</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>6</sup> 5s<sup>2</sup> 4d<sup>10</sup> 5p<sup>6</sup> 6s<sup>2</sup> 4f<sup>14</sup> 5d<sup>10</sup> 6p<sup>6</sup> 7s<sup>2</sup> 5f<sup>14</sup> 6d<sup>4</sup>",
    },
    reactivity: {
      valence: 6,
    },
    neuclear_properties: {
      radioactive: "Yes",
      half_life: "7•10<sup>3</sup>",
      lifetime: "10<sup>4</sup>",
      quantum_numbers: "<sup>5</sup>D<sub>0</sub>",
      decay_mode: "Alpha",
      isotopes: [
        258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271,
        272, 273,
      ],
    },
    external_links: {
      wikipedia: "https://en.wikipedia.org/wiki/Seaborgium",
      youtube: "https://youtu.be/0WbFkXJwCaY",
    },
  },
  {
    id: 107,
    neighbour: ["Seaborgium", "Hassium"],
    description:
      "It is named after Danish physicist Niels Bohr. As a synthetic element, it can be created in laboratory but not found in nature. All known isotopes of Bohrium are extremely radioactive; the most stable known isotope is <sup>270</sup>Bh with a half-life of approx 61 seconds, though the unconfirmed <sup>278</sup>Bh may have a longer half-life of about 690 seconds.",
    general_properties: {
      name: "Bohrium",
      atomic_number: 107,
      group: 7,
      period: 7,
      block: "D",
      cas_number: "54037-14-8",
      cid_number: "56951713",
      symbol: "Bh",
    },
    particles: {
      electrons: 107,
      protons: 107,
      neutrons: 163,
    },
    overview: {
      latin_name: "Bohrium",
      discovery: 1981,
      discoverer: [
        ["Peter Armbruster", "Peter_Armbruster"],
        ["Gottfried Muzenburg", "Gottfried_Muzenburg"],
      ],
    },
    atomic_properties: {
      atomic_weight: 270,
      electron_shell_configuration: "K2 L8 M18 N32 O32 P13 Q2",
      electron_configuration:
        "1s<sup>2</sup> 2s<sup>1</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>6</sup> 5s<sup>2</sup> 4d<sup>10</sup> 5p<sup>6</sup> 6s<sup>2</sup> 4f<sup>14</sup> 5d<sup>10</sup> 6p<sup>6</sup> 7s<sup>2</sup> 5f<sup>14</sup> 6d<sup>5</sup>",
    },
    reactivity: {
      valence: 7,
    },
    neuclear_properties: {
      radioactive: "Yes",
      half_life: "5.4•10<sup>3</sup>",
      lifetime: "7.8•10<sup>3</sup>",
      quantum_numbers: "<sup>6</sup>S<sub>5/2</sub>",
      decay_mode: "Alpha",
      isotopes: [
        260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273,
        274, 275,
      ],
    },
    external_links: {
      wikipedia: "https://en.wikipedia.org/wiki/Bohrium",
      youtube: "https://youtu.be/okJnQIjELY4",
    },
  },
  {
    id: 108,
    neighbour: ["Bohrium", "Meitnerium"],
    description:
      "First made 1984 by bombarding lead with iron, it decays to seaborgium. Hassium isotopes have half-lifes of maximum some seconds. Possibly neuclear isomeres of Hassium with long half-life exists. In 2001, a Hassium compound was produced, probably Hassium Tetroxide, HsO<sub>4</sub>.",
    general_properties: {
      name: "Hassium",
      atomic_number: 108,
      group: 8,
      period: 7,
      block: "D",
      cas_number: "54037-57-9",
      cid_number: "56951714",
      symbol: "Hs",
    },
    particles: {
      electrons: 108,
      protons: 108,
      neutrons: 162,
    },
    overview: {
      latin_name: "Hassium",
      discovery: 1984,
      discoverer: [["Peter Armbruster", "Peter_Armbruster"]],
    },
    atomic_properties: {
      atomic_weight: 270,
      electron_shell_configuration: "K2 L8 M18 N32 O32 P14 Q2",
      electron_configuration:
        "1s<sup>2</sup> 2s<sup>1</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>6</sup> 5s<sup>2</sup> 4d<sup>10</sup> 5p<sup>6</sup> 6s<sup>2</sup> 4f<sup>14</sup> 5d<sup>10</sup> 6p<sup>6</sup> 7s<sup>2</sup> 5f<sup>14</sup> 6d<sup>6</sup>",
    },
    neuclear_properties: {
      radioactive: "Yes",
      half_life: "4•10<sup>3</sup>",
      lifetime: "5•10<sup>3</sup>",
      quantum_numbers: "<sup>5</sup>D<sub>4</sub>",
      decay_mode: "Alpha",
      isotopes: [
        263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276,
        277,
      ],
    },
    external_links: {
      wikipedia: "https://en.wikipedia.org/wiki/Hassium",
      youtube: "https://youtu.be/nF5B13Y5taQ",
    },
  },
  {
    id: 109,
    neighbour: ["Hassium", "Darmstadtium"],
    description:
      "Lawrencium is produced for example by bombarding Californium with Boron or Americium with Oxygen. The most stable isotope has a half-life of 11 hours. This decays to Nobelium, most other isotopes to Mendelevium. Of its physical properties not much is known, but they are probably similar to those of the other Actinoids. Lawrencium could be the hardest and heaviest of them",
    general_properties: {
      name: "Meitnerium",
      atomic_number: 109,
      group: 9,
      period: 7,
      block: "D",
      cas_number: "54038-01-6",
      cid_number: "56951716",
      symbol: "Mt",
    },
    particles: {
      electrons: 109,
      protons: 109,
      neutrons: 169,
    },
    overview: {
      latin_name: "Meitnerium",
      discovery: 1982,
      discoverer: [
        ["Peter Armbruster", "Peter_Armbruster"],
        ["Gottfried Muzenburg", "Gottfried_Muzenburg"],
      ],
    },
    atomic_properties: {
      atomic_weight: 278,
      electron_shell_configuration: "K2 L8 M18 N32 O32 P15 Q2",
      electron_configuration:
        "1s<sup>2</sup> 2s<sup>1</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>6</sup> 5s<sup>2</sup> 4d<sup>10</sup> 5p<sup>6</sup> 6s<sup>2</sup> 4f<sup>14</sup> 5d<sup>10</sup> 6p<sup>6</sup> 7s<sup>2</sup> 5f<sup>14</sup> 6d<sup>7</sup>",
    },
    neuclear_properties: {
      radioactive: "Yes",
      half_life: "1.8•10<sup>3</sup>",
      lifetime: "2.6•10<sup>3</sup>",
      quantum_numbers: "<sup>4</sup>F<sub>9/2</sub>",
      decay_mode: "Alpha",
      isotopes: [
        265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278,
        279,
      ],
    },
    external_links: {
      wikipedia: "https://en.wikipedia.org/wiki/Meitnerium",
      youtube: "https://youtu.be/N8VR7Qscq4k",
    },
  },
  {
    id: 110,
    neighbour: ["Meitnerium", "Roentgenium"],
    description:
      "It is an extremely radioactive synthetic element. The most stable known isotope, Darmstadtium-281, has a half-life of approx 12.7 seconds. Darmstadtium was first created in 1994 by the GSI Helmholtz Centre for Heavy Ion Research near the city of Darmstadt, Germany, after which it was named",
    general_properties: {
      name: "Darmstadtium",
      atomic_number: 110,
      group: 10,
      period: 7,
      block: "D",
      cas_number: "54038-77-1",
      cid_number: "135476787",
      symbol: "Ds",
    },
    particles: {
      electrons: 110,
      protons: 110,
      neutrons: 171,
    },
    overview: {
      latin_name: "Darmstadtium",
      discovery: 1994,
      discoverer: [["Sigurd Hofmann", "Sigurd_Hofmann"]],
    },
    atomic_properties: {
      atomic_weight: 281,
      electron_shell_configuration: "K2 L8 M18 N32 O32 P17 Q1",
      electron_configuration:
        "1s<sup>2</sup> 2s<sup>1</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>6</sup> 5s<sup>2</sup> 4d<sup>10</sup> 5p<sup>6</sup> 6s<sup>2</sup> 4f<sup>14</sup> 5d<sup>10</sup> 6p<sup>6</sup> 7s<sup>1</sup> 5f<sup>14</sup> 6d<sup>9</sup>",
    },
    neuclear_properties: {
      radioactive: "Yes",
      half_life: "2.4•10<sup>2</sup>",
      lifetime: "3.5•10<sup>2</sup>",
      quantum_numbers: "<sup>3</sup>D<sub>3</sub>",
      decay_mode: "Alpha",
      isotopes: [
        267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280,
        281,
      ],
    },
    external_links: {
      wikipedia: "https://en.wikipedia.org/wiki/Darmstadtium",
      youtube: "https://youtu.be/lhvMqva3-7M",
    },
  },
  {
    id: 111,
    neighbour: ["Darmstadtium", "Copernicium"],
    description:
      "It is an extremely radioactive synthetic element that can be created in a laboratory but is not found in nature. The most stable known isotope, Roentgenium-282, has a half-life of 100 seconds, although the unconfirmed Roentgenium-286 may have a longer half-life of 10.7 minutes.",
    general_properties: {
      name: "Roentgenium",
      atomic_number: 111,
      group: 11,
      period: 7,
      block: "D",
      cas_number: "54386-24-2",
      cid_number: "135476786",
      symbol: "Rg",
    },
    particles: {
      electrons: 111,
      protons: 111,
      neutrons: 170,
    },
    overview: {
      latin_name: "Roentgenium",
      discovery: 1994,
      discoverer: [["Sigurd Hofmann", "Sigurd_Hofmann"]],
    },
    atomic_properties: {
      atomic_weight: 281,
      electron_shell_configuration: "K2 L8 M18 N32 O32 P18 Q1",
      electron_configuration:
        "1s<sup>2</sup> 2s<sup>1</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>6</sup> 5s<sup>2</sup> 4d<sup>10</sup> 5p<sup>6</sup> 6s<sup>2</sup> 4f<sup>14</sup> 5d<sup>10</sup> 6p<sup>6</sup> 7s<sup>1</sup> 5f<sup>14</sup> 6d<sup>10</sup>",
    },
    neuclear_properties: {
      radioactive: "Yes",
      half_life: "6•10<sup>2</sup>",
      lifetime: "8.7•10<sup>2</sup>",
      quantum_numbers: "<sup>2</sup>S<sub>1/2</sub>",
      decay_mode: "Alpha",
      isotopes: [272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283],
    },
    external_links: {
      wikipedia: "https://en.wikipedia.org/wiki/Roentgenium",
      youtube: "https://youtu.be/MTq1hzhCF0g",
    },
  },
  {
    id: 112,
    neighbour: ["Roentgenium", "Nihonium"],
    description:
      "Its known isotopes are extremely radioactive, and have only been created in a laboratory. The most stable known isotope, copernicium-285, has a half-life of approximately 28 seconds. Copernicium was first created in 1996 by the GSI Helmholtz Centre for Heavy Ion Research near Darmstadt, Germany. It is named after the astronomer Nicolaus Copernicus.",
    general_properties: {
      name: "Copernicium",
      atomic_number: 112,
      group: 12,
      period: 7,
      block: "D",
      cas_number: "54084-26-3",
      cid_number: "135476785",
      symbol: "Cn",
    },
    particles: {
      electrons: 112,
      protons: 112,
      neutrons: 173,
    },
    overview: {
      latin_name: "Copernicium",
      discovery: 1996,
      discoverer: [["Sigurd Hofmann", "Sigurd_Hofmann"]],
    },
    atomic_properties: {
      atomic_weight: 285,
      electron_shell_configuration: "K2 L8 M18 N32 O32 P18 Q2",
      electron_configuration:
        "1s<sup>2</sup> 2s<sup>1</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>6</sup> 5s<sup>2</sup> 4d<sup>10</sup> 5p<sup>6</sup> 6s<sup>2</sup> 4f<sup>14</sup> 5d<sup>10</sup> 6p<sup>6</sup> 7s<sup>2</sup> 5f<sup>14</sup> 6d<sup>10</sup>",
    },
    neuclear_properties: {
      radioactive: "Yes",
      half_life: "2.4•10<sup>3</sup>",
      lifetime: "3.5•10<sup>3</sup>",
      quantum_numbers: "<sup>1</sup>S<sub>0</sub>",
      decay_mode: "Alpha",
      isotopes: [277, 278, 279, 280, 281, 282, 283, 284, 285],
    },
    external_links: {
      wikipedia: "https://en.wikipedia.org/wiki/Copernicium",
      youtube: "https://youtu.be/S3n_DBNMoqY",
    },
  },
  {
    id: 113,
    neighbour: ["Copernicium", "Flerovium"],
    description:
      "It is extremely radioactive; its most stable known isotope, Nihonium-286, has a half-life of about 10 seconds. In the periodic table, Nihonium is a transactinides element in the p-block. It is a member of Boron group.",
    general_properties: {
      name: "Nihonium",
      atomic_number: 113,
      group: 13,
      period: 7,
      block: "P",
      cas_number: "54084-70-7",
      symbol: "Nh",
    },
    particles: {
      electrons: 113,
      protons: 113,
      neutrons: 173,
    },
    overview: {
      latin_name: "Nihonium",
      discovery: 2004,
      discoverer: [
        ["Sigurd Hofmann", "Sigurd_Hofmann"],
        ["Kosuke Morita", "Kosuke_Morita"],
      ],
    },
    atomic_properties: {
      atomic_weight: 286,
      electron_shell_configuration: "K2 L8 M18 N32 O32 P18 Q3",
      electron_configuration:
        "1s<sup>2</sup> 2s<sup>1</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>6</sup> 5s<sup>2</sup> 4d<sup>10</sup> 5p<sup>6</sup> 6s<sup>2</sup> 4f<sup>14</sup> 5d<sup>10</sup> 6p<sup>6</sup> 7s<sup>2</sup> 5f<sup>14</sup> 6d<sup>10</sup> 7p<sup>1</sup>",
    },
    neuclear_properties: {
      radioactive: "Yes",
      half_life: "1.2•10<sup>3</sup>",
      lifetime: "1.7•10<sup>3</sup>",
      quantum_numbers: "<sup>2</sup>P<sub>1/2</sub>",
      decay_mode: "Alpha",
      isotopes: [283, 284, 285, 286, 287],
    },
    external_links: {
      wikipedia: "https://en.wikipedia.org/wiki/Nihonium",
      youtube: "https://youtu.be/3zC4CWTlbdQ",
    },
  },
  {
    id: 114,
    neighbour: ["Nihonium", "Moscovium"],
    description:
      "It is an extremely radioactive synthetic element. The element is named after the Flerov laboratory of neuclear research in Dubna, Russia, where the element was discovered in 1998. The name of the laboratory, in turn, honours the Russian physicist Geirgy Flyorov. The name was adopted by IUPAC on 30 May 2012.",
    general_properties: {
      name: "Flerovium",
      atomic_number: 114,
      group: 14,
      period: 7,
      block: "P",
      cas_number: "54085-16-4",
      symbol: "Fl",
    },
    particles: {
      electrons: 114,
      protons: 114,
      neutrons: 175,
    },
    overview: {
      latin_name: "Flerovium",
      discovery: 1998,
      discoverer: [["Sigurd Hofmann", "Sigurd_Hofmann"]],
    },
    atomic_properties: {
      atomic_weight: 289,
      electron_shell_configuration: "K2 L8 M18 N32 O32 P18 Q4",
      electron_configuration:
        "1s<sup>2</sup> 2s<sup>1</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>6</sup> 5s<sup>2</sup> 4d<sup>10</sup> 5p<sup>6</sup> 6s<sup>2</sup> 4f<sup>14</sup> 5d<sup>10</sup> 6p<sup>6</sup> 7s<sup>2</sup> 5f<sup>14</sup> 6d<sup>10</sup> 7p<sup>2</sup>",
    },
    neuclear_properties: {
      radioactive: "Yes",
      half_life: "80",
      lifetime: "1.2•10<sup>2</sup>",
      quantum_numbers: "<sup>3</sup>P<sub>0</sub>",
      decay_mode: "Alpha",
      isotopes: [285, 286, 287, 288, 289],
    },
    external_links: {
      wikipedia: "https://en.wikipedia.org/wiki/Flerovium",
      youtube: "https://youtu.be/5L-NNFPiRog",
    },
  },
  {
    id: 115,
    neighbour: ["Flerovium", "Livermorium"],
    description:
      "It was first synthesized in 2003 by a joint team of Russian and American scientists at the Joint Institute for Nuclear Research (JINR) in Dubna, Russia. In December 2015, it was recognized as one of four new elements by the Joint Working Party of International scientific bodies IUPAC and IUPAP. On 28 November 2016, It was officialy name after Moscow Oblast, in which the JINR is situated.",
    general_properties: {
      name: "Moscovium",
      atomic_number: 115,
      group: 15,
      period: 7,
      block: "P",
      cas_number: "54085-64-2",
      symbol: "Mc",
    },
    particles: {
      electrons: 115,
      protons: 115,
      neutrons: 174,
    },
    overview: {
      latin_name: "Moscovium",
      discovery: 2004,
      discoverer: [["Yuri Oganessian", "Yuri_Oganessian"]],
    },
    atomic_properties: {
      atomic_weight: 289,
      electron_shell_configuration: "K2 L8 M18 N32 O32 P18 Q2",
      electron_configuration:
        "1s<sup>2</sup> 2s<sup>1</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>6</sup> 5s<sup>2</sup> 4d<sup>10</sup> 5p<sup>6</sup> 6s<sup>2</sup> 4f<sup>14</sup> 5d<sup>10</sup> 6p<sup>6</sup> 7s<sup>2</sup> 5f<sup>14</sup> 6d<sup>10</sup> 7p<sup>3</sup>",
    },
    neuclear_properties: {
      radioactive: "Yes",
      half_life: "60",
      lifetime: "90",
      decay_mode: "Alpha",
      quantum_numbers: "<sup>4</sup>S<sub>3/2</sub>",
      isotopes: [287, 288, 289, 290, 291],
    },
    external_links: {
      wikipedia: "https://en.wikipedia.org/wiki/Moscovium",
      youtube: "https://youtu.be/ewQAJtbgr7w",
    },
  },
  {
    id: 116,
    neighbour: ["Moscovium", "Tennessine"],
    description:
      "It is an extremely radioactive element that has only been created in the laboratory and has not been observed in nature. The element is named after the Lawrence Livermore National Laboratory in the United States, which collaborated with the Joint Institute for Nuclear Research (JINR) in Dubna, Russia to discover Livermorium during experiments made between 2000 and 2006.",
    general_properties: {
      name: "Livermorium",
      atomic_number: 116,
      group: 16,
      period: 7,
      block: "P",
      cas_number: "54100-71-9",
      symbol: "Lv",
    },
    particles: {
      electrons: 116,
      protons: 116,
      neutrons: 177,
    },
    overview: {
      latin_name: "Livermorium",
      discovery: 2000,
      discoverer: [["Yuri Oganessian", "Yuri_Oganessian"]],
    },
    atomic_properties: {
      atomic_weight: 289,
      electron_shell_configuration: "K2 L8 M18 N32 O32 P18 Q6",
      electron_configuration:
        "1s<sup>2</sup> 2s<sup>1</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>6</sup> 5s<sup>2</sup> 4d<sup>10</sup> 5p<sup>6</sup> 6s<sup>2</sup> 4f<sup>14</sup> 5d<sup>10</sup> 6p<sup>6</sup> 7s<sup>2</sup> 5f<sup>14</sup> 6d<sup>10</sup> 7p<sup>4</sup>",
    },
    neuclear_properties: {
      radioactive: "Yes",
      half_life: "0.12",
      lifetime: "0.173",
      decay_mode: "Alpha",
      quantum_numbers: "<sup>3</sup>P<sub>2</sub>",
      isotopes: [289, 290, 291, 292],
    },
    external_links: {
      wikipedia: "https://en.wikipedia.org/wiki/Livermorium",
      youtube: "https://youtu.be/WdbF4L_ruyM",
    },
  },
  {
    id: 117,
    neighbour: ["Livermorium", "Oganesson"],
    description:
      "One of its daughter isotopes was created directly in 2011, partially confirming the results of the experiment. The experiment itself was repeated successfully by the same collaboration in 2012 and by joint German-American team in May 2014. In December 2015, the Joint Working Party of the international Union of Pure and Applied Chemistry (IUPAC) and the International Union of Pure and Applied Physics.",
    general_properties: {
      name: "Tennessine",
      atomic_number: 117,
      group: 17,
      period: 7,
      block: "P",
      cas_number: "87658-56-8",
      symbol: "Ts",
    },
    particles: {
      electrons: 117,
      protons: 117,
      neutrons: 176,
    },
    overview: {
      latin_name: "Tennessine",
      discovery: 2010,
      discoverer: [["Yuri Oganessian", "Yuri_Oganessian"]],
    },
    atomic_properties: {
      atomic_weight: 293,
      electron_shell_configuration: "K2 L8 M18 N32 O32 P18 Q7",
      electron_configuration:
        "1s<sup>2</sup> 2s<sup>1</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>6</sup> 5s<sup>2</sup> 4d<sup>10</sup> 5p<sup>6</sup> 6s<sup>2</sup> 4f<sup>14</sup> 5d<sup>10</sup> 6p<sup>6</sup> 7s<sup>2</sup> 5f<sup>14</sup> 6d<sup>10</sup> 7p<sup>5</sup>",
    },
    neuclear_properties: {
      radioactive: "Yes",
      half_life: "5•10<sup>-2</sup>",
      lifetime: "7.2•10<sup>-2</sup>",
      quantum_numbers: "<sup>2</sup>P<sub>3/2</sub>",
      isotopes: [291, 292, 293, 294],
    },
    external_links: {
      wikipedia: "https://en.wikipedia.org/wiki/Tennessine",
      youtube: "https://youtu.be/1RGlXh9eC5E",
    },
  },
  {
    id: 118,
    neighbour: ["Tennessine", "Hydrogen"],
    description:
      "It was fist synthesized in 2002 at the Joint Institite for Neuclear Research (JINR) in Dubna, near Moscow in Russia, by a joint team of Russian and American scientists. In December 2015, it was recognized as one of four new elements by the Joint Working Party of the international scientific bodies IUPAC and IUPAP. It was formally named on 28 November 2016.",
    general_properties: {
      name: "Oganesson",
      atomic_number: 118,
      group: 18,
      period: 7,
      block: "P",
      cas_number: "54144-19-3",
      symbol: "Og",
    },
    particles: {
      electrons: 118,
      protons: 118,
      neutrons: 176,
    },
    overview: {
      latin_name: "Oganesson",
      discovery: 2006,
      discoverer: [["Yuri Oganessian", "Yuri_Oganessian"]],
    },
    atomic_properties: {
      atomic_weight: 294,
      electron_shell_configuration: "K2 L8 M18 N32 O32 P18 Q8",
      electron_configuration:
        "1s<sup>2</sup> 2s<sup>1</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>6</sup> 5s<sup>2</sup> 4d<sup>10</sup> 5p<sup>6</sup> 6s<sup>2</sup> 4f<sup>14</sup> 5d<sup>10</sup> 6p<sup>6</sup> 7s<sup>2</sup> 5f<sup>14</sup> 6d<sup>10</sup> 7p<sup>6</sup>",
    },
    neuclear_properties: {
      radioactive: "Yes",
      half_life: "5•10<sup>-3</sup>",
      lifetime: "7•10<sup>-3</sup>",
      quantum_numbers: "<sup>1</sup>S<sub>0</sub>",
      decay_mode: "Alpha",
      isotopes: [293],
    },
    external_links: {
      wikipedia: "https://en.wikipedia.org/wiki/Oganesson",
      youtube: "https://youtu.be/VMv44bIBdQI",
    },
  },
];
