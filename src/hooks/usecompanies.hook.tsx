import { useEffect, useState } from "react";
import { ENDPOINT } from "../dictionary/endpoint.enum";
import { Company } from "../entities/company.entity";
import { FetchCompanyHook } from "../entities/fetch_company_hook.entity";
import { Fetch } from "../repositories/fetch_data.repository";

export const useCompanies = (): FetchCompanyHook => {
  const [data, setData] = useState<Company[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch().catch(err => console.log(err));
  }, []);

  const fetch = async () => {
    setLoading(true);

    const getData = await Fetch(ENDPOINT.COMPANIES)
      .then(response => {
        setData(response?.data);

        setLoading(false);
      });

    return getData;
  };

  return { data, loading };
}