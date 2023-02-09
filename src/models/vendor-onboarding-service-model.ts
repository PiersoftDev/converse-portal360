export interface IVendor {
  id: string;
  companyDetails?: ICompanyDetails;
  contactInformation?: IContactInformation;
  kyc?: IKyc;
  bankDetails?: IBankDetails;
}

export interface ICompanyDetails {
  name: string;
  type: string;
  profile: string;
  service: string;
  websiteURL: string;
}

export interface IContactInformation {
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  email: string;
  isEmailVerified: boolean;
  phoneNumber: string;
}

export interface IKyc {
  gstNumber: string;
  isGSTVerified: boolean;
  aadhaarNumber: string;
  isAadhaarVerified: boolean;
  bankDetails?: IBankDetails;
}

export interface IBankDetails {
  accountNumber: string;
  branch: string;
  ifscCode: string;
  isVerified: boolean;
}
