import { LanConfig } from "@/constant/ParticleConfigure";
import { ActConfig } from "@/constant/ParticleConfigure";
import { MetalConfig } from "@/constant/ParticleConfigure";
import { NonMetalConfig } from "@/constant/ParticleConfigure";
import { AlkaliConfig } from "@/constant/ParticleConfigure";
import { AlkaliEarthConfig } from "@/constant/ParticleConfigure";
import { TransactinideConfig } from "@/constant/ParticleConfigure";
import { TransitionConfig } from "@/constant/ParticleConfigure";
import { HaloConfig } from "@/constant/ParticleConfigure";
import { NobleConfig } from "@/constant/ParticleConfigure";
import { MetalloidConfig } from "@/constant/ParticleConfigure";
import { ISourceOptions } from "tsparticles-engine";

const Alkali = [3, 11, 19, 37, 55, 87];
const NonMetal = [1, 6, 7, 8, 15, 16, 34];
const AlkaliEarth = [4, 12, 20, 38, 56, 88];
const Transactinide = [104, 105, 106, 107, 108, 109, 110, 111, 112];
const Transition = [
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 39, 40, 41, 42, 43, 44, 45, 46, 47,
  48, 72, 73, 74, 75, 76, 77, 78, 79, 80,
];
const Halogen = [9, 17, 35, 53, 85];
const NobleGases = [2, 10, 18, 36, 54, 86, 118];
const Metalloid = [5, 14, 32, 33, 51, 52, 84];
const Metal = [13, 31, 49, 50, 81, 82, 83, 113, 114, 115, 116, 117];

export const getConfig = (number: number): ISourceOptions => {
  if (number >= 57 && number <= 71) {
    return LanConfig;
  }
  if (number >= 89 && number <= 103) {
    return ActConfig;
  }
  if (Alkali.includes(number)) {
    return AlkaliConfig;
  }
  if (NonMetal.includes(number)) {
    return NonMetalConfig;
  }
  if (AlkaliEarth.includes(number)) {
    return AlkaliEarthConfig;
  }
  if (Metal.includes(number)) {
    return MetalConfig;
  }
  if (Metalloid.includes(number)) {
    return MetalloidConfig;
  }
  if (Halogen.includes(number)) {
    return HaloConfig;
  }
  if (NobleGases.includes(number)) {
    return NobleConfig;
  }
  if (Transactinide.includes(number)) {
    return TransactinideConfig;
  }
  return TransitionConfig;
};
