import Image from "next/image";

const recipes = [
  {
    title: "Homemade italian pasta",
    image: "/image/insta1.jpg",
  },
  {
    title: "Baked Bread",
    image: "/image/insta7.jpg",
  },
  {
    title: "Scalops on salt",
    image: "/image/insta3.jpg",
  },
  {
    title: "Fruits on plate",
    image: "/image/insta4.jpg",
  },
  {
    title: "Macaroons",
    image: "/image/insta5.jpg",
  },
  {
    title: "Chocolate tart",
    image: "/image/insta6.jpg",
  },
  {
    title: "Berry Desert",
    image: "/image/insta1.jpg",
  },
  {
    title: "Zucchini Grilled on peper",
    image: "/image/insta1.jpg",
  },
  {
    title: "Chicken Salad",
    image: "/image/insta1.jpg",
  },
];

const RecipeGrid = () => {
  return (
    <section className="w-[90%] mx-auto p-16 mb-8 ">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe, index) => (
          <div key={index} className="flex gap-4 items-start">
            <div className="w-28 h-28 relative flex-shrink-0">
              <Image
                src={recipe.image}
                alt={recipe.title}
                layout="fill"
                objectFit="cover"
                className="rounded"
              />
            </div>
            <div>
              <p className="text-green-600 text-sm font-medium mb-1">
                January 04, 2018
              </p>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {recipe.title}
              </h3>
              <div className="flex items-center mb-1">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.956c.3.922-.755 1.688-1.538 1.118l-3.371-2.449a1 1 0 00-1.175 0l-3.371 2.449c-.783.57-1.838-.196-1.538-1.118l1.287-3.956a1 1 0 00-.364-1.118L2.075 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
                    </svg>
                  ))}
              </div>
              <p className="text-sm text-gray-500">2 Comments</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecipeGrid;
