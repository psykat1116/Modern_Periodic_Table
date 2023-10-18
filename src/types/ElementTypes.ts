export interface GeneralProperties {
  name?: string;
  atomic_number: number;
  group: number;
  period: number;
  block: "s" | "p" | "d" | "f";
  cas_number: string;
  symbol: string;
}

export interface Particles {
  electrons: number;
  protons: number;
  neutrons: number;
}

export interface Overview {
  latin_name: string;
  discovery: number;
  discoverer: string;
}

export interface AtomicProperties {
  atomic_weight: number;
  oxidation_states?: number[];
  electron_shell_configuration: string;
  electron_configuration: string;
  gas_atom_multiplicities: number;
  atomic_radius: number;
  covalent_radius: number;
  van_der_walls_radius: number;
  crystall_structure: string;
}

export interface ThermodynamicProperties {
  boiling_point: string;
  melting_point: string;
  phase: string;
  fusion_heat: number;
  specific_heat: number;
  vaporization_heat: number;
  thermal_expansion?: string;
}

export interface MaterialProperties {
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
  poisson_ratio?: number;
  mohs_hardness?: number;
}

export interface NeuclearProperties {
  radioactive: "Yes" | "No";
  half_life: string | "∞";
  lifetime: string;
  neutron_cross_section: number;
  decay_mode?: "alpha" | "beta" | "gamma" | "positron";
}

export interface ElectromagneticProperties {
  electrical_type?: string;
  magnetic_type: string;
  resisitivity?: string;
  electrical_conductivity?: string;
  curie_point?: number;
  volume_magnetic_suspectibility: string;
  mass_magnetic_suspectibility: string;
  molar_magnetic_suspectibility: string;
}

export interface Prevalence {
  universe: string;
  sun: string;
  ocean: string;
  human: string;
  earth_crust: string;
  meteorites: string;
}

export interface Reactivity {
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
  neuclear_properties: NeuclearProperties;
  electromagnetic_properties: ElectromagneticProperties;
  prevalence: Prevalence;
}
