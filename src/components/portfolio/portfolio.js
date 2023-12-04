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
      <h2>Portfolio</h2>
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
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
              
              <Chip label='test' variant='outlined' color='primary'/>
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