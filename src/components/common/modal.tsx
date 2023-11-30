import { BUTTON_TYPE } from "./constant/button_type";

type Props = React.ButtonHTMLAttributes<HTMLAnchorElement> & {
  className?: string;
  children?: React.ReactNode;
  active?: boolean;
}

export default function Modal({ children, className, active, ...props }: Props) {
  return (
    <>
      {active ? (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                {children}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
