import { lazy } from "react";
import Loadable from "../utils/loadable";
import { path } from "./path";
import { useRoutes } from "react-router-dom";

const NotFoundPage = Loadable(lazy(() => import("../components/NotFound")));
const Layout = Loadable(lazy(() => import("../components/Layout")));
const Home = Loadable(lazy(() => import("../containers/Home")));

//Contract
const Contractlist = Loadable(
  lazy(() => import("../containers/Contract/ContractList"))
);
const ApproveContract = Loadable(
  lazy(() => import("../containers/Contract/ApproveContract"))
);
const CreateNewContract = Loadable(
  lazy(() => import("../containers/Contract/CreateNewContract"))
);
const UnblockUser = Loadable(
  lazy(() => import("../containers/Contract/UnblockUser"))
);
const UnblockContract = Loadable(
  lazy(() => import("../containers/Contract/UnblockContract"))
);
const ResetPassword = Loadable(
  lazy(() => import("../containers/Contract/ResetPassword"))
);

// Fee
const SetFee = Loadable(
  lazy(() => import("../containers/FeeManagement/Setfee"))
);
const SetFeeShare = Loadable(
  lazy(() => import("../containers/FeeManagement/SetFeeShare"))
);
const ProductFee = Loadable(
  lazy(() => import("../containers/FeeManagement/TransactionFee/ProductFee"))
);
const ContractFee = Loadable(
  lazy(() => import("../containers/FeeManagement/TransactionFee/ContractFee"))
);

const OTCFee = Loadable(
  lazy(() => import("../containers/FeeManagement/TransactionFee/OSTFee"))
);

const Router = () => {
  return useRoutes([
    {
      path: path.root,
      element: <Layout />,
      children: [
        {
          path: path.home,
          element: <Home />,
        },
        {
          path: path.contract.contractList,
          element: <Contractlist />,
        },
        {
          path: path.contract.createNewcontract,
          element: <CreateNewContract />,
        },
        {
          path: path.contract.approveContract,
          element: <ApproveContract />,
        },
        {
          path: path.contract.unblockContract,
          element: <UnblockContract />,
        },
        {
          path: path.contract.unblockUser,
          element: <UnblockUser />,
        },
        {
          path: path.contract.resetPassword,
          element: <ResetPassword />,
        },
        //fee
        {
          path: path.fee.setFee,
          element: <SetFee />,
        },
        {
          path: path.fee.transactionFee.productFee,
          element: <ProductFee />,
        },
        {
          path: path.fee.transactionFee.contractFee,
          element: <ContractFee />,
        },
        {
          path: path.fee.transactionFee.OTCFee,
          element: <OTCFee />,
        },
        {
          path: path.fee.setFeeShare,
          element: <SetFeeShare />,
        },
      ],
    },
    {
      path: path.notFound,
      element: <NotFoundPage />,
    },
  ]);
};

export default Router;
