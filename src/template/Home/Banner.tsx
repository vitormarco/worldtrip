import Image from 'next/image';
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';

import { imagesPaths } from '../../utils';

export const Banner = () => {
  return (
    <Box w="100%" position="relative" marginBottom="40px">
      <Grid gridTemplateAreas={`'banner'`} alignItems="center">
        <GridItem area={'banner'} zIndex="1">
          <Image src={imagesPaths.sky} width="2880px" height="670px" />
        </GridItem>
        <GridItem
          area={'banner'}
          zIndex={2}
          height="100%"
          paddingInlineEnd={4}
          paddingInlineStart={4}
        >
          <Flex
            maxW={1160}
            display="flex"
            justifyContent="space-between"
            margin="auto"
            height="100%"
          >
            <Box alignSelf="center">
              <Stack spacing={5}>
                <Heading
                  as="h1"
                  color="white.100"
                  maxW={426}
                  fontSize="36px"
                  fontWeight="500"
                  lineHeight="54px"
                >
                  5 Continentes, infinitas possibilidades.
                </Heading>
                <Text
                  as="p"
                  color="gray.200"
                  maxW={524}
                  fontSize="xl"
                  opacity={0.3}
                >
                  Chegou a hora de tirar do papel a viagem que você sempre
                  sonhou.
                </Text>
              </Stack>
            </Box>
            <Box
              alignSelf="flex-end"
              marginBottom="-40px"
              transform="rotate(3deg)"
            >
              <Image src={imagesPaths.aiplane} width="417px" height="271px" />
            </Box>
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
};
