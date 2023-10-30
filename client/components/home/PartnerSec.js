import biz2credit from "../../public/assets/biz2credit.svg";
import bluevine from "../../public/assets/bluevine.svg";
import credibly from "../../public/assets/credibly.svg";
import fundbox from "../../public/assets/fundbox.svg";
import ondeck from "../../public/assets/ondeck.svg";
import kabbage from "../../public/assets/kabbage.svg";
import Image from "next/image";

export default function PartnerSec() {
    return (
        <section className="w-screen h-[30rem] lg:h-[15rem] flex justify-center  bg-[#2C3644] bg-opacity-[3%]">
            <div className="w-11/12 h-full flex flex-col lg:flex-row justify-between items-center gap-y-4 lg:max-w-7xl pt-4">
                <Image src={fundbox} alt="fundbox" height={55} />
                <Image src={kabbage} alt="kabbage" height={55} />
                <Image src={biz2credit} alt="biz2credit" height={55} />
                <Image src={ondeck} alt="ondeck" height={55} />
                <Image src={bluevine} alt="bluevine" height={55} />
                <Image src={credibly} alt="credibly" height={55} />
            </div>
        </section>
    );
}
