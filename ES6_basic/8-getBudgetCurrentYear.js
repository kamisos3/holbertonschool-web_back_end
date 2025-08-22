function getCurrentYear() {
  return 2021;
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  return {
    [`income-${getCurrentYear()}`]: income,
    [`gdp-${getCurrentYear()}`]: gdp,
    [`capita-${getCurrentYear()}`]: capita, 
    };
}
