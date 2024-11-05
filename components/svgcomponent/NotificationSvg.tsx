import React from 'react'

const NotificationSvg: React.FC<React.SVGProps<SVGSVGElement>> = ( props ) => {
  return (
    <div>
      <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M18.75 21.75H25L23.2437 19.9938C23.0079 19.7578 22.8208 19.4778 22.6932 19.1696C22.5656 18.8614 22.4999 18.5311 22.5 18.1975V14.25C22.5002 12.6987 22.0195 11.1854 21.124 9.91861C20.2286 8.65179 18.9625 7.6937 17.5 7.17625V6.75C17.5 6.08696 17.2366 5.45107 16.7678 4.98223C16.2989 4.51339 15.663 4.25 15 4.25C14.337 4.25 13.7011 4.51339 13.2322 4.98223C12.7634 5.45107 12.5 6.08696 12.5 6.75V7.17625C9.5875 8.20625 7.5 10.985 7.5 14.25V18.1988C7.5 18.8713 7.2325 19.5175 6.75625 19.9938L5 21.75H11.25M18.75 21.75V23C18.75 23.9946 18.3549 24.9484 17.6517 25.6517C16.9484 26.3549 15.9946 26.75 15 26.75C14.0054 26.75 13.0516 26.3549 12.3483 25.6517C11.6451 24.9484 11.25 23.9946 11.25 23V21.75M18.75 21.75H11.25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  )
}

export default NotificationSvg