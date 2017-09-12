import { UPEMSDK } from "upem-sdk";

export const UPEM_URL = "https://perso-etudiant.u-pem.fr/~vrasquie/api";

export const SDK = new UPEMSDK({
  baseURL: UPEM_URL
});
