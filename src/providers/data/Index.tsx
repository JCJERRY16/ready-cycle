import graphqlDataProvider, { 
    GraphQLClient,
    liveProvider as graphqlLiveProvider
 } from "@refinedev/nestjs-query";
//import { url } from "inspector";
import { fetchWrapper } from "../Fetch-wrapper"
import { createClient } from "graphql-ws";

export const API_BASE_URL = 'https://api.crm.refine.dev'
export const API_URL =  `${API_BASE_URL}/graphql`
export const WS_URL = 'wss://api.crn.refine.dev/graphql'

export const cllient = new GraphQLClient(API_URL,{
    fetch: (url: string, options: RequestInit) => {
        try {
     return fetchWrapper(url, options);
        } catch (error) {
     return Promise.reject(error as Error);
        }
        
    }
})

export const wsClient = typeof window !== "undefined"
? createClient({
    url: WS_URL,
    connectionParams: () => {
        const accessToken = localStorage.getItem("access_Token");

        return {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            }
        }
    }
})
: undefined

export const dataProvider = graphqlDataProvider(cllient);
    export const liveProvider = wsClient ? graphqlLiveProvider(wsClient) : undefined