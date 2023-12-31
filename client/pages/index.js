import Head from "next/head";
import PartnerSec from "../components/home/PartnerSec";
import GazelleWorkFlow from "../components/home/GazelleWorks";
import BlueSec from "../components/home/BlueSec";
import FeaturesSec from "../components/home/FeaturesSec";
import Blogs from "../components/home/Blogs";
import FAQ from "../components/home/FAQ";
import HeroSec from "../components/home/HeroSec";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="">
                {/* hero section */}
                <HeroSec />

                {/* partner section */}
                <PartnerSec />

                {/* gazelle workflow */}
                <GazelleWorkFlow />

                {/* blue section */}
                <BlueSec />

                {/* features section */}
                <FeaturesSec />

                {/* blogs section */}
                <Blogs />

                {/* faq section */}
                <FAQ />
            </main>
        </div>
    );
}

// export async function getStaticProps(context) {
//     return {
//         props: {}, // will be passed to the page component as props
//     };
// }
