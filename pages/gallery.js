import Header from "components/Header";
import Footer from "components/Footer";
import Head from "next/head";
import { useEffect, useState } from "react";
import { sanityClient } from "../sanity";
import { useRouter } from "next/router";
import SystemGallery from "components/SystemGallery";
import { MdOutlineRemoveCircleOutline } from "react-icons/md";

const Gallery = ({ tags, categories, commercials, homes }) => {
  const [select, setSelect] = useState("commercial");
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchedItems, setSearchedItems] = useState([]);
  const [search, setSearch] = useState("");
  const route = useRouter();

  const states = [
    { value: "AL", label: "Alabama" },
    { value: "AK", label: "Alaska" },
    { value: "AZ", label: "Arizona" },
    { value: "AR", label: "Arkansas" },
    { value: "CA", label: "California" },
    { value: "CO", label: "Colorado" },
    { value: "CT", label: "Connecticut" },
    { value: "DE", label: "Delaware" },
    { value: "DC", label: "District Of Columbia" },
    { value: "FL", label: "Florida" },
    { value: "GA", label: "Georgia" },
    { value: "HI", label: "Hawaii" },
    { value: "ID", label: "Idaho" },
    { value: "IL", label: "Illinois" },
    { value: "IN", label: "Indiana" },
    { value: "IA", label: "Iowa" },
    { value: "KS", label: "Kansas" },
    { value: "KY", label: "Kentucky" },
    { value: "LA", label: "Louisiana" },
    { value: "ME", label: "Maine" },
    { value: "MD", label: "Maryland" },
    { value: "MA", label: "Massachusetts" },
    { value: "MI", label: "Michigan" },
    { value: "MN", label: "Minnesota" },
    { value: "MS", label: "Mississippi" },
    { value: "MO", label: "Missouri" },
    { value: "MT", label: "Montana" },
    { value: "NE", label: "Nebraska" },
    { value: "NV", label: "Nevada" },
    { value: "NH", label: "New Hampshire" },
    { value: "NJ", label: "New Jersey" },
    { value: "NM", label: "New Mexico" },
    { value: "NY", label: "New York" },
    { value: "NC", label: "North Carolina" },
    { value: "ND", label: "North Dakota" },
    { value: "OH", label: "Ohio" },
    { value: "OK", label: "Oklahoma" },
    { value: "OR", label: "Oregon" },
    { value: "PA", label: "Pennsylvania" },
    { value: "RI", label: "Rhode Island" },
    { value: "SC", label: "South Carolina" },
    { value: "SD", label: "South Dakota" },
    { value: "TN", label: "Tennessee" },
    { value: "TX", label: "Texas" },
    { value: "UT", label: "Utah" },
    { value: "VT", label: "Vermont" },
    { value: "VA", label: "Virginia" },
    { value: "WA", label: "Washington" },
    { value: "WV", label: "West Virginia" },
    { value: "WI", label: "Wisconsin" },
    { value: "WY", label: "Wyoming" },
  ];

  useEffect(() => {
    let items = [];
    if (select === "commercial") {
      commercials.map((item) => {
        let allIncluded = [];
        item.tags.filter((itemTag) => {
          selectedTags.filter(
            (tag) => tag === itemTag.title && allIncluded.push(true)
          );
          allIncluded.length === selectedTags.length && items.push(item);
        });
      });
    }
    if (select === "home") {
      homes.map((item) => {
        let allIncluded = [];
        item.categories.filter((itemTag) => {
          selectedTags.filter(
            (tag) => tag === itemTag.title && allIncluded.push(true)
          );
          allIncluded.length === selectedTags.length && items.push(item);
        });
      });
    }

    // [...new Set(items)] creates an unique set of array
    setFilteredItems([...new Set(items)]);
  }, [selectedTags, select]);

  useEffect(() => {
    let items = [];

    filteredItems.filter((item) => {
      const addGymInfo =
        item?.gymInformation?.location +
        " " +
        item?.gymInformation?.name +
        " " +
        item?.gymInformation?.email +
        " " +
        item?.gymInformation?.phone;

      const matchedGym = addGymInfo
        .toLowerCase()
        .includes(search.toLowerCase());

      return matchedGym && items.push(item);
    });

    setSearchedItems([...items]);
  }, [filteredItems, search]);

  useEffect(() => {
    setSelectedState("");
  }, [search]);

  useEffect(() => {
    let items = [];

    filteredItems.filter((item) => {
      const gymState = item?.gymInformation?.location;

      const matchedGym =
        gymState
          ?.toLowerCase()
          .includes(" " + states[selectedState]?.value.toLowerCase() + " ") ||
        gymState
          ?.toLowerCase()
          .includes(" " + states[selectedState]?.label.toLowerCase() + " ");

      return matchedGym && items.push(item);
    });

    setSearchedItems([...items]);
  }, [filteredItems, selectedState]);

  useEffect(() => {
    if (route.query.sys === "home") {
      setSelect(route.query.sys);
    }
    if (route.query.sys === "commercial") {
      setSelect(route.query.sys);
    }
    if (route.query.sys === "all") {
      setSelect(route.query.sys);
    }
  }, [route.query]);

  const handleSelectedTags = (e) => {
    if (selectedTags.includes(e.target.value)) {
      return;
    } else {
      setSelectedTags([...selectedTags, e.target.value]);
      e.target.value = "Select categories";
    }
  };

  const handleSplice = (i) => {
    selectedTags.splice(i, 1);
    setSelectedTags([...selectedTags]);
  };

  return (
    <div>
      <Head>
        <title>
          Custom Sensory Gym | Commercial Sensory Gyms | Home Sensory Gym
        </title>

        <meta
          name="description"
          content="Fun Factory Sensory Gym provides custom designed commercial sensory gyms that we design and install. Our gyms are built to challenge and stimulate a child in a safe indoor environment. The versatile large space designs allow for many therapists and children to use at the same time."
        ></meta>
      </Head>

      <Header StartFromTop={true} />

      <div className="mt-48 max-w-7xl mx-auto">
        <div className="text-center px-6 md:px-16 mt-10 mx-auto">
          <h1 className="text-3xl font-bold uppercase">Recent Installations</h1>

          <div className="mt-3 text-gray-500">
            <p>
              Fun Factory Sensory Gym creates a state-of-the-art multi-sensory
              environment, providing every child positive play in a therapeutic
              environment. Throughout our building process, our clients can be
              assured of the level of professionalism, skills, and service of
              our team. Our systems fit nicely into all kinds of spaces with no
              shortage of options to keep children engaged.
            </p>
          </div>
        </div>
        <div className="rounded-xl mt-6 lg:mt-10 grid grid-cols-2 items-center mx-6 md:mx-14 text-lg md:text-xl font-semibold border-2 border-ffsgPink text-ffsgPink uppercase">
          <div
            onClick={() => {
              setSelectedTags([]);
              setSelect("commercial");
            }}
            className={`${
              select === "commercial"
                ? "text-center flex-1 bg-ffsgPink text-white py-3 rounded-l-lg"
                : "text-center flex-1 py-3 hover:bg-ffsgLightPink cursor-pointer rounded-l-xl"
            }`}
          >
            <p>Clinic</p>
          </div>
          <div
            onClick={() => {
              setSelectedTags([]);
              setSelect("home");
            }}
            className={`${
              select === "home"
                ? " text-center flex-1 bg-ffsgPink text-white py-3 rounded-r-lg"
                : " text-center flex-1 py-3 hover:bg-ffsgLightPink cursor-pointer rounded-r-xl"
            }`}
          >
            <p>Home</p>
          </div>
        </div>

        <div className="px-6 md:px-14 mt-4 lg:mt-8">
          <div className="flex flex-col md:flex-row md:space-x-3 space-y-3 md:space-y-0">
            <div className="flex flex-1">
              <div className="flex-1">
                <input
                  className="appearance-none block w-full bg-ffsgGray text-gray-700 border border-ffsgGray py-3 lg:py-4 px-5 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 rounded-md"
                  type="text"
                  placeholder="Search gym..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
            {select == "commercial" && (
              <div>
                <select
                  onChange={(e) => setSelectedState(e.target.value)}
                  value={selectedState}
                  className="block appearance-none w-full bg-ffsgGray border border-ffsgGray text-gray-700 py-3 lg:py-4 px-5 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 rounded-md"
                >
                  <option value="">States ↲</option>
                  {states.map((state, index) => (
                    <option value={index} key={index}>
                      {state.label}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div>
              <select
                defaultValue="Select categories"
                onChange={(e) => handleSelectedTags(e)}
                className="block appearance-none w-full bg-ffsgGray border border-ffsgGray text-gray-700 py-3 lg:py-4 px-5 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 rounded-md"
              >
                <option hidden value="Select categories">
                  Select {select == "commercial" ? "therapies" : "categories"} ↲
                </option>
                {select == "commercial" &&
                  tags?.map((tag) => (
                    <option value={tag.title} key={tag._id}>
                      {tag.title}
                    </option>
                  ))}
                {select == "home" &&
                  categories?.map((tag) => (
                    <option value={tag.title} key={tag._id}>
                      {tag.title}
                    </option>
                  ))}
              </select>
            </div>
          </div>
          <div className="md:flex md:items-center space-y-1 md:space-y-0 md:space-x-2 mt-4">
            {selectedTags.map((tag, i) => (
              <div
                onClick={() => handleSplice(i)}
                key={tag}
                className="inline-block text-xs text-ffsgPink space-x-1  mr-1 md:mr-0 py-1 px-3 hover:bg-purple-100 hover:border-ffsgPurple hover:text-ffsgPurple cursor-pointer transition-colors duration-150 bg-ffsgLightPink border border-ffsgPink rounded-full"
              >
                <div className="flex space-x-1 items-center">
                  <p>{tag}</p>{" "}
                  <MdOutlineRemoveCircleOutline className="text-lg" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6">
          <SystemGallery
            systems={
              search.length > 0 || selectedState ? searchedItems : filteredItems
            }
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;

export const getServerSideProps = async () => {
  const queryTags = `*[_type == 'tag'] {
    _id,
    title,
  }
  `;
  const queryCategories = `*[_type == 'categories'] {
    _id,
    title,
  }
  `;
  const queryCommercial = `*[_type == 'commercial'] | order(_updatedAt desc) {
    _type,
    _id,
    title,
    gallery,
    slug,
    gymInformation,
    tags[]->
  }
  `;
  const queryHome = `*[_type == 'home'] | order(_updatedAt desc)  {
    _type,
    _id,
    title,
    gallery,
    slug,
    gymInformation,
    categories[]->
  }
  `;

  const tags = await sanityClient.fetch(queryTags);
  const categories = await sanityClient.fetch(queryCategories);
  const commercials = await sanityClient.fetch(queryCommercial);
  const homes = await sanityClient.fetch(queryHome);

  return {
    props: {
      tags,
      categories,
      commercials,
      homes,
    },
  };
};
