import { MenuProps, Space, Menu } from "antd";
import React, { Dispatch, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getMenuItem } from "../utils/antdesign";
import { HomeOutlined, ContactsOutlined } from "@ant-design/icons";
import logo from "../assets/images/logo.png";
import { menuItemTitles, path } from "../routers/path";

interface Props {
  setPageTitle: Dispatch<React.SetStateAction<string>>;
}

const menuItems: MenuProps["items"] = [
  getMenuItem("Home", path.home, <HomeOutlined />),
  getMenuItem("Contract", "2", <ContactsOutlined />, [
    getMenuItem("Contractlist", path.contract.contractList),
    getMenuItem("Create new contract", path.contract.createNewcontract),
    getMenuItem("Approve contract", path.contract.approveContract),
    getMenuItem("Unblock contract", path.contract.unblockContract),
    getMenuItem("Unblock user", path.contract.unblockUser),
    getMenuItem("Reset pin/password", path.contract.resetPassword),
  ]),

  getMenuItem("Fee management", "3", <HomeOutlined />, [
    getMenuItem("Setfee", path.fee.setFee),
    getMenuItem("Transaction fee", "sub3", null, [
      getMenuItem("Product fee", path.fee.transactionFee.productFee),
      getMenuItem("Contract fee", path.fee.transactionFee.contractFee),
      getMenuItem("OTC fee", path.fee.transactionFee.OTCFee),
    ]),
    getMenuItem("Set fee share", path.fee.setFeeShare),
  ]),
  getMenuItem("Limit management", "4", <ContactsOutlined />, [
    getMenuItem("Producr limit", "5"),
    getMenuItem("Contractlimit", "6"),
    getMenuItem("Wallet blance limit", "7"),
  ]),
  getMenuItem("Transaction", "8", <ContactsOutlined />, [
    getMenuItem("Transaction history", "9"),
    getMenuItem("Top Up to E-wallet", "10"),
    getMenuItem("Withdrawal from E-wallet", "11"),
    getMenuItem("Cash back", "12"),
    getMenuItem("Payroll", "13"),
    getMenuItem("Admin transaction", "14"),
    getMenuItem("Reversal transaction", "15"),
  ]),
  getMenuItem("System", "16", <ContactsOutlined />, [
    getMenuItem("Group management", "17"),
    getMenuItem("System parameter", "18"),
  ]),
  getMenuItem("Report", "19", <ContactsOutlined />, [
    getMenuItem("Report list", "20"),
  ]),
];

function MenuComponent({ setPageTitle }: Props) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const handleClick = (data: { key: string }) => {
    navigate(data.key);
  };

  useEffect(() => {
    if (pathname) {
      for (let i in menuItemTitles) {
        if (pathname.split("/")[1] === i) {
          setPageTitle(menuItemTitles[i].toUpperCase());
        }
      }
    }
  }, [pathname, setPageTitle]);

  return (
    <>
      <div className="logo">
        <Space style={{ height: "100%" }}>
          <img src={logo} alt="SPORTATB" />
          <span style={{ fontSize: 20 }}>JITS COMPANY</span>
        </Space>
      </div>
      <Menu
        style={{ height: "90vh", overflowY: "auto" }}
        items={menuItems}
        mode="inline"
        theme="dark"
        onClick={handleClick}
      />
    </>
  );
}

export default MenuComponent;
