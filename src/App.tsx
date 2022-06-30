import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { CompaniesList } from "./components/pages/companies_list";
import { CompanyDetail } from "./components/pages/company_detail";
import { Detail } from "./components/pages/detail";
import { PhoneNumber } from "./components/pages/Phone_number";

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<CompaniesList />} />
      <Route path="/companies" element={<Detail />}>
        <Route path=":companyId" element={<CompanyDetail />} />
      </Route>
      <Route path="/numbers" element={<Detail />}>
        <Route path=':phoneId' element={<PhoneNumber />} />
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App;
