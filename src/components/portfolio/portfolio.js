import React from 'react'
import './portfolio.css'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Project1 from '../../assets/Cover.png'
import Project2 from '../../assets/readyup.png'
import Project3 from '../../assets/website.png'
import GitHubIcon from '@mui/icons-material/GitHub';
import { Chip, IconButton, ThemeProvider } from '@mui/material';
import theme from '../../theme.js'

const Portfolio = () => {
  return (
    
    <ThemeProvider theme={theme}>
    <section id='portfolio'>
    {/* Section title */}
      <Typography variant='h1' justifyContent='center' 
      sx={{
        textAlign:'center', 
        display:'flex', 
        fontSize:'3rem', 
        my: 6,
        fontWeight:'900',
      }}>
        Portfolio
      </Typography>
      {/* Grid container */}
      <Grid columns={{ xs: 4, sm: 8, md: 12 }}
      container 
      rowSpacing={10}
      justifyContent='center' 
      alignItems="center"
      spacing={0}
      display='flex'
      minHeight='100vh'
      
      sx={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(600px, 1fr))'
      }}>
      
      {/* Project 1 */}
      <Grid item sm={12}
          display='flex'
          justifyContent='center' 
          alignItems="center">
          <div className='flex'>
            <Card sx={{
              maxWidth: '400px',
              borderRadius: '12px',
              height: '700px',
              bgcolor: 'background.lightgray',
              alignSelf: 'center',
              }}>
              {/* Card image */}
              <CardMedia
                component='img'
                alt='project image'
                height={300}
                image={Project1}
                sx={{borderRadius: '12px',
                borderBottomLeftRadius: '0px',
                borderBottomRightRadius: '0px',
                }}
              />
              {/* Card description */}
              <CardContent 
              sx={{
                bgcolor: 'background.lightgray',
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
                <Chip label='Typescript' variant='outlined' color='primary' sx={{m:1}}/><br/>
                <IconButton aria-label='github' size='large' color='primary' textAlign='center' justifyContent='center' href='https://github.com/ChrisNguCS/portfolio'>
                
                <GitHubIcon fontSize='12px'/>
                </IconButton>
              </CardContent>
            </Card>
          </div>
        </Grid>
        {/* Project 2 */}
        <Grid item sm={12} 
          display='flex'
          justifyContent='center' 
          alignItems="center"
          >
        <Card sx={{
            maxWidth: '400px',
            borderRadius: '12px',
            height: '700px',
            bgcolor: 'background.lightgray'
            }}>
            {/* Card Image */}
            <CardMedia
              component='img'
              alt='project image'
              height={300}
              image={Project2}
            />
            <CardContent 
            sx={{
              bgcolor: 'background.lightgray'
            }}>
              {/* Title */}
              <Typography gutterBottom variant='h5' component='div' color={'white'}>
                Ready Up! Discord Bot
              </Typography>
              {/* Descripton */}
              <Typography color="white"
              sx={{
                fontWeight: '200',
                fontSize: '14px'
              }}>
                • Developed an automated bot with Python for tier 2-3 professional gaming organizations<br/>
                • Integrated with Discord to wait for user commands to start queues and schedule matches<br/>
                • Multi-threaded tasks to use Schedule library and run bot processes in parallel<br/>
                • Stored data using SQLite3 to store and edit server specific IDs for multi-server use<br/>
              </Typography>
              <Typography gutterBottom variant='subtitle1' component='div' color={'white'} 
              sx={{
                my: 1,
                justifySelf: 'center'
              }}>
                Stack:
              </Typography>
              <Chip label='Python' variant='outlined' color='primary' sx={{m:1}}/>
              <Chip label='Discord.py' variant='outlined' color='primary' sx={{m:1}}/>
              <Chip label='OS' variant='outlined' color='primary' sx={{m:1}}/>
              <Chip label='SQLite' variant='outlined' color='primary' sx={{m:1}}/>
              <IconButton aria-label='github' size='large' color='primary' href='https://github.com/ChrisNguCS/Ready-Up-Discord-Bot'>
                <GitHubIcon fontSize='12px' />
              </IconButton>
            </CardContent>
          </Card>        
          </Grid>
        {/* Project 3 */}
        <Grid item sm={12} 
          display='flex'
          justifyContent='center' 
          alignItems="center">
          <Card sx={{
              maxWidth: '400px',
              borderRadius: '12px',
              height: '700px',
              bgcolor: 'background.lightgray'
              }}>
              {/* Card Image */}
              <CardMedia
                component='img'
                alt='project image'
                height={300}
                image={Project3}
              />
              <CardContent 
              sx={{
                bgcolor: 'background.lightgray'
              }}>
                {/* Title */}
                <Typography gutterBottom variant='h5' component='div' color={'white'}>
                  Portfolio Website
                </Typography>
                {/* Descripton */}
                <Typography color="white"
                sx={{
                  fontWeight: '200',
                  fontSize: '14px',
                }}>
                    • Developed a professional portfolio website showcasing skills and projects using React.js<br/>
                    • Utilized Material-UI components to create modern and responsive project cards<br/>
                    • Used responsive web design principles, ensuring a seamless user experience across various devices and
                    screen size<br/>
                </Typography>
                <Typography gutterBottom variant='subtitle1' component='div' color={'white'} 
                sx={{
                  my: 1,
                  justifySelf: 'center'
                }}>
                  Stack:
                </Typography>
                <Chip label='React' variant='outlined' color='primary' sx={{m:1}}/>
                <Chip label='Material UI' variant='outlined' color='primary' sx={{m:1}}/>
                <Chip label='Javascript' variant='outlined' color='primary' sx={{m:1}}/>
                <Chip label='HTML' variant='outlined' color='primary' sx={{m:1}}/>
                <Chip label='CSS' variant='outlined' color='primary' sx={{m:1}}/>
                <br/>
                <IconButton aria-label='github' size='large' color='primary' href='https://github.com/ChrisNguCS/portfolio-website'>
                  <GitHubIcon fontSize='12px'/>
                </IconButton>
              </CardContent>
          </Card>
        </Grid>
        <Grid item sm={6}>
          <Card sx={{
              maxWidth: '400px',
              borderRadius: '12px',
              height: '700px',
              bgcolor: 'background.lightgray',
              display: 'none'
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
                <IconButton aria-label='github' size='large' color='primary'>
                  <GitHubIcon fontSize='12px'/>
                </IconButton>
              </CardContent>
          </Card>
        </Grid>
      </Grid>
    </section>
    </ThemeProvider>
  )
}

export default Portfolio