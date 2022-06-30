import { useParams, Link } from 'react-router-dom';

import { usePhoneNumbers } from '../../../hooks/usephonenumbers.hook';
import { EmptyData } from '../../atoms/EmptyData';
import { Loading } from '../../atoms/Loading';
import { Table } from '../../molecules/Table';

export const CompanyDetail = () => {
    const { companyId } = useParams();
    const headers: string[] = ['Number', 'Type'];
    const { loading, data } = usePhoneNumbers({company_id: companyId});
  
    {loading && <Loading />}

    return (
    <>
        {
            data?.length ? 
            <Table headers={headers}>
            {
                data.map(d => (
                    <tr key={d.id}>
                        <td><Link to={`/numbers/${d?.id}`}>{d?.id}</Link></td>
                        <td>{d?.type}</td>
                    </tr>
                ))
            }
            </Table> :
            <EmptyData text='No phone numbers available' /> 
        }
    </>
    )
}

{/* <table>
<thead>
    <tr>
        <td>Number</td>
        <td>Type</td>
    </tr>
</thead>
<tbody>
    
</tbody>
</table> */}