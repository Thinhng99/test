import React, { useEffect, useState } from "react";
import { Card, Col, Form, Row, Select, Tooltip, Upload } from "antd";
import Title from "../../components/Title";
import TextInput from "../../components/TextInput";
import Button from "../../components/Button";
import DatePicker from "../../components/Datepicker";
import axios from "axios";
import Table from "../../components/Table";
import { ColumnsType } from "antd/es/table";
import { STATUS } from "../../utils/constants";
import { UploadOutlined } from "@ant-design/icons";
import queryString from "query-string";

function HomeSearch() {
  const [form] = Form.useForm();
  const [data, setData] = useState([]);
  const [value, setValue] = useState<any>();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://random-data-api.com/api/users/random_user?size=20&" +
          queryString.stringify(value)
      );
      if (response.status === 200) {
        setData(response.data);
      }
    } catch (error) {}
  };

  const handleSubmit = (values: any) => {
    setValue(values);
  };

  useEffect(() => {
    fetchData();
  }, [value]);

  const columns: ColumnsType = [
    {
      title: "Request No",
      dataIndex: "id",
      width: 100,
      align: "center",
      render: (value) => value,
    },
    {
      title: "Request Time",
      dataIndex: "date_of_birth",
      align: "center",
      width: 200,
      ellipsis: {
        showTitle: false,
      },
      render: (value) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      title: "Created user",
      dataIndex: "username",
      render: (value) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      title: "Approval time",
      dataIndex: "date_of_birth",
      align: "center",
      width: 200,
      ellipsis: {
        showTitle: false,
      },
      render: (value) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      title: "Phone number",
      dataIndex: "phone_number",
      width: 150,
      ellipsis: {
        showTitle: false,
      },
      align: "center",
      render: (value) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      title: "Amount",
      dataIndex: "social_insurance_number",
      width: 150,
      ellipsis: {
        showTitle: false,
      },
      render: (value) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      title: "Approver",
      dataIndex: "email",
      width: 150,
      ellipsis: {
        showTitle: false,
      },
      render: (value) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      title: "Reason to reject",
      dataIndex: "gender",
      ellipsis: {
        showTitle: false,
      },
      render: (value) => <Tooltip title={value}>{value}</Tooltip>,
    },
    {
      title: "Status",
      dataIndex: "subscription",
      width: 100,
      ellipsis: {
        showTitle: false,
      },
      render: (value) => <Tooltip title={value}>{value?.status}</Tooltip>,
    },
  ];

  return (
    <div>
      <Card style={{ marginBottom: 15 }}>
        <Title level={4}>Search Information</Title>
        <Form
          style={{ marginTop: 10 }}
          labelCol={{ flex: "110px" }}
          wrapperCol={{ flex: 1 }}
          labelAlign="left"
          form={form}
          onFinish={handleSubmit}
        >
          <Row gutter={20}>
            <Col span={8}>
              <Form.Item label="Request No(id)" name="id">
                <TextInput placeholder="Request No" />
              </Form.Item>
              <Form.Item label="Phone number" name="phone_number">
                <TextInput type="number" placeholder="Phone number" />
              </Form.Item>
              <Form.Item label="Status" name="league_id">
                <Select
                  allowClear
                  placeholder="Status"
                  size="large"
                  options={STATUS}
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Request Time" name="request_time">
                <DatePicker size="large" style={{ width: "100%" }} />
              </Form.Item>
              <Form.Item label="Approval Date" name="approve_time">
                <DatePicker size="large" style={{ width: "100%" }} />
              </Form.Item>
              <Form.Item label="File" name="file">
                <Upload maxCount={1} beforeUpload={() => false}>
                  <Button icon={<UploadOutlined />}>Upload</Button>
                </Upload>
              </Form.Item>
            </Col>
            <Col span={4}>
              <Button htmlType="submit">Search</Button>
              <Button
                style={{ marginLeft: 10 }}
                type="dashed"
                htmlType="reset"
                onClick={() => fetchData()}
              >
                Reset
              </Button>
            </Col>
          </Row>
        </Form>
      </Card>
      <Card>
        <Table
          total={20}
          dataSource={data}
          columns={columns}
          rowKey="id"
          scroll={{
            x: 1500,
          }}
        />
      </Card>
    </div>
  );
}

export default HomeSearch;
