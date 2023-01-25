import {
  Badge,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from '@mui/material'

export function Panel({ ...props }) {
  const { color, title, qtd, goTo, route, sx } = props

  function handleClick(route: string) {
    goTo(route)
  }

  return (
    <Card className={`rounded-xl`} sx={{ maxWidth: 345, bgcolor: color }}>
      <CardActionArea onClick={() => handleClick(route)} className=" p-4">
        <CardContent sx={{ bgColor: color }}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography
            fontSize={40}
            fontWeight={'bold'}
            className="text-center"
            color="text.secondary"
          >
            {qtd}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
