import Image from 'next/image';
import { Box, Flex, Grid, GridItem, Heading } from '@chakra-ui/react';

import { imagesPaths } from '../../utils';

export const ContinentDetailBanner = () => {
  return (
    <Box w="100%" position="relative" marginBottom="40px">
      <Grid gridTemplateAreas={`'banner'`} alignItems="center">
        <GridItem area={'banner'} zIndex="1">
          <Image
            src={imagesPaths.europeBanner}
            width="2880px"
            height="1000px"
            layout="responsive"
          />
        </GridItem>
        <GridItem
          area={'banner'}
          zIndex={2}
          height="100%"
          paddingInlineEnd={4}
          paddingInlineStart={4}
        >
          <Flex
            maxW={1400}
            display="flex"
            justifyContent="space-between"
            margin="auto"
            height="100%"
          >
            <Box alignSelf="end" marginBottom="60px">
              <Heading
                as="h1"
                color="white.100"
                maxW={426}
                fontSize="36px"
                fontWeight="500"
                lineHeight="54px"
              >
                Europe
              </Heading>
            </Box>
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
};
