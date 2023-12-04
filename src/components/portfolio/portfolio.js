import React from 'react'
import './portfolio.css'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Project1 from '../../assets/project1.png'
import Project2 from '../../assets/portfolio-1.png'
import Project3 from '../../assets/portfolio-1.png'
import Project4 from '../../assets/portfolio-1.png'
import { Chip, colors, createTheme, ThemeProvider, useTheme} from '@mui/material';
import theme from '../../theme.js'

const Portfolio = () => {
  return (
    
    <ThemeProvider theme={theme}>
    <section id='portfolio'>
      <Typography variant='h3' sx={{justifyContent:'center', alignItems:'center',justifySelf:'center',alignItems:'center'}}>
        Portfolio
      </Typography>
      <Grid container spacing = {0} alignItems='center' justifyContent='center' display='flex' columns={5}>
        <Grid item xs = {2}>
          <Card sx={{
            maxWidth: '400px',
            borderRadius: '12px'
            }}>
            {/* Card Image */}
            <CardMedia
              component='img'
              alt='project image'
              height={300}
              image={Project1}
            />
            <CardContent 
            sx={{
              bgcolor: 'background.lightgray'
            }}>
              {/* Title */}
              <Typography gutterBottom variant='h5' component='div' color={'white'}>
                Dynamic Grocery List
              </Typography>
              {/* Descripton */}
              <Typography color="white"
              sx={{
                fontWeight: '200',
                fontSize: '14px'
              }}>
                • Created a cross platform mobile application to create collaborative grocery lists on iOS and Android<br/>
                • Leveraged React Native framework to use native components for iOS and Android with one codebase<br/>
                • Incorporated Firebase with FireAuth for authentication and Firestore as a NoSQL database<br/>

              </Typography>
              <Typography gutterBottom variant='subtitle1' component='div' color={'white'} 
              sx={{
                my: 1,
                justifySelf: 'center'
              }}>
                Stack:
              </Typography>
              <Chip label='React Native' variant='outlined' color='primary' sx={{m:1}}/>
              <Chip label='Firebase' variant='outlined' color='primary' sx={{m:1}}/>
              <Chip label='Expo' variant='outlined' color='primary' sx={{m:1}}/>
              <Chip label='Javascript' variant='outlined' color='primary' sx={{m:1}}/>
              <Chip label='Typescript' variant='outlined' color='primary' sx={{m:1}}/>
            </CardContent>
          </Card>
        </Grid>
        <Grid item sm={2}>
          <img src={Project1} alt="" />
        </Grid>
        <Grid item sm={2}>
          <img src={Project1} alt="" />
        </Grid>
        <Grid item sm={2}>
          <img src={Project1} alt="" />
        </Grid>
      </Grid>
    </section>
    </ThemeProvider>
  )
}

export default Portfolio