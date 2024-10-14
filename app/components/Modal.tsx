import React from 'react';

interface ModalProps {
    open: boolean;
    onOpenChange: (isOpen: boolean) => void;
}

const Modal: React.FC<ModalProps> = ({ open, onOpenChange }) => {
    const closeModal = () => onOpenChange(false); // Fonction pour fermer la modal

    return (
        <div>
            {open && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center">
                    <div className="bg-gray-300 rounded-lg shadow-lg w-11/12 max-w-2xl p-8 relative"> {/* Changez la couleur de fond ici */}
                        <button 
                            onClick={closeModal} 
                            className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 transition duration-200"
                        >
                            &times; {/* Croix pour fermer la modal */}
                        </button>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-gray-50 border border-gray-300 rounded-lg p-6 shadow-md">
                                <h3 className="font-semibold text-lg mb-2">Expériences Professionnelles</h3>
                                <p className="text-gray-700">Chargé de communication 2013 à 2021</p>
                                <p className="text-gray-700">Assistante qualité et développement 2004 à 2013</p>
                            </div>
                            <div className="bg-gray-50 border border-gray-300 rounded-lg p-6 shadow-md">
                                <h3 className="font-semibold text-lg mb-2">Formations</h3>
                                <p className="text-gray-700">Développement Web - OpenClassrooms - 2024</p>
                            </div>
                        </div>
                        <button 
                            onClick={closeModal} 
                            className="mt-6 w-full bg-orange-300 hover:bg-orange-400 text-gray-900 font-bold px-6 py-2 rounded-full transition duration-300"
                        >
                            Fermer
                        </button> {/* Style du bouton Fermer mis à jour */}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Modal;