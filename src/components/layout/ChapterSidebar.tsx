import { Paper, Stack, Typography } from '@mui/material'

const ChapterSidebar = () => {
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
          章一覧（仮）
        </Typography>
        <Typography variant="body2">第0章 イントロ</Typography>
        <Typography variant="body2">第1章 SQL基礎</Typography>
        <Typography variant="body2">第2章 Read View</Typography>
        <Typography variant="body2">第3章 自己可視性</Typography>
      </Stack>
    </Paper>
  )
}

export default ChapterSidebar
