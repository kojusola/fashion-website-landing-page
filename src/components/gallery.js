import * as React from "react"
import * as Chakra from "@chakra-ui/react"
import GalleryImageOne from "../images/gallery-image-one.png"
import GalleryImageTwo from "../images/gallery-image-two.png"
import GalleryImageThree from "../images/gallery-image-three.png"
import GalleryImageFour from "../images/gallery-image-four.png"
import ArrowIcon from "../images/collections-arrow.svg"
// import { Link } from "gatsby"

const Gallery = ({ siteTitle }) => (
  <Chakra.Box
    mt="143px"
    mb="157px"
    position="relative"
    backgroundColor="#FFFFFF"
  >
    <Chakra.Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      px="60px"
      maxWidth="1394px"
      mx="auto"
    >
      <Chakra.Image src={GalleryImageOne}></Chakra.Image>
      <Chakra.Image
        mt="187px"
        ml="-51px"
        zIndex="2"
        src={GalleryImageTwo}
      ></Chakra.Image>
      <Chakra.Image ml="-180px" src={GalleryImageThree}></Chakra.Image>
      <Chakra.Image ml="10px" src={GalleryImageFour}></Chakra.Image>
      <Chakra.Box
        display="flex"
        alignItems="center"
        width="100%"
        bottom="0px"
        position="absolute"
      >
        <Chakra.Box
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
          px="60px"
          maxWidth="1394px"
          width="100%"
          mx="auto"
        >
          <Chakra.Text
            marginBottom="0px"
            fontFamily="Clash Display"
            fontWeight="500"
            fontSize={{ base: "16px", xl: "24px" }}
            lineHeight={{ base: "16px", xl: "50px" }}
            marginRight="27px"
            marginLeft="26px"
          >
            Shop the collection
          </Chakra.Text>
          <ArrowIcon height="28px" width="44px" />
        </Chakra.Box>
      </Chakra.Box>
    </Chakra.Box>
  </Chakra.Box>
)

export default Gallery
