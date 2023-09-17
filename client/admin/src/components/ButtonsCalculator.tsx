interface Props{
  children:JSX.Element;
}

export const ButtonsCalculator = ({children}:Props) => {
  return (
    <section className="flex flex-wrap flex-row w-[280px] m-2">
      {children}
    </section>
  );
};
