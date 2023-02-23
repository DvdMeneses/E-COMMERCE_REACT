import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import "./styles.scss";
import { Button } from '@mui/material';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    title: 'Queima de estoque NIKE',
    description: 'Bla bla bla bla bla',
    actionButton: 'Saiba mais',
    image: '../images/White-Sneakers-PNG-Clipart 1.png',
  },
  {
    title: 'Últimas unidades Olympkus ',
    description: 'Bla bla bla bla bla',
    actionButton: 'Saiba mais',
    image: 'https://www.pngmart.com/files/1/Nike-Shoes-PNG-Clipart.png',
  },
  {
    title: 'Rebook em promoção',
    description: 'Bla bla bla bla bla',
    actionButton: 'Comprar agora',
    image: 'https://www.pngmart.com/files/1/Women-Shoes-PNG-Clipart.png',
  },
  {
    title: 'Aproveite ',
    description: 'Bla bla bla bla bla',
    actionButton: 'Comprar agora',
    image: 'https://www.pngmart.com/files/1/Women-Shoes.png',
  },
];

export default function Banner() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };


  return (
    <Box sx={{flexGrow: 1 }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.title}>
            {Math.abs(activeStep - index) <= 2 ? (
              <section className="carousel">
                <div>
                    <h1>{step.title}</h1>
                    <p>{step.description}</p>

                    <Button color="primary" variant="contained">
                        {step.actionButton}
                    </Button>
                </div>
                <div>
                    <img src={step.image}/>
                </div>
              </section>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        style={{justifyContent: 'center'}}
      />
    </Box>
  );
}


