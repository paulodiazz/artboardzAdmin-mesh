import React, { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import CameraIcon from "../../Assets/Icons/CameraIcon";
import { UIActions } from "../../store/redux-store/UI-slice";
import Image from "next/image";

const GeneralDescForm = () => {
  const policyRef = useRef();
  const artistNameRef = useRef();
  const artTitleRef = useRef();
  const locationRef = useRef();
  const supplyRef = useRef();
  const artDescRef = useRef();
  const aboutMeRef = useRef();
  const mintingDetailRef = useRef();
  const twitterRef = useRef();
  const discordRef = useRef();
  const instagramRef = useRef();
  const [artImage, setArtImage] = useState(null);
  const [artLocationImage, setArtLocationImage] = useState(null);
  const [personalImage, setPersonalImage] = useState(null);
  const dispatch = useDispatch();

  // image preview
  const [artImageUrl, setArtImageUrl] = useState(null);
  const [artLocationImageUrl, setArtLocationImageUrl] = useState(null);
  const [personalImageUrl, setPersonalImageUrl] = useState(null);
  useEffect(() => {
    if (artImage) {
      setArtImageUrl(URL.createObjectURL(artImage));
    }
    if (artLocationImage) {
      setArtLocationImageUrl(URL.createObjectURL(artLocationImage));
    }
    if (personalImage) {
      setPersonalImageUrl(URL.createObjectURL(personalImage));
    }
    console.log("artImageUrl: ", artImageUrl)
    console.log("artLocationImageUrl", artLocationImageUrl)
    console.log("personalImageUrl: ", personalImageUrl)
  }, [artImage, artLocationImage, personalImage]);

  const hideFormHandler = (evt) => {
    evt.preventDefault();
    dispatch(UIActions.hideAddCollectionForm());
    dispatch(UIActions.hideEditCollectionForm());
  };

  const formSubmitHandler = (evt) => {
    evt.preventDefault();
    const GeneralDescData = {
      policy: policyRef.current.value,
      artistName: artistNameRef.current.value,
      artTitle: artTitleRef.current.value,
      location: locationRef.current.value,
      supply: supplyRef.current.value,
      artDescription: artDescRef.current.value,
      aboutMe: aboutMeRef.current.value,
      mintingDetail: mintingDetailRef.current.value,
      twitter: twitterRef.current.value,
      discord: discordRef.current.value,
      instagram: instagramRef.current.value,
      artImage: artImage,
      artLocationImage: artLocationImage,
      personalImage: personalImage,
    };
  };

  return (
    <form className="grid grid-cols-2 gap-4" onSubmit={formSubmitHandler}>
      <div className="flex flex-col">
        <label htmlFor="policy" className="text-[#B3B5BD] text-base">
          Policy
        </label>
        <input
          type="text"
          name="policy"
          id="policy"
          ref={policyRef}
          className="focus:bg-transparent bg-[#272832] focus:outline-white focus:outline rounded-md h-11 text-base px-3"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="Artist name" className="text-[#B3B5BD] text-base">
          Artist Name
        </label>
        <input
          type="text"
          name="Artist name"
          id="Artist name"
          ref={artistNameRef}
          className="focus:bg-transparent bg-[#272832] focus:outline-white focus:outline rounded-md h-11 text-base px-3"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="Artboard Title" className="text-[#B3B5BD] text-base">
          Artboard Title
        </label>
        <input
          type="text"
          name="Artboard Title"
          id="Artboard Title"
          ref={artTitleRef}
          className="focus:bg-transparent bg-[#272832] focus:outline-white focus:outline rounded-md h-11 text-base px-3"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="Location" className="text-[#B3B5BD] text-base">
          Location
        </label>
        <input
          type="text"
          name="Location"
          id="Location"
          ref={locationRef}
          className="focus:bg-transparent bg-[#272832] focus:outline-white focus:outline rounded-md h-11 text-base px-3"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="supply" className="text-[#B3B5BD] text-base">
          Supply
        </label>
        <input
          type="text"
          name="Supply"
          id="Supply"
          ref={supplyRef}
          className="focus:bg-transparent bg-[#272832] focus:outline-white focus:outline rounded-md h-11 text-base px-3"
        />
      </div>
      <div className="flex flex-col col-span-2">
        <label
          htmlFor="Artboard Description"
          className="text-[#B3B5BD] text-base"
        >
          Artboard Description
        </label>
        <textarea
          rows={5}
          name="Artboard Description"
          id="Artboard Description"
          ref={artDescRef}
          className="focus:bg-transparent bg-[#272832] focus:outline-white focus:outline rounded-md text-base px-3"
        />
      </div>
      <div className="flex flex-col col-span-2">
        <label htmlFor="about me" className="text-[#B3B5BD] text-base">
          About Me
        </label>
        <textarea
          rows={5}
          name="aboutMe"
          id=" about me"
          ref={aboutMeRef}
          className="focus:bg-transparent bg-[#272832] focus:outline-white focus:outline h-[150px] rounded-md text-base px-3"
        />
      </div>
      <div className="flex flex-col col-span-2">
        <label htmlFor="Minting details" className="text-[#B3B5BD] text-base">
          Minting Details
        </label>
        <textarea
          rows={5}
          name="mintingDetails"
          id="Minting details"
          ref={mintingDetailRef}
          className="focus:bg-transparent bg-[#272832] focus:outline-white focus:outline h-[150px] rounded-md  text-base px-3"
        />
      </div>
      <div className="grid grid-cols-3 gap-3 col-span-2">
        <div className="flex flex-col">
          <label htmlFor="Twitter" className="text-[#B3B5BD] text-base">
            Twitter
          </label>
          <input
            type="url"
            name="Twitter"
            id="Twitter"
            ref={twitterRef}
            className="focus:bg-transparent bg-[#272832] focus:outline-white focus:outline rounded-md h-11 text-base px-3"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="Discord" className="text-[#B3B5BD] text-base">
            Discord
          </label>
          <input
            type="url"
            name="Discord"
            id="Discord"
            ref={discordRef}
            className="focus:bg-transparent bg-[#272832] focus:outline-white focus:outline rounded-md h-11 text-base px-3"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="Instagram" className="text-[#B3B5BD] text-base">
            Instagram
          </label>
          <input
            type="url"
            name="Instagram"
            id="Instagram"
            ref={instagramRef}
            className="focus:bg-transparent bg-[#272832] focus:outline-white focus:outline rounded-md h-11 text-base px-3"
          />
        </div>
      </div>
      <div className="flex flex-col col-span-2 ">
        <span className="text-[#B3B5BD] text-base">
          Upload your Artboard image
        </span>
        <label
          htmlFor="Artboard image"
          className="focus:bg-transparent bg-[#272832] focus:outline-white focus:outline rounded-md h-[150px] text-base px-3 flex items-center justify-center"
        >
          {artImage && artImageUrl ?
            <Image src={artImageUrl} style={{height: '100%'}} />
            :
            <CameraIcon />
          }
        </label>
        <input
          type="file"
          name="Artboard image"
          id="Artboard image"
          onChange={(e) => setArtImage(e.target.files[0])}
          accept="image/png, image/jpeg"
          hidden
        />
      </div>
      <div className="flex flex-col col-span-2 ">
        <span className="text-[#B3B5BD] text-base">
          Upload your Artboard location image
        </span>
        <label
          htmlFor="Artboard location image"
          className="focus:bg-transparent bg-[#272832] focus:outline-white focus:outline rounded-md h-[150px] text-base px-3 flex items-center justify-center"
        >
          {artLocationImage && artLocationImageUrl ?
            <Image src={artLocationImageUrl} style={{height: '100%'}} />
            :
            <CameraIcon />
          }
        </label>
        <input
          type="file"
          name="Artboard location image"
          id="Artboard location image"
          onChange={(e) => setArtLocationImage(e.target.files[0])}
          accept="image/png, image/jpeg"
          hidden
        />
      </div>
      <div className="flex flex-col col-span-2 ">
        <span className="text-[#B3B5BD] text-base">
          Upload your personal/working image
        </span>
        <label
          htmlFor="personal/working image"
          className="focus:bg-transparent bg-[#272832] focus:outline-white focus:outline rounded-md h-[150px] text-base px-3 flex items-center justify-center"
        >
          {personalImage && personalImageUrl ?
            <Image src={personalImageUrl} style={{height: '100%'}} />
            :
            <CameraIcon />
          }
        </label>
        <input
          type="file"
          name="personal/working image"
          id="personal/working image"
          onChange={(e) => setPersonalImage(e.target.files[0])}
          accept="image/png, image/jpeg"
          hidden
        />
      </div>
      <footer className=" flex justify-center gap-6  col-span-2">
        <button
          onClick={hideFormHandler}
          className="px-[20px] py-[10px] border border-white rounded-md text-sm"
        >
          Cancel
        </button>
        <button className="px-[20px] py-[10px] bg-[#4C66F0] rounded-md text-sm">
          Create
        </button>
      </footer>
    </form>
  );
};

export default GeneralDescForm;
