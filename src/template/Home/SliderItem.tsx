import Image from 'next/image';

import { Box, Grid, GridItem, Heading, Stack, Text } from '@chakra-ui/react';

import { imagesPaths } from '../../utils';

export const SliderItem = () => {
  return (
    <Grid gridTemplateAreas={`'banner'`}>
      <GridItem area={'banner'} zIndex="1">
        <Box maxW="1240px">
          <Image src={imagesPaths.europe} width="2480px" height="900" />
        </Box>
      </GridItem>
      <GridItem
        area={'banner'}
        zIndex="2"
        justifySelf="center"
        alignSelf="center"
      >
        <Box maxW="1240px" zIndex={2}>
          <Stack spacing="16px">
            <Heading
              as="h2"
              color="white.100"
              fontSize="48px"
              textAlign="center"
            >
              Europa
            </Heading>
            <Heading as="h5" color="white.100" fontSize="24px">
              O continente mais antigo.
            </Heading>
          </Stack>
        </Box>
      </GridItem>
    </Grid>
  );
};
