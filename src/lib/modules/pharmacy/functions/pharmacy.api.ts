import endpoints from "config/endpoints.config";
import request from "request";
import { PharmacyData } from "../types/pharmacy";

export type GetPharmacyDetailsQueryResponse = BaseApiResponseType<PharmacyData>;
export const getPharmacyDetailsQuery = (pharmacyId?: string) => {
  return request
    .get<GetPharmacyDetailsQueryResponse>(
      endpoints.pharmacy.getDetails(pharmacyId)
    )
    ?.then((res) => res.data);
};
