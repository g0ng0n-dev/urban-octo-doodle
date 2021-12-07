This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Introduction
- This is a small web application using NextJS v.12 that retrieves article from the NY Times API and listing them in page, Also we provide a set of filters, 
to generate a new api call to get a new set of articles but filtered with the queryparams setted by the filter.

## Getting Started

First 
 - Change the name of the **.env.example** file to **.env** 
 - Then Add the **NYTIMES APIKEY** in the file in NEXT_PUBLIC_API_KEY line and NEXT_PUBLIC_API_NYTIMES_API_INITIAL_URL (to the end of the var)

Second run this commands to start the server:

```bash
npm install
npm run dev
```

And then Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Things to improve
* The Responsive part of the Filters container
* Improve the styles of the filter
* Improve the styles of the article component
* Finishing the Tests Suite Config and Make the Tests Working with Jest and NextJs
