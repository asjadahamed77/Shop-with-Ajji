import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>
        <div>
            <h1 className='text-xl mb-5'>ShopWith-Ajji</h1>
            <p className='w-full md:w-2/3 text-gray-600'>We believe clothing is more than just fabric—it's an expression of who you are. Our mission is to bring you stylish, high-quality, and affordable fashion that makes you look and feel your best.</p>
        </div>
        <div>
            <p className='font-medium text-xl mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div >
            <p className='font-medium text-xl mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+94 76 125 7751</li>
                <li>shopWithAjji@gmail.com</li>
                
            </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright @2024 ShopWith-Ajji - All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
