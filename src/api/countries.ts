import { get } from "./shared/requests";
import { Country } from "./types";

export const getCountries = async () => {
  const { data } = await get<Country[]>("");
  return data;
};
