This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

---

### Start the app  
`yarn && yarn start`
> browser window should open automatically on `localhost:3000`   

### Tech used
- Typescript
- React
- React-Router
- Styled Components 
- Styled System
- React Charts (recharts)
- Formik & Yup
- axios
- ramda
- react-icons
- Jest 

### Approach & mindset  

> Originally i wanted to use my favourite apollo-client, but instead i made my own simplified apollo like client, using non-graphql request with axios.
>
> For state management i used react hooks (`useReducer`) instead of full redux approach. Entire store is in this case basically a cache for API calls.  
> 
> All UI components are made from scratch and quite flexible, utilizing Lego-like structure when one component is inheriting props from another (`Box` is main building block).
>
> Responsivity is achieved by using amazing `styled-system` library (eg: `<Box p=[0, 5, 10]>` === padding on mobile is 0, on tablet 5 and 10 on bigger screens ), respecting breakpoints in `default-theme.ts`

### How it works

There are 2 main Types:  
`Record` represents the response item(s)  
`RequestParams` is used for assembling the request(s)   

`Filter` component generates `RequestParams` for each request based on selected options in the filter.  
For Yugoslavia case, `RequestParams` for all necessary countries are generated.  

One `RequestParams` or more [`RequestParams`, `RequestParams`] are piped into Query component via props.    

`Query` component, using render props, is supplying its children with `{ data, loading, errors }`  
- `data` is the final data from one or more requests
- `loading` is `bool` value which is `true` until all data is loaded  
- `errors` if something goes wrong errors object will contain error messages    
> before fetching any data, `Query` is checking cache store (via `useStore` hook) for any existing  cached responses. Each API response is cached under a unique key (in this case Key is generated from `RequestParams`, but normally some id would be nice + hashing) 

Adding new data locally is using Formik and Yup for form validation and input. Values are then added to cache store under current cache key. 


#### Additional notes and spoilers :)
- Since i didn't use any pre-built UI library there is not much accessibility support (ARIA and alike). I think, in real production app, this UI library should be extracted into separate package and fully tested for all scenarios.  
- I only tested data transformers, for same reasons as point above.  

