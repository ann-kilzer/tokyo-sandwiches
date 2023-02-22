/* eslint-disable react/prop-types */
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia'

import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'

function SandwichShop(props) {
  const { name, image, description } = props
  return (
    <Card sx={{ width: 300 }}>
      <CardHeader title={name} />
      <CardMedia
        component="img"
        height="194"
        image={`/tokyo-sandwiches/${image}`}
        alt="Sandwich"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default SandwichShop;
