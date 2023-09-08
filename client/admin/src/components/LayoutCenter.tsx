interface Props {
  children: JSX.Element;
}

export const LayoutCenter = ({ children }: Props) => {
  return (
    <section
      className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center
    bg-gray-50 dark:bg-gray-900"
    >
      {children}
    </section>
  );
};
