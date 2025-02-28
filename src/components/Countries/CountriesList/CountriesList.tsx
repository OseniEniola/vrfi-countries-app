import { DropdownBtn } from '@/components/Buttons';
import style from './CountriesList.module.scss';
import { SearchInputField } from '@/components/InputFields/SearchInputField';
import { useCallback, useEffect, useState } from 'react';
import { Country } from '@/services/models/Countries.dto';
import {
  useGetAllContinentsQuery,
  useGetAllCountriesQuery,
} from '@/services/hooks/countries/useCountryQueries';
import { Spinner } from 'react-bootstrap';
import { useGetCountryByRegionMutation } from '@/services/hooks/countries/useCountryMutations';
import { Link } from 'react-router-dom';

const CountriesList = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const [countriesCopy, setCountriesCopy] = useState<Country[]>([]);
  
    const { data: countries, isLoading } = useGetAllCountriesQuery();
    const { data: continents, isLoading: isLoadingContinents } = useGetAllContinentsQuery();
    const { mutate } = useGetCountryByRegionMutation();
  
    useEffect(() => {
      setCountriesCopy(countries);
    }, [countries]);
  
    /** Filter countries by continent */
    const getCountriesByContinent = useCallback((continent: string) => {
      if (continent.toLowerCase() === 'all continents') {
        setCountriesCopy(countries);
        return;
      }
      setCountriesCopy([]);
      setIsSearching(true);
      mutate(continent, {
        onSuccess: (res) => {
          setCountriesCopy(res);
          setIsSearching(false);
        },
        onError: () => {
          setCountriesCopy([]);
          setIsSearching(false);
        },
      });
    }, [countries, mutate]);
  
    /** Filter countries by search term */
    const filterCountries = useCallback((query: any) => {
      setSearchTerm(query);
      setIsSearching(true);
  
      if (query.length > 0) {
        const filteredArray = countries.filter((country) =>
          country.name.common.toLowerCase().includes(query.toLowerCase())
        );
        setCountriesCopy(filteredArray);
      } else {
        setCountriesCopy(countries);
      }
  
      setIsSearching(false);
    }, [countries]);
  
  if (isLoading) {
    return (
      <div className="loading-spinner">
        <Spinner animation="grow" variant="light" />
      </div>
    );
  }
  return (
    <div className={style.page_wrapper}>
      <h1 className={style.title}>Countries</h1>
      <h6 className={style.subtext}>
        A database of the countries of the world
      </h6>

      <div className={`search-sec d-flex gap-2 mt-5`}>
        <DropdownBtn
          title="Select continent"
          options={continents}
          isLoadingOptions={isLoadingContinents}
          onSelect={(continent) => getCountriesByContinent(continent)}
        />
        <SearchInputField
          value={searchTerm}
          onChange={(value) => filterCountries(value)}
        />
      </div>

      <section>
        <div className={style.country_table}>
          <div className={style.header}>
            <div className={style.column}>Country Identifier</div>
            <div className={style.column}>Country</div>
            <div className={style.column}>Continent</div>
          </div>

          {/* Render loading state while searching */}
          {isSearching && (
            <div style={{ marginTop: '5%' }} className="loading-spinner">
              <Spinner />
            </div>
          )}

          {/* No country state */}
          {countriesCopy.length < 1 && !isSearching && (
            <div className="text-center text-muted fs-2 fw-bold mt-4 p-3 rounded">
              No country available
            </div>
          )}

          {countriesCopy &&
            countriesCopy.map((country: Country, index: number) => (
              <Link to={`/app/country/detail?name=${country.name.common}&continent=${country.region}&cca2=${country.cca2}`} key={index}>
                <div className={style.row} >
                  <div className={style.column}>
                    <div
                      className={style.flag}
                      style={{ backgroundImage: `url(${country.flags.svg})` }}
                    ></div>
                  </div>
                  <div className={style.column}>{country.name.common}</div>
                  <div className={style.column}>{country.region}</div>
                </div>
              </Link>
            ))}
        </div>
      </section>
    </div>
  );
};

export default CountriesList;
