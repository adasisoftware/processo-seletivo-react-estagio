import DataTable, { TableProps } from 'react-data-table-component';

const selectProps = {
  indeterminate: (isIndeterminate: boolean) => isIndeterminate,
};

export default function DataTableBase<T>(props: TableProps<T>): JSX.Element {
  return (
    <DataTable
      pagination
      selectableRowsComponentProps={selectProps}
      {...props}
    />
  );
}
