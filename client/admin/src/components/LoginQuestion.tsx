interface Props {
  textLabel: string;
  placeHolder: string;
  value: string;
  setValue: (param: string) => void;
}

export const LoginQuestion = ({
  textLabel,
  placeHolder,
  value,
  setValue,
}: Props) => {
  return (
    <div className="flex flex-col m-2 text-base text-black">
      <label className="p-1 font-medium m-1">{textLabel}</label>
      <input
        className="p-2 rounded-lg m-1 outline-none shadow-md bg-slate-100"
        placeholder={placeHolder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};
