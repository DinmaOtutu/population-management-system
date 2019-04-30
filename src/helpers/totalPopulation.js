const getPopulation = {
  getTotalPopulation: (malePopulation, femalePopulation) => {
    const totalPopulation = parseInt(malePopulation, 10) + parseInt(femalePopulation, 10);
    return totalPopulation;
  }
};

export default getPopulation;
