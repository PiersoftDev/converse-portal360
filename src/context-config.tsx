import { createContext, Dispatch } from "react";
import { IVendor } from "./models/vendor-onboarding-service-model";

export const VendorContext = createContext<IVendor | any>(null);
export const UpdateVendorContext = createContext<Dispatch<IVendor> | any>(null);
