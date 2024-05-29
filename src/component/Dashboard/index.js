import React from 'react';
import { 
	Button,
	Paper,
	Grid,
	Typography
} from '@mui/material';
import {
	ArrowCircleDown,
	Event,
	FiberNew,
	Paid
} from '@mui/icons-material';

const Dashboard = () => {
	return (
		<div>
			<center>
			
				<div style={{background:"#3333dd", marginTop:"20px", backgroundImage:'url("/background.jpg")',
					backgroundSize: 'cover', // Cover the entire width
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
					width: '100%',
					height: '600px', // Maintain the desired height
				}}>
					<Grid container spacing={2} justifyContent="center" alignItems="center" style={{width:"95%"}}>
						<Grid item xs = {12} sm = {4} md = {3}>
							<Button variant='contained' color="error" size='large' style={{ fontSize: "20px", borderRadius:"40px" }}>Buy Now</Button>
						</Grid>
						<Grid item xs = {12} sm = {8} md = {3}>
							<Paper
								elevation={3}
								style={{
									display: 'inline-block', // Ensures the Paper width is determined by its content
									padding: "10px 20px", // Adjust padding to match desired styling
									borderRadius: "50px",
									fontSize: "15px",
									opacity:0.8,
									width:'100%',
									height: '100%', // Match the height of the button
									whiteSpace: 'nowrap', // Prevents text wrapping
									overflow: 'hidden', // Hides overflow content
									textOverflow: 'ellipsis', // Adds ellipsis (...) if content overflows
								}}
							>
								<Typography variant="subtitle1" style={{ margin: 0 }}><Event/>&nbsp;(Jun, 4) : NFT Auction</Typography>
							</Paper>
						</Grid>
						<Grid item xs = {12} sm = {6} md = {3}>
							<Paper
								elevation={3}
								style={{
									display: 'inline-block', // Ensures the Paper width is determined by its content
									padding: "10px 20px", // Adjust padding to match desired styling
									borderRadius: "50px",
									opacity:0.8,
									width:'100%',
									fontSize: "15px",
									height: '100%', // Match the height of the button
									whiteSpace: 'nowrap', // Prevents text wrapping
									overflow: 'hidden', // Hides overflow content
									textOverflow: 'ellipsis', // Adds ellipsis (...) if content overflows
								}}
							>
								<Typography variant="subtitle1" style={{ margin: 0 }}><FiberNew/> : NEWS</Typography>
							</Paper>
						</Grid>
						<Grid item xs = {12} sm = {6} md = {3}>
							<Paper
								elevation={3}
								style={{
									display: 'inline-block', // Ensures the Paper width is determined by its content
									padding: "10px 20px", // Adjust padding to match desired styling
									borderRadius: "50px",
									opacity:0.8,
									width:'100%',
									fontSize: "15px",
									height: '100%', // Match the height of the button
									whiteSpace: 'nowrap', // Prevents text wrapping
									overflow: 'hidden', // Hides overflow content
									textOverflow: 'ellipsis', // Adds ellipsis (...) if content overflows
								}}
							>
								<Typography variant="subtitle1" style={{ margin: 0 }}><Paid/>&nbsp; Pinky : <ArrowCircleDown />1.44%</Typography>
							</Paper>
						</Grid>
					</Grid>
				</div>
			</center>
		</div>
	);
}

export default Dashboard