interface GeneralProperties {
  atomic_number: number;
  group: number;
  period: number;
  block: "s" | "p" | "d" | "f";
  cas_number: string;
  symbol: string;
}

interface Particles {
  electrons: number;
  protons: number;
  neutrons: number;
}

interface Overview {
  latin_name: string;
  discovery: number;
  discoverer: string;
}

interface AtomicProperties {
  atomic_weight: number;
  oxidation_states?: number[];
  electron_shell_cofiguration: string;
  electron_cofiguration: string;
  gas_atom_multiplicities: number;
  atomic_radius: number;
  covalent_radius: number;
  van_der_walls_radius: number;
  crystall_structure: string;
}

interface ThermodynamicProperties {
  boiling_point: string;
  melting_point: string;
  phase: string;
  fusion_heat: number;
  specific_heat: number;
  vaporization_heat: number;
  thermal_expansion?: string;
}

interface MaterialProperties {
  color: string;
  molar_volume: string;
  refrective_index: number;
  sound_speed: number;
  thermal_conductivity: number;
  liquid_density?: number;
  density?: number;
  young_modulus?: number;
  vickers_hardness?: number;
  bulk_modulus?: number;
  brinell_hardness?: number;
  poisson_ratio?:number,
  mohs_hardness?: number;
}

interface NueclearProperties {
  radioactive: "Yes" | "No";
  half_life: string | "∞";
  lifetime: string;
  neutron_cross_section: number;
  decay_mode?: 'alpha' | 'beta' | 'gamma'
}

interface ElectromagneticProperties {
  electrical_type?: string;
  magnetic_type: string;
  resisitivity?: string;
  electrical_conductivity?: string;
  curie_point?: number;
  volume_magnetic_suspectibility: string;
  mass_magnetic_suspectibility: string;
  molar_magnetic_suspectibility: string;
}

interface Prevalence {
  universe: string;
  sun: string;
  ocean: string;
  human: string;
  earth_crust: string;
  meteorites: string;
}

interface Reactivity {
  electronegativity?: number;
  valence: number;
  electron_affinity?: number;
  ionization_energy: number;
}

export default interface ElementDetailsProps {
  id: number;
  description: string;
  general_properties: GeneralProperties;
  particles: Particles;
  overview: Overview;
  atomic_properties: AtomicProperties;
  thermodynamic_properties: ThermodynamicProperties;
  material_properties: MaterialProperties;
  reactivity: Reactivity;
  neuclear_properties: NueclearProperties;
  electromagnetic_properties: ElectromagneticProperties;
  prevalence: Prevalence;
}
