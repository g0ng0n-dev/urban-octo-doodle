import React, {useState} from "react";
import moment from "moment";
import styles from "../styles/Filters.module.css";
import InputString from "./ui/InputString/InputString";
import InputNumber from "../components/ui/InputNumber";
import InputDate from "../components/ui/InputDate";
import Select from "../components/ui/Select";
import Button from "./ui/Button/Button";
import axios from "axios";

const Filters = (props ) => {

  const [filters, setFilters] = useState({
    sort: "",
    page: undefined,
    filterQuery: "",
    beginDate: moment().format("YYYYMMDD"),
    endDate: moment().format("YYYYMMDD"),
  });

  const createQueryParams = (filters) => {
    let params = "";
    let filtersProps = Object.keys(filters);
    filtersProps.forEach((filterValue) => {
      if (!!filters[filterValue])
        params += `${filterValue}=${filters[filterValue]}&`;
    });
    return params;
  };
  async function filterArticles(filters) {
    try {
      const query = createQueryParams(filters);
      const url = `${process.env.NEXT_PUBLIC_API_URL}?${query}api-key=${process.env.NEXT_PUBLIC_API_KEY}`;
      const response = await axios.get(url);
      const articlesDocs = response.data.response.docs;
      props.setArticles(articlesDocs);
    } catch (err) {
      console.error(err)
    } finally{
      setFilters({
        sort: "",
        page: undefined,
        filterQuery: "",
        beginDate: moment().format("YYYYMMDD"),
        endDate: moment().format("YYYYMMDD"),
      })
    }
  }

  const handleFilterChange = (e) => {
    setFilters((s) => ({ ...s, [e.target.name]: e.target.value }));
  };
  const handleDateChange = (e) => {
    setFilters((s) => ({
      ...s,
      [e.target.name]: moment(e.target.value).format("YYYYMMDD"),
    }));
  };

  return (
    <div className={styles["filters"]}>
      <div className={styles["filters-container"]}>
        <Select
            onChange={handleFilterChange}
            value={filters.page}
            fieldName="sort"
            htmlFor="sort"
            label="Sort by:&nbsp;"
            placeHolder="Sort by..."
            values={["newest","oldest","relevance"]}
        />
        <InputNumber
            onChange={handleFilterChange}
            value={filters.page}
            fieldName="page"
            min={0}
            max={100}
            htmlFor="page"
            label="Page:&nbsp;"
            placeHolder="i.e. 0"
        />
        <InputString
            onChange={handleFilterChange}
            value={filters.filterQuery}
            htmlFor="filterQuery"
            fieldName="filterQuery"
            label="Filter query:&nbsp;"
            placeHolder="i.e. Police"
        />
        <InputDate
            onChange={handleDateChange}
            value={filters.beginDate}
            htmlFor="filterQuery"
            fieldName="beginDate"
            label="Start date:&nbsp;"
            id="beginDate"
        />
        <InputDate
            onChange={handleDateChange}
            value={filters.endDate}
            htmlFor="filterQuery"
            fieldName="endDate"
            label="End date:&nbsp;"
            id="endDate"
        />
        <Button
            type="Submit"
            onClick={() => filterArticles(filters)}
            text={"Filter"}
        />
      </div>

    </div>
  );
};

export default Filters;
