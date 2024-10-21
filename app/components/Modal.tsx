import React from 'react';

interface ModalProps {
  open: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

const Modal: React.FC<ModalProps> = ({ open, onOpenChange }) => {
  const closeModal = () => onOpenChange(false);

  return (
    <div>
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-3xl p-8 relative transform transition-all duration-300 scale-95 hover:scale-100">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 transition duration-200"
            >
              &times;
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 border border-gray-300 rounded-lg p-6 shadow-md">
                <h3 className="font-semibold text-lg mb-2 text-blue-600">Expériences Professionnelles</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Chargé de communication 2013 à 2021</li>
                  <li>Assistante qualité et développement 2004 à 2013</li>
                </ul>
              </div>
              <div className="bg-gray-50 border border-gray-300 rounded-lg p-6 shadow-md">
                <h3 className="font-semibold text-lg mb-2 text-green-600">Formations</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Intégrateur Web - OpenClassrooms - 2024</li>
                  <li>BTS Communication Commerciale - 1999</li>
                </ul>
              </div>
            </div>
            <button
              onClick={closeModal}
              className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-2 rounded-full transition duration-300"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;