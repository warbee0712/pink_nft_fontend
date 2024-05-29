import React, {useEffect} from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import NFTCard from './NFTCard/index'

const ImageCount = 18;

const NFTList = () => {

	const [imageItems, setImageItems] = React.useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				let tempItem = [];

				for(let i = 1; i <= ImageCount; i++){
					const imageSrc = require(`./../../assets/NFTCard/${i}.jpg`);
					tempItem.push({url:imageSrc});
				}
				setImageItems(tempItem);
			} catch (error) {
				console.log('Error Fectching data:', error);
			} finally {}
		}
		fetchData();
	}, []);

	return (
		<div>
			<center>
				<Box sx={{ flexGrow: 1 }}>
					<Grid container spacing={1}>
						{imageItems.map((imageUrl, index) => {
							return(
								<Grid item key = {index} xs = {12} sm={3} md={2}>
									<NFTCard ImageUrl = {imageUrl}/>
								</Grid>
							);
						})}
					</Grid>
				</Box>
			</center>
		</div>
	);
}

export default NFTList