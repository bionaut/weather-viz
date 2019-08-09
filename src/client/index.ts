import axios from 'axios'
import { RequestParams } from '../types'

const BASE = process.env.REACT_APP_API_URI

export const createRequest = ({ period, variable, country, fromYear, toYear}: RequestParams) => {
  const url = `/${period}/${variable}/${fromYear}/${toYear}/${country}.json`
  return axios.get(BASE + url)
}

