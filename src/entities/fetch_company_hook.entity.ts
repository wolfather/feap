import { Company } from "./company.entity";
import { LoadingHook } from "./loading.entity";

export interface FetchCompanyHook extends LoadingHook {
    data: Company[];
}