import Header from "components/Header";
import Footer from "components/Footer";
import Head from "next/head";
import { useEffect, useState } from "react";
import { sanityClient } from "../sanity";
import { useRouter } from "next/router";
import SystemGallery from "components/SystemGallery";
import { MdOutlineRemoveCircleOutline } from "react-icons/md";

const Systems = ({ tags, categories, all, commercials, homes }) => {
  const [select, setSelect] = useState("commercial");
  const [searchType, setSearchType] = useState("gym info");
  const [selectedTags, setSelectedTags] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchedItems, setSearchedItems] = useState([]);
  const [search, setSearch] = useState("");
  const route = useRouter();

  const [readMore1, setReadMore1] = useState(false);
  const [readMore2, setReadMore2] = useState(false);

  useEffect(() => {
    let items = [];
    if (select === "all") {
      all.map((item) => {
        let allIncluded = [];
        item.tags?.filter((itemTag) => {
          selectedTags.filter(
            (tag) => tag === itemTag.title && allIncluded.push(true)
          );
          allIncluded.length === selectedTags.length && items.push(item);
        });
        item.categories?.filter((itemTag) => {
          selectedTags.filter(
            (tag) => tag === itemTag.title && allIncluded.push(true)
          );
          allIncluded.length === selectedTags.length && items.push(item);
        });
      });
    }
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

      const title = item.title;

      const matchedGym = addGymInfo
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchedTitle = title.toLowerCase().includes(search.toLowerCase());

      return (
        (searchType === "title" ? matchedTitle : matchedGym) && items.push(item)
      );
    });

    setSearchedItems([...items]);
  }, [filteredItems, search, searchType]);

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

      <div className="mt-36 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 items-center mx-6 md:mx-14 text-lg md:text-xl font-semibold border-2 border-ffsgPink text-ffsgPink uppercase">
          <div
            onClick={() => {
              route.push("/systems?sys=all");
            }}
            className={`${
              select === "all"
                ? "col-span-2 md:col-span-1 text-center flex-[0.4] bg-ffsgPink text-white py-3"
                : "col-span-2 md:col-span-1 text-center flex-[0.4] py-3 hover:bg-ffsgLightPink cursor-pointer"
            }`}
          >
            <p>All</p>
          </div>
          <div
            onClick={() => {
              route.push("/systems?sys=commercial");
            }}
            className={`${
              select === "commercial"
                ? "text-center flex-1 bg-ffsgPink text-white py-3"
                : "text-center flex-1 py-3 hover:bg-ffsgLightPink cursor-pointer"
            }`}
          >
            <p>Commercial</p>
          </div>
          <div
            onClick={() => {
              route.push("/systems?sys=home");
            }}
            className={`${
              select === "home"
                ? " text-center flex-1 bg-ffsgPink text-white py-3"
                : " text-center flex-1 py-3 hover:bg-ffsgLightPink cursor-pointer"
            }`}
          >
            <p>Home</p>
          </div>
        </div>
        <div className="text-center px-6 md:px-16 mt-10 mx-auto">
          <h1 className="text-3xl font-bold uppercase">
            {select === "commercial" && "Commercial Systems"}
            {select === "home" && "Home Systems"}
            {select === "all" && "All Systems"}
          </h1>

          <div className="mt-6 text-gray-500">
            <h3 className="font-semibold">
              {select === "commercial" && "WHAT DO WE CONSIDER A LARGE SPACE?"}
              {select === "home" && "WHAT DO WE CONSIDER A SMALL SPACE?"}
            </h3>
            <p className={readMore1 ? "line-clamp-none" : "line-clamp-2"}>
              {select === "commercial" &&
                "Our large sensory gyms are designed from the center out meaning that our therapists can focus their therapy time on eliciting a larger number of sensory responses in each child. The large open play areas enable you to accommodate many children at one time. Children will acclimate with ease and mobility to new stimuli and over time they will gradually increase confidence not only during therapy but also at home and school."}
              {select === "home" &&
                "Our custom-designed, in-home sensory gyms have helped improve the lives of many children. From increased attentiveness to more developed timing, strength, and rhythm, the possibilities are endless with our sensory gyms as a companion. Our gyms bring the comfort and familiarity found at our centers to your home with customized designs that make an immediate impact on your child’s growth. We’re proud to provide this opportunity to our customers"}
              {select === "all" &&
                "Fun Factory Sensory Gym creates a state-of-the-art multi-sensory environment, providing every child positive play in a therapeutic environment. Throughout our building process, our clients can be assured of the level of professionalism, skills, and service of our team. Our systems fit nicely into all kinds of spaces with no shortage of options to keep children engaged."}
            </p>

            <span
              className="text-ffsgPink underline hover:text-ffsgPurple cursor-pointer"
              onClick={() => setReadMore1(!readMore1)}
            >
              {!readMore1 ? "Read more..." : "Read less..."}
            </span>
          </div>
        </div>
        <div className="px-6 md:px-14 mt-10">
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-3 md:space-y-0">
            <div className="flex flex-1">
              <div className="flex-1">
                <input
                  className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-100 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  placeholder={
                    searchType === "title"
                      ? "Search by system title..."
                      : "Search with gym name, address, email or phone number..."
                  }
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
            <div>
              <select
                defaultValue="Select categories"
                onChange={(e) => handleSelectedTags(e)}
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option hidden value="Select categories">
                  Select categories ⮧
                </option>
                {select == "all" &&
                  categories?.map((tag) => (
                    <option value={tag.title} key={tag._id}>
                      {tag.title}
                    </option>
                  ))}
                {select == "all" &&
                  tags?.map((tag) => (
                    <option value={tag.title} key={tag._id}>
                      {tag.title}
                    </option>
                  ))}
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
        <div className="mt-10">
          {select === "all" && (
            <SystemGallery
              systems={search.length > 0 ? searchedItems : filteredItems}
            />
          )}
          {select === "commercial" && (
            <SystemGallery
              systems={search.length > 0 ? searchedItems : filteredItems}
            />
          )}
          {select === "home" && (
            <SystemGallery
              systems={search.length > 0 ? searchedItems : filteredItems}
            />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Systems;

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
  const queryAll = `*[_type in ['commercial', 'home']] | order(publishedAt desc) {
    _type,
    _id,
    title,
    gallery,
    slug,
    gymInformation,
    categories[]->,
    tags[]->
  }
  `;
  const queryCommercial = `*[_type == 'commercial'] | order(publishedAt desc) {
    _type,
    _id,
    title,
    gallery,
    slug,
    gymInformation,
    tags[]->
  }
  `;
  const queryHome = `*[_type == 'home'] | order(publishedAt desc)  {
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
  const all = await sanityClient.fetch(queryAll);
  const commercials = await sanityClient.fetch(queryCommercial);
  const homes = await sanityClient.fetch(queryHome);

  return {
    props: {
      tags,
      categories,
      all,
      commercials,
      homes,
    },
  };
};
