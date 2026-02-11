import { Paper, Stack, Typography } from '@mui/material'

const GlossaryPanel = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 2,
        height: '100%',
        display: { xs: 'none', lg: 'block' },
        border: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Stack spacing={2}>
        <Typography variant="subtitle2" color="text.secondary">
          用語解説（右サイドパネル）
        </Typography>
        <Typography variant="body2" color="text.secondary">
          用語を選ぶとここに詳解が表示されます。
        </Typography>
      </Stack>
    </Paper>
  )
}

export default GlossaryPanel
