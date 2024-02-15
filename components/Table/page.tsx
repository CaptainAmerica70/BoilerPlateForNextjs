import { Table, Tbody, Td, Th, Tr, useColorMode } from '@chakra-ui/react'
import React from 'react'

// Define the types for a column and a row
type Column = {
  key: string;
  heading: string;
}

type Row = {
  [key: string]: React.ReactNode;
}

// Define the props for the TableComponent
interface TableProps {
  columns: Column[];
  data: Row[];
}

// Create a reusable TableCell component
const TableCell: React.FC<{ item: React.ReactNode }> = ({ item }) => (
  <Td>{item}</Td>
);

// Create a reusable TableRow component
const TableRow: React.FC<{ row: Row; columns: Column[] }> = ({ row, columns }) => (
  <Tr>
    {columns.map(({ key }) => (
      <TableCell key={key} item={row[key]} />
    ))}
  </Tr>
);

// Create the TableComponent
const TableComponent: React.FC<TableProps> = ({ columns, data }) => {
  const color = useColorMode()

  return (<Table>
    <Tr className="w-[100%] h-[31px] px-[32px]  space-x-[98px] text-white" bg={'Main.300'} textStyle={'secondary.bodyLM'} textColor={'Main.light'} >
      {columns.map(({ key, heading }) => (
        <Th key={key} >{heading}</Th>
      ))}
    </Tr>
    <Tbody>
      {data.map((row, index) => (
        <TableRow key={index} row={row} columns={columns} />
      ))}
    </Tbody>
  </Table>)
}
export default TableComponent;
