export type Record = {
  gcm: string
  variable: string
  monthVals: number[]
  annualData: number[]
  fromYear: number
  toYear: number
}

export type Country = 'HRV' | 'BIH' | 'SVN' | 'SRB' | 'MNE' | 'MKD' | 'YUG'

export type RequestParams = {
  country: Country
  period: 'annualavg' | 'mavg'
  variable: 'tas' | 'pr'
  fromYear: number
  toYear: number
}
