import { Space, Typography, Table, Avatar } from "antd";
import React, { useEffect, useState } from "react";
import { getUser } from "../../Api/Index";

const Customers = () => {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getUser().then((res) => {
      setDataSource(res.users);
      setLoading(false);
    });
  }, []);
  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Customers</Typography.Title>
      <Table
        columns={[
          {
            title: "Photo",
            dataIndex: "image",
            render: (link) => {
              return <Avatar src={link} />;
            },
          },
          {
            title: "First Name",
            dataIndex: "firstName",
          },
          {
            title: "Last Name",
            dataIndex: "lastName",
          },
          {
            title: "Email",
            dataIndex: "email",
          },
          {
            title: "Phone",
            dataIndex: "phone",
          },
          {
            title: "Address",
            dataIndex: "address",
            render: (address) => {
              return <span>{address.address}, {address.city}</span>
            }
          }
        ]}
        dataSource={dataSource}
        loading={loading}
        pagination={{
          pageSize: 5,
        }}
      ></Table>
    </Space>
  );
};

export default Customers;
