type TAddress = {
  city: string;
  street: string;
  suite: string;
  zipcode: string;
  geo: { lat: string; lng: string };
};
type TCompany = {
  name: string;
  bs: string;
  catchPhrase: string;
};

export type TUser = {
  id: number;
  name: string;
  username: string;
  phone: string;
  website: string;
  address: TAddress;
  company: TCompany;
};
