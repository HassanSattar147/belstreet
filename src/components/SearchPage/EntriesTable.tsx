import React from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { DataRow, SortOrder } from ".";
import useIsMobile from "../../utils/useIsMobile";
import { FormattedMessage } from "react-intl";
import sort from "../../../public/assets/common/sort.svg";
import sortSelected from "../../../public/assets/common/sort-selected.svg";

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
  order?: SortOrder;
}

const EntriesTable: React.FC<Props> = ({
  responseData,
  totalRecods,
  pageNo,
  setPageNo,
  onPaginationChange,
  onOrder,
  order
}) => {

  const getSortIcon = (index: number) => {
    if (index != order?.orderBy) {
      return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <img 
          src={sort}
          style={{
            maxHeight: 18,
            maxWidth: 18,
            float: "right",
          }}
        /></div>
      )
    }
    else {
      return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <img 
          src={sortSelected}
          style={{
            maxHeight: 18,
            maxWidth: 18,
            ...(order.dir === "asc" && { transform: "rotate(180deg)" })
          }}
        />
        </div>
      )
    }
  }

  const columns: ColumnsType<DataType> = [
    {
      title: <span className="grid pointer" style={{ gridTemplateColumns: "1fr 20px" }} onClick={() => onOrder(0)}>
        <FormattedMessage id="table.zip" defaultMessage="ZIP Code" />
        {getSortIcon(0)}
      </span>,
      width: 120,
      dataIndex: "zipCode",
      key: "zipCode",
      fixed: "left",
    },
    {
      title: <span className="grid pointer" style={{ gridTemplateColumns: "1fr 20px" }} onClick={() => onOrder(1)}>
        <FormattedMessage id="table.street" defaultMessage="Street" />{getSortIcon(1)}</span>,
      width: 150,
      dataIndex: "street",
      key: "street",
      fixed: "left",
    },
    {
      title: <span className="grid pointer" style={{ gridTemplateColumns: "1fr 20px" }} onClick={() => onOrder(2)}>
        <FormattedMessage id="table.number" defaultMessage="Number" />{getSortIcon(2)}</span>,
      dataIndex: "number",
      key: "number",
      width: 130,
      fixed: "left",
    },
    {
      title: <span className="grid pointer" style={{ gridTemplateColumns: "1fr 20px" }} onClick={() => onOrder(3)}>
        <FormattedMessage id="table.airplanenoise" defaultMessage="Airplanes Noise" />{getSortIcon(3)}</span>,
      dataIndex: "airplanesNoise",
      key: "1",
      width: 180,
    },
    {
      title: <span className="grid pointer" style={{ gridTemplateColumns: "1fr 20px" }} onClick={() => onOrder(4)}>
        <FormattedMessage id="table.noiseneighboir" defaultMessage="Neighbors Noise" />{getSortIcon(4)}</span>,
      dataIndex: "neighborsNoise",
      key: "2",
      width: 180,
    },
    {
      title: <span className="grid pointer" style={{ gridTemplateColumns: "1fr 20px" }} onClick={() => onOrder(5)}>
        <FormattedMessage id="table.trafficnoise" defaultMessage="Traffic Noise" />{getSortIcon(5)}</span>,
      dataIndex: "trafficNoise",
      key: "3",
      width: 180,
    },
    {
      title: <span className="grid pointer" style={{ gridTemplateColumns: "1fr 20px" }} onClick={() => onOrder(6)}>
        <FormattedMessage id="table.greenspaces" defaultMessage="Green Spaces" />{getSortIcon(6)}</span>,
      dataIndex: "greenSpaces",
      key: "4",
      width: 180,
    },
    {
      title: <span className="grid pointer" style={{ gridTemplateColumns: "1fr 20px" }} onClick={() => onOrder(7)}>
        <FormattedMessage id="table.transportation" defaultMessage="Transportation" />{getSortIcon(7)}</span>,
      dataIndex: "transportation",
      key: "5",
      width: 180,
    },
    {
      title: <span className="grid pointer" style={{ gridTemplateColumns: "1fr 20px" }} onClick={() => onOrder(8)}>
        <FormattedMessage id="table.shops" defaultMessage="Shops" />{getSortIcon(8)}</span>,
      dataIndex: "shops",
      key: "6",
      width: 180,
    },
    { title: <span className="grid pointer" style={{ gridTemplateColumns: "1fr 20px" }} onClick={() => onOrder(9)}>
      <FormattedMessage id="table.assement" defaultMessage="Assessment" />{getSortIcon(9)}</span>, dataIndex: "assessment", key: "7", width: 150 },
    {
      title: <span className="grid pointer" style={{ gridTemplateColumns: "1fr 20px" }} onClick={() => onOrder(10)}>
        <FormattedMessage id="no.of.votes" defaultMessage="Number Of Votes" />{getSortIcon(10)}</span>,
      dataIndex: "numberOfVotes",
      key: "8",
      width: 180,
    },
    {
      title: "",
      key: "operation",
      fixed: "right",
      width: 220,
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
            display: "inline-block",
            textAlign: "center",
            width: 200,
          }}
          className="primary filter-btn"
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
    { title: columns[9].title, dataIndex: "assessment", key: "7", width: 150 },
    {
      title: columns[10].title,
      dataIndex: "numberOfVotes",
      key: "8",
      width: 150,
    },
    {
      title: "",
      key: "operation",
      fixed: "right",
      width: 140,
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
            display: "inline-block",
            textAlign: "center",
            width: 120,
          }}
          className="primary filter-btn"
        >
          <FormattedMessage defaultMessage="Details" id="table.viewdetailsm" />
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
