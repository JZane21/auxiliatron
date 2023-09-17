interface Props {
  value: string;
  id: string;
}

export const CalculatorInput = ({
  value,
  id
}: Props) => {
  

  return (
    <>
      <p
        id = {id}
        className="bg-transparent rounded-lg p-2 m-3 outline-none shadow-md text-white
      placeholder:text-gray-400 border-[0.1px] border-sky-500 w-[250px] h-10
      text-center"
      >
        {value}
      </p>
    </>
  );
};
