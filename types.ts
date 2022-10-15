type Gender = 'male' | 'female'

type Profile = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  avatar: string;
  gender: Gender;
  bvn: string;
  address: string;
  currency: string;
}


type Guarantor = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  gender: Gender
  address: string;
}
type Socials = {
  facebook: string;
  twitter: string;
  instagram: string;
}

type Education = {
  level: string;
  institution: string;
  employmentStatus: string;
  sector: string;
  duration: string;
  officialEmail: string;
  monthlyIncome: string[];
  loanRepayment: string;
}

export interface UserType {
  createdAt: string;
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  lastActiveDate: string;
  profile: Profile;
  guarantor: Guarantor;
  accountBalance: string;
  accountNumber: string;
  socials: Socials;
  education: Education;
  status: string;
  id: string;
}





export interface Link {
  name: string;
  icon?: JSX.Element;

}


export type OrganizationType = {
  value: string | null;
  label: string | null;
}

export type FilterValuesType = {
  username: string;
  email: string;
  organization: OrganizationType | null;
}

