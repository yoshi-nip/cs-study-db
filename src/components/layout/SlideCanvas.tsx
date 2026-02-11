import { Paper, Stack, Typography } from '@mui/material'

const SlideCanvas = () => {
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
          スライド（仮）
        </Typography>
        <Typography variant="h4">Read Viewはいつ作られる？</Typography>
        <Typography variant="body1" color="text.secondary">
          RRでは最初のconsistent readでRead Viewが作られ、トランザクション終了まで固定されます。
        </Typography>
      </Stack>
    </Paper>
  )
}

export default SlideCanvas
