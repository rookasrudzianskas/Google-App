import Head from 'next/head'
import Avatar from "../components/Avatar";
import {BeakerIcon, ViewGridIcon} from '@heroicons/react/solid'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Google</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="https://pngimg.com/uploads/google/google_PNG19635.png" />
      </Head>

    {/*    Header   */}
        <header className="flex w-full p-5 justify-between text-sm text-gray-700">
            <div className="flex space-x-4 items-center">
            {/*    left*/}
                <p className="link">About</p>
                <p  className="link">Store</p>
            </div>

            <div className="flex space-x-4 items-center">
            {/*    right*/}
                <p className="link">Gmail</p>
                <p className="link">Images</p>


                <ViewGridIcon className="h-10 w-10 p-2"/>

            {/*    icon */}

                <Avatar className="h-10" />

            {/*    avatar*/}


            </div>
        </header>
    {/*    Body */}
    {/*    Footer   */}

    </div>
  )
}
