import React, { useState } from 'react'
import axios from 'axios'
import My from './My'
import Type from './Type'
import Chat from './Chat'
import { Box, Button, Flex, Heading, Image } from '@chakra-ui/react'

const Main = ({ text, setText, response, setResponse, type, setType }) => {

  const [loading, setLoading] = useState(false)

  // console.log(response)

  function click() {
    // console.log(text,type)

    // let data =

    let obj = {
      data: text + `convert this code to ${type} language`,
      hello: 'hello'
    }

    setLoading(true)



    axios.post(`https://crimson-salamander-gown.cyclic.app/send`, obj).then((res) => {
      setLoading(false)
      return setResponse(res.data)
    }).catch((err) => {
      setLoading(false)
      return console.log(err)
    })
  }


  function debug() {

    let obj = {
      data: text + `is there any error in this code or not?`
      // hello: 'hello'
    }




    setLoading(true)



    axios.post(`https://crimson-salamander-gown.cyclic.app/send`, obj).then((res) => {
      setLoading(false)
      return setResponse(res.data)
    }).catch((err) => {
      setLoading(false)
      return console.log(err)
    })
  }

  function optimize() {
    let obj = {
      data: text + `if there is any optemized approach of this code or not?`
      // hello: 'hello'
    }




    setLoading(true)



    axios.post(`https://crimson-salamander-gown.cyclic.app/send`, obj).then((res) => {
      setLoading(false)
      return setResponse(res.data)
    }).catch((err) => {
      setLoading(false)
      return console.log(err)
    })
  }

 

  return (
    <Box border={'1px solid balck'} textAlign={'center'}>
      {loading ? <Image display={'block'} m={'auto'} mt={'14%'} src='https://miro.medium.com/v2/resize:fit:1400/1*CsJ05WEGfunYMLGfsT2sXA.gif' /> : <Box>
        <Heading>Code Converter</Heading>
        <Box bgColor={'blue.100'} m={['1% 0%']} mb={['2%']} p={['2%']} >
          <My text={text} setText={setText} />
          <Type type={type} setType={setType} />
          <Chat response={response} setResponse={setResponse} />
        </Box>

        <Button onClick={click} m={'2%'} bgColor={'blue.300'} color={'white'}>Submit</Button>
        <Button onClick={debug} m={'2%'} bgColor={'blue.300'} color={'white'}>Debug</Button>
        <Button onClick={optimize} m={'2%'} bgColor={'blue.300'} color={'white'}>Optimize</Button>
      </Box>}
      {/* <Button onClick={click} bgColor={'green.400'} color={'white'}>Submit</Button> */}

    </Box>
  );
}

export default Main
