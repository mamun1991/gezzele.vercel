import React from "react";
import { useGetEligibleQuery } from "../../src/features/eligible/eligibleAPI";

export default function Eligible() {
  const { data } = useGetEligibleQuery();
  console.log(data);
  return (
    <section className="w-full bg-white h-full">
      <table className="w-full">
        <thead>
          <tr className="bg-[#3166C9] text-white ">
            <th className="py-2 ">Amount Seeking</th>
            <th> Average Monthly Sales</th>
            <th>Time in Business</th>
            <th>Credit Score</th>
            <th>Entity Type </th>
            <th>Industry</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <tr
              key={index}
              className={`text-center font-poppins ${
                index % 2 === 0 ? "bg-slate-50" : "bg-slate-200"
              }`}
            >
              <td className="py-2">{item.amountSeeking}</td>
              <td>{item.averageMonthlySales}</td>
              <td>{item.timeInBusiness}</td>
              <td>{item.creditScore}</td>
              <td>{item.entityType}</td>
              <td>{item.industry}</td>
              <td>
                {item.firstName} {item.lastName}
              </td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
