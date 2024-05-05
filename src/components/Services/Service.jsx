import React from 'react'

function Service({img, name, highlight, text}) {
  return (
		<div className="service row">
			<img
				src={`/services/${img}.jpeg`}
				alt={name + highlight}
				className="col-md-5 p-0"
			/>
			<div className="text col-md-6 p-4">
				<h1>
					{name} <span>{highlight}</span>
				</h1>
				<p className='mt-3'>
					{text}
				</p>
			</div>
		</div>
  );
}

export default Service