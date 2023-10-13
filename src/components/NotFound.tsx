import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";
import { path } from "../routers/path";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Button onClick={() => navigate(path.root)}>Back Home</Button>}
    />
  );
};

export default NotFound;
