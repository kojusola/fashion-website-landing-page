import * as React from "react"
import * as Chakra from "@chakra-ui/react"
import HeroSvg from "../images/hero-svg.svg"
import heroImage from "../images/hero-image.png"
// import { Link } from "gatsby"

const Hero = () => (
  <Chakra.Box backgroundColor="#FFFBD6" width="100%" height="auto">
    <Chakra.Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      px="60px"
      pt="23px"
      marginBottom="0px"
      maxWidth="1394px"
      mx="auto"
      position="relative"
    >
      <Chakra.Text
        marginBottom="0px"
        fontFamily="Clash Display"
        fontWeight="500"
        fontSize="200px"
        lineHeight="200px"
        letterSpacing="0.25px"
        color="#1C1C1C"
        textAlign="center"
      >
        2022 Drip
      </Chakra.Text>
      <Chakra.Box marginTop="-113px" position="relative" marginBottom="-26px">
        <Chakra.Image src={heroImage} alt="hero image" />
        <Chakra.Box position="absolute" bottom="26px" marginLeft="-140px">
          <HeroSvg />
        </Chakra.Box>
      </Chakra.Box>
      <Chakra.Box
        position="absolute"
        bottom="40px"
        right="60px"
        maxWidth="157px"
      >
        <Chakra.Text
          textAlign="left"
          fontFamily="Satoshi"
          fontWeight="400"
          fontSize="16px"
          lineHeight="24px"
          letterSpacing="0.25px"
          color="#1C1C1C"
        >
          HERA NANO RHINESTONE SHOULDER BAG
        </Chakra.Text>
      </Chakra.Box>
    </Chakra.Box>
  </Chakra.Box>
)

export default Hero
