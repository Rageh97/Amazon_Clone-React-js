import React from 'react'
import { Link } from 'react-router-dom';

const BreadCrum = (props) => {
    const {title} = props;
  return (
    <div className='bread-crum mb-0 py-4'>
        <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                    <p className='text-center mb-0'><Link className='text-dark' to="">Home &nbsp;</Link> / {title}</p>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default BreadCrum
