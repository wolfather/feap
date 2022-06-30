import { ENDPOINT } from '../../../dictionary/endpoint.enum';

import { Link } from "react-router-dom";
import { useCompanies } from '../../../hooks/usecompanies.hook';
import { Table } from '../../molecules/Table';
import { Loading } from '../../atoms/Loading';
import { EmptyData } from '../../atoms/EmptyData';

export const CompaniesList = () => {
    const { data, loading } = useCompanies();
    const headers: string[] = ['Company name', 'vatin'];
  
    { loading && <Loading /> }
  
    return (<>
        {
            data?.length ?
            <Table headers={headers}>
            {
                data.map((d) => (
                    <tr key={d.vatin}>
                        <td>{d.name}</td>
                        <td><Link to={`/companies/${d.id}`}>{d.vatin}</Link></td>
                    </tr>
                ))
            }
            </Table> :
            <EmptyData text='No companies listed' />
        }
    </>);
}
