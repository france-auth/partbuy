import Link from "next/link"

const MailSvg: React.FC<React.SVGProps<SVGSVGElement>> = ( props ) => {
    return (
      <Link href={'mailto:partbuyrealestate@gmail.com'} passHref legacyBehavior>
        <svg 
        width="16" 
        height="15" 
        viewBox="0 0 16 15" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path 
          d="M2.33545 4.413L8.3332 7.4115L14.3309 4.413C14.3087 4.03083 14.1413 3.67162 13.8628 3.40892C13.5844 3.14622 13.216 2.99993 12.8332 3H3.8332C3.45039 2.99993 3.08203 3.14622 2.80358 3.40892C2.52513 3.67162 2.35765 4.03083 2.33545 4.413Z" 
          fill="currentColor"
        />
        <path 
          d="M14.3333 6.0885L8.33325 9.0885L2.33325 6.0885V10.5C2.33325 10.8978 2.49129 11.2794 2.77259 11.5607C3.0539 11.842 3.43543 12 3.83325 12H12.8333C13.2311 12 13.6126 11.842 13.8939 11.5607C14.1752 11.2794 14.3333 10.8978 14.3333 10.5V6.0885Z" 
          fill="currentColor"
        />
      </svg>
      </Link>
  )
}

export default MailSvg