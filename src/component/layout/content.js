import React from 'react';

import Dashboard from './../Dashboard/index'
import Accelerator from '../Accelerator';
import NFTList from './../NFTList/index'

const Content = () => {
	return (
		<center>
			<div>
				<Dashboard/>
				<div style = {{width:"95%"}}>
				<Accelerator/>
				<NFTList/>
				</div>
			</div>
		</center>
	);
}

export default Content