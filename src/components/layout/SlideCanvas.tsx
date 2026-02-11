import { Paper, Stack, Typography } from '@mui/material'
import slides from '../../data/slides.json'
import type { SlideContent } from '../../types/content'

const SlideCanvas = () => {
  const slide = slides[0] as SlideContent

  return (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 2, md: 4 },
        minHeight: 360,
        border: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Stack spacing={2}>
        <Typography variant="overline" color="text.secondary">
          {slide.chapter}
        </Typography>
        <Typography variant="h4">{slide.title}</Typography>
        <Stack spacing={1}>
          {slide.bullets.map((bullet) => (
            <Typography key={bullet} variant="body1" color="text.secondary">
              ・{bullet}
            </Typography>
          ))}
        </Stack>
      </Stack>
    </Paper>
  )
}

export default SlideCanvas
