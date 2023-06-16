export default function Modal({ open, onClose, children, title }) {
  return (
    <>
      {/* <!-- Main modal --> */}
      <>
        <div
          id="staticModal"
          data-modal-backdrop="static"
          tabIndex="-1"
          aria-hidden="true"
          className={`fixed top-0 left-0 right-0 z-50 ${
            open ? 'block' : 'hidden'
          }  p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full bg-black/50 w-screen h-screen flex justify-center`}
          onMouseDown={onClose}
        >
          <div className="relative w-[320px]   max-h-full">
            {/* <!-- Modal content --> */}
            <div
              className="relative bg-white rounded-lg shadow dark:bg-gray-700 "
              onMouseDown={e => e.stopPropagation()}
            >
              {/* <!-- Modal header --> */}
              <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {title}
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="staticModal"
                  onClick={onClose}
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              {/* <!-- Modal body --> */}
              <div className="p-6 space-y-6 ">{children}</div>
              {/* <!-- Modal footer --> */}
              {open && (
                <div
                  className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600"
                  data-modal-hide="staticModal"
                />
              )}
            </div>
          </div>
        </div>
      </>
    </>
  );
}
