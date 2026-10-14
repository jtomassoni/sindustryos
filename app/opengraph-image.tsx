import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'SindustryOS: Restaurant & Bar Management Platform'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#0f1419',
          padding: 72,
          fontFamily: 'Georgia, serif',
        }}
      >
        <div style={{ display: 'flex', color: '#0d9488', fontSize: 36, letterSpacing: 4 }}>
          SINDUSTRYOS
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ display: 'flex', color: '#f4f7f8', fontSize: 64, lineHeight: 1.1, maxWidth: 900 }}>
            Stop juggling vendors. Run your place.
          </div>
          <div style={{ display: 'flex', color: '#a8b8c4', fontSize: 28, maxWidth: 800 }}>
            Website CMS, private dining CRM, and digital signage for independent restaurants and bars.
          </div>
        </div>
        <div style={{ display: 'flex', color: '#7a8f9e', fontSize: 22 }}>
          www.sindustryos.com · From $99/month
        </div>
      </div>
    ),
    { ...size }
  )
}
