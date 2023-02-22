import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import './HomeCard.css'
import Grid from '@mui/material/Grid'
import SandwichShop from './SandwichShop'

export default function HomeCard() {
  const SandwichShops = [

    { name: "Harry's Sandwich Company", image: 'harrys-sandwich.jpg', description: 'Friendly San Francisco style sandwich shop and bar in Harajuku' },
    { name: 'Bar Triad & Bar Trench', image: 'triad-trench.jpg', description: 'Craft cocktails and a great Tonkatsu sandwich' },
    { name: 'Ivy Place', image: 'ivy-place.jpg', description: 'Relaxed patio and indoor dining ad Daikanyama T-Site' },
    { name: 'Freeman Shokudo', image: 'freeman-shokudo.jpg', description: 'Cool American BBQ restaurant' },
    { name: 'Haikara Fried Chicken', image: 'haikara.jpg', description: 'Chicken Sandwiches in Akihabara' },
  ]

  const renderShops = SandwichShops.map((shop) => (
    <Grid item key={shop.name}>
      <SandwichShop
        name={shop.name}
        image={shop.image}
        description={shop.description}
      />
    </Grid>
  ))

  return (
    <Container sx={{ flexGrow: 1 }}>
      <Typography variant="h3" my={2}>Best Sandwiches in Tokyo</Typography>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }} mt={4}>
          {renderShops}
        </Grid>
      </Box>

    </Container>
  )
}
