import { lazy, Suspense } from "react";
import Loading from "../components/Loading";

interface Props {
  [key: string]: any;
}

type LazyComponent = ReturnType<typeof lazy>;

const Loadable = (Component: LazyComponent) => (props: Props) =>
  (
    <Suspense fallback={<Loading />}>
      <Component {...props} />
    </Suspense>
  );

export default Loadable;
