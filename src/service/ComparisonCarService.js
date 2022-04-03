import { Text, View } from "react-native";
import React, { createContext, useState } from "react";
import { CarData } from "../../assets/data/CarData";

export const ComparisonCarService = createContext();

export const ComparisonCarServiceProvider = ({ children }) => {
  const [comparisonCar, setComparisonCar] = useState(CarData[6]);
  const clearSelectedCar = () => {
    setComparisonCar((prevState) => null);
    console.log("cleared");
  };
  const addNewCarForComparison = (car) => {
    setComparisonCar((prevState) => car);
  };
  return (
    <ComparisonCarService.Provider
      value={{ comparisonCar, clearSelectedCar, addNewCarForComparison }}
    >
      {children}
    </ComparisonCarService.Provider>
  );
};
