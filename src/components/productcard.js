
export default function Home({title, description, bg}) {
    const descriptions = {
      about: "Gawsia International Trade believes in serving the people and the country, not only in doing business and making profit. Our concern is to offer the best possible services and provide products to customers for attaining their full satisfaction. We, Gawsia International Trade, provide the best quality circular knitting machine. We are the only authorised dealer of Quanzhou Buen-Knit Machinery Co., Limited in Bangladesh.",
      services : "In the world of revolution, we want to serve the best quality circular knitting machine (Buen-Knit) in Bangladesh. We always try to be connected with our clients and give the best service. We have high production capacity, good machine performance, a professional technical team, competitive pricing and 1-year warranty support."
    }
    return (
      <div className="w-11/12 h-4/5 bg-white rounded-2xl shdw p-6 flex flex-col items-center">
        <div className="w-2/3 aspect-square rounded-xl ">
          <div className="w-full h-full overflow-hidden rounded-lg">
          <img src={bg} className="w-full h-full hover:scale-110 duration-200 rounded-lg hover:rounded-lg"/>
          </div>
        </div>
        <div className="w-full h-full p-4 ">
            <h1 className="text-gray-700 text-xl font-black uppercase">{title}</h1>
            <br />
            <p className="text-gray-700 text-xl text-justify">{description}</p>
        </div>
        <div className="w-full h-1/5 flex justify-end items-center">
        <a href="#" className="text-lg text-white bg-gray-800 px-8 py-3 text-center hover:scale-90 hover:bg-gray-700 duration-200 rounded">Read More</a>
        </div>
      </div>
    );
  }
  