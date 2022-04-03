import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState, createContext } from "react";
import { CarData } from "../../assets/data/CarData";

export const FilteringService = createContext();

export const FilteringServiceProvider = ({ children }) => {
  const [filterIndex, setFilterIndex] = useState(null);
  const [filterKeyword, setFilterKeyword] = useState(null);
  const [filteredList, setFilteredList] = useState(null);

  const changeFilterIndex = (index) => {
    if (index === filterIndex) {
      setFilterIndex(null);
    } else {
      setFilterIndex((prevIndex) => index);
    }
  };

  const handleSettingFilterKeyword = () => {
    if (filterIndex === 0) {
      setFilterKeyword("Audi");
    } else if (filterIndex === 1) {
      setFilterKeyword("BMW");
    } else if (filterIndex === 2) {
      setFilterKeyword("Mercedes");
    } else if (filterIndex === 3) {
      setFilterKeyword("Porsche");
    } else {
      setFilterKeyword(null);
    }
  };

  const createFilteredData = () => {
    if (filterKeyword === null) {
      setFilteredList(null);
    } else {
      setFilteredList(
        CarData.filter((item) => {
          return item.type === filterKeyword;
        })
      );
    }
  };
  useEffect(() => {
    handleSettingFilterKeyword();
  }, [filterIndex]);

  useEffect(() => {
    createFilteredData();
  }, [filterKeyword]);

  return (
    <FilteringService.Provider
      value={{
        changeFilterIndex: changeFilterIndex,
        filterIndex,
        filteredList,
      }}
    >
      {children}
    </FilteringService.Provider>
  );
};

const styles = StyleSheet.create({});
