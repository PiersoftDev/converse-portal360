export interface IVendor {
  id: string;
  vendorId: string;
  companyDetails?: ICompanyDetails;
  contactInformation?: IContactInformation;
  kyc?: IKyc;
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
  emailVerified: boolean;
  phoneNo: string;
  phoneNoVerified: boolean;

}

export interface IKyc {
  gstNumber: string;
  gstVerified: boolean;
  aadhaarNumber: string;
  aadhaarVerified: boolean;
  bankDetails?: IBankDetails;
}

export interface IBankDetails {
  accountNumber: string;
  branch: string;
  ifscCode: string;
  accountVerified: boolean;
}
