export type TempConversion = {
  id: number;
  type:
    | "boiling_point"
    | "melting_point"
    | "curie_point"
    | "neel_point"
    | "superconducting_point";
};

export type AtomEnergyConversion = {
  id: number;
  type: "ionization_energy" | "electron_affinity";
};

export type HardnessConversion = {
  id: number;
  type: "shear_modulus" | "vickers_hardness" | "brinell_hardness";
};

export type ThermalConversion = {
  id: number;
  type: "thermal_conductivity";
};

export type ModulusConversion = {
  id: number;
  type: "bulk_modulus" | "young_modulus";
};

export type DensityConversion = {
  id: number;
  type: "density" | "liquid_density";
};