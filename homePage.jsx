import TogglePage from "./togglePage";

const Home = () => {
  return (
    <>
      <main>
        <header>
          <nav className=" bg-[#202022] w-[1480px] flex items-center justify-between pr-5 pl-5 h-[70px] text-white ">
            <div>
              <p>Onebox</p>
            </div>
            <div className="flex justify-between border border-red-600 gap-10">
              <TogglePage/>
              <p>Tim's Workspace</p>
            </div>
          </nav>
        </header>
<section className="right w-[300px]">
    

</section>


      </main>
    </>
  );
};
export default Home;
