import {useCallback, useState} from 'react';
import {useLoaderData} from 'remix';

// const getAdvice = async () => {
//   return await (await fetch('https://api.adviceslip.com/advice')).json();
// };

// export const loader = async () => {
//   return getAdvice();
// };

export default function Index() {
  // let advice = useLoaderData();
  const [adviceState, setAdviceState] = useState({
    slip: {
      id: 18,
      advice: "Don't judge a book by its cover, unless it has a synopsis on the back.",
    },
  });

  const fetchAdvice = useCallback(async () => {
    const newAdvice = await (
      await fetch('https://api.adviceslip.com/advice', {cache: 'no-cache'})
    ).json();
    setAdviceState(newAdvice);
  }, []);

  return (
    adviceState && (
      <div className="grid h-screen place-items-center bg-[#202733] px-4 font-extrabold">
        <div className="relative w-full rounded-[10px] bg-[#313A48] px-6 pt-10 pb-16 text-center sm:max-w-[540px] sm:px-12 sm:pt-12 sm:pb-[72px]">
          <span className="text-[11px] tracking-[3.46px] text-[#53FFAA]">
            ADVICE #{adviceState.slip.id}
          </span>

          <p className="mt-6 text-[24px] tracking-[-0.26px] text-[#CEE3E9]">
            “{adviceState.slip.advice}”
          </p>

          <svg
            className="mt-6 sm:hidden"
            width="295"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fillRule="evenodd">
              <path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z" />
              <g transform="translate(138)" fill="#CEE3E9">
                <rect width="6" height="16" rx="3" />
                <rect x="14" width="6" height="16" rx="3" />
              </g>
            </g>
          </svg>

          <svg
            className="mt-10 hidden sm:block"
            width="444"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fillRule="evenodd">
              <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" />
              <g transform="translate(212)" fill="#CEE3E9">
                <rect width="6" height="16" rx="3" />
                <rect x="14" width="6" height="16" rx="3" />
              </g>
            </g>
          </svg>

          <div className="group absolute inset-x-0 mx-auto mt-8 w-full rounded-full">
            <div className="relative">
              <div className="absolute -inset-0.5 z-0 mx-auto h-[64px] w-[64px] rounded-full bg-[#53FFAA] opacity-0 blur-lg duration-200 group-hover:opacity-100"></div>

              <button className="relative rounded-full bg-[#53FFAA] p-5" onClick={fetchAdvice}>
                <svg className="z-1" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
                    fill="#202733"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
