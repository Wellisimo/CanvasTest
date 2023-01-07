import React from 'react';
import {Text, View} from 'react-native';
import axios from 'axios';

const IMAGE_DATA_URI_PREFIX = 'data:image/jpg;base64,';
const largeImage =
  'https://sales-media.apps-checkout.com/retail_test/user_uploads/4a_2009d74116e0ccdc.jpg';
const smallImage =
  'https://sales-media.apps-checkout.com/retail_test/user_uploads/4a_a99269678b0759a6.jpg';

const App = () => {
  const getBase64Image = async url => {
    try {
      const {data} = await axios.get(url, {responseType: 'arraybuffer'});
      const imageBase64 = new Buffer(data, 'binary').toString('base64');
      return IMAGE_DATA_URI_PREFIX + imageBase64;
    } catch (error) {
      console.log('getBase64Image error: ', error);
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Test</Text>
    </View>
  );
};

export default App;
