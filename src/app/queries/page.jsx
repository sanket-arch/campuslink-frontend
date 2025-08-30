"use client";
import QueryListContainer from "@/components/app/query/QueryListContainer";
import CustomSelect from "@/components/common/CustomSelect";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { constants } from "@/lib/constants";
import { getAllQueries } from "@/store/actions/queryAction";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function QueriesPage() {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState({
    queryType: "",
    searchTerm: "",
  });

  useEffect(() => {
    dispatch(getAllQueries());
  }, []);

  const getQueryTypes = () => {
    return Object.entries(constants.QUERY_TYPES).map(([key, value]) => ({
      label: value.value,
      value: key,
    }));
  };
  const handleSearchChange = (e) => {
    setFilter({ ...filter, searchTerm: e.target.value });
  };
  const handleQueryTypeChange = (selectedOption) => {
    setFilter({ ...filter, queryType: selectedOption });
  };

  return (
    <div className="flex flex-col w-full h-full p-4 relative md:top-0 md:left-0">
      <h1 className="text-2xl font-bold mb-4">Queries</h1>
      <div className="sticky top-0 z-10 bg-white p-4 shadow-md mb-4">
        <Card >
          <CardContent className="flex flex-row items-center justify-between">
            <div className="flex justify-between items-center w-1/2 space-x-4">
              <CustomSelect
                className={"w-1/2"}
                options={getQueryTypes()}
                onChange={handleQueryTypeChange}
                value={filter.queryType}
                placeholder="Select a Query"
                isMulti={false}
                loadOptions={null}
              />
              <Input
                placeholder="Search for query"
                value={filter.searchTerm}
                onChange={handleSearchChange}
              />
            </div>

            <Button
              className="bg-sidebar-accent-foreground cursor-pointer"
              onClick={() => alert("Run Query")}
            >
              Post Query
            </Button>
          </CardContent>
        </Card>
        <div>
          <QueryListContainer />
        </div>
      </div>
    </div>
  );
}
