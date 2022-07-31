import { Box, Grid, GridItem, Heading, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { imagesPaths } from '../../utils';

export const Cities = () => {
  return (
    <Stack mb="35px" maxW="1160px">
      <Heading as="h2" mb="40px">
        Cidades +100
      </Heading>
      <Grid
        gridTemplateColumns="repeat(auto-fit,minmax(auto, 256px))"
        rowGap="48px"
        columnGap="45px"
      >
        <GridItem>
          <Box>
            <Image
              src={imagesPaths.london}
              width="512px"
              height="346px"
              layout="responsive"
            />
          </Box>
          <Box
            border="1px solid rgba(255, 186, 8, 0.5)"
            p="18px 24px"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Stack>
              <Text as="span" color="gray.600" fontWeight={600} fontSize="20px">
                Londres
              </Text>
              <Text as="span" color="gray.400" fontSize="16px" fontWeight={500}>
                Reino Unido
              </Text>
            </Stack>
            <Box maxW="48px">
              <Image src={imagesPaths.ukFlag} width="48px" height="48px" />
            </Box>
          </Box>
        </GridItem>
        <GridItem>
          <Box>
            <Image
              src={imagesPaths.london}
              width="512px"
              height="346px"
              layout="responsive"
            />
          </Box>
          <Box
            border="1px solid rgba(255, 186, 8, 0.5)"
            p="18px 24px"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Stack>
              <Text as="span" color="gray.600" fontWeight={600} fontSize="20px">
                Londres
              </Text>
              <Text as="span" color="gray.400" fontSize="16px" fontWeight={500}>
                Reino Unido
              </Text>
            </Stack>
            <Box maxW="48px">
              <Image src={imagesPaths.ukFlag} width="48px" height="48px" />
            </Box>
          </Box>
        </GridItem>
        <GridItem>
          <Box>
            <Image
              src={imagesPaths.london}
              width="512px"
              height="346px"
              layout="responsive"
            />
          </Box>
          <Box
            border="1px solid rgba(255, 186, 8, 0.5)"
            p="18px 24px"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Stack>
              <Text as="span" color="gray.600" fontWeight={600} fontSize="20px">
                Londres
              </Text>
              <Text as="span" color="gray.400" fontSize="16px" fontWeight={500}>
                Reino Unido
              </Text>
            </Stack>
            <Box maxW="48px">
              <Image src={imagesPaths.ukFlag} width="48px" height="48px" />
            </Box>
          </Box>
        </GridItem>
        <GridItem>
          <Box>
            <Image
              src={imagesPaths.london}
              width="512px"
              height="346px"
              layout="responsive"
            />
          </Box>
          <Box
            border="1px solid rgba(255, 186, 8, 0.5)"
            p="18px 24px"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Stack>
              <Text as="span" color="gray.600" fontWeight={600} fontSize="20px">
                Londres
              </Text>
              <Text as="span" color="gray.400" fontSize="16px" fontWeight={500}>
                Reino Unido
              </Text>
            </Stack>
            <Box maxW="48px">
              <Image src={imagesPaths.ukFlag} width="48px" height="48px" />
            </Box>
          </Box>
        </GridItem>
        <GridItem>
          <Box>
            <Image
              src={imagesPaths.london}
              width="512px"
              height="346px"
              layout="responsive"
            />
          </Box>
          <Box
            border="1px solid rgba(255, 186, 8, 0.5)"
            p="18px 24px"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Stack>
              <Text as="span" color="gray.600" fontWeight={600} fontSize="20px">
                Londres
              </Text>
              <Text as="span" color="gray.400" fontSize="16px" fontWeight={500}>
                Reino Unido
              </Text>
            </Stack>
            <Box maxW="48px">
              <Image src={imagesPaths.ukFlag} width="48px" height="48px" />
            </Box>
          </Box>
        </GridItem>
      </Grid>
    </Stack>
  );
};
