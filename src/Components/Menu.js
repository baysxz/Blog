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
          {/* <li>
            <a>
              <p>Change Theme</p>
              <input
                type='checkbox'
                value='coffee'
                className='toggle theme-controller'
              />
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  );
};
