import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-600">
        <div className="w-5/6 pt-10 pb-10 flex justify-between mx-auto">
            <a className="text-white" href="">Home</a>
            <a  className="text-white" href="">About</a>
            <a  className="text-white" href="">Contacts</a>
            <a  className="text-white" href="">Hire</a>
            <a  className="text-white" href="">Post Job</a>
        </div>

    </footer>
  )
}

export default Footer