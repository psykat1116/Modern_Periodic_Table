export interface GeneralPropertiesType {
  name: string;
  atomic_number: number;
  group?: number;
  period: number;
  block: "S" | "P" | "D" | "F";
  cas_number: string;
  cid_number?: string;
  symbol: string;
  allotropes?: string[][];
  image?: string;
}

export interface ParticlesType {
  electrons: number;
  protons: number;
  neutrons: number;
}

export interface OverviewType{
  latin_name: string;
  discovery: number;
  discoverer: string[][];
}

export interface AtomicPropertiesType {
  atomic_weight: number;
  oxidation_states?: number[];
  electron_shell_configuration: string;
  electron_configuration: string;
  gas_atom_multiplicities?: number;
  atomic_radius?: number;
  covalent_radius?: number;
  van_der_walls_radius?: number;
}

export interface ThermodynamicPropertiesType {
  boiling_point?: number;
  melting_point?: number;
  phase?: string;
  fusion_heat?: number;
  specific_heat?: number;
  vaporization_heat?: number;
  thermal_expansion?: string;
  neel_point?: number;
  adiabatic_index?: number;
}

export interface MaterialPropertiesType {
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

export interface NeuclearPropertiesType {
  radioactive: "Yes" | "No";
  half_life: string | "∞";
  lifetime: string | "∞";
  neutron_cross_section?: number;
  neutron_mass_absorption?: number;
  decay_mode?: "Alpha" | "Beta" | "Gamma" | "Positron";
  quantum_numbers?: string;
  isotopes: number[];
  stable?: number[];
}

export interface ElectromagneticPropertiesType {
  electrical_type?: "Conductor" | "Semiconductor" | "Insulator";
  magnetic_type?:
    | "Diamagnetic"
    | "Paramagnetic"
    | "Ferromagnetic"
    | "Antiferromagnetic";
  resistivity?: string;
  electrical_conductivity?: string;
  curie_point?: number;
  superconducting_point?: number;
  volume_magnetic_suspectibility?: string;
  mass_magnetic_suspectibility?: string;
  molar_magnetic_suspectibility?: string;
}

export interface PrevalenceType {
  universe?: string;
  sun?: string;
  ocean?: string;
  human?: string;
  earth_crust?: string;
  meteorites?: string;
}

export interface ReactivityType {
  valence: number;
  electronegativity?: number;
  electron_affinity?: number;
  ionization_energy?: number;
}

export interface ExternalLinksType {
  wikipedia: string;
  youtube: string;
}

export interface HealthSafetyType {
  Hazard_class?: number;
  dot_number?: number;
  rtecs_number?: string;
  nfpa_label?: string;
}

export interface AtomStructureType {
  crystal_structure?: string;
  lattice_angle?: number[];
  lattice_constant?: number[];
  space_group_name?: string;
  space_group_number?: number;
}

export default interface ElementDetailsPropsType {
  id: number;
  neighbour: string[];
  description: string;
  general_properties: GeneralPropertiesType;
  particles: ParticlesType;
  overview: OverviewType;
  atomic_properties: AtomicPropertiesType;
  thermodynamic_properties?: ThermodynamicPropertiesType;
  material_properties?: MaterialPropertiesType;
  reactivity?: ReactivityType;
  neuclear_properties: NeuclearPropertiesType;
  electromagnetic_properties?: ElectromagneticPropertiesType;
  prevalence?: PrevalenceType;
  external_links: ExternalLinksType;
  health_safety?: HealthSafetyType;
  atom_structure?: AtomStructureType;
}
