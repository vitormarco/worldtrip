import Image from 'next/image';
import { Flex, List, ListItem, Text, Stack } from '@chakra-ui/react';

import { imagesPaths } from '../../utils';

export const TripTypeList = () => {
  return (
    <List
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      maxW="1240px"
      margin="80px auto 0"
    >
      <ListItem>
        <Stack alignItems="center" justifyContent="center" gap="24px">
          <Image src={imagesPaths.cocktail} width="85px" height="85px" />
          <Text as="span" fontSize="24px" fontWeight="600">
            vida noturna
          </Text>
        </Stack>
      </ListItem>
      <ListItem>
        <Stack alignItems="center" justifyContent="center" gap="24px">
          <Image src={imagesPaths.surf} width="85px" height="85px" />
          <Text as="span" fontSize="24px" fontWeight="600">
            praia
          </Text>
        </Stack>
      </ListItem>
      <ListItem>
        <Stack alignItems="center" justifyContent="center" gap="24px">
          <Image src={imagesPaths.building} width="85px" height="85px" />
          <Text as="span" fontSize="24px" fontWeight="600">
            moderno
          </Text>
        </Stack>
      </ListItem>
      <ListItem>
        <Stack alignItems="center" justifyContent="center" gap="24px">
          <Image src={imagesPaths.museum} width="85px" height="85px" />
          <Text as="span" fontSize="24px" fontWeight="600">
            clássico
          </Text>
        </Stack>
      </ListItem>
      <ListItem>
        <Stack alignItems="center" justifyContent="center" gap="24px">
          <Image src={imagesPaths.earth} width="85px" height="85px" />
          <Text as="span" fontSize="24px" fontWeight="600">
            e mais ...
          </Text>
        </Stack>
      </ListItem>
    </List>
  );
};
