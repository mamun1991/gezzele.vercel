import React from "react";
import { useCreateEligibleMutation } from "../../../src/features/eligible/eligibleAPI";
import toast from "react-hot-toast";

export default function Sideform() {
  const [step, setStep] = React.useState(0);
  const [amountSeeking, setAmountSeeking] = React.useState(0);
  const [averageMonthlySales, setAverageMonthlySales] = React.useState("");
  const [timeInBusiness, setTimeInBusiness] = React.useState(0);
  const [creditScore, setCreditScore] = React.useState(0);
  const [entityType, setEntityType] = React.useState("");
  const [industry, setIndustry] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [businessName, setBusinessName] = React.useState("");

  const next = () => {
    setStep((prev) => prev + 1);
  };

  const [createEligible] = useCreateEligibleMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        amountSeeking,
        averageMonthlySales,
        timeInBusiness,
        creditScore,
        entityType,
        industry,
        businessName,
        firstName,
        lastName,
        email,
        phone,
      };
      await createEligible(data);
      toast.success("Your application has been submitted");
      next();
    } catch (err) {
      toast.error(err.message);
    }
  };

  let component;
  if (step === 0) {
    component = (
      <div
        className={` w-full flex flex-col gap-y-4 mt-8  ${
          step === 0 ? "" : ""
        }`}
      >
        <h1 className="text-center text-xl font-medium">
          How much money are you looking for?
        </h1>
        <select
          id="amountSeeking"
          data-cy="amountSeeking"
          name="amountSeeking"
          className="p-2"
          value={amountSeeking}
          onChange={(e) => {
            setAmountSeeking(e.target.value);
            next();
          }}
        >
          <option disabled={amountSeeking}>Please choose a value</option>
          <option value="$1 - $5K">$1 - $5K</option>
          <option value="$5K - $25K">$5K - $25K</option>
          <option value="$5K - $25K">$5K - $25K</option>
          <option value="$50K - $100K">$50K - $100K</option>
          <option value="$100K - $250K">$100K - $250K</option>
          <option value="$250K - $500K">$250K - $500K</option>
          <option value="$500K - $1M">$500K - $1M</option>
          <option value="Over $1M">Over $1M</option>
        </select>
      </div>
    );
  } else if (step === 1) {
    component = (
      <div
        className={`w-full flex flex-col gap-y-4 mt-8  ${
          step === 1 ? "animate-fade" : ""
        }`}
      >
        <h1 className="text-center text-xl font-medium">
          How long have you been in business?
        </h1>
        <select
          id="timeInBusiness"
          data-cy="timeInBusiness"
          name="timeInBusiness"
          className="p-2"
          value={timeInBusiness}
          onChange={(e) => {
            setTimeInBusiness(e.target.value);
            next();
          }}
        >
          <option disabled={timeInBusiness}>Please choose a value</option>
          <option value="0-2 months">0-2 months</option>
          <option value="3-5 months">3-5 months</option>
          <option value="6-11 months">6-11 months</option>
          <option value="1-2 years">1-2 years</option>
          <option value="2-3 years">2-3 years</option>
          <option value="3-5 years">3-5 years</option>
          <option value="5 or more years">5 or more years</option>
        </select>
      </div>
    );
  } else if (step === 2) {
    component = (
      <div
        className={`w-full flex flex-col gap-y-4 mt-8  ${
          step === 2 ? "animate-fade1" : ""
        }`}
      >
        <h1 className="text-center text-xl font-medium">
          On average, how much revenue does your business currently generate
          each month?
        </h1>
        <select
          id="averageMonthlySales"
          data-cy="averageMonthlySales"
          name="averageMonthlySales"
          className="p-2"
          value={averageMonthlySales}
          onChange={(e) => {
            setAverageMonthlySales(e.target.value);
            next();
          }}
        >
          <option disabled={averageMonthlySales || ""}>
            Please choose a value
          </option>
          <option value="$0, No Revenue">$0, No Revenue</option>
          <option value="$1 - $4K">$1 - $4K</option>
          <option value="$5K - $7K">$5K - $7K</option>
          <option value="$8K - $14K">$8K - $14K</option>
          <option value="$15K - $19K">$15K - $19K</option>
          <option value="$20K - $49K">$20K - $49K</option>
          <option value="$50K - $79K">$50K - $79K</option>
          <option value="$80K - $199K">$80K - $199K</option>
          <option value="$200K - $399K">$200K - $399K</option>
          <option value="More than $400K">More than $400K</option>
        </select>
      </div>
    );
  } else if (step === 3) {
    component = (
      <div
        className={`w-full flex flex-col gap-y-4 mt-8  ${
          step === 3 ? "animate-fade" : ""
        }`}
      >
        <h1 className="text-center text-xl font-medium">
          What is your personal credit score?
        </h1>
        <select
          id="creditScore"
          data-cy="creditScore"
          name="creditScore"
          className="p-2"
          value={creditScore}
          onChange={(e) => {
            setCreditScore(e.target.value);
            next();
          }}
        >
          <option disabled={creditScore}>Please choose a value</option>
          <option value="499 or Below">(499 or Below)</option>
          <option value="500 - 599">(500 - 599) </option>
          <option value="600 - 649">(600 - 649) </option>
          <option value="650 - 679">(650 - 679)</option>
          <option value="680 - 719">(680 - 719) </option>
          <option value="720 or Higher">(720 or Higher)</option>
        </select>
      </div>
    );
  } else if (step === 4) {
    component = (
      <div
        className={`w-full flex flex-col gap-y-4 mt-8  ${
          step === 4 ? "animate-fade1" : ""
        }`}
      >
        <h1 className="text-center text-xl font-medium">
          What type of business do you own?
        </h1>
        <select
          id="entityType"
          data-cy="entityType"
          name="entityType"
          className="p-2"
          value={entityType}
          onChange={(e) => {
            setEntityType(e.target.value);
            next();
          }}
        >
          <option disabled={entityType}>Please choose a value</option>
          <option value="Corporation">Corporation</option>
          <option value="LLC">LLC</option>
          <option value="Sole Proprietor">Sole Proprietor</option>
          <option value="Legal Partnership">Legal Partnership</option>
        </select>
      </div>
    );
  } else if (step === 5) {
    component = (
      <div
        className={`w-full flex flex-col gap-y-4 mt-8  ${
          step === 5 ? "animate-fade" : ""
        }`}
      >
        <h1 className="text-center text-xl font-medium">
          What is your company's industry?
        </h1>
        <select
          id="industry"
          data-cy="industry"
          name="industry"
          className="p-2"
          value={industry}
          onChange={(e) => {
            setIndustry(e.target.value);
            next();
          }}
        >
          <option disabled={industry}>Please choose a value</option>
          <option value="agricultureForestry">
            Agriculture, Forestry, Fishing and Hunting
          </option>
          <option value="artsEntertainment">
            Arts, Entertainment, and Recreation
          </option>
          <option value="Adult Entertainment">Adult Entertainment</option>
          <option value="Gambling">Gambling</option>
          <option value="Automotive">Automobile Dealers &amp; Parts</option>
          <option value="Construction">Construction</option>
          <option value="Education">Education</option>
          <option value="Finance">Finance and Insurance</option>
          <option value="Healthcare">Healthcare</option>
          <option value="Social Assistance">Social Assistance</option>
          <option value="Information Media">IT, Media, or Publishing</option>
          <option value="Legal Services">Legal Services</option>
          <option value="Mining">Mining (except Oil and Gas)</option>
          <option value="Oil Gas">Oil and Gas Extraction</option>
          <option value="Manufacturing">Manufacturing</option>
          <option value="Government Public">
            Political, Governmental, or Public Organizations
          </option>
          <option value="Real Estate">Real Estate</option>
          <option value="Religious Organizations">
            Religious Organizations
          </option>
          <option value="Restaurants">Restaurants and Food Services</option>
          <option value="Retail">Retail Stores</option>
          <option value="Firearms">Firearm Sales</option>
          <option value="Gas Stations">Gas Stations</option>
          <option value="Transportation">Transportation and Warehousing</option>
          <option value="Freight Trucking">Freight Trucking</option>
          <option value="Travel Agencies">Travel Agencies</option>
          <option value="Utilities">Utilities</option>
          <option value="Wholesale">Wholesale Trade</option>
          <option value="Other">All Other</option>
        </select>
      </div>
    );
  } else if (step === 6) {
    component = (
      <div
        className={`w-full flex flex-col gap-y-4 mt-8  ${
          step === 6 ? "animate-fade1" : ""
        }`}
      >
        <h1 className="text-center text-xl font-medium">
          What is your business' name?
        </h1>
        <input
          type="text"
          id="businessName"
          data-cy="businessName"
          name="businessName"
          placeholder="Business Name"
          className="p-2"
          value={businessName}
          onChange={(e) => {
            setBusinessName(e.target.value);
          }}
          required
        />
      </div>
    );
  } else if (step === 7) {
    component = (
      <div
        className={`w-full flex flex-col gap-y-4 mt-8  ${
          step === 7 ? "animate-fade" : ""
        }`}
      >
        <h1 className="text-center text-xl font-medium">What is your name?</h1>
        <div className="flex gap-x-2">
          <input
            type="text"
            id="firstName"
            data-cy="firstName"
            name="firstName"
            placeholder="First Name"
            className="p-2"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            required
          />
          <input
            type="text"
            id="lastName"
            data-cy="lastName"
            name="lastName"
            placeholder="Last Name"
            className="p-2"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </div>
      </div>
    );
  } else if (step === 8) {
    component = (
      <div
        className={`w-full flex flex-col gap-y-4 mt-8  ${
          step === 8 ? "animate-fade1" : ""
        }`}
      >
        <h1 className="text-center text-xl font-medium">
          What is your email address?
        </h1>
        <input
          type="email"
          id="email"
          data-cy="email"
          name="email"
          placeholder="Email"
          className="p-2"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
      </div>
    );
  } else if (step === 9) {
    component = (
      <div
        className={`w-full flex flex-col gap-y-4 mt-8  ${
          step === 9 ? "animate-fade" : ""
        }`}
      >
        <h1 className="text-center text-xl font-medium">
          What is your phone number?
        </h1>
        <input
          type="text"
          id="phone"
          data-cy="phone"
          name="phone"
          placeholder="Phone"
          className="p-2"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          required
        />
      </div>
    );
  } else if (step === 10) {
    component = (
      <div
        className={`w-full flex flex-col gap-y-4 mt-8  ${
          step === 10 ? "animate-fade1" : ""
        }`}
      >
        <h1 className="text-center text-xl font-medium">
          Thank you for your time!
        </h1>
      </div>
    );
  }

  return (
    <section className="w-full h-full py-4 px-7 flex flex-col items-center">
      <h1 className="text-center text-2xl text-[#001948] font-medium mt-8">
        See if you’re eligible for business financing
      </h1>
      {component}
      <div className="w-full flex items-center">
        <div className="w-1/3">
          {step > 0 && step < 10 && (
            <button
              className="text-[#001948] opacity-50 hover:opacity-100 font-poppins font-medium px-4 py-2 rounded-md mt-8 flex-1"
              onClick={() => {
                setStep((prev) => prev - 1);
              }}
            >
              {"< Back"}
            </button>
          )}
        </div>
        {step === 10 ? (
          ""
        ) : step === 0 ? (
          <button
            className={`bg-[#001948] text-white font-poppins py-2 px-6 rounded font-medium mt-8 ${
              step === 0 && amountSeeking
                ? "cursor-pointer opacity-100"
                : "opacity-50 cursor-not-allowed"
            }`}
            disabled={step === 0 && !amountSeeking}
            onClick={next}
          >
            Next
          </button>
        ) : step === 1 ? (
          <button
            className={`bg-[#001948] text-white font-poppins py-2 px-6 rounded font-medium mt-8 ${
              step === 1 && timeInBusiness
                ? "cursor-pointer opacity-100"
                : "opacity-50 cursor-not-allowed"
            }`}
            disabled={step === 1 && !timeInBusiness}
            onClick={next}
          >
            Next
          </button>
        ) : step === 2 ? (
          <button
            className={`bg-[#001948] text-white font-poppins py-2 px-6 rounded font-medium mt-8 ${
              step === 2 && averageMonthlySales
                ? "cursor-pointer opacity-100"
                : "opacity-50 cursor-not-allowed"
            }`}
            disabled={step === 2 && !averageMonthlySales}
            onClick={next}
          >
            Next
          </button>
        ) : step === 3 ? (
          <button
            className={`bg-[#001948] text-white font-poppins py-2 px-6 rounded font-medium mt-8 ${
              step === 3 && creditScore
                ? "cursor-pointer opacity-100"
                : "opacity-50 cursor-not-allowed"
            }`}
            disabled={step === 3 && !creditScore}
            onClick={next}
          >
            Next
          </button>
        ) : step === 4 ? (
          <button
            className={`bg-[#001948] text-white font-poppins py-2 px-6 rounded font-medium mt-8 ${
              step === 4 && entityType
                ? "cursor-pointer opacity-100"
                : "opacity-50 cursor-not-allowed"
            }`}
            disabled={step === 4 && !entityType}
            onClick={next}
          >
            Next
          </button>
        ) : step === 5 ? (
          <button
            className={`bg-[#001948] text-white font-poppins py-2 px-6 rounded font-medium mt-8 ${
              step === 5 && industry
                ? "cursor-pointer opacity-100"
                : "opacity-50 cursor-not-allowed"
            }`}
            disabled={step === 5 && !industry}
            onClick={next}
          >
            Next
          </button>
        ) : step === 6 ? (
          <button
            className={`bg-[#001948] text-white font-poppins py-2 px-6 rounded font-medium mt-8 ${
              step === 6 && businessName
                ? "cursor-pointer opacity-100"
                : "opacity-50 cursor-not-allowed"
            }`}
            disabled={step === 6 && !businessName}
            onClick={next}
          >
            Next
          </button>
        ) : step === 7 ? (
          <button
            className={`bg-[#001948] text-white font-poppins py-2 px-6 rounded font-medium mt-8 ${
              step === 7 && firstName && lastName
                ? "cursor-pointer opacity-100"
                : "opacity-50 cursor-not-allowed"
            }`}
            disabled={step === 6 && !firstName && !lastName}
            onClick={next}
          >
            Next
          </button>
        ) : step === 8 ? (
          <button
            className={`bg-[#001948] text-white font-poppins py-2 px-6 rounded font-medium mt-8 ${
              step === 8 && email
                ? "cursor-pointer opacity-100"
                : "opacity-50 cursor-not-allowed"
            }`}
            disabled={step === 8 && !email}
            onClick={next}
          >
            Next
          </button>
        ) : step === 9 ? (
          <button
            className={`bg-[#001948] text-white font-poppins py-2 px-6 rounded font-medium mt-8 ${
              step === 9 && phone
                ? "cursor-pointer opacity-100"
                : "opacity-50 cursor-not-allowed"
            }`}
            disabled={step === 9 && !phone}
            onClick={handleSubmit}
          >
            Next
          </button>
        ) : (
          ""
        )}
      </div>
    </section>
  );
}
