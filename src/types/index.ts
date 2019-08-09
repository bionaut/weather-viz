export type Record = {
  gcm: string
  variable: string
  monthVals: number[]
  fromYear: number
  toYear: number
}

export type RequestParams = {
  country: 'HRV' | 'BIH' | 'SVN' | 'SRB'| 'MNE' | 'MKD'
  period: 'annualavg' | 'mavg'
  variable: 'tas' | 'pr'
  fromYear: number
  toYear: number
}