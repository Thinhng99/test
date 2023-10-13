import { FC } from "react";
import { Empty, Table as TableComponent, TableProps } from "antd";

interface Props extends TableProps<any> {
  total?: number;
  current?: number;
  pageSize?: number;
  handlePageChange?: (page: number) => void;
  handleSizeChange?: (size: number) => void;
}

const Table: FC<Props> = ({
  total,
  current,
  pageSize,
  handlePageChange,
  handleSizeChange,
  ...others
}) => {
  return (
    <TableComponent
      {...others}
      size="middle"
      bordered
      pagination={{
        total,
        showTotal: (total, range) =>
          `${range[0]} - ${range[1]} of ${total} items`,
        onChange: handlePageChange,
        onShowSizeChange: (_, pageSize) =>
          handleSizeChange && handleSizeChange(pageSize),
        pageSizeOptions: [5, 10, 15, 20],
        showSizeChanger: true,
        current,
        pageSize,
      }}
      locale={{ emptyText: <Empty /> }}
    />
  );
};

export default Table;
