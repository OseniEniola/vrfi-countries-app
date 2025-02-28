import { CountryDetailsCard } from '@/components/Cards';
import style from './CountryDetail.module.scss';
import { useMemo, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useGetCountryDetails } from '@/services/hooks/countries/useCountryQueries';
import { Spinner } from 'react-bootstrap';
import { getCountryLang, getCurrencyName } from '@/utils/functions/country';
import * as _ from 'lodash';

const CountryDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const countryData = useMemo(() => {
    const queryParams = new URLSearchParams(location.search);
    return {
      name: queryParams.get('name'),
      continent: queryParams.get('continent'),
      cca2: queryParams.get('cca2'),
    };
  }, [location.search]);

  const {
    data: country,
    isLoading,
    isError,
    isFetched,
  } = useGetCountryDetails(countryData);

  const handleGoBack = useCallback(() => {
    navigate('/app/home');
  }, [navigate]);

  // Show a loading state
  if (isLoading) {
    return (
      <div className="loading-spinner">
        <Spinner  />
      </div>
    );
  }

  // Ensure country exists before rendering
  if (isFetched && _.isEmpty(country)) {
    return (
      <div className="text-center text-muted fs-1 fw-bold mt-25p p-3 rounded">
        Country details not available
      </div>
    );
  }
  if (isFetched && isError || _.isEmpty(country)) {
    return (
      <div className='text-center mt-5'>
        <div className="text-center text-muted fs-1 fw-bold mt-25p p-3 rounded">
          Error fetching country details
        </div>
        <button className={style.back} onClick={handleGoBack}>
          Go back
        </button>
      </div>
    );
  }
  return (
    isFetched && !_.isEmpty(country) && (
      <div className={style.page_wrapper}>
        <button className={style.back} onClick={handleGoBack}>
          Go back
        </button>

        <h1 className={style.title}>{country?.name?.common}</h1>
        <h6 className={style.subtext}>
          A short description about {country?.name?.common}
        </h6>

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
              <CountryDetailsCard
                label="Capital"
                info={country?.capital?.[0]}
              />
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
