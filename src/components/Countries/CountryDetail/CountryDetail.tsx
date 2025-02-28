import { CountryDetailsCard } from '@/components/Cards';
import style from './CountryDetail.module.scss';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useGetCountryDetails } from '@/services/hooks/countries/useCountryQueries';
import { Spinner } from 'react-bootstrap';
import { getCountryLang, getCurrencyName } from '@/utils/functions/country';
import { Button } from '@/components/Buttons';
import { BUTTON_TYPE_CLASS } from '@/components/Buttons/types';

const CountryDetails = () => {
  const location = useLocation();

  // Use URLSearchParams to parse query parameters
  const queryParams = new URLSearchParams(location.search);
  const countryData = {
    name: queryParams.get('name'),
    continent: queryParams.get('continent'),
    cca2: queryParams.get('cca2'),
  };
  const { data: country, isLoading } = useGetCountryDetails(countryData);

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Goes back to the previous page
  };


/* Render loading state */
  if (isLoading) {
    return (
      <div className="loading-spinner">
        <Spinner animation="grow" variant="light" />
      </div>
    );
  }

  return (
    country.name && (
      <div className={style.page_wrapper}>

       <button className={style.back} onClick={handleGoBack}>Go back</button>

        <h1 className={style.title}>{country.name.common}</h1>
        <h6 className={style.subtext}>A short discription about {country.name.common}</h6>

        <div className={style.details_wrap}>
          <div className={style.flag}>
            <CountryDetailsCard
              label="Country Flag"
              flag={country?.flags?.png}
            />
          </div>
          <div className={style.info_wrap}>
            <div className={style.info}>
              <CountryDetailsCard
                label="Population"
                info={country?.population?.toLocaleString()}
              />
            </div>
            <div className={style.info}>
              <CountryDetailsCard label="Capital" info={country?.capital[0]} />
            </div>
            <div className={style.info}>
              <CountryDetailsCard
                label="Language"
                info={getCountryLang(country)}
              />
            </div>
            <div className={style.info}>
              <CountryDetailsCard
                label="Currency"
                info={getCurrencyName(country)}
              />
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default CountryDetails;
