import React from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { DataRow } from ".";

interface DataType {
  key: React.Key;
  zipCode: string;
  street: string;
  number: string;
  airplanesNoise: string;
  neighborsNoise: string;
  trafficNoise: string;
  greenSpaces: string;
  transportation: string;
  shops: string;
  assessment: string;
  numberOfVotes: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "ZIP Code",
    width: 100,
    dataIndex: "zipCode",
    key: "zipCode",
    fixed: "left",
  },
  {
    title: "Street",
    width: 150,
    dataIndex: "street",
    key: "street",
    fixed: "left",
  },
  {
    title: "Number",
    dataIndex: "number",
    key: "number",
    width: 100,
    fixed: "left",
  },
  {
    title: "Airplanes Noise",
    dataIndex: "airplanesNoise",
    key: "1",
    width: 150,
  },
  {
    title: "Neighbors Noise",
    dataIndex: "neighborsNoise",
    key: "2",
    width: 150,
  },
  {
    title: "Traffic Noise",
    dataIndex: "trafficNoise",
    key: "3",
    width: 150,
  },
  {
    title: "Green Spaces",
    dataIndex: "greenSpaces",
    key: "4",
    width: 150,
  },
  {
    title: "Transportation",
    dataIndex: "transportation",
    key: "5",
    width: 150,
  },
  {
    title: "Shops",
    dataIndex: "shops",
    key: "6",
    width: 150,
  },
  { title: "Assessment", dataIndex: "assessment", key: "7", width: 150 },
  {
    title: "Number Of Votes",
    dataIndex: "numberOfVotes",
    key: "8",
    width: 150,
  },
  {
    title: "",
    key: "operation",
    fixed: "right",
    width: 120,
    render: () => <a>View Details</a>,
  },
];

interface Props {
  responseData: DataRow[] | undefined;
}

const EntriesTable: React.FC<Props> = ({ responseData }) => {
  
  const dataToShow: DataType[] = React.useMemo(() => {
    if (
      typeof responseData === "undefined" ||
      (Array.isArray(responseData) && responseData.length === 0)
    )
      return [];

    return responseData.map((e, key) => {
      const [
        zipCode,
        street,
        number,
        airplanesNoise,
        neighborsNoise,
        trafficNoise,
        greenSpaces,
        transportation,
        shops,
        assessment,
        numberOfVotes,
      ] = e;
      return {
        key,
        zipCode,
        street,
        number,
        airplanesNoise,
        neighborsNoise,
        trafficNoise,
        greenSpaces,
        transportation,
        shops,
        assessment,
        numberOfVotes,
      };
    });
  }, [responseData]);

  return (
    <Table
      columns={columns}
      dataSource={dataToShow}
      scroll={{ x: 1500, y: 300 }}
      bordered
    />
  );
};

export default EntriesTable;
