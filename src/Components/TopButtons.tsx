import { cities } from "@/shared/cities";

// type Props = {
//   setQuery: (value: string) => void;
// };

const TopButtons = (props: any) => {
  return (
    <div className="flex items-center justify-center md:gap-10 gap-4 my-4">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white md:text-lg md:font-medium"
          onClick={() => props.setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
};

export default TopButtons;
