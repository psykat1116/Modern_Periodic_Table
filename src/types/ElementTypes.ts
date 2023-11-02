export interface GeneralProperties {
  name?: string;
  atomic_number: number;
  group?: number;
  period: number;
  block: "S" | "P" | "D" | "F";
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
  gas_atom_multiplicities?: number;
  atomic_radius?: number;
  covalent_radius?: number;
  van_der_walls_radius?: number;
  crystall_structure?: string;
}

export interface ThermodynamicProperties {
  boiling_point?: string;
  melting_point?: string;
  phase?: string;
  fusion_heat?: number;
  specific_heat?: number;
  vaporization_heat?: number;
  thermal_expansion?: string;
  neel_point?: number;
}

export interface MaterialProperties {
  color?: string;
  molar_volume?: string;
  refrective_index?: number;
  sound_speed?: number;
  thermal_conductivity?: number;
  liquid_density?: number;
  density?: number;
  young_modulus?: number;
  vickers_hardness?: number;
  bulk_modulus?: number;
  brinell_hardness?: number;
  poisson_ratio?: number;
  mohs_hardness?: number;
  shear_modulus?: number;
}

export interface NeuclearProperties {
  radioactive: "Yes" | "No";
  half_life: string | "∞";
  lifetime: string;
  neutron_cross_section?: number;
  decay_mode?: "Alpha" | "Beta" | "Gamma" | "Positron";
}

export interface ElectromagneticProperties {
  electrical_type?: "Conductor" | "Semiconductor" | "Insulator";
  magnetic_type?:
    | "Diamagnetic"
    | "Paramagnetic"
    | "Ferromagnetic"
    | "Antiferromagnetic";
  resisitivity?: string;
  electrical_conductivity?: string;
  curie_point?: number;
  superconducting_point?: number;
  volume_magnetic_suspectibility?: string;
  mass_magnetic_suspectibility?: string;
  molar_magnetic_suspectibility?: string;
}

export interface Prevalence {
  universe?: string;
  sun?: string;
  ocean?: string;
  human?: string;
  earth_crust?: string;
  meteorites?: string;
}

export interface Reactivity {
  electronegativity?: number;
  valence: number;
  electron_affinity?: number;
  ionization_energy?: number;
}

export interface ExternalLinks {
  wikipedia: string;
  youtube: string;
}

export default interface ElementDetailsProps {
  id: number;
  neighbour: string[];
  description: string;
  general_properties: GeneralProperties;
  particles: Particles;
  overview: Overview;
  atomic_properties: AtomicProperties;
  thermodynamic_properties?: ThermodynamicProperties;
  material_properties?: MaterialProperties;
  reactivity?: Reactivity;
  neuclear_properties: NeuclearProperties;
  electromagnetic_properties?: ElectromagneticProperties;
  prevalence?: Prevalence;
  external_links: ExternalLinks;
}
