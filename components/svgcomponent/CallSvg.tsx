import Link from "next/link"

const CallSvg: React.FC<React.SVGProps<SVGSVGElement>> = ( props ) => {
  return (
    <Link href={'tel:+1234567890'} passHref legacyBehavior>
      <svg 
        width="16" 
        height="15" 
        viewBox="0 0 16 15" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        >
        <path 
          d="M2 2.25C2 2.05109 2.07902 1.86032 2.21967 1.71967C2.36032 1.57902 2.55109 1.5 2.75 1.5H4.36475C4.54228 1.50008 4.71402 1.56314 4.84943 1.67794C4.98484 1.79275 5.07514 1.95187 5.10425 2.127L5.65925 5.45325C5.68577 5.61166 5.66073 5.77441 5.58782 5.91752C5.51491 6.06064 5.39799 6.17657 5.25425 6.24825L4.09325 6.828C4.50958 7.85974 5.12963 8.79696 5.91633 9.58367C6.70304 10.3704 7.64026 10.9904 8.672 11.4067L9.2525 10.2458C9.32414 10.1022 9.43995 9.98532 9.58291 9.91242C9.72588 9.83952 9.88845 9.8144 10.0468 9.84075L13.373 10.3958C13.5481 10.4249 13.7072 10.5152 13.8221 10.6506C13.9369 10.786 13.9999 10.9577 14 11.1353V12.75C14 12.9489 13.921 13.1397 13.7803 13.2803C13.6397 13.421 13.4489 13.5 13.25 13.5H11.75C6.365 13.5 2 9.135 2 3.75V2.25Z" 
          fill="currentColor"
        />
      </svg>
    </Link>
  )
}

export default CallSvg