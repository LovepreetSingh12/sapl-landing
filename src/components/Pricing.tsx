import React from 'react';

import { ImageList, ImageListItem } from '@mui/material';

import config from '../config/index.json';

const Pricing = () => {
  const { pricing } = config;
  const { title, items } = pricing;

  return (
    <section className={`bg-background py-8`} id="pricing">
      <div className={`container max-w-5xl mx-auto m-8 mb-0`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {title.split(' ').map((word, index) => (
            <span
              key={index}
              className={index % 2 ? 'text-primary' : 'text-border'}
            >
              {word}{' '}
            </span>
          ))}
        </h1>

        <div className="mt-20">
          <ImageList sx={{ width: 1000, height: 900 }} cols={3} rowHeight={328}>
            {items.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      </div>
    </section>
  );
};
export default Pricing;
