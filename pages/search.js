import React from 'react';
import Head from "next/head";
import Header from "../components/Header";
import {API_KEY, CONTEXT_KEY} from "../keys";
import response from "../response";
import {useRouter} from "next/router";
import SearchResults from "../components/SearchResults";

const Search = ({results}) => {
    console.log(results)
    const router = useRouter();
    return (
        <div>
            <Head>
                <title>{router.query.term} - Google Search</title>
            </Head>

            <Header />
            <SearchResults results={results} />
        </div>
    );
};

export default Search;

export async function getServerSideProps(context) {
    // getting data from object
    const useDummyData = true;
    const startIndex = context.query.start || "0";

    // forming request url
    const data = useDummyData ? response :  await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`).then(response => response.json());
    // alll of this stuff is in server working
    // pass the results to the front end
    // after the server has rendered.. pass the results to the client

    return {
        // will return the results to the client side!
        props: {
            results: data,
        },
    };
}
