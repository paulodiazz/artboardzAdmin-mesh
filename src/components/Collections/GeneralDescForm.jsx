import React, { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import CameraIcon from "../../Assets/Icons/CameraIcon";
import { UIActions } from "../../store/redux-store/UI-slice";
import Image from "next/image";

const GeneralDescForm = () => {
  const policyRef = useRef();
  const artistNameRef = useRef();
  const artTitleRef = useRef();
  const mintDateRef = useRef();
  const mintPriceRef = useRef();
  const newReleaseRef = useRef();
  const supplyRef = useRef();
  const royaltyRef= useRef();
  const countryRef= useRef();
  const cityRef= useRef();
  const NMKRRef= useRef();
  const JPGRef= useRef();
  const artDescRef = useRef();
  const aboutMeRef = useRef();
  const mintingDetailRef = useRef();
  const twitterRef = useRef();
  const discordRef = useRef();
  const instagramRef = useRef();
  const [Banner, setBanner] = useState(null);
  const [Artist, setArtist] = useState(null);
  const [digitalArtboard, setdigitalArtboard] = useState(null);
  const [physicalArtboard, setphysicalArtboard] = useState(null);
  const dispatch = useDispatch();

  // image preview
  const [BannerUrl, setBannerUrl] = useState(null);
  const [ArtistUrl, setArtistUrl] = useState(null);
  const [digitalArtboardUrl, setdigitalArtboardUrl] = useState(null);
  const [physicalArtboardUrl, setphysicalArtboardUrl] = useState(null);
  useEffect(() => {
    if (Banner) {
      setBannerUrl(URL.createObjectURL(Banner));
    }
    if (Artist) {
      setArtistUrl(URL.createObjectURL(Artist));
    }
    if (digitalArtboard) {
      setdigitalArtboardUrl(URL.createObjectURL(digitalArtboard));
    }
    if (physicalArtboard) {
      setphysicalArtboardUrl(URL.createObjectURL(physicalArtboard));
    }
    console.log("BannerUrl: ", BannerUrl)
    console.log("ArtistUrl", ArtistUrl)
    console.log("digitalArtboardUrl: ", digitalArtboardUrl)
    console.log("physicalArtboardUrl: ", physicalArtboardUrl)
  }, [Banner, Artist, digitalArtboard, physicalArtboard]);

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
      mintDate: mintDateRef.current.value,
      mintPrice: mintPriceRef.current.value,
      newrelease: newReleaseRef.current.value,
      supply: supplyRef.current.value,
      royalty: royaltyRef.current.value,
      country: countryRef.current.value,
      NMKR: NMKRRef.current.value,
      JPG: JPGRef.current.value,
      city: cityRef.current.value,
      artDescription: artDescRef.current.value,
      aboutMe: aboutMeRef.current.value,
      mintingDetail: mintingDetailRef.current.value,
      twitter: twitterRef.current.value,
      discord: discordRef.current.value,
      instagram: instagramRef.current.value,
      Banner: Banner,
      Artist: Artist,
      digitalArtboard: digitalArtboard,
      physicalArtboard: physicalArtboard,
    
    };
  };

  return (
    <form className="grid grid-cols-3 gap-4" onSubmit={formSubmitHandler}>
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
        <label htmlFor="Mint Date" className="text-[#B3B5BD] text-base">
          Mint Date
        </label>
        <input
          type="text"
          name="Artist name"
          id="Artist name"
          ref={mintDateRef}
          className="focus:bg-transparent bg-[#272832] focus:outline-white focus:outline rounded-md h-11 text-base px-3"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="Mint Price" className="text-[#B3B5BD] text-base">
          Mint Price
        </label>
        <input
          type="text"
          name="Artist name"
          id="Artist name"
          ref={mintPriceRef}
          className="focus:bg-transparent bg-[#272832] focus:outline-white focus:outline rounded-md h-11 text-base px-3"
        />
      </div>
      
      <div className="flex flex-col">
        <label htmlFor="Supply" className="text-[#B3B5BD] text-base">
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
      <div className="flex flex-col">
        <label htmlFor="royalty" className="text-[#B3B5BD] text-base">
          Royalty
        </label>
        <input
          type="text"
          name="Royalty"
          id="Royalty"
          ref={royaltyRef}
          className="focus:bg-transparent bg-[#272832] focus:outline-white focus:outline rounded-md h-11 text-base px-3"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="New Release" className="text-[#B3B5BD] text-base">
          New Release
        </label>
        <select
          name="New Release"
          id="New Release"
          ref={newReleaseRef}
          className="focus:bg-transparent bg-[#272832] focus:outline-white focus:outline rounded-md h-11 text-base px-3"
        >
          <option>Yes</option>
          <option>No</option>
          </select>
      </div>
      <div></div>
      <div className="flex flex-col">
        <label htmlFor="country" className="text-[#B3B5BD] text-base">
          Country
        </label>
        <input
          type="text"
          name="country"
          id="Royalty"
          ref={countryRef}
          className="focus:bg-transparent bg-[#272832] focus:outline-white focus:outline rounded-md h-11 text-base px-3"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="city" className="text-[#B3B5BD] text-base">
          City
        </label>
        <input
          type="text"
          name="City"
          id="City"
          ref={cityRef}
          className="focus:bg-transparent bg-[#272832] focus:outline-white focus:outline rounded-md h-11 text-base px-3"
        />
      </div>
      <div></div>
      <div className="flex flex-col">
        <label htmlFor="NMKR" className="text-[#B3B5BD] text-base">
          NMKR mint link
        </label>
        <input
          type="text"
          name="NMKR"
          id="NMKR"
          ref={NMKRRef}
          className="focus:bg-transparent bg-[#272832] focus:outline-white focus:outline rounded-md h-11 text-base px-3"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="JPG" className="text-[#B3B5BD] text-base">
          JPGstore link
        </label>
        <input
          type="text"
          name="JPG"
          id="JPG"
          ref={JPGRef}
          className="focus:bg-transparent bg-[#272832] focus:outline-white focus:outline rounded-md h-11 text-base px-3"
        />
      </div>
      
      <div className="flex flex-col col-span-full">
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
      <div className="flex flex-col col-span-full">
        <label htmlFor="about me" className="text-[#B3B5BD] text-base">
          Artist Description
        </label>
        <textarea
          rows={5}
          name="aboutMe"
          id=" about me"
          ref={aboutMeRef}
          className="focus:bg-transparent bg-[#272832] focus:outline-white focus:outline h-[150px] rounded-md text-base px-3"
        />
      </div>
      <div className="flex flex-col col-span-full">
        <label htmlFor="Minting details" className="text-[#B3B5BD] text-base">
          Other Details
        </label>
        <textarea
          rows={5}
          name="mintingDetails"
          id="Minting details"
          ref={mintingDetailRef}
          className="focus:bg-transparent bg-[#272832] focus:outline-white focus:outline h-[150px] rounded-md  text-base px-3"
        />
      </div>
      
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
      <div className="grid grid-cols-2 gap-3 col-span-full">
      <div className="flex flex-col ">
        <span className="text-[#B3B5BD] text-base ">
          Banner
        </span>
        <label
          htmlFor="Artboard image"
          className="focus:bg-transparent bg-[#272832] focus:outline-white focus:outline rounded-md h-[150px] text-base px-3 flex items-center justify-center overflow-hidden"
        >
          {Banner && BannerUrl ?
            // <Image src={BannerUrl} width={280} height={140}  />
            <div style={{width: '100%', height: '100%', position: 'relative'}}>
  <Image
    alt='Banner'
    src={BannerUrl}
    fill
    objectFit='contain'
  />
</div>
            :
            <CameraIcon />
          }
        </label>
        <input
          type="file"
          name="Artboard image"
          id="Artboard image"
          onChange={(e) => setBanner(e.target.files[0])}
          accept="image/png, image/jpeg"
          hidden
        />
      </div>
      <div className="flex flex-col ">
        <span className="text-[#B3B5BD] text-base">
          Artist
        </span>
        <label
          htmlFor="Artboard location image"
          className="focus:bg-transparent bg-[#272832] focus:outline-white focus:outline rounded-md h-[150px] text-base px-3 flex items-center justify-center"
        >
          {Artist && ArtistUrl ?
          <div style={{width: '100%', height: '100%', position: 'relative'}}>
            <Image src={ArtistUrl} fill
    objectFit='contain' />
            </div>
            :
            <CameraIcon />
          }
        </label>
        <input
          type="file"
          name="Artboard location image"
          id="Artboard location image"
          onChange={(e) => setArtist(e.target.files[0])}
          accept="image/png, image/jpeg"
          hidden
        />
      </div>
      <div className="flex flex-col ">
        <span className="text-[#B3B5BD] text-base">
          Digital Artboard
        </span>
        <label
          htmlFor="personal/working image"
          className="focus:bg-transparent bg-[#272832] focus:outline-white focus:outline rounded-md h-[150px] text-base px-3 flex items-center justify-center"
        >
          {digitalArtboard && digitalArtboardUrl ?
          <div style={{width: '100%', height: '100%', position: 'relative'}}>
            <Image src={digitalArtboardUrl} fill
    objectFit='contain' />
            </div>
            :
            <CameraIcon />
          }
        </label>
        <input
          type="file"
          name="personal/working image"
          id="personal/working image"
          onChange={(e) => setdigitalArtboard(e.target.files[0])}
          accept="image/png, image/jpeg"
          hidden
        />
      </div>
      <div className="flex flex-col  ">
        <span className="text-[#B3B5BD] text-base">
        Physical Artboard
        </span>
        <label
          htmlFor="Physical Artboard"
          className="focus:bg-transparent bg-[#272832] focus:outline-white focus:outline rounded-md h-[150px] text-base px-3 flex items-center justify-center"
        >
          {physicalArtboard && physicalArtboardUrl ?
          <div style={{width: '100%', height: '100%', position: 'relative'}}>
            <Image src={physicalArtboardUrl} fill
    objectFit='contain'/>
            </div>
            :
            <CameraIcon />
          }
        </label>
        <input
          type="file"
          name="Physical Artboard"
          id="Physical Artboard"
          onChange={(e) => setphysicalArtboard(e.target.files[0])}
          accept="image/png, image/jpeg"
          hidden
        />
      </div>
      </div>
      <div className="grid grid-cols-2 gap-3 col-span-full">
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
      </div>
    </form>
  );
};

export default GeneralDescForm;
