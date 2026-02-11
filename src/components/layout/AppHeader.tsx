import { AppBar, Toolbar, Typography } from '@mui/material'

// AppBar/ToolbarはHTMLのheader + nav領域のような役割（上部の枠と中身の整列）

const AppHeader = () => {
  return (
    <AppBar position="static" color="default" elevation={0}>
      <Toolbar sx={{ gap: 2 }}>
        <Typography variant="h6" fontWeight={700}>
          DB学習スライド
        </Typography>
        <Typography variant="body2" color="text.secondary">
          MVCC / Read View / ロックをやさしく理解する
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default AppHeader
