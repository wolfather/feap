import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Phone_Number } from '../../../entities/phone_number.entity';
import { usePhoneNumbers } from '../../../hooks/usephonenumbers.hook';
import { EmptyData } from '../../atoms/EmptyData';
import { Loading } from '../../atoms/Loading';

export const PhoneNumber = () => {
    const [phoneDetail, setPhoneDetail] = useState<Phone_Number>({} as Phone_Number);

    const { phoneId } = useParams();

    const { loading, data } = usePhoneNumbers({id: phoneId});

    useEffect(() => {
        setPhoneDetail(data[0]);
    }, [data]);

    {loading && <Loading />}

    return (
        <>
            {
                phoneDetail?.company_id !== undefined ?
                <div>
                    <p>{phoneDetail?.id}</p>
                    <p>{phoneDetail?.type}</p>
                </div> :
                <EmptyData text='There\s error. Try again' />
            }
        </>
    )
};
