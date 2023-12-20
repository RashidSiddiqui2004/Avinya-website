
// ParentComponent.js
import React, { useState } from 'react';
import Modal from './Modal';

const EventSection = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const eventDetails = {
    eventTitle: "Tech Quest ",
    eventDesc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque iste quod et exercitationem tenetur, quae, expedita perspiciatis odio accusamus repudiandae hic placeat corporis eum. Dolores sit modi totam odio? Ipsam laudantium omnis vel laborum assumenda hic natus harum recusandae sapiente. onsectetur adipisicing elit. Eaque iste quod et exercitationem tenetur, quae, expedita perspiciatis odio accusamus repudiandae hic placeat corporis eum. Dolores sit modi totam odio? Ipsam laudantium omnis vel laborum assumenda hic natus harum recusandae sapiente.',
    eventDate: "20th Jan, 2022",
    eventTime: "3:00 pm",
    eventVenue: "Nescii Lawns",
    eventPoster: "event1",
  }

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal} className='ml-[45%] mb-[10%] cursor-pointer'>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={closeModal} eventDetails={eventDetails} />
    </div>
  );
};

export default EventSection;
