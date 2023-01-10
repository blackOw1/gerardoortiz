import { useState } from 'react';

export default ({ onOpen, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHandler = () => {
    setIsOpen(!isOpen);

    if (!isOpen) onOpen();
    if (isOpen) onClose();
  };

  return [isOpen, toggleHandler];
};
