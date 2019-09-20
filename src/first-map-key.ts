import { firstMapEntry } from "./first-map-entry";

export const firstMapKey = <K, V>(map: Map<K, V>): K | undefined => firstMapEntry(map)[0];
