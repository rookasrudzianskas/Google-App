import React from 'react';
import { useRouter } from "next/router";
import Link from "next/link";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

const PaginationButtons = () => {

    const router = useRouter();
    // this is the number where all the search results start
    const startIndex = Number(router.query.start) || 0;

    return (
        <div>
            {startIndex >= 10 && (
                <Link href={`/search?term=${router.query.term}&start=${startIndex - 10}`}>
                    <div>
                        <ChevronLeftIcon />
                        <p>Previous</p>
                    </div>
                </Link>
            )}

            {/* go to the searcg?term = and search term is the same, but just start indext, changes, adds + 10*/}
            <Link href={`/search?term=${router.query.term}&start=${startIndex + 10}`}>
                <div>
                    <ChevronRightIcon />
                    <p>Next</p>
                </div>
            </Link>

        </div>
    );
};

export default PaginationButtons;
