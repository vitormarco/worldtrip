import { GetStaticProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';

import { Header } from '../../components/Header';

import {
  Cities,
  ContinentDetailBanner,
  Description,
  Main,
} from '../../template';

interface IContinentProps {
  continent: Record<string, unknown>;
}

interface ParamsContinent extends ParsedUrlQuery {
  slug: string;
}

const Continent: NextPage<IContinentProps> = ({ continent }) => {
  return (
    <>
      <Header />
      <ContinentDetailBanner />
      <Main>
        <Description />
        <Cities />
      </Main>
    </>
  );
};

export default Continent;

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<
  IContinentProps,
  ParamsContinent
> = async ({ params }) => {
  const slug = params!.slug;

  const continents = {
    europe: {
      title: 'Europe',
    },
    'north-america': {
      title: 'América do Norte',
    },
    'south-america': {
      title: 'América do Sul',
    },
    asia: {
      title: 'Ásia',
    },
    africa: {
      title: 'África',
    },
    oceania: {
      title: 'Oceania',
    },
  };

  const continent = continents[slug as keyof typeof continents];

  if (!continent) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      continent,
    },
  };
};
