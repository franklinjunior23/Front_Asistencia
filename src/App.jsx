import FormSignup from "./components/SignIn/components/FormSignup";


function App() {

  
  return (
    <>
      <main className="bg-slate-950 w-screen min-h-screen grid place-content-center relative">
        <section className="py-8 px-8 w-[350px]">
          <img
            src="https://1.bp.blogspot.com/-0R9ggrRQruU/V9iMiS6bBeI/AAAAAAAA0pk/eC_38nE9-vk2cDw-wBMX2bAmNM19SfzBgCLcB/s1600/ie-1218-san-luis-maria-de-montfort-insignia.png"
            alt=""
            width={200}
            height={100}
            className="block my-8 rounded-3xl m-auto"
          />
          <section>
            <FormSignup/>
          </section>
        </section>
      </main>
      
    </>
  );
}

export default App;
