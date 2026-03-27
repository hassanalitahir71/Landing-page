import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

const Item = ({ children }) => (
  <Paper style={{ padding: 16, borderRadius: 8, height: "100%" }}>
    {children}
  </Paper>
);

const AboutSection = () => {
  const GridItems = [
    { id: 1, type: "img", img: "/images/G1.jpg" },
    { id: 2, type: "img", img: "/images/G2.jpg" },
    {
      id: 3,
      type: "text",
      content:
        "Figma ipsum component variant main layer. Edit group inspect style thumbnail duplicate connection auto pixel. Prototype clip arrow ellipse create. Blur subtract content flows rectangle edit. Flows pencil fill bullet effect. Layer frame frame clip fill star underline. Opacity rectangle frame flatten image group link.",
      name: "CREATE YOUR BRAND",
    },
    { id: 4, type: "img", img: "/images/G4.jpg" },
    { id: 5, type: "img", img: "/images/G5.jpg" },
    { id: 6, type: "img", img: "/images/G6.jpg" },
    {
      id: 7,
      type: "text",
      content:
        "Figma ipsum component variant main layer. Edit group inspect style thumbnail duplicate connection auto pixel. Prototype clip arrow ellipse create. Blur subtract content flows rectangle edit. Flows pencil fill bullet effect. Layer frame frame clip fill star underline. Opacity rectangle frame flatten image group link.",
      name: "MAKE IT FAMOUS",
    },
    { id: 8, type: "img", img: "/images/G8.jpg" },
    { id: 9, type: "img", img: "/images/G9.jpg" },
  ];

  return (
    <div className="flex flex-col mt-40">
      <div className="bg-black1 flex items-start justify-center">
        <h1 className="m-0 text-Brown1 text-7xl font-bold font-lexend">
          RESULTS TELLS
        </h1>
      </div>

      <div className="bg-Brown1 flex justify-center">
        <h1 className="m-0 text-white text-7xl font-bold font-lexend">
          MORE ABOUT US
        </h1>
      </div>

      <div className="bg-Brown1 p-4 w-full  flex justify-center">
        <Grid
          container
          spacing={5}
          columns={{ xs: 2, sm: 4, md: 12 }}
          className="max-w-4xl max-h-4xl mt-30 mb-30 mx-auto"
        >
          {GridItems.map((item) => (
            <Grid key={item.id} size={{ xs: 1, sm: 2, md: 4 }}>
              <div className="w-full aspect-square">
                {item.type === "text" ? (
                  <div className="flex flex-col justify-center items-center  gap-4 p-4 font-lexend h-full">
                    <h1 className=" text-[20px] text-White1">{item.name}</h1>
                    <p className="text-[12px] text-LigntGray1">
                      {item.content}
                    </p>
                  </div>
                ) : (
                  <img
                    src={item.img}
                    alt=""
                    className="h-full w-full rounded-2xl object-cover"
                  />
                )}
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default AboutSection;
