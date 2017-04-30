import { SDK } from 'upem-sdk'

export const UPEM_URL = "http://localhost/UPEM-Core/web/app_dev.php/~vrasquie/core"

export const sdk = new SDK({
  baseURL: UPEM_URL
})
