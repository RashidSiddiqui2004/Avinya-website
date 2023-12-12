
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

  const mobileDescriptions = [
    "Lorem, ipsum dolor sit amet consectetur distinctio ab adipisci dolorum cupiditate  expedita atque culpa rem nostrum, recusandae, officia sed laborum, odit repudiandae magnam nisi sint sapiente soluta.",
    "Lorem, ipsum dolor sit amet consectetur distinctio ab adipisci dolorum cupiditate  expedita atque culpa rem nostrum, recusandae, officia sed laborum, odit repudiandae magnam nisi sint sapiente soluta.",
    "Lorem, ipsum dolor sit amet consectetur distinctio ab adipisci dolorum cupiditate  expedita atque culpa rem nostrum, recusandae, officia sed laborum, odit repudiandae magnam nisi sint sapiente soluta.",
    "Lorem, ipsum dolor sit amet consectetur distinctio ab adipisci dolorum cupiditate  expedita atque culpa rem nostrum, recusandae, officia sed laborum, odit repudiandae magnam nisi sint sapiente soluta.",
    "Lorem, ipsum dolor sit amet consectetur distinctio ab adipisci dolorum cupiditate  expedita atque culpa rem nostrum, recusandae, officia sed laborum, odit repudiandae magnam nisi sint sapiente soluta.",
  ]

  const [imageNumber, setImageNumber] = useState(1);

  return (
    <div className='py-8 w-[120%] md:w-[120%] mb-10 mt-[3%] sm:-ml-[10%]'

    >

      <div className='flex flex-row mx-[30%] sm:mx-[20%] mb-7'>
        <img src="/avinyaLogo.png" alt="Avinya Logo" className='rounded-full' />

        <h1 className='text-5xl md:text-6xl ml-16 md:ml-8 font-bold headerAkira mt-9
        akira'>AVINYA PAST EVENTS</h1>

      </div>

      <Card imageNumber={imageNumber} setImageNumber={setImageNumber} imagesList={imagesList}
        totalImage={imagesList.length} titles={titles} descriptions={imageDescriptions}
        mobileDescriptions={mobileDescriptions} />

      <div className='bg-slate-600 h-[4px] my-5 rounded-se-3xl rounded-bl-none
      rounded-e-xl rounded-ee-full w-[50%] mx-[25%] md:w-[50%] md:mx-[25%] transition-all'>
        <div className={`bg-red-600 w-${imageNumber}/5 h-full rounded-xl transition-all`}>
        </div>
      </div>

    </div>
  )
}

export default Gallery