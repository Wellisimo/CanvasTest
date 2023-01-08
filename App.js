import React, {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';
import axios from 'axios';
import SignatureScreen from 'react-native-signature-canvas';
import {Buffer} from 'buffer';

const IMAGE_DATA_URI_PREFIX = 'data:image/jpg;base64,';
const largeImage =
  'https://sales-media.apps-checkout.com/retail_test/user_uploads/4a_2009d74116e0ccdc.jpg';
const smallImage =
  'https://sales-media.apps-checkout.com/retail_test/user_uploads/4a_a99269678b0759a6.jpg';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const App = () => {
  const [image, setImage] = useState('');

  const drawerStyle = `.m-signature-pad {box-shadow: none; border: none;} 
                .m-signature-pad--body {border: none;}
                .m-signature-pad--body canvas {border-radius: 0px; width: ${screenWidth}px;}
                .m-signature-pad--footer {display: none; margin: 0px;}
                body,html {
                width: ${screenWidth}px; height: ${screenHeight}px;}; }`;

  const getBase64Image = async url => {
    try {
      const {data} = await axios.get(url, {responseType: 'arraybuffer'});
      const imageBase64 = Buffer.from(data, 'binary').toString('base64');

      setImage(IMAGE_DATA_URI_PREFIX + imageBase64);
    } catch (error) {
      console.log('getBase64Image error: ', error);
    }
  };

  useEffect(() => {
    // choose here what image to render
    getBase64Image(smallImage);
  }, []);

  return (
    <SignatureScreen
      dataURL={image}
      webStyle={drawerStyle}
      backgroundColor="green"
    />
  );
};

export default App;
