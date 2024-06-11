import React, { useState } from 'react';
import {
	Card,
	CardHeader,
	CardContent,
	CardMedia
} from '@mui/material'

import {
	Typography,
	IconButton
} from '@mui/material'

import {
	FavoriteBorderOutlined,
	FavoriteRounded
} from '@mui/icons-material'


export default function MediaCard(props) {

	const [favourite, setFavourite] = useState(false);

	const onFavButton = () => {
		console.log(props.ImageUrl.url);
		setFavourite(!favourite);
	}

	return (
		<Card elevation={4}
			style={{borderRadius:"15px"}}
		>
			<CardHeader
				action={
					<div>
						<IconButton aria-label="settings" color='error' onClick={onFavButton}>
							{
								favourite === false ?
									<FavoriteBorderOutlined />
									: <FavoriteRounded />
							}
						</IconButton>
					</div>
				}
				subheader="350.4"
			/>
			<CardMedia
				component="img"
				image={props.ImageUrl.url}
				title="green iguana"
				style={{
					width: '90%',        // Set image width to 80% of the CardMedia container
					margin: 'auto',      // Center the image horizontally
					borderRadius: '14px', // Apply border radius to the image
					padding: '0 !important'
				}}
			/>

			<CardContent>
				<Typography variant="body2" color="text.secondary">
					Last sold on May, 06 2024
				</Typography>
			</CardContent>
		</Card>
	);
}
