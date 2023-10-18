import React from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { DataRow } from ".";
import useIsMobile from "../../utils/useIsMobile";
import { FormattedMessage } from "react-intl";

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

interface Props {
  responseData: DataRow[] | undefined;
  totalRecods: number;
  pageNo: number;
  setPageNo: (x: number) => void;
  onPaginationChange: (x: number) => void;
  onOrder: (x: number) => void;
}

const EntriesTable: React.FC<Props> = ({
  responseData,
  totalRecods,
  pageNo,
  setPageNo,
  onPaginationChange,
  onOrder,
}) => {

  const columns: ColumnsType<DataType> = [
    {
      title: <span onClick={() => onOrder(0)}>
        <FormattedMessage id="table.zip" defaultMessage="ZIP Code" />
      </span>,
      width: 100,
      dataIndex: "zipCode",
      key: "zipCode",
      fixed: "left",
    },
    {
      title: <span onClick={() => onOrder(1)}>
        <FormattedMessage id="table.street" defaultMessage="Street" /></span>,
      width: 150,
      dataIndex: "street",
      key: "street",
      fixed: "left",
    },
    {
      title: <span onClick={() => onOrder(2)}>
        <FormattedMessage id="table.number" defaultMessage="Number" /></span>,
      dataIndex: "number",
      key: "number",
      width: 100,
      fixed: "left",
    },
    {
      title: <span onClick={() => onOrder(3)}>
        <FormattedMessage id="table.airplanenoise" defaultMessage="Airplanes Noise" /></span>,
      dataIndex: "airplanesNoise",
      key: "1",
      width: 150,
    },
    {
      title: <span onClick={() => onOrder(4)}>
        <FormattedMessage id="table.noiseneighboir" defaultMessage="Neighbors Noise" /></span>,
      dataIndex: "neighborsNoise",
      key: "2",
      width: 150,
    },
    {
      title: <span onClick={() => onOrder(5)}>
        <FormattedMessage id="table.trafficnoise" defaultMessage="Traffic Noise" /></span>,
      dataIndex: "trafficNoise",
      key: "3",
      width: 150,
    },
    {
      title: <span onClick={() => onOrder(6)}>
        <FormattedMessage id="table.greenspaces" defaultMessage="Green Spaces" /></span>,
      dataIndex: "greenSpaces",
      key: "4",
      width: 150,
    },
    {
      title: <span onClick={() => onOrder(7)}>
        <FormattedMessage id="table.transportation" defaultMessage="Transportation" /></span>,
      dataIndex: "transportation",
      key: "5",
      width: 150,
    },
    {
      title: <span onClick={() => onOrder(8)}>
        <FormattedMessage id="table.shops" defaultMessage="Shops" /></span>,
      dataIndex: "shops",
      key: "6",
      width: 150,
    },
    { title: <span onClick={() => onOrder(8)}>
      <FormattedMessage id="table.assement" defaultMessage="Assessment" /></span>, dataIndex: "assessment", key: "7", width: 150 },
    {
      title: <span onClick={() => onOrder(10)}>
        <FormattedMessage id="" defaultMessage="Number Of Votes" /></span>,
      dataIndex: "numberOfVotes",
      key: "8",
      width: 150,
    },
    {
      title: "",
      key: "operation",
      fixed: "right",
      width: 120,
      render: (renderParam) => (
        <a
          onClick={() => {
            window.dispatchEvent(
              new CustomEvent("view-details", {
                detail: {
                  rowIndex: renderParam.key,
                },
              })
            );
          }}
          style={{
            color: "#000",
          }}
        >
          <FormattedMessage defaultMessage="View Details" id="table.viewdetails" />
        </a>
      ),
    },
  ]
  
  const mobileColumns: ColumnsType<DataType> = [
    {
      title: columns[0].title,
      width: 100,
      dataIndex: "zipCode",
      key: "zipCode",
    },
    {
      title: columns[1].title,
      width: 150,
      dataIndex: "street",
      key: "street",
    },
    {
      title: columns[2].title,
      dataIndex: "number",
      key: "number",
      width: 100,
    },
    {
      title: columns[3].title,
      dataIndex: "airplanesNoise",
      key: "1",
      width: 150,
    },
    {
      title: columns[4].title,
      dataIndex: "neighborsNoise",
      key: "2",
      width: 150,
    },
    {
      title: columns[5].title,
      dataIndex: "trafficNoise",
      key: "3",
      width: 150,
    },
    {
      title: columns[6].title,
      dataIndex: "greenSpaces",
      key: "4",
      width: 150,
    },
    {
      title: columns[7].title,
      dataIndex: "transportation",
      key: "5",
      width: 150,
    },
    {
      title: columns[8].title,
      dataIndex: "shops",
      key: "6",
      width: 150,
    },
    { title: "Assessment", dataIndex: "assessment", key: "7", width: 150 },
    {
      title: columns[9].title,
      dataIndex: "numberOfVotes",
      key: "8",
      width: 150,
    },
    {
      title: "",
      key: "operation",
      fixed: "right",
      width: 120,
      render: (renderParam) => (
        <a
          onClick={() => {
            window.dispatchEvent(
              new CustomEvent("view-details", {
                detail: {
                  rowIndex: renderParam.key,
                },
              })
            );
          }}
          style={{
            color: "#000",
          }}
        >
          <FormattedMessage defaultMessage="View Details" id="table.viewdetails" />
        </a>
      ),
    },
  ];

  const isMobile = useIsMobile();
  // const isMobile = true;

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
      columns={isMobile ? mobileColumns : columns}
      dataSource={dataToShow}
      scroll={{ x: 1500, y: 400 }}
      bordered
      pagination={{
        onChange: (x) => {
          const currentPageNumber = x;
          setPageNo(currentPageNumber);
          onPaginationChange(x);
        },
        hideOnSinglePage: true,
        defaultCurrent: pageNo,
        defaultPageSize: 10,
        pageSize: 10,
        current: pageNo,
        total: totalRecods,
      }}
    />
  );
};

export default EntriesTable;
