export interface User {
  iduser?: string;
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  password?: string;
  isActive?: boolean;
  token?: string;
  roles?: string[];
}
