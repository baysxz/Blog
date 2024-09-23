import BuregerMenu from "@/Icons/BuregerMenu";

export const Menu = () => {
  return (
    <div className='drawer drawer-end z-30'>
      <input id='my-drawer-4' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content'>
        {/* Page content here */}
        <label htmlFor='my-drawer-4' className=''>
          <BuregerMenu />
        </label>
      </div>
      <div className='drawer-side'>
        <label
          htmlFor='my-drawer-4'
          aria-label='close sidebar'
          className='drawer-overlay'></label>
        <ul className='menu bg-base-200 text-base-content min-h-full w-80 p-4'>
          {/* Sidebar content here */}
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
          <li>
            <a>
              <label className='flex cursor-pointer gap-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'>
                  <circle cx='12' cy='12' r='5' />
                  <path d='M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4' />
                </svg>
                <input
                  type='checkbox'
                  value='synthwave'
                  className='toggle theme-controller'
                />
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'>
                  <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'></path>
                </svg>
              </label>
            </a>
          </li>
        </ul>
      </div>
    </div>

    // <div className="drawer z-20 drawer-end">
    //   <input id="my-drawer" className="drawer-toggle" />

    //   <div className="drawer-content">
    //     <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         width="32"
    //         height="32"
    //         viewBox="0 0 32 32"
    //         fill="none">
    //         <path
    //           d="M26.7333 14.6667H5.26667C4.56711 14.6667 4 15.2338 4 15.9333V16.0667C4 16.7662 4.56711 17.3333 5.26667 17.3333H26.7333C27.4329 17.3333 28 16.7662 28 16.0667V15.9333C28 15.2338 27.4329 14.6667 26.7333 14.6667Z"
    //           fill="#1A1A1A"
    //         />
    //         <path
    //           d="M26.7333 21.3333H5.26667C4.56711 21.3333 4 21.9004 4 22.6V22.7333C4 23.4329 4.56711 24 5.26667 24H26.7333C27.4329 24 28 23.4329 28 22.7333V22.6C28 21.9004 27.4329 21.3333 26.7333 21.3333Z"
    //           fill="#1A1A1A"
    //         />
    //         <path
    //           d="M26.7333 8H5.26667C4.56711 8 4 8.56711 4 9.26667V9.4C4 10.0996 4.56711 10.6667 5.26667 10.6667H26.7333C27.4329 10.6667 28 10.0996 28 9.4V9.26667C28 8.56711 27.4329 8 26.7333 8Z"
    //           fill="#1A1A1A"
    //         />
    //       </svg>
    //     </label>
    //     <div className="drawer-side">
    //       <label
    //         htmlFor="my-drawer"
    //         aria-label="close sidebar"
    //         className="drawer-overlay"></label>
    //       <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
    //         <li>
    //           <a>Sidebar Item 1</a>
    //         </li>
    //         <li>
    //           <a>Sidebar Item 2</a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>
  );
};
