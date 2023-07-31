import FormSig from "./components/FormSignup"


function SignIn() {
  return (
    <>
    <main className="bg-slate-950/80 w-screen h-screen grid place-content-center ">
    <section className="py-8 px-8 w-[90%] bg-red-400">
      <img
        src="https://1.bp.blogspot.com/-0R9ggrRQruU/V9iMiS6bBeI/AAAAAAAA0pk/eC_38nE9-vk2cDw-wBMX2bAmNM19SfzBgCLcB/s1600/ie-1218-san-luis-maria-de-montfort-insignia.png"
        alt=""
        width={200}
        height={100}
        className="block my-8 rounded-3xl m-auto"
      />
      <section>
      <FormSig/>
      </section>
    </section>
  </main>
    
    </>
  )
}

export default SignIn