interface Props {
  children: JSX.Element;
}

export const ModalPage = ({ children }: Props) => {
  return (
    <main
      className="fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center
      bg-slate-900 bg-opacity-60 z-10"
    >
      {children}
    </main>
  );
};
