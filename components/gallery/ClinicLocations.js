import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
  Autocomplete,
} from "@react-google-maps/api";
import Link from "next/link";
import { MdOutlineRemoveCircleOutline } from "react-icons/md";
import { isMobile } from "react-device-detect";

const ClinicLocations = ({ commercials, tags }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [mapCenter, setMapCenter] = useState({ lat: 39.75, lng: -98.35 });
  const [mapZoom, setMapZoom] = useState(isMobile ? 3 : 4);

  const [selectedTags, setSelectedTags] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker);
  };

  const handlePlaceSelect = (place) => {
    if (place && place.geometry && place.geometry.location) {
      const { lat, lng } = place.geometry.location;
      setMapCenter({ lat: lat(), lng: lng() });
      setMapZoom(9);
    }
  };

  const handleSplice = (i) => {
    selectedTags.splice(i, 1);
    setSelectedTags([...selectedTags]);
  };

  const handleSelectedTags = (e) => {
    if (selectedTags.includes(e.target.value)) {
      return;
    } else {
      setSelectedTags([...selectedTags, e.target.value]);
      e.target.value = "Select categories";
    }
  };

  useEffect(() => {
    let items = [];
    commercials.map((item) => {
      let allIncluded = [];
      item.tags.filter((itemTag) => {
        selectedTags.filter(
          (tag) => tag === itemTag.title && allIncluded.push(true)
        );
        allIncluded.length === selectedTags.length && items.push(item);
      });
    });

    // [...new Set(items)] creates an unique set of array
    setFilteredItems([...new Set(items)]);
  }, [selectedTags]);

  return (
    <div className="px-6 md:px-16 mt-16 lg:mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-7">
        <div className="col-span-3 bg-ffsgPink p-6 lg:p-12 text-sm rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none">
          <div>
            <h2 className="uppercase font-semibold text-2xl text-white">
              Clinic locations
            </h2>
          </div>
          <div className="lg:flex mt-4 lg:mt-6">
            <div className="flex-1 my-auto">
              {!isLoaded ? (
                <p>Loading...</p>
              ) : (
                <Autocomplete
                  onLoad={(autocomplete) => {
                    autocomplete.addListener("place_changed", () => {
                      handlePlaceSelect(autocomplete.getPlace());
                    });
                  }}
                >
                  <input
                    type="text"
                    placeholder="Enter a location"
                    className="w-full focus:outline-none py-2 lg:py-3 px-5 rounded-lg bg-ffsgLightPink"
                  />
                </Autocomplete>
              )}
            </div>

            <div className="mt-3 lg:mt-0">
              <select
                defaultValue="Select categories"
                onChange={(e) => handleSelectedTags(e)}
                className="block appearance-none w-full bg-ffsgGray border border-ffsgGray text-gray-700 py-2 lg:py-3 px-5 lg:ml-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 rounded-md"
              >
                <option hidden value="Select categories">
                  Select therapies ↲
                </option>
                {tags?.map((tag) => (
                  <option value={tag.title} key={tag._id}>
                    {tag.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-1 lg:space-y-2 mt-4">
            {selectedTags.map((tag, i) => (
              <div
                onClick={() => handleSplice(i)}
                key={tag}
                className="inline-block text-xs text-ffsgPink space-x-1  mr-1 py-1 px-3 hover:bg-purple-100 hover:border-ffsgPurple hover:text-ffsgPurple cursor-pointer transition-colors duration-150 bg-ffsgLightPink border border-ffsgPink rounded-full"
              >
                <div className="flex space-x-1 items-center">
                  <p>{tag}</p>{" "}
                  <MdOutlineRemoveCircleOutline className="text-lg" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-4">
          {!isLoaded ? (
            <p>Loading...</p>
          ) : (
            <div className="w-full h-96 md:h-[430px]">
              <GoogleMap
                zoom={mapZoom}
                center={mapCenter}
                mapContainerClassName="h-full w-full rounded-b-xl lg:rounded-r-xl lg:rounded-bl-none"
              >
                {filteredItems.map((marker, index) => (
                  <Marker
                    key={index}
                    position={{
                      lat: marker.gymInformation.geolocation.lat,
                      lng: marker.gymInformation.geolocation.lng,
                    }}
                    onClick={() => handleMarkerClick(marker)}
                  />
                ))}
                {selectedMarker && (
                  <InfoWindow
                    position={{
                      lat: selectedMarker.gymInformation.geolocation.lat,
                      lng: selectedMarker.gymInformation.geolocation.lng,
                    }}
                    onCloseClick={() => setSelectedMarker(null)}
                  >
                    <div className="w-44 lg:w-56">
                      <Link
                        href={`/systems/commercial/${selectedMarker.slug.current}`}
                      >
                        <a>
                          <h2 className="font-medium hover:text-ffsgPink hover:underline cursor-pointer">
                            {selectedMarker.gymInformation.name}
                          </h2>
                        </a>
                      </Link>
                      <p>{selectedMarker.gymInformation.location}</p>
                    </div>
                  </InfoWindow>
                )}
              </GoogleMap>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClinicLocations;
