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
