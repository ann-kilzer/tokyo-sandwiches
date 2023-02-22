import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import './HomeCard.css'
import Grid from '@mui/material/Grid'
import SandwichShop from './SandwichShop'
import SandwichShops from './SandwichShops'

export default function HomeCard() {
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
      <Typography variant="h1" my={2}>Best Sandwiches in Tokyo</Typography>
      <Typography variant="h2" my={2}>東京で一番おいしいサンドイッチ</Typography>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }} mt={4}>
          {renderShops}
        </Grid>
      </Box>

    </Container>
  )
}
