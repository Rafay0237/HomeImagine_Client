import React from 'react'
import DepartmentCardRow from '../Components/DepartmentCardRow'

const HomePage = () => {
  return (
    <div className='flex flex-col min-h-[80vh] '>

      <div className='w-[80%] mx-auto mt-16  '>
        <p className='font-lightbold text-[22px] mb-4'>Shop by Department</p>
        <DepartmentCardRow data={dummyData} sales={true} homePage={true} 
        endPoint={"/shop/"}/>
      </div>

      <div className='w-[80%] mx-auto mt-12  '>
        <p className='font-lightbold text-[22px] mb-4'>Contact a Local Professional</p>
        <DepartmentCardRow data={dummyData} homePage={true} endPoint={"/pros/"}/>
      </div>

      <div className='w-[80%] mx-auto mt-12 mb-20 '>
        <p className='font-lightbold text-[22px] mb-4'>Spring Renovation Sale</p>
        <DepartmentCardRow data={dummyData}  homePage={true} endPoint={"/sale/"}/>
      </div>

    </div>
  )
}

let dummyData = [
  {
    img: "https://st.hzcdn.com/fimgs/fa71523e0e866093_1484-w154-h102-b1-p10--.jpg",
    title: "Furniture",
  },
  {
    img: "https://st.hzcdn.com/fimgs/6e41c6a40b27ca42_8520-w154-h102-b1-p10--.jpg",
    title: "Outdoor",
  },
  {
    img: "https://st.hzcdn.com/fimgs/77c190e3014e9b6b_1688-w154-h102-b1-p10--.jpg",
    title: "Bathroom",
  },
  {
    img: "https://st.hzcdn.com/fimgs/3ea18d5c0f907a76_1832-w154-h102-b1-p10--.jpg",
    title: "Kitchen and Dining",
  },
  {
    img: "https://st.hzcdn.com/fimgs/219136950e828eee_5447-w154-h102-b1-p10--.jpg",
    title: "Living Room",
  },
  {
    img: "https://st.hzcdn.com/fimgs/aa41bf5404491284_1990-w154-h102-b1-p10--.jpg",
    title: "Home Improvement",
  },
  {
    img: "https://st.hzcdn.com/fimgs/c631c1a40fb6bae2_1291-w154-h102-b1-p10--.jpg",
    title: "Lightning",
  },
  {
    img: "https://st.hzcdn.com/fimgs/7ec1d2f00142a0a2_8061-w154-h102-b1-p10--.jpg",
    title: "Home Decor",
  },
  {
    img: "https://st.hzcdn.com/fimgs/0811e8330196a2fa_3931-w154-h102-b1-p10--.jpg",
    title: "Bedroom",
  },
  {
    img: "https://st.hzcdn.com/fimgs/3af12d7d0c58c42a_0085-w154-h102-b1-p10--.jpg",
    title: "Storage & Organization",
  },
];

export default HomePage
