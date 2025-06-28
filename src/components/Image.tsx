type propsType = {
  dog: string;
  index: number;
};

const Image = ({ dog, index }: propsType) => {
  return (
    <li key={index} className="w-96 h-96">
      <img
        className="rounded-2xl shadow-2xl w-full h-full object-fill"
        src={dog}
        alt="picture of dog"
      />
    </li>
  );
};

export default Image;
