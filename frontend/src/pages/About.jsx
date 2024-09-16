import React from 'react'
import Title from '../components/Title'
import about_img from '../assets/about_img.png'
import NewsletterBox from '../components/NewsletterBox'
const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={about_img} alt="about" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio consequatur nihil earum dicta nam! Amet fugit cumque sed quaerat quisquam consectetur, corporis quas officiis neque veritatis eius, aliquid officia. Voluptas a nesciunt accusantium. Modi, quas.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque voluptatem iure similique odit, cum ipsam possimus, aliquid tempore soluta adipisci eveniet expedita? Nemo vero quam delectus tenetur quisquam ad nobis, ab cum omnis adipisci possimus ducimus obcaecati ratione. Repellendus, quas!</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat dolorem totam aliquid labore et error quibusdam eveniet autem quos repellendus ullam quisquam veniam, sit alias nisi ab vitae amet. Autem.</p>
          </div>
      </div>
      <div className='text-2xl py-4'>
        <Title text1={'WHY'} text2={"CHOOSE US"} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Quality Assurance:</b>
              <p className='text-gray-600'>Lorem ipsum dolor sit amrsamus quae distinctio asperiores sequi! Cum, iusto obcaecati.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Convenience:</b>
              <p className='text-gray-600'>Lorem ipsum dolor  magni oes aliquam fm! Accusamus quae distinctio asperiores sequi! Cum, iusto obcaecati.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Exceptional Customer Service:</b>
              <p className='text-gray-600'>Lorem ipsum dolor situscipitm fugiat sequi totam! Accusamus quae distinctio asperiores sequi! Cum, iusto obcaecati.</p>
          </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default About
