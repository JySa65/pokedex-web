// "use client";

import Image from "next/image";

interface Props {
  isModal?: boolean;
}

const Loader = ({ isModal }: Props) => {
  return (
    <div className="containerLoader">
      <span>
        <Image
          src="/img/animation-logo.gif"
          alt="pokeball"
          width={isModal ? 150 : 200}
          height={isModal ? 150 : 200}
        />
        <p>Cargando...</p>
      </span>
    </div>
  );
};

export default Loader;
