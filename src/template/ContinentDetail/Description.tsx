import React from 'react';

import {
  Box,
  Flex,
  List,
  ListItem,
  Stack,
  Tag,
  Text,
  Tooltip,
} from '@chakra-ui/react';

import { FiInfo } from 'react-icons/fi';

const TooltipContent = React.forwardRef<HTMLSpanElement>(({ ...rest }, ref) => {
  return (
    <Tag ref={ref} {...rest} minH="36px">
      <FiInfo size={16} color="#999999" />
    </Tag>
  );
});

export const Description = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      mt="80px"
      mb="80px"
    >
      <Box maxW="600px">
        <Text fontSize="24px" textAlign="justify" lineHeight="36px">
          A Europa é, por convenção, um dos seis continentes do mundo.
          Compreendendo a península ocidental da Eurásia, a Europa geralmente
          divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
          rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
        </Text>
      </Box>
      <List maxW="490px" display="flex" minH="100px" gap="42px">
        <ListItem display="flex" alignItems="flex-end">
          <Stack textAlign="center" spacing={0}>
            <Text
              as="span"
              fontSize="48px"
              color="yellow.100"
              lineHeight="40px"
              fontWeight={600}
            >
              50
            </Text>
            <Text as="span" fontSize="24px" color="gray.600" fontWeight={600}>
              países
            </Text>
          </Stack>
        </ListItem>
        <ListItem display="flex" alignItems="flex-end">
          <Stack textAlign="center" spacing={0}>
            <Text
              as="span"
              fontSize="48px"
              color="yellow.100"
              lineHeight="40px"
              fontWeight={600}
            >
              60
            </Text>
            <Text as="span" fontSize="24px" color="gray.600" fontWeight={600}>
              línguas
            </Text>
          </Stack>
        </ListItem>
        <ListItem display="flex" alignItems="flex-end">
          <Flex alignItems="flex-end">
            <Stack textAlign="center" spacing={0}>
              <Text
                as="span"
                fontSize="48px"
                color="yellow.100"
                lineHeight="40px"
                fontWeight={600}
              >
                27
              </Text>
              <Text as="span" fontSize="24px" color="gray.600" fontWeight={600}>
                cidades +100
              </Text>
            </Stack>
            <Tooltip label="Confira abaixo">
              <TooltipContent />
            </Tooltip>
          </Flex>
        </ListItem>
      </List>
    </Flex>
  );
};
