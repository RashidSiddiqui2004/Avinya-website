
import React, { useState } from 'react'
import Card from './Card'
import '../sponsors/styles.css';

function Gallery() {

  const imagesList = [
    2, 4, 3, 4, 5
  ];

  const titles = ['1', '2', '3', '4', '5'];

  const imageDescriptions = [
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati repudiandae maxime sit, ut ab commodi. Odio accusantium omnis corrupti! Aperiam ipsa quas nostrum a,repellat nesciunt recusandae iusto accusantium.  mollitia in Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime debitis inventore quas architecto repellendus expedita dicta qui. Eos at officia ipsum molestiae ullam nulla, minus voluptate iusto! Mollitia, quisquam et?",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati repudiandae maxime sit, ut ab commodi. Odio accusantium omnis corrupti! Aperiam ipsa quas nostrum a,repellat nesciunt recusandae iusto accusantium.  mollitia in Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime debitis inventore quas architecto repellendus expedita dicta qui. Eos at officia ipsum molestiae ullam nulla, minus voluptate iusto! Mollitia, quisquam et?",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati repudiandae maxime sit, ut ab commodi. Odio accusantium omnis corrupti! Aperiam ipsa quas nostrum a,repellat nesciunt recusandae iusto accusantium.  mollitia in Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime debitis inventore quas architecto repellendus expedita dicta qui. Eos at officia ipsum molestiae ullam nulla, minus voluptate iusto! Mollitia, quisquam et?",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati repudiandae maxime sit, ut ab commodi. Odio accusantium omnis corrupti! Aperiam ipsa quas nostrum a,repellat nesciunt recusandae iusto accusantium.  mollitia in Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime debitis inventore quas architecto repellendus expedita dicta qui. Eos at officia ipsum molestiae ullam nulla, minus voluptate iusto! Mollitia, quisquam et?",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati repudiandae maxime sit, ut ab commodi. Odio accusantium omnis corrupti! Aperiam ipsa quas nostrum a,repellat nesciunt recusandae iusto accusantium.  mollitia in Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime debitis inventore quas architecto repellendus expedita dicta qui. Eos at officia ipsum molestiae ullam nulla, minus voluptate iusto! Mollitia, quisquam et?"
  ]

  const [imageNumber, setImageNumber] = useState(1);

  return (
    <div className='py-8 w-[120%] mb-10 mt-[3%] sm:-ml-[10%]'
      style={{ background: '#092e3d' }}
    >
 
      <div className='flex flex-row md:mx-[20%] mb-7'>

        <img src="public/avinyaLogo.png" alt="Avinya Logo" className='rounded-full' />

        <h1 className='text-4xl md:text-6xl font-fairdisplay font-bold
      bg-gradient-to-r from-pink-500 via-gray-300 to-red-500
      text-transparent bg-clip-text mx-2 pt-12 italic underlined-text2 pb-3'>AVINYA PAST EVENTS</h1>

      </div>


      <Card imageNumber={imageNumber} setImageNumber={setImageNumber} imagesList={imagesList}
        totalImage={imagesList.length} titles={titles} descriptions={imageDescriptions} />


    </div>
  )
}

export default Gallery