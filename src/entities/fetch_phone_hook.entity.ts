import { LoadingHook } from "./loading.entity";
import { Phone_Number } from "./phone_number.entity";

export interface FetchPhoneNumberHook extends LoadingHook {
    data: Phone_Number[];
}