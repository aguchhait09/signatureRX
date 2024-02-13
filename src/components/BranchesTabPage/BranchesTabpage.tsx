/* eslint-disable @typescript-eslint/no-unused-vars */
import CustomButtonPrimary from "UI/CustomButton/CustomButtonPrimary";
import CustomSwitch from "UI/CustomSwichWithLabel/CustomSwitch";
import CustomTable, { TableHeader } from "UI/CustomTable/CustomTable";
import CustomTag from "UI/CustomTag/CustomTag";
import CircleCheck from "UI/Icons/CircleCheck";
import CircleCross from "UI/Icons/CircleCross";
import { Space, Avatar, Flex, Button, Typography } from "antd";
import { ColumnsType } from "antd/es/table";
import FilterRow from "components/FilterRow/FilterRow";
import assets from "json/assets";
import React from "react";
import { Link } from "react-router-dom";

const BranchesTabpage = () => {
  interface DataType {
    key: string;
    pharmacy: string;
    status: boolean;
    address: string;
    name: string;
    branchImg?: string;
    Pharmaimg?: string;
  }

  const columns: ColumnsType<DataType> = [
    {
      title: <TableHeader title="Name" sort />,
      dataIndex: "name",
      key: "name",
      sorter: true,
      render: (name, Pharmaimg: DataType) => (
        <Space>
          <Avatar size={32} src={Pharmaimg.branchImg} />
          <Link to={"/"}>{name}</Link>
        </Space>
      ),

      width: 300,
    },
    {
      title: <TableHeader title="Status" />,
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <>
          <CustomSwitch
            label="Online"
            checked={status}
            className="greenSwitch"
          />
        </>
      ),
      sorter: true,
      width: 160,
    },
    {
      title: <TableHeader title="Pharmacy" sort />,
      dataIndex: "pharmacy",
      key: "pharmacy",
      render: (pharmacy, Pharmaimg: DataType) => (
        <Space>
          <Avatar size={32} src={Pharmaimg.Pharmaimg} />
          <Link to={"/"}>{pharmacy}</Link>
        </Space>
      ),
      sorter: true,
      width: 300,
    },

    {
      title: <TableHeader title="Address" sort />,
      dataIndex: "address",
      key: "address",
      render: (address) => (
        <>
          <Typography.Text>{address}</Typography.Text>
        </>
      ),
      sorter: true,
      width: 300,
    },
  ];

  const data: DataType[] = [
    {
      key: "1",
      name: "Bright Side",
      pharmacy: "Paulatim Summa Petuntur",
      status: true,
      address: "5278 Meadowview Circle, Springfield",
      Pharmaimg: assets.img01,
      branchImg: assets.img03,
    },
    {
      key: "1",
      name: "Bilbo’s House",
      pharmacy: "Bright Side",
      status: false,
      address: "5278 Meadowview Circle, Springfield",
      Pharmaimg: assets.img09,
      branchImg: assets.img07,
    },
    {
      key: "1",
      name: "Aversi Pharmacy",
      pharmacy: "Bright Side",
      status: false,
      address: "7731 Maplewood Avenue, Phoenix",
      Pharmaimg: assets.PaulatimSummaPetuntur,
      branchImg: assets.img05,
    },
    {
      key: "1",
      name: "Bright Side",
      pharmacy: "Asethetics By The Little",
      status: true,
      address: "5278 Meadowview Circle, Springfield",
      Pharmaimg: assets.img02,
      branchImg: assets.img03,
    },
    {
      key: "1",
      name: "Buckingham Meadow Walk",
      pharmacy: "Kenilworth",
      status: false,
      address: "2156 Stonebridge Court, Savannah",
      Pharmaimg: assets.img01,
      branchImg: assets.img03,
    },
    {
      key: "1",
      name: "Bright Side",
      pharmacy: "Paulatim Summa Petuntur",
      status: true,
      address: "5278 Meadowview Circle, Springfield",
      Pharmaimg: assets.img01,
      branchImg: assets.img03,
    },
    {
      key: "1",
      name: "Bilbo’s House",
      pharmacy: "Bright Side",
      status: false,
      address: "5278 Meadowview Circle, Springfield",
      Pharmaimg: assets.img09,
      branchImg: assets.img07,
    },
    {
      key: "1",
      name: "Aversi Pharmacy",
      pharmacy: "Bright Side",
      status: false,
      address: "7731 Maplewood Avenue, Phoenix",
      Pharmaimg: assets.PaulatimSummaPetuntur,
      branchImg: assets.img05,
    },
    {
      key: "1",
      name: "Bright Side",
      pharmacy: "Asethetics By The Little",
      status: true,
      address: "5278 Meadowview Circle, Springfield",
      Pharmaimg: assets.img02,
      branchImg: assets.img03,
    },
    {
      key: "1",
      name: "Buckingham Meadow Walk",
      pharmacy: "Kenilworth",
      status: false,
      address: "2156 Stonebridge Court, Savannah",
      Pharmaimg: assets.img01,
      branchImg: assets.img03,
    },
  ];
  return (
    <div className="tab-wrapper">
      <div className="filter-row-absolute">
        {" "}
        <FilterRow hideCheckbox hideDatePicker />
      </div>
      <CustomTable columns={columns} dataSource={data} tableHeightsmall />
    </div>
  );
};

export default BranchesTabpage;
