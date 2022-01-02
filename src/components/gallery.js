import * as React from "react"
import * as Chakra from "@chakra-ui/react"
import GalleryImageOne from "../images/gallery-image-one.png"
import GalleryImageTwo from "../images/gallery-image-two.png"
import GalleryImageThree from "../images/gallery-image-three.png"
import GalleryImageFour from "../images/gallery-image-four.png"
import ArrowIcon from "../images/collections-arrow.svg"
import { gsap, Power2 } from "gsap"
// import { Link } from "gatsby"

const Gallery = () => {
  let FirstImage = React.useRef(null)
  let SecondImage = React.useRef(null)
  let ThirdImage = React.useRef(null)
  let FourthImage = React.useRef(null)

  React.useEffect(() => {
    //    gsap.to(container, 0, { css: { visibility: "visible" } })
    //    // console.log(imageReveal);
    //    gsap.to(imageReveal, 1.8, {
    //      css: { width: "0%" },
    //      ease: Power2.easeInOut,
    //    })
    var tl = gsap.timeline({ repeat: -1, repeatDelay: 2 })
    console.log(FirstImage)
    tl.to(FirstImage, { x: 450, duration: 3, ease: Power2.easeInOut })
    tl.to(SecondImage, { x: 450, duration: 3, ease: Power2.easeInOut }, "-=75%")
    tl.to(ThirdImage, { x: -350, duration: 3, ease: Power2.easeInOut }, "-=75%")
    tl.to(
      FourthImage,
      { x: -800, duration: 3, ease: Power2.easeInOut },
      "-=75%"
    )
    tl.to(FirstImage, { x: 0, duration: 3, ease: Power2.easeInOut }, "+=20%")
    tl.to(SecondImage, { x: 0, duration: 3, ease: Power2.easeInOut }, "-=75%")
    tl.to(ThirdImage, { x: -20, duration: 3, ease: Power2.easeInOut }, "-=75%")
    tl.to(FourthImage, { x: -70, duration: 3, ease: Power2.easeInOut }, "-=75%")
    tl.to(ThirdImage, { x: 0, duration: 1, ease: Power2.easeInOut })
    tl.to(FourthImage, { x: 0, duration: 1, ease: Power2.easeInOut }, "-=75%")
    //    gsap.from(FirstImage, 1.4, {
    //      scale: 1.8,
    //      ease: Power2.easeInOut,
    //      delay: -1.8,
    //    })
  })
  return (
    <Chakra.Box
      mt={{ base: "50px", xl: "143px" }}
      mb={{ base: "50px", xl: "157px" }}
      position="relative"
      backgroundColor="#FFFFFF"
    >
      <Chakra.Box
        display={{ base: "none", xl: "flex" }}
        alignItems="center"
        justifyContent="center"
        px="60px"
        maxWidth="1394px"
        mx="auto"
      >
        <Chakra.Image
          ref={el => (FirstImage = el)}
          src={GalleryImageOne}
        ></Chakra.Image>
        <Chakra.Image
          ref={el => (SecondImage = el)}
          mt="187px"
          ml="-51px"
          zIndex="2"
          src={GalleryImageTwo}
        ></Chakra.Image>
        <Chakra.Image
          ref={el => (ThirdImage = el)}
          ml="-180px"
          src={GalleryImageThree}
        ></Chakra.Image>
        <Chakra.Image
          ref={el => (FourthImage = el)}
          ml="10px"
          src={GalleryImageFour}
        ></Chakra.Image>
        <Chakra.Box
          display="flex"
          alignItems="center"
          width="100%"
          bottom="20px"
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
      <Chakra.Box
        width="100%"
        display={{ base: "flex", xl: "none" }}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        px={{ base: "30px", lg: "60px" }}
        maxWidth="1394px"
      >
        <Chakra.Image src={GalleryImageThree}></Chakra.Image>
        <Chakra.Box
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
          mx="auto"
        >
          <Chakra.Text
            marginBottom="0px"
            fontFamily="Clash Display"
            textAlign="left"
            fontWeight="500"
            fontSize={{ base: "16px", xl: "24px" }}
            lineHeight={{ base: "16px", xl: "50px" }}
            marginRight="10px"
          >
            Shop the collection
          </Chakra.Text>
          <ArrowIcon height="13px" width="40px" />
        </Chakra.Box>
      </Chakra.Box>
    </Chakra.Box>
  )
}

export default Gallery
