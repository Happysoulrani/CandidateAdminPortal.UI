import { Address } from "./address.model";
import { Gender } from "./gender.model";

export interface Candidate {
  id:string,
  firstName: string,
  lastName: string,
  email: string,
  mobile: number,
  genderId: string,
  gender: Gender,
  address: Address

}
