import ThemeButton from "../components/ThemeButton";

function Home() {
  return (
    <div className="m-2">
      <ThemeButton />
      <p className="bg-white text-2xl">Home Page</p>
      <p className="bg-light-mid text-2xl">Home Page</p>
      <p className="bg-mid text-2xl">Home Page</p>
      <p className="bg-dark-mid text-white text-2xl">Home Page</p>
      <p className="bg-black text-white text-2xl">Home Page</p>
    </div>
  );
}

export default Home;
