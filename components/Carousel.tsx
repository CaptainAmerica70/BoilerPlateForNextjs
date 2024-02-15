import { FC } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Box, Icon, Img } from '@chakra-ui/react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import main from '../svg/main.svg'
import Image from '../svg/Image.svg'

export const Carousels: FC<{ name: string }> = ({ name }) => {

  return (
    <Box className='flex justify-center'>
      <Carousel
        showArrows={false}
        width={500}
        dynamicHeight={true}
        swipeable={true}
        emulateTouch={true}
        autoPlay={true} // makes the carousel automatic
        infiniteLoop={true} // disables infinite looping
        showThumbs={true} // shows the thumbnails
        thumbWidth={50} // sets the thumbnail width
        selectedItem={0} // sets the initial selected item
        interval={3000} // sets the interval for automatic play
        transitionTime={600}
      >
        <div>
          <Icon width={'100%'} height={'100%'} as={Image} />
        </div>
        <div>
          <Icon width={'100%'} height={'100%'} as={main} />
        </div>
      </Carousel>
    </Box>
  );
};
