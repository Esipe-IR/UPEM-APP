import { SDK } from "upem-sdk";

export const UPEM_URL = "https://perso-etudiant.u-pem.fr/~vrasquie/api";

export const sdk = new SDK({
  baseURL: UPEM_URL
});
