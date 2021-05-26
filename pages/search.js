import React from 'react';
import Head from "next/head";
import Header from "../components/Header";
import {API_KEY, CONTEXT_KEY} from "../keys";
import response from "../response";

const Search = ({results}) => {
    console.log(results)
    return (
        <div>
            <Head>
                <title>Search Results</title>
            </Head>

            <Header />

        </div>
    );
};

export default Search;

export async function getServerSideProps(context) {
    // getting data from object
    const useDummyData = true;

    // forming request url
    const data = useDummyData ? response :  await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}`).then(response => response.json());
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
