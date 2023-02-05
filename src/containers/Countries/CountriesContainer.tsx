import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { Container, TextField } from "@mui/material";
import { Country, getCountries } from "api";
import Loader from "components/Loader";
import CountryCard from "components/CountryCard";
import CountriesFilter from "components/CountriesFilter";

const CountriesContainer = () => {
  const { data, isLoading } = useQuery("countries", getCountries);
  const [searchResult, setSearchResult] = useState<Country[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const countriesFiltered = data?.filter((country) => country.name) || [];
  console.log(data);

  useEffect(() => {
    if (countriesFiltered?.length) {
      setSearchResult(countriesFiltered);
    }
  }, [data]);

  const handleFilter = (value: string) => {
    // save value to storage
    if (data?.length) {
      const filteredCountriesByRegion = countriesFiltered?.filter(
        (country) => country.region === "Oceania"
      );

      const filteredCountriesByArea = countriesFiltered?.filter(
        (country) => country.area < 65300.0
      );

      if (value === "Oceania") {
        setSearchResult(filteredCountriesByRegion);
      } else {
        setSearchResult(filteredCountriesByArea);
      }
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (data?.length) {
      const query = e.target.value.toLowerCase();
      const searchResult = countriesFiltered?.filter((country) =>
        country.name.toLowerCase().includes(query)
      );

      setSearchQuery(query);
      setSearchResult(searchResult);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <Container maxWidth="md">
        <TextField
          label="Search"
          placeholder="Search country"
          sx={{ margin: "20px 0" }}
          fullWidth
          onChange={handleSearch}
          value={searchQuery}
        />
        <CountriesFilter onChange={handleFilter} />
        <Container
          disableGutters
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gridGap: "50px",
          }}
        >
          {searchResult?.map((country) => (
            <CountryCard {...country} key={country.name} />
          ))}
        </Container>
      </Container>
    </div>
  );
};

export default CountriesContainer;
