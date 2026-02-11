import { Box } from '@mui/material'
import AppHeader from './AppHeader'
import ChapterSidebar from './ChapterSidebar'
import SlideCanvas from './SlideCanvas'
import GlossaryPanel from './GlossaryPanel'

const AppLayout = () => {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <AppHeader />
      {/* 大枠は3カラム構成。左右は補助情報、中央がメイン表示 */}
      <Box
        component="main"
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', lg: '240px 1fr 320px' },
          gap: 2,
          p: { xs: 2, md: 3 },
        }}
      >
        <ChapterSidebar />
        <SlideCanvas />
        <GlossaryPanel />
      </Box>
    </Box>
  )
}

export default AppLayout
