interface Props {
  action: (param: boolean) => void;
  title: string;
  message: string;
}

export const ModalMessage = ({ action, title, message }: Props) => {
  return (
    <div
      id={"ModalMessage"}
      className="relative p-4 bg-white rounded-lg shadow
    dark:bg-gray-800 sm:p-5 max-[426px]:w-[280px] max-[769px]:w-[350px]
    w-[400px]"
    >
      <div className="flex justify-between mb-4 rounded-t sm:mb-5">
        <div className="text-lg text-gray-900 md:text-xl dark:text-white">
          <h3 className="font-semibold ">{title}</h3>
        </div>
        <div>
          <button
            type="button"
            onClick={() => action(false)}
            className="text-gray-400 bg-transparent hover:bg-gray-200
          hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex
          dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-toggle="readProductModal"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1
              0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10
              11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293
              5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>
      </div>
      <dl>
        <dd
          className="mb-4 font-light text-gray-500 sm:mb-5
        dark:text-gray-400"
        >
          {message}
        </dd>
      </dl>
      <div className="flex justify-start items-center">
        <button
          onClick={() => action(false)}
          type="button"
          className="inline-flex items-center text-white bg-red-600
        hover:bg-red-500 active:bg-red-700 font-medium rounded-lg
        text-sm px-5 py-2.5 text-center"
        >
          Aceptar
        </button>
      </div>
    </div>
  );
};
