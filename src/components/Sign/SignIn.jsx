import FormSig from "./components/FormSignup";

function SignIn() {
  return (
    <>
        <section className="py-8 px-8 w-[300px] md:w-[600px] md:grid md:grid-cols-2 md:items-center md:gap-3 ">
          <div>
            <img
              src="https://1.bp.blogspot.com/-0R9ggrRQruU/V9iMiS6bBeI/AAAAAAAA0pk/eC_38nE9-vk2cDw-wBMX2bAmNM19SfzBgCLcB/s1600/ie-1218-san-luis-maria-de-montfort-insignia.png"
              alt=""
              width={200}
              height={100}
              className="block my-8 rounded-3xl m-auto"
            />
          </div>
          <section className="md:order-1">
            <FormSig />
          </section>
        </section>
    </>
  );
}

export default SignIn;
