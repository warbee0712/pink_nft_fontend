import React from 'react';

import {
	Box,
	Paper,
	Grid,
	IconButton,
	useMediaQuery
} from '@mui/material'
import { AddCircle, Diamond } from '@mui/icons-material';

let AcceleratorData_6 = [1,2,3,4,5,6];
let AcceleratorData_4 = [1,2,3,4];
let AcceleratorData_1 = [1];

const Accelerator = () => {
	const isMediumScreen = useMediaQuery('(min-width:900px)');
	const isSmallScreen = useMediaQuery('(min-width:600px)') && !isMediumScreen;
	const isExScreen = (!isMediumScreen) && (!isSmallScreen);
	
	return(
		<>
		{isMediumScreen && (
			<div style = {{marginTop:"10px", marginBottom:"10px"}}>
				<Box sx={{ flexGrow: 1 }}>
					<Grid container spacing={1}>
						{AcceleratorData_6.map((item,key) =>{
							return(
								<Grid item key = {key} md={2}>
									<Paper sx={{ backgroundColor: '#02101c', borderRadius:"90px"}}>
										<Grid container alignItems="center">
											<Grid item xs={8} textAlign="left" style={{paddingLeft:"10px"}}>
												<Diamond style={{color:"#ed63f7"}}/>&nbsp;{Math.floor(Math.random()*1000)}
											</Grid>

											<Grid item xs={4} textAlign="right">
												<IconButton area-label = "add" size = "large" style={{color:"#ed63f7"}}>
													<AddCircle/>
												</IconButton>
											</Grid>
										</Grid>
									</Paper>
								</Grid>
							)
						})}
					</Grid>
				</Box>
			</div>
		)}

		{isSmallScreen && (
			<div style = {{marginTop:"10px", marginBottom:"10px"}}>
				<Box sx={{ flexGrow: 1 }}>
					<Grid container spacing={1}>
						{AcceleratorData_4.map((item,key) =>{
							return(
								<Grid item key = {key} sm={3}>
									<Paper sx={{ backgroundColor: '#02101c', borderRadius:"90px"}}>
										<Grid container alignItems="center">
											<Grid item xs={8} textAlign="left" style={{paddingLeft:"10px"}}>
												<Diamond style={{color:"#ed63f7"}}/>&nbsp;{Math.floor(Math.random()*1000)}
											</Grid>

											<Grid item xs={4} textAlign="right">
												<IconButton area-label = "add" size = "large" style={{color:"#ed63f7"}}>
													<AddCircle/>
												</IconButton>
											</Grid>
										</Grid>
									</Paper>
								</Grid>
							)
						})}
					</Grid>
				</Box>
			</div>
		)}
		{isExScreen && (
			<div style = {{marginTop:"10px", marginBottom:"10px"}}>
				<Box sx={{ flexGrow: 1 }}>
					<Grid container spacing={1}>
						{AcceleratorData_1.map((item,key) =>{
							return(
								<Grid item key = {key} xs={12}>
									<Paper sx={{ backgroundColor: '#02101c', borderRadius:"90px"}}>
										<Grid container alignItems="center">
											<Grid item xs={8} textAlign="left" style={{paddingLeft:"10px"}}>
												<Diamond style={{color:"#ed63f7"}}/>&nbsp;{Math.floor(Math.random()*1000)}
											</Grid>

											<Grid item xs={4} textAlign="right">
												<IconButton area-label = "add" size = "large" style={{color:"#ed63f7"}}>
													<AddCircle/>
												</IconButton>
											</Grid>
										</Grid>
									</Paper>
								</Grid>
							)
						})}
					</Grid>
				</Box>
			</div>
		)}
		</>
	);
}

export default Accelerator;