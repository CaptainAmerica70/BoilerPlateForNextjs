// Import necessary components from Chakra UI
import { Box, Button, Accordion, AccordionButton, AccordionPanel, AccordionItem } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import React, { FC, ReactNode, useCallback } from "react";

// Define the props for the AccordionItem
interface MenuItemProps {
  label: string;
  action: () => void;

}

// Define the props for the MenuComponent
interface AccordionComponentProps {
  // items: MenuItemProps[];
  title: string;
  data: ReactNode

}

// Define the MenuComponent
const AccordionComponent: FC<AccordionComponentProps> = ({ data, title }) => {
  const handleAccordionItemClick = useCallback((action: () => void) => {
    action();
  }, []);

  return (
    <Box>
      <Accordion allowToggle={true} >
        <AccordionItem >
          <AccordionButton
            textStyle={"secondary.bodyMM"}
            as={Button}
            justifyContent="space-between"
            textAlign="left"
            rightIcon={<ChevronDownIcon color={"Main.100"}
            />}
          >
            {title}
          </AccordionButton>
          <AccordionPanel p={'1px'}>
            {data}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default AccordionComponent;
