import React from 'react';

import Timeline from '@mui/lab/Timeline';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import { Typography } from '@mui/material';

import config from '../config/index.json';

const Features = () => {
  const { features } = config;
  const { title, image } = features;
  return (
    <div className="py-12 bg-background" id="features">
      <div className="container max-w-5xl mx-auto m-8 mb-0">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-primary">
          {title.split(' ').map((word, index) => (
            <span
              key={index}
              className={index % 2 ? 'text-primary' : 'text-border'}
            >
              {word}{' '}
            </span>
          ))}
        </h1>
      </div>

      <div className={`flex flex-wrap justify-center`}>
        <div className={`p-6 mt-20`}>
          <Timeline position="alternate">
            <TimelineItem>
              <TimelineOppositeContent color="secondary">
                <Typography className="custom-font">Day 1</Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector className="custom-connector" />
              </TimelineSeparator>
              <TimelineContent className="custom-font-desc">
                Understand your requirements
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                color="secondary"
                className="custom-font"
              >
                Day 10
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector className="custom-connector" />
              </TimelineSeparator>
              <TimelineContent className="custom-font-desc">
                We create formalities for you
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                color="secondary"
                className="custom-font"
              >
                Day 14
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector className="custom-connector" />
              </TimelineSeparator>
              <TimelineContent className="custom-font-desc">
                Receive Samples
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                color="secondary"
                className="custom-font"
              >
                Day 25
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
              </TimelineSeparator>
              <TimelineContent className="custom-font-desc">
                Production gets Started!
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
        <div className={`flex justify-center items-center`}>
          <img className="h-6/6" src={image} alt={title} />
        </div>
      </div>
    </div>
  );
};

export default Features;
