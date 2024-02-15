import { Box, Flex, Tab, Tabs, Text } from "@chakra-ui/react";
import { FC, ReactNode, memo, useCallback } from "react";

interface TabProps {
  label: string;
  content?: string | ReactNode;
}

const TabComponent: FC<TabProps> = ({ label }) => (
  <Tab gap={'15px'} display={'grid'} _selected={{ color: "black", borderBottomColor: "#118E52" }}>
    <Text variant="bodyLM">{label}</Text>
  </Tab>
);

const MemoizedTab = memo(TabComponent);

interface TabsProps {
  labels: string[];
  tabs: TabProps[];

}

const CustomTabs: FC<TabsProps> = ({ labels }) => {
  const renderTab = useCallback(
    (label: string) => <MemoizedTab key={label} label={label} />,
    []
  );

  return (
    <Tabs color={'#717184'} colorScheme="green" borderBottomColor="#118E52">
      {labels.map(renderTab)}
    </Tabs>
  );
};

export default CustomTabs;
