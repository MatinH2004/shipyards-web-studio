export const lumpsumPrice: string = "$1749";
export const monthlyPrice: string = "$179";

export const pricingPackages = [
  {
    type: "Lump Sum",
    services: [
      "Design & Development",
      "SEO & Google Ranking",
      "100/100 Page Speed",
      "+$150 Fee Per Page After 5",
      "+$30/mo Hosting",
      "+$50/mo Unlimited Edits Add-on",
    ],
    price: lumpsumPrice,
    extra: "+ $30/mo Hosting",
  },
  {
    type: "Monthly",
    services: [
      "Design & Development",
      "SEO & Google Ranking",
      "100/100 Page Speed",
      "Includes Hosting",
      "$100 Fee Per Page After 5",
      "Unlimited Edits",
      "24/7 Support",
      "Lifetime Updates",
    ],
    price: monthlyPrice,
    extra: "Per Month",
  },
];