import { useEffect, useState } from "react";
import { ENDPOINT } from "../dictionary/endpoint.enum";
import { FetchPhoneNumberHook } from "../entities/fetch_phone_hook.entity";
import { Phone_Number } from "../entities/phone_number.entity";
import { Fetch } from "../repositories/fetch_data.repository";

export const usePhoneNumbers = (param: any): FetchPhoneNumberHook => {
  const [data, setData] = useState<Phone_Number[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch().catch(err => console.log(err));
  }, []);

  const fetch = async () => {
    setLoading(true);
    
    const getData = await Fetch(ENDPOINT.PHONE_NUMBER, param)
      .then(response => {
        console.log('RES', response);
        // const filteredData: Phone_Number[] = response?.data.filter((d: Phone_Number) => (
        //   String(d.company_id) === param
        // ));

        setData(response?.data);
        setLoading(false);
      });

    return getData;
  };

  return { loading, data };
}