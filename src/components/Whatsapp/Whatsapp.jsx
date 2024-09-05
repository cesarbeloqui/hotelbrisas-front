import Wp from "@icons/wp.svg?react";

const Whatsapp = () => {
  return (
    <a
      href="https://wa.me/59893955795?text=Hola!%20Te%20escribo%20desde%20la%20web,%20quisiera%20consultarles%20"
      className="block fixed bottom-[30px] right-[30px] z-50"
    >
      <i className="block h-[50px] w-[50px] transition-transform duration-500 hover:scale-110">
        <Wp />
      </i>
    </a>
  );
};
export default Whatsapp;
